import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 40,
  },
  buttonContainer: {
    borderRadius: 5,

    width: Dimensions.get('window').width * 0.3,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

const Buttons = ({
  onPreviousPressed,
  onNextPressed,
  previousDisabled,
  nextDisabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      disabled={previousDisabled}
      onPress={() => onPreviousPressed()}
      style={[
        styles.buttonContainer,
        {backgroundColor: previousDisabled ? 'grey' : '#1A909F'},
      ]}>
      <Text style={styles.buttonText}>Previous</Text>
    </TouchableOpacity>
    <TouchableOpacity
      disabled={nextDisabled}
      onPress={() => onNextPressed()}
      style={[
        styles.buttonContainer,
        {backgroundColor: nextDisabled ? 'grey' : '#1A909F'},
      ]}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

export default Buttons;
