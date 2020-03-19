import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './screens/CreateUser.js'
import Login from './screens/Login.js'
import Home from './screens/Home.js'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Home
  }
},
  {
    initialRouteName: 'Login'
  })

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;