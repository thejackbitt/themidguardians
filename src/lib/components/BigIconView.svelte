<script>
    let { children } = $props();
</script>

<style>
    .big-icon-view {
        display: flex;
        flex-wrap: wrap;
    }

    :global a {
        text-decoration: none;
        color: black;
    }

    @media screen and (max-width: 465px) {
        .big-icon-view {
            width: 95%;
            margin: 0 auto;
        }
    }
</style>

<div class="big-icon-view">
    {@render children()}
</div>