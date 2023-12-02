import type { Agent } from './agent.model';

export enum ChatRole {
	system = 'system',
	user = 'user',
	assistant = 'assistant'
}

export interface ChatMessage {
	_id?: string;

	role: ChatRole;

	agent?: Agent;

	content: string;

	refs?: any[];

	isError: boolean;

	rating?: number;
}
