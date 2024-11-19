<script lang="ts">
	import '../app.css';
	import type { Action } from 'svelte/action';
	import { mode } from '@/mode.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	const ITEM_NAME = 'color-mode';

	const modeSwitch: Action = (node) => {
		$effect(() => {
			node.classList.toggle('dark', mode.state());
			window.localStorage.setItem(ITEM_NAME, mode.state() ? 'dark' : 'light');
		});
	};

	onMount(() => {
		mode.toggle(
			(window.localStorage.getItem(ITEM_NAME) == 'dark' ? true : false) ||
				window.matchMedia('(prefers-color-scheme: dark)').matches
		);
	});
</script>

<svelte:body use:modeSwitch />

{@render children()}
