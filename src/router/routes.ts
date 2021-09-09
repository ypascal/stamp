import type { RouteRecordRaw } from 'vue-router'

export function createRoutes (): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/HomePage.vue') },
        { path: 'home', component: () => import('pages/HomePage.vue') },
        { path: 'changelog', component: () => import('pages/Changelog.vue') },
        { path: 'chat/:address', component: () => import('pages/Chat.vue') },
        { path: 'settings', component: () => import('pages/Settings.vue') },
        { path: 'profile', component: () => import('pages/Profile.vue') },
        { path: 'receive', component: () => import('pages/Receive.vue') },
        { path: 'send', component: () => import('pages/Send.vue') },
        { path: 'add-contact', component: () => import('pages/AddContact.vue') },
        { path: 'setup', component: () => import('pages/Setup.vue') },
        { path: 'wipe-wallet', component: () => import('pages/WipeWallet.vue') }
      ]
    }
  ]
  return routes
}
