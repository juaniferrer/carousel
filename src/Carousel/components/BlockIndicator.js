import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dots: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#1A909F',
  },
});

const BlockIndicator = ({currentIndex, maxBlockSize}) => (
  <View style={styles.container}>
    {[...Array(maxBlockSize)].map((e, i) => (
      <View
        style={[
          styles.dots,
          {backgroundColor: currentIndex === i ? '#C7EAF5' : '#5AACBF'},
        ]}
      />
    ))}
  </View>
);

export default BlockIndicator;
