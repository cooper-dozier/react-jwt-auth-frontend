import React, { Component } from 'react'
import ColorManifest from '../Project2/ColorManifest'
import './Profile.css'
import axios from 'axios'
import ProfileColorManifest from './ProfileColorManifest'

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'
let switchb = 0;

class Profile extends Component {
  constructor(props) {
    super()
    this.state = {
      schemes: [''],
      userId: -1,
    }
    this.loadUserData = this.loadUserData.bind(this)
  }
  // componentDidMount() {
  //   console.log(this.props.schemeHoard)
  // }
  componentDidMount() {
    this.loadUserData(4)
    // console.log(this.state.schemes)
    // this.buildProfile()
    // this.checkIt()
    console.log(this.state.userId)
  }
  loadUserData(userId) {
    axios({
      method: 'get',
      url: `${databaseUrl}/api/palettes/user/${userId}`
    })
      // .then(response => {
      //   this.setState({
      //     schemes: response.data.palettes[0],
      //     userId: userId
      //   })
      //   // console.log(this.state.schemes[0].color0)
      // })
      // .catch(err => console.log(err))
      .then(response => {
        let buildColors = []
        // for (let i=10; i>-1; i--) {
          // let colorLoop = `color${i}`
          // can't see a way to use a loop to set the number on color
          // won't rewrite to use array in DB
          // I've heard you aren't supposed to store arrays and objects in tables
          // buildColors.push(response.data.palettes[0].color0)
          // buildColors.push(response.data.palettes[1].color1)
          // buildColors.push(response.data.palettes[2].color2)
          // buildColors.push(response.data.palettes[3].color3)
          // buildColors.push(response.data.palettes[4].color4)
          // buildColors.push(response.data.palettes[5].color5)
          // buildColors.push(response.data.palettes[6].color6)
          // buildColors.push(response.data.palettes[7].color7)
          // buildColors.push(response.data.palettes[8].color8)
          // buildColors.push(response.data.palettes[9].color9)
          // buildColors.push(response.data.palettes[10].color10)
          // for (let i = 0; i<10; i++) {
          //   let temp = buildColors
          //   buildColors[i] = temp[i].replace('#','')
          // }
          this.setState({
            colors: buildColors,
            colrOrgId: response.data.thePalette.colrOrgId
          })
          // buildColors.push(response.data.thePalette.color0)
        // }
        console.log(buildColors)
        console.log(this.state.colors)
        // this.setState({
        //   colors: response.data.schemes[0].colors,
        //   colrOrgId: response.data.schemes[0].id
        // })
      })
  }
//   checkIt() {
// console.log(this.state.schemes[0])
    
//   }
  // buildProfile() {
  //  let one =  <p>{this.state.schemes[0].color0}</p>
  // }
  render() {
// setTimeout(this.checkIt(),5000)
    // console.log(switchb)
    // console.log(this.state)
    // let elephant = this.state.schemes[0].notes
    // let schemesb = this.state
    // console.log(schemesb[0])
    // let itemb = schemesb.schemes[0].color0
    // console.log(this.props.schemeHoard)
    console.log(this.state.schemes)
    return (
      <div>
        <h3>
          <span className='user-email'>{this.props.userHandle}</span>'s saved palettes:
        </h3>
        {/* <ColorManifest /> */}
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
    {/* <p>{itemb}</p> */}
        {/* <ProfileColorManifest schemes={this.state.schemes} /> */}
    {/* <p>{ (this.state.schemes === []) ? '' : schemesb[0].color0 }</p> */}
    {/* <p>{ !(this.state.schemes) ? this.state.schemes[0].color0 : ''}</p> */}
    {/* <p>{schemes}</p> */}
    {/* <p>{this.props.schemeHoard[0].color0}</p> */}
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
