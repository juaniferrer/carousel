import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import styles from './styles';
import Buttons from './components/Buttons';
import BlockIndicator from './components/BlockIndicator';
import mockUpData from './mockUpData';
import {MAX_BLOCKS, NEXT, BACK} from '../utils/variables';
import getImageDimensions from '../utils/getImageDimensions';
import RefreshImagesButton from './components/RefreshImagesButton';

const Carousel = () => {
  const flatList = useRef();
  const blockBundleAmount = Math.ceil(mockUpData.length / 4);
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentBlockBundle, setCurrentBlockBundle] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(null);
  const {height, width} = Dimensions.get('screen');
  const viewConfigRef = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 50,
  });
  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems?.length > 0) {
      setPhotoIndex(viewableItems[0].index);
    }
  });

  useEffect(() => {
    setCarouselImages(getRandomImages());
  }, [currentBlockBundle]);

  useEffect(() => {
    if (shouldScroll) {
      const newIndx = shouldScroll === NEXT ? 0 : MAX_BLOCKS - 1;
      setPhotoIndex(() => {
        flatList.current.scrollToIndex({
          index: newIndx,
          animated: false,
        });
        return newIndx;
      });
      setShouldScroll(null);
    }
  }, [carouselImages]);

  const getRandomImages = () =>
    mockUpData
      .slice(
        currentBlockBundle * MAX_BLOCKS,
        Math.min((currentBlockBundle + 1) * MAX_BLOCKS, mockUpData.length),
      )
      .map(block => {
        const {images} = block;
        const randomImageIndx = Math.floor(Math.random() * images.length);
        return images[randomImageIndx];
      });

  useEffect(() => setCarouselImages(getRandomImages()), []);

  const handlePreviousPressed = () => {
    if (photoIndex === 0 && currentBlockBundle > 0) {
      setCurrentBlockBundle(state => {
        setShouldScroll(BACK);
        return state - 1;
      });
    } else {
      setPhotoIndex(state => {
        flatList.current.scrollToIndex({
          index: state - 1,
          animated: true,
        });
        return state - 1;
      });
    }
  };

  const handleNextPressed = () => {
    if (
      photoIndex === MAX_BLOCKS - 1 &&
      currentBlockBundle < blockBundleAmount - 1
    ) {
      setCurrentBlockBundle(state => {
        setShouldScroll(NEXT);
        return state + 1;
      });
    } else {
      setPhotoIndex(state => {
        flatList.current.scrollToIndex({
          index: state + 1,
          animated: true,
        });
        return state + 1;
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#474C5E" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.carouselContainer}>
          <RefreshImagesButton
            onPress={() => setCarouselImages(getRandomImages())}
          />
          <FlatList
            ref={flatList}
            horizontal
            data={carouselImages}
            extraData={carouselImages}
            keyExtractor={item => item?.id}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
            renderItem={({item: image, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    key={image?.id}
                    style={[
                      styles.photoContainer,
                      {
                        height: getImageDimensions(
                          image,
                          {height, width},
                          photoIndex === index,
                        ).height,

                        width: getImageDimensions(
                          image,
                          {height, width},
                          photoIndex === index,
                        ).width,
                        marginLeft: index === 0 ? 20 : 0,
                        marginRight:
                          index === carouselImages?.length - 1 ? 20 : 0,
                      },
                    ]}>
                    <Image source={{uri: image?.url}} style={styles.image} />
                  </View>
                </View>
              );
            }}
          />
          <BlockIndicator
            maxBlockSize={carouselImages?.length}
            currentIndex={photoIndex}
          />
        </View>

        <Buttons
          onPreviousPressed={() => {
            handlePreviousPressed();
          }}
          previousDisabled={photoIndex === 0 && currentBlockBundle === 0}
          nextDisabled={
            photoIndex === carouselImages?.length - 1 &&
            currentBlockBundle === blockBundleAmount - 1
          }
          onNextPressed={() => handleNextPressed()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Carousel;
