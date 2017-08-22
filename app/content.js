runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log('hi')
	window.open('https://explaintome.herokuapp.com?q=' + message.url);
});
