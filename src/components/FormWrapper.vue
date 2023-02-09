<template>
  testing: {{ testing }};
  <ParentWrapper>
    <template #header>
      <slot name="header" />
    </template>
    <slot name="c" slot="c" />
  </ParentWrapper>
</template>
<script lang="ts">
import ParentWrapper from '@/components/ParentWrapper.vue';
import TestingMiddleware from '@/mixins/Testing';

export default {
  name: 'FormWrapper',
  components: {ParentWrapper},

  mixins: [TestingMiddleware],

  // beforeRouteEnter (to, from, next) {
  //   console.log('beforeRouteEnter');
  //   this.changeTesting('beforeRouteEnter.should-fail');
  //
  //   next();
  // },

  data () {
    return {
      test: 'welcome',
    }
  },
}
</script>
