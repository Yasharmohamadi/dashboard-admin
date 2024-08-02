import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";

export let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/home", element: <Home /> },
	{ path: "/users", element: <Users /> },
	{ path: "/newuser", element: <NewUser /> },
	{ path: "/products", element: <Products /> },
];
