import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import {API_URL} from '@env';

import style from './style';
import Star from '../../components/StarRatings';
import List from '../../components/NewProduct';
import productAction from '../../redux/actions/product';
import Rupiah from '../../helpers/currency';

import img from '../../assets/image.jpg';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
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
  }

  getDetail = async () => {
    const {id} = this.props.route.params;
    const {value} = await this.props.detail(id);
    this.setState({product: value.data.data[0]});
  };

  componentDidMount() {
    this.getDetail();
  }

  addCart = () => {
    console.log('add');
  };

  render() {
    const {product} = this.state;
    return (
      Object.keys(product).length > 0 && (
        <>
          <View style={style.parent}>
            <ScrollView>
              <View style={style.wrapper}>
                <View>
                  <Image
                    style={style.img}
                    source={
                      product.image ? {uri: API_URL.concat(product.image)} : img
                    }
                  />
                </View>
                <View style={style.content}>
                  <View style={style.header}>
                    <View>
                      <Text style={style.store}>{product.store}</Text>
                      <Text style={style.name}>{product.name}</Text>
                    </View>
                    <Text style={style.price}>
                      <Rupiah value={product.price} />
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Review')}
                    style={style.rating}>
                    <Star q={product.rating} />
                    <Text style={style.review}>(10)</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={style.des}>{product.description}</Text>
                  </View>
                  <View style={style.colorWrapper}>
                    <TouchableOpacity
                      style={[style.circle, {borderColor: 'red'}]}>
                      <View
                        style={[
                          style.color,
                          {backgroundColor: `${product.hex}`},
                        ]}>
                        <Text>&nbsp;</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={style.titleWrapper}>
                      <Text style={style.title}>You can also like this</Text>
                      <Text style={style.subtitle}>12 items</Text>
                    </View>
                    <FlatList
                      horizontal
                      data={this.state.data}
                      renderItem={({item}) => <List item={item} />}
                      keyExtractor={(item) => item.id}
                    />
                    <FlatList />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={style.btnWrapper}>
              <Button
                onPress={() => this.addCart()}
                style={style.btn}
                block
                rounded>
                <Text style={style.btnText}>Add to cart</Text>
              </Button>
            </View>
          </View>
        </>
      )
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  detail: productAction.getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
