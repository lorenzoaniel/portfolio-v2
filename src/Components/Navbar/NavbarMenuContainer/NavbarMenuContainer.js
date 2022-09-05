import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarMenuContainerDiv = styled(motion.div)`
	background-image: url(${(props) => props.folderimg});
	grid-area: ${(props) => props.gridareas};
	font-family: "Special Elite", cursive;
	display: flex;
	justify-content: space-around;
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
	border-top-left-radius: 5%;
	border-top-right-radius: 5%;

	margin: 0.5vh 0.5vw 0 0.5vw; //creates a cut off folder effect
	/* padding-top: min-content; */
	box-shadow: 0 0 1.5rem 0.5rem rgba(0, 0, 0, 0.5) inset, 0 0 1rem 1rem rgba(0, 0, 0, 0.5);

	a {
		font-size: 3vw;
		text-decoration: none;
		align-self: flex-end;
	}
`;

export default function NavbarMenuContainer(props) {
	const NavbarMenuContainerVariants = {
		NavbarMenuContainerInitialFolderState: {
			alignSelf: "flex-end",
		},
		NavbarMenuContainerFolderHoverAnimation: {
			alignSelf: "stretch",
		},
	};

	const NavbarMenuContainerMotionProps = {
		initial: NavbarMenuContainerVariants.NavbarMenuContainerInitialFolderState,
		whileHover: NavbarMenuContainerVariants.NavbarMenuContainerFolderHoverAnimation,
	};

	return (
		<NavbarMenuContainerDiv
			{...NavbarMenuContainerMotionProps}
			folderimg={props.folderimg}
			gridareas={props.gridareas}
		>
			{props.children}
		</NavbarMenuContainerDiv>
	);
}
