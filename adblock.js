let enabled = false;

const hideElements = () => {
  const elements = document.querySelectorAll("[id^='google_ads']");
  for (let element of elements) {
    element.style.display = "none";
  }
};

const toggleAdblock = () => {
  enabled = !enabled;
  if (enabled) {
    hideElements();
  } else {
    const elements = document.querySelectorAll("[id^='google_ads']");
    for (let element of elements) {
      element.style.display = "block";
    }
  }
};

document.addEventListener("DOMContentLoaded", toggleAdblock);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "toggle") {
    toggleAdblock();
    sendResponse({ message: "Adblock toggled" });
  }
});
