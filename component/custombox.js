import { StyleSheet, Text, View } from 'react-native';


export const Boxset = (input) => {

    return (
        <View style={{ ...styles.Container, backgroundColor: input.color }} />
    );
}

export const CustomboxBro = (props) => {
    return (

            <View style={{...styles.Column , alignContent: props.align}}>
                <Boxset color='red' />
                <Boxset color='pink' />
                <Boxset color='green' />
                <Boxset color='brown' />
                <Boxset color='blue' />
                <Boxset color='yellow' />
                <Boxset color='grey' />
            </View>

    );
}

const styles = StyleSheet.create({
    Column:{
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    Container: {
        width: 80,
        height: 100
    },
})