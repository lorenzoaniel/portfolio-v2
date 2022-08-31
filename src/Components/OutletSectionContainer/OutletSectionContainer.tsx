import styled from "styled-components";
import { motion } from "framer-motion";

const OutletSectionContainerDiv = styled(motion.div)`
	background-color: peachpuff; //for development
`;

interface Props {
	children?: JSX.Element;
}

export default function OutletSectionContainer(props: Props) {
	const { children } = props;

	return <OutletSectionContainerDiv>{children}</OutletSectionContainerDiv>;
}
