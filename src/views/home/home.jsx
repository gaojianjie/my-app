import React, { Component } from 'react';
import './css/home.min.css'
import Button from 'antd/es/button';


// eslint-disable-next-line react/require-render-return
class Homes extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render() {
        return <div className="homepage">
            <header className="app-header">这个是头部</header>
            <div className="app-content">
                <Button type="primary">Button</Button>
            </div>
        </div>
    }
}

export default Homes;
