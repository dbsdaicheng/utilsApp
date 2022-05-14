import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './index.module.scss';


const My = () => {
  const login = () => {
    Taro.navigateTo({
      url: '/pages/authorize/authorize'
    })
  }
  return (
    <View className={ styles.my }>
      <View className={ styles.my_header }>
        <View className={ styles.my_avatar }></View>
        <View className={ styles.login } onClick={login}>请点击授权登录</View>
        <View className={ styles.my_header_content }>
          <View>
            <View>收藏</View>
            <View>0</View>
          </View>
          <View>
            <View>点赞</View>
            <View>0</View>
          </View>
          <View>
            <View>消息</View>
            <View>0</View>
          </View>
        </View>
      </View>
      <View className={ styles.my_content }>
        <View className={ styles.my_content_title }>推荐服务</View>
        <View className={ styles.my_content_list}>
          <View className={ styles.my_content_list_item }>
            <View className="icon iconfont icon-daiban" style="color: blue"></View>
            <View>待办事项</View>
          </View>
          <View className={ styles.my_content_list_item }>
            <View className="icon iconfont icon-liulanjilu" style="color: green"></View>
            <View>浏览记录</View>
          </View>
          <View className={ styles.my_content_list_item }>
            <View className="icon iconfont icon-shoucang" style="color: red"></View>
            <View>我的收藏</View>
          </View>
        </View>
      </View>
      <View className={ styles.my_more }>
        <View className={ styles.my_more_title }>更多</View>
        <View className={ styles.my_more_list}>
          <View className={ styles.my_more_list_item }>
            <View className="icon iconfont icon-zuopin"></View>
            <View>我的作品</View>
          </View>
        </View>
      </View>
      <View className={ styles.loginout}>
        <View className={ styles.loginout_button }>退出登录</View>
      </View>
    </View>
  )
}

export default My;