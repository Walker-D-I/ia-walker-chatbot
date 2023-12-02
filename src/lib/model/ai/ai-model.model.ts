export interface AIModel {
	_id?: string;

	name: string;

	code: string;

	description: string;

	hasFunction: boolean;

	maxTokens: number;
}
