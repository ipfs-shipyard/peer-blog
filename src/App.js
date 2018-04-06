import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import Page, { Admin } from './pages'

const locationHelper = locationHelperBuilder({})

const AdminWrapper = connectedRouterRedirect({
  redirectPath: '/admin',
  authenticatedSelector: ({ user }) => user.role === 'admin',
  wrapperDisplayName: 'AdminWrapper'
})

const NotAdminWrapper = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/admin/posts',
  allowRedirectBack: false,
  authenticatedSelector: ({ user }) => user.role === null,
  wrapperDisplayName: 'NotAdminWrapper'
})

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <React.Fragment>
            <ul>
              <Link to="/admin/posts">Admin Posts</Link>
            </ul>
            <Switch>
              <Route exact path="/" component={Page} />
              <Route exact path="/posts" component={Page} />
              <Route exact path="/posts/:postId" component={Page} />
              <Route exact path="/archive" component={Page} />
              <Route exact path="/tags" component={Page} />
              <Route exact path="/authors" component={Page} />
              <Route exact path="/authors/:userId" component={Page} />

              <Route exact path="/admin" component={NotAdminWrapper(Admin)} />
              <Route exact path="/admin/posts" component={AdminWrapper(Page)} />
              <Route
                exact
                path="/admin/posts/new"
                component={AdminWrapper(Page)}
              />
              <Route
                exact
                path="/admin/posts/:postId"
                component={AdminWrapper(Page)}
              />
              <Route
                exact
                path="/admin/comments"
                component={AdminWrapper(Page)}
              />
              <Route exact path="/admin/users" component={AdminWrapper(Page)} />
              <Route
                exact
                path="/admin/users/:userId"
                component={AdminWrapper(Page)}
              />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
