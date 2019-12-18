import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class RandomizeLayout extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.shuffleLayout()}>Click for new layout</button>
                <button onClick={() => this.props.shuffleText()}>Click for new text properties</button>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    positionClass={this.props.positionClass} headingText={this.props.headingText}
                    paragraphText={this.props.paragraphText} textSettings={this.props.textSettings} />
            </div>
        )
    }
}

export default RandomizeLayout;