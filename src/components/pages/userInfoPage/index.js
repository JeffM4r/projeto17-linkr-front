import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../../headerComponent";
import TrendingComponent from "../../TrendingComponent";
import Post from "../../PostComponent";
import { Container, UserPosts } from "./style";
import { getUserInfo } from "../../../services/linkr";

const UserInfoPage = () => {
	const params = useParams();
	const token = localStorage.getItem("linkrUserToken");

	const [userInfo, setUserInfo] = useState();
	const [loading, setLoading] = useState(false);
	const userId = params.id;

	useEffect(() => {
		setLoading(true);
		const promise = getUserInfo(userId, token);
		promise.catch((error) => {
			console.log(error);
			setLoading(false);
		});
		promise.then((resp) => {
			setUserInfo(resp.data);
			setLoading(false);
		});
	}, []);

	return (
		<Container>
			<HeaderComponent setLoading={setLoading} setUserInfo={setUserInfo} />
			<UserPosts>
				{loading ? (
					<>Loading...</>
				) : userInfo ? (
					<div>
						<span>
							<img src={userInfo.picture} alt={`profile ${userInfo.name}`} />
							<h2>{userInfo.name}</h2>
						</span>
						<>
							{userInfo.posts.map((post, index) => (
								<Post
									username={userInfo.name}
									picture={userInfo.picture}
									text={post.text}
									url={post.url}
									userId={post.userId}
									postId={post.postId}
									owner={post.owner}
									likedAlready={post.liked}
									key={`key ${index}`}
								/>
							))}
						</>
					</div>
				) : (
					<h2>404 NOT FOUND!</h2>
				)}
			</UserPosts>
			<TrendingComponent />
		</Container>
	);
};

export default UserInfoPage;
