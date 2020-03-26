export  function login(payload) {
  return {
    type:"LOGIN",
    payload
  }
}
export  function outLogin() {
  return {
    type:"OUTLOGIN"
  }
}