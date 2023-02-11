var toggleAdBlocker = document.getElementById('toggleAdBlocker');

chrome.runtime.sendMessage({ method: 'getAdBlockerStatus' }, function(response) {
  if (response.adBlockerEnabled === true) {
    toggleAdBlocker.innerHTML = 'Turn off AdBlocker';
    toggleAdBlocker.style.backgroundColor = '#f44336';
  } else {
    toggleAdBlocker.innerHTML = 'Turn on AdBlocker';
    toggleAdBlocker.style.backgroundColor = '#4CAF50';
  }
});

toggleAdBlocker.addEventListener('click', function() {
  chrome.runtime.sendMessage({ method: 'toggleAdBlocker' }, function(response) {
    if (response.adBlockerEnabled === true) {
      toggleAdBlocker.innerHTML = 'Turn off AdBlocker';
      toggleAdBlocker.style.backgroundColor = '#f44336';
    } else {
      toggleAdBlocker.innerHTML = 'Turn on AdBlocker';
      toggleAdBlocker.style.backgroundColor = '#4CAF50';
    }
  });
});
