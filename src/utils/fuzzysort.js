/*!
 * fuzzysort
 * Copyright (c) 2018 Stephen Kamenar
 * Released under the MIT license
 * https://github.com/farzher/fuzzysort/blob/master/LICENSE */

!function (e, r) {
  "function" == typeof define && define.amd ? define([], r) : "object" == typeof module && module.exports ? module.exports = r() : e.fuzzysort = r()
}(this, function () {
  var e = new Map, r = new Map, n = [];
  n.total = 0;
  var o = [], t = [];

  function a() {
    e.clear(), r.clear(), o = [], t = []
  }

  function i(e) {
    for (var r = -9007199254740991, n = e.length - 1; n >= 0; --n) {
      var o = e[n];
      if (null !== o) {
        var t = o.score;
        t > r && (r = t)
      }
    }
    return -9007199254740991 === r ? null : r
  }

  function l(e, r) {
    var n = e[r];
    if (void 0 !== n) return n;
    let o = r;
    Array.isArray(r) || (o = r.split("."));
    for (var t = o.length, a = -1; e && ++a < t;) e = e[o[a]];
    return e
  }

  function f(e) {
    return "object" == typeof e
  }

  var u = function () {
    var e = [], r = 0, n = {};

    function o() {
      for (var n = 0, o = e[n], t = 1; t < r;) {
        var a = t + 1;
        n = t, a < r && e[a].score < e[t].score && (n = a), e[n - 1 >> 1] = e[n], t = 1 + (n << 1)
      }
      for (var i = n - 1 >> 1; n > 0 && o.score < e[i].score; i = (n = i) - 1 >> 1) e[n] = e[i];
      e[n] = o
    }

    return n.add = function (n) {
      var o = r;
      e[r++] = n;
      for (var t = o - 1 >> 1; o > 0 && n.score < e[t].score; t = (o = t) - 1 >> 1) e[o] = e[t];
      e[o] = n
    }, n.poll = function () {
      if (0 !== r) {
        var n = e[0];
        return e[0] = e[--r], o(), n
      }
    }, n.peek = function (n) {
      if (0 !== r) return e[0]
    }, n.replaceTop = function (r) {
      e[0] = r, o()
    }, n
  }();
  return function p(s) {
    var c = {
      single: function (e, r, n) {
        return e ? (f(e) || (e = c.getPreparedSearch(e)), r ? (f(r) || (r = c.getPrepared(r)), ((n && void 0 !== n.allowTypo ? n.allowTypo : !s || void 0 === s.allowTypo || s.allowTypo) ? c.algorithm : c.algorithmNoTypo)(e, r, e[0])) : null) : null
      }, go: function (e, r, o) {
        if (!e) return n;
        var t = (e = c.prepareSearch(e))[0], a = o && o.threshold || s && s.threshold || -9007199254740991,
          p = o && o.limit || s && s.limit || 9007199254740991,
          g = (o && void 0 !== o.allowTypo ? o.allowTypo : !s || void 0 === s.allowTypo || s.allowTypo) ? c.algorithm : c.algorithmNoTypo,
          d = 0, v = 0, h = r.length;
        if (o && o.keys) for (var x = o.scoreFn || i, y = o.keys, w = y.length, k = h - 1; k >= 0; --k) {
          for (var T = r[k], b = new Array(w), m = w - 1; m >= 0; --m) (C = l(T, I = y[m])) ? (f(C) || (C = c.getPrepared(C)), b[m] = g(e, C, t)) : b[m] = null;
          b.obj = T;
          var B = x(b);
          null !== B && (B < a || (b.score = B, d < p ? (u.add(b), ++d) : (++v, B > u.peek().score && u.replaceTop(b))))
        } else if (o && o.key) {
          var I = o.key;
          for (k = h - 1; k >= 0; --k) (C = l(T = r[k], I)) && (f(C) || (C = c.getPrepared(C)), null !== (_ = g(e, C, t)) && (_.score < a || (_ = {
            target: _.target,
            _targetLowerCodes: null,
            _nextBeginningIndexes: null,
            score: _.score,
            indexes: _.indexes,
            obj: T
          }, d < p ? (u.add(_), ++d) : (++v, _.score > u.peek().score && u.replaceTop(_)))))
        } else for (k = h - 1; k >= 0; --k) {
          var C, _;
          (C = r[k]) && (f(C) || (C = c.getPrepared(C)), null !== (_ = g(e, C, t)) && (_.score < a || (d < p ? (u.add(_), ++d) : (++v, _.score > u.peek().score && u.replaceTop(_)))))
        }
        if (0 === d) return n;
        var A = new Array(d);
        for (k = d - 1; k >= 0; --k) A[k] = u.poll();
        return A.total = d + v, A
      }, prepare: function (e) {
        if (e) return {
          target: e,
          _targetLowerCodes: c.prepareLowerCodes(e),
          _nextBeginningIndexes: null,
          score: null,
          indexes: null,
          obj: null
        }
      }, prepareSearch: function (e) {
        if (e) return c.prepareLowerCodes(e)
      }, getPrepared: function (r) {
        if (r.length > 999) return c.prepare(r);
        var n = e.get(r);
        return void 0 !== n ? n : (n = c.prepare(r), e.set(r, n), n)
      }, getPreparedSearch: function (e) {
        if (e.length > 999) return c.prepareSearch(e);
        var n = r.get(e);
        return void 0 !== n ? n : (n = c.prepareSearch(e), r.set(e, n), n)
      }, algorithm: function (e, r, n) {
        for (var a = r._targetLowerCodes, i = e.length, l = a.length, f = 0, u = 0, p = 0, s = 0; ;) {
          if (n === a[u]) {
            if (o[s++] = u, ++f === i) break;
            n = e[0 === p ? f : p === f ? f + 1 : p === f - 1 ? f - 1 : f]
          }
          if (++u >= l) for (; ;) {
            if (f <= 1) return null;
            if (0 === p) {
              if (n === e[--f]) continue;
              p = f
            } else {
              if (1 === p) return null;
              if ((n = e[1 + (f = --p)]) === e[f]) continue
            }
            u = o[(s = f) - 1] + 1;
            break
          }
        }
        f = 0;
        var g = 0, d = !1, v = 0, h = r._nextBeginningIndexes;
        null === h && (h = r._nextBeginningIndexes = c.prepareNextBeginningIndexes(r.target));
        var x = u = 0 === o[0] ? 0 : h[o[0] - 1];
        if (u !== l) for (; ;) if (u >= l) {
          if (f <= 0) {
            if (++g > i - 2) break;
            if (e[g] === e[g + 1]) continue;
            u = x;
            continue
          }
          --f, u = h[t[--v]]
        } else if (e[0 === g ? f : g === f ? f + 1 : g === f - 1 ? f - 1 : f] === a[u]) {
          if (t[v++] = u, ++f === i) {
            d = !0;
            break
          }
          ++u
        } else u = h[u];
        if (d) var y = t, w = v; else y = o, w = s;
        for (var k = 0, T = -1, b = 0; b < i; ++b) T !== (u = y[b]) - 1 && (k -= u), T = u;
        for (d ? 0 !== g && (k += -20) : (k *= 1e3, 0 !== p && (k += -20)), k -= l - i, r.score = k, r.indexes = new Array(w), b = w - 1; b >= 0; --b) r.indexes[b] = y[b];
        return r
      }, algorithmNoTypo: function (e, r, n) {
        for (var a = r._targetLowerCodes, i = e.length, l = a.length, f = 0, u = 0, p = 0; ;) {
          if (n === a[u]) {
            if (o[p++] = u, ++f === i) break;
            n = e[f]
          }
          if (++u >= l) return null
        }
        f = 0;
        var s = !1, g = 0, d = r._nextBeginningIndexes;
        if (null === d && (d = r._nextBeginningIndexes = c.prepareNextBeginningIndexes(r.target)), (u = 0 === o[0] ? 0 : d[o[0] - 1]) !== l) for (; ;) if (u >= l) {
          if (f <= 0) break;
          --f, u = d[t[--g]]
        } else if (e[f] === a[u]) {
          if (t[g++] = u, ++f === i) {
            s = !0;
            break
          }
          ++u
        } else u = d[u];
        if (s) var v = t, h = g; else v = o, h = p;
        for (var x = 0, y = -1, w = 0; w < i; ++w) y !== (u = v[w]) - 1 && (x -= u), y = u;
        for (s || (x *= 1e3), x -= l - i, r.score = x, r.indexes = new Array(h), w = h - 1; w >= 0; --w) r.indexes[w] = v[w];
        return r
      }, prepareLowerCodes: function (e) {
        for (var r = e.length, n = [], o = e.toLowerCase(), t = 0; t < r; ++t) n[t] = o.charCodeAt(t);
        return n
      }, prepareBeginningIndexes: function (e) {
        for (var r = e.length, n = [], o = 0, t = !1, a = !1, i = 0; i < r; ++i) {
          var l = e.charCodeAt(i), f = l >= 65 && l <= 90, u = f || l >= 97 && l <= 122 || l >= 48 && l <= 57,
            p = f && !t || !a || !u;
          t = f, a = u, p && (n[o++] = i)
        }
        return n
      }, prepareNextBeginningIndexes: function (e) {
        for (var r = e.length, n = c.prepareBeginningIndexes(e), o = [], t = n[0], a = 0, i = 0; i < r; ++i) t > i ? o[i] = t : (t = n[++a], o[i] = void 0 === t ? r : t);
        return o
      }, cleanup: a, new: p
    };
    return c
  }()
});
