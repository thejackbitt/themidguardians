<script>
    import Icon from "$lib/components/Icon.svelte";
</script>

<div class="window window-box" style="margin: 14px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Archive
      </div>
    </div>
    <div class="window-body">
        <div style="display: flex;">
            <div class="field-border" style="flex: 1; padding: 8px">
                <ul class="tree-view">
                    <li><Icon type="folder"/> Table of Contents</li>
                </ul>
            </div>
            <div class="field-border" style="flex: 3; padding: 8px">
                Work area
            </div>
        </div>  
    </div>
</div>