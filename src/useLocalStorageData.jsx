import { useState, useEffect } from "react";

const initialValue = {
  name: "",
  email: "",
  phone: "",
  plan: {
    type: "Arcade",
    period: false,
  },
  addons: {
  },
};

function getLocalStorageData(key, initValue = [initialValue]) {
  const localValue = window.localStorage.getItem(key);
  const saved = JSON.parse(localValue);
  return saved || initValue;
}

export const useLocalStorageData = (key, initValue) => {
  const [savedData, setSavedData] = useState(() => {
    return getLocalStorageData(key, initValue);
  });

  useEffect(() => {
    if (savedData !== null && savedData !== undefined) {
      window.localStorage.setItem(key, JSON.stringify(savedData));
    }
  }, [key, savedData]);

  return [savedData, setSavedData];
};


export const useLocalStorageFormsData = (key, newFormData) => {
  const [forms, setForms] = useState(() => {
    return getLocalStorageData(key, []);
  });

  useEffect(() => {
    if (newFormData !== null && newFormData !== undefined) {
      const updatedForms = [...forms, newFormData];
      setForms(updatedForms);
      window.localStorage.setItem(key, JSON.stringify(updatedForms));
    }
  }, [key, newFormData]);

  return [forms, setForms];
};

