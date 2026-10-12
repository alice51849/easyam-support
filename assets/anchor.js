(function () {
  var map = { "#privacy": "privacy.html", "#support": "support.html", "#terms": "terms.html" };
  var target = map[location.hash];
  if (target) { location.replace(target); }
})();
