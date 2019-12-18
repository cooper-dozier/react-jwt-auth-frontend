import '../../Reset.css'
import React, { Component } from 'react';
import './AppNew.css';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import axios from 'axios'

class AppNew extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            user: null
          }
    }
    render() {
        return (
            <div className='home-wrapper'>
                <div className="home-banner">
                </div>
                <nav className="home-nav">
                    <a href="" class="nav-link"></a>
                    <a href="" class="nav-link"></a>     
                    <a href="" class="nav-link"></a>
                    <a href="" class="nav-link"></a>        
                </nav>
            </div>
        )
    }
}

export default AppNew;