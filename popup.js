// Referenced "Stylizer" app found at https://developer.chrome.com/extensions/samples
var message = document.querySelector('#message');

    chrome.tabs.insertCSS({code: "._a7s:hover{cursor:not-allowed} ._a7s > *{pointer-events:none;} .UFICommentActions:hover{cursor:not-allowed} .UFICommentActions > *{pointer-events:none;} "}, function() {
      if (chrome.runtime.lastError) {
        message.innerText = 'Sorry! Stealth mode cannot be enabled on this page.';
      } else {
        message.innerText = 'Stealth mode enabled!';
      }
    });
