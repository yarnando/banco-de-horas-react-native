import React, { Component } from 'react';
import { View } from 'react-native';

import { styles } from './styles'

import Loading from './Loading'

import { connect } from 'react-redux'

class Layout extends Component {
  render() {
    return (
        <View style={styles.page}>

            <View style={styles.mainContainer}>

              { this.props.children } 

              <Loading status={this.props.loadingState}/> 

            </View>
        
        </View>           
    )
  }
}

const mapStateToProps = state => ({
  loadingState: state.global.loading,
  message: state.global.message,
});

export default connect(
mapStateToProps
)(Layout);
