import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LogoContext, NavbarContext } from "../../App";
import NavbarMenuContainer from "./NavbarMenuContainer/NavbarMenuContainer";
import Logo from "../Logo/Logo";
import LogoInitialLetter from "../Logo/LogoInitialLetter/LogoInitialLetter";
import LogoOtherLetters from "../Logo/LogoOtherLetters/LogoOtherLetters";

const NavbarDiv = styled(motion.div)`
	background-color: purple;
	display: grid;
	grid-template-columns: repeat(10, 10%);
	grid-template-rows: 100%;
	grid-template-areas: " logo logo logo logo about about projects projects contact contact ";
`;

export default function Navbar() {
	const logoData = useContext(LogoContext);
	const apiData = useContext(NavbarContext);

	return (
		<NavbarDiv>
			<Logo>
				<LogoInitialLetter initialLetter={logoData.firstInitial.initialLetter}>
					<LogoOtherLetters otherLetters={logoData.firstInitial.otherLetters} />
				</LogoInitialLetter>
				<LogoInitialLetter initialLetter={logoData.secondInitial.initialLetter}>
					<LogoOtherLetters otherLetters={logoData.secondInitial.otherLetters} />
				</LogoInitialLetter>
				<LogoInitialLetter initialLetter={logoData.thirdInitial.initialLetter}>
					<LogoOtherLetters otherLetters={logoData.thirdInitial.otherLetters} />
				</LogoInitialLetter>
			</Logo>
			<NavbarMenuContainer gridareas={apiData.about.gridArea}>
				<Link to={apiData.about.path}>{apiData.about.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer gridareas={apiData.projects.gridArea}>
				<Link to={apiData.projects.path}>{apiData.projects.title}</Link>
			</NavbarMenuContainer>
			<NavbarMenuContainer gridareas={apiData.contact.gridArea}>
				<Link to={apiData.contact.path}>{apiData.contact.title}</Link>
			</NavbarMenuContainer>
		</NavbarDiv>
	);
}
