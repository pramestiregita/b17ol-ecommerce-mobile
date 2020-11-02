import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {H1} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import List from '../../components/CardMyOrder';

class MyOrder extends Component {
  componentDidMount() {
    console.log(this.props.orders);
  }

  render() {
    return (
      <View style={style.parent}>
        <View style={style.search}>
          <Icon size={20} name="search" />
        </View>
        <View style={style.title}>
          <H1 style={style.titleText}>My Order</H1>
        </View>
        {this.props.orders.map((i, _o) => (
          <List id={i.transaction_id} qty={i.quantity} sum={i.summary} />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.data,
});

export default connect(mapStateToProps)(MyOrder);
