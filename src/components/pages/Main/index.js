import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import {styles} from '../../../assets/css'

const Main = (props) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => props.navigation.navigate('Todolist')}>
            <Text style={styles.whiteText}>Go to Todolist</Text>
        </TouchableOpacity>
    </View>
);

export default Main;
