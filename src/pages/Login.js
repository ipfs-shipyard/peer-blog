import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction, logoutAction } from '../redux/user'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  login: loginAction,
  logout: logoutAction
}

class Login extends Component {
  render() {
    const { user, logout, login } = this.props
    return (
      <div>
        <button onClick={user.auth ? logout : login}>
          {user.auth ? 'logout' : 'login'}
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
