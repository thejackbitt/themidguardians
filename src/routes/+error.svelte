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
            <span class="hide-mobile">
                The page you are looking for either doesn't exist or doesn't exist <i>yet.</i>  Please check back later.  The Naethra are constantly trying to shut us down so this behavior is expected.
            </span>
            </p>
        </div>
        <p class="show-mobile">
            The page you are looking for either doesn't exist or doesn't exist <i>yet.</i>  Please check back later.  The Naethra are constantly trying to shut us down so this behavior is expected.
        </p>
        <div class="centered-button-container">
            <button on:click={(event) => navigateTo('/')}>Return to Home</button>
        </div>
    </div>
    </div>
    <img class="checkerboard" src={checkerboard}/>
    <Footer/>
</div>