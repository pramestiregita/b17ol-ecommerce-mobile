import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import Login from '../Login';
import Home from '../Home';
import MyProfile from '../MyProfile';
import MyOrder from '../MyOrder';
import ShippingAddress from '../ShippingAddress';

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MyProfile"
        component={MyProfile}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="MyOrder"
        component={MyOrder}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="ShippingAddress"
        component={ShippingAddress}
      />
    </Stack.Navigator>
  );
};

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        {!this.props.auth.isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        ) : (
          <BottomTab.Navigator>
            <BottomTab.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="home" size={size} color={color} />
                ),
              }}
              name="Home"
              component={Home}
            />
            <BottomTab.Screen
              options={{
                tabBarIcon: ({size, color, focused}) => (
                  <Icon name="user" size={size} color={color} />
                ),
              }}
              name="Profile"
              component={ProfileStack}
            />
          </BottomTab.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
