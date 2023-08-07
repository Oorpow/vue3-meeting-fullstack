<template>
	<div class="login-container flex w-full">
		<!-- 左侧背景 -->
		<div class="bg-custom-gradient w-1/2 min-h-screen"></div>
		<!-- 右侧表单 -->
		<div class="flex flex-1 flex-col justify-center">
			<div class="mx-auto">
				<div>
					<h1 class="text-3xl text-zinc-900 font-bold">Hey,hello👋</h1>
					<p class="text-zinc-500 mt-[5px]">
						Enter the information you entered while registering
					</p>
				</div>
				<div class="mt-[30px]">
					<NForm ref="formRef">
						<NFormItem label="Username">
							<NInput placeholder="" style="min-width: 300px" />
						</NFormItem>
						<NFormItem label="Password">
							<NInput type="password" placeholder="" style="min-width: 300px" />
						</NFormItem>
						<div class="flex justify-between">
							<NCheckbox>remember me</NCheckbox>
							<NGradientText
								gradient="linear-gradient(
		225deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(9, 9, 121, 1) 0%,
		rgba(0, 212, 255, 1) 100%
	)"
								>create account</NGradientText
							>
						</div>
						<div class="mt-[30px]">
							<NButton
								class="bg-custom-gradient border-0 text-white"
								style="width: 100%"
							>
								Login
							</NButton>
						</div>
					</NForm>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
	NForm,
	NFormItem,
	NInput,
	NButton,
	NCheckbox,
	NGradientText,
} from "naive-ui";

const loginForm = ref<LoginType.LoginForm>({
	username: "",
	password: "",
});

/** 用户提交登录表单 */
function handleSubmit(data: {
	values: Record<string, any>;
	errors: Record<string, any> | undefined;
}) {
	console.log(data.values);
}
</script>

<style scoped>
.bg-custom-gradient {
	background: rgb(2, 0, 36);
	background: linear-gradient(
		225deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(9, 9, 121, 1) 0%,
		rgba(0, 212, 255, 1) 100%
	);
}
</style>
