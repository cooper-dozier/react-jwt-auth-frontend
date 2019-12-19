import React, { Component } from 'react'
import axios from 'axios'

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class ProfileC extends Component {
  constructor(props) {
    super()
    this.state = {
      schemes: [''],
      userId: -1,
    }
    this.loadUserData = this.loadUserData.bind(this)
  }

  componentDidMount

  loadUserData(userId) {
    axios({
      method: 'get',
      url: `${databaseUrl}/api/palettes/user/${userId}`
    })
      .then(response => {
        this.setState({
          schemes: response.data.palettes,
          userId: userId
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    this.loadUserData(4)
    // console.log(this.state.schemes[0].color0)
    return (
<p>test {this.state.userId} </p>
    )
  }

}

export default ProfileC
