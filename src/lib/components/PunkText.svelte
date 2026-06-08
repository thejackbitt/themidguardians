<script>
    import { onMount } from "svelte";

    let { text } = $props();

    let displayText = $state(text);

    const randomTable = [1,7,3,9,4,8,2,0,5,6];

    const isUpperCase = str => str === str.toUpperCase();

    function toggleCaps(char) {
        if(char != undefined) {
            return isUpperCase(char)
                ? char.toLowerCase()
                : char.toUpperCase();
        }
    }

    function randomizeText(n) {
        const chars = displayText.split("");

        const index = Math.floor(((chars.length - 1) * n) / 10);

        chars[index] = toggleCaps(chars[index]);

        displayText = chars.join("");
    }

    function random(i) {
        i = (i + 1) % randomTable.length;

        setTimeout(() => {
            randomizeText(randomTable[i]);
            randomizeText(randomTable[5-i]);
            randomizeText(randomTable[10-i]);
            random(i);
        }, 200);
    }

    onMount(() => {
        random(0);
    });
</script>

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
</style>

<div>
    <h2>
        {displayText}
    </h2>
</div>