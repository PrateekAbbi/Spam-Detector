import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  StatusBar,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import { DefaultTheme, Drawer, Provider as PaperProvider } from 'react-native-paper';
import {
  Divider
} from 'react-native-paper'
import Header from './src/Header'
import Messages from './src/components/Messages'


import SmsAndroid from 'react-native-get-sms-android'
import SmsListener from 'react-native-android-sms-listener'

import { check, PERMISSIONS, RESULTS, request, checkMultiple, requestMultiple, openSettings } from 'react-native-permissions'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#fff',
  },
};




const requestPermission = () => {
  request(PERMISSIONS.ANDROID.READ_SMS).then((response) => {
    console.log(response)
  })
}
requestPermission();

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      
      {
        // title: "Cool Photo App Camera Permission",
        // message:
        //   "Cool Photo App needs access to your camera " +
        //   "so you can take awesome pictures.",
        // buttonNeutral: "Ask Me Later",
        // buttonNegative: "Cancel",
        // buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

    const filter = {
      box: "",
      // bodyRegex:"" //regex 
      //body:"selam",
      //adress:"+905545455"
      //minDate: 123213213,
      //maxDate:12312321321
      // read: 1,
      indexFrom: 0,
      // maxCount: 10
    }
    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log('fail', fail)
      },
      (count, smsList) => {
        console.log('count', count)
        console.log('smsList', JSON.parse(smsList))
      }
    )
  
    } else {
      request(PERMISSIONS.ANDROID.READ_SMS).then((response) => {
        console.log(response);
        console.log('NO permission');
      })
    }
  } catch (err) {
    console.warn(err);
  }
};
requestCameraPermission();
const App = () => {
  
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    const subscribe = SmsListener.addListener(message => {
      alert('ro');
      console.log("gelen sms", message);
      alert(message);
    })
    return () => subscribe.remove()
  }, [])


  return (
    <PaperProvider theme={theme}>
      <StatusBar
        // animated={true}
        backgroundColor="#3498db"
      />
      <Header />
      <Divider />
      <ScrollView>

        <Messages />
        <Messages />
        <Messages />
      </ScrollView>

    </PaperProvider>
  );
}



export default App;