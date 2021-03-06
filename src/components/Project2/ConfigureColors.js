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
                
                {/* <ul id="bgColorDiv">
                    <h4>Background Color:</h4>
                    {this.props.bgColorPrint}
                </ul> */}
                
                <form className='lineUp' onSubmit={this.handleSubmit}>
                    <label>
                        Slot to set?
                        <input type="number" value={this.state.value1} onChange={this.handleChange1}
                            placeholder='Num 0-10' />
                    </label>
                    <label>
                        Color to set it to?
                        <input type="text" value={this.state.value2} onChange={this.handleChange2}
                            placeholder='six digit hexadecimal' />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button className='lineUp' onClick={() => this.props.saveScheme()}>saveScheme</button>

                <ColorManifest colorTags={this.props.colorTags} positionings={this.props.positionings}
                bgColorPrint={this.props.bgColorPrint} colrOrgId={this.props.colrOrgId} />
                <TestingBlock colorTags={this.props.colorTags} positionings={this.props.positionings}
                    paragraphText={this.props.paragraphText} positionClass={this.props.positionClass} 
                    textSettings={this.props.textSettings} headingText={this.props.headingText} />
            </div>
        )
    }
}

export default ConfigureColors;