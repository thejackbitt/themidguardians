<script>
    import {navigateTo} from "$lib/index.js"
</script>

<div class="logo-container">
    <h2>The</h2>
    <h1>Midguardians</h1>
    <h3>.com</h3>
</div>
<p class="subhead"><i>"What you've seen is only the tip of the iceberg."</i></p>
<hr class="solid" />
<div class="button-container">
    <button on:click={(event) => navigateTo('/')}>Home</button>
    <button on:click={(event) => navigateTo('/archive')}>Archive</button>
    <button on:click={(event) => navigateTo('/gallery')}>Gallery</button>
    <button on:click={(event) => navigateTo('/contact')}>Contact</button>
</div>

<style>

    @font-face {
        font-family: 'Mustasurma';
        src: url('$lib/assets/mustasurma.regular.ttf') format('truetype');
    }

    h1, h2, h3 {
        font-family: 'Mustasurma';
        font-weight: 100;
        color: white;
    }
    .logo-container h1 {
        font-size: 4em;
    }

    .logo-container h2 {
        font-size: 2em;
        margin-right: 10px;
    }

    .logo-container h3 {
        font-size: 2em;
        display: flex;
        align-items: end;
        height: 70px;
        margin-left: 10px;
    }

    .logo-container {
        display: flex;
    }

    hr.solid {
        border-top: 3px solid white;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        width: 600px;
    }

    .subhead {
        margin-top: -10px;
        color: white;
    }
</style>
