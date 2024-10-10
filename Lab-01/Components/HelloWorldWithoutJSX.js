import React from 'react';
import { Text, View } from 'react-native';

export const HelloWorld = () => {
  const {createElement}= React;
  
  return createElement(
    View,{style:{flexDirection:'row'}},
    createElement(View,{style:{padding:20,backgroundColor:"#000"}},createElement(Text,{style:{color:"white"}},"Primeira Coluna")),
    createElement(View,{style:{padding:20,backgroundColor:"#000"}},createElement(Text,{style:{color:"white"}},"Segunda Coluna")));
    
}