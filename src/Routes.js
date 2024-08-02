import Home from "./pages/Home/Home.js";
import Users from "./pages/Users/Users.js";
import NewUser from "./pages/NewUser/NewUser.js";
import Products from "./pages/Products/Products.js";

export let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/home", element: <Home /> },
	{ path: "/users", element: <Users /> },
	{ path: "/newuser", element: <NewUser /> },
	{ path: "/products", element: <Products /> },
];
