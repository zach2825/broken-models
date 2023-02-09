<template>
  <div>
    <div>
    <pre>
      header++
      <slot name="header" />
      header--
      a++
      <slot name="a" />
      a--
      b++
      <slot name="b" />
      b--
      c++
      <slot name="c" />
      c--
      default++
      <slot />
      default--
    </pre>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ParentWrapper',
  data () {
    return {
      test: 'welcome',
    }
  },
}
</script>
