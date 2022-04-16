import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const routes = [
  {
    link: "/",
    component: <Home />,
  },
  {
    link: "/login",
    component: <Login />,
  },
  {
    link: "/SignUp",
    component: <Signup />,
  },
];

export default routes;
