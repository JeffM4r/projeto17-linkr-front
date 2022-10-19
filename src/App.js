import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import SignInPage from "./components/pages/signinPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
