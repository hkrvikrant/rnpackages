import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <FontAwesome name="rocket" size={30} color="#900" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
