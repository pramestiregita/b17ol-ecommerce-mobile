import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

import Landingpage from '../Landingpage';
import Login from '../Login';
import Signup from '../Signup';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
import Home from '../Home';
import ProductDetail from '../ProductDetail';
import Categories from '../Categories';
import CategoryDetail from '../CategoryDetail';
import MyBag from '../MyBag';
import Checkout from '../Checkout';
import Success from '../Success';
import MyProfile from '../MyProfile';
import MyOrder from '../MyOrder';
import OrderDetails from '../OrderDetails';
import ShippingAddress from '../ShippingAddress';
import AddAddress from '../AddAddress';
import EditAddress from '../EditAddress';
import Settings from '../Settings';
import ChangeProfile from '../ChangeProfile';

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerRight: () => (
          <TouchableOpacity>
            <Icon name="search" size={20} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {paddingHorizontal: 20},
        headerStyle: {
          backgroundColor: 'none',
          elevation: 1,
        },
      }}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="EditAddress" component={EditAddress} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Landingpage"
        component={Landingpage}
      />
      <Stack.Screen options={{title: ''}} name="Login" component={Login} />
      <Stack.Screen options={{title: ''}} name="Signup" component={Signup} />
      <Stack.Screen
        options={{title: ''}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{title: ''}}
        name="ResetPassword"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

const MyBagStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerRight: () => (
          <TouchableOpacity>
            <Icon name="search" size={20} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {paddingHorizontal: 20},
        headerStyle: {
          backgroundColor: 'none',
          elevation: 1,
        },
      }}>
      <Stack.Screen name="MyBag" component={MyBag} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerRight: () => (
          <TouchableOpacity>
            <Icon name="search" size={20} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {paddingHorizontal: 20},
        headerStyle: {
          backgroundColor: 'white',
          elevation: 1,
        },
      }}>
      <Stack.Screen
        options={{
          title: 'Categories',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 16},
          headerLeft: () => (
            <TouchableOpacity>
              <Icon name="arrow-left" size={20} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {padding: 20},
        }}
        name="Category"
        component={Categories}
      />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    </Stack.Navigator>
  );
};

const Tab = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#DB3022',
      }}>
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
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
        name="Shop"
        component={ShopStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="shopping-bag" size={size} color={color} />
          ),
        }}
        name="Bag"
        component={MyBagStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
        name="Favorite"
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
              name="Auth"
              component={AuthStack}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Tabbed"
              component={Tab}
            />
            <Stack.Screen
              options={{headerTitleAlign: 'center'}}
              name="ProductDetail"
              component={ProductDetail}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Success"
              component={Success}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
