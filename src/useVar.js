import { useState } from 'react';

/* HANDLES SETTING AND GETTING A VARIABLE IN localStorage */
function useLocalStorage(varKey, defaultVar) {

  let storageVar = localStorage.getItem(varKey)
  let parsedVar

  if(!storageVar) {
    localStorage.setItem(varKey, JSON.stringify(defaultVar))
    parsedVar = []
  } else {
    parsedVar = JSON.parse(storageVar)
  }

  const setVar = (newValue) => { 
    localStorage.setItem(varKey, JSON.stringify(newValue)) }

  return [parsedVar, setVar]
}


/* HANDLES VARIABLE SETTING AND GETTING IN LOCALSTORAGE AND STATE */
function useVar(varKey, defaultVar) {

  let [storageVar, setStorageVar] = useLocalStorage(varKey, defaultVar)
  let [stateVar, setStateVar] = useState(storageVar)
  
  const saveVar = (newVar) => {
    setStorageVar(newVar)
    setStateVar(newVar)
  }

  return [stateVar, saveVar]
}

export { useLocalStorage, useVar }