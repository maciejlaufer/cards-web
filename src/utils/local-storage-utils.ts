interface LocalStorageItems {
  'auth-token': string;
}

export function getItem(key: keyof LocalStorageItems): string | null {
  const localStorageValue = localStorage.getItem(key);

  if (!localStorageValue) {
    return null;
  }

  try {
    return JSON.parse(localStorageValue);
  } catch (err) {
    return localStorageValue;
  }
}

export function setItem(key: keyof LocalStorageItems, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    throw Error(`Error while saving value of ${key} key to local storage`);
  }
}

export function removeItem(key: keyof LocalStorageItems): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    throw Error(`Error while removing value of ${key} key to local storage`);
  }
}

const LocalStorageUtils = {
  getItem,
  setItem,
  removeItem,
};

export default LocalStorageUtils;
