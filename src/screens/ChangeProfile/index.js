import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {Button, Card, Form, H3, Input, Item, Label, Picker} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import style from './style';
import userAction from '../../redux/actions/user';

const profileSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  phone: Yup.string()
    .required('Please input your phone number')
    .max(13, 'Please input a valid phone number'),
  genderId: Yup.number().required('Please choose your gender'),
  birthdate: Yup.string().required('Please insert your birthdate'),
});

export default function ChangeProfile() {
  const [detail, setDetail] = useState({});

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const getData = async () => {
    const {value} = await dispatch(userAction.getDetail(token));
    setDetail(value.data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (update) => {
    dispatch(userAction.updateDetail(token, update));
    getData();
  };

  return (
    Object.keys(detail).length > 1 && (
      <ScrollView>
        <View style={style.parent}>
          <H3 style={style.title}>Change Personal Information</H3>
          <Formik
            initialValues={{
              name: detail.name,
              email: detail.email,
              phone: detail.phone,
              genderId: detail.gender_id,
              birthdate: detail.birthdate,
            }}
            validationSchema={profileSchema}
            onSubmit={(values) => onSubmit(values)}>
            {({
              setFieldValue,
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Card style={style.inputCard}>
                  <Item style={style.inputWrapper} floatingLabel>
                    <Label style={style.label}>Full name</Label>
                    <Input
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      style={style.input}
                      value={values.name}
                    />
                  </Item>
                  {errors.name && touched.name ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.name}</Text>
                    </View>
                  ) : null}
                </Card>
                <Card style={style.inputCard}>
                  <Item style={style.inputWrapper} floatingLabel>
                    <Label style={style.label}>Email</Label>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      style={style.input}
                      value={values.email}
                    />
                  </Item>
                  {errors.email && touched.email ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.email}</Text>
                    </View>
                  ) : null}
                </Card>
                <Card style={style.inputCard}>
                  <Item style={style.inputWrapper} floatingLabel>
                    <Label style={style.label}>Phone Number</Label>
                    <Input
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      style={style.input}
                      value={values.phone.toString()}
                    />
                  </Item>
                  {errors.phone && touched.phone ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.phone}</Text>
                    </View>
                  ) : null}
                </Card>
                {console.log(values)}
                <Card style={style.inputCard}>
                  <Text style={style.labelText}>Gender</Text>
                  <Form>
                    <Picker
                      note
                      mode="dropdown"
                      style={style.gender}
                      selectedValue={values.genderId}
                      onBlur={handleBlur('genderId')}
                      onValueChange={(itemValue) =>
                        setFieldValue('genderId', itemValue)
                      }>
                      <Picker.Item label="Male" value={1} />
                      <Picker.Item label="Female" value={2} />
                    </Picker>
                  </Form>
                  {errors.genderId && touched.genderId ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.genderId}</Text>
                    </View>
                  ) : null}
                </Card>
                <Card style={style.inputCard}>
                  <Item style={style.inputWrapper} floatingLabel>
                    <Label style={style.label}>
                      Date of Birth (yyyy-mm-dd)
                    </Label>
                    <Input
                      onChangeText={handleChange('birthdate')}
                      onBlur={handleBlur('birthdate')}
                      style={style.input}
                      value={values.birthdate}
                    />
                  </Item>
                  {errors.birthdate && touched.birthdate ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.birthdate}</Text>
                    </View>
                  ) : null}
                </Card>
                <Button onPress={handleSubmit} style={style.btn} block rounded>
                  <Text style={style.btnText}>Save</Text>
                </Button>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    )
  );
}
