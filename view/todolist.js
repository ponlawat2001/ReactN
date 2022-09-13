import { View , StyleSheet , Text } from 'react-native';

export function ToDoListHome(){
    return(
    <View style={styles.container}>
        <Text style={styles.bodytext}>To Day List</Text>
    </View>
    );
}

    

const styles = StyleSheet.create({
    container:{
        padding: 8,
        alignItem: 'center',
        backgroundColor: '#AAC4FF',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    bodytext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 0,
    }
})