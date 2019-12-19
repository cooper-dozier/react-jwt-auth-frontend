import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter,
  Link
} from 'react-router-dom'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import App2 from './App2'
import Profile from '../Profile/Profile'
import './App2.css'
import './App1.css'


let databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class App1 extends Component {
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
          state: { fromDashboard: true }
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
        this.props.history.replace(location)
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
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
            <Route path='/profile'
              render={(props) => {
                return (
                  <Profile isLoggedIn={this.state.isLoggedIn} user={this.state.user} email={this.state.email} 
                  userHandle={this.state.userHandle}  schemeHoard={this.state.schemeHoard} userId={this.state.userId} />
                )
              }}
            />
            <Route path='/color-explorer'
              render={(props) => {
                return (
                  <App2 isLoggedIn={this.state.isLoggedIn} userId={this.state.userId} />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App1)
