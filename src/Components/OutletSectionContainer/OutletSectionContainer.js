import styled from "styled-components";
import { motion } from "framer-motion";

const OutletSectionContainerDiv = styled(motion.div)`
	background-color: peachpuff; //for development
`;

export default function OutletSectionContainer(props) {
	const { children } = props;

	return <OutletSectionContainerDiv>{children}</OutletSectionContainerDiv>;
}
