import { View, Text, StyleSheet } from 'react-native';
import { Globalstyle } from '../constant/layout';
import { CustomTextInput } from '../component/customtextinput';
import { ButtonBox } from '../component/button';

export function ToDoListAdd() {
    return (
        <View style={Globalstyle.container}>
            <CustomTextInput label={'Task'} des={'Meet Customers'} />
            <CustomTextInput label={'Description'} des={'present about food monkey'}/>
            <ButtonBox name='Save Task' color='#4C6793' onPress={()=>{}}/>
        </View>

    );

}


