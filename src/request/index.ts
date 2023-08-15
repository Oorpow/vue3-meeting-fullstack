import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: "/api",
	timeout: 50000,
});

axiosInstance.interceptors.request.use(
	(config) => {
		// token校验
		return config;
	},
	(err) => {
		return Promise.reject(err);
	},
);

axiosInstance.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(err) => {
		return Promise.reject(err);
	},
);

export default <T = any>(config: AxiosRequestConfig) => {
	return axiosInstance(config).then((res) => {
		return res.data as T;
	});
};
