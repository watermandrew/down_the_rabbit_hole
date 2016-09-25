// Referenced "Stylizer" app found at https://developer.chrome.com/extensions/samples
var message = document.querySelector('#message');
var icon = 0;

    chrome.tabs.insertCSS({code: "._a7s:hover{cursor:not-allowed} ._a7s > *{pointer-events:none;} .UFICommentActions:hover{cursor:not-allowed} .UFICommentActions > *{pointer-events:none;} "}, function() {
      if (chrome.runtime.lastError) {
        message.innerText = 'Sorry! Stealth mode cannot be enabled on this page.';
      } else {
        message.innerText = 'Stealth mode enabled!';

        function iconSwap() {
          if (icon == 1) {
          chrome.browserAction.setIcon({path:"blackIcon.png"});
          icon = 0;
        }
        else {
          console.log("poo");
          chrome.browserAction.setIcon({path: "greenIcon.png"});
          icon = 1;
        }
        }

        chrome.browserAction.onClicked.addListener(iconSwap);
        iconSwap();

        function resetIcon() {
          chrome.browserAction.setIcon({path:"blackIcon.png"});
        }

        chrome.tabs.onUpdated.addListener(resetIcon);
        resetIcon();
      }
    });
