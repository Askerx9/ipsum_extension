chrome.runtime.onInstalled.addListener(async () => {
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  console.log(tab);
  

  if(tab.id !== undefined) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['script.js'],
    });
  }
});
