import React from 'react';

import { View } from 'react-native';
import {styles} from './styles'

const Card = (props) => (
    <View style={styles.card}>
        <View>
            {props.header && 
                <View style={styles.cardHeader}>
                    {props.header}
                </View>}
                <View style={styles.cardContent}>
                    {props.children}
                </View>
        </View>
    </View>    
);

export default Card;
