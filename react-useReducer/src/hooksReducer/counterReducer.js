export let defaultState = {
  count:0
}

export const CounterReducer = (state=defaultState, action)=>{
  switch (action.type) {
    case "dec":
      return {...state, ...action.payload}
    case "inc":
      return {...state, ...action.payload}
    default:
      return state
  }
  // console.log(state.count,action)
  // state.count = action.payload.count //state这是个引用类型的
  // qreturn {...state, ...action.payload} //需要返回一个新的地址
}
