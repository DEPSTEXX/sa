<!-- src/components/SubnetCalculator.vue -->
<template>
  <div class="subnet-calculator">
    <h2>Калькулятор подсетей</h2>

    <UiField label="IP-адрес">
      <UiInput
        v-model="ipInput"
        placeholder="Например: 192.168.1.150"
        @keyup.enter="handleSubmit"
        :class="{ 'invalid': !isIpValid(ipInput) && ipInput !== '' }"
      />
    </UiField>

    <UiField label="Маска подсети">
      <UiSelect
        v-model="selectedMask"
        :options="MASK_OPTIONS.map(opt => opt.value)"
        :format-label="(value) => MASK_OPTIONS.find(opt => opt.value === value)?.label"
      />
    </UiField>

    <UiButton
      class="btn-calculate"
      @click="handleSubmit"
      :is-disabled="!isValid"
      layout="primary"
      type="button"
    >
      Рассчитать
    </UiButton>

    <div v-if="result" class="result-box">
      <p><strong>IP-адрес:</strong> {{ ipInput }}</p>
      <p><strong>Маска:</strong> {{ selectedMask }}</p>
      <p><strong>Адрес сети:</strong> {{ result.networkAddress }}</p>
      <p><strong>Количество хостов:</strong> {{ result.hostCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { isIpValid } from '@/utils/ipValidation';
import { getNetworkAddress, getAddressesCount } from '@/utils/networkCalc';
import { MASK_OPTIONS } from '@/constants/masks';
import { UiField, UiInput, UiSelect, UiButton } from 'depstexx-ui-library';

const ipInput = ref('');
const selectedMask = ref(MASK_OPTIONS[24].value); // /24 по умолчанию
const result = ref<{ networkAddress: string; hostCount: number } | null>(null);

const isValid = computed(() => {
  return isIpValid(ipInput.value);
});

const handleSubmit = () => {
  if (!isValid.value) return;
  const networkAddress = getNetworkAddress(ipInput.value, selectedMask.value);
  const hostCount = getAddressesCount(selectedMask.value);
  result.value = { networkAddress, hostCount };
};
</script>

<style scoped>
:root {
  --color-bg: #f8fafc;
  --color-border: #cbd5e1;
  --color-text: #1e293b;
  --color-error: #ef4444;
  --color-primary: #3b82f6;
  --color-success-bg: #f0f9ff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.subnet-calculator {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: var(--color-bg);
  border-radius: 12px;
  box-shadow: var(--shadow);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.subnet-calculator h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.btn-calculate {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
}

.btn-calculate:not(:disabled):hover {
  background-color: #2563eb;
}

.result-box {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--color-success-bg);
  border: 1px solid #bae6fd;
  border-radius: 8px;
  color: var(--color-text);
}

.result-box p {
  margin: 0.4rem 0;
}

/* Стили для индикации ошибки в UiInput */
.invalid {
  border-color: var(--color-error) !important;
  background-color: #fef2f2 !important;
}
</style>