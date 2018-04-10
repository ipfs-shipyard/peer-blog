import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Admin, NotAdmin } from './auth'
import Home from './pages/Home'
import Post from './pages/Post'
import Archive from './pages/Archive'
import Tags from './pages/Tags'
import Authors from './pages/Authors'
import Author from './pages/Author'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import NewPost from './pages/NewPost'
import EditPost from './pages/EditPost'
import Comments from './pages/Comments'
import Users from './pages/Users'
import EditUser from './pages/EditUser'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Home} />
              <Route exact path="/posts/:postId" component={Post} />
              <Route exact path="/archive" component={Archive} />
              <Route exact path="/tags" component={Tags} />
              <Route exact path="/authors" component={Authors} />
              <Route exact path="/authors/:userId" component={Author} />

              <Route exact path="/admin" component={NotAdmin(Login)} />
              <Route exact path="/admin/posts" component={Admin(AdminHome)} />
              <Route exact path="/admin/posts/new" component={Admin(NewPost)} />
              <Route
                exact
                path="/admin/posts/:postId"
                component={Admin(EditPost)}
              />
              <Route exact path="/admin/comments" component={Admin(Comments)} />
              <Route exact path="/admin/users" component={Admin(Users)} />
              <Route
                exact
                path="/admin/users/:userId"
                component={Admin(EditUser)}
              />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
