import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { FormLogin } from '@type/auth'

const AUTH_PREFIX = {
  LOGIN: '/login',
  LOGOUT: '/logout'
}

const apiAuth = (axios: AxiosInstance) => ({
  login(formData: AxiosRequestConfig<FormLogin>) {
    return axios.get(AUTH_PREFIX.LOGIN, formData)
  },

  logout() {
    return axios.post(AUTH_PREFIX.LOGOUT)
  }
})

export default apiAuth
