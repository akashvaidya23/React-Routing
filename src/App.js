import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
