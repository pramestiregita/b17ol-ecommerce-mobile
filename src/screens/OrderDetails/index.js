import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';

import style from './style';

import List from '../../components/CardOrderDetails';

export default class OrderDetails extends Component {
  render() {
    return (
      <View style={style.bg}>
        <View style={style.parent}>
          <View style={style.orderDesc}>
            <Text style={style.orderNumb}>Order No.#</Text>
            <Text style={style.orderDate}>Date</Text>
          </View>
          <View style={style.track}>
            <View style={style.trackNumb}>
              <Text style={style.trackName}>Tracking Number: </Text>
              <Text style={style.trackNo}>#</Text>
            </View>
            {/* <Text style={style.success}>Status</Text> */}
            <Text style={style.danger}>Status</Text>
          </View>
          <Text style={style.title}># items</Text>
          {/* {[...Array(3)].map((_i, _o) => (
            <List />
          ))} */}
          <List />
          <View style={style.info}>
            <Text style={style.title}>Order Information</Text>
            <View style={style.infoList}>
              <Text style={style.name}>Shipping Address:</Text>
              <Text style={style.value}>
                ValueValueValueValueValueValueValueValue
              </Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Payment method:</Text>
              <Text style={style.value}>Value</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Delivery method:</Text>
              <Text style={style.value}>Value</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Discount:</Text>
              <Text style={style.value}>Value</Text>
            </View>
            <View style={style.infoList}>
              <Text style={style.name}>Total Amount:</Text>
              <Text style={style.value}>Value</Text>
            </View>
          </View>
          <View style={style.btnWrapper}>
            <Button style={style.btn1} block transparent>
              <Text style={style.btn1Text}>Reorder</Text>
            </Button>
            <Button style={style.btn2} block>
              <Text style={style.btn2Text}>Leave feedback</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
