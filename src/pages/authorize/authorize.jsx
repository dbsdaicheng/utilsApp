import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import styles from './index.module.scss';


const Authorize = (props) => {

  const onGetUserInfo = (e) => {
    Taro.navigateBack();
  }
  return (
    <View className={ styles.authorize }>
      <View className={ styles.authorize_text }><Text>欢迎使用凌云轩榭</Text></View>
      <Button className={ styles.authorize_button} openType="getUserInfo" onGetUserInfo={onGetUserInfo}>
        <Text>微信授权登陆</Text>
      </Button>
    </View>
  )
}

export default Authorize;