import { StyleSheet, Text, View } from 'react-native';
import { ButtonBox } from '../component/button';

export function SeleteSample({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ padding: 8}}>
                <Text style={styles.bodytext}>Please Press some Button</Text>
            </View>
            <View style={{flex: 1}}>
            <ButtonBox name='AlignContent' onPress={() => { navigation.navigate('AlignContent') }} />
            <ButtonBox name='ToDoList' onPress={() => { navigation.navigate('ToDoListHome') }} />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItem: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    bodytext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 0,
    }
})