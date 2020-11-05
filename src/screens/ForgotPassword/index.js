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
          <H1 style={style.titleText}>Forgot Password</H1>
        </View>
        <View style={style.info}>
          <Text style={style.infoText}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
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
          <View style={style.btnWrapper}>
            <Button
              onPress={() => this.props.navigation.navigate('ResetPassword')}
              style={style.btn}>
              <Text style={style.btnText}>send</Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
