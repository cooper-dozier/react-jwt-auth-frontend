import React, { Component } from 'react';


class HowToUse extends Component {
    constructor (props) {
        super();
    }
    render () {
        return (
            <div>
                <p className='basicText'>This is an app for exploring color schemes. The Randomize by Color Scheme page will get 
                    a random user submitted color scheme from <a href="http://colr.org">colr.org</a> of 2 to 11 colors. 
                    The Randomize Layout page uses JavaScript to randomize spacing and element sizes and weights within 
                    certain bounds, as well as to set shuffled paragraph text from a Hipster Ipsum implementation at 
                    <a href="http://hipsterjesus.com/">hipsterjesus.com</a>. The Configure Colors pages allows you to set 
                    colors one at a time to the page and prints the deleted colors' hex values at the top left. The 
                    changes made with each function will persist when switching functions until the browser tab is closed 
                    or reloaded</p>
                    <p>Note: If you run the browser extension Ghostery, you will need to pause the
                        extension in order for the color scheme randomization to work. I have not tested it
                        against regular ad-blockers or other extensions.
                    </p>
                    <h4 className='otherh4' >Screenshot of the Configure Colors function</h4>
                    <img src={require("./configure-colors.jpg")} alt="screenshot of configure colors page" />
            </div>
        )
    }
}

export default HowToUse;