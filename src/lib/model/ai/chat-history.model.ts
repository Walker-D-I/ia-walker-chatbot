import type { Agent } from './agent.model';
import type { ChatMessage } from './chat-message.model';

export interface ChatHistory {
	_id?: string;

	user_id: string;

	agent: Agent;

	msgs: ChatMessage[];
}
