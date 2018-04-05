const initialState = {
  role: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN':
      return {
        ...state,
        role: 'admin'
      }
    case 'LOGOUT':
      return {
        ...state,
        role: null
      }
    default:
      return state
  }
}