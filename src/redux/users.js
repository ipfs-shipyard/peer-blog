const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const usersSelector = ({ users }) => Object.values(users)

export const authorsSelector = state =>
  usersSelector(state).filter(({ roles }) => roles.includes('author'))

export const userSelector = ({ users }, { match }) => users[match.params.userId]

export const authorSelector = (state, props) => {
  const user = userSelector(state, props)
  if (!user || !user.roles.includes('author')) return null
  return {
    ...user,
    posts: user.posts.map(post => state.posts[post])
  }
}
