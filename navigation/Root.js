import React from "react";
import Tabs from "./Tabs";
import Stack from "./Stack";
import CalendarTab from "./CalendarTabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WriteDiary from "../screens/WriteDiary";
import selectEmoji from "../screens/SelectEmoji";
import SelectEmoji from "../screens/SelectEmoji";
const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator 
    initialRouteName="Stack"
    screenOptions={{ headerShown: false }}
    >
  {/* <Nav.Screen name="SignIn" component={SignIn} options={{headerShown: false}} /> */}
  <Nav.Screen 
    name="Tabs" 
    component={Tabs} 
  />
  <Nav.Screen 
    name="Stack" 
    component={Stack} 
  />
  <Nav.Screen 
    name="CalendatTab" 
    component={CalendarTab} 
  />
  <Nav.Screen 
    name="WriteDiary" 
    component={WriteDiary}
    options={{headerShown: true, title: '새 게시물', headerBackTitleVisible: false}} 
  />
  <Nav.Screen
    name="SelectEmoji"
    component={SelectEmoji}
    options={{headerShown: false, headerBackTitleVisible: false}}
  />
</Nav.Navigator>
);

export default Root;