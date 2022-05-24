import { View, Text, Image } from '@tarojs/components';
import styles from './index.module.scss';
import classnames from 'classnames';

const Index = () => {
  return (
    <View className={ styles.index }>
      <View className={ styles.banner }></View>
      <View className={ styles.newActivity }>
        <View className={ styles.newActivity_title }>最新活动</View>
        <View className={ styles.newActivity_list}>
          <View className={ styles.newActivity_item}>
            <View className={ styles.activity_name }>岳西翠兰买一赠一</View>
            <View  className={classnames( styles.activity_desc, "two-overflow") }>大别山绿茶、天然无污染、不打农药，纯野生茶叶。
            </View>
            <View className={ styles.activity_more }>立即查看</View>
          </View>
          <View className={ styles.newActivity_item}>
            <View className={ styles.activity_name }>活动标题</View>
            <View className={classnames( styles.activity_desc, "two-overflow") }>活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述</View>
            <View className={ styles.activity_more }>立即查看</View>
          </View>
        </View>
      </View>
      <View className={ styles.utils }>
        <View className={ styles.utils_title }>我的工具集</View>
        <View className={ styles.utils_list }>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/dice1.png") }/>
            </View>
            <View className={ styles.utils_name }>掷骰子</View>
            <View className={ styles.utils_desc }>随机数</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/coin.png") }/>
            </View>
            <View className={ styles.utils_name }>抛硬币</View>
            <View className={ styles.utils_desc }>二选一</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/wuti.png") }/>
            </View>
            <View className={ styles.utils_name }>大转盘</View>
            <View className={ styles.utils_desc }>多选一</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/tea.png") }/>
            </View>
            <View className={ styles.utils_name }>绿茶</View>
            <View className={ styles.utils_desc }>茶道文化</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/liquor.png") }/>
            </View>
            <View className={ styles.utils_name }>白酒</View>
            <View className={ styles.utils_desc }>白酒文化</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/daiban.png") }/>
            </View>
            <View className={ styles.utils_name }>待办</View>
            <View className={ styles.utils_desc }>待办事项</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/bill.png") }/>
            </View>
            <View className={ styles.utils_name }>记账</View>
            <View className={ styles.utils_desc }>每日消费</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/foods.png") }/>
            </View>
            <View className={ styles.utils_name }>美食</View>
            <View className={ styles.utils_desc }>经典小吃</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/trival.png") }/>
            </View>
            <View className={ styles.utils_name }>旅游</View>
            <View className={ styles.utils_desc }>各地风景</View>
          </View>
          <View className={ styles.utils_item }>
            <View className={ styles.utils_logo }>
              <Image src={ require("../../common/image/read.png") }/>
            </View>
            <View className={ styles.utils_name }>阅读</View>
            <View className={ styles.utils_desc }>每日阅读</View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index;
