<script setup>
import {useWhoLikesString} from "@/composables/useWhoLikesString.js";
import {computed, ref, unref} from "vue";

const {getWhoLikesString} = useWhoLikesString();

const inputText = ref('');
const result = computed(() => unref(inputText) && getWhoLikesString(unref(inputText).split(', ')));
</script>

<template>
  <main>
	  <p>Введите имена с пробелом после запятой:</p>
	  <input v-model="inputText" type="text" placeholder="Alex, Jacob, Mark, Max">
	  <p> {{ result }} </p>
  </main>
</template>

