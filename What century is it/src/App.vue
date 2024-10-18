<script setup>
import {useWhatCentury} from "@/composables/useWhatCentury.js";
import {computed, ref, unref} from "vue";

const {getWhatCentury} = useWhatCentury();

const inputYear = ref('');
const result = computed(() => unref(inputYear) && getWhatCentury(Number(unref(inputYear))));
</script>

<template>
  <main>
	  <input
		  v-model="inputYear"
		  type="text"
		  placeholder="Введите год (4 цифры)"
		  maxlength="4"
	  >
	  <p> {{ result }} </p>
  </main>
</template>

