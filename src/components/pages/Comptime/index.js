import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators as authActions } from '../../../store/ducks/auth'

import { styles as commonStyles } from '../../../assets/css'

import { View } from 'react-native'

import Menu from './components/Menu'

class Comptime extends Component {
  render() {
    return <View style={commonStyles.verticalCenter}>
        <Menu/>
    </View>;
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    loading: state.global.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comptime)
