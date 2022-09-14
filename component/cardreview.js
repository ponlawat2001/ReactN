import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { ButtonBox } from './button';

export const Cardbox = (props) => (
    <View style={styles.container}>
        <Card>
            <Card.Content>
                <Title>{props.title ?? 'Untitle'}</Title>
                <Paragraph>{props.content ?? 'Untitle'} </Paragraph>
            </Card.Content>
            <Card.Actions style={{ margin: 4, minWidth: 300 }}>
                <ButtonBox name='Do It Now' color='#FFFFFF' bordercolor='#FFB4B4' textcolor='#FFB4B4' onPress={() => { navigation.goBack() }} />
                <ButtonBox name='Done' color='#FFB4B4' onPress={() => { }} />
            </Card.Actions>
        </Card>
    </View>

);

const styles = StyleSheet.create({
    container: {
        width: '95%'
    }
})


