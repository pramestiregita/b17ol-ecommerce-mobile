import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Card, Input, Item, Label} from 'native-base';

import style from './style';

export default class AddAddress extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>Fullname</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>Address</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>City</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>State/Province/Region</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>Zip Code (Postal Code)</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <View style={style.cardWrapper}>
          <Card style={style.card}>
            <Item style={style.item} floatingLabel>
              <Label style={style.label}>Country</Label>
              <Input style={style.input} />
            </Item>
          </Card>
        </View>
        <Button style={style.btn} block>
          <Text style={style.btnText}>Save Address</Text>
        </Button>
      </View>
    );
  }
}
