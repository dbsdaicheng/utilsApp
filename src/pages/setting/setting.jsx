import React from 'react';
import { View, Image} from '@tarojs/components';
import styles from './index.module.scss';

const Setting = () => {
  return (
    <View className={ styles.setting }>
      <View className={ styles.setting_content }>
        <View className={ styles.setting_item }>
          <View>地址管理</View>
          <View className={ styles.image }><Image src={ require("../../common/image/arrow-right.svg")}/></View>
        </View>
        <View className={ styles.setting_item }>
          <View>相关公司</View>
          <View className={ styles.image }><Image src={ require("../../common/image/arrow-right.svg")}/></View>
        </View>
        <View className={ styles.setting_item }>
          <View>我的位置</View>
          <View className={ styles.image }><Image src={ require("../../common/image/arrow-right.svg")}/></View>
        </View>
        <View className={ styles.setting_item }>
          <View>关于凌云智能</View>
          <View className={ styles.image }><Image src={ require("../../common/image/arrow-right.svg")}/></View>
        </View>
      </View>
    </View>
  )
}

export default Setting;
