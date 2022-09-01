import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarMenuContainerDiv = styled(motion.div)``;

export default function NavbarMenuContainer(props) {
	const { children } = props;

	return <NavbarMenuContainerDiv>{children}</NavbarMenuContainerDiv>;
}
