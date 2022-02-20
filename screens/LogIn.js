import React, {useState} from 'react';
import { StyleSheet, Text, View, Keyboard, Alert } from 'react-native'
import { SafeAreaView } from 'react-native';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';
import { signIn } from '../lib/auth';

function SignIn({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password} = form;
    const info = {email, password};
    console.log(form)
    console.log(info)
    try {
      const {user} = await signIn(info);
      console.log(user);
    } catch (e) {
      Alert.alert('로그인 실패');
      console.log(e);
    } finally {
    }
  };
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>푸다</Text>
      <View style={styles.form}>
        <BorderedInput 
          hasMarginBottom
          placeholder="이메일"
          autoCapitalize='none'
          onSubmitEditing={onSubmit}
          onChangeText={createChangeTextHandler('email')}
          />
        <BorderedInput
          hasMarginBottom={false}
          placeholder="비밀번호"
          autoCapitalize='none'
          onSubmitEditing={onSubmit}
          onChangeText={createChangeTextHandler('password')}
         />
        <View style={styles.buttons}>
          <CustomButton 
            title="로그인" 
            hasMarginBottom
            onPress={() => {
              onSubmit()
              navigation.navigate('Tabs')
            }}
          />
          <CustomButton 
            title="회원가입" 
            theme="secondary" 
            onPress={() => 
              navigation.push('SignUp')
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

export default SignIn;