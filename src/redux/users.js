const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const combineData = state => user => ({
  ...user,
  posts: user.posts.map(id => state.posts[id]),
  comments: user.comments.map(id => state.comments[id])
})

export const usersSelector = state =>
  Object.values(state.users).map(combineData(state))

export const authorsSelector = state =>
  usersSelector(state).filter(({ roles }) => roles.includes('author'))

export const userSelector = (state, { match }) =>
  combineData(state)(state.users[match.params.userId])

export const authorSelector = (state, props) => {
  const user = userSelector(state, props)
  if (!user || !user.roles.includes('author')) return null
  return combineData(state)(user)
}
