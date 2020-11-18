import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TouchableOpacity} from 'react-native';
import {ActionSheet, Card, Thumbnail} from 'native-base';
import {API_URL} from '@env';

import style from './style';
import Rupiah from '../../helpers/currency';
import cartAction from '../../redux/actions/cart';

import image from '../../assets/image.jpg';

const BUTTONS = ['Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 0;
const CANCEL_INDEX = 1;

export default function CardMyBag({item}) {
  const [qty, setQty] = useState(item.quantity);
  const {token} = useSelector((state) => state.auth);
  const {isDeleted} = useSelector((state) => state.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const changeQty = (q) => {
    if (q === 'minus') {
      setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };

  const deleteCart = async (id) => {
    await dispatch(cartAction.deleteCart(token, id));
    isDeleted && getCart();
  };

  const getCart = () => {
    dispatch(cartAction.getCart(token));
  };

  return (
    <Card style={style.card}>
      <Thumbnail
        style={style.itemImg}
        square
        source={item.image ? {uri: API_URL.concat(item.image)} : image}
      />
      <View style={style.itemDesc}>
        <View style={style.header}>
          <TouchableOpacity
            style={style.nameWrapper}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Text style={style.itemName}>{item.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Options',
                },
                (buttonIndex) => {
                  buttonIndex === 0 && deleteCart(item.id);
                },
              )
            }>
            <Icon name="ellipsis-v" size={20} />
          </TouchableOpacity>
        </View>
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
  );
}
