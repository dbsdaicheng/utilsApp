import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import styles from './index.module.scss';


const Authorize = (props) => {

  const getUserProfile = (e) => {
    
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile(
      {
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          Taro.setStorageSync("userInfo", res.userInfo);
          Taro.login({
            success: (res) => {
              Taro.setStorageSync("uctoken", res.code);
              Taro.reLaunch({url: "/pages/my/my"});
            }
          })
        }
      }
    )
  }
  return (
    <View className={ styles.authorize }>
      <View className={ styles.authorize_text }><Text>欢迎使用凌云轩榭</Text></View>
      <Button className={ styles.authorize_button} onClick={getUserProfile}>
        <Text>微信授权登陆</Text>
      </Button>
    </View>
  )
}

export default Authorize;