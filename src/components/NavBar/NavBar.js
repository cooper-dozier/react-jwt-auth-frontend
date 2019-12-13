import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

  render() {
    let navBarItems = [<a key={1} href='/'>Home</a>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<a key={2} href='/logout'>Log Out</a>)
      if (this.props.user != null) {
        navBarItems.push(<a key={5} href='/profile'>{this.props.user.email}</a>)
      }

    } else {
      navBarItems.push(<a key={3} href='/signup'>Sign Up</a>)
      navBarItems.push(<a key={4} href='/login'>Log In</a>)
    }
    return (
      <nav brand='Project 4 React Starter' className='nav' right>

        {navBarItems}
      </nav>
    )
  }
}

export default NavBar
