import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, View} from 'react-native';
import {Card} from 'native-base';
import {connect} from 'react-redux';

import style from './style';

import List from '../../components/CardAddress';

class ShippingAddress extends Component {
  componentDidMount() {
    console.log(this.props.address);
  }

  render() {
    const {data} = this.props.address;
    return (
      <View style={style.parent}>
        <Card style={style.searchbar}>
          <Icon style={style.searchIcon} name="search" />
          <TextInput placeholder="Search" />
        </Card>
        <View style={style.title}>
          <Text style={style.titleText}>Shipping Address</Text>
        </View>
        {Object.keys(data).length &&
          data.map((i, _o) => (
            <List
              key={i.id}
              name={i.name}
              address={i.address}
              pri={i.isPrimary}
            />
          ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
});

export default connect(mapStateToProps)(ShippingAddress);
