<script lang="ts">
	import '../app.css';
	import Footer from './components/footer.svelte';
	import Navbar from './components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="main max-h-screen overflow-hidden">
	<div class="navbar absolute w-screen top-0 flex items-centered p-2">
		<Navbar />
	</div>
	<div class="content overflow-y-scroll overflow-x-hidden bg-base-100">
		<div class="filler w-screen bg-base-300 h-16"></div>
		<div class="px-2 pb-2">
			{@render children()}
		</div>
	</div>
	<div class="footer flex h-auto justify-center bg-base-300 p-2">
		<Footer />
	</div>
</div>

<style>
	.content {
		height: calc(100vh - 36px);
	}
	.navbar {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		background-color: var(--base-300);
		backdrop-filter: blur(30px);
	}
</style>