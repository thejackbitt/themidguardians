<script>
    const {text} = $props();

    
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
        {text}
    </h2>
</div>