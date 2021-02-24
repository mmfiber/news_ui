<template lang="pug">
  a.d-block(:href="to" target="_blank")
    v-card
      .d-flex.justify-space-between
        .wrapper.img.pa-4
          v-img(:src="imgSrc" height="100%" :aspect-ratio="4/3")
        .wrapper.content.px-4
          v-card-title(style="width:100%;")
            span.text-truncate {{ title }}
          v-card-text
            .d-flex.flex-column.justify-space-between
              p {{ abstract }}
              p.mb-0 {{ publishedAt }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import { Article } from "@/model/type"
import { msToTime } from "@/utils/time"

@Component({})
export default class NewsCard extends Vue {
  @Prop({ type: Object })
  private article!: Article

  get to() {
    return this.article.url
  }

  get title() {
    return this.article.title
  }

  get abstract() {
    if (!this.article.description) return ""
    const max = 100
    return this.article.description.length <= max
      ? this.article.description
      : this.article.description.slice(0, max) + "..."
  }

  get imgSrc() {
    return (
      this.article.urlToImage ||
      "https://h238net.com/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
    )
  }

  get publishedAt() {
    if (!this.article.publishedAt) return ""
    const now = new Date().getTime()
    const publishedAt = new Date(this.article.publishedAt).getTime()
    const time = msToTime(now - publishedAt)
    return time.hour ? `${time.hour}時間前` : `${time.min}分前`
  }
}
</script>

<style lang="stylus" scoped>
a
  text-decoration: none;

  .v-card
    min-height: 200px;

    .d-flex
      height 100%;

      .wrapper
        display: flex;
        flex-wrap: wrap;

      .img
        width: 40%;

      .content
        width: 60%;
</style>
