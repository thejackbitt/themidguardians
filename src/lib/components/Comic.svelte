<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    let galleryID = "comicBook";

    const pages = import.meta.glob('$lib/assets/pages/*.png', {
    eager: true,
    import: 'default'
    });

    /**
     * @param {string} path
     * @returns {number}
     */
    function getIndex(path) {
        const match = path.match(/Page(\d+)_50\.png$/);
        return match ? parseInt(match[1], 10) : 0;
    }

    const images = Object.entries(pages)
        .sort(([a], [b]) => getIndex(a) - getIndex(b))
        .map(([, url]) => ({
            largeURL: url,
            thumbnailURL: url,
            width: 1000,
            height: 1500
        }));

    onMount(() => {
        let lightbox = new PhotoSwipeLightbox({
        gallery: '#' + galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    })
</script>

<style>
    .comic-viewer {
        padding: 0px 0px;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .comic-viewer img {
        width: 100%;
        margin: 0 auto;
    }
    .pswp-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .pswp-gallery-image {
        max-width: 100%;
        height: auto;
        cursor: pointer;
    }

    [id^="comic-page-"] {
        display: none;
    }

    #comic-page-0 {
        display: block;
    }

</style>

<div class="window window-box" style="margin: 14px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Issue #1
      </div>
    </div>
    <div class="window-body">
        <p>
          Click on the page below to view in fullscreen.
        </p>
        <div class="centered-button-container" style="padding: 0px">
            <div class="comic-viewer">
                <div class="pswp-gallery" id={galleryID}>
                    {#each images as image, index}
                    <a
                        id="comic-page-{index}"
                        href={image.largeURL}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img class="pswp-gallery-image" src={image.thumbnailURL} alt="" />
                    </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>