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
      product: [],
      total: 0,
      pageInfo: {},
    };
  }
  getData = async () => {
    const {value} = await this.props.get(this.props.token);
    this.setState({
      product: value.data.results,
      total: value.data.summary,
      pageInfo: value.data.pageInfo,
    });
  };

  setData = async () => {
    const {data, pageInfo, summary} = this.props.cart;
    if (data.length) {
      this.setState({
        product: data,
        total: summary,
        pageInfo: pageInfo,
      });
    }
  };

  componentDidMount() {
    this.setData();
  }

  render() {
    const {product, total} = this.state;
    return (
      <>
        <View style={style.parent}>
          <View style={style.title}>
            <Text style={style.titleText}>My Bag</Text>
          </View>
          <FlatList
            data={product}
            renderItem={({item}) => <List item={item} />}
          />
        </View>
        <View style={style.checkoutWrapper}>
          <View style={style.text}>
            <Text style={style.total}>Total amount :</Text>
            <Text style={style.price}>
              <Rupiah value={total} />
            </Text>
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

const mapStateToProps = (state) => ({
  token: state.auth.token,
  cart: state.cart,
});

const mapDispatchToProps = {
  get: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBag);
