import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authorsSelector } from '../redux/users'
import Author from '../components/Author'

const mapStateToProps = state => ({ authors: authorsSelector(state) })

const mapDispatchToProps = {}

class Authors extends Component {
  render() {
    const { authors } = this.props
    return (
      <React.Fragment>
        {authors.map(user => <Author user={user} />)}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authors)
