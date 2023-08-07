<template>
	<div>
		<a-form
			:model="registerForm"
			style="width: 600px; margin-top: 20px"
			@submit="handleSubmit"
		>
			<a-form-item
				field="username"
				tooltip="Please enter username"
				label="Username"
				:rules="[{ required: true, message: 'username is required' }]"
				:validate-trigger="['change', 'input']"
			>
				<a-input
					v-model="registerForm.username"
					placeholder="please enter your username..."
				/>
			</a-form-item>
			<a-form-item
				field="password"
				label="Post"
				:rules="[{ required: true, message: 'username is required' }]"
			>
				<a-input
					v-model="registerForm.password"
					placeholder="please enter your password..."
				/>
			</a-form-item>
			<a-form-item class="flex flex-end">
				<span>已有账号？去登录</span>
			</a-form-item>
			<a-form-item>
				<a-button html-type="submit">Submit</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const registerForm = ref<LoginType.RegisterForm>({
	username: "",
	password: "",
	confirmPassword: "",
	verifyCode: "",
	email: "",
});

const handleSubmit = (data: {
	values: Record<string, any>;
	errors: Record<string, any> | undefined;
}) => {
	console.log(data);
};
</script>

<style scoped></style>
