import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="138" cy="137" r="136" />
		<rect x="0" y="288" rx="0" ry="0" width="280" height="20" />
		<rect x="2" y="325" rx="0" ry="0" width="280" height="88" />
		<rect x="0" y="435" rx="10" ry="10" width="154" height="20" />
		<rect x="186" y="437" rx="10" ry="10" width="93" height="20" />
	</ContentLoader>
)

export default Skeleton;
