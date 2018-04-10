import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersSelector } from '../redux/users'

const mapStateToProps = state => ({ users: usersSelector(state) })

const mapDispatchToProps = {}

class Users extends Component {
  render() {
    const { users } = this.props
    return (
      <React.Fragment>
        {users.map(user => (
          <pre key={user.id}>{JSON.stringify(user, null, 2)}</pre>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
