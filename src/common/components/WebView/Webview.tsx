import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export const WebViewComponent = () => {
  return (
    <View style={ {
      width: '100%',
      height: '100%',
    }}>
      <WebView
        style={styles.container}
        originWhitelist={['*']}
        source={{ uri: 'https://facebook.com' }}
      />
    </View>
  );
}
const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    height: '100%',
  }
}); 
