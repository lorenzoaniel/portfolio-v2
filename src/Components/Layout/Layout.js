import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import OutletSectionContainer from "../OutletSectionContainer/OutletSectionContainer";

const LayoutDiv = styled(motion.div)`
	//STATIC
	height: inherit;
	width: inherit;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 10vh 90vh;
`;

export default function Layout(props) {
	return (
		<LayoutDiv>
			<Navbar />
			<OutletSectionContainer>
				<Outlet />
			</OutletSectionContainer>
		</LayoutDiv>
	);
}
