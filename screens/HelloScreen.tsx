import { View, Text } from 'react-native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { Child } from '../components/Child';
import { FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const [printText, setPrintText] = useState('');

  useEffect(() => {
    console.log('mounted HelloScreen');

    return () => {
      console.log('un-monted HelloScreen');
    };
  }, []);

  const printMessage = useCallback(() => {
    console.log(`Print: ${printText}`);
  }, [printText]);

  return (
    <View style={tw('flex-1 bg-gray-300 items-center justify-center')}>
      <Text>HelloScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text>{text}</Text>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={printText}
        onChangeText={(text) => setPrintText(text)}
      />
      <Text>{printText}</Text>
      <Child printMessage={printMessage} />
    </View>
  );
};
