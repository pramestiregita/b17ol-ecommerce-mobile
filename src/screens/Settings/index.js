import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  Container,
  Content,
  H1,
  Input,
  Item,
  Label,
  Left,
  List,
  Right,
  Switch,
} from 'native-base';

import style from './style';

export default function Settings() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const {data} = useSelector((state) => state.user);

  useEffect(() => {
    console.log(data.length);
    if (data.length) {
      const i = data[0];
      setName(i.name);
      setDob(i.birthdate);
    }
  }, [data]);

  return (
    <Container>
      <Content>
        <View style={style.parent}>
          <H1 style={style.title}>Settings</H1>
          <View style={style.header}>
            <Text style={style.subTitle}>Personal Information</Text>
            <TouchableOpacity>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <Card style={style.inputCard}>
            <Item style={style.inputWrapper} floatingLabel>
              <Label style={style.label}>Full name</Label>
              <Input disabled style={style.input} value={name} />
            </Item>
          </Card>
          <Card style={style.inputCard}>
            <Item style={style.inputWrapper} floatingLabel>
              <Label style={style.label}>Date of Birth</Label>
              <Input disabled style={style.input} value={dob} />
            </Item>
          </Card>
          <View style={style.header}>
            <Text style={style.subTitle}>Password</Text>
            <TouchableOpacity>
              <Text>Change</Text>
            </TouchableOpacity>
          </View>
          <Card style={style.inputCard}>
            <Item style={style.inputWrapper} floatingLabel>
              <Label style={style.label}>Password</Label>
              <Input style={style.input} secureTextEntry />
            </Item>
          </Card>
          <Text style={style.subTitle}>Notifications</Text>
          <List style={style.notif}>
            <Left>
              <Text>Sales</Text>
            </Left>
            <Right>
              <Switch value={false} />
            </Right>
          </List>
          <List style={style.notif}>
            <Left>
              <Text>New arrivals</Text>
            </Left>
            <Right>
              <Switch value={false} />
            </Right>
          </List>
          <List style={style.notif}>
            <Left>
              <Text>Delivery status changes</Text>
            </Left>
            <Right>
              <Switch value={false} />
            </Right>
          </List>
        </View>
      </Content>
    </Container>
  );
}
