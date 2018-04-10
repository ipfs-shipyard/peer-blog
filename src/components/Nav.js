import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {}

class Nav extends Component {
  render() {
    const { user } = this.props

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
        {user.auth ? (
          <ul>
            <li>
              <Link to="/edit/posts">Edit Posts</Link>
            </li>
            <li>
              <Link to="/posts/new">New Post</Link>
            </li>
            <li>
              <Link to="/comments">Edit Comments</Link>
            </li>
            <li>
              <Link to="/users">Edit Users</Link>
            </li>
          </ul>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
