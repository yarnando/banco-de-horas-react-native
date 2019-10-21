import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from './styles'

import { connect } from 'react-redux'

class Navbar extends React.Component {
    render() {
        return <View style={ styles.navbarContainer }>
                <TouchableOpacity
                    onPress={() => this.props.nav.openDrawer()}
                    title="Info"
                    style={styles.hamburgerBtn}
                >
                    <Icon 
                        name='three-bars' 
                        size={30} 
                        color='#000' 
                    /> 
                </TouchableOpacity>
                 
                <Text style={ styles.title }>MyStore</Text>           
        </View>     
    }
  }

  
const mapStateToProps = state => ({
    state
    // userLoggedState: state.auth.userLogged,
});

export default connect(
    mapStateToProps,
    )(Navbar);
