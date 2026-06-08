<script>
    import midguardians from "$lib/assets/TrioConcept1.png";
    import warning from "$lib/assets/warning.png";
    import checkerboard from "$lib/assets/checkerboard.png";
    import Header from "$lib/components/Header.svelte";
    import PunkText from "$lib/components/PunkText.svelte";
    import { navigateTo } from "$lib/index.js";
    import Footer from "$lib/components/Footer.svelte";
</script>

<style>
    .white-text {
        color: white;
        margin-top: -10px;
        font-family: "Pixelated MS Sans Serif", Arial;
    }
    i {
        margin-right: -5px;
    }

    .pixel-art {
        padding: 20px;
        width: 100px;
        height: 100px;
        image-rendering: pixelated;
    }

    .centered-button-container button {
        margin: 8px;
    }
</style>

<div class="content">
    <Header/>

    <PunkText text="Welcome"/>
    <p class="white-text">...to the resistance</p>

    <div class="window window-box" style="margin: 32px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Congratulations!
      </div>
    </div>
    <div class="window-body">
        <div class="window-flex">
            <img class="image pixel-art" src={warning}>
            <p>If you are reading this, it means you managed to break free from the hypnosis.  
            <br/>
            <br/>
                The Naethra <i>really</i>don't want you to view this website because it contains all kinds of
                information that would destroy their entire system if shown to the public.  Click on one of the buttons below for more information.
            </p> 
        </div>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/about')}>Learn More</button>
            <button on:click={(event) => navigateTo('/gallery')}>Read Comic</button>
            <button on:click={(event) => navigateTo('/archive')}>Visit Archive</button>
        </div>
    </div>
    </div>
    <img src={checkerboard}/>
    <Footer/>
</div>
