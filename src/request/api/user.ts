import customRequest from "../index";

export const userRegister = (registerDto: LoginType.RegisterForm) =>
	customRequest<ApiResponse.ICommonRes>({
		url: "/user",
		method: "POST",
		data: registerDto,
	});

export const verifyCodeByEmail = (email: string) =>
	customRequest<ApiResponse.ICommonRes>({
		url: `/user/get-captcha?email=${email}`,
		method: "GET",
	});

export const userLogin = (loginDto: LoginType.LoginForm) =>
	customRequest<ApiResponse.ICommonRes<ApiUser.UserLoginRes>>({
		url: "/user/login",
		method: "POST",
		data: loginDto,
	});
