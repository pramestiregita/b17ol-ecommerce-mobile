import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {
  Button,
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
import BottomSheet from 'reanimated-bottom-sheet';
import {Formik} from 'formik';
import * as Yup from 'yup';

import style from './style';
import userAction from '../../redux/actions/user';

const passwordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Please input your old password'),
  newPassword: Yup.string().required('Please input your new password'),
  confirmPassword: Yup.string()
    .required('Please reenter your new password')
    .oneOf([Yup.ref('newPassword'), null], "Password doesn't match"),
});

export default function Settings(props) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const dispatch = useDispatch();

  const {data, alertMsg} = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (data.length) {
      const i = data[0];
      setName(i.name);
      setDob(i.birthdate);
    }
  }, [data]);

  const onSubmit = (body) => {
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
    <Formik
      initialValues={{oldPassword: '', newPassword: '', confirmPassword: ''}}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={passwordSchema}>
      {({handleBlur, handleChange, handleSubmit, values, errors, touched}) => (
        <ScrollView>
          <View style={style.bottomSheet}>
            <Text style={style.bottomTitle}>Password Change</Text>
            <Card style={style.inputCard}>
              <Item style={style.inputWrapper} floatingLabel>
                <Label style={style.label}>Old Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  style={style.input}
                  value={values.oldPassword}
                />
              </Item>
              {errors.oldPassword && touched.oldPassword ? (
                <View style={style.alertWrapper}>
                  <Icon style={style.alertIcon} name="exclamation-triangle" />
                  <Text style={style.alert}>{errors.oldPassword}</Text>
                </View>
              ) : null}
            </Card>
            <TouchableOpacity style={style.forgotLink}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <Card style={style.inputCard}>
              <Item style={style.inputWrapper} floatingLabel>
                <Label style={style.label}>New Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  style={style.input}
                  value={values.newPassword}
                />
              </Item>
              {errors.newPassword && touched.newPassword ? (
                <View style={style.alertWrapper}>
                  <Icon style={style.alertIcon} name="exclamation-triangle" />
                  <Text style={style.alert}>{errors.newPassword}</Text>
                </View>
              ) : null}
            </Card>
            <Card style={style.inputCard}>
              <Item style={style.inputWrapper} floatingLabel>
                <Label style={style.label}>Repeat New Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  style={style.input}
                  value={values.confirmPassword}
                />
              </Item>
              {errors.confirmPassword && touched.confirmPassword ? (
                <View style={style.alertWrapper}>
                  <Icon style={style.alertIcon} name="exclamation-triangle" />
                  <Text style={style.alert}>{errors.confirmPassword}</Text>
                </View>
              ) : null}
            </Card>
            <Button onPress={handleSubmit} style={style.btn} rounded block>
              <Text style={style.btnText}>Save Password</Text>
            </Button>
          </View>
        </ScrollView>
      )}
    </Formik>
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
