<template>
  <Form @submit="onSubmit1">
    <slot />
  </Form>
  <input type="checkbox" v-model="changed" />
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

  mounted () {
    eventBus.on('beforeRouteLeave', async (next) => {
      if (this.changed) {
        if (confirm('Sure?')) {
          eventBus.off('beforeRouteLeave')
          next()
        }
      } else {
        next()
      }
    })
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
