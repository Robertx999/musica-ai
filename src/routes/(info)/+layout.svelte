<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import { BookText, House, LogIn, Moon, Sun, type Icon } from 'lucide-svelte';
	import { mode } from '@/mode.svelte';
	import ModeSwitch from '@/components/ModeSwitch.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let { children } = $props();

	const scrollTop = writable(0);
	setContext('scrollTop', scrollTop);

	const menuItems: Array<{ name: string; href: string; icon: typeof Icon }> = [
		{
			name: 'Home',
			href: '/',
			icon: House
		},
		{
			name: 'Docs',
			href: '/docs',
			icon: BookText
		}
	];

	const ghostButtonClassList = buttonVariants({ variant: 'ghost' });
</script>

<div class="flex h-screen w-full flex-col-reverse md:flex-col">
	<div
		class="z-10 flex w-full flex-row justify-between gap-8 bg-background/90 p-4 backdrop-blur-md"
		style={$scrollTop == 0 ? 'border-bottom-width: 0px;' : 'border-bottom-width: 1px;'}
	>
		<div class="flex flex-row gap-2">
			{#each menuItems as item}
				<a class={ghostButtonClassList} href={item.href}>
					<div class="md:hidden">
						<item.icon />
					</div>
					{item.name}
				</a>
			{/each}
		</div>
		<div class="flex flex-row gap-2">
			<a class={ghostButtonClassList} href="/auth"><LogIn />Log in</a>
			<ModeSwitch variant="ghost" />
		</div>
	</div>
	<main
		class="flex h-full w-full justify-center overflow-y-scroll scroll-smooth border-border max-md:-mb-[4.5rem] max-md:pb-[4.5rem] md:-mt-[4.5rem] md:pt-[4.5rem]"
		onscroll={({ target }) => {
			scrollTop.set((target as HTMLElement).scrollTop || 0);
		}}
	>
		{@render children()}
	</main>
</div>
