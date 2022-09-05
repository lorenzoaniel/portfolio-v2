import styled from "styled-components";
import { motion } from "framer-motion";
import RoutePageBaseStyle from "../../Styles/RoutePageBaseStyle/RoutePageBaseStyle";

const AboutContainer = styled(motion.div)`
	${RoutePageBaseStyle}
`;

export default function About(props) {
	let { title } = props;

	return <AboutContainer> {title} </AboutContainer>;
}
