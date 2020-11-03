import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import style from './style';

import pict from '../../assets/bags.png';
import {Button} from 'native-base';

export default class Success extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.content}>
          <Image source={pict} />
          <Text style={style.title}>Success!</Text>
          <Text style={style.text}>Your order will be delivered soon.</Text>
          <Text style={style.text}>Thank you for choosing our app!</Text>
        </View>
        <View style={style.btnWrapper}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            style={style.btn}
            block>
            <Text style={style.btnText}>Continue Shopping</Text>
          </Button>
        </View>
      </View>
    );
  }
}
