import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://movienotes-backend.onrender.com',
})
