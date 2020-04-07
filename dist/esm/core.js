import load from './load';
import warn from './utils/console/warn';
import log from './utils/console/log';

var _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

var _debug = false;
var _testMode = false;

var interalTv = function interalTv() {
  var _window;

  if (_testMode) return false;
  if (_isNotBrowser) return false;
  if (!window.tv) return warn('ReactProview.initialize must be called first or Proview should be loaded manually');
  return (_window = window).tv.apply(_window, arguments);
};
/**
 * tv:
 * Returns the original tv object.
 */


export function tv() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length > 0) {
    interalTv.apply(void 0, args);

    if (_debug) {
      log('called tv(\'arguments\');');
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.tv;
}
export function defaultCb() {
  log('Pass a callback with err,id,a,v,s parameters');
}
export function init(token, options) {
  var opts = options || {};

  if (!token) {
    warn(' Token is required in init()');
    return;
  }

  if (opts.debug && opts.debug === true) {
    _debug = true;
  }

  opts.clear = opts.clear || true;
  opts.screen = opts.screen || false;
  opts.session = opts.session || "v4".concat(Math.random());
  opts.skipHardwareTest = opts.skipHardwareTest || false;
  opts.initCallback = opts.initCallback || defaultCb;
  opts.flash = false;

  if (typeof window.ProctorClient3 === 'undefined') {
    load(opts);
    tv('init', token, opts);
  }
}
export function stop(cb) {
  ProctorClient3.stop(cb); // wrap and promisify
}
export default {
  init: init,
  tv: tv,
  stop: stop
};