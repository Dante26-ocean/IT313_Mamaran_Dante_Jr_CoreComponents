import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import StudentDirectory from './Components/StudentDirectory';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <StudentDirectory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});