var siteToCSS = [
  {site:"facebook.com", sheet:"facebook.css"},
  {site:"messenger.com", sheet:"messenger.css"},
  {site:"play.google.com/music", sheet:"playmusic.css"},
  {site:"plus.google.com", sheet:"plus.css"},
];

var modifyCSS = function() {
  var address = window.location.href;

  for (var i = 0; i < siteToCSS.length; i++) {
    if (address.indexOf(siteToCSS[i].site) > 0) {
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = chrome.extension.getURL(siteToCSS[i].sheet);
      document.getElementsByTagName("head")[0].appendChild(link);
      return;
    }
  }
}

modifyCSS();
