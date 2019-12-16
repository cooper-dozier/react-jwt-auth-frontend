import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/App/App1';
import App2 from './components/App/App2';
import AppNew from './components/App/AppNew';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        {/* <App2 /> */}
        <App1 />
        {/* <AppNew /> */}
    </Router>,
    document.getElementById('root')
);


