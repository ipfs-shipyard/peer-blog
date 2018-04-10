import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authorSelector } from '../redux/users'
import { authorPostsSelector } from '../redux/posts'
import Posts from '../components/PostsList'

const mapStateToProps = (state, props) => ({
  user: authorSelector(state, props),
  posts: authorPostsSelector(state, props)
})

const mapDispatchToProps = {}

class Author extends Component {
  render() {
    const { user, posts } = this.props
    return (
      <React.Fragment>
        <Posts posts={posts} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author)
