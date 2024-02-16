import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Button {
  text: string;
  color?: string;
  widthButton?: boolean;
  action: (textNumber: string) => void
}

export const ButtonCalc = ({
  text,
  color = '#F8AD9D',
  widthButton = false,
  action
}: Button) => {
  return (
    <TouchableOpacity onPress={()=> action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: widthButton ? 180 : 80,
        }}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    // backgroundColor: "#339CFF",
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
