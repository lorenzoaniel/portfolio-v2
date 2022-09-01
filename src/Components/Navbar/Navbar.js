import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LogoContext, NavbarContext } from "../../App";
import NavbarMenuContainer from "../NavbarMenuContainer/NavbarMenuContainer";
import Logo from "../Logo/Logo";
import LogoInitialLetter from "../LogoInitialLetter/LogoInitialLetter";

const logoData = useContext(LogoContext);

const NavbarDiv = styled(motion.div)`
	background-color: green; //for development
`;

export default function Navbar() {
	const apiData = useContext(NavbarContext);

	return (
		<NavbarDiv>
			<Logo>
				<LogoInitialLetter
					initialLetter={logoData.firstInitial.initialLetter}
				></LogoInitialLetter>
				<LogoInitialLetter
					initialLetter={logoData.firstInitial.initialLetter}
				></LogoInitialLetter>
				<LogoInitialLetter
					initialLetter={logoData.firstInitial.initialLetter}
				></LogoInitialLetter>
			</Logo>
			<NavbarMenuContainer>
				<Link to={apiData.about.path}>{apiData.about.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer>
				<Link to={apiData.projects.path}>{apiData.projects.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer>
				<Link to={apiData.contact.path}>{apiData.contact.title}</Link>
			</NavbarMenuContainer>
		</NavbarDiv>
	);
}
