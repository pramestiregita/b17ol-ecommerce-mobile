import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import style from './style';

import image from '../../assets/image.jpg';

export default class CardOrderDetails extends Component {
  render() {
    return (
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={image} />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>Name</Text>
          <Text style={style.itemStore}>Store</Text>
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
              <Text style={style.detailName}>Unit: </Text>
              <Text>#</Text>
            </View>
            <Text style={style.itemPrice}>$#</Text>
          </View>
        </View>
      </Card>
    );
  }
}
