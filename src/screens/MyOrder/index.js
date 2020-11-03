import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {H1} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import List from '../../components/CardMyOrder';

class MyOrder extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.parent}>
          <View style={style.title}>
            <H1 style={style.titleText}>My Order</H1>
          </View>
          {this.props.orders.map((i, _o) => (
            <List
              key={i.transaction_id}
              id={i.transaction_id}
              qty={i.quantity}
              sum={i.summary}
              date={i.date}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.data,
});

export default connect(mapStateToProps)(MyOrder);
