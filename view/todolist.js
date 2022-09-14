
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Todolistbox } from '../component/todolist';
import { Cardbox } from '../component/cardreview';

export function ToDoListHome() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Icon name='time-slot' size={30} color="white" />
                <Text style={styles.bodytext}>To Day List</Text>
            </View>
                <Todolistbox title='ทำการบ้านวิชา อังคราร' content='ทำงานเกี่ยวสัตว์ปีกสัตวปีก' />
                <Cardbox/>

           
                
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        elevation: 12,
    },
    container: {
        padding: 24,
        backgroundColor: '#AAC4FF',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        // flexWrap: 'wrap',
        flexDirection: 'column',
        flex: 1
    },
    bodytext: {
        margin: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        marginTop: 0,
    }
})