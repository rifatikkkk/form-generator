<template>
  <FormGenerator :fields="fields" :initialModel="model" @save="saveForm" @cancel="cancelForm" />
</template>

<script setup lang="ts">
import FormGenerator from '../components/FormGenerator.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const fields = {
  city: {
    type: 'select',
    label: 'Город',
    options: [
      { value: 'Москва', label: 'Москва' },
      { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
      { value: 'Екатеринбург', label: 'Екатеринбург' },
    ],
  },
  age: { type: 'input', label: 'Возраст', attributes: { type: 'number' } },
};

const model = reactive({
  city: 'Москва',
  age: 30,
});

const saveForm = (data: any) => {
  store.dispatch('saveFormData', data);
  console.log('Сохраненные данные:', data);
};

const cancelForm = () => {
  console.log('Форма отменена');
};
</script>