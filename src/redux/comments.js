const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const combineData = state => comment => ({
  ...comment,
  user: state.users[comment.user]
})

export const commentsSelector = state =>
  Object.values(state.comments).map(combineData(state))
