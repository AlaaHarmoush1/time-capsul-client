import { toast } from 'react-toastify'

export const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org')
      const data = await response.text()
      localStorage.setItem('userIP', data)
      document.cookie = `userIP=${data}; path=/; max-age=31536000; secure; samesite=strict` 
      return data
    } catch (error) {
      toast.error('Error fetching IP address')
      return ('Unable to fetch IP address')
    }
  }