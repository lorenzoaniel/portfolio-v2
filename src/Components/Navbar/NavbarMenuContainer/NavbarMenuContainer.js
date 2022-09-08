import styled from "styled-components";
// import { motion } from "framer-motion";

const NavbarMenuContainerDiv = styled.div`
	/* GENERAL */
	background-image: url(${(props) => props.folderimg});
	box-shadow: 0 0 1.5rem 0.5rem rgba(0, 0, 0, 0.5) inset;
	border-top-left-radius: 5%;
	border-top-right-radius: 5%;
	margin: 0.5vh 0.5vw 0 0.5vw; //creates a cut off folder effect
	padding-top: 1.5vw;
	padding-bottom: 0.2vw;
	transition: 1s ease-in-out;
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

	/* GRID/FLEX */
	display: flex;
	grid-area: ${(props) => props.gridareas};
	justify-content: space-around;
	align-self: flex-end;

	/* FONTS */
	font-family: "Special Elite", cursive;

	/* CHILDREN */
	a {
		font-size: 3vw;
		text-decoration: none;
		text-shadow: 0 0.2rem 0.3rem rgba(50, 50, 50, 1);
		transition: 0.3s ease-in-out;
	}

	/* INTERACTION */
	&:hover {
		align-self: stretch;
		a {
			align-self: baseline;
			transform: scale(1.1);
		}
	}

	&:active {
		align-self: flex-end;
		a {
			transition: 0.1s ease-in-out;
			transform: scale(1);
		}
	}
`;

export default function NavbarMenuContainer(props) {
	// const NavbarMenuContainerVariants = {
	// 	NavbarMenuContainerInitialFolderState: {
	// 		alignSelf: "flex-end",
	// 	},
	// 	NavbarMenuContainerFolderHoverAnimation: {
	// 		alignSelf: "stretch",
	// 	},
	// };

	// const NavbarMenuContainerMotionProps = {
	// 	initial: NavbarMenuContainerVariants.NavbarMenuContainerInitialFolderState,
	// 	whileHover: NavbarMenuContainerVariants.NavbarMenuContainerFolderHoverAnimation,
	// };

	return (
		<NavbarMenuContainerDiv
			// {...NavbarMenuContainerMotionProps}
			folderimg={props.folderimg}
			gridareas={props.gridareas}
		>
			{props.children}
		</NavbarMenuContainerDiv>
	);
}
