import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import routes from "../src/routes/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((ele) => (
          <Route path={ele.link} element={ele.component}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
