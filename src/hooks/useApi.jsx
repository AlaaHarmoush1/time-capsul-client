import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useApi = (url, method = 'get', body = null, headers = {}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    
    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers,
      })

      setData(response.data)
      setError(null)
    } catch (err) {
      setError(err)
    }
  }, [url, method, body, headers])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, error, refetch: fetchData }
}

export default useApi
