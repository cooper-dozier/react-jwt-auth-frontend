import '../../Reset.css'
import React, { Component } from 'react';
import './App2.css';
import axios from 'axios';
import RandomizeColors from '../Project2/RandomizeColors';
import RandomizeLayout from '../Project2/RandomizeLayout';
import ConfigureColors from '../Project2/ConfigureColors';
import HowToUse from '../Project2/HowToUse';
// import machinery from '../machinery.js';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const databaseUrl = process.env.NODE_ENV === 'production' ? process.env.BACKEND_APP_URL : 'http://localhost:3000'


class App2 extends Component {
  constructor(props) {
    super();
    this.state = {
      colors: [],
      positionings: [],
      positionClass: 'static',
      removedColors: [],
      paragraphText: '',
      headingText: '',
      bgColorPrint: 'antiquewhite',
      colrOrgId: -1,
      textSettings: [],
      isLoggedIn: false,
    }
    this.randomizeColors = this.randomizeColors.bind(this)
    this.shuffleLayout = this.shuffleLayout.bind(this)
    this.setAColor = this.setAColor.bind(this)
    this.hipsterIpsum = this.hipsterIpsum.bind(this)
    this.bgColor = this.bgColor.bind(this)
    this.bgWhite = this.bgWhite.bind(this)
    this.bgBlack = this.bgBlack.bind(this)

    this.fetchScheme = this.fetchScheme.bind(this)
    this.shuffleText = this.shuffleText.bind(this)
    this.saveScheme = this.saveScheme.bind(this)
  }

  componentDidMount() {
    this.hipsterIpsum()
    // if (localStorage.token) {
    //   this.setState({
    //     isLoggedIn: true
    //   })
    // } else {
    //   this.setState({
    //     isLoggedIn: false
    //   })
    // }
  }



  randomizeColors() {
    axios({
      url: `http://www.colr.org/json/schemes/random/1`,
      // url: `https://cors-anywhere.herokuapp.com/http://www.colr.org/json/schemes/random/1`,
      method: 'get'
    })
      .then(response => {
        this.setState({
          colors: response.data.schemes[0].colors,
          colrOrgId: response.data.schemes[0].id

        })
        // console.log(response.data.schemes[0].id)
      })
  }

  fetchScheme(schemeId) {
    axios({
      // url: `https://cors-anywhere.herokuapp.com/http://www.colr.org/json/scheme/${schemeId}`,
      url: `http://www.colr.org/json/scheme/${schemeId}`,
      method: 'get'
    })
      .then(response => {
        this.setState({
          colors: response.data.schemes[0].colors,
          colrOrgId: response.data.schemes[0].id
        })
      })
  }

  hipsterIpsum() {
    axios({
      url: 'http://www.randomtext.me/api/giberish/p-3/15-75',
      method: 'get'
    })
      .then(response => {
        this.setState({
          // remove <p> tags, but not </p> tags, in .replace()
          // https://stackoverflow.com/questions/24302485/remove-p-tags-regular-expression-regex
          paragraphText: response.data.text_out.slice(3, -5).replace(/<p[^>]*>/g, "").split('</p>'),
        })
      })
    axios({
      url: 'https://www.randomtext.me/api/giberish/p-3/1-10',
      method: 'get'
    })
      .then(response => {
        this.setState({
          // randomtext.me doesnt support multiples of h1 tags and we dont want the tags anyway
          headingText: response.data.text_out.slice(3, -6).replace(/<p[^>]*>/g, "").split('</p>'),
        })
      })
  }

  shuffleText() {
    let tempVars = [];
    let textSettingsArray = [];
    // for each of 3 h3's and 3 p's
    // 0-3 of values monospace, serif, sans-serif, cursive/handwriting
    // 0-3 of values text-align: left, center, right, justify
    // 0-1 of values font-weight: normal, bold 
    // 0-1 of values font-style: italic, normal
    // 24 total properties to set out of 12 possible values
    function shuffleOf4() { return Math.floor(Math.random() * 4) }
    function shuffleOf2() { return Math.floor(Math.random() * 2) }
    // get 12 random numbers from 0-3
    for (let i = 0; i < 12; i++) {
      tempVars[i] = shuffleOf4()
    }
    // get 12 random number from 0-1
    for (let i = 12; i < 24; i++) {
      tempVars[i] = shuffleOf2()
    }
    // set six random values for font-family
    for (let i = 0; i < 6; i++) {
      switch (tempVars[i]) {
        case 0:
          // case 4:
          textSettingsArray[i] = 'monospace';
          break;
        case 1:
          // case 5:
          textSettingsArray[i] = 'serif';
          break;
        case 2:
          // case 6:
          // case 7:
          textSettingsArray[i] = 'sans-serif';
          break;
        case 3:
          textSettingsArray[i] = 'cursive';
          break;
        default:
          textSettingsArray[i] = 'monospace';
          break;
      }
    }
    // set six random values for text-align
    for (let i = 6; i < 12; i++) {
      switch (tempVars[i]) {
        case 0:
          // case 4:
          textSettingsArray[i] = 'left';
          break;
        case 1:
          // case 5:
          textSettingsArray[i] = 'center';
          break;
        case 2:
          // case 6:
          textSettingsArray[i] = 'right';
          break;
        case 3:
          // case 7:
          textSettingsArray[i] = 'justify';
          break;
        default:
          textSettingsArray[i] = 'center';
          break;
      }
    }
    // set 6 random values for font-weight
    for (let i = 12; i < 18; i++) {
      switch (tempVars[i]) {
        case 0:
          // case 2:
          // case 3:
          textSettingsArray[i] = 'normal';
          break;
        case 1:
          textSettingsArray[i] = 'bold';
          break;
        default:
          textSettingsArray[i] = 'bold';
          break;
      }
    }
    // set 6 random values for font-style
    for (let i = 18; i < 24; i++) {
      switch (tempVars[i]) {
        case 0:
          // case 2:
          // case 3:
          textSettingsArray[i] = 'normal';
          break;
        case 1:
          textSettingsArray[i] = 'italic';
          break;
        default:
          textSettingsArray[i] = 'normal';
          break;
      }
    }
    // set generated values to state
    this.setState({
      textSettings: textSettingsArray,
    })
  }


  shuffleLayout() {
    let positionsArray = []
    function shuffle(min, max) { return Math.floor(Math.random() * (max - min)) + min }

    for (let i = 0; i < 10; i++) {
      positionsArray[i] = shuffle(-10, 80) + '%'
    }
    for (let i = 11; i < 20; i++) {
      positionsArray[i] = shuffle(15, 65) + '%'
    }
    for (let i = 21; i < 30; i++) {
      positionsArray[i] = shuffle(2, 17) + 'px'
    }
    for (let i = 31; i < 33; i++) {
      positionsArray[i] = shuffle(17, 30) + 'px'
    }
    for (let i = 34; i < 36; i++) {
      positionsArray[i] = shuffle(10, 22) + 'px'
    }
    this.setState({
      positionings: positionsArray,
      positionClass: 'absolute',
    })
    this.hipsterIpsum()
  }

  setAColor(color, index) {
    let tempColors = this.state.colors
    let removedColor = tempColors[index]
    let removedColors = this.state.removedColors
    removedColors.push([`${index}: #${removedColor}`, `#${removedColor}`])
    tempColors[index] = color
    this.setState({
      colors: tempColors,
      removedColors: removedColors,
    })
  }

  bgColor() {
    let wholePage = document.querySelector('body')
    let bgColor = '#' + (Math.floor(Math.random() * 16777216)).toString(16)
    wholePage.setAttribute('style', `background-color: ${bgColor}`)
    this.setState({
      bgColorPrint: bgColor
    })
  }
  bgWhite() {
    let wholePage = document.querySelector('body')
    wholePage.setAttribute('style', 'background-color: antiquewhite')
    this.setState({
      bgColorPrint: 'antiquewhite'
    })
  }
  bgBlack() {
    let wholePage = document.querySelector('body')
    wholePage.setAttribute('style', 'background-color: #050812;')
    this.setState({
      bgColorPrint: '#050812'
    })
  }

  saveScheme = () => {
    let colorTags4Save = this.state.colors.map((element) => { return `#${element}` })
    let saveSchemeObj = {
      colrOrgId: -1,
      paletteName: 'dummy',
      notes: 'whatevs',
      userId: 3,
      color0: colorTags4Save[0],
      color1: colorTags4Save[1],
      color2: colorTags4Save[2],
      color3: colorTags4Save[3],
      color4: colorTags4Save[4],
      color5: colorTags4Save[5],
      color6: colorTags4Save[6],
      color7: colorTags4Save[7],
      color8: colorTags4Save[8],
      color9: colorTags4Save[9],
      color10: colorTags4Save[10]
    }
    axios(
      {
        method: 'post',
        url: `${databaseUrl}/api/palettes`,
        data: saveSchemeObj
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    let colorTags = this.state.colors.map((element) => { return `#${element}` })
    let positionings = this.state.positionings
    let positionClass = this.state.positionClass
    let paragraphText = this.state.paragraphText
    let textSettings = this.state.textSettings

    return (

      <Router basename='/'>
        <div className="App">
          <nav>
            <Link to="/">How to Use</Link>
            <Link to="/randomize-colors">Randomize Palette</Link>
            <Link to="/randomize-layout">Randomize Page</Link>
            <Link to="/configure-colors">Configure Colors</Link>
          </nav>
          <Route exact path="/" component={HowToUse} />
          <Route path="/randomize-colors">
            <RandomizeColors colorTags={colorTags} positionings={positionings}
              positionClass={positionClass} paragraphText={paragraphText}
              randomizeColors={this.randomizeColors}
              bgColor={this.bgColor} bgWhite={this.bgWhite} bgBlack={this.bgBlack}
              fetchScheme={this.fetchScheme} textSettings={textSettings}
              headingText={this.state.headingText} />
          </Route>
          <Route path="/randomize-layout">
            <RandomizeLayout colorTags={colorTags} positionings={positionings} positionClass={positionClass}
              shuffleLayout={this.shuffleLayout} hipsterIpsum={this.hipsterIpsum} paragraphText={paragraphText}
              textSettings={textSettings} shuffleText={this.shuffleText} headingText={this.state.headingText} />
          </Route>
          <Route path="/configure-colors">
            <ConfigureColors colorTags={colorTags} positionings={positionings}
              positionClass={positionClass} paragraphText={paragraphText} bgColorPrint={this.state.bgColorPrint}
              removedColors={this.state.removedColors} setAColor={this.setAColor}
              textSettings={textSettings} saveScheme={this.saveScheme} headingText={this.state.headingText} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App2;
