import styled from "styled-components";
import { motion } from "framer-motion";
import RoutePageBaseStyle from "../../Styles/RoutePageBaseStyle/RoutePageBaseStyle";

const ProjectsContainer = styled(motion.div)`
	${RoutePageBaseStyle}
`;

export default function Projects(props) {
	let { title } = props;

	return <ProjectsContainer> {title} </ProjectsContainer>;
}
