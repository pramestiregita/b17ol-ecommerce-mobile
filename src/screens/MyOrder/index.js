import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {H1} from 'native-base';

import style from './style';
import List from '../../components/CardMyOrder';

export default class MyOrder extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.search}>
          <Icon size={20} name="search" />
        </View>
        <View style={style.title}>
          <H1 style={style.titleText}>My Order</H1>
        </View>
        {[...Array(3)].map((_i, _o) => (
          <List />
        ))}
      </View>
    );
  }
}
