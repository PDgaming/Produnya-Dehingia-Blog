<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { content, metadata } = data.post;
</script>

<div class="prose prose-lg bg-base-300 max-w-none rounded-xl p-2">
	<div class="metadata">
		<h1>{metadata.title}</h1>
		{new Date(metadata.date).toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})}
	</div>
	{@html content}
</div>
