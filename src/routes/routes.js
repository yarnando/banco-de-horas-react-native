import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
//createSwitchNavigator navegação em programação pura. nao mostra interfaces pro usuario por padrão

//Auth
import Signin from '../components/pages/Auth/Signin'
import Signup from '../components/pages/Auth/Signup'

//Comptime
import Comptime from '../components/pages/Comptime'
import Teste from '../components/pages/Teste'

import React from 'react';

import Navbar from '../components/shared/Layout/Navbar'
import Drawer from '../components/shared/Layout/Drawer'

const AuthStack = createStackNavigator({
    Signin: Signin,
    Signup: Signup,   
  }, {
        initialRouteName: 'Signin',
        transparentCard:true, //faz o componente que envolve os componentes de navegação aparecer
      defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: <Navbar nav={navigation}/>,
        headerBackTitleVisible: false,    
    })
});

const MainStack = createStackNavigator({
    Comptime: {
        screen: Comptime,
    },    
    Teste: {
        screen: Teste,
    },    
  }, {
        initialRouteName: 'Comptime',
        transparentCard:true, //faz o componente que envolve os componentes de navegação aparecer
      defaultNavigationOptions: ({ navigation }) => ({
          headerLeft: null,
        headerTitle: <Navbar nav={navigation}/>    
    })
});

  const AppNavigator = createDrawerNavigator({
    AuthStack: {
        screen: AuthStack,     
        navigationOptions: {
            drawerLockMode: 'locked-closed',
        },        
    },
    MainStack: {
        screen: MainStack,
    },   
}, {drawerWidth: 300,
    contentComponent: props => <Drawer nav={props} />
    })

const Routes = createAppContainer(
    AppNavigator
);


export default Routes;