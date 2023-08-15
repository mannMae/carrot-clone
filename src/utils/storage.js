const storagePrefix = 'carrot_clone_';

export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`));
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`));
  },
  setUser: (uid) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(uid));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};
