// import React, {Component} from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import {styles} from '../../../assets/css'

// import { Creators as todolistActions } from '../../../store/ducks/todos'

// import Loading from '../../shared/Layout/Loading'

// class Todolist extends Component {
//   render() { 
//     return (
//         <View>
//             <View>
//                 <TouchableOpacity style={styles.buttonPrimary} onPress={() => this.props.getTodolist()}>
//                     {this.props.loading ? <View><Text>Loading... </Text><Loading loading={true} size={20} /></View> : <Text style={styles.whiteText}>Load todolist</Text>}
//                 </TouchableOpacity>
//                 {this.props.todoList.map( item => 
//                     <View key={item.id}>
//                         <View>
//                             <Text>--- {item.title}</Text>
//                         </View>
//                     </View>
//                 )}
//             </View>
//         </View>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   todoList: state.todos.todoList,
//   loading: state.global.loading
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(todolistActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Todolist)

import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Comptime extends Component {
  render() {
    return <View>
        <Text>Comptime</Text>
    </View>;
  }
}
