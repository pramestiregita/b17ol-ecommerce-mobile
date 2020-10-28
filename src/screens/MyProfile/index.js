import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {H1, H3, Left, List, ListItem, Right, Thumbnail} from 'native-base';

import style from './style';

import placeholder from '../../assets/avatar.png';

export default class MyProfile extends Component {
  render() {
    return (
      <View style={style.parent}>
        <View style={style.content}>
          <View style={style.search}>
            <Icon size={20} name="search" />
          </View>
          <View style={style.title}>
            <H1 style={style.titleText}>My Profile</H1>
          </View>
          <View style={style.profileWrapper}>
            <Thumbnail large source={placeholder} />
            <View style={style.profile}>
              <H3 style={style.profileName}>User</H3>
              <Text style={style.profileEmail}>user@mail.com</Text>
            </View>
          </View>
        </View>
        <View style={style.listWrapper}>
          <List>
            <ListItem>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>My orders</Text>
                <Text style={style.listDesc}>Already have # orders</Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>Shipping Addresses</Text>
                <Text style={style.listDesc}># addresses</Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left style={style.listLeft}>
                <Text style={style.listTitle}>Settings</Text>
                <Text style={style.listDesc}>Notification, Password</Text>
              </Left>
              <Right>
                <Icon style={style.listIcon} name="chevron-right" />
              </Right>
            </ListItem>
          </List>
        </View>
      </View>
    );
  }
}
