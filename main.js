// read app config immediately
chrome.storage.managed.get('dcgAppConfig', function(res) {
  var lastAppConfig = res.dcgAppConfig;

  // listen for changes to app config
  chrome.storage.onChanged.addListener(onAppConfigUpdate);

  function getQueryParams() {
    var extraParams = '';
    if (lastAppConfig) {
      extraParams = 'appconfig=' + lastAppConfig;
    }

    if (!extraParams) return document.location.search;
    if (!document.location.search) return '?' + extraParams;
    return document.location.search + '&' + extraParams;
  }

  // updates the internal iframe to reflect any configuration
  // passed in or changed since the app was launched
  function setIframeURL() {
    var iframe = document.getElementById('iframe');
    var url = 'www/index.html' + getQueryParams();
    iframe.src = url;
  }

  function onAppConfigUpdate(changes, namespace) {
    if (namespace !== 'managed') return;

    var appConfigChange = changes['dcgAppConfig'];
    if (!appConfigChange) return;

    lastAppConfig = appConfigChange.newValue;
    setIframeURL();
  }

  // set the initial iframe url
  setIframeURL();
});
