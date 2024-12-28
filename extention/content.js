if (!window.__contentScriptInitialized) {
  window.__contentScriptInitialized = true;

  document.addEventListener("keydown", (event) => {
    chrome.runtime.sendMessage({
      type: "keyPress",
      key: event.key,
      code: event.code,
      url: window.location.href, // Add the current page URL
    });
  });
}
