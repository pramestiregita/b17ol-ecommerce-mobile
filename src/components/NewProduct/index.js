import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Card} from 'native-base';
import {API_URL} from '@env';

import style from './style';
import Star from '../StarRatings';
import img from '../../assets/image.jpg';
import Rupiah from '../../helpers/currency';

export default function CardProduct({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={style.card}>
        <Image
          style={style.img}
          square
          large
          source={item.image !== null ? {uri: API_URL.concat(item.image)} : img}
        />
        <Text style={style.badge}>New</Text>
        <View style={style.itemDesc}>
          <Star q={item.rating} />
          <Text style={style.itemStore}>{item.store}</Text>
          <Text style={style.itemName}>{item.name}</Text>
          <Text style={style.itemPrice}>
            <Rupiah value={item.price} />
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
