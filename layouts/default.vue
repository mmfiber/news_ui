<template lang="pug">
  v-app
    v-main
      Header
      nuxt
      Footer
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

@Component({ components: { Header, Footer } })
export default class extends Vue {}
</script>
