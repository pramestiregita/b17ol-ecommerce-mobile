import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Container, Content, List, ListItem} from 'native-base';

import style from './style';

export default class Categories extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={style.parent}>
            <Button style={style.btn} block>
              <Text style={style.btnText}>View All Items</Text>
            </Button>
            <Text style={style.title}>Choose Category</Text>
            {[...Array(13)].map((_i, o) => (
              <List key={o}>
                <ListItem onPress={() => console.log(o)}>
                  <Text>A</Text>
                </ListItem>
              </List>
            ))}
          </View>
        </Content>
      </Container>
    );
  }
}
