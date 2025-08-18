import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
console.log('当前环境：', import.meta.env.MODE)
console.log('API 前缀：', import.meta.env.VITE_API_BASE)
