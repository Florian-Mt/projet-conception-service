import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import ArticlePage from '@/components/pages/ArticlePage.vue'
import ArticleCreationPage from '@/components/pages/ArticleCreationPage.vue'
import NotFoundPage from '@/components/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/:pageNumber([1-9][0-9]*)?',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/article/create',
    name: 'ArticleCreationPage',
    component: ArticleCreationPage,
  },
  {
    path: '/article/:id',
    name: 'ArticlePage',
    component: ArticlePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
