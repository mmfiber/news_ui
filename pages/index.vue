<template lang="pug">
  v-row.mx-auto
    v-col(cols=12)
    v-col(cols=12 v-for="(article, idx) in articles" :key="idx")
      NewsCard(:article="article")
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import NewsCard from "@/components/NewsCard.vue"
import News from "@/plugins/news"

@Component({ components: { NewsCard } })
export default class NewsList extends Vue {
  private news = new News(this.$config.newsApiKey)
  private articles: any = {}

  async mounted() {
    await this.news
      .getTopHeadlines()
      .then((res: any) => (this.articles = res.data.articles))
  }
}
</script>

<style lang="stylus" scoped>
.row
  max-width: 800px;
</style>
