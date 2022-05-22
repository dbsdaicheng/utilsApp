import React from 'react';
import styles from './index.module.scss';
import { View, Image } from '@tarojs/components';
import classnames from 'classnames';
import navData from './jumpLink.js';

const Nav = () => {
  return (
    <View className={ styles.nav }>
      <View className={ styles.tag }>
        <View className={ classnames(styles.tag_item, styles.active)}>全部</View>
        <View className={ styles.tag_item }>前端</View>
        <View className={ styles.tag_item }>后端</View>
        <View className={ styles.tag_item }>设计</View>
        <View className={ styles.tag_item }>算法</View>
        <View className={ styles.tag_item }>博客</View>
        <View className={ styles.tag_item }>大数据</View>
      </View>
      <View className={ styles.content }>
        {
          navData.map((item, index) => {
            return (
              <View className={ styles.content_nav } key={index}>
                <View className={ styles.content_nav_title }>{item.title}</View>
                <View className={ styles.content_nav_list }>
                  {
                    item.list.map((e, i) => {
                      return (
                        <View className={ styles.content_nav_list_item } key={i}>
                          <View className={ styles.item_logo}><Image src={e.imgUrl}/></View>
                          <View className={ classnames(styles.item_desc, 'two-overflow')}>{e.desc}</View>
                          <View className={ styles.item_name}>{e.name}</View>
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default Nav;