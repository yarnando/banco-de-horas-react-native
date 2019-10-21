import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    drawerContainer: {
        justifyContent: 'space-between',
        flex: 1
    }, 
    drawerItem: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 13,
        borderBottomColor: '#cccccc8a',
        borderBottomWidth: 1
    },
    drawerItemText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    drawerFooter: {
        borderTopColor: '#cccccc8a',
        borderTopWidth: 1        
    },  
    userArea: {
        paddingTop: 20,
        alignItems: 'center',
        borderBottomColor: '#cccccc8a',
        borderBottomWidth: 1        
    },  
    userText: {
        paddingVertical: 20,
        fontSize: 17,
        fontWeight: 'bold',        
    },
    userIcon: {
        justifyContent: 'center',
    },
    itemIcon: {
        marginLeft: 15,
        marginRight: 20
    },
    logoutButton: {
        height: 20,
        color: '#fff',
        backgroundColor: 'black',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButtonText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#FFF'
    }          
});