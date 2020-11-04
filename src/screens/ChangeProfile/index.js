import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {Button, Card, Form, H3, Input, Item, Label, Picker} from 'native-base';

import style from './style';
import userAction from '../../redux/actions/user';

export default function ChangeProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [genderId, setGenderId] = useState(0);
  const [dob, setDob] = useState('');

  const {data} = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(userAction.getDetail(token));
  };

  useEffect(() => {
    if (data.length) {
      const i = data[0];
      setName(i.name);
      setEmail(i.email);
      setPhone(i.phone);
      setGenderId(i.gender_id);
      setDob(i.birthdate);
    }
  }, [data]);

  const onSubmit = () => {
    const updated = {
      name,
      email,
      phone,
      genderId,
      birthdate: dob,
    };
    dispatch(userAction.updateDetail(token, updated)) && getData();
  };

  return (
    <ScrollView>
      <View style={style.parent}>
        <H3 style={style.title}>Change Personal Information</H3>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Full name</Label>
            <Input
              onChangeText={(e) => setName(e)}
              style={style.input}
              value={name}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Email</Label>
            <Input
              onChangeText={(e) => setEmail(e)}
              style={style.input}
              value={email}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Phone Number</Label>
            <Input
              onChangeText={(e) => setPhone(e)}
              style={style.input}
              value={phone.toString()}
            />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Text style={style.labelText}>Gender</Text>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={style.gender}
              selectedValue={genderId}
              onValueChange={(itemValue) => setGenderId(itemValue)}>
              <Picker.Item label="Male" value={1} />
              <Picker.Item label="Female" value={2} />
            </Picker>
          </Form>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Date of Birth (yyyy-mm-dd)</Label>
            <Input
              onChangeText={(e) => setDob(e)}
              style={style.input}
              value={dob}
            />
          </Item>
        </Card>
        <Button onPress={() => onSubmit()} style={style.btn} block rounded>
          <Text style={style.btnText}>Save</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
