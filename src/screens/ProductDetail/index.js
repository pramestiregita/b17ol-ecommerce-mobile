import React, {Component} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {Button, Card, Container, Content} from 'native-base';

import style from './style';

import img from '../../assets/image.jpg';

export default class ProductDetail extends Component {
  render() {
    return (
      <>
        <View style={style.parent}>
          <ScrollView>
            <View style={style.wrapper}>
              <View>
                <Image style={style.img} source={img} />
              </View>
              <View style={style.content}>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
                <Text>A</Text>
              </View>
            </View>
          </ScrollView>
          <View style={style.btnWrapper}>
            <Button style={style.btn} block rounded>
              <Text style={style.btnText}>Add to cart</Text>
            </Button>
          </View>
        </View>
      </>
    );
  }
}
