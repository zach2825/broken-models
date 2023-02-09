import { defineComponent } from 'vue';


const TestingMiddleware = defineComponent({
    data () {
        return {
            testing: 'this is working',
        }
    },

    methods: {
        changeTesting (testing: string) {
            this.testing = testing
        },
    },
})

export default TestingMiddleware;
