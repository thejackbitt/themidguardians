<script>
	import favicon from '$lib/assets/favicon.png';
	import Cursor from '$lib/components/Cursor.svelte';

	let { children } = $props();
</script>

<style>
	:global button, :global img {
		user-select: none;
		-moz-user-select: none;
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://unpkg.com/98.css" />
</svelte:head>

<Cursor/>

{@render children()}
