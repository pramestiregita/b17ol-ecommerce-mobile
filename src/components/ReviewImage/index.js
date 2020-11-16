import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class index extends Component {
  render() {
    const {img} = this.props;
    return (
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={img.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  imgWrapper: {
    flexDirection: 'row',
  },
});
