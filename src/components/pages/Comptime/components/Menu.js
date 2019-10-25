import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { creators as comptimeCreators } from "../../../../store/ducks/comptime";

import { styles as commonStyles } from '../../../../assets/css'

import { View, Text, Picker, Alert } from 'react-native'

class Menu extends Component {

    changeYear = e => {
        this.props.setMonthSelected("");
        this.props.setYearSelected(e);
    };

    changeMonth = e => {
        let month = `${e < 10 ? "0" : ""}${e}`;
        this.props.setMonthSelected(month);
        if (!!month == false) return;
        this.props.getComptimeList(this.props.auth.user.userId, this.props.yearSelected, month);
    };

    pastYears = () => {
        let years = []
        let currentYear = new Date().getFullYear()
        let startYear = 2019
        while ( startYear < currentYear ) {
            startYear++
            years.push({
                key: `${startYear}`, label: `${startYear}`
            });
        } 
        years.push({
            key: `${currentYear}`, label: `${currentYear}`
        });        
        return years         
    }

    pastMonths = () => {
        let currentDate = new Date()
        let currentMonth = this.props.yearSelected == currentDate.getFullYear() ? currentDate.getMonth() + 1 : 12
        let months = []
        let monthsRaw = [
            {key: "1", label: "Janeiro"},
            {key: "2", label: "Fevereiro"},
            {key: "3", label: "Março"},
            {key: "4", label: "Abril"},
            {key: "5", label: "Maio"},
            {key: "6", label: "Junho"},
            {key: "7", label: "Julho"},
            {key: "8", label: "Agosto"},
            {key: "9", label: "Setembro"},
            {key: "10", label: "Outubro"},
            {key: "11", label: "Novembro"},
            {key: "12", label: "Dezembro"}
        ]
        for (let index = 1; index <= currentMonth; index++) {
            months.push(monthsRaw[index-1])
        }
        return months
    }

    renderPicker(pickerItem, index) {
        return (
          <Picker.Item
            key={index}
            value={pickerItem.key}
            label={pickerItem.label}
          ></Picker.Item>
        );
      }   
         

  render() {
    return <View style={commonStyles.inline}>
            <View style={commonStyles.formGroup}>
                  <Text style={commonStyles.inputLabel}>
                    Ano
                  </Text>
                  <View style={commonStyles.picker}>
                    <Picker
                      selectedValue={this.props.yearSelected}
                      onValueChange={e =>
                        this.changeYear(e)
                      }
                    >
                        <Picker.Item
                            value=""
                            label="Selecione uma opção"
                        ></Picker.Item>                        
                      {this.pastYears().map( (year, index) =>
                        this.renderPicker(year, index)
                      )}
                    </Picker>
                   </View>
            </View>
            <View style={commonStyles.formGroup}>
                  <Text style={commonStyles.inputLabel}>
                    Mês
                  </Text>
                  <View style={commonStyles.picker}>
                    <Picker
                      enabled={!!this.props.yearSelected == true}
                      selectedValue={this.props.monthSelected}
                      onValueChange={e =>
                        this.changeMonth(e)
                      }
                    >
                        <Picker.Item
                            value=""
                            label="Selecione uma opção"
                        ></Picker.Item>                            
                      {this.pastMonths().map( (month, index) =>
                        this.renderPicker(month, index)
                      )}
                    </Picker>
                   </View>
            </View>
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