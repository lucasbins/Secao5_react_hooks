export function login(dispatch, name) {
  /*
  fetch('url')
    .then(resp => resp.json())
    .then(json => dispatch({ type: 'userListReady', payload: json}))
  */
  dispatch({ type: 'login', payload: name})
}