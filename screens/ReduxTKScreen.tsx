import { View, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  addByPayload,
  decrement,
  increment,
  selectCount,
} from '../slices/counterSlice';
import { FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: FC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState('0');
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementAmmount = Number(amount) || 0;

  useEffect(() => {
    console.log('mounted ReduxTK');

    return () => {
      console.log('un-monted ReduxTK');
    };
  }, []);

  return (
    <View style={tw('flex-1 bg-gray-300 items-center justify-center')}>
      <Text>Redux ToolKit {count}</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
      <View style={tw('my-1')}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={tw('my-1')}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Input
        style={tw('my-1')}
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={amount}
        onChangeText={(text: string) => setAmount(text)}
      />
      <View style={tw('my-1')}>
        <Button
          title="increment by amount"
          onPress={() => {
            dispatch(addByPayload(incrementAmmount));
            setAmount('0');
          }}
        />
      </View>
    </View>
  );
};
