import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {
  H1,
  H3,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
  Toast,
} from 'native-base';
import {connect} from 'react-redux';
import {API_URL} from '@env';

import style from './style';

import userAction from '../../redux/actions/user';
import orderAction from '../../redux/actions/order';
import addressAction from '../../redux/actions/address';
import authAction from '../../redux/actions/auth';

import placeholder from '../../assets/avatar.png';

class MyProfile extends Component {
  componentDidMount() {
    this.setProfile();
  }

  setProfile = () => {
    this.props.getProfile(this.props.token);
    this.props.getOrder(this.props.token);
    this.props.getAddress(this.props.token);
  };

  logout = () => {
    this.props.doLogout();
  };

  avatar = () => {
    const form = new FormData();
    const options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
      noData: true,
      mediaType: 'photo',
    };
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        Alert.alert("You didn't select an image");
      } else if (response.error) {
        Alert.alert('Try again later!');
      } else if (response.fileSize > 30000) {
        Alert.alert('File is too big');
      } else {
        form.append('picture', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        const {value} = await this.props.updateAva(this.props.token, form);
        if (value.data.success) {
          this.setProfile();
          Toast.show({
            text: value.data.message,
            duration: 3000,
            position: 'top',
            type: 'success',
            textStyle: {
              fontWeight: 'bold',
            },
          });
        }
      }
    });
  };

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
                <TouchableOpacity onPress={() => this.avatar()}>
                  <Thumbnail
                    large
                    source={
                      i.profile_picture
                        ? {uri: API_URL.concat(i.profile_picture)}
                        : placeholder
                    }
                  />
                </TouchableOpacity>
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
  updateAva: userAction.updateAvatar,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
