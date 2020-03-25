import load from './load';
import warn from './utils/console/warn';
import log from './utils/console/log';


const _isNotBrowser = typeof window === 'undefined' || typeof document === 'undefined';

let _debug = false;
const _testMode = false;

const interalTv = (...args) => {
  if (_testMode) return false;
  if (_isNotBrowser) return false;
  if (!window.tv) return warn('ReactProview.initialize must be called first or Proview should be loaded manually');
  return window.tv(...args);
};

/**
 * tv:
 * Returns the original tv object.
 */
export function tv(...args) {
  if (args.length > 0) {
    interalTv(...args);
    if (_debug) {
      log('called tv(\'arguments\');');
      log(`with arguments: ${JSON.stringify(args)}`);
    }
  }
  return window.tv;
}

export function defaultCb() {
  log('Pass a callback with err,id,a,v,s parameters');
}


export function init(token, options) {
  const opts = options || {};
  if (!token) {
    warn(' Token is required in init()');
    return;
  }

  if (opts.debug && opts.debug === true) {
    _debug = true;
  }
  opts.clear = opts.clear || true;
  opts.screen = opts.screen || true;
  opts.session = opts.session || `v4${Math.random()}`;
  opts.skipHardwareTest = opts.skipHardwareTest || false;
  opts.initCallback = opts.initCallback || defaultCb;
  if(typeof window.ProctorClient3 === 'undefined') {
    load(opts);
    tv('init', token, opts);
  }

}


export function stop(cb) {
  ProctorClient3.stop(cb); // wrap and promisify
}


export default {
  init,
  tv,
  stop
};
