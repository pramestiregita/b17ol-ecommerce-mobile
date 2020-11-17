import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {Alert, ScrollView, Text, View} from 'react-native';
import {Button, Card, Input, Item, Label} from 'native-base';
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
class AddAddress extends Component {
  state = {
    alertMsg: '',
  };

  onSubmit = async (data) => {
    await this.props.addNew(this.props.token, data);
    this.showAlert();
  };

  showAlert = () => {
    const {alertMsg} = this.props.address;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      Alert.alert(alertMsg);
    }
    this.props.getData(this.props.token);
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          recipientName: '',
          recipientPhone: '',
          address: '',
          postalCode: '',
          city: '',
        }}
        onSubmit={(values) => this.onSubmit(values)}
        validationSchema={addressSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView>
            <View style={style.parent}>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>Save as</Label>
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
              </View>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>Recipient's Name</Label>
                    <Input
                      onChangeText={handleChange('recipientName')}
                      onBlur={handleBlur('recipientName')}
                      style={style.input}
                      value={values.recipientName}
                    />
                  </Item>
                  {errors.recipientName && touched.recipientName ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.recipientName}</Text>
                    </View>
                  ) : null}
                </Card>
              </View>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>Recipient's Phone Number</Label>
                    <Input
                      onChangeText={handleChange('recipientPhone')}
                      onBlur={handleBlur('recipientPhone')}
                      style={style.input}
                      value={values.recipientPhone}
                    />
                  </Item>
                  {errors.recipientPhone && touched.recipientPhone ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.recipientPhone}</Text>
                    </View>
                  ) : null}
                </Card>
              </View>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>Address</Label>
                    <Input
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      style={style.input}
                      value={values.address}
                    />
                  </Item>
                  {errors.address && touched.address ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.address}</Text>
                    </View>
                  ) : null}
                </Card>
              </View>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>City</Label>
                    <Input
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      style={style.input}
                      value={values.city}
                    />
                  </Item>
                  {errors.city && touched.city ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.city}</Text>
                    </View>
                  ) : null}
                </Card>
              </View>
              <View style={style.cardWrapper}>
                <Card style={style.card}>
                  <Item style={style.item} floatingLabel>
                    <Label style={style.label}>Zip Code (Postal Code)</Label>
                    <Input
                      onChangeText={handleChange('postalCode')}
                      onBlur={handleBlur('postalCode')}
                      style={style.input}
                      value={values.postalCode}
                    />
                  </Item>
                  {errors.postalCode && touched.postalCode ? (
                    <View style={style.alertWrapper}>
                      <Icon
                        style={style.alertIcon}
                        name="exclamation-triangle"
                      />
                      <Text style={style.alert}>{errors.postalCode}</Text>
                    </View>
                  ) : null}
                </Card>
              </View>
              <Button onPress={handleSubmit} style={style.btn} block>
                <Text style={style.btnText}>Save Address</Text>
              </Button>
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  address: state.address,
});

const mapDispatchToProps = {
  addNew: addressAction.addAddress,
  getData: addressAction.getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
