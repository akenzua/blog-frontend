import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faHome, faSignInAlt, faSignOutAlt, faUserPlus, faNewspaper, faGlassCheers, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'

library.add(faBars, faTimes, faHome, faSignInAlt, faSignOutAlt, faUserPlus, faNewspaper, faGlassCheers, faAddressCard )

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
