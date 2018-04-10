import React, { Component } from 'react'
import { connect } from 'react-redux'
import { archivePostsSelector } from '../redux/posts'

const mapStateToProps = (state, props) => ({
  posts: archivePostsSelector(state, props)
})

const mapDispatchToProps = {}

class Archive extends Component {
  render() {
    const { posts } = this.props
    return (
      <React.Fragment>
        {posts.map(post => (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
