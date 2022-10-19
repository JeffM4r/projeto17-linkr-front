import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/pages/signinPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
