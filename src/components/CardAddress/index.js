import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Card} from 'native-base';

import style from './style';

export default class CardAddress extends Component {
  state = {
    id: 10,
  };
  render() {
    return (
      <Card style={style.parent}>
        <Button
          style={style.selected}
          onPress={() => console.log(this.state.id)}
          transparent>
          <View style={style.btnText}>
            <View style={style.header}>
              <Text style={style.name}>Name</Text>
              <Button
                style={style.change}
                transparent
                onPress={() => console.log('pressed')}>
                <Text>Change</Text>
              </Button>
            </View>
            <Text>Address</Text>
          </View>
        </Button>
      </Card>
    );
  }
}
