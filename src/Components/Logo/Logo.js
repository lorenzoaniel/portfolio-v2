import styled from "styled-components";
import { motion } from "framer-motion";

const LogoDiv = styled(motion.div)`
	background-color: darkgray;
	width: 100%;
	grid-area: logo;
	display: flex;
	place-content: space-around space-around;
`;

export default function Logo(props) {
	const { children } = props;

	return <LogoDiv>{children}</LogoDiv>;
}
