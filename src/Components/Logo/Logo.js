import styled from "styled-components";
import { motion } from "framer-motion";

const LogoDiv = styled(motion.div)`
	width: 100%;
	grid-area: logo;
	display: flex;
	place-content: space-around space-around;
	padding: 1rem;
`;

export default function Logo(props) {
	const { children } = props;

	return <LogoDiv>{children}</LogoDiv>;
}
