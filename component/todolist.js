import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const Todolistbox = (props) => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Title>{props.title ?? 'Untitle'}</Title>
                    <Paragraph>{props.content ?? 'Untitle'} </Paragraph>
                </Card.Content>
            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%'
    }
})