function oi(ae, oe, L, A) {
  function le(M) {
    return M instanceof L ? M : new L(function(V) {
      V(M);
    });
  }
  return new (L || (L = Promise))(function(M, V) {
    function z(he) {
      try {
        B(A.next(he));
      } catch (J) {
        V(J);
      }
    }
    function te(he) {
      try {
        B(A.throw(he));
      } catch (J) {
        V(J);
      }
    }
    function B(he) {
      he.done ? M(he.value) : le(he.value).then(z, te);
    }
    B((A = A.apply(ae, oe || [])).next());
  });
}
function ai(ae, oe) {
  var L = { label: 0, sent: function() {
    if (M[0] & 1) throw M[1];
    return M[1];
  }, trys: [], ops: [] }, A, le, M, V = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return V.next = z(0), V.throw = z(1), V.return = z(2), typeof Symbol == "function" && (V[Symbol.iterator] = function() {
    return this;
  }), V;
  function z(B) {
    return function(he) {
      return te([B, he]);
    };
  }
  function te(B) {
    if (A) throw new TypeError("Generator is already executing.");
    for (; V && (V = 0, B[0] && (L = 0)), L; ) try {
      if (A = 1, le && (M = B[0] & 2 ? le.return : B[0] ? le.throw || ((M = le.return) && M.call(le), 0) : le.next) && !(M = M.call(le, B[1])).done) return M;
      switch (le = 0, M && (B = [B[0] & 2, M.value]), B[0]) {
        case 0:
        case 1:
          M = B;
          break;
        case 4:
          return L.label++, { value: B[1], done: !1 };
        case 5:
          L.label++, le = B[1], B = [0];
          continue;
        case 7:
          B = L.ops.pop(), L.trys.pop();
          continue;
        default:
          if (M = L.trys, !(M = M.length > 0 && M[M.length - 1]) && (B[0] === 6 || B[0] === 2)) {
            L = 0;
            continue;
          }
          if (B[0] === 3 && (!M || B[1] > M[0] && B[1] < M[3])) {
            L.label = B[1];
            break;
          }
          if (B[0] === 6 && L.label < M[1]) {
            L.label = M[1], M = B;
            break;
          }
          if (M && L.label < M[2]) {
            L.label = M[2], L.ops.push(B);
            break;
          }
          M[2] && L.ops.pop(), L.trys.pop();
          continue;
      }
      B = oe.call(ae, L);
    } catch (he) {
      B = [6, he], le = 0;
    } finally {
      A = M = 0;
    }
    if (B[0] & 5) throw B[1];
    return { value: B[0] ? B[1] : void 0, done: !0 };
  }
}
var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pr(ae) {
  return ae && ae.__esModule && Object.prototype.hasOwnProperty.call(ae, "default") ? ae.default : ae;
}
var Dr = { exports: {} };
(function(ae, oe) {
  (function(L, A) {
    ae.exports = A();
  })(Ut, function() {
    var L = function(e, n) {
      return (L = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
        t.__proto__ = r;
      } || function(t, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      })(e, n);
    }, A = function() {
      return (A = Object.assign || function(e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
    };
    function le(e, n, t) {
      for (var r, i = 0, o = n.length; i < o; i++) !r && i in n || ((r = r || Array.prototype.slice.call(n, 0, i))[i] = n[i]);
      return e.concat(r || Array.prototype.slice.call(n));
    }
    var M = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ut, V = Object.keys, z = Array.isArray;
    function te(e, n) {
      return typeof n != "object" || V(n).forEach(function(t) {
        e[t] = n[t];
      }), e;
    }
    typeof Promise > "u" || M.Promise || (M.Promise = Promise);
    var B = Object.getPrototypeOf, he = {}.hasOwnProperty;
    function J(e, n) {
      return he.call(e, n);
    }
    function Be(e, n) {
      typeof n == "function" && (n = n(B(e))), (typeof Reflect > "u" ? V : Reflect.ownKeys)(n).forEach(function(t) {
        _e(e, t, n[t]);
      });
    }
    var Ee = Object.defineProperty;
    function _e(e, n, t, r) {
      Ee(e, n, te(t && J(t, "get") && typeof t.get == "function" ? { get: t.get, set: t.set, configurable: !0 } : { value: t, configurable: !0, writable: !0 }, r));
    }
    function $e(e) {
      return { from: function(n) {
        return e.prototype = Object.create(n.prototype), _e(e.prototype, "constructor", e), { extend: Be.bind(null, e.prototype) };
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
    function Le(e) {
      M.setImmediate ? setImmediate(e) : setTimeout(e, 0);
    }
    function ye(e, n) {
      if (typeof n == "string" && J(e, n)) return e[n];
      if (!n) return e;
      if (typeof n != "string") {
        for (var t = [], r = 0, i = n.length; r < i; ++r) {
          var o = ye(e, n[r]);
          t.push(o);
        }
        return t;
      }
      var a = n.indexOf(".");
      if (a !== -1) {
        var u = e[n.substr(0, a)];
        return u == null ? void 0 : ye(u, n.substr(a + 1));
      }
    }
    function be(e, n, t) {
      if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
        Qe(typeof t != "string" && "length" in t);
        for (var r = 0, i = n.length; r < i; ++r) be(e, n[r], t[r]);
      } else {
        var o, a, u = n.indexOf(".");
        u !== -1 ? (o = n.substr(0, u), (a = n.substr(u + 1)) === "" ? t === void 0 ? z(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = t : be(u = !(u = e[o]) || !J(e, o) ? e[o] = {} : u, a, t)) : t === void 0 ? z(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = t;
      }
    }
    function ln(e) {
      var n, t = {};
      for (n in e) J(e, n) && (t[n] = e[n]);
      return t;
    }
    var fn = [].concat;
    function ue(e) {
      return fn.apply([], e);
    }
    var Fe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ue([8, 16, 32, 64].map(function(e) {
      return ["Int", "Uint", "Float"].map(function(n) {
        return n + e + "Array";
      });
    }))).filter(function(e) {
      return M[e];
    }), X = new Set(Fe.map(function(e) {
      return M[e];
    })), Ae = null;
    function Ce(e) {
      return Ae = /* @__PURE__ */ new WeakMap(), e = function n(t) {
        if (!t || typeof t != "object") return t;
        var r = Ae.get(t);
        if (r) return r;
        if (z(t)) {
          r = [], Ae.set(t, r);
          for (var i = 0, o = t.length; i < o; ++i) r.push(n(t[i]));
        } else if (X.has(t.constructor)) r = t;
        else {
          var a, u = B(t);
          for (a in r = u === Object.prototype ? {} : Object.create(u), Ae.set(t, r), t) J(t, a) && (r[a] = n(t[a]));
        }
        return r;
      }(e), Ae = null, e;
    }
    var R = {}.toString;
    function j(e) {
      return R.call(e).slice(8, -1);
    }
    var D = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", I = typeof D == "symbol" ? function(e) {
      var n;
      return e != null && (n = e[D]) && n.apply(e);
    } : function() {
      return null;
    };
    function E(e, n) {
      return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
    }
    var $ = {};
    function q(e) {
      var n, t, r, i;
      if (arguments.length === 1) {
        if (z(e)) return e.slice();
        if (this === $ && typeof e == "string") return [e];
        if (i = I(e)) {
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
    var Z = typeof Symbol < "u" ? function(e) {
      return e[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, wn = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], De = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(wn), ie = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function ee(e, n) {
      this.name = e, this.message = n;
    }
    function fe(e, n) {
      return e + ". Errors: " + Object.keys(n).map(function(t) {
        return n[t].toString();
      }).filter(function(t, r, i) {
        return i.indexOf(t) === r;
      }).join(`
`);
    }
    function ve(e, n, t, r) {
      this.failures = n, this.failedKeys = r, this.successCount = t, this.message = fe(e, n);
    }
    function Oe(e, n) {
      this.name = "BulkError", this.failures = Object.keys(n).map(function(t) {
        return n[t];
      }), this.failuresByPos = n, this.message = fe(e, this.failures);
    }
    $e(ee).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), $e(ve).from(ee), $e(Oe).from(ee);
    var Ke = De.reduce(function(e, n) {
      return e[n] = n + "Error", e;
    }, {}), Xe = ee, C = De.reduce(function(e, n) {
      var t = n + "Error";
      function r(i, o) {
        this.name = t, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = ie[n] || t, this.inner = null);
      }
      return $e(r).from(Xe), e[n] = r, e;
    }, {});
    C.Syntax = SyntaxError, C.Type = TypeError, C.Range = RangeError;
    var me = wn.reduce(function(e, n) {
      return e[n + "Error"] = C[n], e;
    }, {}), Se = De.reduce(function(e, n) {
      return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = C[n]), e;
    }, {});
    function H() {
    }
    function Te(e) {
      return e;
    }
    function Kr(e, n) {
      return e == null || e === Te ? n : function(t) {
        return n(e(t));
      };
    }
    function Je(e, n) {
      return function() {
        e.apply(this, arguments), n.apply(this, arguments);
      };
    }
    function jr(e, n) {
      return e === H ? n : function() {
        var t = e.apply(this, arguments);
        t !== void 0 && (arguments[0] = t);
        var r = this.onsuccess, i = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var o = n.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? Je(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Je(i, this.onerror) : i), o !== void 0 ? o : t;
      };
    }
    function Ar(e, n) {
      return e === H ? n : function() {
        e.apply(this, arguments);
        var t = this.onsuccess, r = this.onerror;
        this.onsuccess = this.onerror = null, n.apply(this, arguments), t && (this.onsuccess = this.onsuccess ? Je(t, this.onsuccess) : t), r && (this.onerror = this.onerror ? Je(r, this.onerror) : r);
      };
    }
    function Cr(e, n) {
      return e === H ? n : function(t) {
        var r = e.apply(this, arguments);
        te(t, r);
        var i = this.onsuccess, o = this.onerror;
        return this.onsuccess = null, this.onerror = null, t = n.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Je(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Je(o, this.onerror) : o), r === void 0 ? t === void 0 ? void 0 : t : te(r, t);
      };
    }
    function Tr(e, n) {
      return e === H ? n : function() {
        return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
      };
    }
    function ut(e, n) {
      return e === H ? n : function() {
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
    Se.ModifyError = ve, Se.DexieError = ee, Se.BulkError = Oe;
    var Me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Wt(e) {
      Me = e;
    }
    var gn = {}, zt = 100, Fe = typeof Promise > "u" ? [] : function() {
      var e = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [e, B(e), e];
      var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [n, B(n), e];
    }(), wn = Fe[0], De = Fe[1], Fe = Fe[2], De = De && De.then, _n = wn && wn.constructor, st = !!Fe, xn = function(e, n) {
      kn.push([e, n]), Tn && (queueMicrotask(Ir), Tn = !1);
    }, ct = !0, Tn = !0, Ze = [], Mn = [], lt = Te, Ue = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: H, pgp: !1, env: {}, finalize: H }, T = Ue, kn = [], en = 0, In = [];
    function K(e) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var n = this._PSD = T;
      if (typeof e != "function") {
        if (e !== gn) throw new TypeError("Not a function");
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
              }) : (r._state = !0, r._value = o, Gt(r)), a && dn();
            }
          }, ht.bind(null, r));
        } catch (o) {
          ht(r, o);
        }
      }(this, e);
    }
    var ft = { get: function() {
      var e = T, n = Rn;
      function t(r, i) {
        var o = this, a = !e.global && (e !== T || n !== Rn), u = a && !Ve(), f = new K(function(c, p) {
          dt(o, new Ht(Xt(r, e, a, u), Xt(i, e, a, u), c, p, e));
        });
        return this._consoleTask && (f._consoleTask = this._consoleTask), f;
      }
      return t.prototype = gn, t;
    }, set: function(e) {
      _e(this, "then", e && e.prototype === gn ? ft : { get: function() {
        return e;
      }, set: ft.set });
    } };
    function Ht(e, n, t, r, i) {
      this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = t, this.reject = r, this.psd = i;
    }
    function ht(e, n) {
      var t, r;
      Mn.push(n), e._state === null && (t = e._lib && hn(), n = lt(n), e._state = !1, e._value = n, r = e, Ze.some(function(i) {
        return i._value === r._value;
      }) || Ze.push(r), Gt(e), t && dn());
    }
    function Gt(e) {
      var n = e._listeners;
      e._listeners = [];
      for (var t = 0, r = n.length; t < r; ++t) dt(e, n[t]);
      var i = e._PSD;
      --i.ref || i.finalize(), en === 0 && (++en, xn(function() {
        --en == 0 && pt();
      }, []));
    }
    function dt(e, n) {
      if (e._state !== null) {
        var t = e._state ? n.onFulfilled : n.onRejected;
        if (t === null) return (e._state ? n.resolve : n.reject)(e._value);
        ++n.psd.ref, ++en, xn(Mr, [t, e, n]);
      } else e._listeners.push(n);
    }
    function Mr(e, n, t) {
      try {
        var r, i = n._value;
        !n._state && Mn.length && (Mn = []), r = Me && n._consoleTask ? n._consoleTask.run(function() {
          return e(i);
        }) : e(i), n._state || Mn.indexOf(i) !== -1 || function(o) {
          for (var a = Ze.length; a; ) if (Ze[--a]._value === o._value) return Ze.splice(a, 1);
        }(n), t.resolve(r);
      } catch (o) {
        t.reject(o);
      } finally {
        --en == 0 && pt(), --t.psd.ref || t.psd.finalize();
      }
    }
    function Ir() {
      nn(Ue, function() {
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
      var e = Ze;
      Ze = [], e.forEach(function(r) {
        r._PSD.onunhandled.call(null, r._value, r);
      });
      for (var n = In.slice(0), t = n.length; t; ) n[--t]();
    }
    function qn(e) {
      return new K(gn, !1, e);
    }
    function re(e, n) {
      var t = T;
      return function() {
        var r = hn(), i = T;
        try {
          return We(t, !0), e.apply(this, arguments);
        } catch (o) {
          n && n(o);
        } finally {
          We(i, !1), r && dn();
        }
      };
    }
    Be(K.prototype, { then: ft, _then: function(e, n) {
      dt(this, new Ht(null, null, e, n, T));
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
          return i(new C.Timeout(n));
        }, e);
        t.then(r, i).finally(clearTimeout.bind(null, o));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && _e(K.prototype, Symbol.toStringTag, "Dexie.Promise"), Ue.env = Qt(), Be(K, { all: function() {
      var e = q.apply(null, arguments).map(Fn);
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
      }) : new K(gn, !0, e);
    }, reject: qn, race: function() {
      var e = q.apply(null, arguments).map(Fn);
      return new K(function(n, t) {
        e.map(function(r) {
          return K.resolve(r).then(n, t);
        });
      });
    }, PSD: { get: function() {
      return T;
    }, set: function(e) {
      return T = e;
    } }, totalEchoes: { get: function() {
      return Rn;
    } }, newPSD: Ye, usePSD: nn, scheduler: { get: function() {
      return xn;
    }, set: function(e) {
      xn = e;
    } }, rejectionMapper: { get: function() {
      return lt;
    }, set: function(e) {
      lt = e;
    } }, follow: function(e, n) {
      return new K(function(t, r) {
        return Ye(function(i, o) {
          var a = T;
          a.unhandleds = [], a.onunhandled = o, a.finalize = Je(function() {
            var u, f = this;
            u = function() {
              f.unhandleds.length === 0 ? i() : o(f.unhandleds[0]);
            }, In.push(function c() {
              u(), In.splice(In.indexOf(c), 1);
            }), ++en, xn(function() {
              --en == 0 && pt();
            }, []);
          }, a.finalize), e();
        }, n, t, r);
      });
    } }), _n && (_n.allSettled && _e(K, "allSettled", function() {
      var e = q.apply(null, arguments).map(Fn);
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
    }), _n.any && typeof AggregateError < "u" && _e(K, "any", function() {
      var e = q.apply(null, arguments).map(Fn);
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
    var de = { awaits: 0, echoes: 0, id: 0 }, qr = 0, Bn = [], $n = 0, Rn = 0, Br = 0;
    function Ye(e, n, t, r) {
      var i = T, o = Object.create(i);
      return o.parent = i, o.ref = 0, o.global = !1, o.id = ++Br, Ue.env, o.env = st ? { Promise: K, PromiseProp: { value: K, configurable: !0, writable: !0 }, all: K.all, race: K.race, allSettled: K.allSettled, any: K.any, resolve: K.resolve, reject: K.reject } : {}, n && te(o, n), ++i.ref, o.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, r = nn(o, e, t, r), o.ref === 0 && o.finalize(), r;
    }
    function pn() {
      return de.id || (de.id = ++qr), ++de.awaits, de.echoes += zt, de.id;
    }
    function Ve() {
      return !!de.awaits && (--de.awaits == 0 && (de.id = 0), de.echoes = de.awaits * zt, !0);
    }
    function Fn(e) {
      return de.echoes && e && e.constructor === _n ? (pn(), e.then(function(n) {
        return Ve(), n;
      }, function(n) {
        return Ve(), se(n);
      })) : e;
    }
    function $r() {
      var e = Bn[Bn.length - 1];
      Bn.pop(), We(e, !1);
    }
    function We(e, n) {
      var t, r = T;
      (n ? !de.echoes || $n++ && e === T : !$n || --$n && e === T) || queueMicrotask(n ? (function(i) {
        ++Rn, de.echoes && --de.echoes != 0 || (de.echoes = de.awaits = de.id = 0), Bn.push(T), We(i, !0);
      }).bind(null, e) : $r), e !== T && (T = e, r === Ue && (Ue.env = Qt()), st && (t = Ue.env.Promise, n = e.env, (r.global || e.global) && (Object.defineProperty(M, "Promise", n.PromiseProp), t.all = n.all, t.race = n.race, t.resolve = n.resolve, t.reject = n.reject, n.allSettled && (t.allSettled = n.allSettled), n.any && (t.any = n.any))));
    }
    function Qt() {
      var e = M.Promise;
      return st ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(M, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
    }
    function nn(e, n, t, r, i) {
      var o = T;
      try {
        return We(e, !0), n(t, r, i);
      } finally {
        We(o, !1);
      }
    }
    function Xt(e, n, t, r) {
      return typeof e != "function" ? e : function() {
        var i = T;
        t && pn(), We(n, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          We(i, !1), r && queueMicrotask(Ve);
        }
      };
    }
    function yt(e) {
      Promise === _n && de.echoes === 0 ? $n === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
    }
    ("" + De).indexOf("[native code]") === -1 && (pn = Ve = H);
    var se = K.reject, tn = "￿", Re = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Jt = "String expected.", yn = [], Nn = "__dbnames", vt = "readonly", mt = "readwrite";
    function rn(e, n) {
      return e ? n ? function() {
        return e.apply(this, arguments) && n.apply(this, arguments);
      } : e : n;
    }
    var Zt = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Ln(e) {
      return typeof e != "string" || /\./.test(e) ? function(n) {
        return n;
      } : function(n) {
        return n[e] === void 0 && e in n && delete (n = Ce(n))[e], n;
      };
    }
    function er() {
      throw C.Type();
    }
    function G(e, n) {
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
                var p = G(i[c], o[c]);
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
    var rr = (ne.prototype._trans = function(e, n, t) {
      var r = this._tx || T.trans, i = this.name, o = Me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
      function a(c, p, s) {
        if (!s.schema[i]) throw new C.NotFound("Table " + i + " not part of transaction");
        return n(s.idbtrans, s);
      }
      var u = hn();
      try {
        var f = r && r.db._novip === this.db._novip ? r === T.trans ? r._promise(e, a, t) : Ye(function() {
          return r._promise(e, a, t);
        }, { trans: r, transless: T.transless || T }) : function c(p, s, y, l) {
          if (p.idbdb && (p._state.openComplete || T.letThrough || p._vip)) {
            var d = p._createTransaction(s, y, p._dbSchema);
            try {
              d.create(), p._state.PR1398_maxLoop = 3;
            } catch (v) {
              return v.name === Ke.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return c(p, s, y, l);
              })) : se(v);
            }
            return d._promise(s, function(v, h) {
              return Ye(function() {
                return T.trans = d, l(v, h, d);
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
          if (p._state.openComplete) return se(new C.DatabaseClosed(p._state.dbOpenError));
          if (!p._state.isBeingOpened) {
            if (!p._state.autoOpen) return se(new C.DatabaseClosed());
            p.open().catch(H);
          }
          return p._state.dbReadyPromise.then(function() {
            return c(p, s, y, l);
          });
        }(this.db, e, [this.name], a);
        return o && (f._consoleTask = o, f = f.catch(function(c) {
          return console.trace(c), se(c);
        })), f;
      } finally {
        u && dn();
      }
    }, ne.prototype.get = function(e, n) {
      var t = this;
      return e && e.constructor === Object ? this.where(e).first(n) : e == null ? se(new C.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
        return t.core.get({ trans: r, key: e }).then(function(i) {
          return t.hook.reading.fire(i);
        });
      }).then(n);
    }, ne.prototype.where = function(e) {
      if (typeof e == "string") return new this.db.WhereClause(this, e);
      if (z(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
      var n = V(e);
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
      if (t && this.db._maxKey !== tn) {
        var a = t.keyPath.slice(0, n.length);
        return this.where(a).equals(a.map(function(c) {
          return e[c];
        }));
      }
      !t && Me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
      var r = this.schema.idxByName, i = this.db._deps.indexedDB;
      function o(f, c) {
        return i.cmp(f, c) === 0;
      }
      var u = n.reduce(function(y, c) {
        var p = y[0], s = y[1], y = r[c], l = e[c];
        return [p || y, p || !y ? rn(s, y && y.multi ? function(d) {
          return d = ye(d, c), z(d) && d.some(function(v) {
            return o(l, v);
          });
        } : function(d) {
          return o(l, ye(d, c));
        }) : s];
      }, [null, null]), a = u[0], u = u[1];
      return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : t ? this.filter(u) : this.where(n).equals("");
    }, ne.prototype.filter = function(e) {
      return this.toCollection().and(e);
    }, ne.prototype.count = function(e) {
      return this.toCollection().count(e);
    }, ne.prototype.offset = function(e) {
      return this.toCollection().offset(e);
    }, ne.prototype.limit = function(e) {
      return this.toCollection().limit(e);
    }, ne.prototype.each = function(e) {
      return this.toCollection().each(e);
    }, ne.prototype.toArray = function(e) {
      return this.toCollection().toArray(e);
    }, ne.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, ne.prototype.orderBy = function(e) {
      return new this.db.Collection(new this.db.WhereClause(this, z(e) ? "[".concat(e.join("+"), "]") : e));
    }, ne.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, ne.prototype.mapToClass = function(e) {
      var n, t = this.db, r = this.name;
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = e).prototype instanceof er && (function(f, c) {
        if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
        function p() {
          this.constructor = f;
        }
        L(f, c), f.prototype = c === null ? Object.create(c) : (p.prototype = c.prototype, new p());
      }(i, n = e), Object.defineProperty(i.prototype, "db", { get: function() {
        return t;
      }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
        return r;
      }, e = i);
      for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = B(a)) Object.getOwnPropertyNames(a).forEach(function(f) {
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
    }, ne.prototype.defineClass = function() {
      return this.mapToClass(function(e) {
        te(this, e);
      });
    }, ne.prototype.add = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Ln(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "add", keys: n != null ? [n] : null, values: [a] });
      }).then(function(u) {
        return u.numFailures ? K.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          be(e, o, u);
        } catch {
        }
        return u;
      });
    }, ne.prototype.update = function(e, n) {
      return typeof e != "object" || z(e) ? this.where(":id").equals(e).modify(n) : (e = ye(e, this.schema.primKey.keyPath), e === void 0 ? se(new C.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
    }, ne.prototype.put = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Ln(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "put", values: [a], keys: n != null ? [n] : null });
      }).then(function(u) {
        return u.numFailures ? K.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          be(e, o, u);
        } catch {
        }
        return u;
      });
    }, ne.prototype.delete = function(e) {
      var n = this;
      return this._trans("readwrite", function(t) {
        return n.core.mutate({ trans: t, type: "delete", keys: [e] });
      }).then(function(t) {
        return t.numFailures ? K.reject(t.failures[0]) : void 0;
      });
    }, ne.prototype.clear = function() {
      var e = this;
      return this._trans("readwrite", function(n) {
        return e.core.mutate({ trans: n, type: "deleteRange", range: Zt });
      }).then(function(n) {
        return n.numFailures ? K.reject(n.failures[0]) : void 0;
      });
    }, ne.prototype.bulkGet = function(e) {
      var n = this;
      return this._trans("readonly", function(t) {
        return n.core.getMany({ keys: e, trans: t }).then(function(r) {
          return r.map(function(i) {
            return n.hook.reading.fire(i);
          });
        });
      });
    }, ne.prototype.bulkAdd = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i) throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new C.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Ln(c)) : e;
        return r.core.mutate({ trans: a, type: "add", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? y : l;
          throw new Oe("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, ne.prototype.bulkPut = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i) throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new C.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Ln(c)) : e;
        return r.core.mutate({ trans: a, type: "put", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? y : l;
          throw new Oe("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, ne.prototype.bulkUpdate = function(e) {
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
                var b = m[h], g = d[b];
                if (b === n.schema.primKey.keyPath) {
                  if (G(g, l) !== 0) throw new C.Constraint("Cannot update primary key in bulkUpdate()");
                } else be(v, b, g);
              }
              o.push(y), f.push(l), c.push(v);
            }
          });
          var p = f.length;
          return t.mutate({ trans: a, type: "put", keys: f, values: c, updates: { keys: r, changeSpecs: i } }).then(function(s) {
            var y = s.numFailures, l = s.failures;
            if (y === 0) return p;
            for (var d = 0, v = Object.keys(l); d < v.length; d++) {
              var h, m = v[d], b = o[Number(m)];
              b != null && (h = l[m], delete l[m], l[b] = h);
            }
            throw new Oe("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(p, " operations failed"), l);
          });
        });
      });
    }, ne.prototype.bulkDelete = function(e) {
      var n = this, t = e.length;
      return this._trans("readwrite", function(r) {
        return n.core.mutate({ trans: r, type: "delete", keys: e });
      }).then(function(a) {
        var i = a.numFailures, o = a.lastResult, a = a.failures;
        if (i === 0) return o;
        throw new Oe("".concat(n.name, ".bulkDelete(): ").concat(i, " of ").concat(t, " operations failed"), a);
      });
    }, ne);
    function ne() {
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
          var p = { subscribers: [], fire: f = f || H, subscribe: function(s) {
            p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
          }, unsubscribe: function(s) {
            p.subscribers = p.subscribers.filter(function(y) {
              return y !== s;
            }), p.fire = p.subscribers.reduce(u, f);
          } };
          return t[a] = n[a] = p;
        }
        V(c = a).forEach(function(s) {
          var y = c[s];
          if (z(y)) o(s, c[s][0], c[s][1]);
          else {
            if (y !== "asap") throw new C.InvalidArgument("Invalid event config");
            var l = o(s, Te, function() {
              for (var d = arguments.length, v = new Array(d); d--; ) v[d] = arguments[d];
              l.subscribers.forEach(function(h) {
                Le(function() {
                  h.apply(null, v);
                });
              });
            });
          }
        });
      }
    }
    function Sn(e, n) {
      return $e(n).from({ prototype: e }), n;
    }
    function vn(e, n) {
      return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
    }
    function bt(e, n) {
      e.filter = rn(e.filter, n);
    }
    function gt(e, n, t) {
      var r = e.replayFilter;
      e.replayFilter = r ? function() {
        return rn(r(), n());
      } : n, e.justLimit = t && !r;
    }
    function Un(e, n) {
      if (e.isPrimKey) return n.primaryKey;
      var t = n.getIndexByKeyPath(e.index);
      if (!t) throw new C.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
      return t;
    }
    function ir(e, n, t) {
      var r = Un(e, n.schema);
      return n.openCursor({ trans: t, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
    }
    function Yn(e, n, t, r) {
      var i = e.replayFilter ? rn(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        var o = {}, a = function(u, f, c) {
          var p, s;
          i && !i(f, c, function(y) {
            return f.stop(y);
          }, function(y) {
            return f.fail(y);
          }) || ((s = "" + (p = f.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), J(o, s) || (o[s] = !0, n(u, f, c)));
        };
        return Promise.all([e.or._iterate(a, t), or(ir(e, r, t), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
      }
      return or(ir(e, r, t), rn(e.algorithm, i), n, !e.keysOnly && e.valueMapper);
    }
    function or(e, n, t, r) {
      var i = re(r ? function(o, a, u) {
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
            o.stop(u), a = H;
          }, function(u) {
            o.fail(u), a = H;
          }) || i(o.value, o, function(u) {
            return a = u;
          }), a();
        });
      });
    }
    var Fe = Symbol(), Pn = (ar.prototype.execute = function(e) {
      if (this.add !== void 0) {
        var n = this.add;
        if (z(n)) return le(le([], z(e) ? e : [], !0), n).sort();
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
    var Rr = (Q.prototype._read = function(e, n) {
      var t = this._ctx;
      return t.error ? t.table._trans(null, se.bind(null, t.error)) : t.table._trans("readonly", e).then(n);
    }, Q.prototype._write = function(e) {
      var n = this._ctx;
      return n.error ? n.table._trans(null, se.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
    }, Q.prototype._addAlgorithm = function(e) {
      var n = this._ctx;
      n.algorithm = rn(n.algorithm, e);
    }, Q.prototype._iterate = function(e, n) {
      return Yn(this._ctx, e, n, this._ctx.table.core);
    }, Q.prototype.clone = function(e) {
      var n = Object.create(this.constructor.prototype), t = Object.create(this._ctx);
      return e && te(t, e), n._ctx = t, n;
    }, Q.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, Q.prototype.each = function(e) {
      var n = this._ctx;
      return this._read(function(t) {
        return Yn(n, e, t, n.table.core);
      });
    }, Q.prototype.count = function(e) {
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
    }, Q.prototype.sortBy = function(e, n) {
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
    }, Q.prototype.toArray = function(e) {
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
    }, Q.prototype.offset = function(e) {
      var n = this._ctx;
      return e <= 0 || (n.offset += e, vn(n) ? gt(n, function() {
        var t = e;
        return function(r, i) {
          return t === 0 || (t === 1 ? --t : i(function() {
            r.advance(t), t = 0;
          }), !1);
        };
      }) : gt(n, function() {
        var t = e;
        return function() {
          return --t < 0;
        };
      })), this;
    }, Q.prototype.limit = function(e) {
      return this._ctx.limit = Math.min(this._ctx.limit, e), gt(this._ctx, function() {
        var n = e;
        return function(t, r, i) {
          return --n <= 0 && r(i), 0 <= n;
        };
      }, !0), this;
    }, Q.prototype.until = function(e, n) {
      return bt(this._ctx, function(t, r, i) {
        return !e(t.value) || (r(i), n);
      }), this;
    }, Q.prototype.first = function(e) {
      return this.limit(1).toArray(function(n) {
        return n[0];
      }).then(e);
    }, Q.prototype.last = function(e) {
      return this.reverse().first(e);
    }, Q.prototype.filter = function(e) {
      var n;
      return bt(this._ctx, function(t) {
        return e(t.value);
      }), (n = this._ctx).isMatch = rn(n.isMatch, e), this;
    }, Q.prototype.and = function(e) {
      return this.filter(e);
    }, Q.prototype.or = function(e) {
      return new this.db.WhereClause(this._ctx.table, e, this);
    }, Q.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, Q.prototype.desc = function() {
      return this.reverse();
    }, Q.prototype.eachKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.key, r);
      });
    }, Q.prototype.eachUniqueKey = function(e) {
      return this._ctx.unique = "unique", this.eachKey(e);
    }, Q.prototype.eachPrimaryKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.primaryKey, r);
      });
    }, Q.prototype.keys = function(e) {
      var n = this._ctx;
      n.keysOnly = !n.isMatch;
      var t = [];
      return this.each(function(r, i) {
        t.push(i.key);
      }).then(function() {
        return t;
      }).then(e);
    }, Q.prototype.primaryKeys = function(e) {
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
    }, Q.prototype.uniqueKeys = function(e) {
      return this._ctx.unique = "unique", this.keys(e);
    }, Q.prototype.firstKey = function(e) {
      return this.limit(1).keys(function(n) {
        return n[0];
      }).then(e);
    }, Q.prototype.lastKey = function(e) {
      return this.reverse().firstKey(e);
    }, Q.prototype.distinct = function() {
      var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
      if (!e || !e.multi) return this;
      var n = {};
      return bt(this._ctx, function(i) {
        var r = i.primaryKey.toString(), i = J(n, r);
        return n[r] = !0, !i;
      }), this;
    }, Q.prototype.modify = function(e) {
      var n = this, t = this._ctx;
      return this._write(function(r) {
        var i, o, a;
        a = typeof e == "function" ? e : (i = V(e), o = i.length, function(h) {
          for (var m = !1, b = 0; b < o; ++b) {
            var g = i[b], w = e[g], x = ye(h, g);
            w instanceof Pn ? (be(h, g, w.execute(x)), m = !0) : x !== w && (be(h, g, w), m = !0);
          }
          return m;
        });
        function u(h, g) {
          var b = g.failures, g = g.numFailures;
          d += h - g;
          for (var w = 0, x = V(b); w < x.length; w++) {
            var S = x[w];
            l.push(b[S]);
          }
        }
        var f = t.table.core, c = f.schema.primaryKey, p = c.outbound, s = c.extractKey, y = n.db._options.modifyChunkSize || 200, l = [], d = 0, v = [];
        return n.clone().primaryKeys().then(function(h) {
          function m(g) {
            var w = Math.min(y, h.length - g);
            return f.getMany({ trans: r, keys: h.slice(g, g + w), cache: "immutable" }).then(function(x) {
              for (var S = [], k = [], O = p ? [] : null, P = [], _ = 0; _ < w; ++_) {
                var F = x[_], N = { value: Ce(F), primKey: h[g + _] };
                a.call(N, N.value, N) !== !1 && (N.value == null ? P.push(h[g + _]) : p || G(s(F), s(N.value)) === 0 ? (k.push(N.value), p && O.push(h[g + _])) : (P.push(h[g + _]), S.push(N.value)));
              }
              return Promise.resolve(0 < S.length && f.mutate({ trans: r, type: "add", values: S }).then(function(W) {
                for (var U in W.failures) P.splice(parseInt(U), 1);
                u(S.length, W);
              })).then(function() {
                return (0 < k.length || b && typeof e == "object") && f.mutate({ trans: r, type: "put", keys: O, values: k, criteria: b, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < g }).then(function(W) {
                  return u(k.length, W);
                });
              }).then(function() {
                return (0 < P.length || b && e === wt) && f.mutate({ trans: r, type: "delete", keys: P, criteria: b, isAdditionalChunk: 0 < g }).then(function(W) {
                  return u(P.length, W);
                });
              }).then(function() {
                return h.length > g + w && m(g + y);
              });
            });
          }
          var b = vn(t) && t.limit === 1 / 0 && (typeof e != "function" || e === wt) && { index: t.index, range: t.range };
          return m(0).then(function() {
            if (0 < l.length) throw new ve("Error modifying one or more objects", l, d, v);
            return h.length;
          });
        });
      });
    }, Q.prototype.delete = function() {
      var e = this._ctx, n = e.range;
      return vn(e) && (e.isPrimKey || n.type === 3) ? this._write(function(t) {
        var r = e.table.core.schema.primaryKey, i = n;
        return e.table.core.count({ trans: t, query: { index: r, range: i } }).then(function(o) {
          return e.table.core.mutate({ trans: t, type: "deleteRange", range: i }).then(function(a) {
            var u = a.failures;
            if (a.lastResult, a.results, a = a.numFailures, a) throw new ve("Could not delete some values", Object.keys(u).map(function(f) {
              return u[f];
            }), o - a);
            return o - a;
          });
        });
      }) : this.modify(wt);
    }, Q);
    function Q() {
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
    function Pe(e, n, t) {
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
      })) return Pe(e, Jt);
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
        return ze(u[0], f[s - 1] + r);
      }), e._ondirectionchange = function(d) {
        y(d);
      };
      var l = 0;
      return e._addAlgorithm(function(d, v, h) {
        var m = d.key;
        if (typeof m != "string") return !1;
        var b = o(m);
        if (n(b, f, l)) return !0;
        for (var g = null, w = l; w < s; ++w) {
          var x = function(S, k, O, P, _, F) {
            for (var N = Math.min(S.length, P.length), W = -1, U = 0; U < N; ++U) {
              var je = k[U];
              if (je !== P[U]) return _(S[U], O[U]) < 0 ? S.substr(0, U) + O[U] + O.substr(U + 1) : _(S[U], P[U]) < 0 ? S.substr(0, U) + P[U] + O.substr(U + 1) : 0 <= W ? S.substr(0, W) + k[W] + O.substr(W + 1) : null;
              _(S[U], je) < 0 && (W = U);
            }
            return N < P.length && F === "next" ? S + O.substr(S.length) : N < S.length && F === "prev" ? S.substr(0, O.length) : W < 0 ? null : S.substr(0, W) + P[W] + O.substr(W + 1);
          }(m, b, u[w], f[w], a, c);
          x === null && g === null ? l = w + 1 : (g === null || 0 < a(g, x)) && (g = x);
        }
        return v(g !== null ? function() {
          d.continue(g + p);
        } : h), !1;
      }), e;
    }
    function ze(e, n, t, r) {
      return { type: 2, lower: e, upper: n, lowerOpen: t, upperOpen: r };
    }
    function ur(e) {
      return { type: 1, lower: e, upper: e };
    }
    var sr = (Object.defineProperty(pe.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), pe.prototype.between = function(e, n, t, r) {
      t = t !== !1, r = r === !0;
      try {
        return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (t || r) && (!t || !r) ? mn(this) : new this.Collection(this, function() {
          return ze(e, n, !t, !r);
        });
      } catch {
        return Pe(this, Re);
      }
    }, pe.prototype.equals = function(e) {
      return e == null ? Pe(this, Re) : new this.Collection(this, function() {
        return ur(e);
      });
    }, pe.prototype.above = function(e) {
      return e == null ? Pe(this, Re) : new this.Collection(this, function() {
        return ze(e, void 0, !0);
      });
    }, pe.prototype.aboveOrEqual = function(e) {
      return e == null ? Pe(this, Re) : new this.Collection(this, function() {
        return ze(e, void 0, !1);
      });
    }, pe.prototype.below = function(e) {
      return e == null ? Pe(this, Re) : new this.Collection(this, function() {
        return ze(void 0, e, !1, !0);
      });
    }, pe.prototype.belowOrEqual = function(e) {
      return e == null ? Pe(this, Re) : new this.Collection(this, function() {
        return ze(void 0, e);
      });
    }, pe.prototype.startsWith = function(e) {
      return typeof e != "string" ? Pe(this, Jt) : this.between(e, e + tn, !0, !0);
    }, pe.prototype.startsWithIgnoreCase = function(e) {
      return e === "" ? this.startsWith(e) : Vn(this, function(n, t) {
        return n.indexOf(t[0]) === 0;
      }, [e], tn);
    }, pe.prototype.equalsIgnoreCase = function(e) {
      return Vn(this, function(n, t) {
        return n === t[0];
      }, [e], "");
    }, pe.prototype.anyOfIgnoreCase = function() {
      var e = q.apply($, arguments);
      return e.length === 0 ? mn(this) : Vn(this, function(n, t) {
        return t.indexOf(n) !== -1;
      }, e, "");
    }, pe.prototype.startsWithAnyOfIgnoreCase = function() {
      var e = q.apply($, arguments);
      return e.length === 0 ? mn(this) : Vn(this, function(n, t) {
        return t.some(function(r) {
          return n.indexOf(r) === 0;
        });
      }, e, tn);
    }, pe.prototype.anyOf = function() {
      var e = this, n = q.apply($, arguments), t = this._cmp;
      try {
        n.sort(t);
      } catch {
        return Pe(this, Re);
      }
      if (n.length === 0) return mn(this);
      var r = new this.Collection(this, function() {
        return ze(n[0], n[n.length - 1]);
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
    }, pe.prototype.notEqual = function(e) {
      return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, pe.prototype.noneOf = function() {
      var e = q.apply($, arguments);
      if (e.length === 0) return new this.Collection(this);
      try {
        e.sort(this._ascending);
      } catch {
        return Pe(this, Re);
      }
      var n = e.reduce(function(t, r) {
        return t ? t.concat([[t[t.length - 1][1], r]]) : [[-1 / 0, r]];
      }, null);
      return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
    }, pe.prototype.inAnyRange = function(m, n) {
      var t = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
      if (m.length === 0) return mn(this);
      if (!m.every(function(b) {
        return b[0] !== void 0 && b[1] !== void 0 && i(b[0], b[1]) <= 0;
      })) return Pe(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", C.InvalidArgument);
      var f = !n || n.includeLowers !== !1, c = n && n.includeUppers === !0, p, s = i;
      function y(b, g) {
        return s(b[0], g[0]);
      }
      try {
        (p = m.reduce(function(b, g) {
          for (var w = 0, x = b.length; w < x; ++w) {
            var S = b[w];
            if (r(g[0], S[1]) < 0 && 0 < r(g[1], S[0])) {
              S[0] = a(S[0], g[0]), S[1] = u(S[1], g[1]);
              break;
            }
          }
          return w === x && b.push(g), b;
        }, [])).sort(y);
      } catch {
        return Pe(this, Re);
      }
      var l = 0, d = c ? function(b) {
        return 0 < i(b, p[l][1]);
      } : function(b) {
        return 0 <= i(b, p[l][1]);
      }, v = f ? function(b) {
        return 0 < o(b, p[l][0]);
      } : function(b) {
        return 0 <= o(b, p[l][0]);
      }, h = d, m = new this.Collection(this, function() {
        return ze(p[0][0], p[p.length - 1][1], !f, !c);
      });
      return m._ondirectionchange = function(b) {
        s = b === "next" ? (h = d, i) : (h = v, o), p.sort(y);
      }, m._addAlgorithm(function(b, g, w) {
        for (var x, S = b.key; h(S); ) if (++l === p.length) return g(w), !1;
        return !d(x = S) && !v(x) || (t._cmp(S, p[l][1]) === 0 || t._cmp(S, p[l][0]) === 0 || g(function() {
          s === i ? b.continue(p[l][0]) : b.continue(p[l][1]);
        }), !1);
      }), m;
    }, pe.prototype.startsWithAnyOf = function() {
      var e = q.apply($, arguments);
      return e.every(function(n) {
        return typeof n == "string";
      }) ? e.length === 0 ? mn(this) : this.inAnyRange(e.map(function(n) {
        return [n, n + tn];
      })) : Pe(this, "startsWithAnyOf() only works with strings");
    }, pe);
    function pe() {
    }
    function Ie(e) {
      return re(function(n) {
        return Dn(n), e(n.target.error), !1;
      });
    }
    function Dn(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
    }
    var En = "storagemutated", _t = "x-storagemutated-1", He = On(null, En), Lr = (qe.prototype._lock = function() {
      return Qe(!T.global), ++this._reculock, this._reculock !== 1 || T.global || (T.lockOwnerFor = this), this;
    }, qe.prototype._unlock = function() {
      if (Qe(!T.global), --this._reculock == 0) for (T.global || (T.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var e = this._blockedFuncs.shift();
        try {
          nn(e[1], e[0]);
        } catch {
        }
      }
      return this;
    }, qe.prototype._locked = function() {
      return this._reculock && T.lockOwnerFor !== this;
    }, qe.prototype.create = function(e) {
      var n = this;
      if (!this.mode) return this;
      var t = this.db.idbdb, r = this.db._state.dbOpenError;
      if (Qe(!this.idbtrans), !e && !t) switch (r && r.name) {
        case "DatabaseClosedError":
          throw new C.DatabaseClosed(r);
        case "MissingAPIError":
          throw new C.MissingAPI(r.message, r);
        default:
          throw new C.OpenFailed(r);
      }
      if (!this.active) throw new C.TransactionInactive();
      return Qe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || t).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = re(function(i) {
        Dn(i), n._reject(e.error);
      }), e.onabort = re(function(i) {
        Dn(i), n.active && n._reject(new C.Abort(e.error)), n.active = !1, n.on("abort").fire(i);
      }), e.oncomplete = re(function() {
        n.active = !1, n._resolve(), "mutatedParts" in e && He.storagemutated.fire(e.mutatedParts);
      }), this;
    }, qe.prototype._promise = function(e, n, t) {
      var r = this;
      if (e === "readwrite" && this.mode !== "readwrite") return se(new C.ReadOnly("Transaction is readonly"));
      if (!this.active) return se(new C.TransactionInactive());
      if (this._locked()) return new K(function(o, a) {
        r._blockedFuncs.push([function() {
          r._promise(e, n, t).then(o, a);
        }, T]);
      });
      if (t) return Ye(function() {
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
    }, qe.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, qe.prototype.waitFor = function(e) {
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
          return t._waitingQueue.push(re(o.bind(null, u)));
        }, function(u) {
          return t._waitingQueue.push(re(a.bind(null, u)));
        }).finally(function() {
          t._waitingFor === i && (t._waitingFor = null);
        });
      });
    }, qe.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new C.Abort()));
    }, qe.prototype.table = function(e) {
      var n = this._memoizedTables || (this._memoizedTables = {});
      if (J(n, e)) return n[e];
      var t = this.schema[e];
      if (!t) throw new C.NotFound("Table " + e + " not part of transaction");
      return t = new this.db.Table(e, t, this), t.core = this.db.core.table(e), n[e] = t;
    }, qe);
    function qe() {
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
          return tn;
        }, tn;
      }
    };
    function Ot(e) {
      return e == null ? function() {
      } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(t) {
        return t[n];
      } : function(t) {
        return ye(t, n);
      } : function(t) {
        return ye(t, e);
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
          var h = v.trans, m = v.type, b = v.keys, g = v.values, w = v.range;
          return new Promise(function(x, S) {
            x = re(x);
            var k = h.objectStore(d), O = k.keyPath == null, P = m === "put" || m === "add";
            if (!P && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
            var _, F = (b || g || { length: 1 }).length;
            if (b && g && b.length !== g.length) throw new Error("Given keys array must have same length as given values array.");
            if (F === 0) return x({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function N(ke) {
              ++je, Dn(ke);
            }
            var W = [], U = [], je = 0;
            if (m === "deleteRange") {
              if (w.type === 4) return x({ numFailures: je, failures: U, results: [], lastResult: void 0 });
              w.type === 3 ? W.push(_ = k.clear()) : W.push(_ = k.delete(r(w)));
            } else {
              var O = P ? O ? [g, b] : [g, null] : [b, null], Y = O[0], ge = O[1];
              if (P) for (var we = 0; we < F; ++we) W.push(_ = ge && ge[we] !== void 0 ? k[m](Y[we], ge[we]) : k[m](Y[we])), _.onerror = N;
              else for (we = 0; we < F; ++we) W.push(_ = k[m](Y[we])), _.onerror = N;
            }
            function it(ke) {
              ke = ke.target.result, W.forEach(function(un, Lt) {
                return un.error != null && (U[Lt] = un.error);
              }), x({ numFailures: je, failures: U, results: m === "delete" ? b : W.map(function(un) {
                return un.result;
              }), lastResult: ke });
            }
            _.onerror = function(ke) {
              N(ke), it(ke);
            }, _.onsuccess = it;
          });
        }, getMany: function(v) {
          var h = v.trans, m = v.keys;
          return new Promise(function(b, g) {
            b = re(b);
            for (var w, x = h.objectStore(d), S = m.length, k = new Array(S), O = 0, P = 0, _ = function(W) {
              W = W.target, k[W._pos] = W.result, ++P === O && b(k);
            }, F = Ie(g), N = 0; N < S; ++N) m[N] != null && ((w = x.get(m[N]))._pos = N, w.onsuccess = _, w.onerror = F, ++O);
            O === 0 && b(k);
          });
        }, get: function(v) {
          var h = v.trans, m = v.key;
          return new Promise(function(b, g) {
            b = re(b);
            var w = h.objectStore(d).get(m);
            w.onsuccess = function(x) {
              return b(x.target.result);
            }, w.onerror = Ie(g);
          });
        }, query: (l = c, function(v) {
          return new Promise(function(h, m) {
            h = re(h);
            var b, g, w, O = v.trans, x = v.values, S = v.limit, _ = v.query, k = S === 1 / 0 ? void 0 : S, P = _.index, _ = _.range, O = O.objectStore(d), P = P.isPrimaryKey ? O : O.index(P.name), _ = r(_);
            if (S === 0) return h({ result: [] });
            l ? ((k = x ? P.getAll(_, k) : P.getAllKeys(_, k)).onsuccess = function(F) {
              return h({ result: F.target.result });
            }, k.onerror = Ie(m)) : (b = 0, g = !x && "openKeyCursor" in P ? P.openKeyCursor(_) : P.openCursor(_), w = [], g.onsuccess = function(F) {
              var N = g.result;
              return N ? (w.push(x ? N.value : N.primaryKey), ++b === S ? h({ result: w }) : void N.continue()) : h({ result: w });
            }, g.onerror = Ie(m));
          });
        }), openCursor: function(v) {
          var h = v.trans, m = v.values, b = v.query, g = v.reverse, w = v.unique;
          return new Promise(function(x, S) {
            x = re(x);
            var P = b.index, k = b.range, O = h.objectStore(d), O = P.isPrimaryKey ? O : O.index(P.name), P = g ? w ? "prevunique" : "prev" : w ? "nextunique" : "next", _ = !m && "openKeyCursor" in O ? O.openKeyCursor(r(k), P) : O.openCursor(r(k), P);
            _.onerror = Ie(S), _.onsuccess = re(function(F) {
              var N, W, U, je, Y = _.result;
              Y ? (Y.___id = ++Ur, Y.done = !1, N = Y.continue.bind(Y), W = (W = Y.continuePrimaryKey) && W.bind(Y), U = Y.advance.bind(Y), je = function() {
                throw new Error("Cursor not stopped");
              }, Y.trans = h, Y.stop = Y.continue = Y.continuePrimaryKey = Y.advance = function() {
                throw new Error("Cursor not started");
              }, Y.fail = re(S), Y.next = function() {
                var ge = this, we = 1;
                return this.start(function() {
                  return we-- ? ge.continue() : ge.stop();
                }).then(function() {
                  return ge;
                });
              }, Y.start = function(ge) {
                function we() {
                  if (_.result) try {
                    ge();
                  } catch (ke) {
                    Y.fail(ke);
                  }
                  else Y.done = !0, Y.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, Y.stop();
                }
                var it = new Promise(function(ke, un) {
                  ke = re(ke), _.onerror = Ie(un), Y.fail = un, Y.stop = function(Lt) {
                    Y.stop = Y.continue = Y.continuePrimaryKey = Y.advance = je, ke(Lt);
                  };
                });
                return _.onsuccess = re(function(ke) {
                  _.onsuccess = we, we();
                }), Y.continue = N, Y.continuePrimaryKey = W, Y.advance = U, we(), it;
              }, x(Y)) : x(null);
            }, S);
          });
        }, count: function(v) {
          var h = v.query, m = v.trans, b = h.index, g = h.range;
          return new Promise(function(w, x) {
            var S = m.objectStore(d), k = b.isPrimaryKey ? S : S.index(b.name), S = r(g), k = S ? k.count(S) : k.count();
            k.onsuccess = re(function(O) {
              return w(O.target.result);
            }), k.onerror = Ie(x);
          });
        } };
      }
      var o, a, u, p = (a = f, u = lr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(y) {
        return a.objectStore(y);
      }).map(function(y) {
        var l = y.keyPath, h = y.autoIncrement, d = z(l), v = {}, h = { name: y.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: Ot(l) }, indexes: lr(y.indexNames).map(function(m) {
          return y.index(m);
        }).map(function(w) {
          var b = w.name, g = w.unique, x = w.multiEntry, w = w.keyPath, x = { name: b, compound: z(w), keyPath: w, unique: g, multiEntry: x, extractKey: Ot(w) };
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
        return a = a.create, A(A({}, o), a(o));
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
            return ot(c, p) || (c = B(c)) && f(c, p);
          }(a, i);
          (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? _e(a, i, { get: function() {
            return this.table(i);
          }, set: function(f) {
            Ee(this, i, { value: f, writable: !0, configurable: !0, enumerable: !0 });
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
      var a = o._reject.bind(o), u = T.transless || T;
      Ye(function() {
        return T.trans = o, T.transless = u, n !== 0 ? (Wn(e, t), c = n, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(p) {
          return p ?? c;
        }) : K.resolve(c)).then(function(p) {
          return y = p, l = o, d = t, v = [], p = (s = e)._versions, h = s._dbSchema = Gn(0, s.idbdb, d), (p = p.filter(function(m) {
            return m._cfg.version >= y;
          })).length !== 0 ? (p.forEach(function(m) {
            v.push(function() {
              var b = h, g = m._cfg.dbschema;
              Qn(s, b, d), Qn(s, g, d), h = s._dbSchema = g;
              var w = Pt(b, g);
              w.add.forEach(function(P) {
                Dt(d, P[0], P[1].primKey, P[1].indexes);
              }), w.change.forEach(function(P) {
                if (P.recreate) throw new C.Upgrade("Not yet support for changing primary key");
                var _ = d.objectStore(P.name);
                P.add.forEach(function(F) {
                  return Hn(_, F);
                }), P.change.forEach(function(F) {
                  _.deleteIndex(F.name), Hn(_, F);
                }), P.del.forEach(function(F) {
                  return _.deleteIndex(F);
                });
              });
              var x = m._cfg.contentUpgrade;
              if (x && m._cfg.version > y) {
                Wn(s, d), l._memoizedTables = {};
                var S = ln(g);
                w.del.forEach(function(P) {
                  S[P] = b[P];
                }), St(s, [s.Transaction.prototype]), zn(s, [s.Transaction.prototype], V(S), S), l.schema = S;
                var k, O = Z(x);
                return O && pn(), w = K.follow(function() {
                  var P;
                  (k = x(l)) && O && (P = Ve.bind(null, null), k.then(P, P));
                }), k && typeof k.then == "function" ? K.resolve(k) : w.then(function() {
                  return k;
                });
              }
            }), v.push(function(b) {
              var g, w, x = m._cfg.dbschema;
              g = x, w = b, [].slice.call(w.db.objectStoreNames).forEach(function(S) {
                return g[S] == null && w.db.deleteObjectStore(S);
              }), St(s, [s.Transaction.prototype]), zn(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
            }), v.push(function(b) {
              s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(g) {
                return g !== "$meta";
              })) : b.objectStore("$meta").put(m._cfg.version, "version"));
            });
          }), function m() {
            return v.length ? K.resolve(v.shift()(l.idbtrans)).then(m) : K.resolve();
          }().then(function() {
            fr(h, d);
          })) : K.resolve();
          var s, y, l, d, v, h;
        }).catch(a)) : (V(i).forEach(function(p) {
          Dt(t, p, i[p].primKey, i[p].indexes);
        }), Wn(e, t), void K.follow(function() {
          return e.on.populate.fire(o);
        }).catch(a));
        var f, c;
      });
    }
    function Hr(e, n) {
      fr(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
      var t = Gn(0, e.idbdb, n);
      Qn(e, e._dbSchema, n);
      for (var r = 0, i = Pt(t, e._dbSchema).change; r < i.length; r++) {
        var o = function(a) {
          if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var u = n.objectStore(a.name);
          a.add.forEach(function(f) {
            Me && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(f.src)), Hn(u, f);
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
      V(e).forEach(function(t) {
        n.db.objectStoreNames.contains(t) || (Me && console.debug("Dexie: Creating missing table", t), Dt(n, t, e[t].primKey, e[t].indexes));
      });
    }
    function Hn(e, n) {
      e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
    }
    function Gn(e, n, t) {
      var r = {};
      return sn(n.objectStoreNames, 0).forEach(function(i) {
        for (var o = t.objectStore(i), a = xt(cr(c = o.keyPath), c || "", !0, !1, !!o.autoIncrement, c && typeof c != "string", !0), u = [], f = 0; f < o.indexNames.length; ++f) {
          var p = o.index(o.indexNames[f]), c = p.keyPath, p = xt(p.name, c, !!p.unique, !!p.multiEntry, !1, c && typeof c != "string", !1);
          u.push(p);
        }
        r[i] = kt(i, a, u);
      }), r;
    }
    function Qn(e, n, t) {
      for (var r = t.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var o = r[i], a = t.objectStore(o);
        e._hasGetAll = "getAll" in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
          var f = a.indexNames[u], c = a.index(f).keyPath, p = typeof c == "string" ? c : "[" + sn(c).join("+") + "]";
          !n[o] || (c = n[o].idxByName[p]) && (c.name = f, delete n[o].idxByName[p], n[o].idxByName[f] = c);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && M.WorkerGlobalScope && M instanceof M.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
    }
    function hr(e) {
      return e.split(",").map(function(n, t) {
        var r = (n = n.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
        return xt(r, i || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), z(i), t === 0);
      });
    }
    var Gr = (Xn.prototype._parseStoresSpec = function(e, n) {
      V(e).forEach(function(t) {
        if (e[t] !== null) {
          var r = hr(e[t]), i = r.shift();
          if (i.unique = !0, i.multi) throw new C.Schema("Primary key cannot be multi-valued");
          r.forEach(function(o) {
            if (o.auto) throw new C.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!o.keyPath) throw new C.Schema("Index must have a name and cannot be an empty string");
          }), n[t] = kt(t, i, r);
        }
      });
    }, Xn.prototype.stores = function(t) {
      var n = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? te(this._cfg.storesSource, t) : t;
      var t = n._versions, r = {}, i = {};
      return t.forEach(function(o) {
        te(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
      }), n._dbSchema = i, St(n, [n._allTables, n, n.Transaction.prototype]), zn(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], V(i), i), n._storeNames = V(i), this;
    }, Xn.prototype.upgrade = function(e) {
      return this._cfg.contentUpgrade = ut(this._cfg.contentUpgrade || H, e), this;
    }, Xn);
    function Xn() {
    }
    function Et(e, n) {
      var t = e._dbNamesDB;
      return t || (t = e._dbNamesDB = new Ne(Nn, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), t.table("dbnames");
    }
    function Kt(e) {
      return e && typeof e.databases == "function";
    }
    function jt(e) {
      return Ye(function() {
        return T.letThrough = !0, e();
      });
    }
    function At(e) {
      return !("from" in e);
    }
    var xe = function(e, n) {
      if (!this) {
        var t = new xe();
        return e && "d" in e && te(t, e), t;
      }
      te(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
    };
    function An(e, n, t) {
      var r = G(n, t);
      if (!isNaN(r)) {
        if (0 < r) throw RangeError();
        if (At(e)) return te(e, { from: n, to: t, d: 1 });
        var i = e.l, r = e.r;
        if (G(t, e.from) < 0) return i ? An(i, n, t) : e.l = { from: n, to: t, d: 1, l: null, r: null }, pr(e);
        if (0 < G(n, e.to)) return r ? An(r, n, t) : e.r = { from: n, to: t, d: 1, l: null, r: null }, pr(e);
        G(n, e.from) < 0 && (e.from = n, e.l = null, e.d = r ? r.d + 1 : 1), 0 < G(t, e.to) && (e.to = t, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, i && !e.l && Cn(e, i), r && t && Cn(e, r);
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
        if (G(u.from, i.to) <= 0 && 0 <= G(u.to, i.from)) return !0;
        G(i.from, u.from) < 0 ? i = (r = t.next(u.from)).value : u = (a = o.next(i.from)).value;
      }
      return !1;
    }
    function Jn(e) {
      var n = At(e) ? null : { s: 0, n: e };
      return { next: function(t) {
        for (var r = 0 < arguments.length; n; ) switch (n.s) {
          case 0:
            if (n.s = 1, r) for (; n.n.l && G(t, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
            else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
          case 1:
            if (n.s = 2, !r || G(t, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      i && (n = i == "r" ? "l" : "r", t = A({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], t[i] = r[n], (e[n] = t).d = yr(t)), e.d = yr(e);
    }
    function yr(t) {
      var n = t.r, t = t.l;
      return (n ? t ? Math.max(n.d, t.d) : n.d : t ? t.d : 0) + 1;
    }
    function Zn(e, n) {
      return V(n).forEach(function(t) {
        e[t] ? Cn(e[t], n[t]) : e[t] = function r(i) {
          var o, a, u = {};
          for (o in i) J(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || X.has(a.constructor) ? a : r(a));
          return u;
        }(n[t]);
      }), e;
    }
    function Ct(e, n) {
      return e.all || n.all || Object.keys(e).some(function(t) {
        return n[t] && dr(n[t], e[t]);
      });
    }
    Be(xe.prototype, ((De = { add: function(e) {
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
      return n && G(n.from, e) <= 0 && 0 <= G(n.to, e);
    } })[D] = function() {
      return Jn(this);
    }, De));
    var on = {}, Tt = {}, Mt = !1;
    function et(e) {
      Zn(Tt, e), Mt || (Mt = !0, setTimeout(function() {
        Mt = !1, It(Tt, !(Tt = {}));
      }, 0));
    }
    function It(e, n) {
      n === void 0 && (n = !1);
      var t = /* @__PURE__ */ new Set();
      if (e.all) for (var r = 0, i = Object.values(on); r < i.length; r++) vr(a = i[r], e, t, n);
      else for (var o in e) {
        var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
        u && (o = u[1], u = u[2], (a = on["idb://".concat(o, "/").concat(u)]) && vr(a, e, t, n));
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
    function Qr(e) {
      var n = e._state, t = e._deps.indexedDB;
      if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
        return n.dbOpenError ? se(n.dbOpenError) : e;
      });
      n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
      var r = n.openCanceller, i = Math.round(10 * e.verno), o = !1;
      function a() {
        if (n.openCanceller !== r) throw new C.DatabaseClosed("db.open() was cancelled");
      }
      function u() {
        return new K(function(y, l) {
          if (a(), !t) throw new C.MissingAPI();
          var d = e.name, v = n.autoSchema || !i ? t.open(d) : t.open(d, i);
          if (!v) throw new C.MissingAPI();
          v.onerror = Ie(l), v.onblocked = re(e._fireOnBlocked), v.onupgradeneeded = re(function(h) {
            var m;
            p = v.transaction, n.autoSchema && !e._options.allowEmptyDB ? (v.onerror = Dn, p.abort(), v.result.close(), (m = t.deleteDatabase(d)).onsuccess = m.onerror = re(function() {
              l(new C.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
            })) : (p.onerror = Ie(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = v.result, o && Hr(e, p), zr(e, h / 10, p, l));
          }, l), v.onsuccess = re(function() {
            p = null;
            var h, m, b, g, w, x = e.idbdb = v.result, S = sn(x.objectStoreNames);
            if (0 < S.length) try {
              var k = x.transaction((g = S).length === 1 ? g[0] : g, "readonly");
              if (n.autoSchema) m = x, b = k, (h = e).verno = m.version / 10, b = h._dbSchema = Gn(0, m, b), h._storeNames = sn(m.objectStoreNames, 0), zn(h, [h._allTables], V(b), b);
              else if (Qn(e, e._dbSchema, k), ((w = Pt(Gn(0, (w = e).idbdb, k), w._dbSchema)).add.length || w.change.some(function(O) {
                return O.add.length || O.change.length;
              })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), x.close(), i = x.version + 1, o = !0, y(u());
              Wn(e, k);
            } catch {
            }
            yn.push(e), x.onversionchange = re(function(O) {
              n.vcFired = !0, e.on("versionchange").fire(O);
            }), x.onclose = re(function(O) {
              e.on("close").fire(O);
            }), s && (w = e._deps, k = d, x = w.indexedDB, w = w.IDBKeyRange, Kt(x) || k === Nn || Et(x, w).put({ name: k }).catch(H)), y();
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
            var l = n.onReadyBeingFired.reduce(ut, H);
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
        return r === n.openCanceller && e._close(), se(y);
      }).finally(function() {
        n.openComplete = !0, c();
      }).then(function() {
        var y;
        return s && (y = {}, e.tables.forEach(function(l) {
          l.schema.indexes.forEach(function(d) {
            d.name && (y["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new xe(-1 / 0, [[[]]]));
          }), y["idb://".concat(e.name, "/").concat(l.name, "/")] = y["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new xe(-1 / 0, [[[]]]);
        }), He(En).fire(y), It(y, !0)), e;
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
      return A(A({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema, i = {}, o = [];
        function a(s, y, l) {
          var d = jn(s), v = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, m = 0 < y, m = A(A({}, l), { name: m ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: m, keyTail: y, keyLength: h, extractKey: Ot(s), unique: !m && l.unique });
          return v.push(m), m.isPrimaryKey || o.push(m), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), y + 1, l), v.sort(function(b, g) {
            return b.keyTail - g.keyTail;
          }), m;
        }
        n = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [n];
        for (var u = 0, f = r.indexes; u < f.length; u++) {
          var c = f[u];
          a(c.keyPath, 0, c);
        }
        function p(s) {
          var y, l = s.query.index;
          return l.isVirtual ? A(A({}, s), { query: { index: l.lowLevelIndex, range: (y = s.query.range, l = l.keyTail, { type: y.type === 1 ? 2 : y.type, lower: nt(y.lower, y.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: nt(y.upper, y.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
        }
        return A(A({}, t), { schema: A(A({}, r), { primaryKey: n, indexes: o, getIndexByKeyPath: function(s) {
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
            return Object.create(m, { continue: { value: function(b) {
              b != null ? m.continue(nt(b, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? m.continue(m.key.slice(0, v).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : m.continue();
            } }, continuePrimaryKey: { value: function(b, g) {
              m.continuePrimaryKey(nt(b, e.MAX_KEY, l), g);
            } }, primaryKey: { get: function() {
              return m.primaryKey;
            } }, key: { get: function() {
              var b = m.key;
              return v === 1 ? b[0] : b.slice(0, v);
            } }, value: { get: function() {
              return m.value;
            } } });
          }
        } });
      } });
    } };
    function Bt(e, n, t, r) {
      return t = t || {}, r = r || "", V(e).forEach(function(i) {
        var o, a, u;
        J(n, i) ? (o = e[i], a = n[i], typeof o == "object" && typeof a == "object" && o && a ? (u = j(o)) !== j(a) ? t[r + i] = n[i] : u === "Object" ? Bt(o, a, t, r + i + ".") : o !== a && (t[r + i] = n[i]) : o !== a && (t[r + i] = n[i])) : t[r + i] = void 0;
      }), V(n).forEach(function(i) {
        J(e, i) || (t[r + i] = n[i]);
      }), t;
    }
    function $t(e, n) {
      return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
    }
    var Jr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
      return A(A({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema.primaryKey;
        return A(A({}, t), { mutate: function(i) {
          var o = T.trans, a = o.table(n).hook, u = a.deleting, f = a.creating, c = a.updating;
          switch (i.type) {
            case "add":
              if (f.fire === H) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "put":
              if (f.fire === H && c.fire === H) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "delete":
              if (u.fire === H) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "deleteRange":
              if (u.fire === H) break;
              return o._promise("readwrite", function() {
                return function s(y, l, d) {
                  return t.query({ trans: y, values: !1, query: { index: r, range: l }, limit: d }).then(function(v) {
                    var h = v.result;
                    return p({ type: "delete", keys: h, trans: y }).then(function(m) {
                      return 0 < m.numFailures ? Promise.reject(m.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(y, A(A({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                    });
                  });
                }(i.trans, i.range, 1e4);
              }, !0);
          }
          return t.mutate(i);
          function p(s) {
            var y, l, d, v = T.trans, h = s.keys || $t(r, s);
            if (!h) throw new Error("Keys missing");
            return (s = s.type === "add" || s.type === "put" ? A(A({}, s), { keys: h }) : A({}, s)).type !== "delete" && (s.values = le([], s.values)), s.keys && (s.keys = le([], s.keys)), y = t, d = h, ((l = s).type === "add" ? Promise.resolve([]) : y.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(m) {
              var b = h.map(function(g, w) {
                var x, S, k, O = m[w], P = { onerror: null, onsuccess: null };
                return s.type === "delete" ? u.fire.call(P, g, O, v) : s.type === "add" || O === void 0 ? (x = f.fire.call(P, g, s.values[w], v), g == null && x != null && (s.keys[w] = g = x, r.outbound || be(s.values[w], r.keyPath, g))) : (x = Bt(O, s.values[w]), (S = c.fire.call(P, x, g, O, v)) && (k = s.values[w], Object.keys(S).forEach(function(_) {
                  J(k, _) ? k[_] = S[_] : be(k, _, S[_]);
                }))), P;
              });
              return t.mutate(s).then(function(g) {
                for (var w = g.failures, x = g.results, S = g.numFailures, g = g.lastResult, k = 0; k < h.length; ++k) {
                  var O = (x || h)[k], P = b[k];
                  O == null ? P.onerror && P.onerror(w[k]) : P.onsuccess && P.onsuccess(s.type === "put" && m[k] ? s.values[k] : O);
                }
                return { failures: w, results: x, numFailures: S, lastResult: g };
              }).catch(function(g) {
                return b.forEach(function(w) {
                  return w.onerror && w.onerror(g);
                }), Promise.reject(g);
              });
            });
          }
        } });
      } });
    } };
    function mr(e, n, t) {
      try {
        if (!n || n.keys.length < e.length) return null;
        for (var r = [], i = 0, o = 0; i < n.keys.length && o < e.length; ++i) G(n.keys[i], e[o]) === 0 && (r.push(t ? Ce(n.values[i]) : n.values[i]), ++o);
        return r.length === e.length ? r : null;
      } catch {
        return null;
      }
    }
    var Zr = { stack: "dbcore", level: -1, create: function(e) {
      return { table: function(n) {
        var t = e.table(n);
        return A(A({}, t), { getMany: function(r) {
          if (!r.cache) return t.getMany(r);
          var i = mr(r.keys, r.trans._cache, r.cache === "clone");
          return i ? K.resolve(i) : t.getMany(r).then(function(o) {
            return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Ce(o) : o }, o;
          });
        }, mutate: function(r) {
          return r.type !== "add" && (r.trans._cache = null), t.mutate(r);
        } });
      } };
    } };
    function br(e, n) {
      return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
    }
    function gr(e, n) {
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
      var n = e.schema.name, t = new xe(e.MIN_KEY, e.MAX_KEY);
      return A(A({}, e), { transaction: function(r, i, o) {
        if (T.subscr && i !== "readonly") throw new C.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(T.querier));
        return e.transaction(r, i, o);
      }, table: function(r) {
        var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, f = a.outbound, c = a.autoIncrement && s.filter(function(l) {
          return l.compound && l.keyPath.includes(a.keyPath);
        }), p = A(A({}, i), { mutate: function(l) {
          function d(_) {
            return _ = "idb://".concat(n, "/").concat(r, "/").concat(_), g[_] || (g[_] = new xe());
          }
          var v, h, m, b = l.trans, g = l.mutatedParts || (l.mutatedParts = {}), w = d(""), x = d(":dels"), S = l.type, P = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [$t(a, l).filter(function(_) {
            return _;
          }), l.values] : [], k = P[0], O = P[1], P = l.trans._cache;
          return z(k) ? (w.addKeys(k), (P = S === "delete" || k.length === O.length ? mr(k, P) : null) || x.addKeys(k), (P || O) && (v = d, h = P, m = O, o.indexes.forEach(function(_) {
            var F = v(_.name || "");
            function N(U) {
              return U != null ? _.extractKey(U) : null;
            }
            function W(U) {
              return _.multiEntry && z(U) ? U.forEach(function(je) {
                return F.addKey(je);
              }) : F.addKey(U);
            }
            (h || m).forEach(function(U, ge) {
              var Y = h && N(h[ge]), ge = m && N(m[ge]);
              G(Y, ge) !== 0 && (Y != null && W(Y), ge != null && W(ge));
            });
          }))) : k ? (O = { from: k.lower, to: k.upper }, x.add(O), w.add(O)) : (w.add(t), x.add(t), o.indexes.forEach(function(_) {
            return d(_.name).add(t);
          })), i.mutate(l).then(function(_) {
            return !k || l.type !== "add" && l.type !== "put" || (w.addKeys(_.results), c && c.forEach(function(F) {
              var N = l.values.map(function(U) {
                return F.extractKey(U);
              }), W = F.keyPath.findIndex(function(U) {
                return U === a.keyPath;
              });
              _.results.forEach(function(U) {
                return N[W] = U;
              }), d(F.name).addKeys(N);
            })), b.mutatedParts = Zn(b.mutatedParts || {}, g), _;
          });
        } }), s = function(d) {
          var v = d.query, d = v.index, v = v.range;
          return [d, new xe((d = v.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (v = v.upper) !== null && v !== void 0 ? v : e.MAX_KEY)];
        }, y = { get: function(l) {
          return [a, new xe(l.key)];
        }, getMany: function(l) {
          return [a, new xe().addKeys(l.keys)];
        }, count: s, query: s, openCursor: s };
        return V(y).forEach(function(l) {
          p[l] = function(d) {
            var v = T.subscr, h = !!v, m = br(T, i) && gr(l, d) ? d.obsSet = {} : v;
            if (h) {
              var b = function(O) {
                return O = "idb://".concat(n, "/").concat(r, "/").concat(O), m[O] || (m[O] = new xe());
              }, g = b(""), w = b(":dels"), v = y[l](d), h = v[0], v = v[1];
              if ((l === "query" && h.isPrimaryKey && !d.values ? w : b(h.name || "")).add(v), !h.isPrimaryKey) {
                if (l !== "count") {
                  var x = l === "query" && f && d.values && i.query(A(A({}, d), { values: !1 }));
                  return i[l].apply(this, arguments).then(function(O) {
                    if (l === "query") {
                      if (f && d.values) return x.then(function(N) {
                        return N = N.result, g.addKeys(N), O;
                      });
                      var P = d.values ? O.result.map(u) : O.result;
                      (d.values ? g : w).addKeys(P);
                    } else if (l === "openCursor") {
                      var _ = O, F = d.values;
                      return _ && Object.create(_, { key: { get: function() {
                        return w.addKey(_.primaryKey), _.key;
                      } }, primaryKey: { get: function() {
                        var N = _.primaryKey;
                        return w.addKey(N), N;
                      } }, value: { get: function() {
                        return F && g.addKey(_.primaryKey), _.value;
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
      return t.numFailures === r ? null : (n = A({}, n), z(n.keys) && (n.keys = n.keys.filter(function(i, o) {
        return !(o in t.failures);
      })), "values" in n && z(n.values) && (n.values = n.values.filter(function(i, o) {
        return !(o in t.failures);
      })), n);
    }
    function Rt(e, n) {
      return t = e, ((r = n).lower === void 0 || (r.lowerOpen ? 0 < G(t, r.lower) : 0 <= G(t, r.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? G(e, n.upper) < 0 : G(e, n.upper) <= 0));
      var t, r;
    }
    function _r(e, n, y, r, i, o) {
      if (!y || y.length === 0) return e;
      var a = n.query.index, u = a.multiEntry, f = n.query.range, c = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, y = y.reduce(function(l, d) {
        var v = l, h = [];
        if (d.type === "add" || d.type === "put") for (var m = new xe(), b = d.values.length - 1; 0 <= b; --b) {
          var g, w = d.values[b], x = c(w);
          m.hasKey(x) || (g = p(w), (u && z(g) ? g.some(function(P) {
            return Rt(P, f);
          }) : Rt(g, f)) && (m.addKey(x), h.push(w)));
        }
        switch (d.type) {
          case "add":
            v = l.concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "put":
            var S = new xe().addKeys(d.values.map(function(_) {
              return c(_);
            })), v = l.filter(function(_) {
              return !S.hasKey(n.values ? c(_) : _);
            }).concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "delete":
            var k = new xe().addKeys(d.keys);
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
        return G(s(l), s(d)) || G(c(l), c(d));
      }), n.limit && n.limit < 1 / 0 && (y.length > n.limit ? y.length = n.limit : e.length === n.limit && y.length < n.limit && (i.dirty = !0)), o ? Object.freeze(y) : y);
    }
    function xr(e, n) {
      return G(e.lower, n.lower) === 0 && G(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
    }
    function ni(e, n) {
      return function(t, r, i, o) {
        if (t === void 0) return r !== void 0 ? -1 : 0;
        if (r === void 0) return 1;
        if ((r = G(t, r)) === 0) {
          if (i && o) return 0;
          if (i) return 1;
          if (o) return -1;
        }
        return r;
      }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(t, r, i, o) {
        if (t === void 0) return r !== void 0 ? 1 : 0;
        if (r === void 0) return -1;
        if ((r = G(t, r)) === 0) {
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
      return A(A({}, e), { transaction: function(t, r, i) {
        var o, a, u = e.transaction(t, r, i);
        return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(f) {
          return function() {
            if (o.abort(), r === "readwrite") {
              for (var c = /* @__PURE__ */ new Set(), p = 0, s = t; p < s.length; p++) {
                var y = s[p], l = on["idb://".concat(n, "/").concat(y)];
                if (l) {
                  var d = e.table(y), v = l.optimisticOps.filter(function(F) {
                    return F.trans === u;
                  });
                  if (u._explicit && f && u.mutatedParts) for (var h = 0, m = Object.values(l.queries.query); h < m.length; h++) for (var b = 0, g = (S = m[h]).slice(); b < g.length; b++) Ct((k = g[b]).obsSet, u.mutatedParts) && (E(S, k), k.subscribers.forEach(function(F) {
                    return c.add(F);
                  }));
                  else if (0 < v.length) {
                    l.optimisticOps = l.optimisticOps.filter(function(F) {
                      return F.trans !== u;
                    });
                    for (var w = 0, x = Object.values(l.queries.query); w < x.length; w++) for (var S, k, O, P = 0, _ = (S = x[w]).slice(); P < _.length; P++) (k = _[P]).res != null && u.mutatedParts && (f && !k.dirty ? (O = Object.isFrozen(k.res), O = _r(k.res, k.req, v, d, k, O), k.dirty ? (E(S, k), k.subscribers.forEach(function(F) {
                      return c.add(F);
                    })) : O !== k.res && (k.res = O, k.promise = K.resolve({ result: O }))) : (k.dirty && E(S, k), k.subscribers.forEach(function(F) {
                      return c.add(F);
                    })));
                  }
                }
              }
              c.forEach(function(F) {
                return F();
              });
            }
          };
        }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
      }, table: function(t) {
        var r = e.table(t), i = r.schema.primaryKey;
        return A(A({}, r), { mutate: function(o) {
          var a = T.trans;
          if (i.outbound || a.db._options.cache === "disabled" || a.explicit) return r.mutate(o);
          var u = on["idb://".concat(n, "/").concat(t)];
          return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || $t(i, o).some(function(f) {
            return f == null;
          })) ? (u.optimisticOps.push(o), o.mutatedParts && et(o.mutatedParts), a.then(function(f) {
            0 < f.numFailures && (E(u.optimisticOps, o), (f = wr(0, o, f)) && u.optimisticOps.push(f), o.mutatedParts && et(o.mutatedParts));
          }), a.catch(function() {
            E(u.optimisticOps, o), o.mutatedParts && et(o.mutatedParts);
          })) : a.then(function(f) {
            var c = wr(0, A(A({}, o), { values: o.values.map(function(l, s) {
              var y, l = (y = i.keyPath) !== null && y !== void 0 && y.includes(".") ? Ce(l) : A({}, l);
              return be(l, i.keyPath, f.results[s]), l;
            }) }), f);
            u.optimisticOps.push(c), queueMicrotask(function() {
              return o.mutatedParts && et(o.mutatedParts);
            });
          }), a) : r.mutate(o);
        }, query: function(o) {
          if (!br(T, r) || !gr("query", o)) return r.query(o);
          var a = ((c = T.trans) === null || c === void 0 ? void 0 : c.db._options.cache) === "immutable", s = T, u = s.requery, f = s.signal, c = function(d, v, h, m) {
            var b = on["idb://".concat(d, "/").concat(v)];
            if (!b) return [];
            if (!(v = b.queries[h])) return [null, !1, b, null];
            var g = v[(m.query ? m.query.index.name : null) || ""];
            if (!g) return [null, !1, b, null];
            switch (h) {
              case "query":
                var w = g.find(function(x) {
                  return x.req.limit === m.limit && x.req.values === m.values && xr(x.req.query.range, m.query.range);
                });
                return w ? [w, !0, b, g] : [g.find(function(x) {
                  return ("limit" in x.req ? x.req.limit : 1 / 0) >= m.limit && (!m.values || x.req.values) && ni(x.req.query.range, m.query.range);
                }), !1, b, g];
              case "count":
                return w = g.find(function(x) {
                  return xr(x.req.query.range, m.query.range);
                }), [w, !!w, b, g];
            }
          }(n, t, "query", o), p = c[0], s = c[1], y = c[2], l = c[3];
          return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
            var v = d.result;
            if (p && (p.res = v), a) {
              for (var h = 0, m = v.length; h < m; ++h) Object.freeze(v[h]);
              Object.freeze(v);
            } else d.result = Ce(v);
            return d;
          }).catch(function(d) {
            return l && p && E(l, p), Promise.reject(d);
          }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (y = y || (on["idb://".concat(n, "/").concat(t)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ti(p, l, u, f), p.promise.then(function(d) {
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
    var Ne = (ce.prototype.version = function(e) {
      if (isNaN(e) || e < 0.1) throw new C.Type("Given version is not a positive number");
      if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new C.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, e);
      var n = this._versions, t = n.filter(function(r) {
        return r._cfg.version === e;
      })[0];
      return t || (t = new this.Version(e), n.push(t), n.sort(Wr), t.stores({}), this._state.autoSchema = !1, t);
    }, ce.prototype._whenReady = function(e) {
      var n = this;
      return this.idbdb && (this._state.openComplete || T.letThrough || this._vip) ? e() : new K(function(t, r) {
        if (n._state.openComplete) return r(new C.DatabaseClosed(n._state.dbOpenError));
        if (!n._state.isBeingOpened) {
          if (!n._state.autoOpen) return void r(new C.DatabaseClosed());
          n.open().catch(H);
        }
        n._state.dbReadyPromise.then(t, r);
      }).then(e);
    }, ce.prototype.use = function(e) {
      var n = e.stack, t = e.create, r = e.level, i = e.name;
      return i && this.unuse({ stack: n, name: i }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: t, level: r ?? 10, name: i }), e.sort(function(o, a) {
        return o.level - a.level;
      }), this;
    }, ce.prototype.unuse = function(e) {
      var n = e.stack, t = e.name, r = e.create;
      return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(i) {
        return r ? i.create !== r : !!t && i.name !== t;
      })), this;
    }, ce.prototype.open = function() {
      var e = this;
      return nn(Ue, function() {
        return Qr(e);
      });
    }, ce.prototype._close = function() {
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
    }, ce.prototype.close = function(t) {
      var n = (t === void 0 ? { disableAutoOpen: !0 } : t).disableAutoOpen, t = this._state;
      n ? (t.isBeingOpened && t.cancelOpen(new C.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new C.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
    }, ce.prototype.delete = function(e) {
      var n = this;
      e === void 0 && (e = { disableAutoOpen: !0 });
      var t = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
      return new K(function(i, o) {
        function a() {
          n.close(e);
          var u = n._deps.indexedDB.deleteDatabase(n.name);
          u.onsuccess = re(function() {
            var f, c, p;
            f = n._deps, c = n.name, p = f.indexedDB, f = f.IDBKeyRange, Kt(p) || c === Nn || Et(p, f).delete(c).catch(H), i();
          }), u.onerror = Ie(o), u.onblocked = n._fireOnBlocked;
        }
        if (t) throw new C.InvalidArgument("Invalid closeOptions argument to db.delete()");
        r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
      });
    }, ce.prototype.backendDB = function() {
      return this.idbdb;
    }, ce.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, ce.prototype.hasBeenClosed = function() {
      var e = this._state.dbOpenError;
      return e && e.name === "DatabaseClosed";
    }, ce.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, ce.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(ce.prototype, "tables", { get: function() {
      var e = this;
      return V(this._allTables).map(function(n) {
        return e._allTables[n];
      });
    }, enumerable: !1, configurable: !0 }), ce.prototype.transaction = function() {
      var e = (function(n, t, r) {
        var i = arguments.length;
        if (i < 2) throw new C.InvalidArgument("Too few arguments");
        for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
        return r = o.pop(), [n, ue(o), r];
      }).apply(this, arguments);
      return this._transaction.apply(this, e);
    }, ce.prototype._transaction = function(e, n, t) {
      var r = this, i = T.trans;
      i && i.db === this && e.indexOf("!") === -1 || (i = null);
      var o, a, u = e.indexOf("?") !== -1;
      e = e.replace("!", "").replace("?", "");
      try {
        if (a = n.map(function(c) {
          if (c = c instanceof r.Table ? c.name : c, typeof c != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return c;
        }), e == "r" || e === vt) o = vt;
        else {
          if (e != "rw" && e != mt) throw new C.InvalidArgument("Invalid transaction mode: " + e);
          o = mt;
        }
        if (i) {
          if (i.mode === vt && o === mt) {
            if (!u) throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            i = null;
          }
          i && a.forEach(function(c) {
            if (i && i.storeNames.indexOf(c) === -1) {
              if (!u) throw new C.SubTransaction("Table " + c + " not included in parent transaction.");
              i = null;
            }
          }), u && i && !i.active && (i = null);
        }
      } catch (c) {
        return i ? i._promise(null, function(p, s) {
          s(c);
        }) : se(c);
      }
      var f = (function c(p, s, y, l, d) {
        return K.resolve().then(function() {
          var v = T.transless || T, h = p._createTransaction(s, y, p._dbSchema, l);
          if (h.explicit = !0, v = { trans: h, transless: v }, l) h.idbtrans = l.idbtrans;
          else try {
            h.create(), h.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
          } catch (g) {
            return g.name === Ke.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
              return c(p, s, y, null, d);
            })) : se(g);
          }
          var m, b = Z(d);
          return b && pn(), v = K.follow(function() {
            var g;
            (m = d.call(h, h)) && (b ? (g = Ve.bind(null, null), m.then(g, g)) : typeof m.next == "function" && typeof m.throw == "function" && (m = qt(m)));
          }, v), (m && typeof m.then == "function" ? K.resolve(m).then(function(g) {
            return h.active ? g : se(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : v.then(function() {
            return m;
          })).then(function(g) {
            return l && h._resolve(), h._completion.then(function() {
              return g;
            });
          }).catch(function(g) {
            return h._reject(g), se(g);
          });
        });
      }).bind(null, this, o, a, i, t);
      return i ? i._promise(o, f, "lock") : T.trans ? nn(T.transless, function() {
        return r._whenReady(f);
      }) : this._whenReady(f);
    }, ce.prototype.table = function(e) {
      if (!J(this._allTables, e)) throw new C.InvalidTable("Table ".concat(e, " does not exist"));
      return this._allTables[e];
    }, ce);
    function ce(e, n) {
      var t = this;
      this._middlewares = {}, this.verno = 0;
      var r = ce.dependencies;
      this._options = n = A({ addons: ce.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, r = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var i, o, a, u, f, c = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: H, dbReadyPromise: null, cancelOpen: H, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
      c.dbReadyPromise = new K(function(s) {
        c.dbReadyResolve = s;
      }), c.openCanceller = new K(function(s, y) {
        c.cancelOpen = y;
      }), this._state = c, this.name = e, this.on = On(this, "populate", "blocked", "versionchange", "close", { ready: [ut, H] }), this.on.ready.subscribe = cn(this.on.ready.subscribe, function(s) {
        return function(y, l) {
          ce.vip(function() {
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
        } catch (b) {
          d = b;
        }
        var v = m._ctx, h = v.table, m = h.hook.reading.fire;
        this._ctx = { table: h, index: v.index, isPrimKey: !v.index || h.schema.primKey.keyPath && v.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: v.or, valueMapper: m !== Te ? m : null };
      })), this.Table = (o = this, Sn(rr.prototype, function(s, y, l) {
        this.db = o, this._tx = l, this.name = s, this.schema = y, this.hook = o._allTables[s] ? o._allTables[s].hook : On(null, { creating: [jr, H], reading: [Kr, Te], updating: [Cr, H], deleting: [Ar, H] });
      })), this.Transaction = (a = this, Sn(Lr.prototype, function(s, y, l, d, v) {
        var h = this;
        this.db = a, this.mode = s, this.storeNames = y, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = On(this, "complete", "error", "abort"), this.parent = v || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new K(function(m, b) {
          h._resolve = m, h._reject = b;
        }), this._completion.then(function() {
          h.active = !1, h.on.complete.fire();
        }, function(m) {
          var b = h.active;
          return h.active = !1, h.on.error.fire(m), h.parent ? h.parent._reject(m) : b && h.idbtrans && h.idbtrans.abort(), se(m);
        });
      })), this.Version = (u = this, Sn(Gr.prototype, function(s) {
        this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (f = this, Sn(sr.prototype, function(s, y, l) {
        if (this.db = f, this._ctx = { table: s, index: y === ":id" ? null : y, or: l }, this._cmp = this._ascending = G, this._descending = function(d, v) {
          return G(v, d);
        }, this._max = function(d, v) {
          return 0 < G(d, v) ? d : v;
        }, this._min = function(d, v) {
          return G(d, v) < 0 ? d : v;
        }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange) throw new C.MissingAPI();
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
    var rt, De = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ii = (Ft.prototype.subscribe = function(e, n, t) {
      return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: t });
    }, Ft.prototype[De] = function() {
      return this;
    }, Ft);
    function Ft(e) {
      this._subscribe = e;
    }
    try {
      rt = { indexedDB: M.indexedDB || M.mozIndexedDB || M.webkitIndexedDB || M.msIndexedDB, IDBKeyRange: M.IDBKeyRange || M.webkitIDBKeyRange };
    } catch {
      rt = { indexedDB: null, IDBKeyRange: null };
    }
    function kr(e) {
      var n, t = !1, r = new ii(function(i) {
        var o = Z(e), a, u = !1, f = {}, c = {}, p = { get closed() {
          return u;
        }, unsubscribe: function() {
          u || (u = !0, a && a.abort(), s && He.storagemutated.unsubscribe(l));
        } };
        i.start && i.start(p);
        var s = !1, y = function() {
          return yt(d);
        }, l = function(v) {
          Zn(f, v), Ct(c, f) && y();
        }, d = function() {
          var v, h, m;
          !u && rt.indexedDB && (f = {}, v = {}, a && a.abort(), a = new AbortController(), m = function(b) {
            var g = hn();
            try {
              o && pn();
              var w = Ye(e, b);
              return w = o ? w.finally(Ve) : w;
            } finally {
              g && dn();
            }
          }(h = { subscr: v, signal: a.signal, requery: y, querier: e, trans: null }), Promise.resolve(m).then(function(b) {
            t = !0, n = b, u || h.signal.aborted || (f = {}, function(g) {
              for (var w in g) if (J(g, w)) return;
              return 1;
            }(c = v) || s || (He(En, l), s = !0), yt(function() {
              return !u && i.next && i.next(b);
            }));
          }, function(b) {
            t = !1, ["DatabaseClosedError", "AbortError"].includes(b == null ? void 0 : b.name) || u || yt(function() {
              u || i.error && i.error(b);
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
    var an = Ne;
    function Nt(e) {
      var n = Ge;
      try {
        Ge = !0, He.storagemutated.fire(e), It(e, !0);
      } finally {
        Ge = n;
      }
    }
    Be(an, A(A({}, Se), { delete: function(e) {
      return new an(e, { addons: [] }).delete();
    }, exists: function(e) {
      return new an(e, { addons: [] }).open().then(function(n) {
        return n.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(e) {
      try {
        return n = an.dependencies, t = n.indexedDB, n = n.IDBKeyRange, (Kt(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== Nn;
          });
        }) : Et(t, n).toCollection().primaryKeys()).then(e);
      } catch {
        return se(new C.MissingAPI());
      }
      var n, t;
    }, defineClass: function() {
      return function(e) {
        te(this, e);
      };
    }, ignoreTransaction: function(e) {
      return T.trans ? nn(T.transless, e) : e();
    }, vip: jt, async: function(e) {
      return function() {
        try {
          var n = qt(e.apply(this, arguments));
          return n && typeof n.then == "function" ? n : K.resolve(n);
        } catch (t) {
          return se(t);
        }
      };
    }, spawn: function(e, n, t) {
      try {
        var r = qt(e.apply(t, n || []));
        return r && typeof r.then == "function" ? r : K.resolve(r);
      } catch (i) {
        return se(i);
      }
    }, currentTransaction: { get: function() {
      return T.trans || null;
    } }, waitFor: function(e, n) {
      return n = K.resolve(typeof e == "function" ? an.ignoreTransaction(e) : e).timeout(n || 6e4), T.trans ? T.trans.waitFor(n) : n;
    }, Promise: K, debug: { get: function() {
      return Me;
    }, set: function(e) {
      Wt(e);
    } }, derive: $e, extend: te, props: Be, override: cn, Events: On, on: He, liveQuery: kr, extendObservabilitySet: Zn, getByKeyPath: ye, setByKeyPath: be, delByKeyPath: function(e, n) {
      typeof n == "string" ? be(e, n, void 0) : "length" in n && [].map.call(n, function(t) {
        be(e, t, void 0);
      });
    }, shallowClone: ln, deepClone: Ce, getObjectDiff: Bt, cmp: G, asap: Le, minKey: -1 / 0, addons: [], connections: yn, errnames: Ke, dependencies: rt, cache: on, semVer: "4.0.8", version: "4.0.8".split(".").map(function(e) {
      return parseInt(e);
    }).reduce(function(e, n, t) {
      return e + n / Math.pow(10, 2 * t);
    }) })), an.maxKey = Kn(an.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (He(En, function(e) {
      Ge || (e = new CustomEvent(_t, { detail: e }), Ge = !0, dispatchEvent(e), Ge = !1);
    }), addEventListener(_t, function(e) {
      e = e.detail, Ge || Nt(e);
    }));
    var bn, Ge = !1, Or = function() {
    };
    return typeof BroadcastChannel < "u" && ((Or = function() {
      (bn = new BroadcastChannel(_t)).onmessage = function(e) {
        return e.data && Nt(e.data);
      };
    })(), typeof bn.unref == "function" && bn.unref(), He(En, function(e) {
      Ge || bn.postMessage(e);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
      if (!Ne.disableBfCache && e.persisted) {
        Me && console.debug("Dexie: handling persisted pagehide"), bn != null && bn.close();
        for (var n = 0, t = yn; n < t.length; n++) t[n].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(e) {
      !Ne.disableBfCache && e.persisted && (Me && console.debug("Dexie: handling persisted pageshow"), Or(), Nt({ all: new xe(-1 / 0, [[]]) }));
    })), K.rejectionMapper = function(e, n) {
      return !e || e instanceof ee || e instanceof TypeError || e instanceof SyntaxError || !e.name || !me[e.name] ? e : (n = new me[e.name](n || e.message, e), "stack" in e && _e(n, "stack", { get: function() {
        return this.inner.stack;
      } }), n);
    }, Wt(Me), A(Ne, Object.freeze({ __proto__: null, Dexie: Ne, liveQuery: kr, Entity: er, cmp: G, PropModSymbol: Fe, PropModification: Pn, replacePrefix: function(e, n) {
      return new Pn({ replacePrefix: [e, n] });
    }, add: function(e) {
      return new Pn({ add: e });
    }, remove: function(e) {
      return new Pn({ remove: e });
    }, default: Ne, RangeSet: xe, mergeRanges: Cn, rangesOverlap: dr }), { default: Ne }), Ne;
  });
})(Dr);
var ui = Dr.exports;
const Yt = /* @__PURE__ */ Pr(ui), Sr = Symbol.for("Dexie"), Vt = globalThis[Sr] || (globalThis[Sr] = Yt);
if (Yt.semVer !== Vt.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Yt.semVer} and ${Vt.semVer}`);
var Er = { exports: {} };
(function(ae, oe) {
  (function(L, A) {
    ae.exports = A();
  })(Ut, function() {
    var L = 1e3, A = 6e4, le = 36e5, M = "millisecond", V = "second", z = "minute", te = "hour", B = "day", he = "week", J = "month", Be = "quarter", Ee = "year", _e = "date", $e = "Invalid Date", ot = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, at = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, sn = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var j = ["th", "st", "nd", "rd"], D = R % 100;
      return "[" + R + (j[(D - 20) % 10] || j[D] || j[0]) + "]";
    } }, cn = function(R, j, D) {
      var I = String(R);
      return !I || I.length >= j ? R : "" + Array(j + 1 - I.length).join(D) + R;
    }, Qe = { s: cn, z: function(R) {
      var j = -R.utcOffset(), D = Math.abs(j), I = Math.floor(D / 60), E = D % 60;
      return (j <= 0 ? "+" : "-") + cn(I, 2, "0") + ":" + cn(E, 2, "0");
    }, m: function R(j, D) {
      if (j.date() < D.date()) return -R(D, j);
      var I = 12 * (D.year() - j.year()) + (D.month() - j.month()), E = j.clone().add(I, J), $ = D - E < 0, q = j.clone().add(I + ($ ? -1 : 1), J);
      return +(-(I + (D - E) / ($ ? E - q : q - E)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: J, y: Ee, w: he, d: B, D: _e, h: te, m: z, s: V, ms: M, Q: Be }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, Le = "en", ye = {};
    ye[Le] = sn;
    var be = "$isDayjsObject", ln = function(R) {
      return R instanceof Ae || !(!R || !R[be]);
    }, fn = function R(j, D, I) {
      var E;
      if (!j) return Le;
      if (typeof j == "string") {
        var $ = j.toLowerCase();
        ye[$] && (E = $), D && (ye[$] = D, E = $);
        var q = j.split("-");
        if (!E && q.length > 1) return R(q[0]);
      } else {
        var Z = j.name;
        ye[Z] = j, E = Z;
      }
      return !I && E && (Le = E), E || !I && Le;
    }, ue = function(R, j) {
      if (ln(R)) return R.clone();
      var D = typeof j == "object" ? j : {};
      return D.date = R, D.args = arguments, new Ae(D);
    }, X = Qe;
    X.l = fn, X.i = ln, X.w = function(R, j) {
      return ue(R, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
    };
    var Ae = function() {
      function R(D) {
        this.$L = fn(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[be] = !0;
      }
      var j = R.prototype;
      return j.parse = function(D) {
        this.$d = function(I) {
          var E = I.date, $ = I.utc;
          if (E === null) return /* @__PURE__ */ new Date(NaN);
          if (X.u(E)) return /* @__PURE__ */ new Date();
          if (E instanceof Date) return new Date(E);
          if (typeof E == "string" && !/Z$/i.test(E)) {
            var q = E.match(ot);
            if (q) {
              var Z = q[2] - 1 || 0, ie = (q[7] || "0").substring(0, 3);
              return $ ? new Date(Date.UTC(q[1], Z, q[3] || 1, q[4] || 0, q[5] || 0, q[6] || 0, ie)) : new Date(q[1], Z, q[3] || 1, q[4] || 0, q[5] || 0, q[6] || 0, ie);
            }
          }
          return new Date(E);
        }(D), this.init();
      }, j.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, j.$utils = function() {
        return X;
      }, j.isValid = function() {
        return this.$d.toString() !== $e;
      }, j.isSame = function(D, I) {
        var E = ue(D);
        return this.startOf(I) <= E && E <= this.endOf(I);
      }, j.isAfter = function(D, I) {
        return ue(D) < this.startOf(I);
      }, j.isBefore = function(D, I) {
        return this.endOf(I) < ue(D);
      }, j.$g = function(D, I, E) {
        return X.u(D) ? this[I] : this.set(E, D);
      }, j.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, j.valueOf = function() {
        return this.$d.getTime();
      }, j.startOf = function(D, I) {
        var E = this, $ = !!X.u(I) || I, q = X.p(D), Z = function(C, me) {
          var Se = X.w(E.$u ? Date.UTC(E.$y, me, C) : new Date(E.$y, me, C), E);
          return $ ? Se : Se.endOf(B);
        }, ie = function(C, me) {
          return X.w(E.toDate()[C].apply(E.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(me)), E);
        }, ee = this.$W, fe = this.$M, ve = this.$D, Oe = "set" + (this.$u ? "UTC" : "");
        switch (q) {
          case Ee:
            return $ ? Z(1, 0) : Z(31, 11);
          case J:
            return $ ? Z(1, fe) : Z(0, fe + 1);
          case he:
            var Ke = this.$locale().weekStart || 0, Xe = (ee < Ke ? ee + 7 : ee) - Ke;
            return Z($ ? ve - Xe : ve + (6 - Xe), fe);
          case B:
          case _e:
            return ie(Oe + "Hours", 0);
          case te:
            return ie(Oe + "Minutes", 1);
          case z:
            return ie(Oe + "Seconds", 2);
          case V:
            return ie(Oe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, j.endOf = function(D) {
        return this.startOf(D, !1);
      }, j.$set = function(D, I) {
        var E, $ = X.p(D), q = "set" + (this.$u ? "UTC" : ""), Z = (E = {}, E[B] = q + "Date", E[_e] = q + "Date", E[J] = q + "Month", E[Ee] = q + "FullYear", E[te] = q + "Hours", E[z] = q + "Minutes", E[V] = q + "Seconds", E[M] = q + "Milliseconds", E)[$], ie = $ === B ? this.$D + (I - this.$W) : I;
        if ($ === J || $ === Ee) {
          var ee = this.clone().set(_e, 1);
          ee.$d[Z](ie), ee.init(), this.$d = ee.set(_e, Math.min(this.$D, ee.daysInMonth())).$d;
        } else Z && this.$d[Z](ie);
        return this.init(), this;
      }, j.set = function(D, I) {
        return this.clone().$set(D, I);
      }, j.get = function(D) {
        return this[X.p(D)]();
      }, j.add = function(D, I) {
        var E, $ = this;
        D = Number(D);
        var q = X.p(I), Z = function(fe) {
          var ve = ue($);
          return X.w(ve.date(ve.date() + Math.round(fe * D)), $);
        };
        if (q === J) return this.set(J, this.$M + D);
        if (q === Ee) return this.set(Ee, this.$y + D);
        if (q === B) return Z(1);
        if (q === he) return Z(7);
        var ie = (E = {}, E[z] = A, E[te] = le, E[V] = L, E)[q] || 1, ee = this.$d.getTime() + D * ie;
        return X.w(ee, this);
      }, j.subtract = function(D, I) {
        return this.add(-1 * D, I);
      }, j.format = function(D) {
        var I = this, E = this.$locale();
        if (!this.isValid()) return E.invalidDate || $e;
        var $ = D || "YYYY-MM-DDTHH:mm:ssZ", q = X.z(this), Z = this.$H, ie = this.$m, ee = this.$M, fe = E.weekdays, ve = E.months, Oe = E.meridiem, Ke = function(me, Se, H, Te) {
          return me && (me[Se] || me(I, $)) || H[Se].slice(0, Te);
        }, Xe = function(me) {
          return X.s(Z % 12 || 12, me, "0");
        }, C = Oe || function(me, Se, H) {
          var Te = me < 12 ? "AM" : "PM";
          return H ? Te.toLowerCase() : Te;
        };
        return $.replace(at, function(me, Se) {
          return Se || function(H) {
            switch (H) {
              case "YY":
                return String(I.$y).slice(-2);
              case "YYYY":
                return X.s(I.$y, 4, "0");
              case "M":
                return ee + 1;
              case "MM":
                return X.s(ee + 1, 2, "0");
              case "MMM":
                return Ke(E.monthsShort, ee, ve, 3);
              case "MMMM":
                return Ke(ve, ee);
              case "D":
                return I.$D;
              case "DD":
                return X.s(I.$D, 2, "0");
              case "d":
                return String(I.$W);
              case "dd":
                return Ke(E.weekdaysMin, I.$W, fe, 2);
              case "ddd":
                return Ke(E.weekdaysShort, I.$W, fe, 3);
              case "dddd":
                return fe[I.$W];
              case "H":
                return String(Z);
              case "HH":
                return X.s(Z, 2, "0");
              case "h":
                return Xe(1);
              case "hh":
                return Xe(2);
              case "a":
                return C(Z, ie, !0);
              case "A":
                return C(Z, ie, !1);
              case "m":
                return String(ie);
              case "mm":
                return X.s(ie, 2, "0");
              case "s":
                return String(I.$s);
              case "ss":
                return X.s(I.$s, 2, "0");
              case "SSS":
                return X.s(I.$ms, 3, "0");
              case "Z":
                return q;
            }
            return null;
          }(me) || q.replace(":", "");
        });
      }, j.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, j.diff = function(D, I, E) {
        var $, q = this, Z = X.p(I), ie = ue(D), ee = (ie.utcOffset() - this.utcOffset()) * A, fe = this - ie, ve = function() {
          return X.m(q, ie);
        };
        switch (Z) {
          case Ee:
            $ = ve() / 12;
            break;
          case J:
            $ = ve();
            break;
          case Be:
            $ = ve() / 3;
            break;
          case he:
            $ = (fe - ee) / 6048e5;
            break;
          case B:
            $ = (fe - ee) / 864e5;
            break;
          case te:
            $ = fe / le;
            break;
          case z:
            $ = fe / A;
            break;
          case V:
            $ = fe / L;
            break;
          default:
            $ = fe;
        }
        return E ? $ : X.a($);
      }, j.daysInMonth = function() {
        return this.endOf(J).$D;
      }, j.$locale = function() {
        return ye[this.$L];
      }, j.locale = function(D, I) {
        if (!D) return this.$L;
        var E = this.clone(), $ = fn(D, I, !0);
        return $ && (E.$L = $), E;
      }, j.clone = function() {
        return X.w(this.$d, this);
      }, j.toDate = function() {
        return new Date(this.valueOf());
      }, j.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, j.toISOString = function() {
        return this.$d.toISOString();
      }, j.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), Ce = Ae.prototype;
    return ue.prototype = Ce, [["$ms", M], ["$s", V], ["$m", z], ["$H", te], ["$W", B], ["$M", J], ["$y", Ee], ["$D", _e]].forEach(function(R) {
      Ce[R[1]] = function(j) {
        return this.$g(j, R[0], R[1]);
      };
    }), ue.extend = function(R, j) {
      return R.$i || (R(j, Ae, ue), R.$i = !0), ue;
    }, ue.locale = fn, ue.isDayjs = ln, ue.unix = function(R) {
      return ue(1e3 * R);
    }, ue.en = ye[Le], ue.Ls = ye, ue.p = {}, ue;
  });
})(Er);
var si = Er.exports;
const ci = /* @__PURE__ */ Pr(si);
var li = (
  /** @class */
  function() {
    function ae(oe, L, A) {
      L === void 0 && (L = 1), A === void 0 && (A = []), this.name = oe, this.version = L, this.dbKeys = A, this.dbStore = new Vt(oe), this.dbStore.version(this.version).stores({
        dbData: "++id,dateTime,type"
        // Primary key & Indexed props
      });
    }
    return ae.prototype.setData = function(oe) {
      oe.dateTime || (oe.dateTime = ci().format("YYYY-MM-DD HH:mm:ss:SSS")), oe.type || (oe.type = "info"), this.dbStore.dbData.add(oe);
    }, ae.prototype.deleteAll = function() {
      return this.dbStore.dbData.clear();
    }, ae.prototype.getAllData = function() {
      return oi(this, arguments, void 0, function(oe) {
        var L;
        return oe === void 0 && (oe = !0), ai(this, function(A) {
          switch (A.label) {
            case 0:
              return [
                4,
                this.dbStore.dbData.toArray()
                // return allData
              ];
            case 1:
              return L = A.sent(), [2, oe ? L : L.reverse()];
          }
        });
      });
    }, ae.prototype.getAllLength = function() {
      return this.dbStore.dbData.count();
    }, ae.prototype.getFilterData = function(oe) {
      return this.dbStore.dbData.filter(function(L) {
        return L.content.includes(oe);
      }).toArray();
    }, ae.prototype.getKeys = function(oe) {
      return this.dbStore.dbData.orderBy(oe).keys();
    }, ae;
  }()
);
export {
  li as IndexDb
};
