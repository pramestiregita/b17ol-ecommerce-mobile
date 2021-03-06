import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';

import styles from './style';
import New from '../../components/NewProduct';
import Popular from '../../components/PopularProduct';

import header from '../../assets/header.png';

import productAction from '../../redux/actions/product';
import cartAction from '../../redux/actions/cart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: [],
      popular: [],
      loading: false,
    };
  }

  getNew = async () => {
    const {value} = await this.props.new();
    this.setState({new: value.data.data});
  };

  getPopular = async () => {
    const {value} = await this.props.popular();
    this.setState({popular: value.data.data});
  };

  componentDidMount() {
    RNBootSplash.hide({});
    this.getNew();
    this.getPopular();
    this.props.cart(this.props.token);
  }

  nextNew = async () => {
    const {nextLink} = this.props.newInfo;
    const link = nextLink.slice(24);
    const {value} = await this.props.nextN(link);
    this.setState({
      new: [...this.state.new, ...value.data.data],
    });
  };

  nextPopular = async () => {
    const {nextLink} = this.props.popularInfo;
    const link = nextLink.slice(24);
    const {value} = await this.props.nextP(link);
    this.setState({
      popular: [...this.state.popular, ...value.data.data],
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.parent}>
            <View style={styles.headerWrapper}>
              <Image style={styles.header} source={header} />
              <Text style={styles.headerText}>Street clothes</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <View>
                  <Text style={styles.title}>New</Text>
                  <Text style={styles.subTitle}>
                    You've never seen it before!
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.subTitle}>View All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={this.state.new}
                renderItem={({item}) => <New item={item} />}
                keyExtractor={(item) => item.id}
                onEndReached={this.nextNew}
                onEndReachedThreshold={(0, 5)}
                refreshing={false}
                onRefresh={this.getNew}
              />
            </View>
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <View>
                  <Text style={styles.title}>Popular</Text>
                  <Text style={styles.subTitle}>
                    You've never seen it before!
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.subTitle}>View All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={this.state.popular}
                renderItem={({item}) => <Popular item={item} />}
                keyExtractor={(item) => item.id}
                onEndReached={this.nextPopular}
                onEndReachedThreshold={(0, 5)}
                refreshing={false}
                onRefresh={this.getPopular}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  newInfo: state.product.newInfo,
  popularInfo: state.product.popularInfo,
});

const mapDispatchToProps = {
  new: productAction.getNew,
  popular: productAction.getPopular,
  cart: cartAction.getCart,
  nextN: productAction.nextNew,
  nextP: productAction.nextPopular,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
