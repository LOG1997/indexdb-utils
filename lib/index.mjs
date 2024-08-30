var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pr(ce) {
  return ce && ce.__esModule && Object.prototype.hasOwnProperty.call(ce, "default") ? ce.default : ce;
}
var Dr = { exports: {} };
(function(ce, Oe) {
  (function(we, T) {
    ce.exports = T();
  })(Ut, function() {
    var we = function(e, n) {
      return (we = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
        t.__proto__ = r;
      } || function(t, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      })(e, n);
    }, T = function() {
      return (T = Object.assign || function(e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
    };
    function He(e, n, t) {
      for (var r, i = 0, o = n.length; i < o; i++) !r && i in n || ((r = r || Array.prototype.slice.call(n, 0, i))[i] = n[i]);
      return e.concat(r || Array.prototype.slice.call(n));
    }
    var ne = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ut, G = Object.keys, z = Array.isArray;
    function oe(e, n) {
      return typeof n != "object" || G(n).forEach(function(t) {
        e[t] = n[t];
      }), e;
    }
    typeof Promise > "u" || ne.Promise || (ne.Promise = Promise);
    var ve = Object.getPrototypeOf, un = {}.hasOwnProperty;
    function Q(e, n) {
      return un.call(e, n);
    }
    function Ie(e, n) {
      typeof n == "function" && (n = n(ve(e))), (typeof Reflect > "u" ? G : Reflect.ownKeys)(n).forEach(function(t) {
        me(e, t, n[t]);
      });
    }
    var Pe = Object.defineProperty;
    function me(e, n, t, r) {
      Pe(e, n, oe(t && Q(t, "get") && typeof t.get == "function" ? { get: t.get, set: t.set, configurable: !0 } : { value: t, configurable: !0, writable: !0 }, r));
    }
    function qe(e) {
      return { from: function(n) {
        return e.prototype = Object.create(n.prototype), me(e.prototype, "constructor", e), { extend: Ie.bind(null, e.prototype) };
      } };
    }
    var ot = Object.getOwnPropertyDescriptor, at = [].slice;
    function sn(e, n, t) {
      return at.call(e, n, t);
    }
    function cn(e, n) {
      return n(e);
    }
    function Qe(e) {
      if (!e) throw new Error("Assertion Failed");
    }
    function Fe(e) {
      ne.setImmediate ? setImmediate(e) : setTimeout(e, 0);
    }
    function le(e, n) {
      if (typeof n == "string" && Q(e, n)) return e[n];
      if (!n) return e;
      if (typeof n != "string") {
        for (var t = [], r = 0, i = n.length; r < i; ++r) {
          var o = le(e, n[r]);
          t.push(o);
        }
        return t;
      }
      var a = n.indexOf(".");
      if (a !== -1) {
        var u = e[n.substr(0, a)];
        return u == null ? void 0 : le(u, n.substr(a + 1));
      }
    }
    function de(e, n, t) {
      if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
        Qe(typeof t != "string" && "length" in t);
        for (var r = 0, i = n.length; r < i; ++r) de(e, n[r], t[r]);
      } else {
        var o, a, u = n.indexOf(".");
        u !== -1 ? (o = n.substr(0, u), (a = n.substr(u + 1)) === "" ? t === void 0 ? z(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = t : de(u = !(u = e[o]) || !Q(e, o) ? e[o] = {} : u, a, t)) : t === void 0 ? z(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = t;
      }
    }
    function ln(e) {
      var n, t = {};
      for (n in e) Q(e, n) && (t[n] = e[n]);
      return t;
    }
    var fn = [].concat;
    function te(e) {
      return fn.apply([], e);
    }
    var $e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(te([8, 16, 32, 64].map(function(e) {
      return ["Int", "Uint", "Float"].map(function(n) {
        return n + e + "Array";
      });
    }))).filter(function(e) {
      return ne[e];
    }), W = new Set($e.map(function(e) {
      return ne[e];
    })), Ke = null;
    function je(e) {
      return Ke = /* @__PURE__ */ new WeakMap(), e = function n(t) {
        if (!t || typeof t != "object") return t;
        var r = Ke.get(t);
        if (r) return r;
        if (z(t)) {
          r = [], Ke.set(t, r);
          for (var i = 0, o = t.length; i < o; ++i) r.push(n(t[i]));
        } else if (W.has(t.constructor)) r = t;
        else {
          var a, u = ve(t);
          for (a in r = u === Object.prototype ? {} : Object.create(u), Ke.set(t, r), t) Q(t, a) && (r[a] = n(t[a]));
        }
        return r;
      }(e), Ke = null, e;
    }
    var B = {}.toString;
    function j(e) {
      return B.call(e).slice(8, -1);
    }
    var D = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", M = typeof D == "symbol" ? function(e) {
      var n;
      return e != null && (n = e[D]) && n.apply(e);
    } : function() {
      return null;
    };
    function E(e, n) {
      return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
    }
    var q = {};
    function I(e) {
      var n, t, r, i;
      if (arguments.length === 1) {
        if (z(e)) return e.slice();
        if (this === q && typeof e == "string") return [e];
        if (i = M(e)) {
          for (t = []; !(r = i.next()).done; ) t.push(r.value);
          return t;
        }
        if (e == null) return [e];
        if (typeof (n = e.length) != "number") return [e];
        for (t = new Array(n); n--; ) t[n] = e[n];
        return t;
      }
      for (n = arguments.length, t = new Array(n); n--; ) t[n] = arguments[n];
      return t;
    }
    var H = typeof Symbol < "u" ? function(e) {
      return e[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, wn = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Se = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(wn), ee = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function X(e, n) {
      this.name = e, this.message = n;
    }
    function ae(e, n) {
      return e + ". Errors: " + Object.keys(n).map(function(t) {
        return n[t].toString();
      }).filter(function(t, r, i) {
        return i.indexOf(t) === r;
      }).join(`
`);
    }
    function fe(e, n, t, r) {
      this.failures = n, this.failedKeys = r, this.successCount = t, this.message = ae(e, n);
    }
    function _e(e, n) {
      this.name = "BulkError", this.failures = Object.keys(n).map(function(t) {
        return n[t];
      }), this.failuresByPos = n, this.message = ae(e, this.failures);
    }
    qe(X).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), qe(fe).from(X), qe(_e).from(X);
    var De = Se.reduce(function(e, n) {
      return e[n] = n + "Error", e;
    }, {}), Ge = X, A = Se.reduce(function(e, n) {
      var t = n + "Error";
      function r(i, o) {
        this.name = t, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = ee[n] || t, this.inner = null);
      }
      return qe(r).from(Ge), e[n] = r, e;
    }, {});
    A.Syntax = SyntaxError, A.Type = TypeError, A.Range = RangeError;
    var he = wn.reduce(function(e, n) {
      return e[n + "Error"] = A[n], e;
    }, {}), xe = Se.reduce(function(e, n) {
      return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = A[n]), e;
    }, {});
    function U() {
    }
    function Ae(e) {
      return e;
    }
    function Kr(e, n) {
      return e == null || e === Ae ? n : function(t) {
        return n(e(t));
      };
    }
    function Xe(e, n) {
      return function() {
        e.apply(this, arguments), n.apply(this, arguments);
      };
    }
    function jr(e, n) {
      return e === U ? n : function() {
        var t = e.apply(this, arguments);
        t !== void 0 && (arguments[0] = t);
        var r = this.onsuccess, i = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var o = n.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? Xe(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Xe(i, this.onerror) : i), o !== void 0 ? o : t;
      };
    }
    function Ar(e, n) {
      return e === U ? n : function() {
        e.apply(this, arguments);
        var t = this.onsuccess, r = this.onerror;
        this.onsuccess = this.onerror = null, n.apply(this, arguments), t && (this.onsuccess = this.onsuccess ? Xe(t, this.onsuccess) : t), r && (this.onerror = this.onerror ? Xe(r, this.onerror) : r);
      };
    }
    function Cr(e, n) {
      return e === U ? n : function(t) {
        var r = e.apply(this, arguments);
        oe(t, r);
        var i = this.onsuccess, o = this.onerror;
        return this.onsuccess = null, this.onerror = null, t = n.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Xe(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Xe(o, this.onerror) : o), r === void 0 ? t === void 0 ? void 0 : t : oe(r, t);
      };
    }
    function Tr(e, n) {
      return e === U ? n : function() {
        return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
      };
    }
    function ut(e, n) {
      return e === U ? n : function() {
        var t = e.apply(this, arguments);
        if (t && typeof t.then == "function") {
          for (var r = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
          return t.then(function() {
            return n.apply(r, o);
          });
        }
        return n.apply(this, arguments);
      };
    }
    xe.ModifyError = fe, xe.DexieError = X, xe.BulkError = _e;
    var Ce = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Wt(e) {
      Ce = e;
    }
    var bn = {}, zt = 100, $e = typeof Promise > "u" ? [] : function() {
      var e = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [e, ve(e), e];
      var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [n, ve(n), e];
    }(), wn = $e[0], Se = $e[1], $e = $e[2], Se = Se && Se.then, _n = wn && wn.constructor, st = !!$e, xn = function(e, n) {
      kn.push([e, n]), Tn && (queueMicrotask(Ir), Tn = !1);
    }, ct = !0, Tn = !0, Je = [], Mn = [], lt = Ae, Ne = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: U, pgp: !1, env: {}, finalize: U }, C = Ne, kn = [], Ze = 0, In = [];
    function K(e) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var n = this._PSD = C;
      if (typeof e != "function") {
        if (e !== bn) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && ht(this, this._value));
      }
      this._state = null, this._value = null, ++n.ref, function t(r, i) {
        try {
          i(function(o) {
            if (r._state === null) {
              if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
              var a = r._lib && hn();
              o && typeof o.then == "function" ? t(r, function(u, f) {
                o instanceof K ? o._then(u, f) : o.then(u, f);
              }) : (r._state = !0, r._value = o, Qt(r)), a && dn();
            }
          }, ht.bind(null, r));
        } catch (o) {
          ht(r, o);
        }
      }(this, e);
    }
    var ft = { get: function() {
      var e = C, n = Rn;
      function t(r, i) {
        var o = this, a = !e.global && (e !== C || n !== Rn), u = a && !Ue(), f = new K(function(c, p) {
          dt(o, new Ht(Xt(r, e, a, u), Xt(i, e, a, u), c, p, e));
        });
        return this._consoleTask && (f._consoleTask = this._consoleTask), f;
      }
      return t.prototype = bn, t;
    }, set: function(e) {
      me(this, "then", e && e.prototype === bn ? ft : { get: function() {
        return e;
      }, set: ft.set });
    } };
    function Ht(e, n, t, r, i) {
      this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = t, this.reject = r, this.psd = i;
    }
    function ht(e, n) {
      var t, r;
      Mn.push(n), e._state === null && (t = e._lib && hn(), n = lt(n), e._state = !1, e._value = n, r = e, Je.some(function(i) {
        return i._value === r._value;
      }) || Je.push(r), Qt(e), t && dn());
    }
    function Qt(e) {
      var n = e._listeners;
      e._listeners = [];
      for (var t = 0, r = n.length; t < r; ++t) dt(e, n[t]);
      var i = e._PSD;
      --i.ref || i.finalize(), Ze === 0 && (++Ze, xn(function() {
        --Ze == 0 && pt();
      }, []));
    }
    function dt(e, n) {
      if (e._state !== null) {
        var t = e._state ? n.onFulfilled : n.onRejected;
        if (t === null) return (e._state ? n.resolve : n.reject)(e._value);
        ++n.psd.ref, ++Ze, xn(Mr, [t, e, n]);
      } else e._listeners.push(n);
    }
    function Mr(e, n, t) {
      try {
        var r, i = n._value;
        !n._state && Mn.length && (Mn = []), r = Ce && n._consoleTask ? n._consoleTask.run(function() {
          return e(i);
        }) : e(i), n._state || Mn.indexOf(i) !== -1 || function(o) {
          for (var a = Je.length; a; ) if (Je[--a]._value === o._value) return Je.splice(a, 1);
        }(n), t.resolve(r);
      } catch (o) {
        t.reject(o);
      } finally {
        --Ze == 0 && pt(), --t.psd.ref || t.psd.finalize();
      }
    }
    function Ir() {
      en(Ne, function() {
        hn() && dn();
      });
    }
    function hn() {
      var e = ct;
      return Tn = ct = !1, e;
    }
    function dn() {
      var e, n, t;
      do
        for (; 0 < kn.length; ) for (e = kn, kn = [], t = e.length, n = 0; n < t; ++n) {
          var r = e[n];
          r[0].apply(null, r[1]);
        }
      while (0 < kn.length);
      Tn = ct = !0;
    }
    function pt() {
      var e = Je;
      Je = [], e.forEach(function(r) {
        r._PSD.onunhandled.call(null, r._value, r);
      });
      for (var n = In.slice(0), t = n.length; t; ) n[--t]();
    }
    function qn(e) {
      return new K(bn, !1, e);
    }
    function Z(e, n) {
      var t = C;
      return function() {
        var r = hn(), i = C;
        try {
          return Ye(t, !0), e.apply(this, arguments);
        } catch (o) {
          n && n(o);
        } finally {
          Ye(i, !1), r && dn();
        }
      };
    }
    Ie(K.prototype, { then: ft, _then: function(e, n) {
      dt(this, new Ht(null, null, e, n, C));
    }, catch: function(e) {
      if (arguments.length === 1) return this.then(null, e);
      var n = e, t = arguments[1];
      return typeof n == "function" ? this.then(null, function(r) {
        return (r instanceof n ? t : qn)(r);
      }) : this.then(null, function(r) {
        return (r && r.name === n ? t : qn)(r);
      });
    }, finally: function(e) {
      return this.then(function(n) {
        return K.resolve(e()).then(function() {
          return n;
        });
      }, function(n) {
        return K.resolve(e()).then(function() {
          return qn(n);
        });
      });
    }, timeout: function(e, n) {
      var t = this;
      return e < 1 / 0 ? new K(function(r, i) {
        var o = setTimeout(function() {
          return i(new A.Timeout(n));
        }, e);
        t.then(r, i).finally(clearTimeout.bind(null, o));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && me(K.prototype, Symbol.toStringTag, "Dexie.Promise"), Ne.env = Gt(), Ie(K, { all: function() {
      var e = I.apply(null, arguments).map(Fn);
      return new K(function(n, t) {
        e.length === 0 && n([]);
        var r = e.length;
        e.forEach(function(i, o) {
          return K.resolve(i).then(function(a) {
            e[o] = a, --r || n(e);
          }, t);
        });
      });
    }, resolve: function(e) {
      return e instanceof K ? e : e && typeof e.then == "function" ? new K(function(n, t) {
        e.then(n, t);
      }) : new K(bn, !0, e);
    }, reject: qn, race: function() {
      var e = I.apply(null, arguments).map(Fn);
      return new K(function(n, t) {
        e.map(function(r) {
          return K.resolve(r).then(n, t);
        });
      });
    }, PSD: { get: function() {
      return C;
    }, set: function(e) {
      return C = e;
    } }, totalEchoes: { get: function() {
      return Rn;
    } }, newPSD: Le, usePSD: en, scheduler: { get: function() {
      return xn;
    }, set: function(e) {
      xn = e;
    } }, rejectionMapper: { get: function() {
      return lt;
    }, set: function(e) {
      lt = e;
    } }, follow: function(e, n) {
      return new K(function(t, r) {
        return Le(function(i, o) {
          var a = C;
          a.unhandleds = [], a.onunhandled = o, a.finalize = Xe(function() {
            var u, f = this;
            u = function() {
              f.unhandleds.length === 0 ? i() : o(f.unhandleds[0]);
            }, In.push(function c() {
              u(), In.splice(In.indexOf(c), 1);
            }), ++Ze, xn(function() {
              --Ze == 0 && pt();
            }, []);
          }, a.finalize), e();
        }, n, t, r);
      });
    } }), _n && (_n.allSettled && me(K, "allSettled", function() {
      var e = I.apply(null, arguments).map(Fn);
      return new K(function(n) {
        e.length === 0 && n([]);
        var t = e.length, r = new Array(t);
        e.forEach(function(i, o) {
          return K.resolve(i).then(function(a) {
            return r[o] = { status: "fulfilled", value: a };
          }, function(a) {
            return r[o] = { status: "rejected", reason: a };
          }).then(function() {
            return --t || n(r);
          });
        });
      });
    }), _n.any && typeof AggregateError < "u" && me(K, "any", function() {
      var e = I.apply(null, arguments).map(Fn);
      return new K(function(n, t) {
        e.length === 0 && t(new AggregateError([]));
        var r = e.length, i = new Array(r);
        e.forEach(function(o, a) {
          return K.resolve(o).then(function(u) {
            return n(u);
          }, function(u) {
            i[a] = u, --r || t(new AggregateError(i));
          });
        });
      });
    }));
    var ue = { awaits: 0, echoes: 0, id: 0 }, qr = 0, Bn = [], $n = 0, Rn = 0, Br = 0;
    function Le(e, n, t, r) {
      var i = C, o = Object.create(i);
      return o.parent = i, o.ref = 0, o.global = !1, o.id = ++Br, Ne.env, o.env = st ? { Promise: K, PromiseProp: { value: K, configurable: !0, writable: !0 }, all: K.all, race: K.race, allSettled: K.allSettled, any: K.any, resolve: K.resolve, reject: K.reject } : {}, n && oe(o, n), ++i.ref, o.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, r = en(o, e, t, r), o.ref === 0 && o.finalize(), r;
    }
    function pn() {
      return ue.id || (ue.id = ++qr), ++ue.awaits, ue.echoes += zt, ue.id;
    }
    function Ue() {
      return !!ue.awaits && (--ue.awaits == 0 && (ue.id = 0), ue.echoes = ue.awaits * zt, !0);
    }
    function Fn(e) {
      return ue.echoes && e && e.constructor === _n ? (pn(), e.then(function(n) {
        return Ue(), n;
      }, function(n) {
        return Ue(), re(n);
      })) : e;
    }
    function $r() {
      var e = Bn[Bn.length - 1];
      Bn.pop(), Ye(e, !1);
    }
    function Ye(e, n) {
      var t, r = C;
      (n ? !ue.echoes || $n++ && e === C : !$n || --$n && e === C) || queueMicrotask(n ? (function(i) {
        ++Rn, ue.echoes && --ue.echoes != 0 || (ue.echoes = ue.awaits = ue.id = 0), Bn.push(C), Ye(i, !0);
      }).bind(null, e) : $r), e !== C && (C = e, r === Ne && (Ne.env = Gt()), st && (t = Ne.env.Promise, n = e.env, (r.global || e.global) && (Object.defineProperty(ne, "Promise", n.PromiseProp), t.all = n.all, t.race = n.race, t.resolve = n.resolve, t.reject = n.reject, n.allSettled && (t.allSettled = n.allSettled), n.any && (t.any = n.any))));
    }
    function Gt() {
      var e = ne.Promise;
      return st ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(ne, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
    }
    function en(e, n, t, r, i) {
      var o = C;
      try {
        return Ye(e, !0), n(t, r, i);
      } finally {
        Ye(o, !1);
      }
    }
    function Xt(e, n, t, r) {
      return typeof e != "function" ? e : function() {
        var i = C;
        t && pn(), Ye(n, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          Ye(i, !1), r && queueMicrotask(Ue);
        }
      };
    }
    function yt(e) {
      Promise === _n && ue.echoes === 0 ? $n === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
    }
    ("" + Se).indexOf("[native code]") === -1 && (pn = Ue = U);
    var re = K.reject, nn = "￿", Be = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Jt = "String expected.", yn = [], Nn = "__dbnames", vt = "readonly", mt = "readwrite";
    function tn(e, n) {
      return e ? n ? function() {
        return e.apply(this, arguments) && n.apply(this, arguments);
      } : e : n;
    }
    var Zt = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Ln(e) {
      return typeof e != "string" || /\./.test(e) ? function(n) {
        return n;
      } : function(n) {
        return n[e] === void 0 && e in n && delete (n = je(n))[e], n;
      };
    }
    function er() {
      throw A.Type();
    }
    function Y(e, n) {
      try {
        var t = nr(e), r = nr(n);
        if (t !== r) return t === "Array" ? 1 : r === "Array" ? -1 : t === "binary" ? 1 : r === "binary" ? -1 : t === "string" ? 1 : r === "string" ? -1 : t === "Date" ? 1 : r !== "Date" ? NaN : -1;
        switch (t) {
          case "number":
          case "Date":
          case "string":
            return n < e ? 1 : e < n ? -1 : 0;
          case "binary":
            return function(i, o) {
              for (var a = i.length, u = o.length, f = a < u ? a : u, c = 0; c < f; ++c) if (i[c] !== o[c]) return i[c] < o[c] ? -1 : 1;
              return a === u ? 0 : a < u ? -1 : 1;
            }(tr(e), tr(n));
          case "Array":
            return function(i, o) {
              for (var a = i.length, u = o.length, f = a < u ? a : u, c = 0; c < f; ++c) {
                var p = Y(i[c], o[c]);
                if (p !== 0) return p;
              }
              return a === u ? 0 : a < u ? -1 : 1;
            }(e, n);
        }
      } catch {
      }
      return NaN;
    }
    function nr(e) {
      var n = typeof e;
      return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = j(e), e === "ArrayBuffer" ? "binary" : e);
    }
    function tr(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
    }
    var rr = (J.prototype._trans = function(e, n, t) {
      var r = this._tx || C.trans, i = this.name, o = Ce && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
      function a(c, p, s) {
        if (!s.schema[i]) throw new A.NotFound("Table " + i + " not part of transaction");
        return n(s.idbtrans, s);
      }
      var u = hn();
      try {
        var f = r && r.db._novip === this.db._novip ? r === C.trans ? r._promise(e, a, t) : Le(function() {
          return r._promise(e, a, t);
        }, { trans: r, transless: C.transless || C }) : function c(p, s, y, l) {
          if (p.idbdb && (p._state.openComplete || C.letThrough || p._vip)) {
            var d = p._createTransaction(s, y, p._dbSchema);
            try {
              d.create(), p._state.PR1398_maxLoop = 3;
            } catch (v) {
              return v.name === De.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return c(p, s, y, l);
              })) : re(v);
            }
            return d._promise(s, function(v, h) {
              return Le(function() {
                return C.trans = d, l(v, h, d);
              });
            }).then(function(v) {
              if (s === "readwrite") try {
                d.idbtrans.commit();
              } catch {
              }
              return s === "readonly" ? v : d._completion.then(function() {
                return v;
              });
            });
          }
          if (p._state.openComplete) return re(new A.DatabaseClosed(p._state.dbOpenError));
          if (!p._state.isBeingOpened) {
            if (!p._state.autoOpen) return re(new A.DatabaseClosed());
            p.open().catch(U);
          }
          return p._state.dbReadyPromise.then(function() {
            return c(p, s, y, l);
          });
        }(this.db, e, [this.name], a);
        return o && (f._consoleTask = o, f = f.catch(function(c) {
          return console.trace(c), re(c);
        })), f;
      } finally {
        u && dn();
      }
    }, J.prototype.get = function(e, n) {
      var t = this;
      return e && e.constructor === Object ? this.where(e).first(n) : e == null ? re(new A.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
        return t.core.get({ trans: r, key: e }).then(function(i) {
          return t.hook.reading.fire(i);
        });
      }).then(n);
    }, J.prototype.where = function(e) {
      if (typeof e == "string") return new this.db.WhereClause(this, e);
      if (z(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
      var n = G(e);
      if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
      var t = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
        if (f.compound && n.every(function(p) {
          return 0 <= f.keyPath.indexOf(p);
        })) {
          for (var c = 0; c < n.length; ++c) if (n.indexOf(f.keyPath[c]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(f, c) {
        return f.keyPath.length - c.keyPath.length;
      })[0];
      if (t && this.db._maxKey !== nn) {
        var a = t.keyPath.slice(0, n.length);
        return this.where(a).equals(a.map(function(c) {
          return e[c];
        }));
      }
      !t && Ce && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
      var r = this.schema.idxByName, i = this.db._deps.indexedDB;
      function o(f, c) {
        return i.cmp(f, c) === 0;
      }
      var u = n.reduce(function(y, c) {
        var p = y[0], s = y[1], y = r[c], l = e[c];
        return [p || y, p || !y ? tn(s, y && y.multi ? function(d) {
          return d = le(d, c), z(d) && d.some(function(v) {
            return o(l, v);
          });
        } : function(d) {
          return o(l, le(d, c));
        }) : s];
      }, [null, null]), a = u[0], u = u[1];
      return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : t ? this.filter(u) : this.where(n).equals("");
    }, J.prototype.filter = function(e) {
      return this.toCollection().and(e);
    }, J.prototype.count = function(e) {
      return this.toCollection().count(e);
    }, J.prototype.offset = function(e) {
      return this.toCollection().offset(e);
    }, J.prototype.limit = function(e) {
      return this.toCollection().limit(e);
    }, J.prototype.each = function(e) {
      return this.toCollection().each(e);
    }, J.prototype.toArray = function(e) {
      return this.toCollection().toArray(e);
    }, J.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, J.prototype.orderBy = function(e) {
      return new this.db.Collection(new this.db.WhereClause(this, z(e) ? "[".concat(e.join("+"), "]") : e));
    }, J.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, J.prototype.mapToClass = function(e) {
      var n, t = this.db, r = this.name;
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = e).prototype instanceof er && (function(f, c) {
        if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
        function p() {
          this.constructor = f;
        }
        we(f, c), f.prototype = c === null ? Object.create(c) : (p.prototype = c.prototype, new p());
      }(i, n = e), Object.defineProperty(i.prototype, "db", { get: function() {
        return t;
      }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
        return r;
      }, e = i);
      for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = ve(a)) Object.getOwnPropertyNames(a).forEach(function(f) {
        return o.add(f);
      });
      function u(f) {
        if (!f) return f;
        var c, p = Object.create(e.prototype);
        for (c in f) if (!o.has(c)) try {
          p[c] = f[c];
        } catch {
        }
        return p;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
    }, J.prototype.defineClass = function() {
      return this.mapToClass(function(e) {
        oe(this, e);
      });
    }, J.prototype.add = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Ln(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "add", keys: n != null ? [n] : null, values: [a] });
      }).then(function(u) {
        return u.numFailures ? K.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          de(e, o, u);
        } catch {
        }
        return u;
      });
    }, J.prototype.update = function(e, n) {
      return typeof e != "object" || z(e) ? this.where(":id").equals(e).modify(n) : (e = le(e, this.schema.primKey.keyPath), e === void 0 ? re(new A.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
    }, J.prototype.put = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Ln(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "put", values: [a], keys: n != null ? [n] : null });
      }).then(function(u) {
        return u.numFailures ? K.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          de(e, o, u);
        } catch {
        }
        return u;
      });
    }, J.prototype.delete = function(e) {
      var n = this;
      return this._trans("readwrite", function(t) {
        return n.core.mutate({ trans: t, type: "delete", keys: [e] });
      }).then(function(t) {
        return t.numFailures ? K.reject(t.failures[0]) : void 0;
      });
    }, J.prototype.clear = function() {
      var e = this;
      return this._trans("readwrite", function(n) {
        return e.core.mutate({ trans: n, type: "deleteRange", range: Zt });
      }).then(function(n) {
        return n.numFailures ? K.reject(n.failures[0]) : void 0;
      });
    }, J.prototype.bulkGet = function(e) {
      var n = this;
      return this._trans("readonly", function(t) {
        return n.core.getMany({ keys: e, trans: t }).then(function(r) {
          return r.map(function(i) {
            return n.hook.reading.fire(i);
          });
        });
      });
    }, J.prototype.bulkAdd = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i) throw new A.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Ln(c)) : e;
        return r.core.mutate({ trans: a, type: "add", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? y : l;
          throw new _e("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, J.prototype.bulkPut = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i) throw new A.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Ln(c)) : e;
        return r.core.mutate({ trans: a, type: "put", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? y : l;
          throw new _e("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, J.prototype.bulkUpdate = function(e) {
      var n = this, t = this.core, r = e.map(function(a) {
        return a.key;
      }), i = e.map(function(a) {
        return a.changes;
      }), o = [];
      return this._trans("readwrite", function(a) {
        return t.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
          var f = [], c = [];
          e.forEach(function(s, y) {
            var l = s.key, d = s.changes, v = u[y];
            if (v) {
              for (var h = 0, m = Object.keys(d); h < m.length; h++) {
                var g = m[h], b = d[g];
                if (g === n.schema.primKey.keyPath) {
                  if (Y(b, l) !== 0) throw new A.Constraint("Cannot update primary key in bulkUpdate()");
                } else de(v, g, b);
              }
              o.push(y), f.push(l), c.push(v);
            }
          });
          var p = f.length;
          return t.mutate({ trans: a, type: "put", keys: f, values: c, updates: { keys: r, changeSpecs: i } }).then(function(s) {
            var y = s.numFailures, l = s.failures;
            if (y === 0) return p;
            for (var d = 0, v = Object.keys(l); d < v.length; d++) {
              var h, m = v[d], g = o[Number(m)];
              g != null && (h = l[m], delete l[m], l[g] = h);
            }
            throw new _e("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(p, " operations failed"), l);
          });
        });
      });
    }, J.prototype.bulkDelete = function(e) {
      var n = this, t = e.length;
      return this._trans("readwrite", function(r) {
        return n.core.mutate({ trans: r, type: "delete", keys: e });
      }).then(function(a) {
        var i = a.numFailures, o = a.lastResult, a = a.failures;
        if (i === 0) return o;
        throw new _e("".concat(n.name, ".bulkDelete(): ").concat(i, " of ").concat(t, " operations failed"), a);
      });
    }, J);
    function J() {
    }
    function On(e) {
      function n(a, u) {
        if (u) {
          for (var f = arguments.length, c = new Array(f - 1); --f; ) c[f - 1] = arguments[f];
          return t[a].subscribe.apply(null, c), e;
        }
        if (typeof a == "string") return t[a];
      }
      var t = {};
      n.addEventType = o;
      for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
      return n;
      function o(a, u, f) {
        if (typeof a != "object") {
          var c;
          u = u || Tr;
          var p = { subscribers: [], fire: f = f || U, subscribe: function(s) {
            p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
          }, unsubscribe: function(s) {
            p.subscribers = p.subscribers.filter(function(y) {
              return y !== s;
            }), p.fire = p.subscribers.reduce(u, f);
          } };
          return t[a] = n[a] = p;
        }
        G(c = a).forEach(function(s) {
          var y = c[s];
          if (z(y)) o(s, c[s][0], c[s][1]);
          else {
            if (y !== "asap") throw new A.InvalidArgument("Invalid event config");
            var l = o(s, Ae, function() {
              for (var d = arguments.length, v = new Array(d); d--; ) v[d] = arguments[d];
              l.subscribers.forEach(function(h) {
                Fe(function() {
                  h.apply(null, v);
                });
              });
            });
          }
        });
      }
    }
    function Sn(e, n) {
      return qe(n).from({ prototype: e }), n;
    }
    function vn(e, n) {
      return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
    }
    function gt(e, n) {
      e.filter = tn(e.filter, n);
    }
    function bt(e, n, t) {
      var r = e.replayFilter;
      e.replayFilter = r ? function() {
        return tn(r(), n());
      } : n, e.justLimit = t && !r;
    }
    function Un(e, n) {
      if (e.isPrimKey) return n.primaryKey;
      var t = n.getIndexByKeyPath(e.index);
      if (!t) throw new A.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
      return t;
    }
    function ir(e, n, t) {
      var r = Un(e, n.schema);
      return n.openCursor({ trans: t, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
    }
    function Yn(e, n, t, r) {
      var i = e.replayFilter ? tn(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        var o = {}, a = function(u, f, c) {
          var p, s;
          i && !i(f, c, function(y) {
            return f.stop(y);
          }, function(y) {
            return f.fail(y);
          }) || ((s = "" + (p = f.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), Q(o, s) || (o[s] = !0, n(u, f, c)));
        };
        return Promise.all([e.or._iterate(a, t), or(ir(e, r, t), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
      }
      return or(ir(e, r, t), tn(e.algorithm, i), n, !e.keysOnly && e.valueMapper);
    }
    function or(e, n, t, r) {
      var i = Z(r ? function(o, a, u) {
        return t(r(o), a, u);
      } : t);
      return e.then(function(o) {
        if (o) return o.start(function() {
          var a = function() {
            return o.continue();
          };
          n && !n(o, function(u) {
            return a = u;
          }, function(u) {
            o.stop(u), a = U;
          }, function(u) {
            o.fail(u), a = U;
          }) || i(o.value, o, function(u) {
            return a = u;
          }), a();
        });
      });
    }
    var $e = Symbol(), Pn = (ar.prototype.execute = function(e) {
      if (this.add !== void 0) {
        var n = this.add;
        if (z(n)) return He(He([], z(e) ? e : [], !0), n).sort();
        if (typeof n == "number") return (Number(e) || 0) + n;
        if (typeof n == "bigint") try {
          return BigInt(e) + n;
        } catch {
          return BigInt(0) + n;
        }
        throw new TypeError("Invalid term ".concat(n));
      }
      if (this.remove !== void 0) {
        var t = this.remove;
        if (z(t)) return z(e) ? e.filter(function(r) {
          return !t.includes(r);
        }).sort() : [];
        if (typeof t == "number") return Number(e) - t;
        if (typeof t == "bigint") try {
          return BigInt(e) - t;
        } catch {
          return BigInt(0) - t;
        }
        throw new TypeError("Invalid subtrahend ".concat(t));
      }
      return n = (n = this.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? this.replacePrefix[1] + e.substring(n.length) : e;
    }, ar);
    function ar(e) {
      Object.assign(this, e);
    }
    var Rr = (V.prototype._read = function(e, n) {
      var t = this._ctx;
      return t.error ? t.table._trans(null, re.bind(null, t.error)) : t.table._trans("readonly", e).then(n);
    }, V.prototype._write = function(e) {
      var n = this._ctx;
      return n.error ? n.table._trans(null, re.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
    }, V.prototype._addAlgorithm = function(e) {
      var n = this._ctx;
      n.algorithm = tn(n.algorithm, e);
    }, V.prototype._iterate = function(e, n) {
      return Yn(this._ctx, e, n, this._ctx.table.core);
    }, V.prototype.clone = function(e) {
      var n = Object.create(this.constructor.prototype), t = Object.create(this._ctx);
      return e && oe(t, e), n._ctx = t, n;
    }, V.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, V.prototype.each = function(e) {
      var n = this._ctx;
      return this._read(function(t) {
        return Yn(n, e, t, n.table.core);
      });
    }, V.prototype.count = function(e) {
      var n = this;
      return this._read(function(t) {
        var r = n._ctx, i = r.table.core;
        if (vn(r, !0)) return i.count({ trans: t, query: { index: Un(r, i.schema), range: r.range } }).then(function(a) {
          return Math.min(a, r.limit);
        });
        var o = 0;
        return Yn(r, function() {
          return ++o, !1;
        }, t, i).then(function() {
          return o;
        });
      }).then(e);
    }, V.prototype.sortBy = function(e, n) {
      var t = e.split(".").reverse(), r = t[0], i = t.length - 1;
      function o(f, c) {
        return c ? o(f[t[c]], c - 1) : f[r];
      }
      var a = this._ctx.dir === "next" ? 1 : -1;
      function u(f, c) {
        return f = o(f, i), c = o(c, i), f < c ? -a : c < f ? a : 0;
      }
      return this.toArray(function(f) {
        return f.sort(u);
      }).then(n);
    }, V.prototype.toArray = function(e) {
      var n = this;
      return this._read(function(t) {
        var r = n._ctx;
        if (r.dir === "next" && vn(r, !0) && 0 < r.limit) {
          var i = r.valueMapper, o = Un(r, r.table.core.schema);
          return r.table.core.query({ trans: t, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(u) {
            return u = u.result, i ? u.map(i) : u;
          });
        }
        var a = [];
        return Yn(r, function(u) {
          return a.push(u);
        }, t, r.table.core).then(function() {
          return a;
        });
      }, e);
    }, V.prototype.offset = function(e) {
      var n = this._ctx;
      return e <= 0 || (n.offset += e, vn(n) ? bt(n, function() {
        var t = e;
        return function(r, i) {
          return t === 0 || (t === 1 ? --t : i(function() {
            r.advance(t), t = 0;
          }), !1);
        };
      }) : bt(n, function() {
        var t = e;
        return function() {
          return --t < 0;
        };
      })), this;
    }, V.prototype.limit = function(e) {
      return this._ctx.limit = Math.min(this._ctx.limit, e), bt(this._ctx, function() {
        var n = e;
        return function(t, r, i) {
          return --n <= 0 && r(i), 0 <= n;
        };
      }, !0), this;
    }, V.prototype.until = function(e, n) {
      return gt(this._ctx, function(t, r, i) {
        return !e(t.value) || (r(i), n);
      }), this;
    }, V.prototype.first = function(e) {
      return this.limit(1).toArray(function(n) {
        return n[0];
      }).then(e);
    }, V.prototype.last = function(e) {
      return this.reverse().first(e);
    }, V.prototype.filter = function(e) {
      var n;
      return gt(this._ctx, function(t) {
        return e(t.value);
      }), (n = this._ctx).isMatch = tn(n.isMatch, e), this;
    }, V.prototype.and = function(e) {
      return this.filter(e);
    }, V.prototype.or = function(e) {
      return new this.db.WhereClause(this._ctx.table, e, this);
    }, V.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, V.prototype.desc = function() {
      return this.reverse();
    }, V.prototype.eachKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.key, r);
      });
    }, V.prototype.eachUniqueKey = function(e) {
      return this._ctx.unique = "unique", this.eachKey(e);
    }, V.prototype.eachPrimaryKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.primaryKey, r);
      });
    }, V.prototype.keys = function(e) {
      var n = this._ctx;
      n.keysOnly = !n.isMatch;
      var t = [];
      return this.each(function(r, i) {
        t.push(i.key);
      }).then(function() {
        return t;
      }).then(e);
    }, V.prototype.primaryKeys = function(e) {
      var n = this._ctx;
      if (n.dir === "next" && vn(n, !0) && 0 < n.limit) return this._read(function(r) {
        var i = Un(n, n.table.core.schema);
        return n.table.core.query({ trans: r, values: !1, limit: n.limit, query: { index: i, range: n.range } });
      }).then(function(r) {
        return r.result;
      }).then(e);
      n.keysOnly = !n.isMatch;
      var t = [];
      return this.each(function(r, i) {
        t.push(i.primaryKey);
      }).then(function() {
        return t;
      }).then(e);
    }, V.prototype.uniqueKeys = function(e) {
      return this._ctx.unique = "unique", this.keys(e);
    }, V.prototype.firstKey = function(e) {
      return this.limit(1).keys(function(n) {
        return n[0];
      }).then(e);
    }, V.prototype.lastKey = function(e) {
      return this.reverse().firstKey(e);
    }, V.prototype.distinct = function() {
      var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
      if (!e || !e.multi) return this;
      var n = {};
      return gt(this._ctx, function(i) {
        var r = i.primaryKey.toString(), i = Q(n, r);
        return n[r] = !0, !i;
      }), this;
    }, V.prototype.modify = function(e) {
      var n = this, t = this._ctx;
      return this._write(function(r) {
        var i, o, a;
        a = typeof e == "function" ? e : (i = G(e), o = i.length, function(h) {
          for (var m = !1, g = 0; g < o; ++g) {
            var b = i[g], w = e[b], x = le(h, b);
            w instanceof Pn ? (de(h, b, w.execute(x)), m = !0) : x !== w && (de(h, b, w), m = !0);
          }
          return m;
        });
        function u(h, b) {
          var g = b.failures, b = b.numFailures;
          d += h - b;
          for (var w = 0, x = G(g); w < x.length; w++) {
            var S = x[w];
            l.push(g[S]);
          }
        }
        var f = t.table.core, c = f.schema.primaryKey, p = c.outbound, s = c.extractKey, y = n.db._options.modifyChunkSize || 200, l = [], d = 0, v = [];
        return n.clone().primaryKeys().then(function(h) {
          function m(b) {
            var w = Math.min(y, h.length - b);
            return f.getMany({ trans: r, keys: h.slice(b, b + w), cache: "immutable" }).then(function(x) {
              for (var S = [], k = [], O = p ? [] : null, P = [], _ = 0; _ < w; ++_) {
                var $ = x[_], R = { value: je($), primKey: h[b + _] };
                a.call(R, R.value, R) !== !1 && (R.value == null ? P.push(h[b + _]) : p || Y(s($), s(R.value)) === 0 ? (k.push(R.value), p && O.push(h[b + _])) : (P.push(h[b + _]), S.push(R.value)));
              }
              return Promise.resolve(0 < S.length && f.mutate({ trans: r, type: "add", values: S }).then(function(L) {
                for (var F in L.failures) P.splice(parseInt(F), 1);
                u(S.length, L);
              })).then(function() {
                return (0 < k.length || g && typeof e == "object") && f.mutate({ trans: r, type: "put", keys: O, values: k, criteria: g, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < b }).then(function(L) {
                  return u(k.length, L);
                });
              }).then(function() {
                return (0 < P.length || g && e === wt) && f.mutate({ trans: r, type: "delete", keys: P, criteria: g, isAdditionalChunk: 0 < b }).then(function(L) {
                  return u(P.length, L);
                });
              }).then(function() {
                return h.length > b + w && m(b + y);
              });
            });
          }
          var g = vn(t) && t.limit === 1 / 0 && (typeof e != "function" || e === wt) && { index: t.index, range: t.range };
          return m(0).then(function() {
            if (0 < l.length) throw new fe("Error modifying one or more objects", l, d, v);
            return h.length;
          });
        });
      });
    }, V.prototype.delete = function() {
      var e = this._ctx, n = e.range;
      return vn(e) && (e.isPrimKey || n.type === 3) ? this._write(function(t) {
        var r = e.table.core.schema.primaryKey, i = n;
        return e.table.core.count({ trans: t, query: { index: r, range: i } }).then(function(o) {
          return e.table.core.mutate({ trans: t, type: "deleteRange", range: i }).then(function(a) {
            var u = a.failures;
            if (a.lastResult, a.results, a = a.numFailures, a) throw new fe("Could not delete some values", Object.keys(u).map(function(f) {
              return u[f];
            }), o - a);
            return o - a;
          });
        });
      }) : this.modify(wt);
    }, V);
    function V() {
    }
    var wt = function(e, n) {
      return n.value = null;
    };
    function Fr(e, n) {
      return e < n ? -1 : e === n ? 0 : 1;
    }
    function Nr(e, n) {
      return n < e ? -1 : e === n ? 0 : 1;
    }
    function ke(e, n, t) {
      return e = e instanceof sr ? new e.Collection(e) : e, e._ctx.error = new (t || TypeError)(n), e;
    }
    function mn(e) {
      return new e.Collection(e, function() {
        return ur("");
      }).limit(0);
    }
    function Vn(e, n, t, r) {
      var i, o, a, u, f, c, p, s = t.length;
      if (!t.every(function(d) {
        return typeof d == "string";
      })) return ke(e, Jt);
      function y(d) {
        i = d === "next" ? function(h) {
          return h.toUpperCase();
        } : function(h) {
          return h.toLowerCase();
        }, o = d === "next" ? function(h) {
          return h.toLowerCase();
        } : function(h) {
          return h.toUpperCase();
        }, a = d === "next" ? Fr : Nr;
        var v = t.map(function(h) {
          return { lower: o(h), upper: i(h) };
        }).sort(function(h, m) {
          return a(h.lower, m.lower);
        });
        u = v.map(function(h) {
          return h.upper;
        }), f = v.map(function(h) {
          return h.lower;
        }), p = (c = d) === "next" ? "" : r;
      }
      y("next"), e = new e.Collection(e, function() {
        return Ve(u[0], f[s - 1] + r);
      }), e._ondirectionchange = function(d) {
        y(d);
      };
      var l = 0;
      return e._addAlgorithm(function(d, v, h) {
        var m = d.key;
        if (typeof m != "string") return !1;
        var g = o(m);
        if (n(g, f, l)) return !0;
        for (var b = null, w = l; w < s; ++w) {
          var x = function(S, k, O, P, _, $) {
            for (var R = Math.min(S.length, P.length), L = -1, F = 0; F < R; ++F) {
              var Ee = k[F];
              if (Ee !== P[F]) return _(S[F], O[F]) < 0 ? S.substr(0, F) + O[F] + O.substr(F + 1) : _(S[F], P[F]) < 0 ? S.substr(0, F) + P[F] + O.substr(F + 1) : 0 <= L ? S.substr(0, L) + k[L] + O.substr(L + 1) : null;
              _(S[F], Ee) < 0 && (L = F);
            }
            return R < P.length && $ === "next" ? S + O.substr(S.length) : R < S.length && $ === "prev" ? S.substr(0, O.length) : L < 0 ? null : S.substr(0, L) + P[L] + O.substr(L + 1);
          }(m, g, u[w], f[w], a, c);
          x === null && b === null ? l = w + 1 : (b === null || 0 < a(b, x)) && (b = x);
        }
        return v(b !== null ? function() {
          d.continue(b + p);
        } : h), !1;
      }), e;
    }
    function Ve(e, n, t, r) {
      return { type: 2, lower: e, upper: n, lowerOpen: t, upperOpen: r };
    }
    function ur(e) {
      return { type: 1, lower: e, upper: e };
    }
    var sr = (Object.defineProperty(se.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), se.prototype.between = function(e, n, t, r) {
      t = t !== !1, r = r === !0;
      try {
        return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (t || r) && (!t || !r) ? mn(this) : new this.Collection(this, function() {
          return Ve(e, n, !t, !r);
        });
      } catch {
        return ke(this, Be);
      }
    }, se.prototype.equals = function(e) {
      return e == null ? ke(this, Be) : new this.Collection(this, function() {
        return ur(e);
      });
    }, se.prototype.above = function(e) {
      return e == null ? ke(this, Be) : new this.Collection(this, function() {
        return Ve(e, void 0, !0);
      });
    }, se.prototype.aboveOrEqual = function(e) {
      return e == null ? ke(this, Be) : new this.Collection(this, function() {
        return Ve(e, void 0, !1);
      });
    }, se.prototype.below = function(e) {
      return e == null ? ke(this, Be) : new this.Collection(this, function() {
        return Ve(void 0, e, !1, !0);
      });
    }, se.prototype.belowOrEqual = function(e) {
      return e == null ? ke(this, Be) : new this.Collection(this, function() {
        return Ve(void 0, e);
      });
    }, se.prototype.startsWith = function(e) {
      return typeof e != "string" ? ke(this, Jt) : this.between(e, e + nn, !0, !0);
    }, se.prototype.startsWithIgnoreCase = function(e) {
      return e === "" ? this.startsWith(e) : Vn(this, function(n, t) {
        return n.indexOf(t[0]) === 0;
      }, [e], nn);
    }, se.prototype.equalsIgnoreCase = function(e) {
      return Vn(this, function(n, t) {
        return n === t[0];
      }, [e], "");
    }, se.prototype.anyOfIgnoreCase = function() {
      var e = I.apply(q, arguments);
      return e.length === 0 ? mn(this) : Vn(this, function(n, t) {
        return t.indexOf(n) !== -1;
      }, e, "");
    }, se.prototype.startsWithAnyOfIgnoreCase = function() {
      var e = I.apply(q, arguments);
      return e.length === 0 ? mn(this) : Vn(this, function(n, t) {
        return t.some(function(r) {
          return n.indexOf(r) === 0;
        });
      }, e, nn);
    }, se.prototype.anyOf = function() {
      var e = this, n = I.apply(q, arguments), t = this._cmp;
      try {
        n.sort(t);
      } catch {
        return ke(this, Be);
      }
      if (n.length === 0) return mn(this);
      var r = new this.Collection(this, function() {
        return Ve(n[0], n[n.length - 1]);
      });
      r._ondirectionchange = function(o) {
        t = o === "next" ? e._ascending : e._descending, n.sort(t);
      };
      var i = 0;
      return r._addAlgorithm(function(o, a, u) {
        for (var f = o.key; 0 < t(f, n[i]); ) if (++i === n.length) return a(u), !1;
        return t(f, n[i]) === 0 || (a(function() {
          o.continue(n[i]);
        }), !1);
      }), r;
    }, se.prototype.notEqual = function(e) {
      return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, se.prototype.noneOf = function() {
      var e = I.apply(q, arguments);
      if (e.length === 0) return new this.Collection(this);
      try {
        e.sort(this._ascending);
      } catch {
        return ke(this, Be);
      }
      var n = e.reduce(function(t, r) {
        return t ? t.concat([[t[t.length - 1][1], r]]) : [[-1 / 0, r]];
      }, null);
      return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
    }, se.prototype.inAnyRange = function(m, n) {
      var t = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
      if (m.length === 0) return mn(this);
      if (!m.every(function(g) {
        return g[0] !== void 0 && g[1] !== void 0 && i(g[0], g[1]) <= 0;
      })) return ke(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", A.InvalidArgument);
      var f = !n || n.includeLowers !== !1, c = n && n.includeUppers === !0, p, s = i;
      function y(g, b) {
        return s(g[0], b[0]);
      }
      try {
        (p = m.reduce(function(g, b) {
          for (var w = 0, x = g.length; w < x; ++w) {
            var S = g[w];
            if (r(b[0], S[1]) < 0 && 0 < r(b[1], S[0])) {
              S[0] = a(S[0], b[0]), S[1] = u(S[1], b[1]);
              break;
            }
          }
          return w === x && g.push(b), g;
        }, [])).sort(y);
      } catch {
        return ke(this, Be);
      }
      var l = 0, d = c ? function(g) {
        return 0 < i(g, p[l][1]);
      } : function(g) {
        return 0 <= i(g, p[l][1]);
      }, v = f ? function(g) {
        return 0 < o(g, p[l][0]);
      } : function(g) {
        return 0 <= o(g, p[l][0]);
      }, h = d, m = new this.Collection(this, function() {
        return Ve(p[0][0], p[p.length - 1][1], !f, !c);
      });
      return m._ondirectionchange = function(g) {
        s = g === "next" ? (h = d, i) : (h = v, o), p.sort(y);
      }, m._addAlgorithm(function(g, b, w) {
        for (var x, S = g.key; h(S); ) if (++l === p.length) return b(w), !1;
        return !d(x = S) && !v(x) || (t._cmp(S, p[l][1]) === 0 || t._cmp(S, p[l][0]) === 0 || b(function() {
          s === i ? g.continue(p[l][0]) : g.continue(p[l][1]);
        }), !1);
      }), m;
    }, se.prototype.startsWithAnyOf = function() {
      var e = I.apply(q, arguments);
      return e.every(function(n) {
        return typeof n == "string";
      }) ? e.length === 0 ? mn(this) : this.inAnyRange(e.map(function(n) {
        return [n, n + nn];
      })) : ke(this, "startsWithAnyOf() only works with strings");
    }, se);
    function se() {
    }
    function Te(e) {
      return Z(function(n) {
        return Dn(n), e(n.target.error), !1;
      });
    }
    function Dn(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
    }
    var En = "storagemutated", _t = "x-storagemutated-1", We = On(null, En), Lr = (Me.prototype._lock = function() {
      return Qe(!C.global), ++this._reculock, this._reculock !== 1 || C.global || (C.lockOwnerFor = this), this;
    }, Me.prototype._unlock = function() {
      if (Qe(!C.global), --this._reculock == 0) for (C.global || (C.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var e = this._blockedFuncs.shift();
        try {
          en(e[1], e[0]);
        } catch {
        }
      }
      return this;
    }, Me.prototype._locked = function() {
      return this._reculock && C.lockOwnerFor !== this;
    }, Me.prototype.create = function(e) {
      var n = this;
      if (!this.mode) return this;
      var t = this.db.idbdb, r = this.db._state.dbOpenError;
      if (Qe(!this.idbtrans), !e && !t) switch (r && r.name) {
        case "DatabaseClosedError":
          throw new A.DatabaseClosed(r);
        case "MissingAPIError":
          throw new A.MissingAPI(r.message, r);
        default:
          throw new A.OpenFailed(r);
      }
      if (!this.active) throw new A.TransactionInactive();
      return Qe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || t).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Z(function(i) {
        Dn(i), n._reject(e.error);
      }), e.onabort = Z(function(i) {
        Dn(i), n.active && n._reject(new A.Abort(e.error)), n.active = !1, n.on("abort").fire(i);
      }), e.oncomplete = Z(function() {
        n.active = !1, n._resolve(), "mutatedParts" in e && We.storagemutated.fire(e.mutatedParts);
      }), this;
    }, Me.prototype._promise = function(e, n, t) {
      var r = this;
      if (e === "readwrite" && this.mode !== "readwrite") return re(new A.ReadOnly("Transaction is readonly"));
      if (!this.active) return re(new A.TransactionInactive());
      if (this._locked()) return new K(function(o, a) {
        r._blockedFuncs.push([function() {
          r._promise(e, n, t).then(o, a);
        }, C]);
      });
      if (t) return Le(function() {
        var o = new K(function(a, u) {
          r._lock();
          var f = n(a, u, r);
          f && f.then && f.then(a, u);
        });
        return o.finally(function() {
          return r._unlock();
        }), o._lib = !0, o;
      });
      var i = new K(function(o, a) {
        var u = n(o, a, r);
        u && u.then && u.then(o, a);
      });
      return i._lib = !0, i;
    }, Me.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, Me.prototype.waitFor = function(e) {
      var n, t = this._root(), r = K.resolve(e);
      t._waitingFor ? t._waitingFor = t._waitingFor.then(function() {
        return r;
      }) : (t._waitingFor = r, t._waitingQueue = [], n = t.idbtrans.objectStore(t.storeNames[0]), function o() {
        for (++t._spinCount; t._waitingQueue.length; ) t._waitingQueue.shift()();
        t._waitingFor && (n.get(-1 / 0).onsuccess = o);
      }());
      var i = t._waitingFor;
      return new K(function(o, a) {
        r.then(function(u) {
          return t._waitingQueue.push(Z(o.bind(null, u)));
        }, function(u) {
          return t._waitingQueue.push(Z(a.bind(null, u)));
        }).finally(function() {
          t._waitingFor === i && (t._waitingFor = null);
        });
      });
    }, Me.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new A.Abort()));
    }, Me.prototype.table = function(e) {
      var n = this._memoizedTables || (this._memoizedTables = {});
      if (Q(n, e)) return n[e];
      var t = this.schema[e];
      if (!t) throw new A.NotFound("Table " + e + " not part of transaction");
      return t = new this.db.Table(e, t, this), t.core = this.db.core.table(e), n[e] = t;
    }, Me);
    function Me() {
    }
    function xt(e, n, t, r, i, o, a) {
      return { name: e, keyPath: n, unique: t, multi: r, auto: i, compound: o, src: (t && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + cr(n) };
    }
    function cr(e) {
      return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
    }
    function kt(e, n, t) {
      return { name: e, primKey: n, indexes: t, mappedClass: null, idxByName: (r = function(i) {
        return [i.name, i];
      }, t.reduce(function(i, o, a) {
        return a = r(o, a), a && (i[a[0]] = a[1]), i;
      }, {})) };
      var r;
    }
    var Kn = function(e) {
      try {
        return e.only([[]]), Kn = function() {
          return [[]];
        }, [[]];
      } catch {
        return Kn = function() {
          return nn;
        }, nn;
      }
    };
    function Ot(e) {
      return e == null ? function() {
      } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(t) {
        return t[n];
      } : function(t) {
        return le(t, n);
      } : function(t) {
        return le(t, e);
      };
      var n;
    }
    function lr(e) {
      return [].slice.call(e);
    }
    var Ur = 0;
    function jn(e) {
      return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
    }
    function Yr(e, n, f) {
      function r(h) {
        if (h.type === 3) return null;
        if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var l = h.lower, d = h.upper, v = h.lowerOpen, h = h.upperOpen;
        return l === void 0 ? d === void 0 ? null : n.upperBound(d, !!h) : d === void 0 ? n.lowerBound(l, !!v) : n.bound(l, d, !!v, !!h);
      }
      function i(y) {
        var l, d = y.name;
        return { name: d, schema: y, mutate: function(v) {
          var h = v.trans, m = v.type, g = v.keys, b = v.values, w = v.range;
          return new Promise(function(x, S) {
            x = Z(x);
            var k = h.objectStore(d), O = k.keyPath == null, P = m === "put" || m === "add";
            if (!P && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
            var _, $ = (g || b || { length: 1 }).length;
            if (g && b && g.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
            if ($ === 0) return x({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function R(be) {
              ++Ee, Dn(be);
            }
            var L = [], F = [], Ee = 0;
            if (m === "deleteRange") {
              if (w.type === 4) return x({ numFailures: Ee, failures: F, results: [], lastResult: void 0 });
              w.type === 3 ? L.push(_ = k.clear()) : L.push(_ = k.delete(r(w)));
            } else {
              var O = P ? O ? [b, g] : [b, null] : [g, null], N = O[0], pe = O[1];
              if (P) for (var ye = 0; ye < $; ++ye) L.push(_ = pe && pe[ye] !== void 0 ? k[m](N[ye], pe[ye]) : k[m](N[ye])), _.onerror = R;
              else for (ye = 0; ye < $; ++ye) L.push(_ = k[m](N[ye])), _.onerror = R;
            }
            function it(be) {
              be = be.target.result, L.forEach(function(an, Lt) {
                return an.error != null && (F[Lt] = an.error);
              }), x({ numFailures: Ee, failures: F, results: m === "delete" ? g : L.map(function(an) {
                return an.result;
              }), lastResult: be });
            }
            _.onerror = function(be) {
              R(be), it(be);
            }, _.onsuccess = it;
          });
        }, getMany: function(v) {
          var h = v.trans, m = v.keys;
          return new Promise(function(g, b) {
            g = Z(g);
            for (var w, x = h.objectStore(d), S = m.length, k = new Array(S), O = 0, P = 0, _ = function(L) {
              L = L.target, k[L._pos] = L.result, ++P === O && g(k);
            }, $ = Te(b), R = 0; R < S; ++R) m[R] != null && ((w = x.get(m[R]))._pos = R, w.onsuccess = _, w.onerror = $, ++O);
            O === 0 && g(k);
          });
        }, get: function(v) {
          var h = v.trans, m = v.key;
          return new Promise(function(g, b) {
            g = Z(g);
            var w = h.objectStore(d).get(m);
            w.onsuccess = function(x) {
              return g(x.target.result);
            }, w.onerror = Te(b);
          });
        }, query: (l = c, function(v) {
          return new Promise(function(h, m) {
            h = Z(h);
            var g, b, w, O = v.trans, x = v.values, S = v.limit, _ = v.query, k = S === 1 / 0 ? void 0 : S, P = _.index, _ = _.range, O = O.objectStore(d), P = P.isPrimaryKey ? O : O.index(P.name), _ = r(_);
            if (S === 0) return h({ result: [] });
            l ? ((k = x ? P.getAll(_, k) : P.getAllKeys(_, k)).onsuccess = function($) {
              return h({ result: $.target.result });
            }, k.onerror = Te(m)) : (g = 0, b = !x && "openKeyCursor" in P ? P.openKeyCursor(_) : P.openCursor(_), w = [], b.onsuccess = function($) {
              var R = b.result;
              return R ? (w.push(x ? R.value : R.primaryKey), ++g === S ? h({ result: w }) : void R.continue()) : h({ result: w });
            }, b.onerror = Te(m));
          });
        }), openCursor: function(v) {
          var h = v.trans, m = v.values, g = v.query, b = v.reverse, w = v.unique;
          return new Promise(function(x, S) {
            x = Z(x);
            var P = g.index, k = g.range, O = h.objectStore(d), O = P.isPrimaryKey ? O : O.index(P.name), P = b ? w ? "prevunique" : "prev" : w ? "nextunique" : "next", _ = !m && "openKeyCursor" in O ? O.openKeyCursor(r(k), P) : O.openCursor(r(k), P);
            _.onerror = Te(S), _.onsuccess = Z(function($) {
              var R, L, F, Ee, N = _.result;
              N ? (N.___id = ++Ur, N.done = !1, R = N.continue.bind(N), L = (L = N.continuePrimaryKey) && L.bind(N), F = N.advance.bind(N), Ee = function() {
                throw new Error("Cursor not stopped");
              }, N.trans = h, N.stop = N.continue = N.continuePrimaryKey = N.advance = function() {
                throw new Error("Cursor not started");
              }, N.fail = Z(S), N.next = function() {
                var pe = this, ye = 1;
                return this.start(function() {
                  return ye-- ? pe.continue() : pe.stop();
                }).then(function() {
                  return pe;
                });
              }, N.start = function(pe) {
                function ye() {
                  if (_.result) try {
                    pe();
                  } catch (be) {
                    N.fail(be);
                  }
                  else N.done = !0, N.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, N.stop();
                }
                var it = new Promise(function(be, an) {
                  be = Z(be), _.onerror = Te(an), N.fail = an, N.stop = function(Lt) {
                    N.stop = N.continue = N.continuePrimaryKey = N.advance = Ee, be(Lt);
                  };
                });
                return _.onsuccess = Z(function(be) {
                  _.onsuccess = ye, ye();
                }), N.continue = R, N.continuePrimaryKey = L, N.advance = F, ye(), it;
              }, x(N)) : x(null);
            }, S);
          });
        }, count: function(v) {
          var h = v.query, m = v.trans, g = h.index, b = h.range;
          return new Promise(function(w, x) {
            var S = m.objectStore(d), k = g.isPrimaryKey ? S : S.index(g.name), S = r(b), k = S ? k.count(S) : k.count();
            k.onsuccess = Z(function(O) {
              return w(O.target.result);
            }), k.onerror = Te(x);
          });
        } };
      }
      var o, a, u, p = (a = f, u = lr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(y) {
        return a.objectStore(y);
      }).map(function(y) {
        var l = y.keyPath, h = y.autoIncrement, d = z(l), v = {}, h = { name: y.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: Ot(l) }, indexes: lr(y.indexNames).map(function(m) {
          return y.index(m);
        }).map(function(w) {
          var g = w.name, b = w.unique, x = w.multiEntry, w = w.keyPath, x = { name: g, compound: z(w), keyPath: w, unique: b, multiEntry: x, extractKey: Ot(w) };
          return v[jn(w)] = x;
        }), getIndexByKeyPath: function(m) {
          return v[jn(m)];
        } };
        return v[":id"] = h.primaryKey, l != null && (v[jn(l)] = h.primaryKey), h;
      }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), f = p.schema, c = p.hasGetAll, p = f.tables.map(i), s = {};
      return p.forEach(function(y) {
        return s[y.name] = y;
      }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(y) {
        if (!s[y]) throw new Error("Table '".concat(y, "' not found"));
        return s[y];
      }, MIN_KEY: -1 / 0, MAX_KEY: Kn(n), schema: f };
    }
    function Vr(e, n, t, r) {
      var i = t.IDBKeyRange;
      return t.indexedDB, { dbcore: (r = Yr(n, i, r), e.dbcore.reduce(function(o, a) {
        return a = a.create, T(T({}, o), a(o));
      }, r)) };
    }
    function Wn(e, r) {
      var t = r.db, r = Vr(e._middlewares, t, e._deps, r);
      e.core = r.dbcore, e.tables.forEach(function(i) {
        var o = i.name;
        e.core.schema.tables.some(function(a) {
          return a.name === o;
        }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
      });
    }
    function zn(e, n, t, r) {
      t.forEach(function(i) {
        var o = r[i];
        n.forEach(function(a) {
          var u = function f(c, p) {
            return ot(c, p) || (c = ve(c)) && f(c, p);
          }(a, i);
          (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? me(a, i, { get: function() {
            return this.table(i);
          }, set: function(f) {
            Pe(this, i, { value: f, writable: !0, configurable: !0, enumerable: !0 });
          } }) : a[i] = new e.Table(i, o));
        });
      });
    }
    function St(e, n) {
      n.forEach(function(t) {
        for (var r in t) t[r] instanceof e.Table && delete t[r];
      });
    }
    function Wr(e, n) {
      return e._cfg.version - n._cfg.version;
    }
    function zr(e, n, t, r) {
      var i = e._dbSchema;
      t.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = kt("$meta", hr("")[0], []), e._storeNames.push("$meta"));
      var o = e._createTransaction("readwrite", e._storeNames, i);
      o.create(t), o._completion.catch(r);
      var a = o._reject.bind(o), u = C.transless || C;
      Le(function() {
        return C.trans = o, C.transless = u, n !== 0 ? (Wn(e, t), c = n, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(p) {
          return p ?? c;
        }) : K.resolve(c)).then(function(p) {
          return y = p, l = o, d = t, v = [], p = (s = e)._versions, h = s._dbSchema = Qn(0, s.idbdb, d), (p = p.filter(function(m) {
            return m._cfg.version >= y;
          })).length !== 0 ? (p.forEach(function(m) {
            v.push(function() {
              var g = h, b = m._cfg.dbschema;
              Gn(s, g, d), Gn(s, b, d), h = s._dbSchema = b;
              var w = Pt(g, b);
              w.add.forEach(function(P) {
                Dt(d, P[0], P[1].primKey, P[1].indexes);
              }), w.change.forEach(function(P) {
                if (P.recreate) throw new A.Upgrade("Not yet support for changing primary key");
                var _ = d.objectStore(P.name);
                P.add.forEach(function($) {
                  return Hn(_, $);
                }), P.change.forEach(function($) {
                  _.deleteIndex($.name), Hn(_, $);
                }), P.del.forEach(function($) {
                  return _.deleteIndex($);
                });
              });
              var x = m._cfg.contentUpgrade;
              if (x && m._cfg.version > y) {
                Wn(s, d), l._memoizedTables = {};
                var S = ln(b);
                w.del.forEach(function(P) {
                  S[P] = g[P];
                }), St(s, [s.Transaction.prototype]), zn(s, [s.Transaction.prototype], G(S), S), l.schema = S;
                var k, O = H(x);
                return O && pn(), w = K.follow(function() {
                  var P;
                  (k = x(l)) && O && (P = Ue.bind(null, null), k.then(P, P));
                }), k && typeof k.then == "function" ? K.resolve(k) : w.then(function() {
                  return k;
                });
              }
            }), v.push(function(g) {
              var b, w, x = m._cfg.dbschema;
              b = x, w = g, [].slice.call(w.db.objectStoreNames).forEach(function(S) {
                return b[S] == null && w.db.deleteObjectStore(S);
              }), St(s, [s.Transaction.prototype]), zn(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
            }), v.push(function(g) {
              s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(b) {
                return b !== "$meta";
              })) : g.objectStore("$meta").put(m._cfg.version, "version"));
            });
          }), function m() {
            return v.length ? K.resolve(v.shift()(l.idbtrans)).then(m) : K.resolve();
          }().then(function() {
            fr(h, d);
          })) : K.resolve();
          var s, y, l, d, v, h;
        }).catch(a)) : (G(i).forEach(function(p) {
          Dt(t, p, i[p].primKey, i[p].indexes);
        }), Wn(e, t), void K.follow(function() {
          return e.on.populate.fire(o);
        }).catch(a));
        var f, c;
      });
    }
    function Hr(e, n) {
      fr(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
      var t = Qn(0, e.idbdb, n);
      Gn(e, e._dbSchema, n);
      for (var r = 0, i = Pt(t, e._dbSchema).change; r < i.length; r++) {
        var o = function(a) {
          if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var u = n.objectStore(a.name);
          a.add.forEach(function(f) {
            Ce && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(f.src)), Hn(u, f);
          });
        }(i[r]);
        if (typeof o == "object") return o.value;
      }
    }
    function Pt(e, n) {
      var t, r = { del: [], add: [], change: [] };
      for (t in e) n[t] || r.del.push(t);
      for (t in n) {
        var i = e[t], o = n[t];
        if (i) {
          var a = { name: t, def: o, recreate: !1, del: [], add: [], change: [] };
          if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) a.recreate = !0, r.change.push(a);
          else {
            var u = i.idxByName, f = o.idxByName, c = void 0;
            for (c in u) f[c] || a.del.push(c);
            for (c in f) {
              var p = u[c], s = f[c];
              p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
            }
            (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
          }
        } else r.add.push([t, o]);
      }
      return r;
    }
    function Dt(e, n, t, r) {
      var i = e.db.createObjectStore(n, t.keyPath ? { keyPath: t.keyPath, autoIncrement: t.auto } : { autoIncrement: t.auto });
      return r.forEach(function(o) {
        return Hn(i, o);
      }), i;
    }
    function fr(e, n) {
      G(e).forEach(function(t) {
        n.db.objectStoreNames.contains(t) || (Ce && console.debug("Dexie: Creating missing table", t), Dt(n, t, e[t].primKey, e[t].indexes));
      });
    }
    function Hn(e, n) {
      e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
    }
    function Qn(e, n, t) {
      var r = {};
      return sn(n.objectStoreNames, 0).forEach(function(i) {
        for (var o = t.objectStore(i), a = xt(cr(c = o.keyPath), c || "", !0, !1, !!o.autoIncrement, c && typeof c != "string", !0), u = [], f = 0; f < o.indexNames.length; ++f) {
          var p = o.index(o.indexNames[f]), c = p.keyPath, p = xt(p.name, c, !!p.unique, !!p.multiEntry, !1, c && typeof c != "string", !1);
          u.push(p);
        }
        r[i] = kt(i, a, u);
      }), r;
    }
    function Gn(e, n, t) {
      for (var r = t.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var o = r[i], a = t.objectStore(o);
        e._hasGetAll = "getAll" in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
          var f = a.indexNames[u], c = a.index(f).keyPath, p = typeof c == "string" ? c : "[" + sn(c).join("+") + "]";
          !n[o] || (c = n[o].idxByName[p]) && (c.name = f, delete n[o].idxByName[p], n[o].idxByName[f] = c);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && ne.WorkerGlobalScope && ne instanceof ne.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
    }
    function hr(e) {
      return e.split(",").map(function(n, t) {
        var r = (n = n.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
        return xt(r, i || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), z(i), t === 0);
      });
    }
    var Qr = (Xn.prototype._parseStoresSpec = function(e, n) {
      G(e).forEach(function(t) {
        if (e[t] !== null) {
          var r = hr(e[t]), i = r.shift();
          if (i.unique = !0, i.multi) throw new A.Schema("Primary key cannot be multi-valued");
          r.forEach(function(o) {
            if (o.auto) throw new A.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!o.keyPath) throw new A.Schema("Index must have a name and cannot be an empty string");
          }), n[t] = kt(t, i, r);
        }
      });
    }, Xn.prototype.stores = function(t) {
      var n = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? oe(this._cfg.storesSource, t) : t;
      var t = n._versions, r = {}, i = {};
      return t.forEach(function(o) {
        oe(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
      }), n._dbSchema = i, St(n, [n._allTables, n, n.Transaction.prototype]), zn(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], G(i), i), n._storeNames = G(i), this;
    }, Xn.prototype.upgrade = function(e) {
      return this._cfg.contentUpgrade = ut(this._cfg.contentUpgrade || U, e), this;
    }, Xn);
    function Xn() {
    }
    function Et(e, n) {
      var t = e._dbNamesDB;
      return t || (t = e._dbNamesDB = new Re(Nn, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), t.table("dbnames");
    }
    function Kt(e) {
      return e && typeof e.databases == "function";
    }
    function jt(e) {
      return Le(function() {
        return C.letThrough = !0, e();
      });
    }
    function At(e) {
      return !("from" in e);
    }
    var ge = function(e, n) {
      if (!this) {
        var t = new ge();
        return e && "d" in e && oe(t, e), t;
      }
      oe(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
    };
    function An(e, n, t) {
      var r = Y(n, t);
      if (!isNaN(r)) {
        if (0 < r) throw RangeError();
        if (At(e)) return oe(e, { from: n, to: t, d: 1 });
        var i = e.l, r = e.r;
        if (Y(t, e.from) < 0) return i ? An(i, n, t) : e.l = { from: n, to: t, d: 1, l: null, r: null }, pr(e);
        if (0 < Y(n, e.to)) return r ? An(r, n, t) : e.r = { from: n, to: t, d: 1, l: null, r: null }, pr(e);
        Y(n, e.from) < 0 && (e.from = n, e.l = null, e.d = r ? r.d + 1 : 1), 0 < Y(t, e.to) && (e.to = t, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, i && !e.l && Cn(e, i), r && t && Cn(e, r);
      }
    }
    function Cn(e, n) {
      At(n) || function t(r, f) {
        var o = f.from, a = f.to, u = f.l, f = f.r;
        An(r, o, a), u && t(r, u), f && t(r, f);
      }(e, n);
    }
    function dr(e, n) {
      var t = Jn(n), r = t.next();
      if (r.done) return !1;
      for (var i = r.value, o = Jn(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
        if (Y(u.from, i.to) <= 0 && 0 <= Y(u.to, i.from)) return !0;
        Y(i.from, u.from) < 0 ? i = (r = t.next(u.from)).value : u = (a = o.next(i.from)).value;
      }
      return !1;
    }
    function Jn(e) {
      var n = At(e) ? null : { s: 0, n: e };
      return { next: function(t) {
        for (var r = 0 < arguments.length; n; ) switch (n.s) {
          case 0:
            if (n.s = 1, r) for (; n.n.l && Y(t, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
            else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
          case 1:
            if (n.s = 2, !r || Y(t, n.n.to) <= 0) return { value: n.n, done: !1 };
          case 2:
            if (n.n.r) {
              n.s = 3, n = { up: n, n: n.n.r, s: 0 };
              continue;
            }
          case 3:
            n = n.up;
        }
        return { done: !0 };
      } };
    }
    function pr(e) {
      var n, t, r = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((t = e.l) === null || t === void 0 ? void 0 : t.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
      i && (n = i == "r" ? "l" : "r", t = T({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], t[i] = r[n], (e[n] = t).d = yr(t)), e.d = yr(e);
    }
    function yr(t) {
      var n = t.r, t = t.l;
      return (n ? t ? Math.max(n.d, t.d) : n.d : t ? t.d : 0) + 1;
    }
    function Zn(e, n) {
      return G(n).forEach(function(t) {
        e[t] ? Cn(e[t], n[t]) : e[t] = function r(i) {
          var o, a, u = {};
          for (o in i) Q(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || W.has(a.constructor) ? a : r(a));
          return u;
        }(n[t]);
      }), e;
    }
    function Ct(e, n) {
      return e.all || n.all || Object.keys(e).some(function(t) {
        return n[t] && dr(n[t], e[t]);
      });
    }
    Ie(ge.prototype, ((Se = { add: function(e) {
      return Cn(this, e), this;
    }, addKey: function(e) {
      return An(this, e, e), this;
    }, addKeys: function(e) {
      var n = this;
      return e.forEach(function(t) {
        return An(n, t, t);
      }), this;
    }, hasKey: function(e) {
      var n = Jn(this).next(e).value;
      return n && Y(n.from, e) <= 0 && 0 <= Y(n.to, e);
    } })[D] = function() {
      return Jn(this);
    }, Se));
    var rn = {}, Tt = {}, Mt = !1;
    function et(e) {
      Zn(Tt, e), Mt || (Mt = !0, setTimeout(function() {
        Mt = !1, It(Tt, !(Tt = {}));
      }, 0));
    }
    function It(e, n) {
      n === void 0 && (n = !1);
      var t = /* @__PURE__ */ new Set();
      if (e.all) for (var r = 0, i = Object.values(rn); r < i.length; r++) vr(a = i[r], e, t, n);
      else for (var o in e) {
        var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
        u && (o = u[1], u = u[2], (a = rn["idb://".concat(o, "/").concat(u)]) && vr(a, e, t, n));
      }
      t.forEach(function(f) {
        return f();
      });
    }
    function vr(e, n, t, r) {
      for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
        for (var u = a[o], f = u[0], c = [], p = 0, s = u[1]; p < s.length; p++) {
          var y = s[p];
          Ct(n, y.obsSet) ? y.subscribers.forEach(function(h) {
            return t.add(h);
          }) : r && c.push(y);
        }
        r && i.push([f, c]);
      }
      if (r) for (var l = 0, d = i; l < d.length; l++) {
        var v = d[l], f = v[0], c = v[1];
        e.queries.query[f] = c;
      }
    }
    function Gr(e) {
      var n = e._state, t = e._deps.indexedDB;
      if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
        return n.dbOpenError ? re(n.dbOpenError) : e;
      });
      n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
      var r = n.openCanceller, i = Math.round(10 * e.verno), o = !1;
      function a() {
        if (n.openCanceller !== r) throw new A.DatabaseClosed("db.open() was cancelled");
      }
      function u() {
        return new K(function(y, l) {
          if (a(), !t) throw new A.MissingAPI();
          var d = e.name, v = n.autoSchema || !i ? t.open(d) : t.open(d, i);
          if (!v) throw new A.MissingAPI();
          v.onerror = Te(l), v.onblocked = Z(e._fireOnBlocked), v.onupgradeneeded = Z(function(h) {
            var m;
            p = v.transaction, n.autoSchema && !e._options.allowEmptyDB ? (v.onerror = Dn, p.abort(), v.result.close(), (m = t.deleteDatabase(d)).onsuccess = m.onerror = Z(function() {
              l(new A.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
            })) : (p.onerror = Te(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = v.result, o && Hr(e, p), zr(e, h / 10, p, l));
          }, l), v.onsuccess = Z(function() {
            p = null;
            var h, m, g, b, w, x = e.idbdb = v.result, S = sn(x.objectStoreNames);
            if (0 < S.length) try {
              var k = x.transaction((b = S).length === 1 ? b[0] : b, "readonly");
              if (n.autoSchema) m = x, g = k, (h = e).verno = m.version / 10, g = h._dbSchema = Qn(0, m, g), h._storeNames = sn(m.objectStoreNames, 0), zn(h, [h._allTables], G(g), g);
              else if (Gn(e, e._dbSchema, k), ((w = Pt(Qn(0, (w = e).idbdb, k), w._dbSchema)).add.length || w.change.some(function(O) {
                return O.add.length || O.change.length;
              })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), x.close(), i = x.version + 1, o = !0, y(u());
              Wn(e, k);
            } catch {
            }
            yn.push(e), x.onversionchange = Z(function(O) {
              n.vcFired = !0, e.on("versionchange").fire(O);
            }), x.onclose = Z(function(O) {
              e.on("close").fire(O);
            }), s && (w = e._deps, k = d, x = w.indexedDB, w = w.IDBKeyRange, Kt(x) || k === Nn || Et(x, w).put({ name: k }).catch(U)), y();
          }, l);
        }).catch(function(y) {
          switch (y == null ? void 0 : y.name) {
            case "UnknownError":
              if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
              break;
            case "VersionError":
              if (0 < i) return i = 0, u();
          }
          return K.reject(y);
        });
      }
      var f, c = n.dbReadyResolve, p = null, s = !1;
      return K.race([r, (typeof navigator > "u" ? K.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(y) {
        function l() {
          return indexedDB.databases().finally(y);
        }
        f = setInterval(l, 100), l();
      }).finally(function() {
        return clearInterval(f);
      }) : Promise.resolve()).then(u)]).then(function() {
        return a(), n.onReadyBeingFired = [], K.resolve(jt(function() {
          return e.on.ready.fire(e.vip);
        })).then(function y() {
          if (0 < n.onReadyBeingFired.length) {
            var l = n.onReadyBeingFired.reduce(ut, U);
            return n.onReadyBeingFired = [], K.resolve(jt(function() {
              return l(e.vip);
            })).then(y);
          }
        });
      }).finally(function() {
        n.openCanceller === r && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
      }).catch(function(y) {
        n.dbOpenError = y;
        try {
          p && p.abort();
        } catch {
        }
        return r === n.openCanceller && e._close(), re(y);
      }).finally(function() {
        n.openComplete = !0, c();
      }).then(function() {
        var y;
        return s && (y = {}, e.tables.forEach(function(l) {
          l.schema.indexes.forEach(function(d) {
            d.name && (y["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new ge(-1 / 0, [[[]]]));
          }), y["idb://".concat(e.name, "/").concat(l.name, "/")] = y["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new ge(-1 / 0, [[[]]]);
        }), We(En).fire(y), It(y, !0)), e;
      });
    }
    function qt(e) {
      function n(o) {
        return e.next(o);
      }
      var t = i(n), r = i(function(o) {
        return e.throw(o);
      });
      function i(o) {
        return function(f) {
          var u = o(f), f = u.value;
          return u.done ? f : f && typeof f.then == "function" ? f.then(t, r) : z(f) ? Promise.all(f).then(t, r) : t(f);
        };
      }
      return i(n)();
    }
    function nt(e, n, t) {
      for (var r = z(e) ? e.slice() : [e], i = 0; i < t; ++i) r.push(n);
      return r;
    }
    var Xr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
      return T(T({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema, i = {}, o = [];
        function a(s, y, l) {
          var d = jn(s), v = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, m = 0 < y, m = T(T({}, l), { name: m ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: m, keyTail: y, keyLength: h, extractKey: Ot(s), unique: !m && l.unique });
          return v.push(m), m.isPrimaryKey || o.push(m), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), y + 1, l), v.sort(function(g, b) {
            return g.keyTail - b.keyTail;
          }), m;
        }
        n = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [n];
        for (var u = 0, f = r.indexes; u < f.length; u++) {
          var c = f[u];
          a(c.keyPath, 0, c);
        }
        function p(s) {
          var y, l = s.query.index;
          return l.isVirtual ? T(T({}, s), { query: { index: l.lowLevelIndex, range: (y = s.query.range, l = l.keyTail, { type: y.type === 1 ? 2 : y.type, lower: nt(y.lower, y.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: nt(y.upper, y.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
        }
        return T(T({}, t), { schema: T(T({}, r), { primaryKey: n, indexes: o, getIndexByKeyPath: function(s) {
          return (s = i[jn(s)]) && s[0];
        } }), count: function(s) {
          return t.count(p(s));
        }, query: function(s) {
          return t.query(p(s));
        }, openCursor: function(s) {
          var y = s.query.index, l = y.keyTail, d = y.isVirtual, v = y.keyLength;
          return d ? t.openCursor(p(s)).then(function(m) {
            return m && h(m);
          }) : t.openCursor(s);
          function h(m) {
            return Object.create(m, { continue: { value: function(g) {
              g != null ? m.continue(nt(g, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? m.continue(m.key.slice(0, v).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : m.continue();
            } }, continuePrimaryKey: { value: function(g, b) {
              m.continuePrimaryKey(nt(g, e.MAX_KEY, l), b);
            } }, primaryKey: { get: function() {
              return m.primaryKey;
            } }, key: { get: function() {
              var g = m.key;
              return v === 1 ? g[0] : g.slice(0, v);
            } }, value: { get: function() {
              return m.value;
            } } });
          }
        } });
      } });
    } };
    function Bt(e, n, t, r) {
      return t = t || {}, r = r || "", G(e).forEach(function(i) {
        var o, a, u;
        Q(n, i) ? (o = e[i], a = n[i], typeof o == "object" && typeof a == "object" && o && a ? (u = j(o)) !== j(a) ? t[r + i] = n[i] : u === "Object" ? Bt(o, a, t, r + i + ".") : o !== a && (t[r + i] = n[i]) : o !== a && (t[r + i] = n[i])) : t[r + i] = void 0;
      }), G(n).forEach(function(i) {
        Q(e, i) || (t[r + i] = n[i]);
      }), t;
    }
    function $t(e, n) {
      return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
    }
    var Jr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
      return T(T({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema.primaryKey;
        return T(T({}, t), { mutate: function(i) {
          var o = C.trans, a = o.table(n).hook, u = a.deleting, f = a.creating, c = a.updating;
          switch (i.type) {
            case "add":
              if (f.fire === U) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "put":
              if (f.fire === U && c.fire === U) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "delete":
              if (u.fire === U) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "deleteRange":
              if (u.fire === U) break;
              return o._promise("readwrite", function() {
                return function s(y, l, d) {
                  return t.query({ trans: y, values: !1, query: { index: r, range: l }, limit: d }).then(function(v) {
                    var h = v.result;
                    return p({ type: "delete", keys: h, trans: y }).then(function(m) {
                      return 0 < m.numFailures ? Promise.reject(m.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(y, T(T({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                    });
                  });
                }(i.trans, i.range, 1e4);
              }, !0);
          }
          return t.mutate(i);
          function p(s) {
            var y, l, d, v = C.trans, h = s.keys || $t(r, s);
            if (!h) throw new Error("Keys missing");
            return (s = s.type === "add" || s.type === "put" ? T(T({}, s), { keys: h }) : T({}, s)).type !== "delete" && (s.values = He([], s.values)), s.keys && (s.keys = He([], s.keys)), y = t, d = h, ((l = s).type === "add" ? Promise.resolve([]) : y.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(m) {
              var g = h.map(function(b, w) {
                var x, S, k, O = m[w], P = { onerror: null, onsuccess: null };
                return s.type === "delete" ? u.fire.call(P, b, O, v) : s.type === "add" || O === void 0 ? (x = f.fire.call(P, b, s.values[w], v), b == null && x != null && (s.keys[w] = b = x, r.outbound || de(s.values[w], r.keyPath, b))) : (x = Bt(O, s.values[w]), (S = c.fire.call(P, x, b, O, v)) && (k = s.values[w], Object.keys(S).forEach(function(_) {
                  Q(k, _) ? k[_] = S[_] : de(k, _, S[_]);
                }))), P;
              });
              return t.mutate(s).then(function(b) {
                for (var w = b.failures, x = b.results, S = b.numFailures, b = b.lastResult, k = 0; k < h.length; ++k) {
                  var O = (x || h)[k], P = g[k];
                  O == null ? P.onerror && P.onerror(w[k]) : P.onsuccess && P.onsuccess(s.type === "put" && m[k] ? s.values[k] : O);
                }
                return { failures: w, results: x, numFailures: S, lastResult: b };
              }).catch(function(b) {
                return g.forEach(function(w) {
                  return w.onerror && w.onerror(b);
                }), Promise.reject(b);
              });
            });
          }
        } });
      } });
    } };
    function mr(e, n, t) {
      try {
        if (!n || n.keys.length < e.length) return null;
        for (var r = [], i = 0, o = 0; i < n.keys.length && o < e.length; ++i) Y(n.keys[i], e[o]) === 0 && (r.push(t ? je(n.values[i]) : n.values[i]), ++o);
        return r.length === e.length ? r : null;
      } catch {
        return null;
      }
    }
    var Zr = { stack: "dbcore", level: -1, create: function(e) {
      return { table: function(n) {
        var t = e.table(n);
        return T(T({}, t), { getMany: function(r) {
          if (!r.cache) return t.getMany(r);
          var i = mr(r.keys, r.trans._cache, r.cache === "clone");
          return i ? K.resolve(i) : t.getMany(r).then(function(o) {
            return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? je(o) : o }, o;
          });
        }, mutate: function(r) {
          return r.type !== "add" && (r.trans._cache = null), t.mutate(r);
        } });
      } };
    } };
    function gr(e, n) {
      return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
    }
    function br(e, n) {
      switch (e) {
        case "query":
          return n.values && !n.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var ei = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
      var n = e.schema.name, t = new ge(e.MIN_KEY, e.MAX_KEY);
      return T(T({}, e), { transaction: function(r, i, o) {
        if (C.subscr && i !== "readonly") throw new A.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(C.querier));
        return e.transaction(r, i, o);
      }, table: function(r) {
        var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, f = a.outbound, c = a.autoIncrement && s.filter(function(l) {
          return l.compound && l.keyPath.includes(a.keyPath);
        }), p = T(T({}, i), { mutate: function(l) {
          function d(_) {
            return _ = "idb://".concat(n, "/").concat(r, "/").concat(_), b[_] || (b[_] = new ge());
          }
          var v, h, m, g = l.trans, b = l.mutatedParts || (l.mutatedParts = {}), w = d(""), x = d(":dels"), S = l.type, P = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [$t(a, l).filter(function(_) {
            return _;
          }), l.values] : [], k = P[0], O = P[1], P = l.trans._cache;
          return z(k) ? (w.addKeys(k), (P = S === "delete" || k.length === O.length ? mr(k, P) : null) || x.addKeys(k), (P || O) && (v = d, h = P, m = O, o.indexes.forEach(function(_) {
            var $ = v(_.name || "");
            function R(F) {
              return F != null ? _.extractKey(F) : null;
            }
            function L(F) {
              return _.multiEntry && z(F) ? F.forEach(function(Ee) {
                return $.addKey(Ee);
              }) : $.addKey(F);
            }
            (h || m).forEach(function(F, pe) {
              var N = h && R(h[pe]), pe = m && R(m[pe]);
              Y(N, pe) !== 0 && (N != null && L(N), pe != null && L(pe));
            });
          }))) : k ? (O = { from: k.lower, to: k.upper }, x.add(O), w.add(O)) : (w.add(t), x.add(t), o.indexes.forEach(function(_) {
            return d(_.name).add(t);
          })), i.mutate(l).then(function(_) {
            return !k || l.type !== "add" && l.type !== "put" || (w.addKeys(_.results), c && c.forEach(function($) {
              var R = l.values.map(function(F) {
                return $.extractKey(F);
              }), L = $.keyPath.findIndex(function(F) {
                return F === a.keyPath;
              });
              _.results.forEach(function(F) {
                return R[L] = F;
              }), d($.name).addKeys(R);
            })), g.mutatedParts = Zn(g.mutatedParts || {}, b), _;
          });
        } }), s = function(d) {
          var v = d.query, d = v.index, v = v.range;
          return [d, new ge((d = v.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (v = v.upper) !== null && v !== void 0 ? v : e.MAX_KEY)];
        }, y = { get: function(l) {
          return [a, new ge(l.key)];
        }, getMany: function(l) {
          return [a, new ge().addKeys(l.keys)];
        }, count: s, query: s, openCursor: s };
        return G(y).forEach(function(l) {
          p[l] = function(d) {
            var v = C.subscr, h = !!v, m = gr(C, i) && br(l, d) ? d.obsSet = {} : v;
            if (h) {
              var g = function(O) {
                return O = "idb://".concat(n, "/").concat(r, "/").concat(O), m[O] || (m[O] = new ge());
              }, b = g(""), w = g(":dels"), v = y[l](d), h = v[0], v = v[1];
              if ((l === "query" && h.isPrimaryKey && !d.values ? w : g(h.name || "")).add(v), !h.isPrimaryKey) {
                if (l !== "count") {
                  var x = l === "query" && f && d.values && i.query(T(T({}, d), { values: !1 }));
                  return i[l].apply(this, arguments).then(function(O) {
                    if (l === "query") {
                      if (f && d.values) return x.then(function(R) {
                        return R = R.result, b.addKeys(R), O;
                      });
                      var P = d.values ? O.result.map(u) : O.result;
                      (d.values ? b : w).addKeys(P);
                    } else if (l === "openCursor") {
                      var _ = O, $ = d.values;
                      return _ && Object.create(_, { key: { get: function() {
                        return w.addKey(_.primaryKey), _.key;
                      } }, primaryKey: { get: function() {
                        var R = _.primaryKey;
                        return w.addKey(R), R;
                      } }, value: { get: function() {
                        return $ && b.addKey(_.primaryKey), _.value;
                      } } });
                    }
                    return O;
                  });
                }
                w.add(t);
              }
            }
            return i[l].apply(this, arguments);
          };
        }), p;
      } });
    } };
    function wr(e, n, t) {
      if (t.numFailures === 0) return n;
      if (n.type === "deleteRange") return null;
      var r = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
      return t.numFailures === r ? null : (n = T({}, n), z(n.keys) && (n.keys = n.keys.filter(function(i, o) {
        return !(o in t.failures);
      })), "values" in n && z(n.values) && (n.values = n.values.filter(function(i, o) {
        return !(o in t.failures);
      })), n);
    }
    function Rt(e, n) {
      return t = e, ((r = n).lower === void 0 || (r.lowerOpen ? 0 < Y(t, r.lower) : 0 <= Y(t, r.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Y(e, n.upper) < 0 : Y(e, n.upper) <= 0));
      var t, r;
    }
    function _r(e, n, y, r, i, o) {
      if (!y || y.length === 0) return e;
      var a = n.query.index, u = a.multiEntry, f = n.query.range, c = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, y = y.reduce(function(l, d) {
        var v = l, h = [];
        if (d.type === "add" || d.type === "put") for (var m = new ge(), g = d.values.length - 1; 0 <= g; --g) {
          var b, w = d.values[g], x = c(w);
          m.hasKey(x) || (b = p(w), (u && z(b) ? b.some(function(P) {
            return Rt(P, f);
          }) : Rt(b, f)) && (m.addKey(x), h.push(w)));
        }
        switch (d.type) {
          case "add":
            v = l.concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "put":
            var S = new ge().addKeys(d.values.map(function(_) {
              return c(_);
            })), v = l.filter(function(_) {
              return !S.hasKey(n.values ? c(_) : _);
            }).concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "delete":
            var k = new ge().addKeys(d.keys);
            v = l.filter(function(_) {
              return !k.hasKey(n.values ? c(_) : _);
            });
            break;
          case "deleteRange":
            var O = d.range;
            v = l.filter(function(_) {
              return !Rt(c(_), O);
            });
        }
        return v;
      }, e);
      return y === e ? e : (y.sort(function(l, d) {
        return Y(s(l), s(d)) || Y(c(l), c(d));
      }), n.limit && n.limit < 1 / 0 && (y.length > n.limit ? y.length = n.limit : e.length === n.limit && y.length < n.limit && (i.dirty = !0)), o ? Object.freeze(y) : y);
    }
    function xr(e, n) {
      return Y(e.lower, n.lower) === 0 && Y(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
    }
    function ni(e, n) {
      return function(t, r, i, o) {
        if (t === void 0) return r !== void 0 ? -1 : 0;
        if (r === void 0) return 1;
        if ((r = Y(t, r)) === 0) {
          if (i && o) return 0;
          if (i) return 1;
          if (o) return -1;
        }
        return r;
      }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(t, r, i, o) {
        if (t === void 0) return r !== void 0 ? 1 : 0;
        if (r === void 0) return -1;
        if ((r = Y(t, r)) === 0) {
          if (i && o) return 0;
          if (i) return -1;
          if (o) return 1;
        }
        return r;
      }(e.upper, n.upper, e.upperOpen, n.upperOpen);
    }
    function ti(e, n, t, r) {
      e.subscribers.add(t), r.addEventListener("abort", function() {
        var i, o;
        e.subscribers.delete(t), e.subscribers.size === 0 && (i = e, o = n, setTimeout(function() {
          i.subscribers.size === 0 && E(o, i);
        }, 3e3));
      });
    }
    var ri = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
      var n = e.schema.name;
      return T(T({}, e), { transaction: function(t, r, i) {
        var o, a, u = e.transaction(t, r, i);
        return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(f) {
          return function() {
            if (o.abort(), r === "readwrite") {
              for (var c = /* @__PURE__ */ new Set(), p = 0, s = t; p < s.length; p++) {
                var y = s[p], l = rn["idb://".concat(n, "/").concat(y)];
                if (l) {
                  var d = e.table(y), v = l.optimisticOps.filter(function($) {
                    return $.trans === u;
                  });
                  if (u._explicit && f && u.mutatedParts) for (var h = 0, m = Object.values(l.queries.query); h < m.length; h++) for (var g = 0, b = (S = m[h]).slice(); g < b.length; g++) Ct((k = b[g]).obsSet, u.mutatedParts) && (E(S, k), k.subscribers.forEach(function($) {
                    return c.add($);
                  }));
                  else if (0 < v.length) {
                    l.optimisticOps = l.optimisticOps.filter(function($) {
                      return $.trans !== u;
                    });
                    for (var w = 0, x = Object.values(l.queries.query); w < x.length; w++) for (var S, k, O, P = 0, _ = (S = x[w]).slice(); P < _.length; P++) (k = _[P]).res != null && u.mutatedParts && (f && !k.dirty ? (O = Object.isFrozen(k.res), O = _r(k.res, k.req, v, d, k, O), k.dirty ? (E(S, k), k.subscribers.forEach(function($) {
                      return c.add($);
                    })) : O !== k.res && (k.res = O, k.promise = K.resolve({ result: O }))) : (k.dirty && E(S, k), k.subscribers.forEach(function($) {
                      return c.add($);
                    })));
                  }
                }
              }
              c.forEach(function($) {
                return $();
              });
            }
          };
        }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
      }, table: function(t) {
        var r = e.table(t), i = r.schema.primaryKey;
        return T(T({}, r), { mutate: function(o) {
          var a = C.trans;
          if (i.outbound || a.db._options.cache === "disabled" || a.explicit) return r.mutate(o);
          var u = rn["idb://".concat(n, "/").concat(t)];
          return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || $t(i, o).some(function(f) {
            return f == null;
          })) ? (u.optimisticOps.push(o), o.mutatedParts && et(o.mutatedParts), a.then(function(f) {
            0 < f.numFailures && (E(u.optimisticOps, o), (f = wr(0, o, f)) && u.optimisticOps.push(f), o.mutatedParts && et(o.mutatedParts));
          }), a.catch(function() {
            E(u.optimisticOps, o), o.mutatedParts && et(o.mutatedParts);
          })) : a.then(function(f) {
            var c = wr(0, T(T({}, o), { values: o.values.map(function(l, s) {
              var y, l = (y = i.keyPath) !== null && y !== void 0 && y.includes(".") ? je(l) : T({}, l);
              return de(l, i.keyPath, f.results[s]), l;
            }) }), f);
            u.optimisticOps.push(c), queueMicrotask(function() {
              return o.mutatedParts && et(o.mutatedParts);
            });
          }), a) : r.mutate(o);
        }, query: function(o) {
          if (!gr(C, r) || !br("query", o)) return r.query(o);
          var a = ((c = C.trans) === null || c === void 0 ? void 0 : c.db._options.cache) === "immutable", s = C, u = s.requery, f = s.signal, c = function(d, v, h, m) {
            var g = rn["idb://".concat(d, "/").concat(v)];
            if (!g) return [];
            if (!(v = g.queries[h])) return [null, !1, g, null];
            var b = v[(m.query ? m.query.index.name : null) || ""];
            if (!b) return [null, !1, g, null];
            switch (h) {
              case "query":
                var w = b.find(function(x) {
                  return x.req.limit === m.limit && x.req.values === m.values && xr(x.req.query.range, m.query.range);
                });
                return w ? [w, !0, g, b] : [b.find(function(x) {
                  return ("limit" in x.req ? x.req.limit : 1 / 0) >= m.limit && (!m.values || x.req.values) && ni(x.req.query.range, m.query.range);
                }), !1, g, b];
              case "count":
                return w = b.find(function(x) {
                  return xr(x.req.query.range, m.query.range);
                }), [w, !!w, g, b];
            }
          }(n, t, "query", o), p = c[0], s = c[1], y = c[2], l = c[3];
          return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
            var v = d.result;
            if (p && (p.res = v), a) {
              for (var h = 0, m = v.length; h < m; ++h) Object.freeze(v[h]);
              Object.freeze(v);
            } else d.result = je(v);
            return d;
          }).catch(function(d) {
            return l && p && E(l, p), Promise.reject(d);
          }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (y = y || (rn["idb://".concat(n, "/").concat(t)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ti(p, l, u, f), p.promise.then(function(d) {
            return { result: _r(d.result, o, y == null ? void 0 : y.optimisticOps, r, p, a) };
          });
        } });
      } });
    } };
    function tt(e, n) {
      return new Proxy(e, { get: function(t, r, i) {
        return r === "db" ? n : Reflect.get(t, r, i);
      } });
    }
    var Re = (ie.prototype.version = function(e) {
      if (isNaN(e) || e < 0.1) throw new A.Type("Given version is not a positive number");
      if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new A.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, e);
      var n = this._versions, t = n.filter(function(r) {
        return r._cfg.version === e;
      })[0];
      return t || (t = new this.Version(e), n.push(t), n.sort(Wr), t.stores({}), this._state.autoSchema = !1, t);
    }, ie.prototype._whenReady = function(e) {
      var n = this;
      return this.idbdb && (this._state.openComplete || C.letThrough || this._vip) ? e() : new K(function(t, r) {
        if (n._state.openComplete) return r(new A.DatabaseClosed(n._state.dbOpenError));
        if (!n._state.isBeingOpened) {
          if (!n._state.autoOpen) return void r(new A.DatabaseClosed());
          n.open().catch(U);
        }
        n._state.dbReadyPromise.then(t, r);
      }).then(e);
    }, ie.prototype.use = function(e) {
      var n = e.stack, t = e.create, r = e.level, i = e.name;
      return i && this.unuse({ stack: n, name: i }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: t, level: r ?? 10, name: i }), e.sort(function(o, a) {
        return o.level - a.level;
      }), this;
    }, ie.prototype.unuse = function(e) {
      var n = e.stack, t = e.name, r = e.create;
      return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(i) {
        return r ? i.create !== r : !!t && i.name !== t;
      })), this;
    }, ie.prototype.open = function() {
      var e = this;
      return en(Ne, function() {
        return Gr(e);
      });
    }, ie.prototype._close = function() {
      var e = this._state, n = yn.indexOf(this);
      if (0 <= n && yn.splice(n, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      e.isBeingOpened || (e.dbReadyPromise = new K(function(t) {
        e.dbReadyResolve = t;
      }), e.openCanceller = new K(function(t, r) {
        e.cancelOpen = r;
      }));
    }, ie.prototype.close = function(t) {
      var n = (t === void 0 ? { disableAutoOpen: !0 } : t).disableAutoOpen, t = this._state;
      n ? (t.isBeingOpened && t.cancelOpen(new A.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new A.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
    }, ie.prototype.delete = function(e) {
      var n = this;
      e === void 0 && (e = { disableAutoOpen: !0 });
      var t = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
      return new K(function(i, o) {
        function a() {
          n.close(e);
          var u = n._deps.indexedDB.deleteDatabase(n.name);
          u.onsuccess = Z(function() {
            var f, c, p;
            f = n._deps, c = n.name, p = f.indexedDB, f = f.IDBKeyRange, Kt(p) || c === Nn || Et(p, f).delete(c).catch(U), i();
          }), u.onerror = Te(o), u.onblocked = n._fireOnBlocked;
        }
        if (t) throw new A.InvalidArgument("Invalid closeOptions argument to db.delete()");
        r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
      });
    }, ie.prototype.backendDB = function() {
      return this.idbdb;
    }, ie.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, ie.prototype.hasBeenClosed = function() {
      var e = this._state.dbOpenError;
      return e && e.name === "DatabaseClosed";
    }, ie.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, ie.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(ie.prototype, "tables", { get: function() {
      var e = this;
      return G(this._allTables).map(function(n) {
        return e._allTables[n];
      });
    }, enumerable: !1, configurable: !0 }), ie.prototype.transaction = function() {
      var e = (function(n, t, r) {
        var i = arguments.length;
        if (i < 2) throw new A.InvalidArgument("Too few arguments");
        for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
        return r = o.pop(), [n, te(o), r];
      }).apply(this, arguments);
      return this._transaction.apply(this, e);
    }, ie.prototype._transaction = function(e, n, t) {
      var r = this, i = C.trans;
      i && i.db === this && e.indexOf("!") === -1 || (i = null);
      var o, a, u = e.indexOf("?") !== -1;
      e = e.replace("!", "").replace("?", "");
      try {
        if (a = n.map(function(c) {
          if (c = c instanceof r.Table ? c.name : c, typeof c != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return c;
        }), e == "r" || e === vt) o = vt;
        else {
          if (e != "rw" && e != mt) throw new A.InvalidArgument("Invalid transaction mode: " + e);
          o = mt;
        }
        if (i) {
          if (i.mode === vt && o === mt) {
            if (!u) throw new A.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            i = null;
          }
          i && a.forEach(function(c) {
            if (i && i.storeNames.indexOf(c) === -1) {
              if (!u) throw new A.SubTransaction("Table " + c + " not included in parent transaction.");
              i = null;
            }
          }), u && i && !i.active && (i = null);
        }
      } catch (c) {
        return i ? i._promise(null, function(p, s) {
          s(c);
        }) : re(c);
      }
      var f = (function c(p, s, y, l, d) {
        return K.resolve().then(function() {
          var v = C.transless || C, h = p._createTransaction(s, y, p._dbSchema, l);
          if (h.explicit = !0, v = { trans: h, transless: v }, l) h.idbtrans = l.idbtrans;
          else try {
            h.create(), h.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
          } catch (b) {
            return b.name === De.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
              return c(p, s, y, null, d);
            })) : re(b);
          }
          var m, g = H(d);
          return g && pn(), v = K.follow(function() {
            var b;
            (m = d.call(h, h)) && (g ? (b = Ue.bind(null, null), m.then(b, b)) : typeof m.next == "function" && typeof m.throw == "function" && (m = qt(m)));
          }, v), (m && typeof m.then == "function" ? K.resolve(m).then(function(b) {
            return h.active ? b : re(new A.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : v.then(function() {
            return m;
          })).then(function(b) {
            return l && h._resolve(), h._completion.then(function() {
              return b;
            });
          }).catch(function(b) {
            return h._reject(b), re(b);
          });
        });
      }).bind(null, this, o, a, i, t);
      return i ? i._promise(o, f, "lock") : C.trans ? en(C.transless, function() {
        return r._whenReady(f);
      }) : this._whenReady(f);
    }, ie.prototype.table = function(e) {
      if (!Q(this._allTables, e)) throw new A.InvalidTable("Table ".concat(e, " does not exist"));
      return this._allTables[e];
    }, ie);
    function ie(e, n) {
      var t = this;
      this._middlewares = {}, this.verno = 0;
      var r = ie.dependencies;
      this._options = n = T({ addons: ie.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, r = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var i, o, a, u, f, c = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: U, dbReadyPromise: null, cancelOpen: U, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
      c.dbReadyPromise = new K(function(s) {
        c.dbReadyResolve = s;
      }), c.openCanceller = new K(function(s, y) {
        c.cancelOpen = y;
      }), this._state = c, this.name = e, this.on = On(this, "populate", "blocked", "versionchange", "close", { ready: [ut, U] }), this.on.ready.subscribe = cn(this.on.ready.subscribe, function(s) {
        return function(y, l) {
          ie.vip(function() {
            var d, v = t._state;
            v.openComplete ? (v.dbOpenError || K.resolve().then(y), l && s(y)) : v.onReadyBeingFired ? (v.onReadyBeingFired.push(y), l && s(y)) : (s(y), d = t, l || s(function h() {
              d.on.ready.unsubscribe(y), d.on.ready.unsubscribe(h);
            }));
          });
        };
      }), this.Collection = (i = this, Sn(Rr.prototype, function(m, h) {
        this.db = i;
        var l = Zt, d = null;
        if (h) try {
          l = h();
        } catch (g) {
          d = g;
        }
        var v = m._ctx, h = v.table, m = h.hook.reading.fire;
        this._ctx = { table: h, index: v.index, isPrimKey: !v.index || h.schema.primKey.keyPath && v.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: v.or, valueMapper: m !== Ae ? m : null };
      })), this.Table = (o = this, Sn(rr.prototype, function(s, y, l) {
        this.db = o, this._tx = l, this.name = s, this.schema = y, this.hook = o._allTables[s] ? o._allTables[s].hook : On(null, { creating: [jr, U], reading: [Kr, Ae], updating: [Cr, U], deleting: [Ar, U] });
      })), this.Transaction = (a = this, Sn(Lr.prototype, function(s, y, l, d, v) {
        var h = this;
        this.db = a, this.mode = s, this.storeNames = y, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = On(this, "complete", "error", "abort"), this.parent = v || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new K(function(m, g) {
          h._resolve = m, h._reject = g;
        }), this._completion.then(function() {
          h.active = !1, h.on.complete.fire();
        }, function(m) {
          var g = h.active;
          return h.active = !1, h.on.error.fire(m), h.parent ? h.parent._reject(m) : g && h.idbtrans && h.idbtrans.abort(), re(m);
        });
      })), this.Version = (u = this, Sn(Qr.prototype, function(s) {
        this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (f = this, Sn(sr.prototype, function(s, y, l) {
        if (this.db = f, this._ctx = { table: s, index: y === ":id" ? null : y, or: l }, this._cmp = this._ascending = Y, this._descending = function(d, v) {
          return Y(v, d);
        }, this._max = function(d, v) {
          return 0 < Y(d, v) ? d : v;
        }, this._min = function(d, v) {
          return Y(d, v) < 0 ? d : v;
        }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new A.MissingAPI();
      })), this.on("versionchange", function(s) {
        0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(t.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(t.name, "'. Closing db now to resume the delete request.")), t.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(s) {
        !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(t.name, "') was blocked")) : console.warn("Upgrade '".concat(t.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
      }), this._maxKey = Kn(n.IDBKeyRange), this._createTransaction = function(s, y, l, d) {
        return new t.Transaction(s, y, l, t._options.chromeTransactionDurability, d);
      }, this._fireOnBlocked = function(s) {
        t.on("blocked").fire(s), yn.filter(function(y) {
          return y.name === t.name && y !== t && !y._state.vcFired;
        }).map(function(y) {
          return y.on("versionchange").fire(s);
        });
      }, this.use(Zr), this.use(ri), this.use(ei), this.use(Xr), this.use(Jr);
      var p = new Proxy(this, { get: function(s, y, l) {
        if (y === "_vip") return !0;
        if (y === "table") return function(v) {
          return tt(t.table(v), p);
        };
        var d = Reflect.get(s, y, l);
        return d instanceof rr ? tt(d, p) : y === "tables" ? d.map(function(v) {
          return tt(v, p);
        }) : y === "_createTransaction" ? function() {
          return tt(d.apply(this, arguments), p);
        } : d;
      } });
      this.vip = p, r.forEach(function(s) {
        return s(t);
      });
    }
    var rt, Se = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ii = (Ft.prototype.subscribe = function(e, n, t) {
      return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: t });
    }, Ft.prototype[Se] = function() {
      return this;
    }, Ft);
    function Ft(e) {
      this._subscribe = e;
    }
    try {
      rt = { indexedDB: ne.indexedDB || ne.mozIndexedDB || ne.webkitIndexedDB || ne.msIndexedDB, IDBKeyRange: ne.IDBKeyRange || ne.webkitIDBKeyRange };
    } catch {
      rt = { indexedDB: null, IDBKeyRange: null };
    }
    function kr(e) {
      var n, t = !1, r = new ii(function(i) {
        var o = H(e), a, u = !1, f = {}, c = {}, p = { get closed() {
          return u;
        }, unsubscribe: function() {
          u || (u = !0, a && a.abort(), s && We.storagemutated.unsubscribe(l));
        } };
        i.start && i.start(p);
        var s = !1, y = function() {
          return yt(d);
        }, l = function(v) {
          Zn(f, v), Ct(c, f) && y();
        }, d = function() {
          var v, h, m;
          !u && rt.indexedDB && (f = {}, v = {}, a && a.abort(), a = new AbortController(), m = function(g) {
            var b = hn();
            try {
              o && pn();
              var w = Le(e, g);
              return w = o ? w.finally(Ue) : w;
            } finally {
              b && dn();
            }
          }(h = { subscr: v, signal: a.signal, requery: y, querier: e, trans: null }), Promise.resolve(m).then(function(g) {
            t = !0, n = g, u || h.signal.aborted || (f = {}, function(b) {
              for (var w in b) if (Q(b, w)) return;
              return 1;
            }(c = v) || s || (We(En, l), s = !0), yt(function() {
              return !u && i.next && i.next(g);
            }));
          }, function(g) {
            t = !1, ["DatabaseClosedError", "AbortError"].includes(g == null ? void 0 : g.name) || u || yt(function() {
              u || i.error && i.error(g);
            });
          }));
        };
        return setTimeout(y, 0), p;
      });
      return r.hasValue = function() {
        return t;
      }, r.getValue = function() {
        return n;
      }, r;
    }
    var on = Re;
    function Nt(e) {
      var n = ze;
      try {
        ze = !0, We.storagemutated.fire(e), It(e, !0);
      } finally {
        ze = n;
      }
    }
    Ie(on, T(T({}, xe), { delete: function(e) {
      return new on(e, { addons: [] }).delete();
    }, exists: function(e) {
      return new on(e, { addons: [] }).open().then(function(n) {
        return n.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(e) {
      try {
        return n = on.dependencies, t = n.indexedDB, n = n.IDBKeyRange, (Kt(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== Nn;
          });
        }) : Et(t, n).toCollection().primaryKeys()).then(e);
      } catch {
        return re(new A.MissingAPI());
      }
      var n, t;
    }, defineClass: function() {
      return function(e) {
        oe(this, e);
      };
    }, ignoreTransaction: function(e) {
      return C.trans ? en(C.transless, e) : e();
    }, vip: jt, async: function(e) {
      return function() {
        try {
          var n = qt(e.apply(this, arguments));
          return n && typeof n.then == "function" ? n : K.resolve(n);
        } catch (t) {
          return re(t);
        }
      };
    }, spawn: function(e, n, t) {
      try {
        var r = qt(e.apply(t, n || []));
        return r && typeof r.then == "function" ? r : K.resolve(r);
      } catch (i) {
        return re(i);
      }
    }, currentTransaction: { get: function() {
      return C.trans || null;
    } }, waitFor: function(e, n) {
      return n = K.resolve(typeof e == "function" ? on.ignoreTransaction(e) : e).timeout(n || 6e4), C.trans ? C.trans.waitFor(n) : n;
    }, Promise: K, debug: { get: function() {
      return Ce;
    }, set: function(e) {
      Wt(e);
    } }, derive: qe, extend: oe, props: Ie, override: cn, Events: On, on: We, liveQuery: kr, extendObservabilitySet: Zn, getByKeyPath: le, setByKeyPath: de, delByKeyPath: function(e, n) {
      typeof n == "string" ? de(e, n, void 0) : "length" in n && [].map.call(n, function(t) {
        de(e, t, void 0);
      });
    }, shallowClone: ln, deepClone: je, getObjectDiff: Bt, cmp: Y, asap: Fe, minKey: -1 / 0, addons: [], connections: yn, errnames: De, dependencies: rt, cache: rn, semVer: "4.0.8", version: "4.0.8".split(".").map(function(e) {
      return parseInt(e);
    }).reduce(function(e, n, t) {
      return e + n / Math.pow(10, 2 * t);
    }) })), on.maxKey = Kn(on.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (We(En, function(e) {
      ze || (e = new CustomEvent(_t, { detail: e }), ze = !0, dispatchEvent(e), ze = !1);
    }), addEventListener(_t, function(e) {
      e = e.detail, ze || Nt(e);
    }));
    var gn, ze = !1, Or = function() {
    };
    return typeof BroadcastChannel < "u" && ((Or = function() {
      (gn = new BroadcastChannel(_t)).onmessage = function(e) {
        return e.data && Nt(e.data);
      };
    })(), typeof gn.unref == "function" && gn.unref(), We(En, function(e) {
      ze || gn.postMessage(e);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
      if (!Re.disableBfCache && e.persisted) {
        Ce && console.debug("Dexie: handling persisted pagehide"), gn != null && gn.close();
        for (var n = 0, t = yn; n < t.length; n++) t[n].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(e) {
      !Re.disableBfCache && e.persisted && (Ce && console.debug("Dexie: handling persisted pageshow"), Or(), Nt({ all: new ge(-1 / 0, [[]]) }));
    })), K.rejectionMapper = function(e, n) {
      return !e || e instanceof X || e instanceof TypeError || e instanceof SyntaxError || !e.name || !he[e.name] ? e : (n = new he[e.name](n || e.message, e), "stack" in e && me(n, "stack", { get: function() {
        return this.inner.stack;
      } }), n);
    }, Wt(Ce), T(Re, Object.freeze({ __proto__: null, Dexie: Re, liveQuery: kr, Entity: er, cmp: Y, PropModSymbol: $e, PropModification: Pn, replacePrefix: function(e, n) {
      return new Pn({ replacePrefix: [e, n] });
    }, add: function(e) {
      return new Pn({ add: e });
    }, remove: function(e) {
      return new Pn({ remove: e });
    }, default: Re, RangeSet: ge, mergeRanges: Cn, rangesOverlap: dr }), { default: Re }), Re;
  });
})(Dr);
var oi = Dr.exports;
const Yt = /* @__PURE__ */ Pr(oi), Sr = Symbol.for("Dexie"), Vt = globalThis[Sr] || (globalThis[Sr] = Yt);
if (Yt.semVer !== Vt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Yt.semVer} and ${Vt.semVer}`);
var Er = { exports: {} };
(function(ce, Oe) {
  (function(we, T) {
    ce.exports = T();
  })(Ut, function() {
    var we = 1e3, T = 6e4, He = 36e5, ne = "millisecond", G = "second", z = "minute", oe = "hour", ve = "day", un = "week", Q = "month", Ie = "quarter", Pe = "year", me = "date", qe = "Invalid Date", ot = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, at = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, sn = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
      var j = ["th", "st", "nd", "rd"], D = B % 100;
      return "[" + B + (j[(D - 20) % 10] || j[D] || j[0]) + "]";
    } }, cn = function(B, j, D) {
      var M = String(B);
      return !M || M.length >= j ? B : "" + Array(j + 1 - M.length).join(D) + B;
    }, Qe = { s: cn, z: function(B) {
      var j = -B.utcOffset(), D = Math.abs(j), M = Math.floor(D / 60), E = D % 60;
      return (j <= 0 ? "+" : "-") + cn(M, 2, "0") + ":" + cn(E, 2, "0");
    }, m: function B(j, D) {
      if (j.date() < D.date()) return -B(D, j);
      var M = 12 * (D.year() - j.year()) + (D.month() - j.month()), E = j.clone().add(M, Q), q = D - E < 0, I = j.clone().add(M + (q ? -1 : 1), Q);
      return +(-(M + (D - E) / (q ? E - I : I - E)) || 0);
    }, a: function(B) {
      return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
    }, p: function(B) {
      return { M: Q, y: Pe, w: un, d: ve, D: me, h: oe, m: z, s: G, ms: ne, Q: Ie }[B] || String(B || "").toLowerCase().replace(/s$/, "");
    }, u: function(B) {
      return B === void 0;
    } }, Fe = "en", le = {};
    le[Fe] = sn;
    var de = "$isDayjsObject", ln = function(B) {
      return B instanceof Ke || !(!B || !B[de]);
    }, fn = function B(j, D, M) {
      var E;
      if (!j) return Fe;
      if (typeof j == "string") {
        var q = j.toLowerCase();
        le[q] && (E = q), D && (le[q] = D, E = q);
        var I = j.split("-");
        if (!E && I.length > 1) return B(I[0]);
      } else {
        var H = j.name;
        le[H] = j, E = H;
      }
      return !M && E && (Fe = E), E || !M && Fe;
    }, te = function(B, j) {
      if (ln(B)) return B.clone();
      var D = typeof j == "object" ? j : {};
      return D.date = B, D.args = arguments, new Ke(D);
    }, W = Qe;
    W.l = fn, W.i = ln, W.w = function(B, j) {
      return te(B, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
    };
    var Ke = function() {
      function B(D) {
        this.$L = fn(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[de] = !0;
      }
      var j = B.prototype;
      return j.parse = function(D) {
        this.$d = function(M) {
          var E = M.date, q = M.utc;
          if (E === null) return /* @__PURE__ */ new Date(NaN);
          if (W.u(E)) return /* @__PURE__ */ new Date();
          if (E instanceof Date) return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var I = E.match(ot);
            if (I) {
              var H = I[2] - 1 || 0, ee = (I[7] || "0").substring(0, 3);
              return q ? new Date(Date.UTC(I[1], H, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, ee)) : new Date(I[1], H, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, ee);
            }
          }
          return new Date(E);
        }(D), this.init();
      }, j.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, j.$utils = function() {
        return W;
      }, j.isValid = function() {
        return this.$d.toString() !== qe;
      }, j.isSame = function(D, M) {
        var E = te(D);
        return this.startOf(M) <= E && E <= this.endOf(M);
      }, j.isAfter = function(D, M) {
        return te(D) < this.startOf(M);
      }, j.isBefore = function(D, M) {
        return this.endOf(M) < te(D);
      }, j.$g = function(D, M, E) {
        return W.u(D) ? this[M] : this.set(E, D);
      }, j.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, j.valueOf = function() {
        return this.$d.getTime();
      }, j.startOf = function(D, M) {
        var E = this, q = !!W.u(M) || M, I = W.p(D), H = function(A, he) {
          var xe = W.w(E.$u ? Date.UTC(E.$y, he, A) : new Date(E.$y, he, A), E);
          return q ? xe : xe.endOf(ve);
        }, ee = function(A, he) {
          return W.w(E.toDate()[A].apply(E.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(he)), E);
        }, X = this.$W, ae = this.$M, fe = this.$D, _e = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case Pe:
            return q ? H(1, 0) : H(31, 11);
          case Q:
            return q ? H(1, ae) : H(0, ae + 1);
          case un:
            var De = this.$locale().weekStart || 0, Ge = (X < De ? X + 7 : X) - De;
            return H(q ? fe - Ge : fe + (6 - Ge), ae);
          case ve:
          case me:
            return ee(_e + "Hours", 0);
          case oe:
            return ee(_e + "Minutes", 1);
          case z:
            return ee(_e + "Seconds", 2);
          case G:
            return ee(_e + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, j.endOf = function(D) {
        return this.startOf(D, !1);
      }, j.$set = function(D, M) {
        var E, q = W.p(D), I = "set" + (this.$u ? "UTC" : ""), H = (E = {}, E[ve] = I + "Date", E[me] = I + "Date", E[Q] = I + "Month", E[Pe] = I + "FullYear", E[oe] = I + "Hours", E[z] = I + "Minutes", E[G] = I + "Seconds", E[ne] = I + "Milliseconds", E)[q], ee = q === ve ? this.$D + (M - this.$W) : M;
        if (q === Q || q === Pe) {
          var X = this.clone().set(me, 1);
          X.$d[H](ee), X.init(), this.$d = X.set(me, Math.min(this.$D, X.daysInMonth())).$d;
        } else H && this.$d[H](ee);
        return this.init(), this;
      }, j.set = function(D, M) {
        return this.clone().$set(D, M);
      }, j.get = function(D) {
        return this[W.p(D)]();
      }, j.add = function(D, M) {
        var E, q = this;
        D = Number(D);
        var I = W.p(M), H = function(ae) {
          var fe = te(q);
          return W.w(fe.date(fe.date() + Math.round(ae * D)), q);
        };
        if (I === Q) return this.set(Q, this.$M + D);
        if (I === Pe) return this.set(Pe, this.$y + D);
        if (I === ve) return H(1);
        if (I === un) return H(7);
        var ee = (E = {}, E[z] = T, E[oe] = He, E[G] = we, E)[I] || 1, X = this.$d.getTime() + D * ee;
        return W.w(X, this);
      }, j.subtract = function(D, M) {
        return this.add(-1 * D, M);
      }, j.format = function(D) {
        var M = this, E = this.$locale();
        if (!this.isValid()) return E.invalidDate || qe;
        var q = D || "YYYY-MM-DDTHH:mm:ssZ", I = W.z(this), H = this.$H, ee = this.$m, X = this.$M, ae = E.weekdays, fe = E.months, _e = E.meridiem, De = function(he, xe, U, Ae) {
          return he && (he[xe] || he(M, q)) || U[xe].slice(0, Ae);
        }, Ge = function(he) {
          return W.s(H % 12 || 12, he, "0");
        }, A = _e || function(he, xe, U) {
          var Ae = he < 12 ? "AM" : "PM";
          return U ? Ae.toLowerCase() : Ae;
        };
        return q.replace(at, function(he, xe) {
          return xe || function(U) {
            switch (U) {
              case "YY":
                return String(M.$y).slice(-2);
              case "YYYY":
                return W.s(M.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return W.s(X + 1, 2, "0");
              case "MMM":
                return De(E.monthsShort, X, fe, 3);
              case "MMMM":
                return De(fe, X);
              case "D":
                return M.$D;
              case "DD":
                return W.s(M.$D, 2, "0");
              case "d":
                return String(M.$W);
              case "dd":
                return De(E.weekdaysMin, M.$W, ae, 2);
              case "ddd":
                return De(E.weekdaysShort, M.$W, ae, 3);
              case "dddd":
                return ae[M.$W];
              case "H":
                return String(H);
              case "HH":
                return W.s(H, 2, "0");
              case "h":
                return Ge(1);
              case "hh":
                return Ge(2);
              case "a":
                return A(H, ee, !0);
              case "A":
                return A(H, ee, !1);
              case "m":
                return String(ee);
              case "mm":
                return W.s(ee, 2, "0");
              case "s":
                return String(M.$s);
              case "ss":
                return W.s(M.$s, 2, "0");
              case "SSS":
                return W.s(M.$ms, 3, "0");
              case "Z":
                return I;
            }
            return null;
          }(he) || I.replace(":", "");
        });
      }, j.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, j.diff = function(D, M, E) {
        var q, I = this, H = W.p(M), ee = te(D), X = (ee.utcOffset() - this.utcOffset()) * T, ae = this - ee, fe = function() {
          return W.m(I, ee);
        };
        switch (H) {
          case Pe:
            q = fe() / 12;
            break;
          case Q:
            q = fe();
            break;
          case Ie:
            q = fe() / 3;
            break;
          case un:
            q = (ae - X) / 6048e5;
            break;
          case ve:
            q = (ae - X) / 864e5;
            break;
          case oe:
            q = ae / He;
            break;
          case z:
            q = ae / T;
            break;
          case G:
            q = ae / we;
            break;
          default:
            q = ae;
        }
        return E ? q : W.a(q);
      }, j.daysInMonth = function() {
        return this.endOf(Q).$D;
      }, j.$locale = function() {
        return le[this.$L];
      }, j.locale = function(D, M) {
        if (!D) return this.$L;
        var E = this.clone(), q = fn(D, M, !0);
        return q && (E.$L = q), E;
      }, j.clone = function() {
        return W.w(this.$d, this);
      }, j.toDate = function() {
        return new Date(this.valueOf());
      }, j.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, j.toISOString = function() {
        return this.$d.toISOString();
      }, j.toString = function() {
        return this.$d.toUTCString();
      }, B;
    }(), je = Ke.prototype;
    return te.prototype = je, [["$ms", ne], ["$s", G], ["$m", z], ["$H", oe], ["$W", ve], ["$M", Q], ["$y", Pe], ["$D", me]].forEach(function(B) {
      je[B[1]] = function(j) {
        return this.$g(j, B[0], B[1]);
      };
    }), te.extend = function(B, j) {
      return B.$i || (B(j, Ke, te), B.$i = !0), te;
    }, te.locale = fn, te.isDayjs = ln, te.unix = function(B) {
      return te(1e3 * B);
    }, te.en = le[Fe], te.Ls = le, te.p = {}, te;
  });
})(Er);
var ai = Er.exports;
const ui = /* @__PURE__ */ Pr(ai);
var si = (
  /** @class */
  function() {
    function ce(Oe, we, T) {
      we === void 0 && (we = 1), T === void 0 && (T = []), this.name = Oe, this.version = we, this.dbKeys = T, this.dbStore = new Vt(Oe), this.dbStore.version(this.version).stores({
        dbData: "++id,dateTime,type"
        // Primary key & Indexed props
      });
    }
    return ce.prototype.setData = function(Oe) {
      Oe.dateTime || (Oe.dateTime = ui().format("YYYY-MM-DD HH:mm:ss:SSS")), Oe.type || (Oe.type = "info"), this.dbStore.dbData.add(Oe);
    }, ce.prototype.deleteAll = function() {
      return this.dbStore.dbData.clear();
    }, ce.prototype.getAll = function() {
      return this.dbStore.dbData.toArray();
    }, ce.prototype.getAllLength = function() {
      return this.dbStore.dbData.count();
    }, ce.prototype.getFilterData = function(Oe) {
      return this.dbStore.dbData.filter(function(we) {
        return we.content.includes(Oe);
      }).toArray();
    }, ce.prototype.getKeys = function() {
      return this.dbStore.dbData.orderBy("dateTime").keys();
    }, ce;
  }()
);
export {
  si as IndexDb
};
