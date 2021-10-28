import { SafeAreaView, StyleSheet, TextInput } from "react-native";

import React from "react";

const UselessTextInput = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
 const onTrigger = (event) => {
     props.onPress(event,props.type);
    
}
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onTrigger}
        value={number}
        placeholder={props.title}
        keyboardType="numeric"
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
});

export default UselessTextInput;