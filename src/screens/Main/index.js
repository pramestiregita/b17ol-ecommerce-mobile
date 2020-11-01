import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import Login from '../Login';
import Home from '../Home';

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!this.props.auth.isLogin ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
