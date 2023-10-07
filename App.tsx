/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const initialUrl = 'https://main.dp481q2cx1mj6.amplifyapp.com/'; // Replace with your desired URL

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: initialUrl}}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
