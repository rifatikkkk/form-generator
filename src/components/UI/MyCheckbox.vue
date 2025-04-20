<template>
  <div class="myCheckbox">
    <input
      type="checkbox"
      :name="props.name"
      :id="props.id"
      :value="props.value"
      :checked="props.checked"
      @input="$changeChecked"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineOptions, defineEmits } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:checked"]);
const $changeChecked = (event: Event) => {
  const checked = event.target as HTMLInputElement;
  emit("update:checked", checked.checked);
};
</script>

<style lang="scss">
.myCheckbox {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
</style>
