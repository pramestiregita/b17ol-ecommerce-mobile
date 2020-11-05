import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Button, Card, Textarea} from 'native-base';

import style from './style';

import addressAction from '../../redux/actions/address';

class EditAddress extends Component {
  state = {
    name: '',
    fullname: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  };

  componentDidMount() {
    const {id} = this.props.route.params;
    this.props.getData(this.props.token, id);
    this.setData();
  }

  setData = async () => {
    const data = await this.props.detail;
    data.length &&
      data.map((i, _o) => {
        this.setState({
          name: i.name,
          fullname: i.recipient_name,
          address: i.address,
          city: i.city,
          postalCode: i.postal_code,
          phone: i.recipient_phone,
        });
      });
  };

  onSubmit = () => {
    console.log(this.state);
    const {name, fullname, address, city, postalCode, phone} = this.state;
    const data = {
      name,
      recipient_name: fullname,
      address,
      city,
      postal_code: postalCode,
      recipient_phone: phone,
    };
    this.props.update(this.props.token, this.props.route.params.id, data);
  };

  setAddress = async () => {
    await this.props.setData(this.props.token);
  };

  componentDidUpdate() {
    this.setAddress();
  }

  render() {
    const {name, fullname, address, city, postalCode, phone} = this.state;
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
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  detail: state.address.detail,
});

const mapDispatchToProps = {
  setData: addressAction.getAddress,
  getData: addressAction.getDetail,
  update: addressAction.updateAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
