import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from './src/Carousel';

const styles = StyleSheet.create({
  appContainer: {flex: 1, backgroundColor: 'white'},
  labelContainer: {paddingVertical: 5, backgroundColor: '#053C41'},
  labelText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
  },
});

const App = () => (
  <View style={styles.appContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>
        Whitespectre - Carousel - Juan Ignacio Ferrer
      </Text>
    </View>

    <Carousel />
  </View>
);

export default App;
