import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as authActions } from '../../../store/ducks/auth'

import { styles as commonStyles } from '../../../assets/css'
import {styles} from './styles'

import { View, SafeAreaView, ScrollView } from 'react-native'

import Menu from './components/Menu'
import List from './components/List'

class Comptime extends Component {
  render() {
    return <SafeAreaView style={[commonStyles.verticalCenter, commonStyles.container, styles.main]}>
                <ScrollView>

                    <Menu/>
                    <List/>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                </ScrollView>
        
    </SafeAreaView>;
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    loading: state.global.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comptime)
