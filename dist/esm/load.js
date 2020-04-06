export default function (opts) {
  var version = opts.version || 4;
  var defaultUrl = version == 5 ? '//cdn.proview.io/v5/init.js' : '//cdn.proview.io/init.js';
  var url = opts.url || defaultUrl;
  /* eslint-disable */

  (function (i, s, o, g, r, a, m) {
    i['TalviewProctor'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', url, 'tv');
  /* eslint-enable */

}