import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
//createSwitchNavigator navegação em programação pura. nao mostra interfaces pro usuario por padrão

//Auth
import Signin from '../components/pages/Auth/Signin'
import Signup from '../components/pages/Auth/Signup'

//Comptime
import Comptime from '../components/pages/Comptime'

import React from 'react';

import Navbar from '../components/shared/Layout/Navbar'
import Drawer from '../components/shared/Layout/Drawer'

const AuthenticationNavigator = createStackNavigator({
    Signin: Signin,
    Signup: Signup,
    Comptime: {
        screen: Comptime
    },   
  }, {
        initialRouteName: 'Signin',
          transparentCard:true, //faz o componente que envolve os componentes de navegação aparecer
      defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: <Navbar nav={navigation}/>    
    })
});

  const AppNavigator = createDrawerNavigator({
    Main: {
        screen: AuthenticationNavigator,
    },
    Comptime: {
        screen: Comptime
    },
}, {drawerWidth: 300,
    drawerLockMode: 'locked-closed',
    contentComponent: props => <Drawer nav={props} />
    })

const Routes = createAppContainer(
    AppNavigator
);


export default Routes;