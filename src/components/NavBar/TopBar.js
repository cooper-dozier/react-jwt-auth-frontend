import React, { Component } from 'react'
import './NavBar.css'

class TopBar extends Component {
  constructor(props) {
    super()
  }

  render() {
    let navBarItems = [<a /*key={1}*/ href='/'>Home</a>,<a /*key={2}*/ href='color-explorer'>Play</a>]
    if (this.props.isLoggedIn) {
      // navBarItems.push(<a key={2} href='/logout'>Log Out</a>)
      navBarItems.push(<a href='/' onClick={this.props.handleLogOut}>Log Out</a>)
      navBarItems.push(<span>{this.props.email}</span>)
      if (window.location.pathname !== '/profile') {
        navBarItems.push(<a /*key={3}*/ href='/profile'>Profile</a>)
      }
      // if (this.props.user.email != null) {
      //   if (this.props.isLoggedIn) {
      //   navBarItems.push(<span>{this.props.email}</span>)
      // }

    } else {
      navBarItems.push(<a /*key={4}*/ href='/signup'>Sign Up</a>)
      navBarItems.push(<a /*key={5}*/ href='/login'>Log In</a>)
    }
    navBarItems.push(<h1>Color Schemes Explorer</h1>)
    return (
      <div brand='Project 4 React Starter' className='nav'>

        {navBarItems}
      </div>
    )
  }
}

export default TopBar
