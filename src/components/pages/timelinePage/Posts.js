import Post from "../../PostComponent";

export default function Posts() {
	const teste = [
		{
			username: "Dio",
			picture:
				"https://pbs.twimg.com/profile_images/1349785257281777667/kuhCnRay_400x400.jpg",
			text: "Best opening! #ProudFather",
			url: "https://www.youtube.com/watch?v=6rX1EtxwLbk",
		},
		{
			username: "Dio",
			picture:
				"https://pbs.twimg.com/profile_images/1349785257281777667/kuhCnRay_400x400.jpg",
			text: "Best opening! #ProudFather",
			url: "https://www.youtube.com/watch?v=6rX1EtxwLbk",
		},
		{
			username: "Dio",
			picture:
				"https://pbs.twimg.com/profile_images/1349785257281777667/kuhCnRay_400x400.jpg",
			text: "Best opening! #ProudFather",
			url: "https://www.youtube.com/watch?v=6rX1EtxwLbk",
		},
	];

	return (
		<>
			{teste.map((el) => (
				<Post
					username={el.username}
					picture={el.picture}
					text={el.text}
					url={el.url}
				/>
			))}
		</>
	);
}
