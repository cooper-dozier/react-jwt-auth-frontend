import '../../Reset.css'
import React, { Component } from 'react';
import './App2.css';
import axios from 'axios';
import RandomizeColors from '../Project2/RandomizeColors';
import RandomizeLayout from '../Project2/RandomizeLayout';
import ConfigureColors from '../Project2/ConfigureColors';
import ConfigureText from '../Project2/ConfigureText';
import HowToUse from '../Project2/HowToUse';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App2 extends Component {
  constructor(props) {
    super();
    this.state = {
      colors: [],
      positionings: [],
      positionClass: 'static',
      removedColors: [],
      paragraphText: '',
      bgColorPrint: 'antiquewhite',
    }
    this.randomizeColors = this.randomizeColors.bind(this)
    this.shuffleLayout = this.shuffleLayout.bind(this)
    this.setAColor = this.setAColor.bind(this)
    this.hipsterIpsum = this.hipsterIpsum.bind(this)
    this.bgColor = this.bgColor.bind(this)
    this.bgWhite = this.bgWhite.bind(this)
    this.bgBlack = this.bgBlack.bind(this)
  }

  randomizeColors() {
    axios({
      url: `https://cors-anywhere.herokuapp.com/http://www.colr.org/json/schemes/random/1`,
      method: 'get'
    })
      .then(response => {
        this.setState({
          colors: response.data.schemes[0].colors,
        })

      })
  }

  hipsterIpsum() {
    axios({
      url: 'https://cors-anywhere.herokuapp.com/http://hipsterjesus.com/api/?paras=1&html=false',
      method: 'get'
    })
      .then(response => {
        // console.log(response.data.text)
        this.setState({
          paragraphText: response.data.text,
        })
        console.log(this.state.paragraphText)
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
    removedColors.push([`${index}: #${removedColor}`,`#${removedColor}`])
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
    wholePage.setAttribute('style','background-color: antiquewhite')
    this.setState({
      bgColorPrint: 'antiquewhite'
    })
  }
  bgBlack() {
    let wholePage = document.querySelector('body')
    wholePage.setAttribute('style','background-color: #050812;')
    this.setState({
      bgColorPrint: '#050812'
    })
  }


  render() {
    let colorTags = this.state.colors.map((element) => { return `#${element}` })
    let positionings = this.state.positionings
    let positionClass = this.state.positionClass
    let paragraphText = this.state.paragraphText

    return (

      <Router basename='/'>
        <div className="App">
          <h1>Color Schemes Explorer</h1>
          <nav>
            <Link to="/">How to Use</Link>
            <Link to="/randomize-colors">Randomize by Color Scheme</Link>
            <Link to="/randomize-layout">Randomize Layout</Link>
            <Link to="/configure-colors">Configure Colors</Link>
            <Link to="/configure-text">Configure Text</Link>
          </nav>
          <Route exact path="/" component={HowToUse} />
          <Route path="/randomize-colors">
            <RandomizeColors colorTags={colorTags} positionings={positionings}
              positionClass={positionClass} paragraphText={paragraphText}
              randomizeColors={this.randomizeColors} 
              bgColor={this.bgColor} bgWhite={this.bgWhite} bgBlack={this.bgBlack} />
          </Route>
          <Route path="/randomize-layout">
            <RandomizeLayout colorTags={colorTags} positionings={positionings} positionClass={positionClass} 
            shuffleLayout={this.shuffleLayout} hipsterIpsum={this.hipsterIpsum} paragraphText={paragraphText} />
          </Route>
          <Route path="/configure-colors">
            <ConfigureColors colorTags={colorTags} positionings={positionings}
              positionClass={positionClass} paragraphText={paragraphText} bgColorPrint={this.state.bgColorPrint}
              removedColors={this.state.removedColors} setAColor={this.setAColor} />
          </Route>
          <Route path='/configure-text'>
            <ConfigureText colorTags={colorTags} positionings={positionings}
              positionClass={positionClass} paragraphText={paragraphText} bgColorPrint={this.state.bgColorPrint}
              removedColors={this.state.removedColors} setAColor={this.setAColor} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App2;
