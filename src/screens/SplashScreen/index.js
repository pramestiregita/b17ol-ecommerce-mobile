import React, {Component} from 'react';
import {Image, View} from 'react-native';

import style from './style';

import logo from '../../assets/shopping-bag.png';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={style.parent}>
        <Image style={style.logo} source={logo} />
      </View>
    );
  }
}
