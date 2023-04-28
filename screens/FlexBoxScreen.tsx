import { View, Text } from 'react-native';
import React, { FC, useEffect } from 'react';
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted FlexBox');

    return () => {
      console.log('un-monted FlexBox');
    };
  }, []);

  return (
    <View style={tw('flex-1 bg-gray-300 items-center justify-center flex-row')}>
      <View style={tw('w-16 h-16 bg-indigo-500')} />
      <View style={tw('w-16 h-16 bg-green-200')} />
      <View style={tw('w-16 h-16 bg-red-200')} />
      <Text>FlexBoxScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to Hello"
          onPress={() => navigation.navigate('Hello')}
        />
      </View>
    </View>
  );
};
