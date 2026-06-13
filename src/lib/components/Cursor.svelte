<script>
    import { onMount } from "svelte";
    import cursorImg from "$lib/assets/cursors/pick_cursor2.png";
    import hoverImg from "$lib/assets/cursors/rock_cursor2.png";

    let x = 0;
    let y = 0;
    let visible = false;
    let hoveringClickable = false;

    function update(e) {
        x = e.clientX;
        y = e.clientY;

        const el = document.elementFromPoint(x, y);

        hoveringClickable = !!el?.closest(
            "a, button, input[type='button'], input[type='submit'], [role='button']"
        );
    }

    onMount(() => {
        window.addEventListener("mouseout", (e) => {
            if (!e.relatedTarget) {
                visible = false;
            }
        });

        window.addEventListener("mouseover", () => {
            visible = true;
        });

        window.addEventListener("mousemove", update);

        return () => {
            window.removeEventListener("mousemove", update);
        };
    });
</script>

{#if visible}
<div
    class="cursor"
    style="
        transform: translate({x - 10}px, {y - 10}px);
        background-image: url({hoveringClickable ? hoverImg : cursorImg});
    "
></div>
{/if}

<style>
:global(html),
:global(body),
:global(body *) {
    cursor: none !important;
}

.cursor {
    position: fixed;
    width: 32px;
    height: 32px;
    pointer-events: none;
    z-index: 999999;
    background-size: contain;
    background-repeat: no-repeat;
    image-rendering: pixelated;
}

@media screen and (max-width: 465px) {
    .cursor {
        display: none;
    }

    :global(html),
    :global(body),
    :global(body *) {
        cursor: default !important;
    }
}
</style>