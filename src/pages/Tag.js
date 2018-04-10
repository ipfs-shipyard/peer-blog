import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tagPostsSelector } from '../redux/posts'
import { tagsSelector } from '../redux/tags'
import PostsList from '../components/PostsList'
import Tag from '../components/Tag'

const mapStateToProps = (state, props) => ({
  tags: tagsSelector(state),
  posts: tagPostsSelector(state, props)
})

const mapDispatchToProps = {}

class PostsByTag extends Component {
  render() {
    const { posts, tags } = this.props
    return (
      <React.Fragment>
        {tags.map(tag => <Tag tag={tag} />)}
        <PostsList posts={posts} />
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsByTag)
