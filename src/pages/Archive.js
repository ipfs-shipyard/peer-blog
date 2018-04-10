import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { archivePostsSelector } from '../redux/posts'
import PostsList from '../components/PostsList'

const mapStateToProps = (state, props) => ({
  posts: archivePostsSelector(state, props)
})

const mapDispatchToProps = {}

class Archive extends Component {
  render() {
    const { posts } = this.props
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <Link to={{ search: '?year=2018' }}>2018</Link>
            </li>
            <li>
              <Link to={{ search: '?year=2017' }}>2017</Link>
            </li>
          </ul>
        </nav>
        <PostsList posts={posts} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive)
