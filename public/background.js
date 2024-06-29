chrome.action.onClicked.addListener(tab => {
  chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
});

chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  }
});