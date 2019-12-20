import React, { Component } from 'react'
import axios from 'axios'
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import App2 from './App2'
import Profile from '../Profile/Profile'
import './App2.css'
import './App1.css'


let databaseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_APP_URL : 'http://localhost:3000'

class App3 extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false,
    userHandle: null,
    schemeHoard: [],
    userId: -1,
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  loadUserData(userId) {
    axios({
      method: 'get',
      url: `${databaseUrl}/api/palettes/user/${userId}`
    })
      .then(response => {
        this.setState({
          schemeHoard: response.data.palettes,
          userId: userId
        })
        // console.log(this.state.schemes[0].color0)
      })
      .catch(err => console.log(err))
  }

  handleLogOut = (e) => {
    e.preventDefault()
    window.localStorage.clear()
    this.setState({
      email: '',
      password: '',
      userHandle: '',
      isLoggedIn: false
    })
    this.props.history.push('/login')
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let newUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/signup`,
        data: newUser
      })
      .then(response => {
        console.log(response)
        const location = {
          pathname: '/login',
        }
        this.props.history.replace(location)
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let loginUser = {
      email: this.state.email,
      password: this.state.password,
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/users/login`,
        data: loginUser
      })
      .then(response => {
        console.log(response)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('userId', response.data.user.id)
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          email: '',
          password: '',
          userHandle: this.state.userHandle,
          userId: response.data.user.userId
        })
        const location = {
          pathname: '/profile',
          state: { fromDashboard: true }
        }
      })
      .catch(err => console.log(err))
      // this.loadUserData(localStorage.getItem('userId'))
      // console.log(localStorage.getItem('userId')
  }

  render() {
    console.log(process.env)
    // console.log(this.state.schemeHoard)
    return (
      <div>
        <NavBar email={this.state.email} isLoggedIn={this.state.isLoggedIn} /* user={this.state.user} */ 
        handleLogOut={e => this.handleLogOut(e)} />
        <div className='body'>
 
          <Router basename='/'>
          <Link to="/new-profile">new profile</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">profile</Link>
          <Link to="/login">log in</Link>
          <Link to="/color-explorer">colors</Link>

            <Route path="/color-explorer">
                <App2 />
            </Route>
            <Route path="/login">
                <LogInForm />
            </Route>
          {/* <Route exact path="/" component={HowToUse} /> */}
          <Route path="profile">
            <Profile />
          </Route>
          <Route path="/signup">
              <SignUpForm />
          </Route>
          <Route path="/new-profile">
          <Profile isLoggedIn={this.state.isLoggedIn} user={this.state.user} email={this.state.email} 
                  userHandle={this.state.userHandle}  schemeHoard={this.state.schemeHoard} userId={this.state.userId} />
          </Route>
          </Router>
        </div>
      </div>
    )
  }
}

export default App3
