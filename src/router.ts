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
    meta: {
      title: 'Moyen – Le blogue pas trop mauvais.',
    },
  },
  {
    path: '/article/create',
    name: 'ArticleCreationPage',
    component: ArticleCreationPage,
    meta: {
      title: 'Créer un article — Moyen – Le blogue pas trop mauvais.',
    },
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
    meta: {
      title: 'Erreur 404 – Le blogue pas trop mauvais.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }

  // Continue resolving the route
  next()
})

export default router
