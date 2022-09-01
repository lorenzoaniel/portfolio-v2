import styled from "styled-components";
import { motion } from "framer-motion";

const LogoInitialLetterDiv = styled(motion.div)`
	/* background-color: peachpuff; //for development */
`;

const LogoInitialLetterSpan = styled(motion.span)`
	/* background-color: peachpuff; //for development */
`;

export default function LogoInitialLetter(props) {
	const { children, initialLetter } = props;

	return (
		<LogoInitialLetterDiv>
			<LogoInitialLetterSpan>{initialLetter}</LogoInitialLetterSpan>
			{children}
		</LogoInitialLetterDiv>
	);
}
