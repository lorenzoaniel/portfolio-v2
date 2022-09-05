import styled from "styled-components";
import { motion } from "framer-motion";
import RoutePageBaseStyle from "../../Styles/RoutePageBaseStyle/RoutePageBaseStyle";

const ContactContainer = styled(motion.div)`
	${RoutePageBaseStyle}
`;

export default function Contact(props) {
	let { title } = props;

	return <ContactContainer> {title} </ContactContainer>;
}
