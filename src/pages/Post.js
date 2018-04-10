import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSelector } from '../redux/posts'

const mapStateToProps = (state, props) => ({
  post: postSelector(state, props)
})

const mapDispatchToProps = {}

class Post extends Component {
  render() {
    const { post } = this.props
    return (
      <React.Fragment>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
