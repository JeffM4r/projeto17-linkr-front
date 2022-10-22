import { HeaderStyle, LogoutStyle } from "./style";
import {
	MdOutlineKeyboardArrowUp,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const HeaderComponent = () => {
	const navigate = useNavigate();
	const { setToken, setPictureUrl, pictureUrl } = useContext(UserContext);
	const [clicked, setClicked] = useState(false);
	const styleUp = {
		color: "white",
		fontSize: "2.5em",
		display: clicked ? "" : "none",
	};
	const styleDown = {
		color: "white",
		fontSize: "2.5em",
		display: clicked ? "none" : "",
	};

	useEffect(() => {
		if (localStorage.getItem("linkrUserToken") !== null) {
			const localToken = localStorage.getItem("linkrUserToken");
			const localPictureUrl = localStorage.getItem("pictureUrl");
			setToken(localToken);
			setPictureUrl(localPictureUrl);
		}
	}, []);

	return (
		<>
			<HeaderStyle>
				<h2>linkr</h2>
				<div onClick={() => setClicked(!clicked)}>
					<MdOutlineKeyboardArrowUp style={styleUp} />
					<MdOutlineKeyboardArrowDown style={styleDown} />
					<img
						src={
							pictureUrl
								? pictureUrl
								: "https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
						}
						alt="users' picture"
					/>
				</div>
			</HeaderStyle>
			<LogoutStyle
				onClick={() => {
					localStorage.clear();
					setToken("");
					navigate("/");
				}}
				display={clicked ? "flex" : "none"}
			>
				Logout
			</LogoutStyle>
		</>
	);
};
export default HeaderComponent;
