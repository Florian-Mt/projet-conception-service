import { defineStore } from 'pinia'
import articles from '@/assets/articles.json'

export type Article = {
  title: string
  author: string
  date: string
  content: Array<string>
}

export const useArticleStore = defineStore('article', {
  state: () => ({articles}),
  actions: {
    addArticle(article: Article) {
      this.articles = [...this.articles, article]
    },
  },
  getters: {
    article(state) {
      return (i: number) => state.articles[i]
    },
  },
})
