import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
//createSwitchNavigator navegação em programação pura. nao mostra interfaces pro usuario por padrão

//Menu
import MainPage from '../components/pages/Main'
import Todolist from '../components/pages/Todolist'

import React, { Component } from 'react';

import Navbar from '../components/shared/Layout/Navbar'
import Drawer from '../components/shared/Layout/Drawer'

const StackNavigator = createStackNavigator({
    MainPage,
    Todolist,   
  }, {
        initialRouteName: 'MainPage',
          transparentCard:true, //faz o componente que envolve os componentes de navegação aparecer
      defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: <Navbar nav={navigation}/>    
    })
});

  const AppNavigator = createDrawerNavigator({
    Main: StackNavigator,
    MainPage,
    Todolist,  
}, {
    drawerWidth: 300,
    drawerLockMode: 'locked-closed',
    contentComponent: props => <Drawer nav={props} />
    })

const Routes = createAppContainer(
    AppNavigator
);

export default Routes;