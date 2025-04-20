<template>
  <select :value="modelValue" @change="$changeOption" class="mySelect">
    <option disabled value="">Select</option>
    <option v-for="option in options" :key="option.key" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineOptions, defineEmits } from "vue";

interface optionsProps {
  value: String;
  name: String;
  key: PropertyKey;
}

defineProps({
  modelValue: {
    type: String,
    requred: true,
  },
  options: {
    type: Array<optionsProps>,
    default: () => [],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const $changeOption = (event: Event) => {
  const selectOption = event.target as HTMLSelectElement;
  emit("update:modelValue", selectOption.value);
};
</script>

<style lang="scss">
</style>
