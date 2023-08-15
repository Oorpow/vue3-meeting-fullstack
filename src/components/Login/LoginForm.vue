<template>
	<div class="flex flex-1 flex-col justify-center">
		<div class="mx-auto">
			<div>
				<h1 class="text-3xl text-zinc-900 font-bold">Hey,hello👋</h1>
				<p class="text-zinc-500 mt-[5px]">
					Enter the information you entered while registering
				</p>
			</div>
			<NTabs
				class="card-tabs"
				default-value="signin"
				size="large"
				animated
				pane-wrapper-style="margin: 0 -4px"
				pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
			>
				<NTabPane name="signin" tab="SignIn">
					<NForm ref="formRef">
						<NFormItem label="Username">
							<NInput placeholder="" style="min-width: 300px" />
						</NFormItem>
						<NFormItem label="Password">
							<NInput type="password" placeholder="" style="min-width: 300px" />
						</NFormItem>
					</NForm>
					<NButton
						class="bg-custom-gradient border-0 text-white"
						round
						style="width: 100%"
					>
						Login
					</NButton>
				</NTabPane>
				<NTabPane name="signup" tab="SignUp">
					<NForm ref="formRef">
						<NFormItem label="Username">
							<NInput placeholder="" style="min-width: 300px" />
						</NFormItem>
						<NFormItem label="Password">
							<NInput type="password" placeholder="" style="min-width: 300px" />
						</NFormItem>
					</NForm>
					<NButton
						class="bg-custom-gradient border-0 text-white"
						round
						style="width: 100%"
					>
						SignUp
					</NButton>
				</NTabPane>
			</NTabs>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NForm, NInput, NButton, NFormItem, NTabs, NTabPane } from "naive-ui";

const loginForm = ref<LoginType.LoginForm>({
	username: "",
	password: "",
});
</script>

<style scoped></style>
