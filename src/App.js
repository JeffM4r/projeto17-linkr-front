import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import SignInPage from "./components/pages/signinPage";
import Timeline from "./components/pages/timelinePage";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/timeline" element={<Timeline />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
