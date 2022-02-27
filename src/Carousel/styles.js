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

  headerContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    height: Platform.OS === 'ios' ? 100 : 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#21272F',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft: 15,
    fontSize: 16,
    maxWidth: 200,
    textTransform: 'uppercase',
    color: '#FFF',
  },
  arrowContainer: {
    marginLeft: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 12,
    lineHeight: 17,
  },
  photoContainer: {
    alignSelf: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  rotateIconContainer: {
    position: 'absolute',
    padding: 5,
    borderRadius: 40,
    left: 7,
    top: 7,
    backgroundColor: '#5EC3FC',
  },
  removeIconContainer: {
    position: 'absolute',
    padding: 5,
    borderRadius: 40,
    right: 7,
    top: 7,
    backgroundColor: '#FD9680',
  },
  toast: {
    position: 'absolute',
    bottom: 115,
    left: 15,
    right: 15,
    justifyContent: 'center',
    height: 42,
    backgroundColor: '#263D57',
    opacity: 0.9,
    borderRadius: 8,
  },
  toastText: {
    color: '#F7FBFE',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 23,
    textAlign: 'center',
  },
  completeButton: {
    height: 48,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#3188EC',
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 24,
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default styles;
