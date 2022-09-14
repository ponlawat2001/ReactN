import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const CustomTextInput = ({ label, ...props}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={{color: 'white' ,fontWeight: '600' } }>{label}</Text>
    </View>
    <TextInput
    style={styles.textInput}
    keyboardType='default'
    placeholder='Meet Customer'
    autoComplete='off'
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin:8,
    width: '95%',
    height: 65, 
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#AAC4FF',
    top: -14,
    left: 25,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    flex: 1, 
    borderWidth: 3, 
    borderColor: "white",
    justifyContent: 'flex-end',
    height: 44,
    borderRadius: 65,
    paddingHorizontal: 25,
  }
})
