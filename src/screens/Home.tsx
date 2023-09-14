import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {t} from '../lib/i18n/translate';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

export default function HomeScreen(props: HomeScreenProps): JSX.Element {
  return (
    <View style={styles.screen}>
      <Text> Hello Navigation </Text>
      <TouchableNativeFeedback
        onPress={() => {
          props.navigation.navigate('Random');
        }}>
        {t('Go to random cuisine')}
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'red',
  },
});
