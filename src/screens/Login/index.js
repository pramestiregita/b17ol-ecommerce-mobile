import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Form,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';

import style from './style';

export default class Signup extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.title}>
          <H1 style={style.titleText}>Login</H1>
        </View>
        <Form>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Email</Label>
                  <Input style={style.input} />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Password</Label>
                  <Input style={style.input} secureTextEntry />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <View style={style.linkWrapper}>
            <Text style={style.textLink}>Forgot your password?</Text>
            <Icon style={style.iconLink} name="long-arrow-right" size={19} />
          </View>
          <View style={style.btnWrapper}>
            <Button style={style.btn}>
              <Text style={style.btnText}>login</Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
