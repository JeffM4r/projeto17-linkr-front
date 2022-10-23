import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getAllRecentPosts, publishPost } from "../../services/linkr";
import { useRef, useContext } from "react";
import UserContext from "../contexts/UserContext";
import {
	Publishstyle,
	ImgBody,
	PerfilImg,
	Form,
	WhatToday,
	Inputlink,
	Inputpost,
	Button,
	ButtonArea,
	ButtonDesative,
} from "./styled.js";

export default function Publish({ setPosts }) {
	const navigate = useNavigate()

	const linkref = useRef(null);
	const postref = useRef(null);

	const [url, setUrl] = useState("");
	const [text, setText] = useState("");

	const { pictureUrl, setPictureUrl } = useContext(UserContext);
	const localPictureUrl = localStorage.getItem("pictureUrl");
	const token = localStorage.getItem("linkrUserToken");
	setPictureUrl(localPictureUrl);

	//desative buttons and area
	const [load, setload] = useState(false);
	const [clicked, setClicked] = useState(false);

	function HandleForm(e) {
		e.preventDefault();

		const infos = {
			url,
			text,
		};

		const promise = publishPost(infos, token);
		promise.catch((res) => {
			alert("Houve um erro ao publicar seu link");
			console.log(res);
			setClicked(false);
			setload(false);
		});
		promise.then((res) => {
			alert("Post publicado!");
			console.log(infos);
			setClicked(false);
			linkref.current.value = "";
			postref.current.value = "";
			getAllRecentPosts(token)
			.then((resp) => {
				const postsData = resp.data;
				setPosts(postsData);
			})
			.catch((err) => {
				console.error(err);
			});
		});
	}

	return (
		<Publishstyle>
			<ImgBody>
				<PerfilImg
					src={
						pictureUrl
							? pictureUrl
							: "https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
					}
				/>
			</ImgBody>

			<Form>
				<WhatToday>What are you going to share today?</WhatToday>
				<Inputlink
					type="text"
					ref={linkref}
					onChange={(e) => setUrl(e.target.value)}
					value={url}
					placeholder="http://..."
					required
					disabled={load}
				/>
				<Inputpost
					type="text"
					ref={postref}
					onChange={(e) => setText(e.target.value)}
					value={text}
					placeholder="Awesome article about #javascript"
					disabled={load}
				/>

				<ButtonArea
					onClick={() => {
						setClicked(!clicked);
					}}
				>
					{clicked ? (
						<ButtonDesative disabled={load}>
							<p>Publishing...</p>
						</ButtonDesative>
					) : (
						<Button onClick={HandleForm} disabled={load}>
							<p>Publish</p>
						</Button>
					)}
				</ButtonArea>
			</Form>
		</Publishstyle>
	);
}
