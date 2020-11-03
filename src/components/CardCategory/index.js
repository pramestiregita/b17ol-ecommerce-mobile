import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import style from './style';
import Star from '../StarRatings';

import image from '../../assets/image.jpg';

export default class CardCategory extends Component {
  render() {
    return (
      <Card style={style.card}>
        <Thumbnail style={style.itemImg} square source={image} />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>Name</Text>
          <Text style={style.itemStore}>Store</Text>
          <View style={style.itemRatings}>
            <Star q={3} />
          </View>
          <Text style={style.itemPrice}>$#</Text>
        </View>
      </Card>
    );
  }
}
