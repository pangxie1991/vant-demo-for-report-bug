<template>
  <div class="sku-container">
    <cap-sku v-model="show" :sku="sku" :goods="goods" :goods-id="id" :hide-stock="sku.hide_stock" :show-add-cart-btn="true" :quota="quota" :quota-used="quotaUsed" @buyClicked="handleBuyClicked" @addCart="handleAddCartClicked"></cap-sku>
    <van-button type="primary" @click="buy" block>立即购买</van-button>
  
    <p>第一次发邮件时版本为 0.1.10。目前写 demo 时使用版本为 0.1.12，发现按照 0.1.10 的写法已经无法让cap-sku 组件弹出来了。使用 Vue 开发者工具改变 DOM 节点的 display 属性让组件显示后，发现购买数量数已经正常显示。</p>
    <p>但是在原项目中使用的版本为 0.1.12，改变 DOM 节点的 display 属性让组件显示后，购买数量依旧已经正常显示。将 vant 从 0.5.7 升级到 0.5.11 后表现和 demo 一致。</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Sku from 'captain-sku';

Vue.component(Sku.name, Sku);

export default {
  name: 'goodDetail',
  data() {
    return {
      show: false,
      id: '12',
      // 限购数(0表示不限购)
      quota: 12,
      // 已经购买过的数量
      quotaUsed: 0,
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品sku缩略图
        picture: 'https://img.yzcdn.cn/upload_files/2017/03/15/FmIBe72l2ze1bmi2IvTJrDvpIdAn.jpeg!140x140+2x.jpg'
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [{
          k: '颜色', // skuKeyName：规格类目名称
          v: [{
            id: 30349, // skuValueId：规格值id
            name: '红色', // skuValueName：规格值名称
            imgUrl: 'https://img.yzcdn.cn/upload_files/2017/03/15/FqKGSv3oYN3YJv5AiUNb99BH9ojI.jpeg!140x140+2x.jpg' // 规格类目图片，暂时只能第一个规格类目可以定义图片
          }, {
            id: 1215,
            name: '蓝色',
            imgUrl: 'https://img.yzcdn.cn/upload_files/2017/03/15/FmIBe72l2ze1bmi2IvTJrDvpIdAn.jpeg!140x140+2x.jpg'
          }],
          k_s: 's1' // skuKeyStr：sku组合列表（下方list）中当前类目对应的key值，value值会是从属于当前类目的一个规格值id
        }],
        // 所有sku的组合列表，比如红色、M码为一个sku组合，红色、S码为另一个组合
        list: [{
          id: 2259, // skuId，下单时后端需要
          price: 100, // 价格（单位分）
          s1: 1215, // 规格类目k_s为s1的对应规格值id
          s2: 1193,  // 规格类目k_s为s2的对应规格值id
          s3: 0, // 最多包含3个规格值，为0表示不存在该规格
          stock_num: 110 // 当前sku组合对应的库存
        }],
        price: 1, // 默认价格（单位元）后端单位暂时有点不统一
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品skuId取collection_id，否则取所选sku组合对应的id
        none_sku: false, // 是否无规格商品
        messages: [{ // 商品留言
          datetime: 0, // 留言类型为time时，是否含日期。“1”表示包含
          multiple: 0, // 留言类型为text时，是否多行文本。“1”表示多行
          name: '留言', // 留言名称
          type: 'text', // 留言类型，可选id_no（身份证）, text, tel, date, time, email
          required: 1 // 是否必填 “1”表示必填
        }],
        hide_stock: false // 是否隐藏剩余库存
      },
      skuData: {
        // 商品id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: '' // 有几个留言就有几条
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的sku组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: '30349',
          s2: '1193',
          s3: '0',
          stock_num: 111
        }
      }
    };
  },
  methods: {
    handleBuyClicked() {

    },
    handleAddCartClicked() {

    },
    buy() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss">
@import '../../node_modules/captain-sku/lib/index.css';

.sku-container {
  padding: 0 15px;
}

.cap-sku-row__item {
  height: auto;
}
</style>
