import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {
  Button,
  Card,
  Container,
  Content,
  H1,
  H3,
  Input,
  Item,
  Label,
  Left,
  List,
  Right,
  Switch,
} from 'native-base';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import style from './style';
import userAction from '../../redux/actions/user';

export default function Settings(props) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [old, setOld] = useState('');
  const [newPass, setNew] = useState('');
  const [confrim, setConfirm] = useState('');

  const dispatch = useDispatch();

  const {data, alertMsg} = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    console.log(data.length);
    if (data.length) {
      const i = data[0];
      setName(i.name);
      setDob(i.birthdate);
    }
  }, [data]);

  const onSubmit = () => {
    console.log({old, newPass, confrim});
    const body = {
      oldPassword: old,
      newPassword: newPass,
      confrimPassword: confrim,
    };
    dispatch(userAction.updatePassword(token, body));
    showAlert();
  };

  const showAlert = () => {
    if (alertMsg !== '') {
      Alert.alert(alertMsg);
    }
  };

  // useEffect(() => {
  //   showAlert();
  // }, []);

  const renderContent = () => (
    <ScrollView>
      <View style={style.bottomSheet}>
        <Text style={style.bottomTitle}>Password Change</Text>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Old Password</Label>
            <Input onChangeText={(e) => setOld(e)} style={style.input} />
          </Item>
        </Card>
        <TouchableOpacity style={style.forgotLink}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>New Password</Label>
            <Input onChangeText={(e) => setNew(e)} style={style.input} />
          </Item>
        </Card>
        <Card style={style.inputCard}>
          <Item style={style.inputWrapper} floatingLabel>
            <Label style={style.label}>Repeat New Password</Label>
            <Input onChangeText={(e) => setConfirm(e)} style={style.input} />
          </Item>
        </Card>
        <Button onPress={() => onSubmit()} style={style.btn} rounded block>
          <Text style={style.btnText}>Save Password</Text>
        </Button>
      </View>
    </ScrollView>
  );

  const sheetRef = React.createRef();

  return (
    <>
      <Container>
        <Content>
          <View style={style.parent}>
            <H1 style={style.title}>Settings</H1>
            <View style={style.header}>
              <Text style={style.subTitle}>Personal Information</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ChangeProfile')}>
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
              <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
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
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}
