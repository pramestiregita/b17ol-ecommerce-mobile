import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';

import style from './style';

import List from '../../components/CardCategory';

export default class CategoryDetail extends Component {
  render() {
    return (
      <Container>
        <Content style={style.bg}>
          <View style={style.header}>
            <Text style={style.title}>Name</Text>
            <View style={style.advFunc}>
              <TouchableOpacity style={style.func}>
                <Icon name="filter" size={18} />
                <Text style={style.text}>Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.func}>
                <Icon name="sort" size={18} />
                <Text style={style.text}>Price: lowest to high</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.func}>
                <Icon name="th" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.content}>
            {[...Array(10)].map((i, o) => (
              <List key={o} />
            ))}
          </View>
        </Content>
      </Container>
    );
  }
}
