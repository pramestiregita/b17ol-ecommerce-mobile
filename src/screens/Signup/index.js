import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, Text, View, TouchableOpacity} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

import style from './style';

import authAction from '../../redux/actions/auth';

const signupSchema = Yup.object().shape({
  name: Yup.string().required('Please insert your name'),
  email: Yup.string()
    .email('Please input a valid email')
    .required('Please input your email'),
  password: Yup.string().required('Please insert your password'),
});

class Signup extends Component {
  state = {
    alertMsg: '',
  };

  signup = (data) => {
    this.props.doSignup(data);
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
      <Container>
        <Content>
          <View style={style.parent}>
            <View style={style.title}>
              <H1 style={style.titleText}>Signup</H1>
            </View>
            <Formik
              initialValues={{name: '', email: '', password: ''}}
              validationSchema={signupSchema}
              onSubmit={(values) => this.signup(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <Form>
                  <Card style={style.inputCard}>
                    <CardItem>
                      <Body>
                        <Item style={style.inputWrapper} floatingLabel>
                          <Label style={style.label}>Name</Label>
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
                      </Body>
                    </CardItem>
                  </Card>
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
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={style.linkWrapper}>
                    <Text style={style.textLink}>Already have an account?</Text>
                    <Icon
                      style={style.iconLink}
                      name="long-arrow-right"
                      size={19}
                    />
                  </TouchableOpacity>
                  <View style={style.btnWrapper}>
                    <Button onPress={handleSubmit} style={style.btn}>
                      <Text style={style.btnText}>sign up</Text>
                    </Button>
                  </View>
                </Form>
              )}
            </Formik>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  doSignup: authAction.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
