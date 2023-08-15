declare namespace ApiResponse {
	interface ICommonRes<T = any> {
		code: number;
		message: string;
		data?: T;
	}
}

declare namespace ApiUser {
	type UserInfo = {
		id: number;
		username: string;
		nickname: string;
		password: string;
		email: string;
		avatar?: string;
		phoneNumber?: string;
		isFrozen: boolean;
		isAdmin: boolean;
		createTime: Date;
		updateTime: Date;
		roles: string[];
		permissions: string[];
	};

	/** 普通用户登录的返回结果 */
	type UserLoginRes = {
		userInfo: Omit<
			UserInfo,
			"isFronzen" | "isAdmin" | "updateTime" | "phoneNumber"
		>;
		accessToken: string;
		refreshToken: string;
	};
}
