<template>
  <Form @submit="onSubmit1">
    <slot />
  </Form>
  <label>
    changed: {{ changed }};
    <input type="checkbox" v-model="changed" />
  </label>
</template>
<script lang="ts">
import { eventBus } from '@/main';
import { debounce } from 'lodash';
import { Form } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseForm',

  components: {Form},

  data () {
    return {
      changed: false,
    }
  },

  computed: {
    formChangedCallback () {
      return (next: any) => {
        if (this.changed) {
          if (confirm('Sure?')) {
            eventBus.off('beforeRouteLeave', this.formChangedCallback)
            next()
          }
        } else {
          next()
        }
      }
    },
  },

  mounted () {
    eventBus.on('beforeRouteLeave', this.formChangedCallback)
  },

  beforeUnmount () {
    this.changed = false
    eventBus.off('beforeRouteLeave', this.formChangedCallback)
  },

  methods: {
    debounce,

    // onSubmit: debounce(async function (formValues: any, callbacks: any) {
    //   console.log('methods.onSubmit', {formValues, callbacks})
    //   // @ts-ignore
    //   this.$emit('submit', formValues, callbacks);
    // }, 1000)

    onSubmit1: debounce(async function (this: any, formValues: any, callbacks: any) {
      console.log('methods.onSubmit1', {formValues, callbacks})
      // @ts-ignore
      this.$emit('submitted', formValues, callbacks);
    }, 1000, {leading: true, trailing: false}),
  },

})
//
</script>
