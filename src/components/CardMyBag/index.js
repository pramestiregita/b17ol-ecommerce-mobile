import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity} from 'react-native';
import {Card, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import style from './style';
import Rupiah from '../../helpers/currency';

import image from '../../assets/image.jpg';

export default function CardMyBooking({item}) {
  const [qty, setQty] = useState(item.quantity);
  const navigation = useNavigation();

  const changeQty = (q) => {
    if (q === 'minus') {
      setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
      <Card style={style.card}>
        <Thumbnail
          style={style.itemImg}
          square
          source={item.image ? {uri: API_URL.concat(item.image)} : image}
        />
        <View style={style.itemDesc}>
          <Text style={style.itemName}>{item.name}</Text>
          <View style={style.itemDetails}>
            <View style={style.itemColor}>
              <Text style={style.detailName}>Color: </Text>
              <Text>#</Text>
            </View>
            {/* <View style={style.itemSize}>
              <Text style={style.detailName}>Size: </Text>
              <Text>#</Text>
            </View> */}
          </View>
          <View style={style.itemDetails}>
            <View style={style.itemUnit}>
              <TouchableOpacity
                onPress={() => changeQty('minus')}
                style={style.btn}>
                <Icon style={style.icon} name="minus" />
              </TouchableOpacity>
              <Text style={style.qty}>{qty}</Text>
              <TouchableOpacity
                onPress={() => changeQty('plus')}
                style={style.btn}>
                <Icon style={style.icon} name="plus" />
              </TouchableOpacity>
            </View>
            <Text style={style.itemPrice}>
              <Rupiah value={item.total} />
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
