import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authorsSelector } from '../redux/users'

const mapStateToProps = state => ({ authors: authorsSelector(state) })

const mapDispatchToProps = {}

class Authors extends Component {
  render() {
    const { authors } = this.props
    return (
      <React.Fragment>
        {authors.map(user => (
          <pre key={user.id}>{JSON.stringify(user, null, 2)}</pre>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors)
