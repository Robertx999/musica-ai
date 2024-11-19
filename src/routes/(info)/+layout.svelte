<script lang="ts">
	import { Button, buttonVariants } from '@/components/ui/button';
	import { BookText, House, LogIn, Moon, Sun, type Icon } from 'lucide-svelte';
	import { mode } from '@/mode.svelte';

	let { children } = $props();

	let scrollTop: number = $state(0);

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
</script>

<div class="flex h-screen w-full flex-col-reverse md:flex-col">
	<div class="flex flex-row justify-between gap-8 p-4">
		<div class="flex flex-row gap-2">
			{#each menuItems as item}
				<a class={buttonVariants({ variant: 'ghost' })} href={item.href}>
					<div class="md:hidden">
						<item.icon />
					</div>
					{item.name}
				</a>
			{/each}
		</div>
		<div class="flex flex-row gap-2">
			<a class={buttonVariants({ variant: 'ghost' })} href="/auth"><LogIn />Log in</a>
			<Button size="icon" variant="ghost" onclick={mode.toggle}>
				{#if mode.state()}
					<Moon />
				{:else}
					<Sun />
				{/if}
			</Button>
		</div>
	</div>
	<main
		class="border-border flex h-full w-full justify-center overflow-y-scroll scroll-smooth"
		style={scrollTop == 0 ? 'border-top-width: 0px;' : 'border-top-width: 1px;'}
		onscroll={({ target }) => {
			scrollTop = (target as HTMLElement).scrollTop || 0;
		}}
	>
		{@render children()}
	</main>
</div>
