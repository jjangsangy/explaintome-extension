browser.browserAction.onClicked.addListener(function(tab) {
	console.log('hi')
	chrome.tabs.sendMessage(tab.id, {
		url: tab.url,
		title: tab.title
	});
});
