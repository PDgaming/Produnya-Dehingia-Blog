<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let data;
	const { posts } = data;
</script>

<div class="prose prose-lg max-w-none bg-base-200 rounded-xl pb-1">
	<ul>
		{#each posts as post}
			<li class="border-b pb-3 cursor-pointer">
					<a href="/{post.metadata.slug}" class="text-2xl font-semibold text-yellow-900 hover:text-yellow-700">
						{post.metadata.title.replaceAll('-', ' ').charAt(0).toUpperCase() +
						post.metadata.title.replaceAll('-', ' ').slice(1)}
					</a>
				{#if post.metadata.date}
					<p class="mt-1 text-md text-gray-500">
						{new Date(post.metadata.date).toLocaleDateString()}
					</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.prose {
		min-height: calc(100vh - 125px);
	}
	li:first-child {
		padding-top: 10px;
	}
</style>