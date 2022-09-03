import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";

const NavbarMenuContainerDiv = styled(motion.div)`
	background: yellowgreen;
	grid-area: ${(props) => props.gridareas};
	font-family: "Special Elite", cursive;
	display: flex;
	justify-content: space-around;
	align-items: center;
	clip-path: polygon(
		21% 19%,
		48% 19%,
		48% 0,
		100% 0,
		100% 65%,
		100% 76%,
		100% 100%,
		0 100%,
		0 0,
		21% 0
	);

	margin: 0.5rem;

	a {
		margin: auto 0;
		font-size: 3vw;
	}
`;

export default function NavbarMenuContainer(props) {
	useLayoutEffect(() => {
		console.log(window.innerWidth, window.innerHeight);
	}, [window.innerWidth, window.innerHeight]);

	return (
		<NavbarMenuContainerDiv gridareas={props.gridareas}>{props.children}</NavbarMenuContainerDiv>
	);
}
