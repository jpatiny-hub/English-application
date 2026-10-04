// Journal d'erreurs local (affiché dans « Progrès » pour pouvoir le transmettre) et garde-fous DOM.
export const ERRORS_KEY = 'english-app:errors'

export interface LoggedError {
  at: string
  page: string
  message: string
}

export function logError(message: string) {
  try {
    const log = readErrors()
    log.push({ at: new Date().toISOString(), page: window.location.hash, message: message.slice(0, 300) })
    localStorage.setItem(ERRORS_KEY, JSON.stringify(log.slice(-20)))
  } catch {
    // stockage indisponible : tant pis
  }
}

export function readErrors(): LoggedError[] {
  try {
    const raw = localStorage.getItem(ERRORS_KEY)
    return raw ? (JSON.parse(raw) as LoggedError[]) : []
  } catch {
    return []
  }
}

export function clearErrors() {
  try {
    localStorage.removeItem(ERRORS_KEY)
  } catch {
    // ignore
  }
}

/**
 * Les traducteurs automatiques et certaines extensions déplacent les nœuds texte de la page.
 * React plante alors (« removeChild / insertBefore : not a child of this node ») et l'appli disparaît.
 * Ce correctif bien connu ignore ces opérations devenues impossibles au lieu de tout faire planter.
 */
export function installDomGuards() {
  if (typeof Node !== 'function' || !Node.prototype) return
  const proto = Node.prototype as Node & { __englishGuarded?: boolean }
  if (proto.__englishGuarded) return
  proto.__englishGuarded = true

  const originalRemoveChild = Node.prototype.removeChild
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      logError('DOM modifié par un outil externe (removeChild)')
      return child
    }
    return originalRemoveChild.call(this, child) as T
  }

  const originalInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) {
      logError('DOM modifié par un outil externe (insertBefore)')
      return originalInsertBefore.call(this, node, null) as T
    }
    return originalInsertBefore.call(this, node, ref) as T
  }
}
