  chrome.runtime.onInstalled.addListener(function() {

    // Script that is run.
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });

    // Adding rule to make extention tell browser when the user can interact with popup.html.
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{ // If host equals, then do action.
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

  });