import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<Link to="/">About</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/contact">Contact</Link>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
