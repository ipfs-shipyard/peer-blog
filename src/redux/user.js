const initialState = {
  auth: null,
  roles: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: true,
        roles: ['admin']
      }
    case 'LOGOUT':
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}

export const loginAction = () => dispatch =>
  setTimeout(() => {
    dispatch({ type: 'LOGIN' })
  }, 200)

export const logoutAction = () => dispatch =>
  setTimeout(() => {
    dispatch({ type: 'LOGOUT' })
  }, 200)
