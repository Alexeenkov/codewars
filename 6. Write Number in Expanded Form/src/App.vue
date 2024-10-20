<script setup>
import {useExpandNumber} from "@/composables/useExpandNumber.js";
import {computed, ref, unref} from "vue";

const {getExpandedNumber} = useExpandNumber();

const inputNumber = ref(null);
const result = computed(() => unref(inputNumber) && getExpandedNumber(unref(inputNumber)));
</script>

<template>
  <main>
	  <input
		  v-model="inputNumber"
		  type="number"
		  placeholder="Введите число"
	  >
	  <p> {{ result }} </p>
  </main>
</template>

