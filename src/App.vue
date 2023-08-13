<script setup lang="ts">
import { RouterView } from "vue-router";
import { NConfigProvider, type GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
	Button: {
		borderHover: "1px solid rgba(255, 190, 113, 1)",
		borderFocus: "1px solid rgba(255, 190, 113, 1)",
		borderPressed: "1px solid rgba(255, 190, 113, 1)",
		textColorHover: "white",
		textColorFocus: "white",
		textColorPressed: "white",
		rippleColor: "rgba(255, 98, 110, 1)",
		colorPressed: "rgba(255, 190, 113, 1)",
	},
	Input: {
		borderHover: "1px solid rgba(255, 190, 113, 1)",
		borderFocus: "1px solid rgba(255, 190, 113, 1)",
		borderPressed: "1px solid rgba(255, 190, 113, 1)",
		colorPressed: "rgba(255, 190, 113, 1)",
		boxShadowFocus: "0 0 0 2px rgba(255, 190, 113, 1)",
	},
	Checkbox: {
		colorChecked: "rgba(255, 190, 113, 1)",
		borderChecked: "1px solid rgba(255, 190, 113, 1)",
		boxShadowFocus: "0 0 0 2px rgba(255, 190, 113, 1)",
		borderFocus: "1px solid rgba(255, 190, 113, 1)",
	},
};
</script>

<template>
	<NConfigProvider :theme-overrides="themeOverrides">
		<div class="relative w-full min-h-screen">
			<RouterView />
		</div>
	</NConfigProvider>
</template>
