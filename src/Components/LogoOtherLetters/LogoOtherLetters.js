import styled from "styled-components";
import { motion } from "framer-motion";

const LogoOtherLettersDiv = styled(motion.div)`
	/* background-color: peachpuff; //for development */
`;

const LogoOtherLettersSpan = styled(motion.span)`
	/* background-color: peachpuff; //for development */
`;

export default function LogoOtherLetters(props) {
	const { otherLetters } = props;

	const separateOtherLetters = () => {
		const otherLettersArray = otherLetters.split("");

		return otherLettersArray.map((letter) => {
			<LogoOtherLettersSpan>{otherLetters}</LogoOtherLettersSpan>;
		});
	};

	return <LogoOtherLettersDiv>{separateOtherLetters}</LogoOtherLettersDiv>;
}
