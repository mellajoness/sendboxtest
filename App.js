/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Calendar from './component/calendar'
import {
  Colors,
 } from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor="green" barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
       
        <View
          style={{
            backgroundColor: 'white',
          }}>
         
        <Text style={{color:'black',fontSize:20,fontWeight:'bold',paddingLeft:20,textAlign:'center'}}>working</Text>
        <Calendar/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
