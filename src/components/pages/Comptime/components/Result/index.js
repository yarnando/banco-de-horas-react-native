import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

import {styles} from './style'

class Result extends Component {
  render() {
    return <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Saldo Atual:</Text>
        <Text style={styles.resultText}>{`${this.props.hoursBank.hours || "00"}h ${this.props.hoursBank.minutes || "00"}m`}</Text>
    </View>;
  }
}

const mapStateToProps = state => ({
    hoursBank: state.comptime.hoursBank
});

export default connect(
  mapStateToProps,
)(Result);
