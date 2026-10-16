// Rappel quotidien, sans serveur : chargé dans le service worker (workbox.importScripts, voir vite.config.ts).
// Chrome Android réveille l'appli installée via « periodicsync » (en général une fois par jour, au moment
// qu'il choisit). L'état (accès activés, heure souhaitée, dernier jour d'activité) est écrit par la page
// dans IndexedDB : le service worker n'a pas accès au localStorage.
/* eslint-disable no-restricted-globals */
var REMINDER_DB = 'english-app-reminder'

function reminderDb() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open(REMINDER_DB, 1)
    req.onupgradeneeded = function () { req.result.createObjectStore('kv') }
    req.onsuccess = function () { resolve(req.result) }
    req.onerror = function () { reject(req.error) }
  })
}

function reminderGet(key) {
  return reminderDb().then(function (db) {
    return new Promise(function (resolve) {
      var r = db.transaction('kv', 'readonly').objectStore('kv').get(key)
      r.onsuccess = function () { resolve(r.result || null) }
      r.onerror = function () { resolve(null) }
    })
  }).catch(function () { return null })
}

function reminderPut(key, value) {
  return reminderDb().then(function (db) {
    return new Promise(function (resolve) {
      var tx = db.transaction('kv', 'readwrite')
      tx.objectStore('kv').put(value, key)
      tx.oncomplete = function () { resolve() }
      tx.onerror = function () { resolve() }
    })
  }).catch(function () {})
}

function dayKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
}

function checkReminders() {
  return reminderGet('editions').then(function (all) {
    if (!all) return
    var now = new Date()
    var today = dayKey(now)
    var jobs = Object.keys(all).map(function (id) {
      var s = all[id]
      // Activé, pas encore d'exercice aujourd'hui, pas déjà rappelé, et pas avant l'heure choisie ni la nuit.
      if (!s || !s.enabled || s.lastActive === today || s.lastNotified === today) return null
      if (now.getHours() < s.hour || now.getHours() >= 23) return null
      var msg = s.messages[Math.floor(Math.random() * s.messages.length)]
      s.lastNotified = today
      return self.registration.showNotification(msg.title, {
        body: msg.body,
        icon: 'icons/icon-192-tea.png',
        badge: 'icons/icon-192-tea.png',
        tag: 'daily-reminder-' + id,
        data: { url: s.url },
      })
    }).filter(Boolean)
    return Promise.all(jobs).then(function () { return reminderPut('editions', all) })
  })
}

self.addEventListener('periodicsync', function (event) {
  if (event.tag === 'daily-reminder') event.waitUntil(checkReminders())
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  var url = (event.notification.data && event.notification.data.url) || './'
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) if ('focus' in list[i]) return list[i].focus()
      return self.clients.openWindow(url)
    }),
  )
})
