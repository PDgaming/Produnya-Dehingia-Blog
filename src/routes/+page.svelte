<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data;
	const { posts } = data;
</script>

<div class="prose prose-lg max-w-none">
	<ul class="space-y-4">
		{#each data.posts as post}
			<li class="border-b pb-4">
				<a href="/{post.metadata.slug}" class="text-xl font-semibold hover:text-yellow-700">
					{post.metadata.title.replaceAll('-', ' ').charAt(0).toUpperCase() +
						post.metadata.title.replaceAll('-', ' ').slice(1)}
				</a>
				{#if post.metadata.date}
					<p class="mt-1 text-sm text-gray-500">
						{new Date(post.metadata.date).toLocaleDateString()}
					</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
