<script setup>
import {useStringPrototype} from "@/composables/useStringPrototype.js";
import {computed, ref, unref} from "vue";

useStringPrototype();

const inputText = ref('');
const result = computed(() => unref(inputText).toJadenCase());
</script>

<template>
  <main>
	  <input v-model="inputText" type="text" placeholder="Введите текст">
	  <p> {{ result }} </p>
  </main>
</template>

