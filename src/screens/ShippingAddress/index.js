import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'native-base';
import {connect} from 'react-redux';

import style from './style';

class ShippingAddress extends Component {
  render() {
    const {data} = this.props.address;
    return (
      <>
        <ScrollView>
          <View style={style.parent}>
            <Card style={style.searchbar}>
              <Icon style={style.searchIcon} name="search" />
              <TextInput placeholder="Search" />
            </Card>
            <View style={style.title}>
              <Text style={style.titleText}>Shipping Address</Text>
            </View>
            {Object.keys(data).length &&
              data.map((i, _o) => (
                <Card key={i.id} style={style.parentCard}>
                  <View
                    style={[
                      style.btnText,
                      i.isPrimary === 1 ? style.selected : style.btnCard,
                    ]}>
                    <View style={style.header}>
                      <Text style={style.name}>{i.name}</Text>
                      <TouchableOpacity
                        style={style.change}
                        transparent
                        onPress={() =>
                          this.props.navigation.navigate('EditAddress', {
                            id: i.id,
                          })
                        }>
                        <Text>Change</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => console.log('add')}
                      transparent>
                      <Text>{i.address}</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              ))}
          </View>
        </ScrollView>
        <View style={style.btnWrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddAddress')}
            style={style.btn}>
            <Text style={style.btnText}>Add New Address</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
});

export default connect(mapStateToProps)(ShippingAddress);
