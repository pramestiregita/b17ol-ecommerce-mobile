import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Card} from 'native-base';

import style from './style';
import Star from '../StarRatings';

export default function CardProduct({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={style.card}>
        <Image style={style.img} square large source={item.img} />
        <View style={style.itemDesc}>
          <Star q={item.rating} />
          <Text style={style.itemStore}>{item.store}</Text>
          <Text style={style.itemName}>{item.name}</Text>
          <Text style={style.itemPrice}>{item.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
