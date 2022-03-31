import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from "react-native";
import ForSignUpButton from "../components/ForSignUpButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styled from 'styled-components/native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import icons from "../constants/icons";

const Home = ({ navigation }) => {
  const categoryData = [
    {
      id: 1,
      name: "메뉴",
      icon: icons.soup
    },
    {
      id: 2,
      name: "식당",
      icon: icons.mapMarker
    },
    {
      id: 3,
      name: "별점",
      icon: icons.star
    },
    {
      id: 4,
      name: "날씨",
      icon: icons.sunrise,
    },
    {
      id: 5,
      name: "감정",
      icon: icons.heartArrow
    }
  ]

  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <View 
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={item.icon}
            style={{
              marginRight: 5,
            }}
          />
          <TouchableOpacity
            style={{
              padding: 3.5,
              borderRadius: 15,
              borderColor: "black",
              justifyContent:"center",
              alignItems: "center",
              backgroundColor: "#EFEFEF",
              marginRight: 10
            }}
          >
            <Text
              style={{
                marginTop: 4,
                marginBottom: 4,
                marginHorizontal: 7.8
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
    return(
      <View style={{
        marginLeft: 20
      }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{ paddingVertical: 5}}
        />
      </View>
    )
  }
  return(
    <SafeAreaView style={styles.container}>
      {renderMainCategories()}
    </SafeAreaView>
  )

}



Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

function WriteDiary () {
  const [image, setTimage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png')
  const route = useRoute();
  const {res} = route.params || {};
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("dateFormat: ", date.format("yyyy/MM/dd"));
    hideDatePicker();
    onChangeText(date.format("yyyy/MM/dd"))
  };
  const [text, onChangeText] = useState("")
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
            placeholderTextColor="#808080"
        />
      </View>
      <View style={styles.tagContainer}>
        {/* <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        > */}
        <Text>날짜</Text>
        <TouchableOpacity 
          onPress={showDatePicker}
        >
          <TextInput 
            pointerEvents="none"
            placeholder="date"
            placeholderTextColor="#808080"
            editable={false}
            value={text}
            styles={styles.tag}
          />
          <DateTimePickerModal 
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
        {/* </ScrollView> */}
      <View>
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

export default Home;

const styles = StyleSheet.create({
  fullscreen: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: "space-around",
  },
  writeView: {
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginVertical: 15,
    // marginTop:15,
    // flex: 1
  },
  buttonView: {
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  button: {
    position: 'absolute',
    bottom: 10,
  },
  titleInput: {
    fontSize: 24,
    fontFamily: "NotoSansKR-Bold",
    borderRadius:1,
    marginTop: 10,
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    paddingVertical: 0,
  },
  contentInput: {
    fontFamily: "NotoSansKR-Regular"
  },
  tag: {
    borderRadius: 2,
    fontSize: 16,
    borderWidth: 1,
    height:40,
    width: 300,
    padding: 10,
  },
  tagContainer: {
    flex: 1,
    marginHorizontalL:20,
  },
  scroll: {
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})

