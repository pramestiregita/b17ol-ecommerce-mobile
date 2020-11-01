import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, Text, View} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Form,
  H1,
  Input,
  Item,
  Label,
} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import authAction from '../../redux/actions/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
    alertMsg: '',
  };

  login = () => {
    console.log(this.state);
    const {email, password} = this.state;
    const data = {email, password};
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
        <View style={style.title}>
          <H1 style={style.titleText}>Login</H1>
        </View>
        <Form>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Email</Label>
                  <Input
                    onChangeText={(email) => this.setState({email})}
                    style={style.input}
                  />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card style={style.inputCard}>
            <CardItem>
              <Body>
                <Item style={style.inputWrapper} floatingLabel>
                  <Label style={style.label}>Password</Label>
                  <Input
                    onChangeText={(password) => this.setState({password})}
                    style={style.input}
                    secureTextEntry
                  />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <View style={style.linkWrapper}>
            <Text style={style.textLink}>Forgot your password?</Text>
            <Icon style={style.iconLink} name="long-arrow-right" size={19} />
          </View>
          <View style={style.btnWrapper}>
            <Button onPress={this.login} style={style.btn}>
              <Text style={style.btnText}>login</Text>
            </Button>
          </View>
        </Form>
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
