import styled from "styled-components";
import { motion } from "framer-motion";

const LogoDiv = styled(motion.div)`
	/* background-color: green; //for development */
`;

export default function Logo(props) {
	const { children } = props;

	return <LogoDiv>{children}</LogoDiv>;
}
