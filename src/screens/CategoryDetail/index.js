import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';

import style from './style';
import categoryAction from '../../redux/actions/category';

import List from '../../components/CardCategory';

class CategoryDetail extends Component {
  getData = () => {
    const {id} = this.props.route.params;
    this.props.get(id);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <Content style={style.bg}>
          <View style={style.header}>
            <Text style={style.title}>Name</Text>
            <View style={style.advFunc}>
              <TouchableOpacity style={style.func}>
                <Icon name="filter" size={18} />
                <Text style={style.text}>Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.func}>
                <Icon name="sort" size={18} />
                <Text style={style.text}>Price: lowest to high</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.func}>
                <Icon name="th" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          {this.props.detail && (
            <View style={style.content}>
              <FlatList
                data={this.props.detail}
                renderItem={({item}) => <List item={item} />}
              />
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  detail: state.category.detail,
});

const mapDispatchToProps = {
  get: categoryAction.getDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
