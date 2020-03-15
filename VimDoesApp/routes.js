import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './Screens/CreateUser.js'
import Login from './Screens/Login.js'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    }
  },
  {
    initialRouteName: 'Home'
  })
  
  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;