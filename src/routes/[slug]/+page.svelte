<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { content, metadata } = data.post;
</script>

<div class="prose prose-lg bg-base-200 max-w-none rounded-xl p-2 mt-3">
	<div class="metadata">
		<h1 class="underline">{metadata.title}</h1>
		<p class="text-2xl">
			{new Date(metadata.date).toLocaleDateString('en-US', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})}
		</p>
	</div>
	<div class="content">
		{@html content}
	</div>
</div>

<style>
	p {
		margin-top: -32px;
		margin-bottom: -32px;
	}
</style>