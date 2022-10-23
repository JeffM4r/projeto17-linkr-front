import { useState, useEffect } from "react";
import Error from "../../ErrorComponent";
import Post from "../../PostComponent";


export default function Posts({ posts, setPosts, disabled }) {

	return (
		<>
			{posts.length !== 0 ? (
				posts.map((el, i) => (
					<Post
						setPosts={setPosts}
						username={el.name}
						picture={el.picture}
						text={el.text}
						url={el.url}
						userId={el.userId}
						postId={el.postId}
						owner={el.owner}
						likedAlready={el.liked}
						key={`key ${i}`}
					/>
				))
			) : (
				<>
					<Error condition={disabled} />
					<p>"There are no posts yet..."</p>
				</>
			)}
		</>
	);
}
