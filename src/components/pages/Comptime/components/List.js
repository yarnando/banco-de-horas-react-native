import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { creators as comptimeCreators } from "../../../../store/ducks/comptime";

import { styles as commonStyles } from '../../../../assets/css'

import { View, Text } from 'react-native'

class List extends Component {
  render() {
    return <View style={commonStyles.container}>
        <Text>List</Text>
    </View>;
  }
}

const mapStateToProps = state => ({
  comptimeList: state.comptime.comptimeList,
  showingForm: state.comptime.showingForm,
  loading: state.global.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(comptimeCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
