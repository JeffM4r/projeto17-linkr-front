import axios from "axios";
import mql from "@microlink/mql";

const BASE_URL = "http://localhost:4000";

function createHeaders(token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	return config;
}

function getMetaDados(url) {
	const promise = mql(url, {
		data: {
			avatar: {
				selector: "#avatar",
				type: "image",
				attr: "src",
			},
		},
	});
	return promise;
}

function getAllRecentPosts() {
	const promise = axios.get(`${BASE_URL}/posts`);
	return promise;
}

function postLike(id, token) {
	const conf = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/likes/${id}`, {}, conf);
	return promise;
}

function deleteLike(id, token) {
	const conf = createHeaders(token);
	const promise = axios.delete(`${BASE_URL}/likes/${id}`, {}, conf);
	return promise;
}

function signIn(body) {
	const promise = axios.post(`"${BASE_URL}/signin`, body);
	return promise;
}

function signUp(cadastro) {
	const promise = axios.post(`${BASE_URL}/signup`, cadastro);
	return promise;
}

export default function publishPost(body, token) {
	const conf = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/post`, body, conf);
	return promise;
}

export {
	getAllRecentPosts,
	getMetaDados,
	postLike,
	deleteLike,
	signIn,
	signUp,
	publishPost,
};
