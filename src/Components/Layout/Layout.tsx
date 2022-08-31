import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import OutletSectionContainer from "../OutletSectionContainer/OutletSectionContainer";

const LayoutDiv = styled(motion.div)`
	background-color: #145894; //for development
	//STATIC
	height: inherit;
	width: inherit;
`;

interface Props {
	children?: JSX.Element;
}

export default function Layout(props: Props) {
	return (
		<LayoutDiv>
			<Navbar />
			<OutletSectionContainer>
				<Outlet />
			</OutletSectionContainer>
		</LayoutDiv>
	);
}
