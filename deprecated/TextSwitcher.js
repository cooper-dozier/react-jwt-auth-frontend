import React, { Component } from 'react';

class ConfigureText extends Component {
    constructor(props) {
        super()
        this.state = {
            justifyVal: '',
            fontFamilyVal: '',
            fontStyle: '',
            headerJustifyVal: '',
        }
    }
    render() {
        return (
            <div>
                {/* <button onClick={() => this.props.shuffleText()}>Randomize Text Properties</button> */}
                {/* <button onClick={() => this.props.switchFont()}></button> */}
                <select name="pAlign" form="carform">
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} />
            </div>
        )
    }
}

export default ConfigureText;