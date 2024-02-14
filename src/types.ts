export type RequestType = {
	id?: number;
	title: string;
	text: string;
	address: string;
	time: string;
};

export interface RequestsProps {
	requests: RequestType[];
}
