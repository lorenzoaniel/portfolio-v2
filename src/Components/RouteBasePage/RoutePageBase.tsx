import React from "react";

interface Props {
	title: string;
}

export default function RoutePageBase(props: Props) {
	let { title } = props;

	return <div>{title}</div>;
}
