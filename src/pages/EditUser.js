import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSelector } from '../redux/users'

const mapStateToProps = (state, props) => ({ user: userSelector(state, props) })

const mapDispatchToProps = {}

class EditUser extends Component {
  render() {
    const { user } = this.props
    return (
      <React.Fragment>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
