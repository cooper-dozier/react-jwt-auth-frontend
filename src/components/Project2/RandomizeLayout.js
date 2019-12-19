import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'

class RandomizeLayout extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.shuffleLayout()}>Click for new layout</button>
                <button onClick={() => this.props.shuffleText()}>Click for new text properties</button>
                <button onClick={() => this.props.getGibberish()}>Click for new gibberish</button>
                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} 
                bgColorPrint={this.props.bgColorPrint} colrOrgId={this.props.colrOrgId} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    positionClass={this.props.positionClass} headingText={this.props.headingText}
                    paragraphText={this.props.paragraphText} textSettings={this.props.textSettings} />
            </div>
        )
    }
}

export default RandomizeLayout;