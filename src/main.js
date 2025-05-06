import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import Unicon from 'vue-unicons'
import { uniLayerGroupMonochrome, uniCarWash, uniGithub, uniLinkedin } from 'vue-unicons/dist/icons'
Unicon.add([uniGithub, uniLinkedin])

createApp(App).use(router).use(Unicon, {
    fill: '#2c3e50',
    height: 30,
    width: 30
  }).mount('#app')
