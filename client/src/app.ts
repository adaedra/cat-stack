import { createApp } from 'vue'
import App from './components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.createElement('app-root')
    document.body.appendChild(root)

    createApp(App).mount(root)
})
