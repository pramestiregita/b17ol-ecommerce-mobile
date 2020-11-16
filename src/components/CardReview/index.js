import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, View, FlatList} from 'react-native';
import {Card, Thumbnail} from 'native-base';

import style from './style';
import avatar from '../../assets/avatar.png';
import img from '../../assets/image.jpg';
import Star from '../../components/StarRatings';
import Images from '../../components/ReviewImage';

export default class CardReview extends Component {
  state = {
    image: [
      {
        id: 1,
        image: img,
      },
      {
        id: 2,
        image: img,
      },
      {
        id: 3,
        image: img,
      },
      {
        id: 4,
        image: img,
      },
      {
        id: 5,
        image: img,
      },
    ],
  };
  render() {
    return (
      <View style={style.reviewWrapper}>
        <Card style={style.card}>
          <Text style={style.name}>Name</Text>
          <View style={style.reviewDate}>
            <Star q={4} />
            <Text style={style.date}>Date</Text>
          </View>
          <Text style={style.des}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </Text>
          <FlatList
            horizontal
            data={this.state.image}
            renderItem={({item}) => <Images img={item} />}
          />
          <View style={style.likes}>
            <Text style={style.likeText}>Helpful</Text>
            <Icon name="thumbs-up" />
          </View>
        </Card>
        <Thumbnail style={style.avatar} source={avatar} />
      </View>
    );
  }
}
