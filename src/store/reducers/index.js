export function reducer(state, action){
  switch(action.type){
      case 'numberAdd2':
          return {...state, number: state.number + 2}
      case 'mult7':
          return {...state, number: state.number * 7}
      case 'div25':
          return {...state, number: parseInt(state.number / 25)}
      case 'addNumber':
          return {...state, number: state.number + action.payload}
      case 'login':
          return {...state, user: {name: action.payload}}
      default:
          return state
  }
}