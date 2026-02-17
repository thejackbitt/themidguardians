<script>
  import alert from "$lib/assets/msg_warning-0.png"
    import { onMount } from "svelte";
  /** @type {Record<string, string>} */
  const pages = import.meta.glob('$lib/assets/pages/*.png', {
    eager: true,
    import: 'default'
  });

  /**
   * @param {string} path
   * @returns {number}
   */
  function getIndex(path) {
    const match = path.match(/Page(\d+)_50\.png$/);
    return match ? parseInt(match[1], 10) : 0;
  }

  const pagesArr = Object.entries(pages)
    .sort(([a], [b]) => getIndex(a) - getIndex(b))
    .map(([, url]) => /** @type {string} */ (url));

  const totalPages = pagesArr.length;
  let showAlert = $state(false);
  /**
     * @type {HTMLDivElement}
     */
  let closable;
  let pageState = $state(1);

  /**
     * @param {any} e
     * @param {number | undefined} [cmd]
  */
  function trySetPageState(e, cmd) {
    let testState = 1;
    if(cmd) {
        testState = cmd;
    } else {
        testState = parseInt(e.target.value);
    }
    if(testState > 0 && testState < pagesArr.length+1) {
        pageState = testState;
    }
    return 0;
  }

  /**
     * @param {MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }} e
     */
  function close(e) {
    if(closable) {
        showAlert = false;
    }
    return 0;
  }

  onMount(() => {
    if(window.innerWidth < 768) {
        setTimeout(() => {
            showAlert = true;
        }, 500);
    }
  })
</script>

<style>
    @keyframes alertAnim {
        0%, 100% {
            transform: translateY(0);
        }

        10% {
            transform: translateY(-8px);
        }
    }
    
    .comic-viewer {
        padding: 15px 0px;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .comic-viewer img {
        width: 98%;
        margin: 0 auto;
    }

    .centered-button-container button {
        margin: 0px 15px;
    }

    .field-row {
        font-size: 15px;
    }

    .notification {
        position: absolute;
        top: 270px;
        animation: alertAnim 0.5s ease 0s 1 normal forwards;
    }
</style>

{#if showAlert}
    <div bind:this={closable} class="window window-box notification" style="margin: 32px;">
        <div class="title-bar">
            <div class="title-bar-text">
                Notice
            </div>
            <div class="title-bar-controls">
                <button on:click={(event) => close(event)} aria-label="Close"></button>
            </div>
        </div>
    <div class="window-body">
        <div class="window-alert">
            <div class="window-alert-img">
                <img class="image" src={alert}>
            </div>
            <p>It looks like you're on a mobile device.<br/><br/>  For a better viewing experience, try visiting this webpage on a desktop computer.
        </div>
        <div class="centered-button-container">
            <button on:click={(event) => close(event)}>Dismiss</button>
        </div>
    </div>
    </div>
{/if}

<div class="window window-box" style="margin: 32px;">
    <div class="title-bar">
      <div class="title-bar-text">
        Issue #1
      </div>
    </div>
    <div class="window-body">
        <div class="centered-button-container">
            <button on:click={(event) => trySetPageState(event, pageState-1)}>&lt;= Prev</button>
            <div class="field-row">
                <input id="text17" style="width: 70px; font-size: 15px;" type="text" value={pageState} on:change={(event) => trySetPageState(event)}/>
            </div>
            <button on:click={(event) => trySetPageState(event, pageState+1)}>Next =&gt;</button>
        </div>
        <div class="comic-viewer">
            <img src={pagesArr[pageState-1]} alt={`Comic page ${pageState}`} loading="lazy" />
        </div>
    </div>
</div>