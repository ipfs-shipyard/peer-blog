import React, { Component } from 'react'
import { connect } from 'react-redux'
import { commentsSelector } from '../redux/comments'

const mapStateToProps = state => ({ comments: commentsSelector(state) })

const mapDispatchToProps = {}

class Comments extends Component {
  render() {
    const { comments } = this.props
    return (
      <React.Fragment>
        {comments.map(comment => (
          <pre key={comment.id}>{JSON.stringify(comment, null, 2)}</pre>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
