import React, { Component } from 'react'

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_APP_URL : 'http://localhost:3000'

class ColorManifest extends Component {
    constructor(props) {
        super()
    }

    render() {

        let color0a = {backgroundColor: this.props.colorTags[0]}
        let color1a = {backgroundColor: this.props.colorTags[1]}
        let color2a = {backgroundColor: this.props.colorTags[2]}
        let color3a = {backgroundColor: this.props.colorTags[3]}
        let color4a = {backgroundColor: this.props.colorTags[4]}
        let color5a = {backgroundColor: this.props.colorTags[5]}
        let color6a = {backgroundColor: this.props.colorTags[6]}
        let color7a = {backgroundColor: this.props.colorTags[7]}
        let color8a = {backgroundColor: this.props.colorTags[8]}
        let color9a = {backgroundColor: this.props.colorTags[9]}
        let color10a = {backgroundColor: this.props.colorTags[10]}
        let colorBG = {backgroundColor: this.props.bgColorPrint}
        return (
            <p className='colorManifest'>
            0:&nbsp;{this.props.colorTags[0]}&nbsp;<span style={color0a}>_____</span> -
            1:&nbsp;{this.props.colorTags[1]}&nbsp;<span style={color1a}>_____</span> -
            2:&nbsp;{this.props.colorTags[2]}&nbsp;<span style={color2a}>_____</span> -
            3:&nbsp;{this.props.colorTags[3]}&nbsp;<span style={color3a}>_____</span> -
            4:&nbsp;{this.props.colorTags[4]}&nbsp;<span style={color4a}>_____</span> -
            5:&nbsp;{this.props.colorTags[5]}&nbsp;<span style={color5a}>_____</span> -
            6:&nbsp;{this.props.colorTags[6]}&nbsp;<span style={color6a}>_____</span> -
            7:&nbsp;{this.props.colorTags[7]}&nbsp;<span style={color7a}>_____</span> -
            8:&nbsp;{this.props.colorTags[8]}&nbsp;<span style={color8a}>_____</span> -
            9:&nbsp;{this.props.colorTags[9]}&nbsp;<span style={color9a}>_____</span> -
            10:&nbsp;{this.props.colorTags[10]}&nbsp;<span style={color10a}>_____</span> -
            BG:&nbsp;{this.props.bgColorPrint}&nbsp;<span style={colorBG}>_____</span> -
            Colr.Org ID: {this.props.colrOrgId}
            </p>
        )
    }
}


export default ColorManifest