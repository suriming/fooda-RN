import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const WriteDiaryModal = ({ navigation }) => {
  // const navigation = useNavigation();
  const onPickImage = (res) => {
    if (res.didCancel || !res) {
      return;
    }
    navigation.push('WriteDiary', {res})
  }

  const temp = () => {
    navigation.push('SelectEmoji')
  }

  const onLaunchCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      onPickImage(image);
      console.log(image);
    });
  }

  const onLaunchImageLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      onPickImage(image);
      console.log(image);
    });
  }
  return (
      <View style={{ flex: 1 }}>
        <Pressable
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
          ]}
          onPress={navigation.goBack}
        />
        <View 
          style={{
            width: '100%', 
            height: '25%', 
            position: 'absolute', 
            bottom: -20, 
            backgroundColor: 'white',
            borderRadius: 30,
            }}>
          <View style={styles.Wrapper}>
            <TouchableOpacity onPress={onLaunchCamera}>
              <View style={styles.Item}>
                <Icon name="camera" size={30}/>
                <Text style={styles.ItemText}>사진 촬영하기</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLaunchImageLibrary}>
              <View style={styles.Item}>
                <Icon name="image" size={30}/>
                <Text style={styles.ItemText}>갤러리에서 선택하기</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={temp}>
              <View style={styles.Item}>
                <Icon name="image" size={30}/>
                <Text style={styles.ItemText}>이모지 선택하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default WriteDiaryModal

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  Item: {
    flexDirection: 'row',
    paddingVertical: 11,
    paddingHorizontal: 5,
  },
  ItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  Wrapper: {
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
  }
})