import React, {Component} from 'react';

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
          {this.props.nav.navigation.state.routes.map(item => {
            if (item.routeName != 'Main')
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.nav.navigation.navigate({
                      routeName: item.routeName,
                    })
                  }
                  key={item.key}
                  style={styles.drawerItem}>
                  <View>
                    <Icon
                      style={styles.itemIcon}
                      name="arrow-right"
                      size={23}
                    />
                  </View>
                  <Text style={styles.drawerItemText}>{item.routeName}</Text>
                </TouchableOpacity>
              );
          })}
        </View>

        {/* <View style={ styles.drawerFooter}>
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
                </View> */}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(Drawer);
