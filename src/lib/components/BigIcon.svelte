<script>
    import archiveImg from "$lib/assets/icons/archive.png"
    import docImg from "$lib/assets/icons/archive_doc.png"
    const { filename, type } = $props();
</script>

<style>
    .big-icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        height: 120px;
    }

    .big-icon-wrapper img {
        image-rendering: pixelated; 
        width: 75px;
    }

    .big-icon-wrapper p {
        width: 100%;
        text-align: center;
        margin-top: 3px;
        -webkit-user-drag: none; 
        user-select: none;
    }

</style>

<div class="big-icon-wrapper">
    {#if type == "folder"}
        <img src={archiveImg}>
    {/if}
    {#if type == "doc"}
        <img src={docImg}>
    {/if}
    <span style="margin-top: 4px; font-size: 13px !important;">{filename}</span>
</div>