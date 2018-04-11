let changeColor = document.getElementById('changeColor');

// This code grabs the button from popup.html and requests the color value from storage.
// It then applies the color as the background of the button.
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// The updated code adds an onclick event the button, which triggers a programatically injected content script.
// Using programmatic injection allows for user-invoked content scripts, 
// instead of auto inserting unwanted code into web pages.
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.executeScript( // Took out tabs[0].id, because it was not being found/declared.
    {code: 'document.body.style.backgroundColor = "' + color + '";'});
};