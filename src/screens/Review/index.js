import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CheckBox} from 'native-base';

import style from './style';
import List from '../../components/CardReview';

export default class Review extends Component {
  state = {
    q: 8,
  };

  render() {
    return (
      <View style={style.parent}>
        <View style={style.header}>
          <Text style={style.title}>
            {this.state.q} review{this.state.q > 1 ? 's' : null}
          </Text>
          <View style={style.checkbox}>
            <CheckBox style={style.check} />
            <Text style={style.checkText}>With photo</Text>
          </View>
        </View>
        <List />
      </View>
    );
  }
}
