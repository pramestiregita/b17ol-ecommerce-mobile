import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import List from '../../components/CardMyBag';
import Rupiah from '../../helpers/currency';

import cartAction from '../../redux/actions/cart';

class MyBag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: {},
    };
  }

  setData = async () => {
    const {pageInfo} = this.props.cart;
    if (pageInfo.length) {
      this.setState({
        pageInfo,
      });
    }
  };

  componentDidMount() {
    this.setData();
  }

  render() {
    console.log(this.state);
    const {isError, alertMsg, data, summary} = this.props.cart;
    return (
      <>
        <View style={style.parent}>
          <View style={style.title}>
            <Text style={style.titleText}>My Bag</Text>
          </View>
          {Object.keys(data).length > 0 ? (
            <FlatList
              data={data}
              renderItem={({item}) => <List item={item} />}
            />
          ) : (
            <View>
              <Text>{isError && alertMsg}</Text>
            </View>
          )}
        </View>
        {Object.keys(data).length > 0 && (
          <View style={style.checkoutWrapper}>
            <View style={style.text}>
              <Text style={style.total}>Total amount :</Text>
              <Text style={style.price}>
                <Rupiah value={summary} />
              </Text>
            </View>
            <Button
              onPress={() => this.props.navigation.navigate('Checkout')}
              style={style.btn}
              block>
              <Text style={style.btnText}>check out</Text>
            </Button>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  cart: state.cart,
});

const mapDispatchToProps = {
  get: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBag);
