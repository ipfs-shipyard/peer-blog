const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const tagsSelector = ({ tags }) => Object.values(tags)
