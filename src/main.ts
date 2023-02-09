import mitt from 'mitt';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vee-validate'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

type EventTypes = {
    [key: string]: any | ( (formData: unknown, formSubmitCallbacks: any) => void );
};

export const eventBus = mitt<EventTypes>()
