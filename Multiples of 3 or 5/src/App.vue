<script setup>
import {useFindMultiples} from "@/composables/useFindMultiples.js";
import {computed, ref, unref} from "vue";

const {getFindMultiples} = useFindMultiples();

const inputNumber = ref(null);
const result = computed(() => unref(inputNumber) && getFindMultiples(unref(inputNumber)));
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

