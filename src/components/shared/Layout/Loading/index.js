import React from 'react';

import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles'

const Loading = ({status}) => <View style={status && styles.loading}>
    {status && (<ActivityIndicator size="large" color="#ccc" style={styles.indicator} />)}
</View>;

export default Loading;
