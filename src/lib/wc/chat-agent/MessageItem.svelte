<script lang="ts">
	import { marked } from 'marked';
	import { ChatRole } from '../../model/ai/chat-message.model';
	import type { ChatMessage } from '../../model/ai/chat-message.model';
	import { onDestroy } from 'svelte';

	export let msg: ChatMessage;

	let isReading = false;
	let utterance: SpeechSynthesisUtterance;
	onDestroy(() => {
		stopReading();
	});

	function copyAnswer(text: string) {
		navigator?.clipboard?.writeText(text);
	}

	function stopReading() {
		window?.speechSynthesis?.cancel();
		isReading = false;
	}
	function readAloud(text: string) {
		if (isReading) {
			return stopReading();
		}
		utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = 1.2;
		utterance.onend = () => {
			isReading = false;
		};
		utterance.onerror = (e) => {
			console.log(e);
		};
		isReading = true;
		window?.speechSynthesis?.speak(utterance);
	}
</script>

{#if msg.role !== ChatRole.user}
	<div class="pure-g message-row" style="margin-bottom: 7px;">
		<div class="pure-u-1" style="max-width: 90%;">
			<div class="message-box bg-white rounded">
				{#if !!msg.content}
					{@html marked(msg.content)}
				{:else}
					<div class="loading">...</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

{#if msg.role === ChatRole.user}
	<div class="pure-g message-row justify-end" style="margin-bottom: 7px;">
		<div class="pure-u-1" style="max-width: 90%;">
			<div class="message-box bg-light rounded">
				{@html marked(msg.content)}
			</div>
		</div>
	</div>
{/if}

<style>
	/* Custom styles to replace Bootstrap classes */
	.message-row {
	}

	.justify-end {
		justify-content: flex-end;
	}

	.message-box {
		border: gainsboro 1px solid;
		border-radius: 10px;
		padding: 3px;
	}
	:global(.message-box, p) {
		margin: 0;
		padding: 7px;
	}

	.bg-white {
		background-color: white;
	}

	.bg-light {
		background-color: #f9f9f9;
	}

	.rounded {
		border-radius: 5px;
	}

	.options {
		margin-top: 10px;
		border-top: 1px solid #ccc;
		padding-top: 5px;
	}

	.loading {
		text-align: center;
	}
</style>
