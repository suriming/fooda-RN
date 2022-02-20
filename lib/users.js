import { firebase } from "@react-native-firebase/firestore";

export const usersCollection = firebase.firestore().collection('users');