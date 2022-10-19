import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import SignInPage from "./components/pages/signinPage";
import SignUpPage from "./components/pages/signupPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
