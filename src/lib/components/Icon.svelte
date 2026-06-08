<script>
    const type = $props();
    import folderIcon from "$lib/assets/icons/folder.png"; 
</script>

<div>
    {#if (type === "folder")}
        <img src={folderIcon} alt="folder icon" />
    {/if}
</div>