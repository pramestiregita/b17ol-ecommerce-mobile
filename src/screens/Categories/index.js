import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Button, Container, Content, List, ListItem} from 'native-base';

import style from './style';
import categoryAction from '../../redux/actions/category';

class Categories extends Component {
  getData = () => {
    this.props.get();
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={style.parent}>
            <Button style={style.btn} block>
              <Text style={style.btnText}>View All Items</Text>
            </Button>
            <Text style={style.title}>Choose Category</Text>
            {Object.keys(this.props.data).length > 0 &&
              this.props.data.map((i, o) => (
                <List key={o}>
                  <ListItem
                    onPress={() =>
                      this.props.navigation.navigate('CategoryDetail', {
                        id: i.id,
                      })
                    }>
                    <Text>{i.name}</Text>
                  </ListItem>
                </List>
              ))}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.category.data,
});

const mapDispatchToProps = {
  get: categoryAction.getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
