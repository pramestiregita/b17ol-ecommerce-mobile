import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Button, Card, Textarea} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import addressAction from '../../redux/actions/address';

export default function EditProfile(params) {
  const [name, setName] = useState('');
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const {id} = params.route;
  const {token} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getData = 'a';

  useEffect(() => {
    console.log({token, id});
  }, [token, id]);

  return (
    <>
      <ScrollView>
        <View style={style.parent}>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>
                Save address as (ex: home address, office address)
              </Text>
              <TextInput
                onChangeText={(e) => this.setState({name: e})}
                style={style.input}
                value={name}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Recipient's Name</Text>
              <TextInput
                onChangeText={(e) => this.setState({fullname: e})}
                style={style.input}
                value={fullname}
              />
            </View>
          </Card>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Address</Text>
              <Textarea
                onChangeText={(e) => this.setState({address: e})}
                rowSpan={5}
                style={style.input}
                value={address}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>City or Subdistrict</Text>
              <TextInput
                onChangeText={(e) => this.setState({city: e})}
                style={style.input}
                value={city}
              />
            </View>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Postal Code</Text>
              <TextInput
                onChangeText={(e) => this.setState({postalCode: e})}
                style={style.input}
                value={postalCode.toString()}
              />
            </View>
          </Card>
          <Card style={style.card}>
            <View style={style.inputWrapper}>
              <Text style={style.label}>Recipient's Phone Number</Text>
              <TextInput
                onChangeText={(e) => this.setState({phone: e})}
                style={style.input}
                value={phone.toString()}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
      <View style={style.btnWrapper}>
        <Button onPress={this.onSubmit} style={style.btn} block>
          <Text style={style.btnText}>save address</Text>
        </Button>
      </View>
    </>
  );
}
