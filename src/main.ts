import { createApp } from 'vue'
import Router from '@/router.ts'
import App from '@/App.vue'
import 'ress'
import '@/assets/styles/style.scss'

createApp(App).use(Router).mount('#app')
