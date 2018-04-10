import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homePostsSelector } from '../redux/posts'

const mapStateToProps = state => ({
  posts: homePostsSelector(state)
})

const mapDispatchToProps = {}

class Home extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
