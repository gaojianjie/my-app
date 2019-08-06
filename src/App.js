import React from 'react';
import { browserHistory, Router, Route} from 'react-router'
import Home from './views/home/home.jsx'
import 'antd/dist/antd.css';
import './assets/css/App.css';

function App() {
    return (
        <Router history={browserHistory} >
            <div className="App">
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
}


export default App;
