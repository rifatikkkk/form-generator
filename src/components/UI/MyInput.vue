<template>
  <input
    :type="type"
    :name="name"
    @input="$updateInputValue"
    :value="modelValue"
    :placeholder="placeholder"
    class="myInput"
  />
</template>

<script setup lang="ts">
import { defineProps, defineOptions, defineEmits } from "vue";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "input",
  },
});

const emit = defineEmits(["update:modelValue"]);
const $updateInputValue = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("update:modelValue", input.value);
};
</script>

<style lang="scss">
.myInput {
  padding: 10px;
  border-radius: 16px;
  background-color: white;

  :focus {
    outline: none;
    border: 10px blue solid;
  }
}
</style>
