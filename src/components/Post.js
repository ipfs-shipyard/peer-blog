import React from 'react'
import Comment from './Comment'
import Tag from './Tag'

export default ({ post }) => (
  <React.Fragment>
    <h2>{post.title}</h2>
    <h3>
      <small>
        {post.user.name} - {post.date}
      </small>
    </h3>
    <p>{post.body}</p>
    {post.tags.map(t => <Tag tag={t} />)}
    {post.comments.map(c => <Comment comment={c} />)}
  </React.Fragment>
)
