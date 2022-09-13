import { View, StyleSheet, Button } from 'react-native';

export const ButtonBox = (input) => {
    if (input.color == null) {
        return (
            <View style={{...styles.button}}>
                <Button
                    color={'white'}
                    title={input.name}
                    onPress={input.onPress} />
            </View>
        );
    } else {
        return (
            <View style={{...styles.button , backgroundColor: input.color ,borderColor: input.bordercolor ?? '#FFFFFF00' }}>
                <Button
                    color={input.textcolor ?? 'white'}
                    title={input.name}
                    onPress={input.onPress} />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    button: {
        alignContent: 'center',
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FFFFFF00',
        backgroundColor: 'lightgreen',
        maxHeight: 40,
        maxWidth: 250,
        margin: 8

    }
})