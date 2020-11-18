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
    };
  }

  getProduct = async () => {
    const {value: valueNew} = await this.props.new();
    const {value: valuePopular} = await this.props.popular();
    this.setState({new: valueNew.data.data, popular: valuePopular.data.data});
  };

  componentDidMount() {
    RNBootSplash.hide({});
    this.getProduct();
    this.props.cart(this.props.token);
  }

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
});

const mapDispatchToProps = {
  new: productAction.getNew,
  popular: productAction.getPopular,
  cart: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
