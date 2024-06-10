chrome.action.onClicked.addListener(tab => {
  chrome.tabs.create({ url: 'chrome-extension://adpijdifplimenijoidmijmanfcfjpog/index.html' });
});