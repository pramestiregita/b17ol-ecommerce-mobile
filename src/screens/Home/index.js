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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: [],
    };
  }
  getNew = async () => {
    const {value} = await this.props.new();
    this.setState({new: value.data.data});
  };

  componentDidMount() {
    RNBootSplash.hide({});
    this.getNew();
  }

  // state = {
  //   data: [
  //     {
  //       id: 1,
  //       img: img,
  //       rating: 4,
  //       store: 'Zalora',
  //       name: 'Jacket',
  //       price: '35$',
  //     },
  //     {
  //       id: 2,
  //       img: img,
  //       rating: 4,
  //       store: 'Zalora',
  //       name: 'Jacket',
  //       price: '35$',
  //     },
  //     {
  //       id: 3,
  //       img: img,
  //       rating: 4,
  //       store: 'Zalora',
  //       name: 'Jacket',
  //       price: '35$',
  //     },
  //     {
  //       id: 4,
  //       img: img,
  //       rating: 4,
  //       store: 'Zalora',
  //       name: 'Jacket',
  //       price: '35$',
  //     },
  //     {
  //       id: 5,
  //       img: img,
  //       rating: 4,
  //       store: 'Zalora',
  //       name: 'Jacket',
  //       price: '35$',
  //     },
  //   ],
  // };

  renderNew = ({item}) => {
    return (
      <New
        item={item}
        onPress={() => this.props.navigation.navigate('ProductDetail')}
      />
    );
  };

  renderPopular = ({item}) => {
    return (
      <Popular
        item={item}
        onPress={() => this.props.navigation.navigate('ProductDetail')}
      />
    );
  };

  render() {
    console.log(this.state.new);
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
                renderItem={this.renderNew}
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
                data={this.state.data}
                renderItem={this.renderPopular}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  new: productAction.getNew,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
