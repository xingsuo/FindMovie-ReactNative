import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';

export default class FindMovies extends Component {
    render() {
        return (
            <Provider store={Store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('FindMovie', () => FindMovies);
