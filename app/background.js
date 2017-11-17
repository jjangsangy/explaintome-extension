browser.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendMessage(tab.id, {
		url: tab.url,
		title: tab.title
	});
});