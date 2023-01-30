<template>
  <div class="control">
    <div class="control-label" v-if="label">
    <label :for="name" v-text="label" style="margin-right: 5px;" />
    </div>
    <input type="text" :name="name" v-model="fieldValue" />
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useField } from 'vee-validate';
import { computed, PropType, toRef } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'text1' | 'number'>,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

const emits = defineEmits(['input']);


const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const fieldValue = computed({
  get: () => inputValue.value,
  set: (value) => {
    emits('input', value);
    handleChange(value);
  },
});
//
</script>
<style>
.control{
  margin-top:  5px;
}
.control-label {
  width: 200px;
  display: inline-block;
}
</style>
