import { defineStore } from 'pinia'
import articles from '@/assets/articles.json'

export type Article = {
  title: string
  author: string
  date: string
  content: Array<string>
  image: string
}

export const useArticleStore = defineStore('article', {
  state: () => ({
    // Sort articles in reverse chronological order at startup
    articles: articles.sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0)
  }),
  actions: {
    addArticle(article: Article) {
      this.articles = [...this.articles, article]
    },
  },
  getters: {
    article(state) {
      return (i: number) => state.articles[state.articles.length - i]
    },
  },
})
