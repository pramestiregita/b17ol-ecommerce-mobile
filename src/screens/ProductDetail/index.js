import React, {Component} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {Button, Card, Container, Content} from 'native-base';

import style from './style';
import Star from '../../components/StarRatings';
import List from '../../components/NewProduct';

import img from '../../assets/image.jpg';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

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
                <View style={style.header}>
                  <View>
                    <Text>H&M</Text>
                    <Text>Short black dress</Text>
                  </View>
                  <Text>$19.99</Text>
                </View>
                <View style={style.rating}>
                  <Star q={5} />
                </View>
                <View>
                  <Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text>Color</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>You can also like this</Text>
                  <FlatList />
                </View>
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
