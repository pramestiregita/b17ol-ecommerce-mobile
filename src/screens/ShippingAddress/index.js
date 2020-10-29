import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, View} from 'react-native';
// eslint-disable-next-line no-unused-vars
import {Button, Card} from 'native-base';

import style from './style';

import List from '../../components/CardAddress';

export default class ShippingAddress extends Component {
  render() {
    return (
      <View style={style.parent}>
        <Card style={style.searchbar}>
          <Icon style={style.searchIcon} name="search" />
          <TextInput placeholder="Search" />
        </Card>
        <View style={style.title}>
          <Text style={style.titleText}>Shipping Address</Text>
        </View>
        {[...Array(2)].map((_i, _o) => (
          <List />
        ))}
      </View>
    );
  }
}
