import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

import style from './style';
import authAction from '../../redux/actions/auth';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  password: Yup.string().required('Please input your password'),
});

class Login extends Component {
  state = {
    alertMsg: '',
  };

  login = (data) => {
    this.props.doLogin(data);
  };

  showAlert = () => {
    const {alertMsg} = this.props.auth;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      Alert.alert(alertMsg);
    }
  };

  componentDidUpdate() {
    this.showAlert();
  }

  render() {
    return (
      <View style={style.parent}>
        <ScrollView>
          <View style={style.title}>
            <H1 style={style.titleText}>Login</H1>
          </View>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={(values) => this.login(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Card style={style.inputCard}>
                  <CardItem>
                    <Body>
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
                    </Body>
                  </CardItem>
                </Card>
                <Card style={style.inputCard}>
                  <CardItem>
                    <Body>
                      <Item style={style.inputWrapper} floatingLabel>
                        <Label style={style.label}>Password</Label>
                        <Input
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          style={style.input}
                          secureTextEntry
                          value={values.password}
                        />
                      </Item>
                      {errors.password && touched.password ? (
                        <View style={style.alertWrapper}>
                          <Icon
                            style={style.alertIcon}
                            name="exclamation-triangle"
                          />
                          <Text style={style.alert}>{errors.password}</Text>
                        </View>
                      ) : null}
                    </Body>
                  </CardItem>
                </Card>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }
                  style={style.linkWrapper}>
                  <Text style={style.textLink}>Forgot your password?</Text>
                  <Icon
                    style={style.iconLink}
                    name="long-arrow-right"
                    size={19}
                  />
                </TouchableOpacity>
                <View style={style.btnWrapper}>
                  <Button onPress={handleSubmit} style={style.btn}>
                    <Text style={style.btnText}>login</Text>
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  doLogin: authAction.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
