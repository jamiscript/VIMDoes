import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './Screens/CreateUser.js'
import Login from './Screens/Login.js'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp,
  }
},
  {
    initialRouteName: 'Login'
  })

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;