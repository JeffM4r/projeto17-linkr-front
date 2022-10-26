import axios from "axios";
import mql from "@microlink/mql";

//const BASE_URL = "https://xprojeto17-linkr.herokuapp.com";
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

function getHastagPosts(hashtag, token) {

   const conf = createHeaders(token);
   const promise = axios.get(`${BASE_URL}/hashtags/${hashtag}`, conf);
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

function getNumLikes(id, token) {
   const conf = createHeaders(token);
   const promise = axios.get(`${BASE_URL}/likes/${id}`, conf);
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

function deletePost(token, id) {
   const conf = createHeaders(token);
   const promise = axios.delete(`${BASE_URL}/post/${id}`, conf);
   return promise;
};

function getUserInfo(userId, token) {
   const conf = createHeaders(token);
   const promise = axios.get(`${BASE_URL}/user/${userId}`, conf);
   return promise;
}

function postHashtag(postId, hashtag) {
   const body = {
      postId,
      hashtag
   }
   const promise = axios.post(`${BASE_URL}/hashtags`, body);
   return promise;
}

function searchUsers(username){
   const promise = axios.get(`${BASE_URL}/search/${username}`)
   return promise
}

function sharePost(token, postId){
   const conf = createHeaders(token)
   const promise = axios.post(`${BASE_URL}/share/${postId}`, {}, conf);
   return promise;
}

function getCountShare (postId) {
   const promise = axios.get(`${BASE_URL}/share/${postId}`)
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
   deletePost,
   getNumLikes,
   getUserInfo,
   postHashtag,
   searchUsers,
   sharePost,
   getCountShare
}
