<template>
  <Form @submit="onSubmit1">
  <slot />
  </Form>
</template>
<script lang="ts">
import { debounce } from 'lodash';
import { Form } from 'vee-validate';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseForm',

  components: {Form},

  props: {

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
    }, 1000, {leading: true, trailing: false})
  },

})
//
</script>
