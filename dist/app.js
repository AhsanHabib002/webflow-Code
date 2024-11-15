// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"daR04":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports,__globalThis) {
document.addEventListener("DOMContentLoaded", ()=>{
    const plannerFiles = {
        "2024": {
            "Rainbow": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Boho": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Neutral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Blush": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Jewel Tones": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Dusty Floral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Soft Pastel": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care Planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            }
        },
        "2025": {
            "Rainbow": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Boho": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Neutral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Blush": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Dusty Floral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            }
        },
        "Undated": {
            "Rainbow": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Boho": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Neutral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Blush": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Jewel Tones": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Dusty Floral": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            },
            "Soft Pastel": {
                "Sunday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                },
                "Monday": {
                    "Balanced": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Setting Horizontal": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizaontal Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Box Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Horizontal Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical Lined Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Vertical Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Goal Horizaontal Grey": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Half Journal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Canvas": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Productivity": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Minimal": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Manifestation": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "24 Hour planner": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Priority Matrix": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Graph": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Blank": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Self Care": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    },
                    "Lined & Grid": {
                        "dailyLayouts": {
                            "Horizaontal Box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Vertical box": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Blank": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Grid": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf",
                            "Weekly Scheduled": "https://example.com/pdfs/2024-rainbow-sunday-horizontal-balance.pdf"
                        }
                    }
                }
            }
        }
    };
    const optionImages = {
        colors: {
            Rainbow: "https://i.ibb.co.com/cbpPvXJ/Screenshot-2024-11-15-140010.png",
            Boho: "https://i.ibb.co.com/YL18k3k/Screenshot-2024-11-15-140015.png",
            Neutral: "https://i.ibb.co.com/ZNZYzzw/Screenshot-2024-11-15-140021.png",
            Blush: "https://i.ibb.co.com/2K0jbRp/Screenshot-2024-11-15-140027.png",
            "Jewel Tones": "https://i.ibb.co.com/HxsfKKC/Screenshot-2024-11-15-140032.png",
            "Dusty Floral": "https://i.ibb.co.com/LR3CJp5/Screenshot-2024-11-15-140036.png",
            "Soft Pastel": "https://i.ibb.co.com/0CwMc5K/Screenshot-2024-11-15-140044.png"
        },
        weeklyStart: {
            Sunday: "https://i.ibb.co.com/LtnvgG0/Screenshot-2024-11-15-190202.png",
            Monday: "https://i.ibb.co.com/RPnzdhf/Screenshot-2024-11-15-190206.png"
        },
        dailyLayout: {
            "Horizaontal Box": "https://i.ibb.co.com/6mrfC3N/2.png",
            "Vertical box": "https://i.ibb.co.com/MpgJk4r/3.png",
            "Weekly Blank": "https://i.ibb.co.com/bN484tb/4.png",
            "Weekly Grid": "https://i.ibb.co.com/30r29dp/5.png",
            "Weekly Scheduled": "https://i.ibb.co.com/ChRYP8V/1.png",
            "Horizontal Lined": "https://i.ibb.co.com/QXC8t47/6.png",
            "Vertical Lined": "https://i.ibb.co.com/v1mG9q1/7.png",
            "Goal Setting Horizontal": "https://i.ibb.co.com/1KYRN19/8.png",
            "Weekly Scheduled Grey": "https://i.ibb.co.com/Ns36pQd/9.png",
            "Horizaontal Box Grey": "https://i.ibb.co.com/fx8sHtJ/10.png",
            "Vertical Box Grey": "https://i.ibb.co.com/L09YZdm/11.png",
            "Weekly Blank Grey": "https://i.ibb.co.com/F520v2q/12.png",
            "Weekly Grid Grey": "https://i.ibb.co.com/Y847r03/13.png",
            "Horizontal Lined Grey": "https://i.ibb.co.com/Y847r03/13.png",
            "Vertical Lined Grey": "https://i.ibb.co.com/KFqcMxY/15.png",
            "Goal Vertical Grey": "https://i.ibb.co.com/bv2jBD3/16.png",
            "Goal Horizaontal Grey": "https://i.ibb.co.com/hZv2Mn9/17.png"
        },
        weeklyLayout: {
            "Balanced": "https://i.ibb.co.com/drgwnvg/63a97a42e4c9ebc5838d6a03-1-Balanced-p-500.jpg",
            "Half Journal": "https://i.ibb.co.com/tMvf9pm/half-j.jpg",
            "Canvas": "https://i.ibb.co.com/6vHp1mn/canvas.jpg",
            "Productivity": "https://i.ibb.co.com/6nDpnw0/pr.jpg",
            "Minimal": "https://i.ibb.co.com/x3fZ2ks/mini.jpg",
            "Manifestation": "https://i.ibb.co.com/6t99n2P/main.jpg",
            "24 Hour planner": "https://i.ibb.co.com/QkSLDJB/24.png",
            "Self Care Planner": "https://i.ibb.co.com/x54WcGb/self.jpg",
            "Priority Matrix": "https://i.ibb.co.com/3cSTKSL/prio.jpg",
            "Graph": "https://i.ibb.co.com/tcnwmVd/gr.jpg",
            "Self Care": "https://i.ibb.co.com/x54WcGb/self.jpg",
            "Journal": "https://i.ibb.co.com/wJpQzsW/jr.jpg",
            "Blank": "https://i.ibb.co.com/ZTktR0T/bl.jpg",
            "Lined & Grid": "https://i.ibb.co.com/Nym9fQP/l-G.jpg"
        }
    };
    let currentStep = 1;
    let selectedYear = null;
    let selectedColor = null;
    let selectedWeeklyStart = null;
    let selectedWeeklyLayout = null;
    const steps = document.querySelectorAll(".step");
    const colorOptionsDiv = document.getElementById("colorOptions");
    const weeklyStartOptionsDiv = document.getElementById("weeklyStartOptions");
    const weeklyLayoutOptionsDiv = document.getElementById("weeklyLayoutOptions");
    const dailyLayoutOptionsDiv = document.getElementById("dailyLayoutOptions");
    function showStep(step) {
        steps.forEach((stepElement, index)=>{
            stepElement.style.display = index + 1 === step ? "block" : "none";
        });
    }
    // Step 1: Choose Year
    document.querySelectorAll(".year-option").forEach((button)=>{
        button.addEventListener("click", ()=>{
            selectedYear = button.dataset.year;
            const colors = Object.keys(plannerFiles[selectedYear]);
            colorOptionsDiv.innerHTML = colors.map((color)=>`
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.colors[color]}" alt="${color}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${color}</span>
              <button class="color-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-color="${color}">Choose Theme</button>
            </div>
          `).join("");
            currentStep++;
            showStep(currentStep);
        });
    });
    // Step 2: Choose Color
    colorOptionsDiv.addEventListener("click", (event)=>{
        if (event.target.classList.contains("color-option")) {
            selectedColor = event.target.dataset.color;
            const weeklyStarts = Object.keys(plannerFiles[selectedYear][selectedColor]);
            weeklyStartOptionsDiv.innerHTML = weeklyStarts.map((start)=>`
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.weeklyStart[start]}" alt="${start}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${start} Start</span>
              <button class="weekly-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-weekly="${start}">Choose</button>
            </div>
          `).join("");
            currentStep++;
            showStep(currentStep);
        }
    });
    // Step 3: Choose Weekly Start
    weeklyStartOptionsDiv.addEventListener("click", (event)=>{
        if (event.target.classList.contains("weekly-option")) {
            selectedWeeklyStart = event.target.dataset.weekly;
            const weeklyLayouts = Object.keys(plannerFiles[selectedYear][selectedColor][selectedWeeklyStart]);
            weeklyLayoutOptionsDiv.innerHTML = weeklyLayouts.map((layout)=>`
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.weeklyLayout[layout]}" alt="${layout}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${layout}</span>
              <button class="weekly-layout-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" data-layout="${layout}">Select</button>
            </div>
          `).join("");
            currentStep++;
            showStep(currentStep);
        }
    });
    // Step 4: Choose Weekly Layout
    weeklyLayoutOptionsDiv.addEventListener("click", (event)=>{
        if (event.target.classList.contains("weekly-layout-option")) {
            selectedWeeklyLayout = event.target.dataset.layout;
            const dailyLayouts = plannerFiles[selectedYear][selectedColor][selectedWeeklyStart][selectedWeeklyLayout].dailyLayouts;
            dailyLayoutOptionsDiv.innerHTML = Object.entries(dailyLayouts).map(([layout, pdf])=>`
            <div class="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-[400px] h-[380px]">
              <img src="${optionImages.dailyLayout[layout]}" alt="${layout}" class="mb-2 w-[350px] h-[260px]">
              <span class="font-semibold mb-2">${layout}</span>
              <a href="${pdf}" class="daily-layout-option btn border border-solid border-pink-600 boreder-[1px] rounded-md p-3 text-pink-600" target="_blank">Download PDF</a>
            </div>
          `).join("");
            currentStep++;
            showStep(currentStep);
        }
    });
    // Back Button
    document.querySelectorAll(".prev-btn").forEach((button)=>{
        button.addEventListener("click", ()=>{
            currentStep--;
            showStep(currentStep);
        });
    });
});

},{}]},["daR04","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
