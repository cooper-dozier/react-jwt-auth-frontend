import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <h3>
    <span className='user-email'>{this.props.email}</span>'s saved palettes:
        </h3>
        <table>
          <thead>
            <tr>
              <th>Scheme Name</th>
              <th>Color Manifest</th>
              <th>Notes</th>
              <th>Colr.org ID</th>
            </tr>
          </thead>
          <tbody>
            {/* this bit is a loop list var */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* end loop list vars */}
          </tbody>
        </table>
      </div>
    )
    // if (this.props.user != null) {
    //   return (
    //     <div>
    //       <h4>{this.props.user.email}</h4>
    //       <h4>Is Logged In</h4>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //   <h4>{this.props.user.email}</h4>
    //   <h4>Is Logged In</h4>
    // </div>
    // ) 
  }

}

export default Profile
