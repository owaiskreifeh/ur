import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

import {appContainer} from '../lib/container/appContainer';
import {RandInRange, secondsToMs} from '../lib/utils/NumberUtils';
import {Cuisine} from '../lib/interfaces/Cuisine';
import {t} from '../lib/i18n/translate';

export default function RandomScreen(): JSX.Element {
  const [cuisine, setCuisine] = useState<Cuisine | null>(null);

  const getRandomCuisine = useCallback(() => {
    setTimeout(() => {
      const randCuisine = appContainer
        .getDatabase()
        .findByID(RandInRange(0, 20, /** asInt */ true)) as Cuisine;
      setCuisine(randCuisine);
    }, secondsToMs(RandInRange(0, 4)));
  }, [setCuisine]);

  return (
    <View style={styles.screen}>
      <Text> Hello Navigation Random </Text>

      <TouchableNativeFeedback onPress={getRandomCuisine}>
        {t('What to eat')}
      </TouchableNativeFeedback>

      {cuisine && <Text>{cuisine.foodType}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'red',
  },
});
