import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button, Card} from 'native-base';

import style from './style';

export default class EditAddress extends Component {
  render() {
    return (
      <View style={style.parent}>
        <Card style={style.card}>
          <View style={style.inputWrapper}>
            <Text style={style.label}>
              Save address as (ex: home address, office address)
            </Text>
            <TextInput style={style.input} value="Home" />
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.label}>Recipient's Name</Text>
            <TextInput style={style.input} value="Home" />
          </View>
        </Card>
        <Card style={style.card}>
          <View style={style.inputWrapper}>
            <Text style={style.label}>Address</Text>
            <TextInput style={style.input} value="Home" />
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.label}>City or Subdistrict</Text>
            <TextInput style={style.input} value="Home" />
          </View>
          <View style={style.inputWrapper}>
            <Text style={style.label}>Postal Code</Text>
            <TextInput style={style.input} value="Home" />
          </View>
        </Card>
        <Card style={style.card}>
          <View style={style.inputWrapper}>
            <Text style={style.label}>Recipient's Phone Number</Text>
            <TextInput style={style.input} value="Home" />
          </View>
        </Card>
        <Button style={style.btn} block>
          <Text style={style.btnText}>save address</Text>
        </Button>
      </View>
    );
  }
}
