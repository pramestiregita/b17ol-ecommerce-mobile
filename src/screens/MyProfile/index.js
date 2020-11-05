import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {H1, H3, Left, List, ListItem, Right, Thumbnail} from 'native-base';
import {connect} from 'react-redux';
import {API_URL} from '@env';

import style from './style';

import userAction from '../../redux/actions/user';
import orderAction from '../../redux/actions/order';
import addressAction from '../../redux/actions/address';
import authAction from '../../redux/actions/auth';

import placeholder from '../../assets/avatar.png';

class MyProfile extends Component {
  setData = new Promise((resolve, reject) => {
    this.props.getProfile(this.state.token);
    this.props.getOrder(this.state.token);
    this.props.getAddress(this.state.token);
  });

  logout = () => {
    this.props.doLogout();
  };

  async componentDidMount() {
    await this.setData();
  }

  render() {
    const {data} = this.props.profile;
    const orders = this.props.orderPage;
    const addresses = this.props.addressPage;

    return (
      <View style={style.parent}>
        <View style={style.content}>
          <View style={style.title}>
            <H1 style={style.titleText}>My Profile</H1>
          </View>
          {data.length > 0 &&
            data.map((i) => (
              <View key={i.id} style={style.profileWrapper}>
                <Thumbnail
                  large
                  source={
                    i.profile_picture
                      ? {uri: API_URL.concat(i.profile_picture)}
                      : placeholder
                  }
                />
                <View style={style.profile}>
                  <H3 style={style.profileName}>{i.name}</H3>
                  <Text style={style.profileEmail}>{i.email}</Text>
                </View>
              </View>
            ))}
        </View>
        <View style={style.listWrapper}>
          <List>
            <ListItem
              onPress={() => this.props.navigation.navigate('MyOrder')}
              button>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>My orders</Text>
                <Text style={style.listDesc}>
                  Already have {orders ? orders : 0}{' '}
                  {orders > 1 ? 'orders' : 'order'}
                </Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.props.navigation.navigate('ShippingAddress')}
              button>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>Shipping Addresses</Text>
                <Text style={style.listDesc}>
                  {addresses ? addresses : 0}
                  {addresses > 1 ? ' addresses' : ' address'}
                </Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => this.props.navigation.navigate('Settings')}
              button>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>Settings</Text>
                <Text style={style.listDesc}>Notification, Password</Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem onPress={this.logout} button>
              <Left style={style.listLeft}>
                <Text style={[style.listTitle, style.logout]}>Logout</Text>
              </Left>
              <Right>
                <Icon
                  style={[style.listIcon, style.logout]}
                  name="chevron-right"
                />
              </Right>
            </ListItem>
          </List>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  profile: state.user,
  orderPage: state.order.pageInfo.totalData,
  addressPage: state.address.pageInfo.totalData,
});

const mapDispatchToProps = {
  getProfile: userAction.getDetail,
  getOrder: orderAction.getTransaction,
  getAddress: addressAction.getAddress,
  doLogout: authAction.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
