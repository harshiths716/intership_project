import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Reducers/index';
//import ChangeName from './Containers/ChangeName';
//import Loginsc from '../src/screens/login_screen/loginsc.js'
import Login from './Containers/Login';
import Apidisplaya from './Components/apicall'
import Firststack from '../src/screens/navigationstacks/App'
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <Provider store={store}>
                <Firststack />
            </Provider>
        );
    }
}