import RoutePageBase from "../../Components/RouteBasePage/RoutePageBase";
import React from "react";

interface Props {
	title: string;
}

export default function About(props: Props) {
	let { title } = props;

	return <RoutePageBase title={title} />;
}