<template>
  <div class="tag-list-container">
    <cap-taglist :tags="tags" :goods="goods"></cap-taglist>
  
    <p>
      本 demo 以 hash 模式使用 vue-router，并在某个路由下使用 taglist，此时页面跳转是错误的。
    </p>
  </div>
</template>

<script>
import Vue from 'vue';
import TagList from 'captain-tag-list';

Vue.component(TagList.name, TagList);

export default {
  name: 'Categories',
  components: {
    TagList
  },
  data() {
    return {
      tags: [
        {
          title: '分组1 名称',
          alias: 'g1'
        },
        {
          title: '分组2 名称',
          alias: 'g2'
        },
        {
          title: '分组1 名称',
          alias: 'g3'
        },
        {
          title: '分组2 名称',
          alias: 'g4'
        }
      ],
      goods: {
        g1: [{
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2017/01/06/FsxZtyl5fQwfNnQE29Hp5cu93MkD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }],
        g2: [{
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }],
        g3: [{
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }],
        g4: [{
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }, {
          title: '商品名',
          price: '商品价格，元为单位',
          thumb: 'https://img.yzcdn.cn/upload_files/2016/12/12/Fgaekp0-31InuRTWXQ6MruV1wboD.jpg?imageView2/2/w/120/h/120/q/75',
          alias: '商品 alias'
        }]
      }
    };
  }
};
</script>

<style lang="scss">
@import '../../node_modules/captain-tag-list/lib/index.css';
</style>
