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
        this
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
})({"7mgxS":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _state = require("./state");
var _router = require("./router");
var _text = require("./components/text");
var _buttom = require("./components/buttom");
var _papel = require("./components/move/papel");
var _piedra = require("./components/move/piedra");
var _tijeras = require("./components/move/tijeras");
var _counter = require("./components/counter");
var _star = require("./components/star");
function initApp(param) {
    _state.state.init();
    _router.initRouter(param);
    _text.initText();
    _buttom.initButton();
    _papel.initPapel();
    _piedra.initPiedra();
    _tijeras.initTijeras();
    _counter.initCounter();
    _star.initStar();
}
(function() {
    const root = document.querySelector(".root");
    initApp(root);
    console.log(_state.state.getState());
})();

},{"./router":"4QFWt","./state":"1Yeju","./components/text":"6Xncd","./components/buttom":"jHb3x","./components/move/papel":"9G7aA","./components/move/piedra":"ii9ku","./components/move/tijeras":"GRa4K","./components/counter":"9ZXz4","./components/star":"bmR2S"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _loose = require("./pages/result/loose");
var _tie = require("./pages/result/tie");
var _win = require("./pages/result/win");
const routes = [
    {
        path: /\/inicio/,
        handler: _welcome.initWelcomePage
    },
    {
        path: /\/instrucciones/,
        handler: _instructions.initInstructionsPage
    },
    {
        path: /\/juego/,
        handler: _play.initPlayPage
    },
    {
        path: /\/derrota/,
        handler: _loose.initLoose
    },
    {
        path: /\/empate/,
        handler: _tie.initTie
    },
    {
        path: /\/victoria/,
        handler: _win.initWin
    }, 
];
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.handler({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            console.log(el), container.appendChild(el);
        }
    }
    if (location.host.includes("github.io")) goTo("/inicio");
    else if (location.pathname == "/") goTo("/inicio");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","./pages/play":"hbEIY","./pages/result/loose":"9hWST","./pages/result/tie":"aSa00","./pages/result/win":"5dabb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
function initWelcomePage(params) {
    const style = document.createElement("style");
    style.innerHTML = `
        *{
            box-sizing: border-box;
        }
        body{
            margin:0;
        
        }
        .container{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;
            height: 100vh;
            padding:20px;
            gap:20px;
        }
        @media (min-width: 769px) {
            .container {
               
                height: inherit;
            }
          }
        .separacion{
            margin-top:100px;
            color:red;
        }
        .mostrar{
            display:none;
        }
        .buttom-container{
            width:100%;
            max-width:404px;
        }
        .text-container{
            padding:40px;
            max-width:317px;
        }
        .move-container{
            display:flex;
            width:100%;
            position: fixed;
            bottom: 10px;
            height: 150px;
            justify-content: center;
            padding:0 5px;
        }
        @media (min-width: 769px) {
            .move-container{
                height: 21.277481vh;
                width:500px;
                padding:0;
                gap:67px;
            }
        }
        
        .hand{
            
        }
        @media (min-width: 769px) {
            .hand{
                width:100%;
            }
        }
        .desktop{}
        @media (min-width: 769px) {
            .desktop{
                display:flex;
                width:100%;
                
                justify-content: center;
            }
        }
        
    `;
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="container">
            <div class="text-container">
                 <text-comp variant="title">Piedra Papel ó Tijeras</text-comp>
            </div>
            <div class="buttom-container">
                <button-comp class="next">¡Jugar!</button-comp>
            </div>  
        </div>       
        <div class="desktop"><div class="move-container">
                <div class="hand "><papel-mov></papel-mov></div>
                <div class="hand "><piedra-mov></piedra-mov></div>
                <div class="hand "><tijeras-mov></tijeras-mov></div>
        </div>        
        </div>
    `;
    const next = div.querySelector(".next");
    next.addEventListener("click", ()=>{
        params.goTo("/instrucciones");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage
);
var _state = require("../../state");
function initInstructionsPage(params) {
    const style = document.createElement("style");
    style.innerHTML = `
    *{
        box-sizing: border-box;
    }
    body{
        margin:0;
    }
    .container{
        
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: baseline;
        height: 100vh;
        padding:20px;
        gap:20px;
    }
    @media (min-width: 769px) {
        .container{margin-top:10%;}
    }
    .separacion{
        margin-top:100px;
        color:red;
    }
    .mostrar{
        display:none;
    }
    .buttom-container{
        width:100%;
        max-width:404px;
        
    }
    .text-container{
        padding:40px;
        max-width:317px;
    }
    @media (min-width: 769px) {
        .text-container{
            padding:0;
            max-width:317px;
        }
    }
    .move-container{
        display:flex;
        width:100%;
        position: fixed;
        bottom: 10px;
        height: 150px;
        justify-content: center;
    }
    @media (min-width: 769px) {
        .move-container{
            height: 21.277481vh;
            width:500px;
            padding:0;
            gap:67px;
        }
    }
    .hand{
        
    }
    @media (min-width: 769px) {
        .hand{
            width:100%;
        }
    }
    .desktop{}
    @media (min-width: 769px) {
        .desktop{
            display:flex;
            width:100%;
            
            justify-content: center;
        }
    }
    `;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="container">
    <div class="text-container">
         <text-comp variant="body">Presioná jugar
         y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </text-comp>
    </div>
    <div class="buttom-container">
        <button-comp class="next">¡Jugar!</button-comp>
    </div>    
</div>     
<div class="desktop"> <div class="move-container">
        <div class="hand"><papel-mov></papel-mov></div>
        <div class="hand"><piedra-mov></piedra-mov></div>
        <div class="hand"><tijeras-mov></tijeras-mov></div>
</div></div>
    `;
    const next = div.querySelector(".next");
    next.addEventListener("click", ()=>{
        _state.state.addCurrentPlay("", "");
        params.goTo("/juego");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        histoy: []
    },
    listeners: [],
    init () {
        let localData = localStorage.getItem("saved-state");
        if (localData !== null) this.setState(JSON.parse(localData));
        else this.setState({
            currentGame: {
                computerPlay: "",
                myPlay: ""
            },
            histoy: []
        });
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    addCurrentPlay (myPlay, computerPlay) {
        const data = this.getState();
        const newData = {
            ...data,
            currentGame: {
                myPlay: myPlay,
                computerPlay: computerPlay
            }
        };
        this.setState(newData);
        this.whoWins({
            myPlay,
            computerPlay
        });
    },
    whoWins (jugada) {
        const data = this.getState();
        const ganeConTijeras = jugada.myPlay == "tijeras" && jugada.computerPlay == "papel";
        const ganeConPiedra = jugada.myPlay == "piedra" && jugada.computerPlay == "tijeras";
        const ganeConPapel = jugada.myPlay == "papel" && jugada.computerPlay == "piedra";
        const gane = [
            ganeConPiedra,
            ganeConTijeras,
            ganeConPapel
        ].includes(true);
        const perdiConTijeras = jugada.myPlay == "tijeras" && jugada.computerPlay == "piedra";
        const perdiConPiedra = jugada.myPlay == "piedra" && jugada.computerPlay == "papel";
        const perdiConPapel = jugada.myPlay == "papel" && jugada.computerPlay == "tijeras";
        const perdi = [
            perdiConPiedra,
            perdiConPapel,
            perdiConTijeras
        ].includes(true);
        if (gane == true) {
            data.histoy.push(1);
            this.setState(data);
            console.log(this.getState("gane"));
        } else if (perdi == true) {
            data.histoy.push(0);
            this.setState(data);
            console.log(this.getState("perdi"));
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlayPage", ()=>initPlayPage
);
var _state = require("../../state");
function cpuPlayed() {
    const numberRandom = Math.floor(Math.random() * 3 + 1 - 1);
    const chose = [
        "piedra",
        "papel",
        "tijeras"
    ];
    const randomChose = chose[numberRandom];
    return randomChose;
}
function initPlayPage(params) {
    function pcImg(param) {
        if (param == "piedra") piedraPc.style.display = "inherit";
        else if (param == "papel") papelPc.style.display = "inherit";
        else if (param == "tijeras") tijerasPc.style.display = "inherit";
    }
    const style = document.createElement("style");
    style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            .container{
                width:100%;
                display:flex;
                justify-content: center;
            }
            .counter{
                color:red;
                margin-top:20vh;
                width:15rem;  
            }
    
            .move-cont{
                position: fixed;
                bottom: -40px;
            }
            .papel{
                
            }
            .piedra{
                
                
            }
            .tijeras{
                
            }
            .move-container{
                display:flex;
                position: fixed;
                bottom: 10px;
                height: 150px;
                width:100%;
                justify-content: center;
            }
            @media (min-width: 769px) {
                .move-container{
                    height: 21.277481vh;
                    width:500px;
                    padding:0;
                    gap:67px;
                }
            }
            .mover{
                margin-top:200px;
            }  
            .selected{
                display:flex;
                width:100%;
                justify-content: center;
                height: 200px;
                position: fixed;
                bottom: 0;
            }
            .move-pc{
                position: fixed;
                top: 0px;
                left: 35%;
                transform: rotate(180deg);
                display:none;
            }
            @media (min-width: 769px) {
                .move-pc{
                    left:45%
                }
            }
            
                
            
            .pcAnimation{
                animation-duration: 3s;
                animation-name: slidein;
              }
              
              @keyframes slidein {
                from {
                    margin-bottom: 100px;
                    height: 50px;
                }
              
                to {
                  
                  margin-top: 34%;
                  height: 50px;
                }
            }
            @media (min-width: 769px) {
                .pcAnimation{
                    animation-duration: 3s;
                    animation-name: slidein;
                  }
                  
                  @keyframes slidein {
                    from {
                        margin-bottom: 100px;
                        height: 50px;
                    }
                  
                    to {
                      
                      margin-top: 10%;
                      height: 50px;
                    }
                }
            }
            .user-move{
                position: fixed;
                bottom: 0;
                left: 35%;
                height: 350px;
                
                display:none;
                
            }
            @media (min-width: 769px) {
                .user-move{
                    left: 45%;
                }
            }
            .userAnimation{
                animation-duration: 3s;
                animation-name: toTop;
              }
              
              @keyframes toTop {
                from {
                    margin-top: 60%;
                    height: 100px;
                }
              
                to {
                    margin-bottom: 140px;
                    height: 50px;
                  
                }
              }
              @media (min-width: 769px) {
                .userAnimation{
                    animation-duration: 3s;
                    animation-name: toTop;
                  }
                  
                  @keyframes toTop {
                    from {
                        margin-top: 60%;
                        height: 100px;
                    }
                  
                    to {
                        margin-bottom: 160px;
                        height: 50px;
                      
                    }
                  }
              }
            .desktop{}
            @media (min-width: 769px) {
            .desktop{
                display:flex;
                width:100%;
                justify-content: center;
                 }
            }
    `;
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="container">
                <div  class="counter"><counter-comp></counter-comp></div>
        </div>  
        
        
        <div class="desktop"><div class="move-container">
                <div class="papel"><papel-mov></papel-mov></div>
                <div class="piedra"><piedra-mov></piedra-mov></div>
                <div class="tijeras" "><tijeras-mov></tijeras-mov></div>
        </div></div>
                <div class="user-move user-papel userAnimation"><papel-mov></papel-mov></div>
                <div class="user-move user-piedra userAnimation"><piedra-mov></piedra-mov></div>
                <div class="user-move user-tijeras userAnimation"><tijeras-mov></tijeras-mov></div>
                
                <div  class="move-pc papel-pc pcAnimation"><papel-mov></papel-mov></div>
                <div  class="move-pc piedra-pc pcAnimation"><piedra-mov></piedra-mov></div>
                <div class="move-pc tijeras-pc pcAnimation"><tijeras-mov></tijeras-mov></div>
               
        
    `;
    div.appendChild(style);
    const tijerasPc = div.querySelector(".tijeras-pc");
    const piedraPc = div.querySelector(".piedra-pc");
    const papelPc = div.querySelector(".papel-pc");
    const counter = div.querySelector(".counter");
    const tijeras = div.querySelector(".tijeras");
    const piedra = div.querySelector(".piedra");
    const papel = div.querySelector(".papel");
    const userTijeras = div.querySelector(".user-tijeras");
    const userPapel = div.querySelector(".user-papel");
    const userPiedra = div.querySelector(".user-piedra");
    papel.addEventListener("click", (e)=>{
        counter.style.display = "none";
        piedra.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        userPapel.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("papel", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.computerPlay == "piedra") params.goTo("/result/victoria");
            else if (_state.state.getState().currentGame.computerPlay == "tijeras") params.goTo("/result/derrota");
            else params.goTo("/result/empate");
        }, 3000);
        pcImg(cpuChose);
    });
    piedra.addEventListener("click", (e)=>{
        papel.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userPiedra.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("piedra", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.computerPlay == "tijeras") params.goTo("/result/victoria");
            else if (_state.state.getState().currentGame.computerPlay == "papel") params.goTo("/result/derrota");
            else params.goTo("/result/empate");
        }, 3000);
        pcImg(cpuChose);
    });
    tijeras.addEventListener("click", (e)=>{
        papel.style.display = "none";
        piedra.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userTijeras.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("tijeras", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.computerPlay == "papel") params.goTo("/result/victoria");
            else if (_state.state.getState().currentGame.computerPlay == "piedra") params.goTo("/result/derrota");
            else params.goTo("/result/empate");
        }, 3000);
        pcImg(cpuChose);
    });
    setTimeout(()=>{
        console.log(_state.state.getState());
        if (_state.state.getState().currentGame.myPlay == "") params.goTo("/instrucciones");
    }, 4000);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"9hWST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLoose", ()=>initLoose
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initLoose(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
            *{
                margin:0;
                
                box-sizing: border-box;
            }
            body {
                background-color: rgba(255, 0, 0, 0.6);
                
              }
            .container{
                background-color: white;
                display:flex;
                height: 217px;
                flex-direction: column;
                gap:10px;
                margin: 0 58px 0 58px;
                border:solid 10px black;
                justify-content: space-evenly;
            }
            @media (min-width: 769px) {
                .container{
                    width:404px;
                }}
            .h3-container{
                display:flex;
                width: 100%;
                flex-direction: column;
                justify-content: end;
                align-items: flex-end;
                text-align: end;
            }
            .h2-container{
                
            }
            .h2{
                text-align: center;
                font-size: 55px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .h3{
                text-align: center;
                font-size: 45px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .buttom-container{
                padding:20px;
            }
            @media (min-width: 769px) {
                .buttom-container{
                    
                    width:424px;
                }}
            .center{
                height: 100vh;
                display:flex;
                flex-direction: column;
                justify-content: center;
            }
            @media (min-width: 769px) {
                .desktop{
                    width:100%;
                    display:flex;
                    justify-content:center;
                }}
            
    `;
    div.innerHTML = `
    <div class="center">
    <star-comp>perdiste</star-comp>
    <div class="desktop"><div class="container">
            <h2 class="h2">Score<h2>
            <div class="h3-container">
                <h3 class="h3">Vos: ${counterWins().user}   </h3>
                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>
            </div>
    </div></div>
    <div class="desktop"><div class="buttom-container"><button-comp class="next">volver a jugar</button-comp></div></div>
    </div>
    
                
    `;
    div.appendChild(style);
    const next = div.querySelector(".next");
    next.addEventListener("click", ()=>{
        params.goTo("/instrucciones");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../state":"1Yeju"}],"aSa00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTie", ()=>initTie
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initTie(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
            *{
                margin:0;
                
                box-sizing: border-box;
            }
            body {
                background-color: rgba(181 ,178 ,178, 0.6);
                
              }
            .container{
                background-color: white;
                display:flex;
                height: 217px;
                flex-direction: column;
                gap:10px;
                margin: 0 58px 0 58px;
                border:solid 10px black;
                justify-content: space-evenly;
            }
            @media (min-width: 769px) {
                .container{
                    width:404px;
                }}
            .h3-container{
                display:flex;
                width: 100%;
                flex-direction: column;
                justify-content: end;
                align-items: flex-end;
                text-align: end;
            }
            .h2-container{
                
            }
            .h2{
                text-align: center;
                font-size: 55px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .h3{
                text-align: center;
                font-size: 45px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .buttom-container{
                padding:20px;
            }
            @media (min-width: 769px) {
                .buttom-container{
                    
                    width:424px;
                }}
            .center{
                height: 100vh;
                display:flex;
                flex-direction: column;
                justify-content: center;
            }
            @media (min-width: 769px) {
                .desktop{
                    width:100%;
                    display:flex;
                    justify-content:center;
                }}
            
    `;
    div.innerHTML = `
    <div class="center">
    <text-comp variant="tie">Empate</text-comp>
    <div class="desktop"><div class="container">
            <h2 class="h2">Score<h2>
            <div class="h3-container">
                <h3 class="h3">Vos: ${counterWins().user}   </h3>
                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>
            </div>
    </div></div>
    <div class="desktop"><div class="buttom-container"><button-comp class="next">volver a jugar</button-comp></div></div>
    </div>
    
                
    `;
    div.appendChild(style);
    const next = div.querySelector(".next");
    next.addEventListener("click", ()=>{
        params.goTo("/instrucciones");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../state":"1Yeju"}],"5dabb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWin", ()=>initWin
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initWin(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
            *{
                margin:0;
                
                box-sizing: border-box;
            }
            body {
                background-color: rgba(0, 255, 0, 0.5);
                
              }
            .container{
                display:flex;
                height: 217px;
                flex-direction: column;
                gap:10px;
                margin: 0 58px 0 58px;
                border:solid 10px black;
                justify-content: space-evenly;
                background-color: white;
                    
                  
            }
            @media (min-width: 769px) {
                .container{
                    width:404px;
                }}
            .h3-container{
                display:flex;
                width: 100%;
                flex-direction: column;
                justify-content: end;
                align-items: flex-end;
                text-align: end;
            }
            .h2-container{
            }
            .h2{
                text-align: center;
                font-size: 55px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .h3{
                text-align: center;
                font-size: 45px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
            }
            .buttom-container{
                padding:20px ;
                
            }
            @media (min-width: 769px) {
                .buttom-container{
                    
                    width:424px;
                }}
            .center{
                height: 100vh;
                display:flex;
                flex-direction: column;
                justify-content: center;
            }
            @media (min-width: 769px) {
            .desktop{
                width:100%;
                display:flex;
                justify-content:center;
            }}
    `;
    div.innerHTML = `
    <div class="center">
    <star-comp variant="win">Ganaste</star-comp>
    <div class="desktop"><div class="container">
            <h2 class="h2">Score<h2>
            <div class="h3-container">
                <h3 class="h3">Vos: ${counterWins().user}   </h3>
                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>
            </div>
    </div></div>
    <div class="desktop"><div class="buttom-container"><button-comp class="next">volver a jugar</button-comp></div></div>
    </div>
                
    `;
    div.appendChild(style);
    const next = div.querySelector(".next");
    next.addEventListener("click", ()=>{
        params.goTo("/instrucciones");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../state":"1Yeju"}],"6Xncd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText
);
function initText() {
    class TextElement extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .title{
                font-size: 80px;
                font-weight: bold;
                font-family: 'Odibee Sans', cursive;;
                color:#009048;
                text-align:center;
            }
            .body{
                font-size: 40px;
                font-family: 'Odibee Sans', cursive;;
                color:#000000;
                text-align:center;
            }
            .tie{
                font-size: 90px;
                font-weight: bold;
                font-family: 'Odibee Sans', cursive;;
                color:black;
                text-align:center;
                margin-bottom:20px;
                text-decoration: underline;    
            }
           
            
            `;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.appendChild(style);
            var div = document.createElement("div");
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
        }
    }
    customElements.define('text-comp', TextElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHb3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton
);
function initButton() {
    class ButtonElement extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const content = this.textContent;
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .button{
                width:100%;
                color:#D8FCFC;
                background-color: #006CFC;
                border:10px solid #001997;
                font-size:45px;
                font-family:"Odibee Sans";
                border-radius: 10px;
                cursor: pointer;
                
            }
            .button:hover {
                background-color: #2f44ad;
              }
            `;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.appendChild(style);
            var div = document.createElement("button");
            div.classList.add("button");
            div.innerText = content;
            shadow.appendChild(div);
        }
    }
    customElements.define('button-comp', ButtonElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9G7aA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPapel", ()=>initPapel
);
const papel = require("url:../../img/papel.png");
function initPapel() {
    class PiedraMov extends HTMLElement {
        shadow = this.attachShadow({
            mode: 'open'
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const who = this.getAttribute("who");
            let style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .img{
                width:100%;
                height: 190px;
                cursor: pointer;
            }
            
            
            .active{
                height: 500px;
                color: aqua;
                margin:20px;
            }
            @media (min-width: 769px) {
                .img{
               width:100%;
               height: 250px;
                }
                .img:hover {
             height: 300px;
          }
           }
            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `
                <div class="move-container">
                    <div>
                        <img src=${papel} class="img" >
                    </div>
                </div>
            
            `;
            div.className = who;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('papel-mov', PiedraMov);
}

},{"url:../../img/papel.png":"2nKnS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nKnS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "papel.26fa0fee.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ii9ku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPiedra", ()=>initPiedra
);
const piedra = require("url:../../img/piedra.png");
function initPiedra() {
    class PiedraMov extends HTMLElement {
        shadow = this.attachShadow({
            mode: 'open'
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            let style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            .img{
                width:100%;
                height: 190px;
                cursor: pointer;
            }
            @media (min-width: 769px) {
                 .img{
                width:100%;
                height: 250px;
                
            }
            .img:hover {
                height: 300px;
              }
            }
            
            
            .container{
                width:100%;
                
            }
            
            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `
                <div class="move-container">
                    <div>
                        <img src=${piedra} class="img" who="piedra">
                    </div>
                
                
                </div>
            
            `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('piedra-mov', PiedraMov);
}

},{"url:../../img/piedra.png":"6G2ao","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6G2ao":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "piedra.a2cfd8de.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"GRa4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTijeras", ()=>initTijeras
);
const tijeras = require("url:../../img/tijera.png");
function initTijeras() {
    class TijerasMov extends HTMLElement {
        shadow = this.attachShadow({
            mode: 'open'
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            let style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            
            .container{
                width:100%;
                
                
            }
           
            
            .img{
                width:100%;
                height: 190px;
                cursor: pointer;
            }
            @media (min-width: 769px) {
                .img{
               width:100%;
               height: 250px;
               
           }
           .img:hover {
            height: 300px;
          }
           }
            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `
                <div class="move-container">
                    <div>
                    <img src=${tijeras} class="img" who="tijeras">
                    </div>
                </div>
            
            `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('tijeras-mov', TijerasMov);
}

},{"url:../../img/tijera.png":"bmOaD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmOaD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "tijera.acdbf551.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9ZXz4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounter", ()=>initCounter
);
function initCounter() {
    class CounterElement extends HTMLElement {
        shadow = this.attachShadow({
            mode: 'open'
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        counter() {
            let contador = 4;
            let interval = setInterval(()=>{
                contador--;
                if (contador == 3) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "3";
                } else if (contador == 2) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "2";
                } else if (contador == 1) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "1";
                } else clearInterval(interval);
            }, 1000);
            return interval;
        }
        render() {
            this.counter();
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            .circulo {
                width: 15rem;
                height: 15rem;
                border-radius: 50%;
                background-color: color|transparent|initial|inherit;
                opacity: 1;
                border:solid 20px black;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin:0px auto;
                padding:3%;
            }
            .counter{
                width:100%;
                color:black;
                font-size:150px;
                font-family:"Odibee Sans";
                text-align: center;
            }
            `;
            this.shadow.appendChild(style);
            var div = document.createElement("div");
            div.classList.add("counter");
            div.classList.add("circulo");
            this.shadow.appendChild(div);
        }
    }
    customElements.define('counter-comp', CounterElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmR2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStar", ()=>initStar
);
const starLoose = require("url:../../img/loose.png");
const starWin = require("url:../../img/win.png");
function initStar() {
    class Star extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant");
            var style = document.createElement('style');
            style.textContent = `
            *{
                box-sizing: border-box;
            }
            .contenedor{
                position: relative;
                display: inline-block;
                text-align: center;
                width: 100%;
            }
            
            
            .centrado{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Odibee Sans', cursive;;
                font-size: 55px;
                color: #FFFFFF;
            }
            `;
            let content = this.textContent;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.appendChild(style);
            let star = "";
            if (variant == "win") star = starWin;
            else star = starLoose;
            var div = document.createElement("div");
            div.innerHTML = `<div class="contenedor">
            <img src=${star} />
        
            <div class="centrado">${content}</div>
          </div>`;
            shadow.appendChild(div);
        }
    }
    customElements.define('star-comp', Star);
}

},{"url:../../img/loose.png":"8CMW0","url:../../img/win.png":"2Hh5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CMW0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "loose.64898c50.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2Hh5t":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "win.f1a49681.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["7mgxS","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
