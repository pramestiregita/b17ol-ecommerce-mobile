import React, {Component} from 'react';
import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';

import styles from './style';
import New from '../../components/NewProduct';
import Popular from '../../components/PopularProduct';

import header from '../../assets/header.png';
import img from '../../assets/image.jpg';

export default class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 2,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 3,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 4,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
      {
        id: 5,
        img: img,
        rating: 4,
        store: 'Zalora',
        name: 'Jacket',
        price: '35$',
      },
    ],
  };

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
                data={this.state.data}
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
