import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { usersSelector } from '../redux/users'

const mapStateToProps = state => ({ users: usersSelector(state) })

const mapDispatchToProps = {}

class Users extends Component {
  render() {
    const { users } = this.props
    return (
      <React.Fragment>
        {users.map(user => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Link>
        ))}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
