import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Button, H1} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import List from '../../components/CardMyBag';

export default class MyBag extends Component {
  render() {
    return (
      <>
        <View style={style.parent}>
          <View style={style.title}>
            <Text style={style.titleText}>My Bag</Text>
          </View>
          <ScrollView style={style.listWrapper}>
            {[...Array(5)].map((_i, o) => (
              <List key={o} />
            ))}
          </ScrollView>
        </View>
        <View style={style.checkoutWrapper}>
          <View style={style.text}>
            <Text style={style.total}>Total amount :</Text>
            <Text style={style.price}>$</Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Checkout')}
            style={style.btn}
            block>
            <Text style={style.btnText}>check out</Text>
          </Button>
        </View>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   orders: state.order.data,
// });

// export default connect(mapStateToProps)(MyBag);
