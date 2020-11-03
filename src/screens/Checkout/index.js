import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Button, Card, CheckBox} from 'native-base';

import style from './style';

import mastercard from '../../assets/mastercard.png';
import pos from '../../assets/pos-indo.png';
import gopay from '../../assets/gopay.png';

export default class Checkout extends Component {
  state = {
    payment: [
      {
        img: mastercard,
        name: 'MasterCard',
        checked: 'mastercard',
      },
      {
        img: pos,
        name: 'Pos Indonesia',
        checked: 'pos',
      },
      {
        img: gopay,
        name: 'Gopay',
        checked: 'gopay',
      },
    ],
    mastercard: false,
    pos: false,
    gopay: false,
  };

  select = (name) => {
    if (name === 'mastercard') {
      this.setState({mastercard: !this.state.mastercard});
    } else if (name === 'pos') {
      this.setState({pos: !this.state.pos});
    } else {
      this.setState({gopay: !this.state.gopay});
    }
  };

  render() {
    return (
      <>
        <View style={style.parent}>
          <View style={style.title}>
            <Text style={style.titleText}>Shipping address</Text>
          </View>
          <Card style={style.card}>
            <View style={style.header}>
              <Text style={style.headerName}>Name</Text>
              <TouchableOpacity>
                <Text style={style.headerChange}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text>Address</Text>
          </Card>
          <View style={style.title}>
            <Text style={style.titleText}>Payment</Text>
          </View>
          {this.state.payment.map((i) => (
            <View style={style.paymentWrapper}>
              <Card style={style.payCard}>
                <Image source={i.img} />
              </Card>
              <View style={style.payName}>
                <Text>{i.name}</Text>
                <CheckBox
                  onPress={() => this.select(i.checked)}
                  checked={this.state[i.checked]}
                  color="#DB3022"
                />
              </View>
            </View>
          ))}
        </View>
        <View style={style.total}>
          <View style={style.list}>
            <Text style={style.listName}>Order:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Delivery:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Summary:</Text>
            <Text style={style.listValue}>$</Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Success')}
            style={style.btn}
            block>
            <Text style={style.btnText}>submit order</Text>
          </Button>
        </View>
      </>
    );
  }
}
