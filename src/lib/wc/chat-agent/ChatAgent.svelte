<svelte:options customElement="chat-agent" />

<script lang="ts">
	import axios from 'axios';
	import { onMount, tick } from 'svelte';
	import MessageItem from './MessageItem.svelte';
	import { ChatRole, type ChatMessage } from '../../model/ai/chat-message.model.js';
	import type { ChatHistory } from '../../model/ai/chat-history.model.js';

	export let key = '';
	export let name = 'Assistente Virtual';
	export let label = 'Chat';

	let history: ChatHistory;
	let isLoading = false;
	let chatOpen = false;
	let input = '';
	let messages: any = [];
	let chatBox: HTMLElement;
	let publish: any;
	let dev = false;
	const host = dev
		? 'http://localhost:3001'
		: 'https://domain-service-dot-ai-news-388820.rj.r.appspot.com';

	onMount(async () => {
		import('boxicons');
		const res = await axios.get(`${host}/publish/${key}`);
		publish = res.data;
	});

	function toggleChat() {
		chatOpen = !chatOpen;
	}

	async function createChat() {
		isLoading = true;
		const _history = await axios.post(`${host}/publish/${key}/chat`, { input });
		// console.log(_history);

		history = _history.data;
		input = '';
		scrollToBottom();
		isLoading = false;
	}
	async function sendMessage() {
		if (isLoading || !input) {
			return;
		}
		isLoading = true;
		if (!history) {
			return createChat();
		}
		const userMsg: ChatMessage = {
			role: ChatRole.user,
			content: input,
			isError: false
		};
		const assistantMsg: ChatMessage = {
			role: ChatRole.assistant,
			content: '',
			isError: false
		};
		history.msgs = [...history.msgs, userMsg, assistantMsg];
		scrollToBottom();
		// chatContainer.scrollToBottom();
		const _history = await axios.post(`${host}/publish/${key}/chat/${history._id}`, {
			input
		});
		history = _history.data;
		// chatContainer.scrollToBottom();
		input = '';
		scrollToBottom();
		isLoading = false;
	}

	export const scrollToBottom = async () => {
		await tick();
		console.log('scroll bottom');
		chatBox && chatBox?.scroll({ top: chatBox.scrollHeight, behavior: 'smooth' });
	};
</script>

<!-- UI Components -->
{#if publish && !chatOpen}
	<button class="chat-button pure-button pure-button-primary" on:click={toggleChat}>
		<span>{label}</span>
		<box-icon type="solid" name="message" size="1rem" color="white" />
	</button>
{/if}

{#if chatOpen}
	<div class="chat-box">
		<!-- Chat Header -->
		<div class="chat-header">
			<span>{name}</span>
			<button class="pure-button" style="font-size: 70%;" on:click={toggleChat}>X</button>
		</div>

		<!-- Chat Messages -->
		<div id="chat-messages" bind:this={chatBox} class="chat-messages">
			<MessageItem
				msg={{
					role: ChatRole.assistant,
					content: 'Como posso te ajudar? \n Como posso te ajudar?'
				}}
			/>
			{#if !!history?.msgs}
				{#each history.msgs as msg}
					<MessageItem {msg} />
				{/each}
			{/if}
		</div>

		<!-- Chat Input -->
		<div class="chat-input pure-form">
			<fieldset class="flex-fieldset">
				<!-- Add flex-fieldset class -->
				<textarea
					class="flex-textarea pure-input"
					rows={3}
					bind:value={input}
					placeholder="Como faço para me cadastarar?"
					disabled={isLoading}
				/>
				<button
					class="pure-button pure-button-primary flex-button"
					on:click={sendMessage}
					disabled={!input || isLoading}
				>
					<!-- Add flex-button class -->
					<box-icon
						name="paper-plane"
						type="solid"
						size="sm"
						color="white"
						style="margin-left: -3px;"
					/>
				</button>
			</fieldset>
		</div>
	</div>
{/if}

<style>
	@import 'https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css';

	.chat-button {
		border-radius: 5px;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
		position: fixed;
		bottom: 20px;
		right: 20px;
	}

	.chat-box {
		border-radius: 5px;
		box-sizing: border-box;
		width: 300px;
		height: 400px;
		border: 1px solid gainsboro;
		font-family: Arial, Helvetica, sans-serif;
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: flex;
		flex-direction: column;
	}

	.chat-header {
		display: flex; /* Use flexbox layout */
		justify-content: space-between; /* Distribute items */
		align-items: center; /* Align vertically */
		padding: 11px;
		padding-bottom: 8px;
		background-color: #007bff;
		color: white;
		border-radius: 5px 5px 0px 0px;
	}

	.chat-messages {
		overflow-y: scroll;
		padding: 10px;
		flex: 1;
	}

	.chat-input {
		background-color: gainsboro;
	}

	.user {
		color: blue;
	}

	.bot {
		color: green;
	}

	.flex-fieldset {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0;
		margin: 0;
		border: none;
	}

	.flex-textarea {
		flex: 1;
	}

	.flex-button {
		width: 50px;
	}
</style>
