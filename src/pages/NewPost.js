import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class NewPost extends Component {
  render() {
    return <div>New Post</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
