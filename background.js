chrome.app.runtime.onLaunched.addListener(function(launchData) {
  var queryParams = '';
  if (!!(launchData && launchData.isKioskSession)) {
    queryParams = '?chromeosKioskMode';

    // when in kiosk mode we request that the device display
    // be kept awake. We don't want screens accidentally turning off
    if (chrome.power.requestKeepAwake) {
      chrome.power.requestKeepAwake('display');
    }
  }

  chrome.app.window.create('main.html' + queryParams, {
    outerBounds: {
      width: 800,
      height: 600
    }
  });
});
