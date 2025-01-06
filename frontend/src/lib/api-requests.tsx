"use client";
import axios from "axios";
import Cookie from "js-cookie";

const token = Cookie.get("token");
const api_with_token = axios.create({
	baseURL: "http://localhost:5001",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

const api_without_token = axios.create({
	baseURL: "http://localhost:5001",
});

export { api_with_token, api_without_token };
// export { api_without_token };
