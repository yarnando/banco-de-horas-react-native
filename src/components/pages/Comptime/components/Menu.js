import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { creators as comptimeCreators } from "../../../../store/ducks/comptime";

import { View, Text } from 'react-native'

class Menu extends Component {
  render() {
    return <View>
        <Text>Menu</Text>
    </View>;
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    yearSelected: state.comptime.yearSelected,
    monthSelected: state.comptime.monthSelected,    
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(comptimeCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);