import qs from 'query-string'

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const combineData = state => post => ({
  ...post,
  user: state.users[post.user],
  tags: post.tags.map(id => state.tags[id]),
  comments: post.comments.map(id => state.comments[id])
})

export const homePostsSelector = state =>
  Object.values(state.posts)
    .filter(({ published }) => published)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(combineData(state))

export const adminPostsSelector = state =>
  Object.values(state.posts)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(combineData(state))

export const postSelector = (state, { match }) =>
  combineData(state)(state.posts[match.params.postId])

export const archivePostsSelector = (state, { location }) =>
  Object.values(state.posts)
    .filter(({ published }) => published)
    .filter(({ date }) =>
      date.startsWith(
        location.search
          ? qs.parse(location.search).year
          : new Date().getFullYear().toString()
      )
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(combineData(state))

export const tagPostsSelector = (state, { match }) =>
  Object.values(state.posts)
    .filter(({ published }) => published)
    .filter(({ tags }) => tags.includes(match.params.tagId))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(combineData(state))

export const authorPostsSelector = (state, { match }) =>
  Object.values(state.posts)
    .filter(({ published }) => published)
    .filter(({ user }) => user === match.params.userId)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(combineData(state))
