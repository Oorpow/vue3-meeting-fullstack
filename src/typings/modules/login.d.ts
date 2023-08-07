declare namespace LoginType {
	/** 通用的表单属性 */
	type FormCommon = {
		username: string;
		password: string;
	};

	/** 登录表单 */
	type LoginForm = FormCommon;

	/** 注册表单 */
	type RegisterForm = {
		nickname?: string;
		confirmPassword: string;
		email: string;
		verifyCode: string;
	} & FormCommon;
}
