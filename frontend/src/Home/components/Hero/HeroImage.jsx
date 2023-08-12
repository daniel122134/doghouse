// @ts-nocheck
/* eslint-disable */
import React, { useEffect } from 'react'

// @ts-ignore
const HeroImage = () => {
  useEffect(() => {
    // @ts-ignore
    !(function (t, n) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = n())
        : 'function' == typeof __SVGATOR_DEFINE__ && __SVGATOR_DEFINE__.amd
        ? __SVGATOR_DEFINE__(n)
        : (((t =
            'undefined' != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__['5c7f360c'] = n()))
    })(this, function () {
      'use strict'
      function t(t, n) {
        var e = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
            })),
            e.push.apply(e, r)
        }
        return e
      }
      function n(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? t(Object(r), !0).forEach(function (t) {
                o(n, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return n
      }
      function e(t) {
        return (e =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError('Cannot call a class as a function')
      }
      function i(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function u(t, n, e) {
        return n && i(t.prototype, n), e && i(t, e), t
      }
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[n] = e),
          t
        )
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t
          })(t, n)
      }
      function s() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' == typeof Proxy) return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          )
        } catch (t) {
          return !1
        }
      }
      function f(t, n, e) {
        return (f = s()
          ? Reflect.construct
          : function (t, n, e) {
              var r = [null]
              r.push.apply(r, n)
              var i = new (Function.bind.apply(t, r))()
              return e && l(i, e.prototype), i
            }).apply(null, arguments)
      }
      function c(t, n) {
        if (n && ('object' == typeof n || 'function' == typeof n)) return n
        if (void 0 !== n)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t
        })(t)
      }
      function h(t, n, e) {
        return (h =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, n, e) {
                var r = (function (t, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, n) &&
                    null !== (t = a(t));

                  );
                  return t
                })(t, n)
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, n)
                  return i.get ? i.get.call(e) : i.value
                }
              })(t, n, e || t)
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return y(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, n) {
            if (!t) return
            if ('string' == typeof t) return y(t, n)
            var e = Object.prototype.toString.call(t).slice(8, -1)
            'Object' === e && t.constructor && (e = t.constructor.name)
            if ('Map' === e || 'Set' === e) return Array.from(t)
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return y(t, n)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function y(t, n) {
        ;(null == n || n > t.length) && (n = t.length)
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e]
        return r
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return 'number' == typeof t && isFinite(t) && Math.floor(t) === t
        }),
        Number.EPSILON
      var g = d(Math.pow(10, -6))
      function d(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6
        if (Number.isInteger(t)) return t
        var e = Math.pow(10, n)
        return Math.round((+t + Number.EPSILON) * e) / e
      }
      function p(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g
        return Math.abs(t - n) < e
      }
      var m = Math.PI / 180
      function b(t) {
        return t
      }
      function w(t, n, e) {
        var r = 1 - e
        return 3 * e * r * (t * r + n * e) + e * e * e
      }
      function A() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
        return t < 0 || t > 1 || e < 0 || e > 1
          ? null
          : p(t, n) && p(e, r)
          ? b
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * n) / t : 0 === n && e > 0 ? (i * r) / e : 0
              if (i >= 1)
                return e < 1
                  ? 1 + ((i - 1) * (r - 1)) / (e - 1)
                  : 1 === e && t < 1
                  ? 1 + ((i - 1) * (n - 1)) / (t - 1)
                  : 1
              for (var u, o = 0, a = 1; o < a; ) {
                var l = w(t, e, (u = (o + a) / 2))
                if (p(i, l)) break
                l < i ? (o = u) : (a = u)
              }
              return w(n, r, u)
            }
      }
      function _() {
        return 1
      }
      function x(t) {
        return 1 === t ? 1 : 0
      }
      function k() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        if (1 === t) {
          if (0 === n) return x
          if (1 === n) return _
        }
        var e = 1 / t
        return function (t) {
          return t >= 1 ? 1 : (t += n * e) - (t % e)
        }
      }
      var S = Math.sin,
        O = Math.cos,
        j = Math.acos,
        E = Math.asin,
        M = Math.tan,
        P = Math.atan2,
        I = Math.PI / 180,
        R = 180 / Math.PI,
        F = Math.sqrt,
        N = (function () {
          function t() {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0,
              a =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0
            r(this, t),
              (this.m = [n, e, i, u, o, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null)
          }
          return (
            u(
              t,
              [
                {
                  key: 'determinant',
                  get: function () {
                    var t = this.m
                    return t[0] * t[3] - t[1] * t[2]
                  }
                },
                {
                  key: 'isIdentity',
                  get: function () {
                    if (null === this.i) {
                      var t = this.m
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5]
                    }
                    return this.i
                  }
                },
                {
                  key: 'point',
                  value: function (t, n) {
                    var e = this.m
                    return {
                      x: e[0] * t + e[2] * n + e[4],
                      y: e[1] * t + e[3] * n + e[5]
                    }
                  }
                },
                {
                  key: 'translateSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                    if (!t && !n) return this
                    var e = this.m
                    return (
                      (e[4] += e[0] * t + e[2] * n),
                      (e[5] += e[1] * t + e[3] * n),
                      (this.w = this.s = this.i = null),
                      this
                    )
                  }
                },
                {
                  key: 'rotateSelf',
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
                    if ((t %= 360)) {
                      var n = S((t *= I)),
                        e = O(t),
                        r = this.m,
                        i = r[0],
                        u = r[1]
                      ;(r[0] = i * e + r[2] * n),
                        (r[1] = u * e + r[3] * n),
                        (r[2] = r[2] * e - i * n),
                        (r[3] = r[3] * e - u * n),
                        (this.w = this.s = this.i = null)
                    }
                    return this
                  }
                },
                {
                  key: 'scaleSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1
                    if (1 !== t || 1 !== n) {
                      var e = this.m
                      ;(e[0] *= t),
                        (e[1] *= t),
                        (e[2] *= n),
                        (e[3] *= n),
                        (this.w = this.s = this.i = null)
                    }
                    return this
                  }
                },
                {
                  key: 'skewSelf',
                  value: function (t, n) {
                    if (((n %= 360), (t %= 360) || n)) {
                      var e = this.m,
                        r = e[0],
                        i = e[1],
                        u = e[2],
                        o = e[3]
                      t && ((t = M(t * I)), (e[2] += r * t), (e[3] += i * t)),
                        n && ((n = M(n * I)), (e[0] += u * n), (e[1] += o * n)),
                        (this.w = this.s = this.i = null)
                    }
                    return this
                  }
                },
                {
                  key: 'resetSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      u =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      o = this.m
                    return (
                      (o[0] = t),
                      (o[1] = n),
                      (o[2] = e),
                      (o[3] = r),
                      (o[4] = i),
                      (o[5] = u),
                      (this.w = this.s = this.i = null),
                      this
                    )
                  }
                },
                {
                  key: 'recomposeSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      e =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      n && this.rotateSelf(n),
                      e &&
                        (e.x && this.skewSelf(e.x, 0),
                        e.y && this.skewSelf(0, e.y)),
                      !r ||
                        (1 === r.x && 1 === r.y) ||
                        this.scaleSelf(r.x, r.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    )
                  }
                },
                {
                  key: 'decompose',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      e = this.m,
                      r = e[0] * e[0] + e[1] * e[1],
                      i = [
                        [e[0], e[1]],
                        [e[2], e[3]]
                      ],
                      u = F(r)
                    if (0 === u)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0
                      }
                    ;(i[0][0] /= u), (i[0][1] /= u)
                    var o = e[0] * e[3] - e[1] * e[2] < 0
                    o && (u = -u)
                    var a = i[0][0] * i[1][0] + i[0][1] * i[1][1]
                    ;(i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a)
                    var l = F(i[1][0] * i[1][0] + i[1][1] * i[1][1])
                    if (0 === l)
                      return {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0
                      }
                    ;(i[1][0] /= l), (i[1][1] /= l), (a /= l)
                    var s = 0
                    return (
                      i[1][1] < 0
                        ? ((s = j(i[1][1]) * R), i[0][1] < 0 && (s = 360 - s))
                        : (s = E(i[0][1]) * R),
                      o && (s = -s),
                      (a = P(a, F(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * R),
                      o && (a = -a),
                      {
                        origin: { x: d(e[4]), y: d(e[5]) },
                        translate: { x: d(t), y: d(n) },
                        scale: { x: d(u), y: d(l) },
                        skew: { x: d(a), y: 0 },
                        rotate: d(s)
                      }
                    )
                  }
                },
                {
                  key: 'clone',
                  value: function () {
                    var t = this.m
                    return new this.constructor(
                      t[0],
                      t[1],
                      t[2],
                      t[3],
                      t[4],
                      t[5]
                    )
                  }
                },
                {
                  key: 'toString',
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ' '
                    if (null === this.s) {
                      var n = this.m.map(function (t) {
                        return d(t)
                      })
                      1 === n[0] && 0 === n[1] && 0 === n[2] && 1 === n[3]
                        ? (this.s = 'translate(' + n[4] + t + n[5] + ')')
                        : (this.s = 'matrix(' + n.join(t) + ')')
                    }
                    return this.s
                  }
                }
              ],
              [
                {
                  key: 'create',
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? f(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate
                          )
                      : new this()
                  }
                }
              ]
            ),
            t
          )
        })()
      function T(t, n, e) {
        return t >= 0.5 ? e : n
      }
      function B(t, n, e) {
        return 0 === t || n === e ? n : t * (e - n) + n
      }
      function q(t, n, e) {
        var r = B(t, n, e)
        return r <= 0 ? 0 : r
      }
      function D(t, n, e) {
        var r = B(t, n, e)
        return r <= 0 ? 0 : r >= 1 ? 1 : r
      }
      function L(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : { x: B(t, n.x, e.x), y: B(t, n.y, e.y) }
      }
      function C(t, n, e) {
        var r = (function (t, n, e) {
          return Math.round(B(t, n, e))
        })(t, n, e)
        return r <= 0 ? 0 : r >= 255 ? 255 : r
      }
      function V(t, n, e) {
        return 0 === t
          ? n
          : 1 === t
          ? e
          : {
              r: C(t, n.r, e.r),
              g: C(t, n.g, e.g),
              b: C(t, n.b, e.b),
              a: B(t, null == n.a ? 1 : n.a, null == e.a ? 1 : e.a)
            }
      }
      function G(t, n) {
        for (var e = [], r = 0; r < t; r++) e.push(n)
        return e
      }
      function z(t, n) {
        if (--n <= 0) return t
        var e = (t = Object.assign([], t)).length
        do {
          for (var r = 0; r < e; r++) t.push(t[r])
        } while (--n > 0)
        return t
      }
      var Y,
        $ = (function () {
          function t(n) {
            r(this, t), (this.list = n), (this.length = n.length)
          }
          return (
            u(t, [
              {
                key: 'setAttribute',
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].setAttribute(t, n)
                }
              },
              {
                key: 'removeAttribute',
                value: function (t) {
                  for (var n = this.list, e = 0; e < this.length; e++)
                    n[e].removeAttribute(t)
                }
              },
              {
                key: 'style',
                value: function (t, n) {
                  for (var e = this.list, r = 0; r < this.length; r++)
                    e[r].style[t] = n
                }
              }
            ]),
            t
          )
        })(),
        U = /-./g,
        Q = function (t, n) {
          return n.toUpperCase()
        }
      function H(t) {
        return 'function' == typeof t ? t : T
      }
      function J(t) {
        return t
          ? 'function' == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : b
                if (!Array.isArray(t)) return n
                switch (t.length) {
                  case 1:
                    return k(t[0]) || n
                  case 2:
                    return k(t[0], t[1]) || n
                  case 4:
                    return A(t[0], t[1], t[2], t[3]) || n
                }
                return n
              })(t, null)
            : (function (t, n) {
                var e =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : b
                switch (t) {
                  case 'linear':
                    return b
                  case 'steps':
                    return k(n.steps || 1, n.jump || 0) || e
                  case 'bezier':
                  case 'cubic-bezier':
                    return A(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e
                }
                return e
              })(t.type, t.value, null)
          : null
      }
      function Z(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = n.length - 1
        if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v
        if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v
        var u,
          o = n[0],
          a = null
        for (u = 1; u <= i; u++) {
          if (!(t > n[u].t)) {
            a = n[u]
            break
          }
          o = n[u]
        }
        return null == a
          ? r
            ? [i, 1, n[i].v]
            : n[i].v
          : o.t === a.t
          ? r
            ? [u, 1, a.v]
            : a.v
          : ((t = (t - o.t) / (a.t - o.t)),
            o.e && (t = o.e(t)),
            r ? [u, t, e(t, o.v, a.v)] : e(t, o.v, a.v))
      }
      function K(t, n) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
        return t && t.length
          ? 'function' != typeof n
            ? null
            : ('function' != typeof e && (e = null),
              function (r) {
                var i = Z(r, t, n)
                return null != i && e && (i = e(i)), i
              })
          : null
      }
      function W(t, n) {
        return t.t - n.t
      }
      function X(t, n, r, i, u) {
        var o,
          a = '@' === r[0],
          l = '#' === r[0],
          s = Y[r],
          f = T
        switch (
          (a
            ? ((o = r.substr(1)), (r = o.replace(U, Q)))
            : l && (r = r.substr(1)),
          e(s))
        ) {
          case 'function':
            if (((f = s(i, u, Z, J, r, a, n, t)), l)) return f
            break
          case 'string':
            f = K(i, H(s))
            break
          case 'object':
            if ((f = K(i, H(s.i), s.f)) && 'function' == typeof s.u)
              return s.u(n, f, r, a, t)
        }
        return f
          ? (function (t, n, e) {
              if (
                arguments.length > 3 &&
                void 0 !== arguments[3] &&
                arguments[3]
              )
                return t instanceof $
                  ? function (r) {
                      return t.style(n, e(r))
                    }
                  : function (r) {
                      return (t.style[n] = e(r))
                    }
              if (Array.isArray(n)) {
                var r = n.length
                return function (i) {
                  var u = e(i)
                  if (null == u)
                    for (var o = 0; o < r; o++) t[o].removeAttribute(n)
                  else for (var a = 0; a < r; a++) t[a].setAttribute(n, u)
                }
              }
              return function (r) {
                var i = e(r)
                null == i ? t.removeAttribute(n) : t.setAttribute(n, i)
              }
            })(n, r, f, a)
          : null
      }
      function tt(t, n, r, i) {
        if (!i || 'object' !== e(i)) return null
        var u = null,
          o = null
        return (
          Array.isArray(i)
            ? (o = (function (t) {
                if (!t || !t.length) return null
                for (var n = 0; n < t.length; n++)
                  t[n].e && (t[n].e = J(t[n].e))
                return t.sort(W)
              })(i))
            : ((o = i.keys), (u = i.data || null)),
          o ? X(t, n, r, o, u) : null
        )
      }
      function nt(t, n, e) {
        if (!e) return null
        var r = []
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = tt(t, n, i, e[i])
            u && r.push(u)
          }
        return r.length ? r : null
      }
      function et(t, n) {
        if (!n.settings.duration || n.settings.duration < 0) return null
        var e,
          r,
          i,
          u,
          o,
          a = (function (t, n) {
            if (!n) return null
            var e = []
            if (Array.isArray(n))
              for (var r = n.length, i = 0; i < r; i++) {
                var u = n[i]
                if (2 === u.length) {
                  var o = null
                  if ('string' == typeof u[0]) o = t.getElementById(u[0])
                  else if (Array.isArray(u[0])) {
                    o = []
                    for (var a = 0; a < u[0].length; a++)
                      if ('string' == typeof u[0][a]) {
                        var l = t.getElementById(u[0][a])
                        l && o.push(l)
                      }
                    o = o.length ? (1 === o.length ? o[0] : new $(o)) : null
                  }
                  if (o) {
                    var s = nt(t, o, u[1])
                    s && (e = e.concat(s))
                  }
                }
              }
            else
              for (var f in n)
                if (n.hasOwnProperty(f)) {
                  var c = t.getElementById(f)
                  if (c) {
                    var h = nt(t, c, n[f])
                    h && (e = e.concat(h))
                  }
                }
            return e.length ? e : null
          })(t, n.elements)
        return a
          ? ((e = a),
            (r = n.settings),
            (i = r.duration),
            (u = e.length),
            (o = null),
            function (t, n) {
              var a = r.iterations || 1 / 0,
                l = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0,
                s = t % i,
                f = 1 + (t - s) / i
              ;(n *= r.direction), r.alternate && f % 2 == 0 && (n = -n)
              var c = !1
              if (f > a)
                (s = l),
                  (c = !0),
                  -1 === r.fill && (s = r.direction > 0 ? 0 : i)
              else if ((n < 0 && (s = i - s), s === o)) return !1
              o = s
              for (var h = 0; h < u; h++) e[h](s)
              return c
            })
          : null
      }
      function rt(t, n) {
        if (((Y = n), !t || !t.root || !Array.isArray(t.animations)))
          return null
        var e = (function (t) {
          for (
            var n = document.getElementsByTagName('svg'), e = 0;
            e < n.length;
            e++
          )
            if (n[e].id === t.root && !n[e].svgatorAnimation)
              return (n[e].svgatorAnimation = !0), n[e]
          return null
        })(t)
        if (!e) return null
        var r = t.animations
          .map(function (t) {
            return et(e, t)
          })
          .filter(function (t) {
            return !!t
          })
        return r.length
          ? {
              svg: e,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0
            }
          : null
      }
      function it(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Number,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 'undefined' != typeof BigInt && BigInt,
          i = '0x' + (t.replace(/[^0-9a-fA-F]+/g, '') || 27)
        return n && r && e.isSafeInteger && !e.isSafeInteger(+i)
          ? (e(r(i)) % n) + n
          : +i
      }
      function ut(t, n, e) {
        return !t || !e || n > t.length
          ? t
          : t.substring(0, n) + ut(t.substring(n + 1), e, e)
      }
      function ot(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27
        return !t || t % n ? t % n : [0, 1].includes(n) ? n : ot(t / n, n)
      }
      function at(t, n, e) {
        if (t && t.length) {
          var r = it(e),
            i = ot(r) + 5,
            u = ut(t, ot(r, 5), i)
          return (
            (u = u.replace(/\x7c$/g, '==').replace(/\x2f$/g, '=')),
            (u = (function (t, n, e) {
              var r = +('0x' + t.substring(0, 4))
              t = t.substring(4)
              for (
                var i = (it(n, r) % r) + (e % 27), u = [], o = 0;
                o < t.length;
                o += 2
              )
                if ('|' !== t[o]) {
                  var a = +('0x' + t[o] + t[o + 1]) - i
                  u.push(a)
                } else {
                  var l = +('0x' + t.substring(o + 1, o + 1 + 4)) - i
                  ;(o += 3), u.push(l)
                }
              return String.fromCharCode.apply(String, u)
            })((u = (u = atob(u)).replace(/[\x41-\x5A]/g, '')), n, r)),
            (u = JSON.parse(u))
          )
        }
      }
      var lt = [
          { key: 'alternate', def: !1 },
          { key: 'fill', def: 1 },
          { key: 'iterations', def: 0 },
          { key: 'direction', def: 1 },
          { key: 'speed', def: 1 },
          { key: 'fps', def: 100 }
        ],
        st = (function () {
          function t(n, e) {
            var i = this,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null
            r(this, t),
              (this._id = 0),
              (this._running = !1),
              (this._rollingBack = !1),
              (this._animations = n),
              (this._settings = e),
              (!u || u < '2022-05-02') && delete this._settings.speed,
              lt.forEach(function (t) {
                i._settings[t.key] = i._settings[t.key] || t.def
              }),
              (this.duration = e.duration),
              (this.offset = e.offset || 0),
              (this.rollbackStartOffset = 0)
          }
          return (
            u(
              t,
              [
                {
                  key: 'alternate',
                  get: function () {
                    return this._settings.alternate
                  }
                },
                {
                  key: 'fill',
                  get: function () {
                    return this._settings.fill
                  }
                },
                {
                  key: 'iterations',
                  get: function () {
                    return this._settings.iterations
                  }
                },
                {
                  key: 'direction',
                  get: function () {
                    return this._settings.direction
                  }
                },
                {
                  key: 'speed',
                  get: function () {
                    return this._settings.speed
                  }
                },
                {
                  key: 'fps',
                  get: function () {
                    return this._settings.fps
                  }
                },
                {
                  key: 'maxFiniteDuration',
                  get: function () {
                    return this.iterations > 0
                      ? this.iterations * this.duration
                      : this.duration
                  }
                },
                {
                  key: '_apply',
                  value: function (t) {
                    for (
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        e = this._animations,
                        r = e.length,
                        i = 0,
                        u = 0;
                      u < r;
                      u++
                    )
                      n[u] ? i++ : ((n[u] = e[u](t, 1)), n[u] && i++)
                    return i
                  }
                },
                {
                  key: '_rollback',
                  value: function (t) {
                    var n = this,
                      e = 1 / 0,
                      r = null
                    ;(this.rollbackStartOffset = t),
                      (this._rollingBack = !0),
                      (this._running = !0)
                    this._id = window.requestAnimationFrame(function i(u) {
                      if (n._rollingBack) {
                        null == r && (r = u)
                        var o = Math.round(t - (u - r) * n.speed)
                        if (o > n.duration && e !== 1 / 0) {
                          var a = !!n.alternate && (o / n.duration) % 2 > 1,
                            l = o % n.duration
                          o = (l += a ? n.duration : 0) || n.duration
                        }
                        var s = (n.fps ? 1e3 / n.fps : 0) * n.speed,
                          f = Math.max(0, o)
                        f <= e - s && ((n.offset = f), (e = f), n._apply(f))
                        var c =
                          n.iterations > 0 &&
                          -1 === n.fill &&
                          o >= n.maxFiniteDuration
                        ;(o <= 0 || n.offset < o || c) && n.stop(),
                          (n._id = window.requestAnimationFrame(i))
                      }
                    })
                  }
                },
                {
                  key: '_start',
                  value: function () {
                    var t = this,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e = -1 / 0,
                      r = null,
                      i = {}
                    this._running = !0
                    var u = function u(o) {
                      null == r && (r = o)
                      var a = Math.round((o - r) * t.speed + n),
                        l = (t.fps ? 1e3 / t.fps : 0) * t.speed
                      if (
                        a >= e + l &&
                        !t._rollingBack &&
                        ((t.offset = a),
                        (e = a),
                        t._apply(a, i) === t._animations.length)
                      )
                        return void t.pause(!0)
                      t._id = window.requestAnimationFrame(u)
                    }
                    this._id = window.requestAnimationFrame(u)
                  }
                },
                {
                  key: '_pause',
                  value: function () {
                    this._id && window.cancelAnimationFrame(this._id),
                      (this._running = !1)
                  }
                },
                {
                  key: 'play',
                  value: function () {
                    if (!this._running)
                      return this._rollingBack
                        ? this._rollback(this.offset)
                        : this._start(this.offset)
                  }
                },
                {
                  key: 'stop',
                  value: function () {
                    this._pause(),
                      (this.offset = 0),
                      (this.rollbackStartOffset = 0),
                      (this._rollingBack = !1),
                      this._apply(0)
                  }
                },
                {
                  key: 'reachedToEnd',
                  value: function () {
                    return (
                      this.iterations > 0 &&
                      this.offset >= this.iterations * this.duration
                    )
                  }
                },
                {
                  key: 'restart',
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0]
                    this.stop(t), this.play(t)
                  }
                },
                {
                  key: 'pause',
                  value: function () {
                    this._pause()
                  }
                },
                {
                  key: 'reverse',
                  value: function () {
                    this.direction = -this.direction
                  }
                }
              ],
              [
                {
                  key: 'build',
                  value: function (t, n) {
                    delete t.animationSettings,
                      (t.options = at(t.options, t.root, '5c7f360c')),
                      t.animations.map(function (n) {
                        ;(n.settings = at(n.s, t.root, '5c7f360c')),
                          delete n.s,
                          t.animationSettings ||
                            (t.animationSettings = n.settings)
                      })
                    var e = t.version
                    if (!(t = rt(t, n))) return null
                    var r = t.options || {},
                      i = new this(t.animations, t.animationSettings, e)
                    return { el: t.svg, options: r, player: i }
                  }
                },
                {
                  key: 'push',
                  value: function (t) {
                    return this.build(t)
                  }
                },
                {
                  key: 'init',
                  value: function () {
                    var t = this,
                      n =
                        window.__SVGATOR_PLAYER__ &&
                        window.__SVGATOR_PLAYER__['5c7f360c']
                    Array.isArray(n) &&
                      n.splice(0).forEach(function (n) {
                        return t.build(n)
                      })
                  }
                }
              ]
            ),
            t
          )
        })()
      function ft(t) {
        return d(t) + ''
      }
      function ct(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' '
        return t && t.length ? t.map(ft).join(n) : ''
      }
      function ht(t) {
        if (!t) return 'transparent'
        if (null == t.a || t.a >= 1) {
          var n = function (t) {
              return 1 === (t = parseInt(t).toString(16)).length ? '0' + t : t
            },
            e = function (t) {
              return t.charAt(0) === t.charAt(1)
            },
            r = n(t.r),
            i = n(t.g),
            u = n(t.b)
          return (
            e(r) &&
              e(i) &&
              e(u) &&
              ((r = r.charAt(0)), (i = i.charAt(0)), (u = u.charAt(0))),
            '#' + r + i + u
          )
        }
        return 'rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')'
      }
      function vt(t) {
        return t ? 'url(#' + t + ')' : 'none'
      }
      !(function () {
        for (
          var t = 0, n = ['ms', 'moz', 'webkit', 'o'], e = 0;
          e < n.length && !window.requestAnimationFrame;
          ++e
        )
          (window.requestAnimationFrame =
            window[n[e] + 'RequestAnimationFrame']),
            (window.cancelAnimationFrame =
              window[n[e] + 'CancelAnimationFrame'] ||
              window[n[e] + 'CancelRequestAnimationFrame'])
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (n) {
            var e = Date.now(),
              r = Math.max(0, 16 - (e - t)),
              i = window.setTimeout(function () {
                n(e + r)
              }, r)
            return (t = e + r), i
          }),
          (window.cancelAnimationFrame = window.clearTimeout))
      })()
      var yt = {
          f: null,
          i: function (t, n, e) {
            return 0 === t
              ? n
              : 1 === t
              ? e
              : { x: q(t, n.x, e.x), y: q(t, n.y, e.y) }
          },
          u: function (t, n) {
            return function (e) {
              var r = n(e)
              t.setAttribute('rx', ft(r.x)), t.setAttribute('ry', ft(r.y))
            }
          }
        },
        gt = {
          f: null,
          i: function (t, n, e) {
            return 0 === t
              ? n
              : 1 === t
              ? e
              : {
                  width: q(t, n.width, e.width),
                  height: q(t, n.height, e.height)
                }
          },
          u: function (t, n) {
            return function (e) {
              var r = n(e)
              t.setAttribute('width', ft(r.width)),
                t.setAttribute('height', ft(r.height))
            }
          }
        }
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7
      })
      var dt = {},
        pt = null
      function mt(t) {
        var n = (function () {
          if (pt) return pt
          if (
            'object' !==
              ('undefined' == typeof document ? 'undefined' : e(document)) ||
            !document.createElementNS
          )
            return {}
          var t = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          return t && t.style
            ? ((t.style.position = 'absolute'),
              (t.style.opacity = '0.01'),
              (t.style.zIndex = '-9999'),
              (t.style.left = '-9999px'),
              (t.style.width = '1px'),
              (t.style.height = '1px'),
              (pt = { svg: t }))
            : {}
        })().svg
        if (!n)
          return function (t) {
            return null
          }
        var r = document.createElementNS(n.namespaceURI, 'path')
        r.setAttributeNS(null, 'd', t),
          r.setAttributeNS(null, 'fill', 'none'),
          r.setAttributeNS(null, 'stroke', 'none'),
          n.appendChild(r)
        var i = r.getTotalLength()
        return function (t) {
          var n = r.getPointAtLength(i * t)
          return { x: n.x, y: n.y }
        }
      }
      function bt(t) {
        return dt[t] ? dt[t] : (dt[t] = mt(t))
      }
      function wt(t, n, e, r) {
        if (!t || !r) return !1
        var i = ['M', t.x, t.y]
        if (
          (n &&
            e &&
            (i.push('C'), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)),
          n ? !e : e)
        ) {
          var u = n || e
          i.push('Q'), i.push(u.x), i.push(u.y)
        }
        return n || e || i.push('L'), i.push(r.x), i.push(r.y), i.join(' ')
      }
      function At(t, n, e, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          u = wt(t, n, e, r),
          o = bt(u)
        try {
          return o(i)
        } catch (t) {
          return null
        }
      }
      function _t(t, n, e) {
        return t + (n - t) * e
      }
      function xt(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: _t(t.x, n.x, e), y: _t(t.y, n.y, e) }
        return r && (i.a = kt(t, n)), i
      }
      function kt(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x)
      }
      function St(t, n, e, r) {
        var i = 1 - r
        return i * i * t + 2 * i * r * n + r * r * e
      }
      function Ot(t, n, e, r) {
        return 2 * (1 - r) * (n - t) + 2 * r * (e - n)
      }
      function jt(t, n, e, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          u = At(t, n, null, e, r)
        return (
          u || (u = { x: St(t.x, n.x, e.x, r), y: St(t.y, n.y, e.y, r) }),
          i && (u.a = Et(t, n, e, r)),
          u
        )
      }
      function Et(t, n, e, r) {
        return Math.atan2(Ot(t.y, n.y, e.y, r), Ot(t.x, n.x, e.x, r))
      }
      function Mt(t, n, e, r, i) {
        var u = i * i
        return (
          i * u * (r - t + 3 * (n - e)) +
          3 * u * (t + e - 2 * n) +
          3 * i * (n - t) +
          t
        )
      }
      function Pt(t, n, e, r, i) {
        var u = 1 - i
        return 3 * (u * u * (n - t) + 2 * u * i * (e - n) + i * i * (r - e))
      }
      function It(t, n, e, r, i) {
        var u = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          o = At(t, n, e, r, i)
        return (
          o ||
            (o = {
              x: Mt(t.x, n.x, e.x, r.x, i),
              y: Mt(t.y, n.y, e.y, r.y, i)
            }),
          u && (o.a = Rt(t, n, e, r, i)),
          o
        )
      }
      function Rt(t, n, e, r, i) {
        return Math.atan2(Pt(t.y, n.y, e.y, r.y, i), Pt(t.x, n.x, e.x, r.x, i))
      }
      function Ft(t, n, e) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        if (Tt(n)) {
          if (Bt(e)) return jt(n, e.start, e, t, r)
        } else if (Tt(e)) {
          if (qt(n)) return jt(n, n.end, e, t, r)
        } else {
          if (qt(n))
            return Bt(e)
              ? It(n, n.end, e.start, e, t, r)
              : jt(n, n.end, e, t, r)
          if (Bt(e)) return jt(n, e.start, e, t, r)
        }
        return xt(n, e, t, r)
      }
      function Nt(t, n, e) {
        var r = Ft(t, n, e, !0)
        return (
          (r.a =
            (function (t) {
              return arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
                ? t + Math.PI
                : t
            })(r.a) / m),
          r
        )
      }
      function Tt(t) {
        return !t.type || 'corner' === t.type
      }
      function Bt(t) {
        return null != t.start && !Tt(t)
      }
      function qt(t) {
        return null != t.end && !Tt(t)
      }
      var Dt = new N()
      var Lt = { f: ft, i: B },
        Ct = { f: ft, i: D }
      function Vt(t, n, e) {
        return t.map(function (t) {
          return (function (t, n, e) {
            var r = t.v
            if (!r || 'g' !== r.t || r.s || !r.v || !r.r) return t
            var i = e.getElementById(r.r),
              u = (i && i.querySelectorAll('stop')) || []
            return (
              (r.s = r.v.map(function (t, n) {
                var e = u[n] && u[n].getAttribute('offset')
                return { c: t, o: (e = d(parseInt(e) / 100)) }
              })),
              delete r.v,
              t
            )
          })(t, 0, e)
        })
      }
      var Gt = {
        gt: 'gradientTransform',
        c: { x: 'cx', y: 'cy' },
        rd: 'r',
        f: { x: 'x1', y: 'y1' },
        to: { x: 'x2', y: 'y2' }
      }
      function zt(t, n, r, i, u, o, a, l) {
        return (
          Vt(t, 0, l),
          (n = (function (t, n, e) {
            for (var r, i, u, o = t.length - 1, a = {}, l = 0; l <= o; l++)
              (r = t[l]).e && (r.e = n(r.e)),
                r.v &&
                  'g' === (i = r.v).t &&
                  i.r &&
                  (u = e.getElementById(i.r)) &&
                  (a[i.r] = { e: u, s: u.querySelectorAll('stop') })
            return a
          })(t, i, l)),
          function (i) {
            var u = r(i, t, Yt)
            if (!u) return 'none'
            if ('c' === u.t) return ht(u.v)
            if ('g' === u.t) {
              if (!n[u.r]) return vt(u.r)
              var o = n[u.r]
              return (
                (function (t, n) {
                  for (var e = t.s, r = e.length; r < n.length; r++) {
                    var i = e[e.length - 1].cloneNode()
                    ;(i.id = Qt(i.id)),
                      t.e.appendChild(i),
                      (e = t.s = t.e.querySelectorAll('stop'))
                  }
                  for (var u = 0, o = e.length, a = n.length - 1; u < o; u++)
                    e[u].setAttribute('stop-color', ht(n[Math.min(u, a)].c)),
                      e[u].setAttribute('offset', n[Math.min(u, a)].o)
                })(o, u.s),
                Object.keys(Gt).forEach(function (t) {
                  if (void 0 !== u[t])
                    if ('object' !== e(Gt[t])) {
                      var n,
                        r =
                          'gt' === t
                            ? ((n = u[t]),
                              Array.isArray(n)
                                ? 'matrix(' + n.join(' ') + ')'
                                : '')
                            : u[t],
                        i = Gt[t]
                      o.e.setAttribute(i, r)
                    } else
                      Object.keys(Gt[t]).forEach(function (n) {
                        if (void 0 !== u[t][n]) {
                          var e = u[t][n],
                            r = Gt[t][n]
                          o.e.setAttribute(r, e)
                        }
                      })
                }),
                vt(u.r)
              )
            }
            return 'none'
          }
        )
      }
      function Yt(t, e, r) {
        if (0 === t) return e
        if (1 === t) return r
        if (e && r) {
          var i = e.t
          if (i === r.t)
            switch (e.t) {
              case 'c':
                return { t: i, v: V(t, e.v, r.v) }
              case 'g':
                if (e.r === r.r) {
                  var u = { t: i, s: $t(t, e.s, r.s), r: e.r }
                  return (
                    e.gt &&
                      r.gt &&
                      (u.gt = (function (t, n, e) {
                        var r = n.length
                        if (r !== e.length) return T(t, n, e)
                        for (var i = new Array(r), u = 0; u < r; u++)
                          i[u] = B(t, n[u], e[u])
                        return i
                      })(t, e.gt, r.gt)),
                    e.c
                      ? ((u.c = L(t, e.c, r.c)), (u.rd = q(t, e.rd, r.rd)))
                      : e.f &&
                        ((u.f = L(t, e.f, r.f)), (u.to = L(t, e.to, r.to))),
                    u
                  )
                }
            }
          if (('c' === e.t && 'g' === r.t) || ('c' === r.t && 'g' === e.t)) {
            var o = 'c' === e.t ? e : r,
              a = 'g' === e.t ? n({}, e) : n({}, r),
              l = a.s.map(function (t) {
                return { c: o.v, o: t.o }
              })
            return (a.s = 'c' === e.t ? $t(t, l, a.s) : $t(t, a.s, l)), a
          }
        }
        return T(t, e, r)
      }
      function $t(t, n, e) {
        if (n.length === e.length)
          return n.map(function (n, r) {
            return Ut(t, n, e[r])
          })
        for (var r = Math.max(n.length, e.length), i = [], u = 0; u < r; u++) {
          var o = Ut(
            t,
            n[Math.min(u, n.length - 1)],
            e[Math.min(u, e.length - 1)]
          )
          i.push(o)
        }
        return i
      }
      function Ut(t, n, e) {
        return { o: D(t, n.o, e.o || 0), c: V(t, n.c, e.c || {}) }
      }
      function Qt(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, n) {
          return '-fill-' + (+n + 1)
        })
      }
      var Ht = {
          fill: zt,
          'fill-opacity': Ct,
          stroke: zt,
          'stroke-opacity': Ct,
          'stroke-width': Lt,
          'stroke-dashoffset': { f: ft, i: B },
          'stroke-dasharray': {
            f: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ' '
              return (
                t &&
                  t.length > 0 &&
                  (t = t.map(function (t) {
                    return d(t, 4)
                  })),
                ct(t, n)
              )
            },
            i: function (t, n, e) {
              var r,
                i,
                u,
                o = n.length,
                a = e.length
              if (o !== a)
                if (0 === o) n = G((o = a), 0)
                else if (0 === a) (a = o), (e = G(o, 0))
                else {
                  var l =
                    (u =
                      ((r = o) * (i = a)) /
                      (function (t, n) {
                        for (var e; n; ) (e = n), (n = t % n), (t = e)
                        return t || 1
                      })(r, i)) < 0
                      ? -u
                      : u
                  ;(n = z(n, Math.floor(l / o))),
                    (e = z(e, Math.floor(l / a))),
                    (o = a = l)
                }
              for (var s = [], f = 0; f < o; f++) s.push(d(q(t, n[f], e[f])))
              return s
            }
          },
          opacity: Ct,
          transform: function (t, n, r, i) {
            if (
              !(t = (function (t, n) {
                if (!t || 'object' !== e(t)) return null
                var r = !1
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = n(t.e))
                        }),
                        (r = !0))
                      : delete t[i])
                return r ? t : null
              })(t, i))
            )
              return null
            var u = function (e, i, u) {
              var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return t[e] ? r(i, t[e], u) : n && n[e] ? n[e] : o
            }
            return n && n.a && t.o
              ? function (n) {
                  var e = r(n, t.o, Nt)
                  return Dt.recomposeSelf(
                    e,
                    u('r', n, B, 0) + e.a,
                    u('k', n, L),
                    u('s', n, L),
                    u('t', n, L)
                  ).toString()
                }
              : function (t) {
                  return Dt.recomposeSelf(
                    u('o', t, Ft, null),
                    u('r', t, B, 0),
                    u('k', t, L),
                    u('s', t, L),
                    u('t', t, L)
                  ).toString()
                }
          },
          r: Lt,
          '#size': gt,
          '#radius': yt,
          _: function (t, n) {
            if (Array.isArray(t))
              for (var e = 0; e < t.length; e++) this[t[e]] = n
            else this[t] = n
          }
        },
        Jt = (function (t) {
          !(function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              n && l(t, n)
          })(o, t)
          var n,
            e,
            i =
              ((n = o),
              (e = s()),
              function () {
                var t,
                  r = a(n)
                if (e) {
                  var i = a(this).constructor
                  t = Reflect.construct(r, arguments, i)
                } else t = r.apply(this, arguments)
                return c(this, t)
              })
          function o() {
            return r(this, o), i.apply(this, arguments)
          }
          return (
            u(o, null, [
              {
                key: 'build',
                value: function (t) {
                  var n = h(a(o), 'build', this).call(this, t, Ht)
                  if (!n) return null
                  n.el,
                    n.options,
                    (function (t, n, e) {
                      t.play()
                    })(n.player)
                }
              }
            ]),
            o
          )
        })(st)
      return Jt.init(), Jt
    })
    ;(function (s, i, o, w, d, a, b) {
      w[o] = w[o] || {}
      w[o][s] = w[o][s] || []
      w[o][s].push(i)
    })(
      '5c7f360c',
      {
        root: 'eMbCpRVqorZ1',
        version: '2022-05-04',
        animations: [
          {
            elements: {
              eMbCpRVqorZ9: {
                opacity: [
                  { t: 0, v: 0 },
                  { t: 1200, v: 0.5 },
                  { t: 4400, v: 1 },
                  { t: 6400, v: 0.75 },
                  { t: 8000, v: 0 }
                ]
              },
              eMbCpRVqorZ10: {
                opacity: [
                  { t: 0, v: 1 },
                  { t: 1800, v: 0 },
                  { t: 4800, v: 1 },
                  { t: 6000, v: 0.75 },
                  { t: 8000, v: 1 }
                ]
              },
              eMbCpRVqorZ11: {
                opacity: [
                  { t: 0, v: 1 },
                  { t: 2300, v: 0 },
                  { t: 3700, v: 1 },
                  { t: 5600, v: 0.75 },
                  { t: 8000, v: 1 }
                ]
              },
              eMbCpRVqorZ12: {
                opacity: [
                  { t: 0, v: 1 },
                  { t: 1500, v: 0 },
                  { t: 3400, v: 1 },
                  { t: 6000, v: 0.75 },
                  { t: 8000, v: 1 }
                ]
              },
              eMbCpRVqorZ13: {
                opacity: [
                  { t: 0, v: 1 },
                  { t: 2000, v: 0.5 },
                  { t: 4000, v: 0.75 },
                  { t: 5000, v: 0 },
                  { t: 8000, v: 1 }
                ]
              },
              eMbCpRVqorZ14: {
                opacity: [
                  { t: 0, v: 0 },
                  { t: 1000, v: 1 },
                  { t: 2000, v: 0.5 },
                  { t: 3400, v: 1 },
                  { t: 5000, v: 1 },
                  { t: 6000, v: 0.5 },
                  { t: 7000, v: 0.75 },
                  { t: 8000, v: 0 }
                ]
              },
              eMbCpRVqorZ41: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.33598 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ42: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335997 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ43: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 309.2805, type: 'corner' },
                    t: { x: -387.787, y: -309.280475 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ44: {
                transform: {
                  data: {
                    o: { x: 384.313446, y: 306.077499, type: 'corner' },
                    t: { x: -384.313446, y: -306.077499 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ45: {
                transform: {
                  data: {
                    o: { x: 384.313446, y: 306.077499, type: 'corner' },
                    t: { x: -384.313446, y: -306.077499 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ46: {
                transform: {
                  data: {
                    o: { x: 385, y: 306.077413, type: 'corner' },
                    t: { x: -384.999998, y: -306.077413 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ47: {
                transform: {
                  data: {
                    o: { x: 388.81, y: 308.336, type: 'corner' },
                    t: { x: -388.809997, y: -308.33599 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ48: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335996 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ49: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335993 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ50: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335997 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ51: {
                transform: {
                  data: {
                    o: { x: 388.81, y: 308.336003, type: 'corner' },
                    t: { x: -388.81, y: -308.336003 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ52: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335971 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ53: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 309.2805, type: 'corner' },
                    t: { x: -387.786996, y: -309.280496 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ54: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336003, type: 'corner' },
                    t: { x: -387.787, y: -308.336003 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ55: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335995 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ56: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335993 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ57: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335994 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ58: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336, type: 'corner' },
                    t: { x: -387.787, y: -308.335995 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ59: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 309.2805, type: 'corner' },
                    t: { x: -387.787, y: -309.280496 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ60: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 309.2805, type: 'corner' },
                    t: { x: -387.787, y: -309.280494 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ61: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 308.336003, type: 'corner' },
                    t: { x: -387.787, y: -308.336002 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ62: {
                transform: {
                  data: {
                    o: { x: 387.787, y: 309.2805, type: 'corner' },
                    t: { x: -387.787, y: -309.280496 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ63: {
                transform: {
                  data: {
                    o: { x: 388.81, y: 308.336, type: 'corner' },
                    t: { x: -388.81, y: -308.335994 }
                  },
                  keys: {
                    r: [
                      { t: 0, v: 0 },
                      { t: 2000, v: -2.5 },
                      { t: 6000, v: 2.5 },
                      { t: 8000, v: 0 }
                    ]
                  }
                }
              },
              eMbCpRVqorZ64: {
                transform: {
                  data: { t: { x: -144.988, y: -244.423708 } },
                  keys: {
                    o: [
                      {
                        t: 0,
                        v: { x: 142.765266, y: 248.902496, type: 'corner' }
                      },
                      {
                        t: 2000,
                        v: { x: 145.765266, y: 238.750583, type: 'corner' }
                      },
                      {
                        t: 6000,
                        v: { x: 136.425266, y: 255.677066, type: 'corner' }
                      },
                      {
                        t: 8000,
                        v: {
                          x: 142.765266,
                          y: 248.902496,
                          type: 'corner',
                          start: { x: 142.765266, y: 248.902496 },
                          end: { x: 142.765266, y: 248.902496 }
                        }
                      }
                    ]
                  }
                }
              }
            },
            s: 'MQDA1ZGUwUDg3YzlkYWAQ3YzZkOWNlZDRkMzgA3OWY5ZDk1OTU5NTkxKODdjOWNlZDdjYWM4ZODljZWQ0ZDM4NzlmRDQk2OTE4N2NlZDljYWQM3VGM2ZDljZWQ0ZDNkDODg3OWY5NTkxODdjYRmNlZDFKQWQxODc5ZjXk2OTE4N2M2ZDFkOWNEhZDdkM2M2ZDljYTg3AOWZjYmM2ZDFkOGNhQSTkxODdkOGQ1S2NhY2CFQYzk4NzlmUTk2OTEO4N2NiZDVkODg3SjlmVOTZUOTU5NWUy'
          }
        ],
        options: 'MWDAxMDg4MmY4MDgxNmYU3ZjgxMmY0NzJmNzkC3YzZlNzEyZjhh'
      },
      '__SVGATOR_PLAYER__',
      window,
      document
    )
  }, [])

  // @ts-ignore
  return (
    <svg
      id="eMbCpRVqorZ1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g clipRule="evenodd">
        <path
          id="hero-image-screen"
          d="M45.6813,23.8001h413.4177c11.061,0,20.028,10.2129,20.028,22.8111v292.9268c0,8.566-6.097,15.511-13.619,15.511h-426.3217c-7.5218,0-13.6194-6.945-13.6194-15.511v-292.9594c.0076-6.0612,2.1328-11.8697,5.9067-16.1434c3.7738-4.2737,8.8859-6.661,14.2077-6.6351Z"
          clipRule="evenodd"
          fill="white"
          fillOpacity="0.75"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M479.099,63.0352v-16.2937c0-12.5981-8.967-22.811-20.029-22.811h-413.3887c-11.0615,0-20.0285,10.2129-20.0285,22.811v16.2937h453.4462Z"
          clipRule="evenodd"
          fill="#075e54"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M58.242,45.7965c.0116-3.8677-2.0267-7.3613-5.1619-8.8475-3.1353-1.4862-6.748-.6714-9.1493,2.0635s-3.1168,6.8496-1.8118,10.4204s4.3723,5.8923,7.7683,5.8791c4.6077-.0179,8.339-4.2677,8.3547-9.5155Z"
          clipRule="evenodd"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M84.1075,45.7965c.0111-3.8795-2.0399-7.3809-5.1893-8.859-3.1493-1.4782-6.7708-.639-9.1628,2.123-2.3919,2.7621-3.0786,6.898-1.7375,10.4641s4.4435,5.8536,7.8492,5.7874c4.563-.0887,8.2254-4.3179,8.2404-9.5155Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M93.2348,45.7965c0-5.2552,3.7405-9.5154,8.3552-9.5154c4.614,0,8.354,4.2602,8.354,9.5154s-3.74,9.5155-8.354,9.5155c-4.6147,0-8.3552-4.2602-8.3552-9.5155Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <g clipRule="evenodd">
        <path
          id="eMbCpRVqorZ9"
          d="M380.311585,107.084l2.125973,4.006306L386.313,113.27891l-3.875442,2.185772-2.125973,3.989318-2.123143-3.989318L374.313,113.27891l3.875442-2.188604l2.123143-4.006306Z"
          opacity="0"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ10"
          d="M393.998596,142.072l1.413428,2.665473l2.579976,1.45612-2.579976,1.454237-1.413428,2.65417-1.415312-2.65417-2.591284-1.454237l2.591284-1.45612l1.415312-2.665473Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ11"
          d="M174.819348,284.904l1.413094,2.665473l2.592558,1.45612-2.592558,1.442934-1.413094,2.665473-1.414979-2.665473-2.579369-1.442934l2.579369-1.45612l1.414979-2.665473Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ12"
          d="M358.955285,115.781l2.831309,5.326704l5.174406,2.913195-5.174406,2.903397-2.831309,5.326704-2.819879-5.326704-5.174406-2.903397l5.174406-2.913195l2.819879-5.326704Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ13"
          d="M53.0934,122.979l2.11956,3.984919l3.88044,2.1814-3.88044,2.188762L53.0934,135.319l-2.11956-3.984919-3.88044-2.188762l3.88044-2.1814L53.0934,122.979Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ14"
          d="M199.62773,110.046l2.827382,5.32849L207.622,118.286l-5.166888,2.91151-2.827382,5.32849-2.827381-5.32849L191.622,118.286l5.178349-2.91151l2.827381-5.32849Z"
          opacity="0"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <g transform="translate(-.82914 0.262613)" clipRule="evenodd">
        <path
          d="M382.796,461.335L280.481,441.4c-12.294-2.391-20.311-14.235-17.905-26.454l50.237-254.922c1.157-5.875,4.618-11.052,9.619-14.389c5.002-3.336,11.134-4.559,17.043-3.397l102.303,19.956c12.294,2.39,20.311,14.234,17.905,26.453L409.458,443.51c-1.148,5.883-4.605,11.069-9.608,14.413-5.003,3.345-11.139,4.572-17.054,3.412Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M439.906,171.11l-19.842-3.859c-2.724-.462-5.313,1.346-5.797,4.049l-.705,3.577c-.225,1.304-.964,2.465-2.052,3.227-1.088.763-2.437,1.063-3.748.837l-38.668-7.52c-2.71-.59-4.425-3.252-3.83-5.944l.708-3.599c.586-2.691-1.125-5.347-3.83-5.944l-6.99-1.359-17.357-3.376c-4.137-.814-8.431.04-11.933,2.376-3.502,2.335-5.926,5.96-6.736,10.074L270.082,412.47c-1.684,8.554,3.928,16.844,12.534,18.518l102.11,19.918c8.606,1.674,16.948-3.903,18.632-12.457L452.403,189.62c1.681-8.539-3.909-16.819-12.497-18.51Z"
          clipRule="evenodd"
          fill="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M437.418,191.614c-.013.067-2.61-.362-5.79-.957-3.181-.596-5.766-1.121-5.753-1.188.013-.066,2.604.353,5.792.95s5.764,1.129,5.751,1.195Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M436.864,194.546c-.013.067-2.603-.36-5.792-.95-3.189-.589-5.766-1.121-5.751-1.195.014-.073,2.61.362,5.799.952s5.757,1.127,5.744,1.193Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M436.317,197.48c-.013.066-2.611-.355-5.799-.952s-5.758-1.119-5.751-1.195c.007-.075,2.61.362,5.799.952s5.764,1.129,5.751,1.195Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M342.749,390.667c-.367-.014-.732-.059-1.091-.136l-2.935-.509c-2.471-.442-5.889-1.084-9.658-1.817-3.77-.733-7.183-1.397-9.635-1.935l-2.912-.628c-.362-.064-.717-.158-1.062-.283.367.01.733.055,1.091.136l2.936.502c2.464.479,5.888,1.091,9.657,1.824c3.77.733,7.176,1.396,9.637,1.928l2.91.635c.363.059.718.153,1.062.283Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M376.193,427.446c-.022.111-15.747-2.863-35.122-6.631s-35.068-6.904-35.047-7.014c.022-.111,15.747,2.863,35.122,6.631c19.375,3.767,35.067,6.911,35.047,7.014Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M378.603,423.853c-.022.11-15.747-2.864-35.122-6.631-19.375-3.768-35.068-6.904-35.046-7.015.021-.111,15.747,2.863,35.122,6.631s35.066,6.911,35.046,7.015Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M382.894,393.409c-.021.11-15.747-2.864-35.122-6.631-19.375-3.768-35.068-6.904-35.046-7.015.022-.11,15.747,2.863,35.122,6.631s35.067,6.911,35.046,7.015Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M388.81,356.84c-.022.111-15.747-2.863-35.122-6.631s-35.068-6.904-35.047-7.015c.022-.11,15.747,2.864,35.122,6.631c19.375,3.768,35.067,6.912,35.047,7.015Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M359.931,394.406c-.022.111-10.835-1.908-24.155-4.498s-24.108-4.772-24.086-4.883s10.835,1.908,24.162,4.5c13.327,2.591,24.105,4.749,24.079,4.881Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M372.869,322.166c-.021.111-10.834-1.908-24.154-4.498-13.32-2.591-24.108-4.773-24.086-4.883.021-.111,10.834,1.908,24.162,4.499c13.327,2.592,24.105,4.749,24.078,4.882Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M390.281,240.256c-.022.11-10.835-1.908-24.154-4.498-13.32-2.591-24.109-4.773-24.087-4.884.022-.11,10.835,1.908,24.162,4.5s24.105,4.749,24.079,4.882Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M381.47,206.361c-.121-.003-.242-.027-.356-.069l-1.009-.158-3.723-.655c-3.124-.608-7.431-1.392-12.224-2.324-4.794-.932-9.091-1.768-12.205-2.427l-3.697-.788-1.002-.233c-.119-.002-.237-.025-.348-.068.119-.006.239.005.356.031l1.009.197l3.722.662c3.131.571,7.432,1.384,12.225,2.316c4.794.932,9.091,1.768,12.203,2.435l3.699.78l1.001.195c.121.02.238.056.349.106Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M328.835,191.386c.963-4.887,5.729-8.074,10.647-7.118c4.918.957,8.125,5.694,7.162,10.582-.962,4.887-5.729,8.074-10.647,7.118-4.917-.957-8.124-5.694-7.162-10.582Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M322.566,223.226c.963-4.888,5.73-8.075,10.647-7.118c4.918.956,8.125,5.694,7.163,10.581-.963,4.888-5.729,8.075-10.647,7.118-4.918-.956-8.125-5.694-7.163-10.581Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M304.861,311.131c.962-4.888,5.729-8.074,10.647-7.118s8.124,5.694,7.162,10.581c-.962,4.888-5.729,8.075-10.647,7.118-4.918-.956-8.125-5.693-7.162-10.581Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M298.489,343.494c.962-4.888,5.729-8.075,10.647-7.118c4.918.956,8.124,5.693,7.162,10.581s-5.729,8.074-10.647,7.118-8.124-5.694-7.162-10.581Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M292.098,375.951c.963-4.888,5.73-8.075,10.647-7.118c4.918.956,8.125,5.694,7.163,10.581-.963,4.888-5.729,8.075-10.647,7.118-4.918-.956-8.125-5.694-7.163-10.581Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M286.551,406.15c.962-4.887,5.729-8.074,10.647-7.118c4.918.957,8.124,5.694,7.162,10.582-.962,4.887-5.729,8.074-10.647,7.118-4.918-.957-8.124-5.694-7.162-10.582Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M316.424,254.421c.963-4.887,5.73-8.074,10.647-7.118c4.918.957,8.125,5.694,7.163,10.582-.963,4.887-5.729,8.074-10.647,7.118-4.918-.957-8.125-5.694-7.163-10.582Z"
          clipRule="evenodd"
          fill="#ebebeb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M425.354,336.668c-.021.111-22.493-4.167-50.187-9.553-27.693-5.385-50.138-9.842-50.116-9.953.022-.11,22.492,4.175,50.193,9.562s50.131,9.841,50.11,9.944Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M417.474,370.167c-.02.103-22.492-4.175-50.185-9.56-27.694-5.386-50.138-9.842-50.118-9.946.021-.103,22.492,4.175,50.193,9.562s50.131,9.841,50.11,9.944Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M396.389,236.206c-.02.104-12.259-2.185-27.33-5.115-15.071-2.931-27.283-5.398-27.263-5.501.021-.103,12.26,2.185,27.338,5.117c15.079,2.932,27.275,5.396,27.255,5.499Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M402.435,205.5c-.021.103-12.26-2.185-27.331-5.116s-27.282-5.397-27.262-5.5c.02-.104,12.259,2.185,27.338,5.117c15.078,2.932,27.275,5.396,27.255,5.499Z"
          clipRule="evenodd"
          fill="#455a64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ41"
          d="M350.055,383.948l4.354-8.258c.834-1.813,1.884-3.936,3.204-6.337c1.195-2.156,3.556-4.209,5.621-5.614c3.211-2.186,4.491-1.953,6.569-3.041.184-.072.4-.191.572-.242.376-.117.723-.31,1.021-.567c1.879-1.365.897-4.243-2.306-4.606-2.404-.276-6.409-.358-13.972,4.871-.102.087-.2.153-.293.234-4.143,3.628-4.846-9.158-4.517-13.803.059-1.467-.557-2.881-1.673-3.843s-2.611-1.367-4.064-1.102l-16.734,4.143c-1.379-.706-2.948-.957-4.481-.718-2.376.343-4.1,2.424-3.982,4.807l1.375,25.85-30.154,56.848l39.366,7.655l20.094-56.277Z"
          transform="translate(0 0.00002)"
          clipRule="evenodd"
          fill="#ffbe9d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ42"
          d="M391.253,334.363l-16.836,21.336-5.754-2.865-35.441,18.782c-3.01,1.605-6.759.537-8.455-2.41l-9.004-15.71c0,0,25.465-5.484,31.444-12.959c5.979-7.474,1.336-10.345,1.336-10.345l13.506-10.329l29.204,14.5Z"
          transform="translate(0 0.000003)"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ43"
          d="M385,282.886c0,0-17.038-7.38-37.396-36.209-20.357-28.829-25.858-62.955-28.928-63.368s-15.28-9.227-51.607,40.899c-36.327,50.127-28.8,64.845-23.732,65.754c5.067.909,41.389-1.959,62.416,4.649c21.027,6.609,46.475,23.127,46.475,23.127L385,282.886Z"
          transform="translate(0 0.000025)"
          clipRule="evenodd"
          fill="#9adfc0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ44"
          d="M416.927,320.266l-8.339,10.301-3.739,4.633c-5.122,6.331-14.335,7.568-20.964,2.814L348.31,317.367l32.193-46.114l34.164,27.616c6.54,5.305,7.548,14.859,2.26,21.397Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ45"
          d="M416.927,320.266l-8.339,10.301-3.739,4.633c-5.122,6.331-14.335,7.568-20.964,2.814L348.31,317.367l32.193-46.114l34.164,27.616c6.54,5.305,7.548,14.859,2.26,21.397Z"
          opacity="0.4"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ46"
          d="M268.905,225.607c-19.432,27.201-30.315,52.697-24.308,56.935c6.007,4.239,26.644-14.367,46.077-41.576c19.434-27.209,30.314-52.69,24.308-56.936s-26.645,14.375-46.077,41.577Z"
          transform="translate(.000002 0)"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ47"
          d="M268.905,225.607c-19.432,27.201-30.315,52.697-24.308,56.935c6.007,4.239,26.644-14.367,46.077-41.576c19.434-27.209,30.314-52.69,24.308-56.936s-26.645,14.375-46.077,41.577Z"
          transform="translate(.000003 0.00001)"
          opacity="0.5"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ48"
          d="M416.939,337.497l-9.715-5.243l8.785-10.849l6.818,6.303-5.888,9.789Z"
          transform="translate(0 0.000004)"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ49"
          d="M416.009,321.405l-8.785,10.849l1.999,1.078l7.602-11.179-.816-.748Z"
          transform="translate(0 0.000007)"
          opacity="0.6"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ50"
          d="M408.322,322.804c-.214.303-4.987-2.692-10.661-6.667s-10.081-7.497-9.874-7.801c.206-.304,4.985,2.7,10.66,6.706c5.676,4.005,10.096,7.461,9.875,7.762Z"
          transform="translate(0 0.000003)"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ51"
          d="M412.931,316.22c-.227.292-4.517-2.571-9.58-6.404-5.062-3.833-8.98-7.175-8.752-7.475.229-.301,4.51,2.569,9.572,6.402c5.063,3.833,8.989,7.177,8.76,7.477Z"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ52"
          d="M402.826,329.584c-.087.167-1.263-.353-3.097-1.368-.92-.493-2.01-1.103-3.208-1.788-1.198-.684-2.375-1.633-3.666-2.55-5.148-3.712-8.972-7.105-8.77-7.387.202-.283,4.462,2.621,9.547,6.297c1.285.909,2.455,1.856,3.586,2.604c1.132.749,2.149,1.414,2.995,2.007c1.688,1.209,2.7,2.018,2.613,2.185Z"
          transform="translate(0 0.000029)"
          clipRule="evenodd"
          fill="#075e54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ53"
          d="M297.852,224.352c0,0-13.601-12.553-26.161,6.59s3.049,25.723,3.049,25.723c9.197-9.635,16.977-20.514,23.112-32.313Z"
          transform="translate(.000004 0.000004)"
          clipRule="evenodd"
          fill="#9adfc0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ54"
          d="M319.197,202.775c.096.019-.408,1.406-1.384,3.858s-2.413,5.994-4.299,10.328l-3.585,6.861c-.647,1.227-1.316,2.498-2.007,3.813l-1.047,1.994c-.375.693-.812,1.305-1.22,1.968l-5.26,8.288c-.459.723-.924,1.444-1.384,2.174-.459.73-1.045,1.397-1.548,2.111l-3.23,4.272-3.235,4.264c-.539.661-1.05,1.419-1.615,2.06-.566.64-1.159,1.306-1.72,1.924l-6.565,7.322c-.529.571-1.002,1.176-1.569,1.709l-1.64,1.557-3.143,2.972-5.667,5.307c-3.67,2.985-6.702,5.313-8.793,6.935-1.047.895-2.167,1.702-3.349,2.412.924-1.016,1.934-1.952,3.017-2.798c2.058-1.767,4.955-4.235,8.512-7.273l5.491-5.387l3.07-2.994c.532-.509,1.067-1.033,1.61-1.563.544-.53.995-1.139,1.532-1.716l6.505-7.326l1.695-1.922c.583-.652,1.033-1.33,1.598-2.047l3.207-4.239c1.055-1.441,2.155-2.843,3.215-4.237.502-.668,1.086-1.366,1.537-2.09l1.386-2.15l5.289-8.16c.42-.684.861-1.28,1.238-1.942s.714-1.316,1.065-1.967l2.05-3.76l3.694-6.747l4.666-10.119c.52-1.282,1.15-2.517,1.883-3.692Z"
          opacity="0.5"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ55"
          d="M319.784,352.563c.915,2.827,1.84,5.718,3.529,8.137s4.257,4.403,7.283,4.686c3.026.282,6.208-1.596,6.81-4.495c1.19,1.311,3.445,1.167,4.86.087c1.414-1.08,2.149-2.813,2.623-4.52c1.681,1.483,4.495,1.119,6.117-.427c1.552-1.66,2.279-3.921,1.985-6.168-.315-2.214-.957-4.37-1.907-6.397c1.461.406,2.969.807,4.404.405c1.436-.403,2.695-1.95,2.145-3.343-.385-.793-1.047-1.42-1.864-1.764-2.147-1.183-3.643-2.04-6.086-2.232-.549-.107-.274,6.44-16.922,12.069-9.877,3.324-12.977,3.962-12.977,3.962Z"
          transform="translate(0 0.000005)"
          opacity="0.4"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ56"
          d="M351.717,368.115c-.014.066-.978-.321-2.604-.591-4.272-.726-8.653.405-12.03,3.105-1.287,1.021-1.9,1.828-1.99,1.772.107-.218.248-.418.418-.592.428-.5.894-.968,1.392-1.399c3.375-2.884,7.904-4.051,12.264-3.159.646.13,1.28.315,1.894.552.236.065.457.17.656.312Z"
          transform="translate(0 0.000007)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ57"
          d="M321.542,348.762c1.958,2.77,3.105,5.635,5.179,8.443.943,1.278,2.369,3.623,3.801,4.177c1.431.554,2.509.557,3.4-.756.725-1.061.146-2.819-.276-3.882-1.115-2.828-2.273-5.089-3.09-7.278-.391-1.025.381-1.074.564-.594.922,1.419,2.458,2.775,3.237,4.297c1.075,2.054.861,4.471,4.735,4.443.514.017,1.024-.086,1.492-.3c1.613-.796,2.065-2.661,1.747-4.254-.302-1.241-.796-2.427-1.465-3.516c1.238,2.086,2.59,4.332,5.082,4.985c1.426.46,2.988-.025,3.897-1.21c1.074-1.537.333-3.373-.484-4.895-1.445-2.705-3.14-5.27-5.064-7.662-.719-.886-1.727-1.497-2.85-1.726-1.306-.254-3.014-.341-3.977.636-1.072.926-1.714,2.249-1.776,3.659c0,0-2.941-2.279-5.907-1.072-1.839.814-3.328,2.25-4.203,4.053l-4.042,2.452Z"
          transform="translate(0 0.000006)"
          clipRule="evenodd"
          fill="#ffbe9d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ58"
          d="M341.661,338.341c-.827-1.442-.663-3.243.411-4.515.77-.975,1.675-1.894,2.434-1.992c3.314-.435,16.448,4.546,15.732,7.516-.715,2.97-1.991,4.207-9.152,1.72-1.263-.437-3.246-1.084-3.246-1.084l-2.304,2.309-3.875-3.954Z"
          transform="translate(0 0.000005)"
          clipRule="evenodd"
          fill="#ffbe9d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ59"
          d="M341.624,351.366c-1.209-3.271-3.349-6.121-6.159-8.204.49.179.944.444,1.341.781c2.022,1.508,3.565,3.563,4.443,5.918.218.474.345.985.375,1.505Z"
          transform="translate(0 0.000004)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ60"
          d="M345.723,342.599c-.079.046-.834-.851-1.912-1.834-.449-.422-.921-.818-1.415-1.186-.386-.274-.657-.381-.638-.438.019-.058.336-.027.776.204.564.31,1.085.691,1.549,1.136c1.104,1.003,1.752,2.056,1.64,2.118Z"
          transform="translate(0 0.000006)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ61"
          d="M348.557,340.256c-.905-.069-1.781-.345-2.561-.804-.577-.306-1.087-.723-1.5-1.226-.309-.389-.414-.678-.37-.707.624.597,1.314,1.122,2.058,1.564.816.338,1.609.73,2.373,1.173Z"
          transform="translate(0 0.000001)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ62"
          d="M332.256,353.396c-.373-.58-.683-1.197-.924-1.842-.579-1.527-1.412-2.946-2.463-4.2-1.111-1.194-2.634-1.928-4.265-2.054-.677-.011-1.353.066-2.01.229c0,0,.164-.129.505-.254.485-.177.998-.264,1.514-.257c1.731.057,3.367.803,4.539,2.07c1.088,1.282,1.917,2.761,2.44,4.356.276.631.498,1.284.664,1.952Z"
          transform="translate(0 0.000004)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          id="eMbCpRVqorZ63"
          d="M336.771,385.285c-1.906.031-3.812-.066-5.706-.29-1.908-.094-3.807-.32-5.684-.677c1.909-.03,3.818.068,5.714.292c1.905.098,3.802.323,5.676.675Z"
          transform="translate(0 0.000006)"
          clipRule="evenodd"
          fill="#eb996e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <g
        id="eMbCpRVqorZ64"
        transform="translate(-2.222734 4.478788)"
        clipRule="evenodd"
      >
        <path
          d="M160.728,114.448c0,0,6.66.38,8.75-2.85s-3-7.42-2.47-9.51s10.27-1.71,7.6-12.74-12-14.45-16.92-14.07-9.7,2.47-14.08,1.71-19.39-8.56-34,.76-8.56,27-7.61,30.62-15.3999,2.85-17.6799,16.73s7.79,24.54,30.9999,23.21c23.21-1.33,23.58-10.46,22.44-18.26s4.18-25.11,9.89-26.44s7.61,4.57,8.56,7s3.19,4.56,4.52,3.84Z"
          clipRule="evenodd"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M154.698,163.558c0,0,8,1.21,10.46,6.57s7.79,46.7,7.79,46.7l-18.73,7.3c0,0-.25-7.78-2.92-26.27s-.73-35.27,3.4-34.3Z"
          clipRule="evenodd"
          fill="#9adfc0"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M60.6281,254.308c5.9023,2.249,12.1541,3.444,18.47,3.53c10,0,6.85-10,6.64-10.79s-18.89,3.74-25.11,7.26Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M82.5081,241.708c0,0,17.25,30.92,27.3199,41.71s13.67,21.21,13.67,21.21l5.39,8.63c0,0-11.51,20.85-11.51,21.93s-29.1199,49.26-30.5599,50.34-12.22,2.52-13.3,6.11s2.15,11.51,2.87,12.95s1.08,12.58,4.32,16.54s5,4.31,6.11,2.15s1.44-21.57,5.39-28s49.6199-44.23,57.5299-55s12.48-53.65,10.79-67.6-5-21.93-5-21.93-34.55-21.98-73.0199-9.04Z"
          clipRule="evenodd"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M96.3981,370.588c-5,8.14-9.06,14.55-9.58,14.94-1.44,1.08-12.22,2.52-13.3,6.11s2.15,11.51,2.87,12.95s1.08,12.58,4.32,16.54s5,4.31,6.11,2.15s1.44-21.57,5.39-28c1.41-2.3,8.0899-8.56,16.4699-16.15-4.916-1.43-9.2286-4.429-12.2799-8.54Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M87.1781,394.878c-1.232-2.764-1.8037-5.777-1.67-8.8-3.3,1-11.08,2.53-12,5.56-1.08,3.6,2.15,11.51,2.87,12.95s1.08,12.58,4.32,16.54s5,4.31,6.11,2.15s1.44-21.57,5.39-28l-5.02-.4Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M115.228,248.538c14.74,10.79,39.91,61.48,39.19,65.44s-17.62,20.13-29.49,26.61-55.3699,36.31-57.8799,38.11-11.51,16.9-12.95,20.13-1.44,6.83-3.23,10.79-7.2-1.8-9.35-9-.72-25.53.36-28.4s18-2.52,18-2.52s29.44-32.35,35.21-38.1s26.2299-12.59,26.2299-12.59-19.78-20.85-30.5599-34.51c-10.78-13.66-16.54-38.84-16.54-38.84s26.9999-3.95,37.3899-3.59"
          clipRule="evenodd"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M137.078,271.718c7.48,12.42,20.93,36.5,18.57,45.47-3.23,12.31-40.16,31.74-40.16,31.74"
          clipRule="evenodd"
          fill="none"
          stroke="#d1d1d1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M132.318,264.068c0,0,1,1.61,2.69,4.28"
          clipRule="evenodd"
          fill="none"
          stroke="#d1d1d1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M75.2581,352.868c-8.07,8.79-15.41,16.84-15.41,16.84s-16.89-.36-18,2.52-2.53,21.22-.33,28.4s7.55,12.94,9.35,9s1.79-7.55,3.23-10.79s10.43-18.33,12.95-20.13c1-.73,8.75-6.05,18.38-12.56-4.4581-3.496-7.9571-8.065-10.17-13.28Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M61.3181,380.498c-1.08-1.08-3.59-.72-3.59-.72s.21-4.23.47-10.08c-4.3,0-15.42.21-16.29,2.53-1.08,2.87-2.52,21.21-.36,28.4s7.55,12.94,9.35,9s1.79-7.55,3.23-10.79c2.8279-5.428,5.9699-10.687,9.41-15.75-.79-.96-1.7-2.05-2.22-2.59Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M228.918,230.578c0,0-1.61,6.24-12.32,4.46-3.08-.51-13,4.82-29.09,6.6-7,.78-15.23.34-18.06.34-1.882.147-3.747-.445-5.2-1.65-.95-.83-6.5-16.67-6.5-16.67l12.88-4.49l3.54,6.27c0,0,.15,1.19,13,3.53c13,2.38,33.58-3.42,36.3-4.48s5.57,4.79,5.45,6.09Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M153.488,220.238c0,0,21.89-8,22.62-6.81s1,12.16,1,12.16-2.67,2.44-9.73,4.14c-4.163,1.013-8.389,1.744-12.65,2.19l-1.24-11.68Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M235.888,199.338l-17.95,28.12l8.68,7.78l18.55-27.82-9.28-8.08Z"
          clipRule="evenodd"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M217.938,227.448l7.18-8.67l2.1-.6c2.09-.6,6-.6,7.18-1.5s0-2.69-1.5-2.39c-2.883.245-5.777.345-8.67.3-1.2,0-9,6.88-9,6.88l-1.5,8.68"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M241.318,213.698c0,0,3,1.8.3,3.29s-2.52-.18-2.52-.18l2.22-3.11Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M237.518,219.528c.654.497.853,1.393.47,2.12-.7,1.19-2.83,1-2.83,1l2.36-3.12Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M234.918,223.778c.652.503.85,1.4.47,2.13-.7,1.18-2.83.94-2.83.94l2.36-3.07Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M232.318,227.448c.652.503.85,1.4.47,2.13-.7,1.18-2.83.95-2.83.95l2.36-3.08Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M154.698,213.668c0,0,2,11.25,6.65,19.28s5.93,20,5.93,20l.59,11.18-15.29-8.24c0,0,.42-28.62-1-33.73s-2.68-17.28-.49-16.06s3.61,7.57,3.61,7.57Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M145.458,158.448c0,0,2.67.73,4.38,5.35s3.89,34.3,3.65,38.92.48,16.3.73,21.41s4.62,34.55,4.62,34.55c-10.6-5.884-22.255-9.622-34.3-11-20.44-2.43-34.0599-.73-35.7599-.24s11.19-25.55,11.9199-45.25c.73-19.7-2.1899-45,8.51-46c10.7-1,18.73-1.7,21.65-1.95s14.6,4.21,14.6,4.21Z"
          clipRule="evenodd"
          fill="#4b6e5e"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M144.488,201.268l-21.41,9.97"
          clipRule="evenodd"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M138.648,206.858l-12.9,6.33"
          clipRule="evenodd"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M129.318,126.578c0,0-1.7,12.33-4.84,19.58s-11.84,8.7-10.88,9.91s14.27,20.31,18.86,20.79s14.74-13,15-15.47-1.45-.49-2.42-6s3.62-13.3,3.62-13.3-19.14-11.64-19.34-15.51Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M155.788,100.148c-3.016-2.2859-7.065-2.673-10.46-1-5.9,2.85-6.09,13.12-9.89,18.26s-7.8,3-7.8,3-6.09-7.61-6.85,2.66s6.09,9.13,7.61,9.13.76-1.14.76-1.14s2.66,6.47,4.56,8s17.11,6.8,21.11,7c6.47.38,6.09-5.89,6.09-5.89l3.23-13.31c0,0,5.71-4.19,4.57-5.9s-6.47-3-8-6.66.6-10.54-4.93-14.15Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M147.988,125.818c0,0,3.8,4.19,8,4.38"
          clipRule="evenodd"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M155.788,115.078c0,1.42-.47,2.57-1.05,2.57s-1.05-1.15-1.05-2.57.47-2.57,1.05-2.57s1.05,1.15,1.05,2.57Z"
          clipRule="evenodd"
          fill="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M151.028,109.088c0,0,3.42-3.61,6.28-1.14"
          clipRule="evenodd"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M115.208,170.888c0,0-.42,28.64-1,37.15s-7.06,27.6-10.17,31.75-4.5599,7.26-12.8699,9.75-30.5,4.77-30.5,4.77s20.13-26.56,23.24-34.24s4.57-25.94,4.57-25.94l-33.62-2.49c0,0,18.88-17.43,23.24-24.07s10-11.41,20.13-12.66s15.3699,1.16,15.3699,1.16l1.61,14.82Z"
          clipRule="evenodd"
          fill="#9adfc0"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M117.548,152.748c0,0-2.13,8-2.13,13.07.064,2.501-.113,5.003-.53,7.47c0,0-4.27-.53-5.87,0s-7.47,1.6-7.47,1.6s2.13-19.74,6.93-22.94s9.07.8,9.07.8Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M149.568,176.228c0,0,2.94,30.14,5.13,37.44c1.575-4.623,2.877-9.334,3.9-14.11c1.21-6.32-1.95-21.41-2.68-25.54s-5.6-4.83-6.35,2.21Z"
          clipRule="evenodd"
          fill="#9adfc0"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M144.988,155.348l3,12.07l1.6,8.81l8.27,2.4c0,0,.74-12.16-3-17.49s-8.54-7.69-9.87-5.79Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M112.918,214.678c0,0-6,8.51-10.16,11-4.1599,2.49-15.5699,12.86-15.5699,12.86s7.47,1.25,9.75,3.74s1.87,3.73,1.87,3.73s4.9999-2.9,8.9299-11.62s5.18-19.71,5.18-19.71Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M56.8881,186.038c0,0-6.22,8.3-6.64,9.13s1.46,1.25,2.7,1s12.24,1.45,12.24,1.45l11.83-5.17c0,0-.41-2.69-8.09-5.18s-10.61-2.68-12.04-1.23Z"
          clipRule="evenodd"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M101.508,187.448c0,0-41.2999,7.27-48.5599,8.72s-8.3,9.54-8.72,12.24s9.34,7.89,22.83,4.57s33.9999-16.4,36.1099-17.43s7.68-2.08,11-2.91s6.43-4.15,7.68-4.77s7.68-3.32,11-5.61s3.11-3.94.41-3.73-7.47,2.49-8.92,2.7l-1.46.2l9.76-8.09c0,0,3.94-4.56,1.45-4.56s-15.15,2.9-17.85,4.77-14.73,13.9-14.73,13.9Z"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M132.378,169.218c0,0,1.82.48.48,2.3s-10.92,9.34-10.92,9.34"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M113.208,177.948c0,0,5.94-3.52,8.25-4.73s10.8-3.52,10.07-1.94-4.86,4.61-4.86,4.61"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          d="M109.808,184.378c0,0,7.89-7.06,10.58-8.09s8.93-5.19,8.1-2.91-9.76,8.51-9.76,8.51c-.887,1.861-2.002,3.605-3.32,5.19-1.86,2.07-6.22,4.15-7.05,4.36"
          clipRule="evenodd"
          fill="#ffbe9d"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  )
}
export default HeroImage
