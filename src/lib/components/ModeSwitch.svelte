<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { mode } from '@/mode.svelte';
	import { Moon, Sun, Sparkle } from 'lucide-svelte';

	let {
		variant
	}: {
		variant: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | undefined;
	} = $props();

	let value: string | undefined = $state(undefined);

	$effect(() => {
		if (value) {
			const parsed_value = Number.parseInt(value);
			if (parsed_value != undefined) mode.toggle(parsed_value);
		}
	});
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: variant, size: 'icon' })}
		>{#if mode.state() == undefined}
			<Sparkle />
		{:else if mode.state()}
			<Moon />
		{:else}
			<Sun />
		{/if}</DropdownMenu.Trigger
	>
	<DropdownMenu.Content class="mx-4">
		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading>Color Mode</DropdownMenu.GroupHeading>
			<DropdownMenu.Separator />
			<DropdownMenu.Item
				onclick={() => {
					mode.toggle(0);
				}}
			>
				<Sun /> Light
			</DropdownMenu.Item>
			<DropdownMenu.Item
				onclick={() => {
					mode.toggle(1);
				}}
			>
				<Moon /> Dark
			</DropdownMenu.Item>
			<DropdownMenu.Item
				onclick={() => {
					mode.toggle(2);
				}}
			>
				<Sparkle /> Auto
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
