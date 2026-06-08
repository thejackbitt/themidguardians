<script>
    import checkerboard from "$lib/assets/checkerboard.png";
    import error from "$lib/assets/error.png"
    import Header from "$lib/components/Header.svelte";
    import { navigateTo } from "$lib/index.js";
    import Footer from "$lib/components/Footer.svelte";
</script>

<style>
    .pixel-art {
        padding: 20px;
        width: 100px;
        height: 100px;
        image-rendering: pixelated;
    }
</style>

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
            <img class="image pixel-art" src={error}>
            <p>Uh oh!  We weren't able to find that page.  
            <br/>
            <br/>
            The page you are looking for either doesn't exist or doesn't exist <i>yet.</i>  Please check back later.  The Naethra are constantly trying to shut us down so this behavior is expected.</p>
        </div>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/')}>Return to Home</button>
        </div>
    </div>
    </div>
    <img src={checkerboard}/>
    <Footer/>
</div>