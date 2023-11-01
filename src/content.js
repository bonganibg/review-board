// content.js
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
  });
  