import React, {Component} from 'react';
import { NavigationActions, StackActions } from 'react-navigation';

import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {styles} from './styles';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

class Drawer extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.drawerContainer}>
        <View styles={styles.drawerContent}>
          <View style={styles.userArea}>
            <View style={styles.userIcon}>
              <Icon name="user-circle-o" size={59} />
            </View>
            <Text style={styles.userText}> emailtest@gmail.com</Text>
          </View>
          <TouchableOpacity
                  onPress={() =>
                    this.props.nav.navigation.dispatch(StackActions.reset({
                        index: 0,
                        key: null,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Comptime' })
                        ],
                      }) 
                    )                    
                  }
                  style={styles.drawerItem}>
                  <View>
                    <Icon
                      style={styles.itemIcon}
                      name="arrow-right"
                      size={23}
                    />
                  </View>
                  <Text style={styles.drawerItemText}>{`Comptime`}</Text>
                </TouchableOpacity>
          <TouchableOpacity
                  onPress={() =>
                    this.props.nav.navigation.dispatch(StackActions.reset({
                        index: 0,
                        key: null,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Teste' })
                        ],
                      })
                    )               
                  }
                  style={styles.drawerItem}>
                  <View>
                    <Icon
                      style={styles.itemIcon}
                      name="arrow-right"
                      size={23}
                    />
                  </View>
                  <Text style={styles.drawerItemText}>{`Teste`}</Text>
                </TouchableOpacity>
        </View>

        <View style={ styles.drawerFooter}>
                    {!!this.props.userLoggedState && 
                        (
                            <TouchableOpacity style={styles.drawerItem}
                                              onPress={() => this.props.logOut()}>
                                <View>
                                    <Icon style={styles.itemIcon} name="sign-out" size={23} />
                                </View>
                                <Text style={styles.drawerItemText}>
                                            Sair
                                </Text>                                        
                            </TouchableOpacity>                            
                        )}
                </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(Drawer);
