import loaderSvg from '@/assets/img/loader.svg';
import { FC, memo } from "react";

interface LoaderProps {
	width: number;
	height: number;
}

export const Loader: FC<LoaderProps> = memo(({ width, height }) => {
	return (
		<img src={loaderSvg} width={width} height={height} alt="загрузка"/>
	);
});
