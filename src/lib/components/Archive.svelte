<script>
    import Icon from "$lib/components/Icon.svelte";
    import backArrowImg from "$lib/assets/icons/back_arrow.png";
    import forwardArrowImg from "$lib/assets/icons/forward_arrow.png";
    import { goto } from '$app/navigation';

    let { children } = $props();

    let prevAddress = "";
    let nextAddress = "";
    /**
     * @param {{ currentTarget: { closest: (arg0: string) => any; }; }} event
     */
    function openParent(event) {
        const details = event.currentTarget.closest("details");
        if (details) {
            details.open = true;
        }
    }

    async function setUrl() {
        if (nextAddress[0] === "/") {
            nextAddress = nextAddress.slice(1);
        }

        const url = `/archive/${nextAddress}`;

        try {
            const response = await fetch(url, {
                method: "HEAD"
            });

            if (response.ok) {
                await goto(url);
            } else {
                console.error(url, ": file not found.");
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function backUrl() {
        let path = window.location.pathname;

        path = path.replace(/\/$/, "");

        if (path === "/archive") {
            return;
        }

        path = path.substring(0, path.lastIndexOf("/"));

        await goto(path || "/archive");
    }
</script>

<style>
    .tree-list a, .tree-item a {
        display: flex;
    }
    .tree-child {
        padding-left: 10px;
        padding-top: 5px;
        margin-left: -10px;
    }
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60px;
    }
    button img {
        width: 30px;
        image-rendering: pixelated; 
    }

    button:active img {
        padding: 1px 0px 0px 2px;
    }

    .file-tree {

    }

    @media screen and (max-width: 465px) {
        .file-tree {
            display: none;
        }
        #text17 {
            width: 100px;
        }
    }
</style>

<div class="window window-box" style="margin: 14px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Archive
      </div>
    </div>
    <div class="window-body">
        <div style="display: flex; min-height: 500px;">
            <div class="field-border file-tree" style="flex: 1; padding: 8px; min-width: 180px;">
                <ul class="tree-view">
                    <details open>
                        <summary class="tree-list"><a href="/archive/"><Icon type="drive"/> ROOT</a></summary>
                        <ul>
                            <details>
                                <summary class="tree-list tree-child"><a on:click={(event) => openParent(event)} href="/archive/background"><Icon type="folder"/> BACKGROUND</a></summary>
                                <ul>
                                    <li class="tree-item"><a href="/archive/background/erikson"><Icon type="doc"/> ERIKSON.DOC</a></li>
                                </ul>
                            </details>
                            <details>
                                <summary class="tree-list tree-child"><a on:click={(event) => openParent(event)} href="/archive/enemy"><Icon type="folder"/> ENEMY</a></summary>
                                <ul>
                                    <li class="tree-item"><a href="/archive/enemy/naethra"><Icon type="doc"/> NAETHRA.DOC</a></li>
                                </ul>
                            </details>
                            <details>
                                <summary class="tree-list tree-child"><a on:click={(event) => openParent(event)} href="/archive/operator"><Icon type="folder"/> OPERATOR</a></summary>
                                <ul>
                                    <li class="tree-item"><a href="/archive/operator/ragnar"><Icon type="doc"/> RAGNAR.DOC</a></li>
                                    <li class="tree-item"><a href="/archive/operator/valerie"><Icon type="doc"/> VALERIE.DOC</a></li>
                                    <li class="tree-item"><a href="/archive/operator/haakon"><Icon type="doc"/> HAAKON.DOC</a></li>
                                </ul>
                            </details>
                        </ul>
                    </details>
                </ul>
            </div>
            <div class="field-border" style="flex: 3; padding: 2px">
                <div class="window" style="margin-bottom: 8px; display: flex;">
                        <button on:click={backUrl}><img src={backArrowImg}>Back</button>
                        <button on:click={setUrl}><img src={forwardArrowImg}>Forward</button>
                    <div class="field-row" style="padding-left: 8px;">
                        <label for="text17"><p>Search</p></label>
                        <input id="text17" type="text" bind:value={nextAddress}/>
                    </div>
                </div>
                <div style="padding: 0px 12px;">
                    {@render children()} 
                </div>
            </div>
        </div>  
    </div>
</div>