/* FUNCTIONAL IMPORTS */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

/* DATA IMPORTS */
import routesPageData from "./Api/RoutesPageData";
import LogoData from "./Api/LogoData";

/* COMPONENT IMPORTS */
import Layout from "./Components/Layout/Layout";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import NotFoundPage from "./Routes/NotFoundPage/NotFoundPage";
import Projects from "./Routes/Projects/Projects";

/* STYLE IMPORTS */
import NormalizeStyle from "./Styles/GlobalStyles/normalizeStyle";

export const NavbarContext = createContext(routesPageData);
export const LogoContext = createContext(LogoData);

export default function App() {
	const [routePageData, setRoutePageData] = useState(routesPageData);

	return (
		<BrowserRouter>
			<NormalizeStyle />
			<Routes>
				<Route path={routePageData.about.path} element={<Layout />}>
					<Route index element={<About title={routePageData.about.title} />} />
					<Route
						path={routePageData.projects.path}
						element={<Projects title={routePageData.projects.title} />}
					/>
					<Route
						path={routePageData.contact.path}
						element={<Contact title={routePageData.contact.title} />}
					/>
					<Route
						path={routePageData.notFoundPage.path}
						element={<NotFoundPage title={routePageData.notFoundPage.title} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
