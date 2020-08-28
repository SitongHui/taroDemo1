import { View, Text } from '@tarojs/components'
import './index.less'
import React, { useState } from "react";
import Child from './child';

function Index() {
  const [userName, setUserName] = useState('huihui');
  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
    </View>
  )

}

export default Index;
