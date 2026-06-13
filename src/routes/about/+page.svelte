<script>
    import Header from "$lib/components/Header.svelte";
    import action1 from "$lib/assets/action_1.png";
    import action2 from "$lib/assets/action_2.png";
    import author from "$lib/assets/author.png";
    import winkEmoji from "$lib/assets/wink.gif"
    import Footer from "$lib/components/Footer.svelte";
</script>

<style>
    .about-body {
        border-top: 4px solid #3a3939;
        background-color: #E0E1E9;
        width: 480px;
        height: 640px;
    }

    .about-content {
        padding: 0px 20px;
    }

    .bottom-img {
        margin-top: -120px;
    }

    h2 {
        font-family: 'Mustasurma';
        src: url('$lib/assets/mustasurma.regular.ttf') format('truetype');
        font-weight: 200;
        font-size: 60px;
        margin-bottom: 2px;
    }

    p {
        font-family: "Pixelated MS Sans Serif", Arial;
    }

    .about-blurb {
        display: flex;
    }

    .about-blurb img {
        height: 240px;
    }

    .about-blurb p {
        padding-left: 10px;
        margin-top: 1px;
    }

    .emoji {
        margin-bottom: -2px;
    }

    @media screen and (max-width: 465px) {
        .comic-book-img {
            width: 100%;
        }

        .about-blurb p {
            padding-left: 0px;
            margin-top: 5px;
        }

        .about-body {
            width: 100%;
        }

        .about-blurb {
            display: block;
        }

        .about-body {
            height: fit-content;
            padding-bottom: 90px;
        }
    }
</style>

<div class="content">
    <Header/>
    <img class="comic-book-img" src={action1} />
    <div class="about-body">
        <div class="about-content">
            <h2>aBOUt</h2>
            <p>The Midguardians is a graphic novel series set in an alternate 
                <br/>
                (or maybe, not so alternate <img class="emoji" src={winkEmoji}/> ) universe where ancient aliens run 
                every aspect of society.  Join a troubled teen named Alex as she 
                uncovers the secrets of a new world she didn't know existed.
            </p>
            <div class="about-blurb">
                <img src={author}/>
                <p>
                    <b>Meet the Author</b>
                    <br/>
                    Jack Bittner, the author of Midguardians, draws inspiration from
                    conspiracy theories, Norse mythology and his experience growing up
                    in Minneapolis.  He created the series as a love-letter to 90s 
                    nostalgia and the comic books he grew up reading.  We hope you enjoy
                    this fusion of punk art and urban legends when Issue #1 is released.
                </p>
            </div>
            <p style="margin-top: -10px;">If you're wondering what else Jack is working on, look no further than <a target="_blank" href="https://gonkville.com">www.gonkville.com</a>.
                There, you can find updates on his kids book series and the Gonkville video game.
            </p>  
        </div>
    </div>
    <img class="comic-book-img bottom-img" src={action2} />
    <Footer/>
</div>
