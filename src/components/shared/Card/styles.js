import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        margin: 7,
        backgroundColor: 'white',
        flexBasis: '100%',
        borderColor: 'rgba(204, 204, 204, 0.555)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,          
    },
    cardHeader: {
        fontSize: 40,
        fontWeight: 'bold', 
        padding: 10,
        borderBottomColor: 'rgba(204, 204, 204, 0.568)',
        borderBottomWidth: 1,
        color: 'rgb(119, 119, 119)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContent: {
        padding: 10,
    }         
});