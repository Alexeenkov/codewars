<script setup>
import {useUrlParser} from "@/composables/useUrlParser.js";
import {computed, ref, unref} from "vue";

const {getDomainName} = useUrlParser();

const inputText = ref('');
const result = computed(() => unref(inputText) && getDomainName(unref(inputText)));
</script>

<template>
  <main class="content">
	  <p>Введите URL для извлечения доменного имени:</p>
	  <input
		  v-model="inputText"
		  type="text"
		  placeholder="http://github.com/carbonfive/raygun"
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
