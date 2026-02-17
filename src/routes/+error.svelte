<script>
    import valerie from "$lib/assets/ValerieConcept1.png";
    import Header from "$lib/components/Header.svelte";
    import { navigateTo } from "$lib/index.js";
</script>

<div class="content">
    <Header/>

    <div class="window window-box" style="margin: 32px;">
    <div class="title-bar">
      <div class="title-bar-text">
        404 Error Not Found
      </div>
    </div>
    <div class="window-body">
        <div class="window-flex">
            <img class="image" src={valerie}>
            <p>Uh oh!  We weren't able to find that page.  
            <br/>
            <br/>
            The page you are looking for either doesn't exist or doesn't exist <i>yet.</i>  Please check back later.  Sometimes enemy interference can cause this to happen.</p>
        </div>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/contact')}>Send Report</button>
        </div>
    </div>
    </div>
</div>