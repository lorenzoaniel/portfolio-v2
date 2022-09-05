import styled from "styled-components";
import { motion } from "framer-motion";

const OutletSectionContainerDiv = styled(motion.div)`
	height: 100%;
	grid-area: outlet;
`;

export default function OutletSectionContainer(props) {
	const { children } = props;

	return <OutletSectionContainerDiv>{children}</OutletSectionContainerDiv>;
}
