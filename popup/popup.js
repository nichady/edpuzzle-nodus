const fast = document.getElementById('fast');
const videlement = document.querySelector("div._3ah6yl5wU0");

fast.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function() {
        const videlement = document.querySelector("div._3ah6yl5wU0");
        setInterval(() => {
          videlement.dispatchEvent(new KeyboardEvent('keydown', {
            bubbles: true,
            code: "ArrowRight",
            key: "ArrowRight",
            keyCode: 39,
            type: "keydown",
            which: 39,
          }));
        }, 100);
      }
    });
  });
}

