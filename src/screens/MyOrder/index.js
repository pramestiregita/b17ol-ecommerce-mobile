import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {H1} from 'native-base';
import {connect} from 'react-redux';

import style from './style';
import List from '../../components/CardMyOrder';
import orderAction from '../../redux/actions/order';

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: false,
    };
  }

  getData = async () => {
    const {value} = await this.props.get(this.props.token);
    this.setState({orders: value.data.data});
  };

  componentDidMount() {
    this.getData();
  }

  nextData = async () => {
    const {nextLink} = this.props.pageInfo;
    if (nextLink) {
      const link = nextLink.slice(24);
      const {value} = await this.props.next(this.props.token, link);
      this.setState({orders: [...this.state.orders, ...value.data.data]});
    }
  };

  render() {
    return (
      <View style={style.parent}>
        <View style={style.title}>
          <H1 style={style.titleText}>My Order</H1>
        </View>
        <FlatList
          data={this.state.orders}
          renderItem={({item}) => <List item={item} />}
          onEndReached={this.nextData}
          onEndReachedThreshold={(0, 5)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  pageInfo: state.order.pageInfo,
});

const mapDispatchToProps = {
  get: orderAction.getTransaction,
  next: orderAction.nextTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
