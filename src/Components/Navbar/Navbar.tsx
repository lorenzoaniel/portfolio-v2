import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavbarContext } from "../../App";
import NavbarMenuContainer from "../NavbarMenuContainer/NavbarMenuContainer";

const NavbarDiv = styled(motion.div)`
	background-color: green; //for development
`;

export default function Navbar() {
	const apiData = useContext(NavbarContext);

	return (
		<NavbarDiv>
			<NavbarMenuContainer>
				<Link to={apiData.about.path}>{apiData.about.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer>
				<Link to={apiData.projects.path}>{apiData.projects.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer>
				<Link to={apiData.contact.path}>{apiData.projects.title}</Link>
			</NavbarMenuContainer>
		</NavbarDiv>
	);
}
