import qs from 'query-string'

const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const homePostsSelector = ({ posts, comments, tags }) =>
  Object.values(posts)
    .filter(({ published }) => published)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(post => {
      post.tags = post.tags.map(id => tags[id])
      post.comments = post.comments.map(id => comments[id])
      return post
    })

export const adminPostsSelector = ({ posts, comments, tags }) =>
  Object.values(posts)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)
    .map(post => {
      post.tags = post.tags.map(id => tags[id])
      post.comments = post.comments.map(id => comments[id])
      return post
    })

export const postSelector = ({ posts, comments, tags }, { match }) => {
  const post = posts[match.params.postId]
  return {
    ...post,
    tags: post.tags.map(id => tags[id]),
    comments: post.comments.map(id => comments[id])
  }
}

export const archivePostsSelector = ({ posts, comments, tags }, { location }) =>
  Object.values(posts)
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
    .map(post => {
      post.tags = post.tags.map(id => tags[id])
      post.comments = post.comments.map(id => comments[id])
      return post
    })
