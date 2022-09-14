import { View, Text, StyleSheet } from 'react-native';
import { Globalstyle } from '../constant/layout';
import { CustomTextInput } from '../component/customtextinput';

export function ToDoListAdd() {
    return (
        <View style={Globalstyle.container}>

            <CustomTextInput label={'Task'} />
            <CustomTextInput label={'Task'} />

        </View>

    );

}


