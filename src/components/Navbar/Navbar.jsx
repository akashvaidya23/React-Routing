import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const menuItems = [
    {
      title: "FLIPKART",
      link: "/",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Sign Up",
      link: "/signup",
    },
  ];

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      {menuItems.map((ele, index) => {
        return (
          <Menu.Item key={index}>
            {" "}
            <Link class="nav-link active" aria-current="page" to={ele.link}>
              {ele.title}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default Navbar;
