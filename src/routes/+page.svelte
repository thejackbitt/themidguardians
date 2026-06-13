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

    .show-mobile {
        display: none;
    }

    @media screen and (max-width: 465px) {
        .window-flex {
            flex-direction: unset;
            align-items: center;
        }

        .window-box {
            margin: 10px;
        }

        .checkerboard {
            width: 100%;
        }

        .hide-mobile {
            display: none;
        }

        .show-mobile {
            display: block;
            margin-top: -5px;
            padding: 0px 15px;
        }

        .show-mobile i {
            margin-right: 5px;
        }

        button {
            padding: 5px 10px;
        }
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
            <span class="hide-mobile">
                The Naethra <i>really</i>don't want you to view this website because it contains all kinds of
                information that would destroy their entire system if shown to the public.  Click on one of the buttons below for more information.
            </span>
            </p> 
        </div>
        <p class="show-mobile">
            The Naethra <i>really</i>don't want you to view this website because it contains all kinds of
            information that would destroy their entire system if shown to the public.  Click on one of the buttons below for more information.
        </p>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/about')}>Learn More</button>
            <button on:click={(event) => navigateTo('/gallery')}>Read Comic</button>
            <button on:click={(event) => navigateTo('/archive')}>Visit Archive</button>
        </div>
    </div>
    </div>
    <img class="checkerboard" src={checkerboard}/>
    <Footer/>
</div>
