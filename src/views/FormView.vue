<template>
  <BaseForm @submitted="onSubmit">

    <custom-input
        name="email"
        type="email"
        label="Email"
        placeholder="Your email address"
        rules="required|email"
    />

    <custom-input
        name="password"
        type="password"
        label="Password"
        placeholder="Your login password"
        rules="required|min:2"
    />

    <div>
      <button type="submit">Login</button>
    </div>

    <pre>
submitCount: {{ submitCount }};
formValues: {{ formValues }};
</pre>
  </BaseForm>


  <BaseButton @click="doThing" debounce-timeout="1000">Submit1</BaseButton>
  <BaseButton @click="doThing" type="submit">Submit2</BaseButton>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import CustomInput from '@/components/CustomInput.vue';
import { debounce } from 'lodash';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormView',

  components: {
    BaseButton,
    BaseForm,
    CustomInput,
  },

  data () {
    return {
      testing: 'testing',
      formValues: {},
      submitCount: 0,
    }
  },

  methods: {
    debounce,

    // @ts-ignore
    onSubmit (a, b, c) {
      this.submitCount++;
      console.log('onSubmit', {a, b, c})
      this.formValues = a;
    },
    doThing (a: any = {}) {
      this.submitCount++;
      console.log('doThing', {a})
    },
  },
});
</script>
