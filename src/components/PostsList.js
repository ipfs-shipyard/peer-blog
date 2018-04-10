import React from 'react'
import { Link } from 'react-router-dom'

export default ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <h2>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <h3>
          <small>
            {post.user.name} - {post.date}
          </small>
        </h3>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
)
