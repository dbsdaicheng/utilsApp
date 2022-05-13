import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtButton } from "taro-ui"
import './index.module.scss'


const My = () => {
  const login = () => {
    Taro.navigateTo({
      url: '/pages/authorize/authorize'
    })
  }
  return (
    <View>
      <Text>我的个人中心</Text>
      <AtButton type="primary" onClick={login}>登陆</AtButton>
    </View>
  )
}

export default My;