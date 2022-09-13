import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CustomboxBro } from '../component/custombox';
import { ButtonBox } from '../component/button';
import React, { useState, useEffect } from "react";
import { Boxset } from '../component/custombox';


export function AlignContent() {
    const [alignment, setAlignment] = useState("flex-start");

    const changeAlign = (align) => {
        setAlignment(align);
    }
    return (
        <View style={{ ...styles.container, flexDirection: 'column' }}>
            <View style={{ ...styles.Row }}>
                <ButtonBox name='flex-start' onPress={() => changeAlign('flex-start')} />
                <ButtonBox name='flex-end' onPress={() => changeAlign('flex-end')} />
            </View>

            <View style={{ ...styles.Row }}>
                <ButtonBox name='stretch' onPress={() => changeAlign('stretch')} />
                <ButtonBox name='center' onPress={() => changeAlign('center')} />
            </View>

            <View style={{ ...styles.Row }}>
                <ButtonBox name='space-between' onPress={() => changeAlign('space-between')} />
                <ButtonBox name='space-around' onPress={() => changeAlign('space-around')} />
            </View>

            <View style={ styles.container}>
                <CustomboxBro align={alignment}/>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: "aliceblue",
        padding: 8,
    },
    Row: {
        flexDirection: 'row'
    }
})
