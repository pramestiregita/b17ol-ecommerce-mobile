import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Main from './src/screens/Main';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
