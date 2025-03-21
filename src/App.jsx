import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
