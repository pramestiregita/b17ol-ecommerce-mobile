import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Card} from 'native-base';

import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CardAddress extends Component {
  state = {
    id: 10,
  };
  render() {
    return (
      <Card style={style.parent}>
        <TouchableOpacity
          style={this.props.pri == 1 ? style.selected : style.btn}
          onPress={() => console.log(this.state.id)}
          transparent>
          <View style={style.btnText}>
            <View style={style.header}>
              <Text style={style.name}>{this.props.name}</Text>
              <Button
                style={style.change}
                transparent
                onPress={() => console.log('pressed')}>
                <Text>Change</Text>
              </Button>
            </View>
            <Text>{this.props.address}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
}
