import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Admin, NotAdmin } from './auth'
import Nav from './components/Nav'
import Home from './pages/Home'
import Post from './pages/Post'
import Archive from './pages/Archive'
import Tags from './pages/Tags'
import Tag from './pages/Tag'
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
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Home} />
              <Route exact path="/posts/:postId" component={Post} />
              <Route exact path="/archive" component={Archive} />
              <Route exact path="/tags" component={Tags} />
              <Route exact path="/tags/:tagId" component={Tag} />
              <Route exact path="/authors" component={Authors} />
              <Route exact path="/authors/:userId" component={Author} />

              <Route exact path="/login" component={NotAdmin(Login)} />
              <Route exact path="/edit/posts" component={Admin(AdminHome)} />
              <Route exact path="/posts/new" component={Admin(NewPost)} />
              <Route
                exact
                path="/edit/posts/:postId"
                component={Admin(EditPost)}
              />
              <Route exact path="/comments" component={Admin(Comments)} />
              <Route exact path="/users" component={Admin(Users)} />
              <Route exact path="/users/:userId" component={Admin(EditUser)} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
