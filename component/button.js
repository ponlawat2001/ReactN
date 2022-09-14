import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ButtonBox = (input) => {
    if (input.color == null) {
        return (
            <TouchableOpacity
                style={styles.button}
                title={input.name}
                onPress={input.onPress} >
                <Text style={styles.textstyle}>{input.name}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: input.color, borderColor: input.bordercolor ?? '#FFFFFF00' }}
                color={input.textcolor ?? 'white'}
                onPress={input.onPress} >
                <Text style={{ ...styles.textstyle, color: input.bordercolor ?? 'white' }}>{input.name}</Text>
            </TouchableOpacity>
        );
    }


}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FFFFFF00',
        backgroundColor: 'lightgreen',
        maxHeight: 40,
        maxWidth: 250,
        margin: 8

    },
    textstyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    }
})