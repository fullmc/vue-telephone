import { createRouter, createWebHashHistory } from 'vue-router'
import contactView from '../views/contactView.vue'
import recentsView from '../views/recentsView.vue'
import keypadView from '../views/keypadView.vue'
import formView from '../components/formView.vue'

const routes = [
  {
    path: '/',
    name: 'clavier',
    component: keypadView
  },
  {
    path: '/recents',
    name: 'recents',
    component: recentsView,
  },
  {
  path: '/contact',
  name: 'contact',
  component: contactView
  },
  {
    path: '/form',
    name: 'form',
    component: formView
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
