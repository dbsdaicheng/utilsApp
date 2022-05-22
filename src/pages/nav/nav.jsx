import React, { useState } from 'react';
import styles from './index.module.scss';
import { View, Image } from '@tarojs/components';
import classnames from 'classnames';
import { navData, titleList } from './jumpLink.js';

const Nav = () => {

  const [current, setCurrent] = useState(0);

  return (
    <View className={ styles.nav }>
      <View className={ styles.tag }>
        {
          titleList.map((item, index) => {
            return <View 
                    className={  classnames([styles.tag_item], {[styles.active]: current == index})}
                    key={item.name}
                    onClick={() => {setCurrent(index)}}
                  >{item.name}</View>
          })
        }
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