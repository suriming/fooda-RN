import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput } from "react-native";
import ForSignUpButton from "../components/ForSignUpButton";

function WriteDiary () {
  const [image, setTimage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png')
  const route = useRoute();
  const {res} = route.params || {};
  console.log(res.path)
  useEffect(() => {
    setTimage(res.path);
  },[]);
  return(
    <View style={styles.fullscreen}>
      <View style={styles.writeView}>
        <ImageBackground
            source={{uri: image}}
            style={{ width: 100, height: 100}}
            imageStyle={{borderRadius: 5}}
        />
        <TextInput 
            style={styles.titleInput}
            placeholder="제목"
            placeholderTextColor="#000000"
        />
        <TextInput 
            style={styles.contentInput}
            placeholder="메모를 입력하세요"
            multiline={true}
        />
      </View>
      <View style={styles.buttonView}>
            <ForSignUpButton 
                style={styles.button}
                title="저장하기"
            />
      </View>
    </View>
    
  );
}

export default WriteDiary;

const styles = StyleSheet.create({
  fullscreen: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: "space-around"
  },
  writeView: {
    justifyContent: "flex-start",
    marginHorizontal: 20
  },
  buttonView: {
    justifyContent: "flex-end",
  },
  button: {
    position: 'absolute',
    bottom: 10,
  },
  titleInput: {
    fontSize: 24,
    fontFamily: "NotoSansKR-Bold",
    marginTop: 10,
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    paddingVertical: 0,
  },
  contentInput: {
    fontFamily: "NotoSansKR-Regular"
  }
})

