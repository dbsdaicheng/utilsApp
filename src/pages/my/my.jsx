import React from 'react';
import { View, Text } from '@tarojs/components'
import { AtButton } from "taro-ui"
import './index.module.scss'


const My = () => {
  return (
    <View>
      <Text>我的个人中心</Text>
      <AtButton type="primary">登陆</AtButton>
    </View>
  )
}

export default My;