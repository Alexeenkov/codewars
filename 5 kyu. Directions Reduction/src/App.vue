<script setup>
import {useShortDirs} from "@/composables/useShortDirs.js";
import {computed, ref, unref} from "vue";

const {getShortDirs} = useShortDirs();

const inputText = ref('');
const result = computed(() => unref(inputText) && getShortDirs(unref(inputText).split(', ')));
</script>

<template>
  <main class="content">
	  <p>Введите стороны света с пробелом после запятой:</p>
	  <input v-model="inputText" type="text" placeholder="NORTH, WEST, SOUTH, EAST" class="content__input">
	  <p> {{ result }} </p>
  </main>
</template>

<style>
	.content__input {
		width: 500px;
	}
</style>
