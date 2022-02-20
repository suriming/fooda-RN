import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from "./navigation/Root";
import { SignUpDataContextProvider } from './contexts/SignUpDataContext';

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))

// const loadImages = (images) => images.map(image => {
//   if(typeof asset === "string"){
//     return Image.prefetch(image);
//   } else {
//     return Image.loadAsync(image)
//   }
// })

export default function App() {
  return (
  <SignUpDataContextProvider>
  <NavigationContainer>
    <Root />
  </NavigationContainer>
  </SignUpDataContextProvider>
  );
}