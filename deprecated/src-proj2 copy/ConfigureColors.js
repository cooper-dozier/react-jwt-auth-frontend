import React, { Component } from 'react';
import ColorManifest from './ColorManifest';
import TestingBlock from './TestingBlock';

class ConfigureColors extends Component {
    constructor(props) {
        super();
        this.state = {
            value1: '',
            value2: '',
        };
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(event) {
        this.setState({ value1: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }
    handleSubmit(event) {
        this.props.setAColor(this.state.value2, this.state.value1)
        event.preventDefault();
    }

    render() {
        let removedColorsList = this.props.removedColors.map((colors) => {
            // let swatch = []
            // let swatch = (`background-color: ${colors[1]}`)
            return <li>{colors[0]} <span style={{backgroundColor: colors[1]}}>___</span></li>
        })

        return (
            <div id="configWrapperDiv">
                <ul id="configHistoryDiv">
                    <h4>Removed Colors:</h4>
                   {removedColorsList}
                </ul>

                <ul id="bgColorDiv">
                    <h4>Background Color:</h4>
                    {this.props.bgColorPrint}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Which slot to change?
                        <input type="number" value={this.state.value1} onChange={this.handleChange1}
                            placeholder='a number 0-10' />
                    </label>
                    <label>
                        Which color to change it to?
                        <input type="text" value={this.state.value2} onChange={this.handleChange2}
                            placeholder='six digit hexadecimal' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} />
            </div>
        )
    }
}

export default ConfigureColors;