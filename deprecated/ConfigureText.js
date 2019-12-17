import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class ConfigureText extends Component {
    constructor(props) {
        super()
        this.state = {
            pJustifyVal: '',
            fontFamilyVal: '',
            fontStyle: '',
            headerJustifyVal: '',
        }
    }
    // It is a **.Color Schemes.** tester. Not an everything everything.
    //
    // I think maybe what I'll do is to allow manual styling only of the paragraph's
    // alignment and font-family.
    // I'll have a shuffle all function which will do all 3 on header and paragraph separately.
    // I can use Math.random with booleans for the font-variants
    // I think I'll have the font variants apply to the whole paragraph

    render() {
        return (
            <div>
                <button onClick={() => this.props.shuffleText()}>Randomize Text Properties</button>
                <label>Paragraph Alignment
                <select name="pAlign">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="justify">Justify</option>
                    </select>
                </label>
                <label>Paragraph Font Family
                    <select name='pFontFamily'>
                        <option value='serif'>Serif</option>
                        <option value='sans-serif'>Sans-Serif</option>
                        <option value='cursive'>Cursive</option>
                        <option value='monospace'>Monospace</option>
                    </select>
                </label>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} />
            </div>
        )
    }
}

export default ConfigureText;