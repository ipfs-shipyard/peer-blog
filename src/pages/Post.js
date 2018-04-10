import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSelector } from '../redux/posts'
import PostContent from '../components/Post'

const mapStateToProps = (state, props) => ({
  post: postSelector(state, props)
})

const mapDispatchToProps = {}

class Post extends Component {
  render() {
    const { post } = this.props
    return <PostContent post={post} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
