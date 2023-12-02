export interface Index {
	_id?: string;

	name: string;
	description: string;
	type: string;

	chunkSize: number;

	chunkOverlap: number;

	docs: any[];

	sources?: any[];

	posts?: any[];
}
