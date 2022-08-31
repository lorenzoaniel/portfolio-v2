import RoutePageBase from "../../Components/RouteBasePage/RoutePageBase";
import React from "react";

interface Props {
	title: string;
}

export default function Projects(props: Props) {
	let { title } = props;

	return <RoutePageBase title={title} />;
}
