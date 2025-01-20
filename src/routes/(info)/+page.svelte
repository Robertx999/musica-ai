<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Action } from 'svelte/action';
	import type { Writable } from 'svelte/store';

	const scrollTop: Writable<number> = getContext('scrollTop');

	let height = $state(0),
		percentage = $state(0);

	const scrollAction: Action = (node) => {
		scrollTop.subscribe(() => {
			const rect = node.getBoundingClientRect();
			const offset_height = rect.height - window.innerHeight;

			percentage = Math.max(0, Math.min(-rect.top, offset_height)) / offset_height;
		});
	};
	onMount(() => {
		$inspect(percentage);
	});
</script>

<div class="h-full w-full" bind:clientHeight={height}>
	<div class="h-[200%] w-full bg-slate-800">a</div>
	<div class="h-[400%] w-full bg-red-700" use:scrollAction>
		<div style="height: {height}px;" class="sticky top-0 z-0 w-full bg-lime-600">b</div>
	</div>
	<div class="h-full w-full bg-orange-600">c</div>
</div>
