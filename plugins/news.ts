import axios from "axios"
// import nuxtConfig from "../nuxt.config.js"

const BASE_URL = "https://newsapi.org/v2"
// const API_KEY = nuxtConfig.publicRuntimeConfig.newsApiKey

export default class News {
  private country: string
  private apikey: string

  constructor(apikey: string, country = "jp") {
    this.apikey = apikey
    this.country = country
  }

  async getTopHeadlines() {
    const endpoint = `${BASE_URL}/top-headlines`
    return await this.fetch(endpoint)
  }

  async getBysearch(searchWord: string) {
    const endpoint = `${BASE_URL}/everything`
    const q = `q=${searchWord}`
    return await this.fetch(endpoint, q)
  }

  async getByCategory(cat: string) {
    const endpoint = `${BASE_URL}/sources`
    const category = `category=${cat}`
    return await this.fetch(endpoint, category)
  }

  private async fetch(endpoint: string, ...queries: Array<any>) {
    const country = `country=${this.country}`
    const apikey = `apikey=${this.apikey}`
    const query = [country, apikey, ...queries].join("&")
    return await axios.get(`${endpoint}?${query}`)
  }
}
