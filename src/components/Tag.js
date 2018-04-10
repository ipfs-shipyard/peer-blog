import React from 'react'
import { Link } from 'react-router-dom'

export default ({ tag }) => <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
