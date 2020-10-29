import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'native-base';

import style from './style';

export default class MyOrder extends Component {
  render() {
    return (
      <Card style={style.card}>
        <View style={style.header}>
          <Text style={style.orderNumb}>Order No.#</Text>
          <Text style={style.headerDate}>Date</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Tracking number : </Text>
          <Text style={style.listValue}>#</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Quantity : </Text>
          <Text style={style.listValue}>#</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Total Amount : </Text>
          <Text style={style.listValue}>#</Text>
        </View>
        <View style={style.footer}>
          {/* <Text style={style.danger}>Status</Text> */}
          <Text style={style.success}>Status</Text>
        </View>
      </Card>
    );
  }
}
