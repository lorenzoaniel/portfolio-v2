import styled from "styled-components";
import { motion } from "framer-motion";

const LogoInitialLetterDiv = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const LogoInitialLetterSpan = styled(motion.span)`
	font-family: "Special Elite", cursive;
	font-size: 5vw;
	padding-top: 1vw;
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
