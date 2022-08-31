import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesPageData from "./Api/RoutesPageData";
import Layout from "./Components/Layout/Layout";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import NotFoundPage from "./Routes/NotFoundPage/NotFoundPage";
import Projects from "./Routes/Projects/Projects";
import NormalizeStyle from "./Styles/GlobalStyles/normalizeStyle";

function App() {
  return (
    <BrowserRouter>
      <NormalizeStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About title={routesPageData.about.title} />} />
          <Route
            path="projects"
            element={<Projects title={routesPageData.projects.title} />}
          />
          <Route
            path="contact"
            element={<Contact title={routesPageData.contact.title} />}
          />
          <Route
            path="*"
            element={<NotFoundPage title={routesPageData.notFoundPage.title} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
