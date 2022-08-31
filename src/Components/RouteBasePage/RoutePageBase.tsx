import React from "react";

interface Props {
	title: string;
}

function RoutePageBase(props: Props) {
	let { title } = props;

	return <div>{title}</div>;
}

export default RoutePageBase;
