import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const LogoDiv = styled(motion.div)`
	width: 100%;
	grid-area: logo;
	display: flex;
	place-content: space-around space-around;
	padding: 1rem;
`;

export default function Logo(props) {
	const { children } = props;
	const [showLetters, setShowLetters] = useState(false);

	const toggleShowLetters = () => {
		setShowLetters((curr) => !curr);
	};

	return (
		<LogoDiv onMouseEnter={toggleShowLetters} onMouseLeave={toggleShowLetters}>
			{children}
		</LogoDiv>
	);
}
