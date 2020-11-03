import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'native-base';
import dateFormat from 'dateformat';

import style from './style';

export default class CardMyOrder extends Component {
  render() {
    const date = dateFormat(this.props.date, 'dd-mm-yyyy');
    return (
      <Card style={style.card}>
        <View style={style.header}>
          <Text style={style.orderNumb}>Order No.{this.props.id}</Text>
          <Text style={style.headerDate}>{date}</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Tracking number : </Text>
          <Text style={style.listValue}>#</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Quantity : </Text>
          <Text style={style.listValue}>{this.props.qty}</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Total Amount : </Text>
          <Text style={style.listValue}>{this.props.sum}</Text>
        </View>
        <View style={style.footer}>
          {/* <Text style={style.danger}>Status</Text> */}
          <Text style={style.success}>Status</Text>
        </View>
      </Card>
    );
  }
}
