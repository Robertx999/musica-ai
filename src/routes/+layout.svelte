<script lang="ts">
	import '../app.css';
	import type { Action } from 'svelte/action';
	import { mode } from '@/mode.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	const ITEM_NAME = 'color-mode';

	const modeSwitch: Action = (node) => {
		$effect(() => {
			let mode_state = mode.state();
			if (mode_state != undefined) {
				node.classList.toggle('dark', mode_state);
				window.localStorage.setItem(ITEM_NAME, mode_state ? 'dark' : 'light');
			} else {
				node.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
				window.localStorage.removeItem(ITEM_NAME);
			}
		});
	};

	onMount(() => {
		const localStorage_mode_state = window.localStorage.getItem(ITEM_NAME);
		switch (localStorage_mode_state) {
			case 'light':
				mode.toggle(0);
				break;

			case 'dark':
				mode.toggle(1);
				break;

			case null:
				mode.toggle(2);
				break;
		}
	});
</script>

<svelte:body use:modeSwitch />

{@render children()}
