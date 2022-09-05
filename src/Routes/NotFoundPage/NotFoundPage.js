import styled from "styled-components";
import { motion } from "framer-motion";
import RoutePageBaseStyle from "../../Styles/RoutePageBaseStyle/RoutePageBaseStyle";

const NotFoundPageContainer = styled(motion.div)`
	${RoutePageBaseStyle}
`;

export default function NotFoundPage(props) {
	let { title } = props;

	return <NotFoundPageContainer> {title} </NotFoundPageContainer>;
}
