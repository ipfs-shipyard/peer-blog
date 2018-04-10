import React from 'react'

export default ({ comment }) => (
  <React.Fragment>
    <h2>{comment.user.name}</h2>
    <h3>
      <small>{comment.date}</small>
    </h3>
    <p>{comment.body}</p>
    <button>Reply</button>
    <button>Delete</button>
  </React.Fragment>
)
