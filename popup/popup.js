const fast = document.getElementById('fast');

fast.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function() {
        setInterval(() => {
          document.querySelector("iframe[id^='youtube_player_']").parentNode.parentNode.parentNode.dispatchEvent(new KeyboardEvent('keydown', {
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

