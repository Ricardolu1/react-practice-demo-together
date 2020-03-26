export  function incCount(payload) {
  return {
    type:"INC",
    payload
  }
}
export  function decCount(payload) {
  return {
    type:"DEC",
    payload
  }
}