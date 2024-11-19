<script lang="ts">
	import type { PageData } from './$types';
	import docsSvg from '@/documents/main.svg?raw';
	import docsSvgPath from '@/documents/main.svg';
	import docsPdfPath from '@/documents/main.pdf';
	import { Download, ExternalLink } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
	import { buttonVariants } from '@/components/ui/button';
</script>

<div class="flex h-fit max-w-[80%] flex-col gap-6 p-8">
	<div class="flex flex-nowrap justify-between gap-12">
		<h1 class="text-xl font-semibold">Documentation</h1>
		<div class="flex gap-2">
			<a href={docsSvgPath} class={buttonVariants({ variant: 'outline' })} target="_blank">
				<ExternalLink class="mr-2" />
				Open
			</a>
			<a
				href={docsPdfPath}
				class={buttonVariants({ variant: 'outline' })}
				download="documentation.pdf"
			>
				<Download class="mr-2" />
				Download
			</a>
		</div>
	</div>
	<div
		class="border-input overflow-hidden rounded-md border shadow-md shadow-[hsl(var(--muted-foreground)/15%)]"
	>
		{@html docsSvg}
	</div>
</div>
