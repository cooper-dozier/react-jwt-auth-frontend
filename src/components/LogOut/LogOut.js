import React, { Component } from 'react'

import './LogOut.css'

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class LogOut extends Component {
  render() {
    return (
      <div>
        <h2>Log Out</h2>

        <form>
          <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
