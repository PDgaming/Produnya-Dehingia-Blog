<script lang="ts">
	import '../app.css';
	import Footer from './components/footer.svelte';
	import Navbar from './components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="main min-height-screen">
	<div class="navbar fixed top-0 flex h-12 w-screen items-center bg-blue-400 p-2">
		<Navbar />
	</div>
	<div class="content mt-16 p-2">
		{@render children()}
	</div>
	<div class="footer flex h-auto justify-center bg-blue-400 p-2">
		<Footer />
	</div>
</div>
