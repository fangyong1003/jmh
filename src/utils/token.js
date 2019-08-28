export function setToken (token) {
  window.localStorage.setItem('__token__', token);
}

export function getToken () {
  return window.localStorage.getItem('__token__') || '';
}

export function removeToken() {
  window.localStorage.removeItem('__token__');
}
export function removeKey(key) {
  window.localStorage.removeItem(key);
}

export function getKey (key) {
  return window.localStorage.getItem(key) || '';
}

export function setKey (key,val) {
  window.localStorage.setItem(key, val);
}

export function setSessionKey (key,val) {
  window.sessionStorage.setItem(key, val);
}

export function getSessionKey (key,val) {
  window.sessionStorage.getItem(key);
}
