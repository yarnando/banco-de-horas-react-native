import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listItemHeader: {
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'rgb(119, 119, 119)',
    }, 
    listItemSubHeader: {
        fontWeight: 'bold', 
        fontSize: 15
    },      
    listItemRow: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginVertical: 3
    }     
});