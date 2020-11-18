import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'native-base';
import dateFormat from 'dateformat';

import style from './style';

export default function CardMyOrder({item}) {
  const date = dateFormat(item.date, 'dd-mm-yyyy');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', {id: item.id})}>
      <Card style={style.card}>
        <View style={style.header}>
          <Text style={style.orderNumb}>Order No.{item.transaction_id}</Text>
          <Text style={style.headerDate}>{date}</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Tracking number : </Text>
          <Text style={style.listValue}>#</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Quantity : </Text>
          <Text style={style.listValue}>{item.quantity}</Text>
        </View>
        <View style={style.cardBody}>
          <Text style={style.listName}>Total Amount : </Text>
          <Text style={style.listValue}>{item.summary}</Text>
        </View>
        <View style={style.footer}>
          {/* <Text style={style.danger}>Status</Text> */}
          <Text style={style.success}>Status</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
