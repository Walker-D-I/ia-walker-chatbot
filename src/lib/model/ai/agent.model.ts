import type { AIModel } from './ai-model.model';
import type { Index } from './index.model';

export interface Agent {
	_id?: string;

	name: string;

	model?: AIModel;

	instruction: string;

	tokens: number;

	temperature: number;

	indexes: Index[];

	// functions: AgentFunction[];
}
