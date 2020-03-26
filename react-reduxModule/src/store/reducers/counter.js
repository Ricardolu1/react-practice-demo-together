function counterReducer(state={count:0}, action) {
  switch (action.type) {
    case 'INC':
      return {...state, ...action.payload}
      // return Object.assign({}, state, action.payload)
    case 'DEC':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default counterReducer