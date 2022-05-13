import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';


const Authorize = () => {
  const login = () => {
    Taro.login({
      success: (res) => {
        console.log(res);
        Taro.getUserProfile({
          desc: '用于完善会员资料',
          success: (res) => {
            console.log(res)
          }
        })
      }
    })
  }
  return (
    <View className={ styles.authorize }>
      <View className={ styles.authorize_text }><Text>欢迎使用凌云轩榭</Text></View>
      <View className={ styles.authorize_button} onClick={login}>
        <Text>微信授权登陆</Text>
      </View>
    </View>
  )
}

export default Authorize;