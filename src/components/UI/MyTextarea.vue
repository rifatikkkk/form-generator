<template>
  <textarea
    :value="modelValue"
    @input="$updateTextAreaValue"
    :placeholder="placeholder"
    :name="name"
    class="myTextarea"
  />
</template>

<script setup lang="ts">
import { defineProps, defineOptions, defineEmits } from "vue";

defineProps({
  name: {
    type: String,
    required: true,
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
const $updateTextAreaValue = (event: Event) => {
  const input = event.target as HTMLTextAreaElement;
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
