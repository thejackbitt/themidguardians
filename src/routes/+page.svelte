<script>
    import midguardians from "$lib/assets/TrioConcept1.png";
    import Header from "$lib/components/Header.svelte";
    import { navigateTo } from "$lib/index.js";
</script>

<div class="content">
    <Header/>

    <div class="window window-box" style="margin: 32px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Who We Are
      </div>
    </div>
    <div class="window-body">
        <div class="window-flex">
            <img class="image" src={midguardians}>
            <p>We are the descendants of the Vinlanders that came to America in the 9th century.  We seek to protect humanity from the children of Loki.  And we will never back down.  Our mission is to expose the truth about this world by any means necessary.
            <br/>
            <br/>
            To report an instance of paranormal phenomena, please visit our Contact page.
            </p>
        </div>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/contact')}>Send Report</button>
        </div>
    </div>
    </div>
</div>
