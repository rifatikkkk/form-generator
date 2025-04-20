<template>
  <form class="form-generator">
    <my-input name="email" type="text" v-model="email" placeholder="Email" />
    <p>{{ email }}</p>

    <my-select :options="optionsList" v-model="valueSelect" />
    <p>{{ valueSelect }}</p>

    <my-checkbox
      label="Checkbox "
      id="checkBox"
      name="checkBox"
      value="I like it"
      v-model:checked="checkBox"
    />
    {{ checkBox }}

    <my-textarea placeholder="Text area" name="text-area" v-model="textarea" />
    <p>{{ textarea }}</p>
  </form>
</template>

<script setup lang="ts">
import MyInput from "@/components/UI/MyInput.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyCheckbox from "@/components/UI/MyCheckbox.vue";
import MyTextarea from "@/components/UI/MyTextarea.vue";

import { ref } from "vue";

const email = ref("");

const textarea = ref("");

const checkBox = ref(true);

const valueSelect = ref("");

interface optionsProps {
  value: String;
  name: String;
  key: PropertyKey;
}

let optionsList: Array<optionsProps> = [
  {
    value: "Up",
    name: "UpSort",
    key: 1,
  },
  {
    value: "Down",
    name: "DownSort",
    key: 2,
  },
];
</script>

<style lang="scss">
.form-generator {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: start;
}
</style>
