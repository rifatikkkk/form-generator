import { createRouter, createWebHistory } from 'vue-router';
import Form1 from '../views/Form1.vue';
import Form2 from '../views/Form2.vue';

const routes = [
  { path: '/form1', component: Form1 },
  { path: '/form2', component: Form2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;