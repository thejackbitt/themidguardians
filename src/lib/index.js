// place files you want to import through the `$lib` alias in this folder.

/**
 * @param {string} url
 */
export function navigateTo(url) {
    window.location.href = url;
    return 0;
}
