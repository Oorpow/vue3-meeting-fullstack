<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import variables from "@/style/variables.module.scss";

console.log(variables.primaryColor);
const { width } = useWindowSize();
</script>

<template>
	<div :style="{ backgroundColor: variables.primaryColor }">123</div>
	<h1 class="text-3xl font-bold underline">tailwindcss</h1>
	<h2>vueuse useWindowSize得到的响应式宽度: {{ width }}</h2>
</template>
