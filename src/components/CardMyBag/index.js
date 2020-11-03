import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity} from 'react-native';
import {Button, Card, Thumbnail} from 'native-base';

import style from './style';

import image from '../../assets/image.jpg';

export default class CardMyBooking extends Component {
  state = {
    qty: 1,
  };

  changeQty = (q) => {
    if (q === 'minus') {
      this.setState({qty: this.state.qty - 1});
    } else {
      this.setState({qty: this.state.qty + 1});
    }
  };

  render() {
    return (
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={image} />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>Name</Text>
          <View style={style.itemDetails}>
            <View style={style.itemColor}>
              <Text style={style.detailName}>Color: </Text>
              <Text>#</Text>
            </View>
            <View style={style.itemSize}>
              <Text style={style.detailName}>Size: </Text>
              <Text>#</Text>
            </View>
          </View>
          <View style={style.itemDetails}>
            <View style={style.itemUnit}>
              <TouchableOpacity
                onPress={() => this.changeQty('minus')}
                style={style.btn}>
                <Icon style={style.icon} name="minus" />
              </TouchableOpacity>
              <Text style={style.qty}>{this.state.qty}</Text>
              <TouchableOpacity
                onPress={() => this.changeQty('plus')}
                style={style.btn}>
                <Icon style={style.icon} name="plus" />
              </TouchableOpacity>
            </View>
            <Text style={style.itemPrice}>$#</Text>
          </View>
        </View>
      </Card>
    );
  }
}
