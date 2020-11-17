import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Button, Card, Textarea} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import style from './style';
import addressAction from '../../redux/actions/address';

const addressSchema = Yup.object().shape({
  name: Yup.string().required('This field must be filled'),
  recipientName: Yup.string().required('This field must be filled'),
  recipientPhone: Yup.string().required('This field must be filled'),
  address: Yup.string().required('This field must be filled'),
  postalCode: Yup.string().required('This field must be filled'),
  city: Yup.string().required('This field must be filled'),
});

export default function EditProfile({route}) {
  const [detail, setDetail] = useState({});
  const {id} = route.params;
  const {token} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getData = async () => {
    const {value} = await dispatch(addressAction.getDetail(token, id));
    setDetail(value.data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const update = (data) => {
    dispatch(addressAction.updateAddress(token, id, data));
  };

  return (
    Object.keys(detail).length > 0 && (
      <Formik
        initialValues={{
          name: detail.name,
          recipientName: detail.recipient_name,
          recipientPhone: detail.recipient_phone,
          address: detail.address,
          postalCode: detail.postal_code,
          city: detail.city,
        }}
        onSubmit={(values) => update(values)}
        validationSchema={addressSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <ScrollView>
              <View style={style.parent}>
                <Card style={style.card}>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>
                      Save address as (ex: home address, office address)
                    </Text>
                    <TextInput
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      style={style.input}
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.name}</Text>
                      </View>
                    ) : null}
                  </View>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>Recipient's Name</Text>
                    <TextInput
                      onChangeText={handleChange('recipientName')}
                      onBlur={handleBlur('recipientName')}
                      style={style.input}
                      value={values.recipientName}
                    />
                    {errors.recipientName && touched.recipientName ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.recipientName}</Text>
                      </View>
                    ) : null}
                  </View>
                </Card>
                <Card style={style.card}>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>Address</Text>
                    <Textarea
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      rowSpan={5}
                      style={style.input}
                      value={values.address}
                    />
                    {errors.address && touched.address ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.address}</Text>
                      </View>
                    ) : null}
                  </View>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>City or Subdistrict</Text>
                    <TextInput
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      style={style.input}
                      value={values.city}
                    />
                    {errors.city && touched.city ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.city}</Text>
                      </View>
                    ) : null}
                  </View>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>Postal Code</Text>
                    <TextInput
                      onChangeText={handleChange('postalCode')}
                      onBlur={handleBlur('postalCode')}
                      style={style.input}
                      value={values.postalCode.toString()}
                    />
                    {errors.postalCode && touched.postalCode ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.postalCode}</Text>
                      </View>
                    ) : null}
                  </View>
                </Card>
                <Card style={style.card}>
                  <View style={style.inputWrapper}>
                    <Text style={style.label}>Recipient's Phone Number</Text>
                    <TextInput
                      onChangeText={handleChange('recipientPhone')}
                      onBlur={handleBlur('recipientPhone')}
                      style={style.input}
                      value={values.recipientPhone.toString()}
                    />
                    {errors.recipientPhone && touched.recipientPhone ? (
                      <View style={style.alertWrapper}>
                        <Icon
                          style={style.alertIcon}
                          name="exclamation-triangle"
                        />
                        <Text style={style.alert}>{errors.recipientPhone}</Text>
                      </View>
                    ) : null}
                  </View>
                </Card>
              </View>
            </ScrollView>
            <View style={style.btnWrapper}>
              <Button onPress={handleSubmit} style={style.btn} block>
                <Text style={style.btnText}>save address</Text>
              </Button>
            </View>
          </>
        )}
      </Formik>
    )
  );
}
