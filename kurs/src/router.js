
import { createRouter, createWebHistory } from 'vue-router';
import LayoutMain from '@/views/layouts/LayoutMain.vue';
import LayoutContent from '@/views/layouts/LayoutContent.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
      {
        path: '/tests',
        component: LayoutMain,
        children: [
          {
            path: '',
            component: LayoutContent,
            children: [
              {
                path: '',
                component: () => import('@/views/TestsPage.vue'),
              }
            ]
          }
        ]
      },
      {
        path: '/learning',
        component: LayoutMain,
        children: [
          {
            path: '',
            component: LayoutContent,
            children: [
              {
                path: '',
                component: () => import('@/views/LearningPage.vue'),
              }
            ]
          }
        ]
      },
      {
        path: '/sandbox',
        component: LayoutMain,
        children: [
          {
            path: '',
            component: LayoutContent,
            children: [
              {
                path: '',
                component: () => import('@/views/SandboxPage.vue'),
              }
            ]
          }
        ]
      },
      {
        path: '/',
        component: LayoutMain,
        children: [
          {
            path: '',
            component: () => import('@/views/HomePage.vue')
          }
        ]
      }
    ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
