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
                <button onClick={() => this.props.shuffleLayout()}>Click to get a new layout</button>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    positionClass={this.props.positionClass}
                    paragraphText={this.props.paragraphText} />
            </div>
        )
    }
}

export default RandomizeLayout;