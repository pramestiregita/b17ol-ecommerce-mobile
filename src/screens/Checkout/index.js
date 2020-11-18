import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Button, Card, CheckBox} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import addressAction from '../../redux/actions/address';
import orderAction from '../../redux/actions/order';
import cartAction from '../../redux/actions/cart';
import Rupiah from '../../helpers/currency';

import mastercard from '../../assets/mastercard.png';
import pos from '../../assets/pos-indo.png';
import gopay from '../../assets/gopay.png';

class Checkout extends Component {
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

  getAddress = () => {
    this.props.primary(this.props.token);
  };

  componentDidMount() {
    this.getAddress();
  }

  checkout = async () => {
    const {value} = await this.props.transaction(this.props.token);
    console.log(value);
    if (value.data.success) {
      this.props.navigation.navigate('Success');
      this.props.getCart(this.props.token);
    }
  };

  componentDidUpdate() {}

  render() {
    const {address, total} = this.props;
    return (
      <>
        {console.log(this.props.address)}
        <View style={style.parent}>
          <ScrollView>
            <View style={style.title}>
              <Text style={style.titleText}>Shipping address</Text>
            </View>
            <Card style={style.card}>
              <View style={style.header}>
                <Text style={style.headerName}>{address.name}</Text>
                <TouchableOpacity>
                  <Text style={style.headerChange}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text>{address.address}</Text>
            </Card>
            <View style={style.title}>
              <Text style={style.titleText}>Payment</Text>
            </View>
            {this.state.payment.map((i, o) => (
              <View key={o} style={style.paymentWrapper}>
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
          </ScrollView>
        </View>
        <View style={style.total}>
          <View style={style.list}>
            <Text style={style.listName}>Order:</Text>
            <Text style={style.listValue}>
              <Rupiah value={total} />
            </Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Delivery:</Text>
            <Text style={style.listValue}>
              <Rupiah value={10000} />
            </Text>
          </View>
          <View style={style.list}>
            <Text style={style.listName}>Summary:</Text>
            <Text style={style.listValue}>
              <Rupiah value={total + 10000} />
            </Text>
          </View>
          <Button onPress={() => this.checkout()} style={style.btn} block>
            <Text style={style.btnText}>submit order</Text>
          </Button>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  address: state.address.primary,
  total: state.cart.summary,
  success: state.order.isSuccess,
});

const mapDispatchToProps = {
  primary: addressAction.getPrimary,
  transaction: orderAction.checkout,
  getCart: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
