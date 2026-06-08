<script>
    const { type } = $props();
    import folderIcon from "$lib/assets/icons/folder.png"; 
    import driveIcon from "$lib/assets/icons/drive.png";
    import docIcon from "$lib/assets/icons/doc.png"
</script>

<style>
    .icon-wrapper img {
        margin-top: -2px;
        margin-right: 2px;
    }
</style>

<div class="icon-wrapper">
    {#if (type === "folder")}
        <img src={folderIcon} alt="folder icon" />
    {/if}
    {#if (type === "drive")}
        <img src={driveIcon} alt="drive icon" />
    {/if}
    {#if (type === "doc")}
        <img src={docIcon} alt="doc icon" />
    {/if}
</div>