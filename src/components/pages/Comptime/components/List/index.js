import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { creators as comptimeCreators } from "../../../../../store/ducks/comptime";

import { styles as commonStyles } from '../../../../../assets/css'
import { styles } from './styles'
import Card from '../../../../shared/Card'

import { View, Text } from 'react-native'

class List extends Component {
  render() {
    return !!this.props.comptimeList.length && 
    
                <View style={commonStyles.container}>
                
                        {this.props.comptimeList.map((comptime, index) => (
                            <Card
                            key={index}
                                header={
                                    <Text style={styles.listItemHeader}>{comptime.day}</Text>
                            }>              
                                <View style={styles.listItemRow}>
                                    <Text style={ { fontWeight: 'bold', fontSize: 15 }}>Entrada</Text>
                                    <Text>{comptime.startingTime}</Text>
                                </View>                   
                                <View style={ styles.listItemRow }>
                                    <Text style={ { fontWeight: 'bold', fontSize: 15 }}>Entrada do almoço</Text>
                                    <Text>{comptime.lunchStart}</Text>
                                </View>                   
                                <View style={ styles.listItemRow }>
                                    <Text style={ { fontWeight: 'bold', fontSize: 15 }}>Saída do almoço</Text>
                                    <Text>{comptime.lunchEnd}</Text>
                                </View>                   
                                <View style={ styles.listItemRow }>
                                    <Text style={ { fontWeight: 'bold', fontSize: 15 }}>Saída</Text>
                                    <Text>{comptime.lunchEnd}</Text>
                                </View>                                  
                            </Card>
                        ))
                    }
                </View>
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
