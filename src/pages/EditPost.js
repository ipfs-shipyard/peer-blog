import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSelector } from '../redux/posts'

const mapStateToProps = (state, props) => ({
  post: postSelector(state, props)
})

const mapDispatchToProps = {}

class EditPost extends Component {
  render() {
    const { post } = this.props
    return (
      <React.Fragment>
        <h1>Edit</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
