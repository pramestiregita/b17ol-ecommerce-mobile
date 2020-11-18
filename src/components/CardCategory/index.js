import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import style from './style';
import Star from '../StarRatings';
import Rupiah from '../../helpers/currency';

import image from '../../assets/image.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CardCategory({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {id: item.id})}>
      <Card style={style.card}>
        <Thumbnail
          style={style.itemImg}
          square
          source={
            item.image ? {uri: API_URL.concat(item.product_image)} : image
          }
        />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>{item.name}</Text>
          <Text style={style.itemStore}>{item.store}</Text>
          <View style={style.itemRatings}>
            <Star q={item.rating} />
          </View>
          <Text style={style.itemPrice}>
            <Rupiah value={item.price} />
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
