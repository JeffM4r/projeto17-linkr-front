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

function getAllRecentPosts(token) {
	const conf = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/posts`, conf);
	return promise;
}

function getHastagPosts(hashtag) {
	const promise = axios.get(`${BASE_URL}/hashtags/#${hashtag}`);
	return promise;
}

function postLike(id, token) {
	const conf = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/likes/${id}`, {}, conf);
	return promise;
}

function deleteLike(id, token) {
	const conf = createHeaders(token);
	const promise = axios.delete(`${BASE_URL}/likes/${id}`, conf);
	return promise;
}

function getNumLikes(id) {
	const promise = axios.get(`${BASE_URL}/likes/${id}`);
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

function editPost(postId, token, body) {
	const conf = createHeaders(token);
	const promise = axios.put(`${BASE_URL}/editPost/${postId}`, body, conf);
	return promise;
}

export default function publishPost(body, token) {
	const conf = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/post`, body, conf);
	return promise;
}

function getUserInfo(userId, token) {
	const conf = createHeaders(token);
	const promise = axios.get(`http://localhost:4000/user/${userId}`, conf);
	return promise;
}

export {
	getAllRecentPosts,
	getMetaDados,
	postLike,
	deleteLike,
	signIn,
	signUp,
	editPost,
	publishPost,
	getHastagPosts,
	getNumLikes,
	getUserInfo,
};
