chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  window.open('https://explaintome.herokuapp.com?q=' + message.url);
});
