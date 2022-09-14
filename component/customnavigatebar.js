import { Appbar } from "react-native-paper";

export const CustomNavigationBar = ({ navigation, back, options }) => {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction iconColor='#AAC4FF' onPress={navigation.goBack} /> : null}
            <Appbar.Content style={{alignItems: 'center'}} title={options.title} />
            {options.title == 'ToDoList' ? <Appbar.Action icon={'plus'} size={30} iconColor={'#AAC4FF'} onPress={() => { navigation.navigate('ToDoListAdd') }} /> : null}
        </Appbar.Header>
    )
}