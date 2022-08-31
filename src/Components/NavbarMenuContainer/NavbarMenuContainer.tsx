import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarMenuContainerDiv = styled(motion.div)``;

interface Props {
	children?: JSX.Element;
}

export default function NavbarMenuContainer(props: Props) {
	const { children } = props;

	return <NavbarMenuContainerDiv>{children}</NavbarMenuContainerDiv>;
}
