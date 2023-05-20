import { useState, useEffect } from 'react';

/* HANDLES SETTING AND GETTING A VARIABLE IN localStorage */
function useLocalStorage(varKey, defaultVar) {
  let [loadingState, setLoadingState] = useState(true)
  let [error, setError] = useState(false)
  let [stateVar, setStateVar] = useState(defaultVar)

  useEffect(() => {
    try {
      let storageVar = localStorage.getItem(varKey)
      let parsedVar

      if(!storageVar) {
        localStorage.setItem(varKey, JSON.stringify(defaultVar))
        parsedVar = defaultVar
      } else {
        parsedVar = JSON.parse(storageVar)
        setStateVar(parsedVar)
      }
      setLoadingState(false)
    } catch(error) {
      setLoadingState(false)
      setError(true)
    }
  }, [])

  const setVar = (newValue) => { 
    localStorage.setItem(varKey, JSON.stringify(newValue))
    setStateVar(newValue)
  }

  return {
    stateVar, 
    setVar, 
    loadingState, 
    error}
}

export { useLocalStorage }