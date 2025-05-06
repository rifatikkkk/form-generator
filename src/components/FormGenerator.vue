<template>
  <form class="form-generator">
    <div v-for="(field, key) in fields" :key="key" class="form-generator__field">
      <label :for="key" class="form-generator__label">{{ field.label }}</label>
      <component
        :is="field.type === 'select' ? 'select' : field.type"
        :id="key"
        v-model="model[key]"
        v-bind="field.type === 'select' ? {} : field.attributes"
        class="form-generator__input"
      >
        <option v-if="field.type === 'select'" v-for="option in field.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
        <slot :name="key" :value="model[key]" />
      </component>
    </div>
    <div class="form-generator__actions">
      <button type="button" @click="handleSave" class="form-generator__button form-generator__button--save">Сохранить</button>
      <button type="button" @click="handleCancel" class="form-generator__button form-generator__button--cancel">Отмена</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive } from 'vue';

const props = defineProps({
  fields: {
    type: Object,
    required: true,
  },
  initialModel: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['save', 'cancel']);

const model = reactive({ ...props.initialModel });

const handleSave = () => {
  emit('save', model);
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<style scoped lang="scss">
.form-generator {
  &__field {
    margin-bottom: 1rem;
  }

  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    border: none;
    cursor: pointer;

    &--save {
      background-color: #4caf50;
      color: white;
    }

    &--cancel {
      background-color: #f44336;
      color: white;
    }
  }
}  
</style>