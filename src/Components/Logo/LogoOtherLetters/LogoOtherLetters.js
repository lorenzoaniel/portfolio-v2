import styled from "styled-components";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

const LogoOtherLettersDiv = styled(motion.div)``;

const LogoOtherLettersSpan = styled(motion.span)`
	font-family: "Special Elite", cursive;
	font-size: 3vw;
`;

export default function LogoOtherLetters(props) {
	const { otherLetters } = props;

	const separateOtherLetters = otherLetters.split("").map((letter) => {
		return <LogoOtherLettersSpan key={nanoid()}>{letter}</LogoOtherLettersSpan>;
	});

	return <LogoOtherLettersDiv>{separateOtherLetters}</LogoOtherLettersDiv>;
}
