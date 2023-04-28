import { View, Text } from 'react-native';
import React, { FC, useEffect } from 'react';
import tw from 'tailwind-rn';
import { Button } from 'react-native-elements';

type Props = {
  printMessage: () => void;
};

const ChildMemo: FC<Props> = ({ printMessage }) => {
  console.log('child render');

  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="Print" onPress={printMessage} />
    </View>
  );
};

export const Child = React.memo(ChildMemo);
