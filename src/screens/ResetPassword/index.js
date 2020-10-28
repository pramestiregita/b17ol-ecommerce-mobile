import React, {Component} from 'react';
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

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.title}>
          <H1 style={style.titleText}>Reset Password</H1>
        </View>
        <View style={style.info}>
          <Text style={style.infoText}>
            You need to change your password to activate your account
          </Text>
        </View>
        <Form>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>New Password</Label>
                  <Input style={style.input} secureTextEntry />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Confirmation New Password</Label>
                  <Input style={style.input} secureTextEntry />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <View style={style.btnWrapper}>
            <Button style={style.btn}>
              <Text style={style.btnText}>reset password</Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
