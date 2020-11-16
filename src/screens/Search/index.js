import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View} from 'react-native';
import {Input, Item} from 'native-base';

import style from './style';

export default class Search extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon size={20} name="arrow-left" />
          </TouchableOpacity>
          <View style={style.searchBar}>
            <Item style={style.search}>
              <Icon style={style.searchIcon} size={15} name="search" />
              <Input placeholder="Search" />
            </Item>
          </View>
        </View>
      </View>
    );
  }
}
