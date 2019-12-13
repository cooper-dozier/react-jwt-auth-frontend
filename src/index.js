import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/App/App1';
import App2 from './components/App/App2';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App1 />
        <App2 />
    </Router>,
    document.getElementById('root')
);


