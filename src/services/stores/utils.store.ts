export const getFromLocalStorage = (localStorageKey: string): any => {
  const data = localStorage.getItem(localStorageKey);
  if (!data || data === 'undefined') return null;
  return JSON.parse(data);
};

export const setToLocalStorage = (localStorageKey: string, data: any) => {
  return localStorage.setItem(localStorageKey, JSON.stringify(data));
};

export const removeFromLocalStorage = (localStorageKey: string) => {
  return localStorage.removeItem(localStorageKey);
};
