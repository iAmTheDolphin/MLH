chrome.browserAction.onClicked.addListener(function(tab) {
    alert('icon clicked')
    chrome.tabs.insertCSS("background : #F00")
    document.body.style.backgroundColor="red"
});