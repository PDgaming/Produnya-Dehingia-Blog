<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<div class="prose prose-lg max-w-none">
	{@html data.content}
</div>
