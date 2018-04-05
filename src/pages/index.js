import React from 'react'
import { connect } from 'react-redux'

export default () => <div>page</div>

export const Admin = connect()(({ dispatch }) => (
  <React.Fragment>
    <button onClick={() => dispatch({ type: 'ADMIN' })}>Login</button>
  </React.Fragment>
))