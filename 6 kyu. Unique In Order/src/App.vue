<script setup>
import {useUniqueInOrder} from "@/composables/useUniqueInOrder.js";
import {computed, ref, unref} from "vue";

const {getUniqueInOrder} = useUniqueInOrder();

const inputValue = ref(null);
const result = computed(() => unref(inputValue) && getUniqueInOrder(unref(inputValue)));
</script>

<template>
  <main class="content">
	  <input
		  v-model.trim="inputValue"
		  type="text"
		  placeholder="Введите массив букв/чисел"
		  class="content__input"
	  >
	  <p> {{ result }} </p>
  </main>
</template>

<style>
	.content__input {
		width: 300px;
	}
</style>
