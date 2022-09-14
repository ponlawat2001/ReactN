import { View } from "react-native";
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo';


export const CustomNavigationBar = ({ navigation, back, options }) => {
    return (
        <Appbar.Header mode='center-aligned'>
            {back ? <Appbar.BackAction iconColor='#AAC4FF' onPress={navigation.goBack} /> : null}
                <Appbar.Content  title={options.title} />
            {options.title == 'To Day List' ? 
            <Appbar.Action icon={'plus'} size={30} iconColor={'#AAC4FF'} onPress={() => { navigation.navigate('ToDoListAdd') }} /> 
            : null}
        </Appbar.Header>
    )
}