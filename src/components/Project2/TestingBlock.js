import React, { Component } from 'react';

class TestingBlock extends Component {
    constructor(props) {
        super()
    }
    render() {
        let backgroundDiv = {
            backgroundColor: this.props.colorTags[0],
            position: 'absolute',
            height: '600px',
            width: '750px',
        }
        let groupOneDiv = {
            backgroundColor: this.props.colorTags[1],
            borderColor: this.props.colorTags[7],
            left: this.props.positionings[0],
            top: this.props.positionings[1],
            width: this.props.positionings[11],
            height: this.props.positionings[12],
            borderWidth: this.props.positionings[21],
            borderRadius: this.props.positionings[22],
            position: this.props.positionClass,
        }
        let groupTwoDiv = {
            backgroundColor: this.props.colorTags[4],
            borderColor: this.props.colorTags[6],
            right: this.props.positionings[2],
            top: this.props.positionings[3],
            width: this.props.positionings[13],
            height: this.props.positionings[14],
            borderWidth: this.props.positionings[23],
            borderRadius: this.props.positionings[24],
            position: this.props.positionClass,
        }
        let groupThreeDiv = {
            position: this.props.positionClass,
            backgroundColor: this.props.colorTags[5],
            borderColor: this.props.colorTags[7],
            left: this.props.positionings[4],
            top: this.props.positionings[5],
            width: this.props.positionings[15],
            height: this.props.positionings[16],
            borderWidth: this.props.positionings[25],
            borderRadius: this.props.positionings[26],
        }
        let groupOneH3 = {
            color: this.props.colorTags[2],
            fontSize: this.props.positionings[31],
        }
        let groupOneP = {
            color: this.props.colorTags[3],
            fontSize: this.props.positionings[34],
        }
        let groupTwoH3 = {
            color: this.props.colorTags[210],
            fontSize: this.props.positionings[32],
        }
        let groupTwoP = {
            color: this.props.colorTags[5],
            fontSize: this.props.positionings[35],
        }
        let groupThreeH3 = {
            color: this.props.colorTags[8],
            fontSize: this.props.positionings[33],
        }
        let groupThreeP = {
            color: this.props.colorTags[9],
            fontSize: this.props.positionings[36],
        }

        return (
            <div style={backgroundDiv} className='backgroundDiv'>
                <div style={groupOneDiv} className='testBlock' id="group1">
                    <h3 style={groupOneH3} className='testBlock'>Hello World Group One</h3>
                    <p style={groupOneP} className='testBlock'>{this.props.paragraphText} cleanse mlkshk vinyl Pitchfork Pinterest biodiesel street art mixtape synth ethical aesthetic retro flexitarian photo booth cray banh mi kitsch narwhal twee slow-carb authentic cardigan fanny pack iPhone gluten-free kogi</p>
                </div>
                <div style={groupTwoDiv} className='testBlock' id="group2">
                    <h3 style={groupTwoH3} className='testBlock'>Goodnight Moon Cluster Two</h3>
                    <p style={groupTwoP} className='testBlock'>{this.props.paragraphText}out sustainable whatever crucifix master cleanse mlkshk vinyl Pitchfork Pinterest biodiesel street art mixtape synth ethical aesthetic retro flexitarian photo booth cray banh mi kitsch narwhal twee slow-carb authentic cardigan fanny pack iPhone gluten-free kogi</p>
                </div>
                <div style={groupThreeDiv} className='testBlock' id="group3">
                    <h3 style={groupThreeH3} className='testBlock'>Where is the Sun Collection Three</h3>
                    <p style={groupThreeP} className='testBlock'>{this.props.paragraphText}selvage chia before they sold out sustainable whatever crucifix master cleanse mlkshk vinyl Pitchfork Pinterest biodiesel street art mixtape synth ethical aesthetic retro flexitarian photo booth cray banh mi kitsch narwhal twee slow-carb authentic cardigan fanny pack iPhone gluten-free kogi</p>
                </div>
            </div>
        )
    }
}

export default TestingBlock