<template>
  <button :type="type" @click="emitDecider">
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash';
import { PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  debounceTimeout: {
    type: Number,
    default: 1000,
  },
});

const emits = defineEmits(['click']);

const handleClickDebounce = debounce((e) => emits('click', e), props.debounceTimeout, {leading: true, trailing: false})

const emitDecider = (e: object = {}) => {
  // if type submit or no debounce then just emit the click event
  if (!props.debounceTimeout || props.type === 'submit') {
    return emits('click', e)
  }

  handleClickDebounce(e)
}

</script>
