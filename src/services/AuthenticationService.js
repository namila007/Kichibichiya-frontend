import Api from '@/services/Api'
// h
export default {
  register (credentials) {
    return Api().post('user/signup', credentials)
  },

  login (credentials) {
    return Api().post('user/login', credentials)
  },
  twitter () {
    return Api().get('/auth/twitter')
  }

}
