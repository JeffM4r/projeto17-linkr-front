import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/contexts/UserContext";
import GlobalStyle from "./styles/GlobalStyles";
import SignInPage from "./components/pages/signinPage";
import SignUpPage from "./components/pages/signupPage";
import Timeline from "./components/pages/timelinePage";
import UserInfoPage from "./components/pages/userInfoPage";
import HashtagPage from "./components/pages/hashtagPage";

function App() {
	const [token, setToken] = useState("");
	const [pictureUrl, setPictureUrl] = useState("");

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider
				value={{
					token,
					setToken,
					pictureUrl,
					setPictureUrl,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignInPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/timeline" element={<Timeline />} />
						<Route path="/user/:id" element={<UserInfoPage />} />
						<Route path="/hashtag/:hashtag" element={<HashtagPage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
