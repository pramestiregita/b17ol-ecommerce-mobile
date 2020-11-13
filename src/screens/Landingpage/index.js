import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import style from './style';

import logo from '../../assets/shopping-bag.png';
import {Button} from 'native-base';

export default class SplashScreen extends Component {
  componentDidMount() {
    RNBootSplash.hide({});
  }

  render() {
    return (
      <View style={style.parent}>
        <View style={style.logo}>
          <Image style={style.img} source={logo} />
        </View>
        <View style={style.content}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            style={style.loginBtn}
            block>
            <Text style={style.login}>Login</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            style={style.signupBtn}
            block
            transparent>
            <Text style={style.signup}>Signup</Text>
          </Button>
        </View>
      </View>
    );
  }
}
