import axios from "axios";

export default function publishPosts(body) {
    const promise = axios.post('http://localhost:4000/post', body);
    return promise;
}
