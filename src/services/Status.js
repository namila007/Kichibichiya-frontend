import Api from '@/services/Api'
// h
export default {
  async getUserStatus (user) {
    console.log(user._id, ' ddd')
    const res = await Api().get('/status/user_timeline', {
      params: {
        username: user.username
      }
    })
    console.log(res)
    return res
  }
}
