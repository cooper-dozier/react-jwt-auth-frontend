import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class RandomizeColors extends Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <div>
                <button onClick={() => this.props.randomizeColors()}>Get a new color scheme</button>
                <button onClick={() => this.props.bgColor()}>Random page background</button>
                <button onClick={() => this.props.bgWhite()}>Whitish page background</button>
                <button onClick={() => this.props.bgBlack()}>Blue-Black page background</button>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings} 
                paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} />
            </div>
        )
    }
}

export default RandomizeColors