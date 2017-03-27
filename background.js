chrome.browserAction.onClicked.addListener(function(tab) {
  var url = 'https://explaintome.herokuapp.com?q=' + tab.url;
  chrome.tabs.executeScript({
    code: 'window.open("' + url + '")'
  });
});
