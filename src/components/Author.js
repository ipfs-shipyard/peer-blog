import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user }) => (
  <React.Fragment>
    <h2>
      <Link to={`/authors/${user.id}`}>{user.name}</Link>
    </h2>
  </React.Fragment>
)
