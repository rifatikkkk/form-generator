<template>
  <FormGenerator :fields="fields" :initialModel="model" @save="saveForm" @cancel="cancelForm">
    <template #description="{ value }">
      <p>Описание: {{ value }}</p>
    </template>
  </FormGenerator>
</template>

<script setup lang="ts">
import FormGenerator from '../components/FormGenerator.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const fields = {
  name: { type: 'input', label: 'Имя', attributes: { type: 'text' } },
  email: { type: 'input', label: 'Email', attributes: { type: 'email' } },
  description: { type: 'textarea', label: 'Описание' },
  agree: { type: 'checkbox', label: 'Согласие' },
};

const model = reactive({
  name: 'Иван',
  email: 'ivan@example.com',
  description: 'Пример описания',
  agree: true,
});

const saveForm = (data: any) => {
  store.dispatch('saveFormData', data);
  console.log('Сохраненные данные:', data);
};

const cancelForm = () => {
  console.log('Форма отменена');
};
</script>