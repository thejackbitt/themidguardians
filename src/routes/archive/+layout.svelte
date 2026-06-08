<script>
    import Header from "$lib/components/Header.svelte";
    import Archive from "$lib/components/Archive.svelte";

	let { children } = $props();
</script>

<div class="content">
    <Header/>
    <Archive>
        {@render children()}
    </Archive>
</div>
