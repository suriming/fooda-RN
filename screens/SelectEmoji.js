import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from 'styled-components/native'

const Emotions = styled.View`
  flex-direction: row;
`;
const Emotion = styled.Text`
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 5px;
  font-size: 60px;
`;
const emotions = ["🙂","🙂"]

function SelectEmoji() {
  return(
    <View style={styles.fullscreen}>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion key={index}>{emotion}</Emotion>
        ))} 
      </Emotions>
    </View>
  )
}

export default SelectEmoji;

const styles = StyleSheet.create({
  fullscreen:{
    flex:1,
    marginVertical: 200,
    justifyContent: 'center',
    marginHorizontal: 30
  }
})