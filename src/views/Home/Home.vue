<template>
  <div class="Home-container">
    <van-nav-bar
      title="koi 白羊"
      fixed
      placeholder
    />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" :disabled="finished">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <ArticleInfo v-for=" item in artList" :key="item.art_id"
        :title="item.title"
        :author="item.aut_name"
        :cmt-count="item.comm_count"
        :time="item.pubdate"
        :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入 getArticleList.js 文件 获得getArticleList() 方法，返回值为文章列表
import { getArticleList } from '@/api/getArticleAPI.js'
// 导入需要的组件
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      limit: 10,
      artList: [],
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleList(this.page, this.limit)
      // console.log(res)
      if (isRefresh) {
        this.artList = [...res, ...this.artList]
        this.isLoading = false
      } else {
        this.artList = [...this.artList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad () {
      // console.log('aaa')
      this.page++
      this.initArticleList()
    },
    onRefresh () {
      this.page++
      this.initArticleList(true)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
// .Home-container {
//   /deep/.van-nav-bar {
//     background-color: skyblue;
//   }
//   /deep/.van-nav-bar__title {
//     color: white;
//   }
// }
</style>
