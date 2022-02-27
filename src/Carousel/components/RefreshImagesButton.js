import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    marginLeft: 20,
    width: Dimensions.get('window').width * 0.4,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#1A909F',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

const RefreshImagesButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Refresh Images</Text>
  </TouchableOpacity>
);

export default RefreshImagesButton;
