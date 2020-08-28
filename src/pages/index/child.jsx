import { View, Text } from '@tarojs/components';
import React from 'react';

function Child(props) {
  return (
    <View>
      <Text>{props.userName}</Text>
    </View>
  )
}

export default Child;
