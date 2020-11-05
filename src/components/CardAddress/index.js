import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'native-base';

import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CardAddress extends Component {
  state = {
    id: 10,
  };
  render() {
    return (
      <Card style={style.parent}>
        <View
          style={[
            style.btnText,
            this.props.pri === 1 ? style.selected : style.btn,
          ]}>
          <View style={style.header}>
            <Text style={style.name}>{this.props.name}</Text>
            <TouchableOpacity
              style={style.change}
              transparent
              onPress={() => this.props.navigation.navigate('EditAddress')}>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => console.log(this.state.id)}
            transparent>
            <Text>{this.props.address}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}
