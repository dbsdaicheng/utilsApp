import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtModal } from "taro-ui"
import { View, Image } from '@tarojs/components';
import styles from './index.module.scss';

const My = () => {

  const [userInfo] = useState(Taro.getStorageSync("userInfo"));
  const [code] = useState(Taro.getStorageSync("uctoken"));
  const [isOpened, setIsOpened] = useState(false);

  const login = () => {
    Taro.navigateTo({
      url: '/pages/authorize/authorize'
    })
  }

  const loginout = () => {
    setIsOpened(true);
  }

  const handleConfirm = () => {
    Taro.removeStorageSync("userInfo");
    Taro.removeStorageSync("uctoken");
    Taro.reLaunch({url: '/pages/index/index'});
  }

  const handleCancel = () => {
    setIsOpened(false);
  }

  const goToSetting = () => {
    Taro.navigateTo({url: '/pages/setting/setting'})
  }

  return (
    <View className={ styles.my }>
      <View className={ styles.my_header }>
        <View className={ styles.my_avatar } ><Image src={userInfo.avatarUrl}/></View>
        <View className={ styles.login } onClick={login}>{code ? userInfo.nickName : "请点击授权登录"}</View>
        <View className={ styles.setting } onClick={ goToSetting }><View className="icon iconfont icon-setting-fill"></View></View>
      </View>
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
      {
        code && <View className={ styles.loginout}>
        <View className={ styles.loginout_button } onClick={loginout}>退出登录</View>
      </View>
      }
      <AtModal
        isOpened={isOpened}
        title='提示信息'
        cancelText='取消'
        confirmText='确认'
        onClose={ handleCancel }
        onCancel={ handleCancel }
        onConfirm={ handleConfirm }
        content='您确定要退出登录吗？'
      />
    </View>
  )
}

export default My;