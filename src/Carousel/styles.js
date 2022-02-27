import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: '#50A6B1',
    height: Dimensions.get('window').height * 0.82,
  },
  image: {
    flex: 1,
    borderColor: '#0D8C9B',
    borderWidth: 1,
  },
  photoContainer: {
    alignSelf: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});

export default styles;
