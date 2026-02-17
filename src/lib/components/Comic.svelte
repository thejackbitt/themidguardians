<script>
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
</script>

<style>
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
</style>

<div class="window" style="margin: 32px; width: 600px">
    <div class="title-bar">
      <div class="title-bar-text">
        Issue #1
      </div>
    </div>
    <div class="centered-button-container">
        <button on:click={(event) => trySetPageState(event, pageState-1)}>&lt;= Prev</button>
        <div class="field-row">
            <input id="text17" type="text" value={pageState} on:change={(event) => trySetPageState(event)}/>
        </div>
        <button on:click={(event) => trySetPageState(event, pageState+1)}>Next =&gt;</button>
    </div>
    <div class="comic-viewer">
          <img src={pagesArr[pageState-1]} alt={`Comic page ${pageState}`} loading="lazy" />
    </div>
</div>