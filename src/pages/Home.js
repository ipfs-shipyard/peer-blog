import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homePostsSelector } from '../redux/posts'
import PostsList from '../components/PostsList'

const mapStateToProps = state => ({
  posts: homePostsSelector(state)
})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    const { posts } = this.props
    return (
      <React.Fragment>
        <PostsList posts={posts} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
