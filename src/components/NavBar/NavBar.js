import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super()
  }

  render() {
    let navBarItems = [<a key={1} href='/'>Home</a>,<a key={2} href='color-explorer'>Play</a>]
    if (this.props.isLoggedIn) {
      // navBarItems.push(<a key={2} href='/logout'>Log Out</a>)
      navBarItems.push(<a key={3} href='/' onClick={this.props.handleLogOut}>Log Out</a>)
      navBarItems.push(<span key={4} >{this.props.email}</span>)
      // navBarItems.push(<a key={5} href='/save'>Save Colors</a> )
      if (window.location.pathname !== '/profile') {
        navBarItems.push(<a key={6} href='/profile'>Profile</a>)
      }
      // if (this.props.user.email != null) {
      //   if (this.props.isLoggedIn) {
      //   navBarItems.push(<span>{this.props.email}</span>)
      // }

    } else {
      navBarItems.push(<a key={7} href='/signup'>Sign Up</a>)
      navBarItems.push(<a key={8} href='/login'>Log In</a>)
    }
    navBarItems.push(<h1 key={9} >Color Schemes Explorer</h1>)
    return (
      <nav className='nav'>

        {navBarItems}
      </nav>
    )
  }
}

export default NavBar
