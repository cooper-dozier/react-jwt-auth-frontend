import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  render() {
    if (this.props.user != null) {
        console.log(this.props.user)
      return (
        <div>
          <h4>{this.props.user.email}</h4>
          <h4>Is Logged In</h4>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

}

export default Profile