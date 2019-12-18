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
        // colors set via fetchScheme() or randomizeColors(), then setAColor(),
        // and then the map function with colorTags in App2.js
        // called by RandomizeColors.js
        // or by user action ConfigureColors.js via setAColor() and colorTags

        // left, top, width, height, borderWidth, borderRadius, and fontSize
        // are all set by shuffleLayout() in App2.js
        // called by RandomizeLayout.js

        // fontFamily, textAlign, fontWeight, and fontStyle are all set by
        // shuffleText in App2.js
        // called by RandomizeLayout.js
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
            fontFamily: this.props.textSettings[0],
            textAlign: this.props.textSettings[6],
            fontWeight: this.props.textSettings[12],
            fontStyle: this.props.textSettings[18],
        }
        let groupOneP = {
            color: this.props.colorTags[3],
            fontSize: this.props.positionings[34],
            fontFamily: this.props.textSettings[1],
            textAlign: this.props.textSettings[7],
            fontWeight: this.props.textSettings[13],
            fontStyle: this.props.textSettings[19],
        }
        let groupTwoH3 = {
            color: this.props.colorTags[10],
            fontSize: this.props.positionings[32],
            fontFamily: this.props.textSettings[2],
            textAlign: this.props.textSettings[8],
            fontWeight: this.props.textSettings[14],
            fontStyle: this.props.textSettings[20],
        }
        let groupTwoP = {
            color: this.props.colorTags[5],
            fontSize: this.props.positionings[35],
            fontFamily: this.props.textSettings[3],
            textAlign: this.props.textSettings[9],
            fontWeight: this.props.textSettings[15],
            fontStyle: this.props.textSettings[21],
        }
        let groupThreeH3 = {
            color: this.props.colorTags[8],
            fontSize: this.props.positionings[33],
            fontFamily: this.props.textSettings[4],
            textAlign: this.props.textSettings[10],
            fontWeight: this.props.textSettings[16],
            fontStyle: this.props.textSettings[22],
        }
        let groupThreeP = {
            color: this.props.colorTags[9],
            fontSize: this.props.positionings[36],
            fontFamily: this.props.textSettings[5],
            textAlign: this.props.textSettings[11],
            fontWeight: this.props.textSettings[17],
            fontStyle: this.props.textSettings[23],
        }

        return (
            <div style={backgroundDiv} className='backgroundDiv'>
                <div style={groupOneDiv} className='testBlock' id="group1">
                    <h3 style={groupOneH3} className='testBlock capital'>{this.props.headingText[0]}</h3>
                    <p style={groupOneP} className='testBlock'>
                        {this.props.paragraphText[0]}</p>
                </div>
                <div style={groupTwoDiv} className='testBlock' id="group2">
                    <h3 style={groupTwoH3} className='testBlock capital'>{this.props.headingText[1]}</h3>
                    <p style={groupTwoP} className='testBlock'>
                        {this.props.paragraphText[1]}</p>
                </div>
                <div style={groupThreeDiv} className='testBlock' id="group3">
                    <h3 style={groupThreeH3} className='testBlock capital'>{this.props.headingText[2]}</h3>
                    <p style={groupThreeP} className='testBlock'>
                        {this.props.paragraphText[2]}</p>
                </div>
            </div>
        )
    }
}

export default TestingBlock