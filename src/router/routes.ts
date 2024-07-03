import PipelineListVue from 'src/components/dashboard/PipelineList.vue';
import ProjectViewerVue from 'src/components/dashboard/ProjectViewer.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
