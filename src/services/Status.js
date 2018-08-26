import Api from '@/services/Api'
// h
export default {
  getUserStatus (user) {
    return Api().get('/status/user_timeline', {
      params: {
        username: user.username
      }
    })
  },
  createFavourite (data) {
    return Api().post('/status/favourite/create', data)
  },
  deleteFavourite (data) {
    return Api().post('/status/favourite/destroy', data)
  }
}
