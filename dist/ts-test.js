!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("ts-test", [], factory) : "object" == typeof exports ? exports["ts-test"] = factory() : root["ts-test"] = factory();
}("undefined" != typeof self ? self : this, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);
    }, function(module, exports, __webpack_require__) {
        "undefined" != typeof self && self, module.exports = function(e) {
            var t = {};
            function r(n) {
                if (t[n]) return t[n].exports;
                var o = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
            }
            return r.m = e, r.c = t, r.d = function(e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                });
            }, r.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function(t) {
                    return e[t];
                }.bind(null, o));
                return n;
            }, r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return r.d(t, "a", t), t;
            }, r.o = function(e, t) {
                return {}.hasOwnProperty.call(e, t);
            }, r.p = "", r(r.s = 0);
        }([ function(e, t, r) {
            "use strict";
            function n(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && e instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && e instanceof window.constructor) return !1;
                    var t = {}.toString;
                    if (t) {
                        var r = t.call(e);
                        if ("[object Window]" === r || "[object global]" === r || "[object DOMWindow]" === r) return !1;
                    }
                    if ("function" == typeof e.then) return !0;
                } catch (e) {
                    return !1;
                }
                return !1;
            }
            r.r(t), r.d(t, "ZalgoPromise", (function() {
                return l;
            }));
            var o, i = [], c = [], u = 0;
            function s() {
                if (!u && o) {
                    var e = o;
                    o = null, e.resolve();
                }
            }
            function f() {
                u += 1;
            }
            function a() {
                u -= 1, s();
            }
            var l = function() {
                function e(e) {
                    var t = this;
                    if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, 
                    this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, 
                    this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, 
                    this.handlers = [], e) {
                        var r, n, o = !1, i = !1, c = !1;
                        f();
                        try {
                            e((function(e) {
                                c ? t.resolve(e) : (o = !0, r = e);
                            }), (function(e) {
                                c ? t.reject(e) : (i = !0, n = e);
                            }));
                        } catch (e) {
                            return a(), void this.reject(e);
                        }
                        a(), c = !0, o ? this.resolve(r) : i && this.reject(n);
                    }
                }
                var t = e.prototype;
                return t.resolve = function(e) {
                    if (this.resolved || this.rejected) return this;
                    if (n(e)) throw new Error("Can not resolve promise with another promise");
                    return this.resolved = !0, this.value = e, this.dispatch(), this;
                }, t.reject = function(e) {
                    var t = this;
                    if (this.resolved || this.rejected) return this;
                    if (n(e)) throw new Error("Can not reject promise with another promise");
                    if (!e) {
                        var r = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                        e = new Error("Expected reject to be called with Error, got " + r);
                    }
                    return this.rejected = !0, this.error = e, this.errorHandled || setTimeout((function() {
                        t.errorHandled || function(e, t) {
                            if (-1 === i.indexOf(e)) {
                                i.push(e), setTimeout((function() {
                                    throw e;
                                }), 1);
                                for (var r = 0; r < c.length; r++) c[r](e, t);
                            }
                        }(e, t);
                    }), 1), this.dispatch(), this;
                }, t.asyncReject = function(e) {
                    return this.errorHandled = !0, this.reject(e), this;
                }, t.dispatch = function() {
                    var t = this.resolved, r = this.rejected, o = this.handlers;
                    if (!this.dispatching && (t || r)) {
                        this.dispatching = !0, f();
                        for (var i = function(e, t) {
                            return e.then((function(e) {
                                t.resolve(e);
                            }), (function(e) {
                                t.reject(e);
                            }));
                        }, c = 0; c < o.length; c++) {
                            var u = o[c], s = u.onSuccess, l = u.onError, h = u.promise, d = void 0;
                            if (t) try {
                                d = s ? s(this.value) : this.value;
                            } catch (e) {
                                h.reject(e);
                                continue;
                            } else if (r) {
                                if (!l) {
                                    h.reject(this.error);
                                    continue;
                                }
                                try {
                                    d = l(this.error);
                                } catch (e) {
                                    h.reject(e);
                                    continue;
                                }
                            }
                            d instanceof e && (d.resolved || d.rejected) ? (d.resolved ? h.resolve(d.value) : h.reject(d.error), 
                            d.errorHandled = !0) : n(d) ? d instanceof e && (d.resolved || d.rejected) ? d.resolved ? h.resolve(d.value) : h.reject(d.error) : i(d, h) : h.resolve(d);
                        }
                        o.length = 0, this.dispatching = !1, a();
                    }
                }, t.then = function(t, r) {
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for success handler");
                    if (r && "function" != typeof r && !r.call) throw new Error("Promise.then expected a function for error handler");
                    var n = new e;
                    return this.handlers.push({
                        promise: n,
                        onSuccess: t,
                        onError: r
                    }), this.errorHandled = !0, this.dispatch(), n;
                }, t.catch = function(e) {
                    return this.then(void 0, e);
                }, t.finally = function(t) {
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.finally expected a function");
                    return this.then((function(r) {
                        return e.try(t).then((function() {
                            return r;
                        }));
                    }), (function(r) {
                        return e.try(t).then((function() {
                            throw r;
                        }));
                    }));
                }, t.timeout = function(e, t) {
                    var r = this;
                    if (this.resolved || this.rejected) return this;
                    var n = setTimeout((function() {
                        r.resolved || r.rejected || r.reject(t || new Error("Promise timed out after " + e + "ms"));
                    }), e);
                    return this.then((function(e) {
                        return clearTimeout(n), e;
                    }));
                }, t.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                }, e.resolve = function(t) {
                    return t instanceof e ? t : n(t) ? new e((function(e, r) {
                        return t.then(e, r);
                    })) : (new e).resolve(t);
                }, e.reject = function(t) {
                    return (new e).reject(t);
                }, e.asyncReject = function(t) {
                    return (new e).asyncReject(t);
                }, e.all = function(t) {
                    var r = new e, o = t.length, i = [];
                    if (!o) return r.resolve(i), r;
                    for (var c = function(e, t, n) {
                        return t.then((function(t) {
                            i[e] = t, 0 == (o -= 1) && r.resolve(i);
                        }), (function(e) {
                            n.reject(e);
                        }));
                    }, u = 0; u < t.length; u++) {
                        var s = t[u];
                        if (s instanceof e) {
                            if (s.resolved) {
                                i[u] = s.value, o -= 1;
                                continue;
                            }
                        } else if (!n(s)) {
                            i[u] = s, o -= 1;
                            continue;
                        }
                        c(u, e.resolve(s), r);
                    }
                    return 0 === o && r.resolve(i), r;
                }, e.hash = function(t) {
                    var r = {}, o = [], i = function(e) {
                        if (t.hasOwnProperty(e)) {
                            var i = t[e];
                            n(i) ? o.push(i.then((function(t) {
                                r[e] = t;
                            }))) : r[e] = i;
                        }
                    };
                    for (var c in t) i(c);
                    return e.all(o).then((function() {
                        return r;
                    }));
                }, e.map = function(t, r) {
                    return e.all(t.map(r));
                }, e.onPossiblyUnhandledException = function(e) {
                    return function(e) {
                        return c.push(e), {
                            cancel: function() {
                                c.splice(c.indexOf(e), 1);
                            }
                        };
                    }(e);
                }, e.try = function(t, r, n) {
                    if (t && "function" != typeof t && !t.call) throw new Error("Promise.try expected a function");
                    var o;
                    f();
                    try {
                        o = t.apply(r, n || []);
                    } catch (t) {
                        return a(), e.reject(t);
                    }
                    return a(), e.resolve(o);
                }, e.delay = function(t) {
                    return new e((function(e) {
                        setTimeout(e, t);
                    }));
                }, e.isPromise = function(t) {
                    return !!(t && t instanceof e) || n(t);
                }, e.flush = function() {
                    return t = o = o || new e, s(), t;
                    var t;
                }, e;
            }();
        } ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "getUniqueID", (function() {
            return getUniqueID;
        }));
        __webpack_require__.d(__webpack_exports__, "stringToBase64", (function() {
            return stringToBase64;
        }));
        __webpack_require__(0);
        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
        function isAboutProtocol(win) {
            void 0 === win && (win = window);
            return "about:" === win.location.protocol;
        }
        function canReadFromWindow(win) {
            try {
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            void 0 === win && (win = window);
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = location.protocol;
            if (!protocol) throw new Error("Can not read window protocol");
            if ("file:" === protocol) return "file://";
            if ("about:" === protocol) {
                var parent = function(win) {
                    void 0 === win && (win = window);
                    if (win) try {
                        if (win.parent && win.parent !== win) return win.parent;
                    } catch (err) {}
                }(win);
                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            void 0 === win && (win = window);
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
        }
        var iframeWindows = [];
        var iframeFrames = [];
        function isWindowClosed(win, allowMock) {
            void 0 === allowMock && (allowMock = !0);
            try {
                if (win === window) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if (!win) return !0;
            } catch (err) {
                return !0;
            }
            try {
                if (win.closed) return !0;
            } catch (err) {
                return !err || err.message !== IE_WIN_ACCESS_ERROR;
            }
            if (allowMock && function(win) {
                if (!function(win) {
                    try {
                        if (win === window) return !0;
                    } catch (err) {}
                    try {
                        var desc = Object.getOwnPropertyDescriptor(win, "location");
                        if (desc && !1 === desc.enumerable) return !1;
                    } catch (err) {}
                    try {
                        if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    } catch (err) {}
                    try {
                        if (getActualDomain(win) === getActualDomain(window)) return !0;
                    } catch (err) {}
                    return !1;
                }(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }(win)) try {
                if (win.mockclosed) return !0;
            } catch (err) {}
            try {
                if (!win.parent || !win.top) return !0;
            } catch (err) {}
            var iframeIndex = function(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }(iframeWindows, win);
            if (-1 !== iframeIndex) {
                var frame = iframeFrames[iframeIndex];
                if (frame && function(frame) {
                    if (!frame.contentWindow) return !0;
                    if (!frame.parentNode) return !0;
                    var doc = frame.ownerDocument;
                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                        var parent = frame;
                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                    }
                    return !1;
                }(frame)) return !0;
            }
            return !1;
        }
        function isWindow(obj) {
            try {
                if (obj === window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if ("[object Window]" === {}.toString.call(obj)) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (window.Window && obj instanceof window.Window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.self === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.parent === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.top === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
            } catch (err) {}
            return !1;
        }
        function util_safeIndexOf(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }
        var weakmap_CrossDomainSafeWeakMap = function() {
            function CrossDomainSafeWeakMap() {
                this.name = void 0;
                this.weakmap = void 0;
                this.keys = void 0;
                this.values = void 0;
                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                if (function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var testWeakMap = new WeakMap;
                        var testKey = {};
                        Object.freeze(testKey);
                        testWeakMap.set(testKey, "__testvalue__");
                        return "__testvalue__" === testWeakMap.get(testKey);
                    } catch (err) {
                        return !1;
                    }
                }()) try {
                    this.weakmap = new WeakMap;
                } catch (err) {}
                this.keys = [];
                this.values = [];
            }
            var _proto = CrossDomainSafeWeakMap.prototype;
            _proto._cleanupClosedWindows = function() {
                var weakmap = this.weakmap;
                var keys = this.keys;
                for (var i = 0; i < keys.length; i++) {
                    var value = keys[i];
                    if (isWindow(value) && isWindowClosed(value)) {
                        if (weakmap) try {
                            weakmap.delete(value);
                        } catch (err) {}
                        keys.splice(i, 1);
                        this.values.splice(i, 1);
                        i -= 1;
                    }
                }
            };
            _proto.isSafeToReadWrite = function(key) {
                return !isWindow(key);
            };
            _proto.set = function(key, value) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.set(key, value);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var name = this.name;
                    var entry = key[name];
                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                        value: [ key, value ],
                        writable: !0
                    });
                    return;
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var values = this.values;
                var index = util_safeIndexOf(keys, key);
                if (-1 === index) {
                    keys.push(key);
                    values.push(value);
                } else values[index] = value;
            };
            _proto.get = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return weakmap.get(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return entry && entry[0] === key ? entry[1] : void 0;
                } catch (err) {}
                this._cleanupClosedWindows();
                var index = util_safeIndexOf(this.keys, key);
                if (-1 !== index) return this.values[index];
            };
            _proto.delete = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.delete(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var index = util_safeIndexOf(keys, key);
                if (-1 !== index) {
                    keys.splice(index, 1);
                    this.values.splice(index, 1);
                }
            };
            _proto.has = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return !0;
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return !(!entry || entry[0] !== key);
                } catch (err) {}
                this._cleanupClosedWindows();
                return -1 !== util_safeIndexOf(this.keys, key);
            };
            _proto.getOrSet = function(key, getter) {
                if (this.has(key)) return this.get(key);
                var value = getter();
                this.set(key, value);
                return value;
            };
            return CrossDomainSafeWeakMap;
        }();
        function base64encode(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer");
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        var objectIDs;
        function serializeArgs(args) {
            try {
                return JSON.stringify([].slice.call(args), (function(subkey, val) {
                    return "function" == typeof val ? "memoize[" + function(obj) {
                        objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                        if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                        var uid = objectIDs.get(obj);
                        if (!uid) {
                            uid = typeof obj + ":" + uniqueID();
                            objectIDs.set(obj, uid);
                        }
                        return uid;
                    }(val) + "]" : val;
                }));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
        }
        function getEmptyObject() {
            return {};
        }
        var memoizeGlobalIndex = 0;
        var memoizeGlobalIndexValidFrom = 0;
        function memoize(method, options) {
            void 0 === options && (options = {});
            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
            var simpleCache;
            var thisCache;
            var memoizeIndex = memoizeGlobalIndex;
            memoizeGlobalIndex += 1;
            var memoizedFunction = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                    simpleCache = null;
                    thisCache = null;
                    memoizeIndex = memoizeGlobalIndex;
                    memoizeGlobalIndex += 1;
                }
                var cache;
                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                var cacheKey = serializeArgs(args);
                var cacheResult = cache[cacheKey];
                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                    delete cache[cacheKey];
                    cacheResult = null;
                }
                if (cacheResult) return cacheResult.value;
                var time = Date.now();
                var value = method.apply(this, arguments);
                cache[cacheKey] = {
                    time: time,
                    value: value
                };
                return value;
            };
            memoizedFunction.reset = function() {
                simpleCache = null;
                thisCache = null;
            };
            return function(fn, name) {
                try {
                    delete fn.name;
                    fn.name = name;
                } catch (err) {}
                fn.__name__ = fn.displayName = name;
                return fn;
            }(memoizedFunction, (options.name || (fn = method).name || fn.__name__ || fn.displayName || "anonymous") + "::memoized");
            var fn;
        }
        memoize.clear = function() {
            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
        };
        memoize((function(obj) {
            if (Object.values) return Object.values(obj);
            var result = [];
            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
            return result;
        }));
        Error;
        function getUniqueID() {
            return uniqueID();
        }
        function stringToBase64(str) {
            return base64encode(str);
        }
    } ]);
}));