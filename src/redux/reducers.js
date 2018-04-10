import { combineReducers } from 'redux'
import { reducer as user } from './user'
import { reducer as users } from './users'
import { reducer as posts } from './posts'
import { reducer as comments } from './comments'
import { reducer as tags } from './tags'

export default combineReducers({
  user,
  users,
  posts,
  comments,
  tags
})
