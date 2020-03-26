
let defaultState = {
  username:localStorage['username'] ? localStorage['username'] : "",
  isLogin:localStorage['isLogin'] ? Boolean(localStorage['isLogin']) : false
}

function userReducer(state=defaultState, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action)
      localStorage['username'] = action.payload.username
      localStorage['isLogin'] = true
      console.log(action.payload.username)
      return Object.assign({}, state, action.payload)
    case "OUTLOGIN": //安全退出
      localStorage.clear()
      return Object.assign({}, state, {username:"", isLogin:false})
    default:
      return state
  }

} 

export default userReducer