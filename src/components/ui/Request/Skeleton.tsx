import {FC, memo, useEffect, useState} from "react";
import ContentLoader from "react-content-loader"

import cls from './Request.module.scss'

export const RequestSkeleton: FC = memo(() => {
	const [dimensions, setDimensions] = useState({ height: 150 });
	
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 768) {
				setDimensions({ height: 100 });
			} else {
				setDimensions({ width: 900, height: 150 });
			}
		}
		
		window.addEventListener('resize', handleResize);
		handleResize();
		
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	
	return (
		<ContentLoader
			className={cls.request}
			speed={1}
			width={900}
			height={dimensions.height}
			viewBox={`0 0 100% ${dimensions.height}`}
			backgroundColor="#C59368"
			foregroundColor="#ededed"
		>
			<rect x="0" y="0" rx="10" ry="10" width="100%" height="100%"/>
		</ContentLoader>
	)
})

