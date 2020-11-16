import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';

import style from './style';
import Star from '../../components/StarRatings';
import List from '../../components/NewProduct';

import img from '../../assets/image.jpg';

export default class ProductDetail extends Component {
  state = {
    data: [
      {
        id: 1,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 2,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 3,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 4,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 5,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
    ],
  };

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
                    <Text style={style.store}>H&M</Text>
                    <Text style={style.name}>Short black dress</Text>
                  </View>
                  <Text style={style.price}>$19.99</Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Review')}
                  style={style.rating}>
                  <Star q={5} />
                  <Text style={style.review}>(10)</Text>
                </TouchableOpacity>
                <View>
                  <Text style={style.des}>
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
                <View style={style.colorWrapper}>
                  <TouchableOpacity
                    style={[style.circle, {borderColor: 'red'}]}>
                    <View style={[style.color, {backgroundColor: 'red'}]}>
                      <Text>&nbsp;</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={style.titleWrapper}>
                    <Text style={style.title}>You can also like this</Text>
                    <Text style={style.subtitle}>12 items</Text>
                  </View>
                  <FlatList
                    horizontal
                    data={this.state.data}
                    renderItem={List}
                    keyExtractor={(item) => item.id}
                  />
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
