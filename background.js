console.log("howdy");
// script that will run when the extension is clicked on a tab
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#0f8b8b"'
  });
});
