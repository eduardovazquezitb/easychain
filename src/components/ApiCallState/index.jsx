import { useEffect, useState } from 'react'

const useApiCallState = ({ query = null, queryParams = null }) => {
  const [apiCallState, setApiCallState] = useState({ state: 'pending', data: {} })
  useEffect(() => {
    setApiCallState({ state: 'pending', data: {} })
    let promise
    if (!query || !(promise = query(queryParams))) {
      console.error('Incorrect Input')
      setApiCallState({ state: 'error', data: {} })
    } else if (!(promise instanceof Promise)) {
      setApiCallState({ state: 'resolved', data: promise })
    } else {
      promise.then(response => response.json())
        .then(response => setApiCallState({ state: 'resolved', data: response }))
        .catch(error => {
          console.error(error)
          setApiCallState({ state: 'error', data: {} })
        })
    }
  }, [query, queryParams])
  return apiCallState
}

export default useApiCallState
