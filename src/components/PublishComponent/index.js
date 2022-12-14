import { useState } from "react";
import { getAllRecentPosts, publishPost, postHashtag } from "../../services/linkr";
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

export default function Publish({ setPosts, setLoadingFullPage }) {
	const linkref = useRef(null);
	const postref = useRef(null);

	const [url, setUrl] = useState("");
	const [text, setText] = useState("");

	const { pictureUrl, setPictureUrl } = useContext(UserContext);
	const localPictureUrl = localStorage.getItem("pictureUrl");
	const token = localStorage.getItem("linkrUserToken");
	setPictureUrl(localPictureUrl);
	const { refrash, setRefrash } = useContext(UserContext);
		const [load, setload] = useState(false);
	const [clicked, setClicked] = useState(false);

	function HandleForm(e) {
		e.preventDefault();

		const infos = {
			url,
			text,
		};

		const wordsArray = text.split(' ')


		const promise = publishPost(infos, token);
		promise.catch((res) => {
			alert("Houve um erro ao publicar seu link");
			console.log(res);
			setClicked(false);
			setload(false);
		});
		promise.then((res) => {
			alert("Post publicado!");
			setClicked(false);
			linkref.current.value = "";
			postref.current.value = "";
			setLoadingFullPage(true)

			wordsArray.forEach((word) => {
				if(word.trim().startsWith('#')){
					postHashtag(res.data.id, word).then((res)=>console.log(res))
				}
			});
			
			getAllRecentPosts(token)
				.then((res) => {
					const postsData = res.data;
					setPosts(postsData);
					setRefrash(!refrash);
					setLoadingFullPage(false)
					setUrl('')
					setText('')
				})
				.catch((err) => {
					console.error(err);
					alert("Não foi possível salvar as alterações");
					setLoadingFullPage(false)
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
               onKeyDown={(e)=>{
                if(e.code === 'Enter'){
                    setClicked(true)
                    HandleForm(e)
                }
               }}
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
