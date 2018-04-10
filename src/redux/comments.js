const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const commentsSelector = ({ comments }) => Object.values(comments)
