<script lang="ts">
	import type { PageData } from './$types';
	import { AudioWaveform, Moon, Sun } from 'lucide-svelte';
	import { mode } from '@/mode.svelte';
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input/index';
	import SpatialWave from '@/components/SpatialWave.svelte';
	import { fade } from 'svelte/transition';

	let { data }: { data: PageData } = $props();
</script>

<main class="max-md:dark flex h-full w-full flex-row">
	<div
		style="width: calc(400px + 120%); background: linear-gradient(168deg, hsl(240 3.7% 15.9%), hsl(240 10% 3.9%) 60%);"
		class="border-r-border h-full overflow-hidden md:border-r-[1px]"
	>
		<a
			href="/"
			class="absolute z-10 flex items-center gap-2 p-10 text-xl font-semibold text-[hsl(0_0%_98%)]"
		>
			<AudioWaveform size="30" />
			musica ai
		</a>
		<div in:fade={{ delay: 200, duration: 1000 }} class="h-full w-full">
			<SpatialWave />
		</div>
	</div>
	<div class="flex h-full w-full flex-col max-md:absolute">
		<div class="flex h-full flex-col">
			<div class="flex w-full flex-row justify-end gap-2 p-4 max-md:hidden">
				<Button size="icon" variant="ghost" onclick={mode.toggle}>
					{#if mode.state()}
						<Moon />
					{:else}
						<Sun />
					{/if}
				</Button>
			</div>

			<div class="flex h-full w-full flex-col items-center justify-center p-6">
				<div class="flex w-full max-w-[350px] flex-col flex-nowrap gap-4">
					<div class="flex flex-col items-center">
						<h1 class="text-foreground text-2xl font-semibold">Login/Register</h1>
						<p class="text-muted-foreground text-sm">Create new or login to your account</p>
					</div>
					<form class="flex flex-col flex-nowrap gap-2" action="/" method="post">
						<Input type="text" name="username" placeholder="Username" />
						<Input type="password" name="password" placeholder="Password" />
						<Button class="w-full" type="submit">Sign In/Up</Button>
					</form>
					<hr class="h-[1px] w-full bg-white" />
					<Button class="text-foreground w-full" variant="outline">
						<!-- Spotify Icon goes here -->
						Spotify
					</Button>
				</div>
			</div>
		</div>
	</div>
</main>
