<template>
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<NResult status="404" title="404 Not Found" description="Life is like this">
			<template #footer>
				<NButton
					class="bg-custom-gradient border-0 text-white"
					round
					@click="$router.back"
					>Back</NButton
				>
			</template>
		</NResult>
	</div>
</template>

<script setup lang="ts">
import { NResult, NButton } from "naive-ui";
</script>

<style scoped></style>
