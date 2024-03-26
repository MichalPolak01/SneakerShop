import { View, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { slides } from '../../../assets/Onboarding/slides';
import { OnboardingItem } from './OnboardingItem'
import { Paginator } from './Paginator'
import { NextButton } from './NextButton'
import { styles } from './Styles/onboardingStyles';

export const Onboarding = ({ setRefresh  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    const scrollTo = async () => {
      if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({index: currentIndex + 1});
      } else {
        try {
          await AsyncStorage.setItem('@viewOnboarding', 'true');
          setRefresh();
        } catch (err) {
          console.log('Error @setItem:', err);
        }
      }
    };

    return (
      <View style={styles.container}>
        <View style={{height: '70%'}}>
          <FlatList 
            data={slides}
            renderItem={({item}) => <OnboardingItem item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
              useNativeDriver: false
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
        />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
      </View>
    )
}