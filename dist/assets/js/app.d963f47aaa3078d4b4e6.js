/*! For license information please see app.d963f47aaa3078d4b4e6.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.slider = t())
    : (e.slider = t());
})(self, function () {
  return (() => {
    var e = {
        7705: e => {
          'use strict';
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = '',
                    i = void 0 !== t[5];
                  return (
                    t[4] && (n += '@supports ('.concat(t[4], ') {')),
                    t[2] && (n += '@media '.concat(t[2], ' {')),
                    i &&
                      (n += '@layer'.concat(
                        t[5].length > 0 ? ' '.concat(t[5]) : '',
                        ' {',
                      )),
                    (n += e(t)),
                    i && (n += '}'),
                    t[2] && (n += '}'),
                    t[4] && (n += '}'),
                    n
                  );
                }).join('');
              }),
              (t.i = function (e, n, i, r, s) {
                'string' == typeof e && (e = [[null, e, void 0]]);
                var o = {};
                if (i)
                  for (var a = 0; a < this.length; a++) {
                    var l = this[a][0];
                    null != l && (o[l] = !0);
                  }
                for (var u = 0; u < e.length; u++) {
                  var c = [].concat(e[u]);
                  (i && o[c[0]]) ||
                    (void 0 !== s &&
                      (void 0 === c[5] ||
                        (c[1] = '@layer'
                          .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                          .concat(c[1], '}')),
                      (c[5] = s)),
                    n &&
                      (c[2]
                        ? ((c[1] = '@media '
                            .concat(c[2], ' {')
                            .concat(c[1], '}')),
                          (c[2] = n))
                        : (c[2] = n)),
                    r &&
                      (c[4]
                        ? ((c[1] = '@supports ('
                            .concat(c[4], ') {')
                            .concat(c[1], '}')),
                          (c[4] = r))
                        : (c[4] = ''.concat(r))),
                    t.push(c));
                }
              }),
              t
            );
          };
        },
        6738: e => {
          'use strict';
          e.exports = function (e) {
            return e[1];
          };
        },
        8563: function (e, t) {
          var n;
          !(function (t, n) {
            'use strict';
            'object' == typeof e.exports
              ? (e.exports = t.document
                  ? n(t, !0)
                  : function (e) {
                      if (!e.document)
                        throw new Error(
                          'jQuery requires a window with a document',
                        );
                      return n(e);
                    })
              : n(t);
          })('undefined' != typeof window ? window : this, function (i, r) {
            'use strict';
            var s = [],
              o = Object.getPrototypeOf,
              a = s.slice,
              l = s.flat
                ? function (e) {
                    return s.flat.call(e);
                  }
                : function (e) {
                    return s.concat.apply([], e);
                  },
              u = s.push,
              c = s.indexOf,
              d = {},
              f = d.toString,
              h = d.hasOwnProperty,
              p = h.toString,
              m = p.call(Object),
              v = {},
              g = function (e) {
                return (
                  'function' == typeof e &&
                  'number' != typeof e.nodeType &&
                  'function' != typeof e.item
                );
              },
              y = function (e) {
                return null != e && e === e.window;
              },
              b = i.document,
              S = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function x(e, t, n) {
              var i,
                r,
                s = (n = n || b).createElement('script');
              if (((s.text = e), t))
                for (i in S)
                  (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                    s.setAttribute(i, r);
              n.head.appendChild(s).parentNode.removeChild(s);
            }
            function T(e) {
              return null == e
                ? e + ''
                : 'object' == typeof e || 'function' == typeof e
                ? d[f.call(e)] || 'object'
                : typeof e;
            }
            var _ = '3.6.0',
              w = function (e, t) {
                return new w.fn.init(e, t);
              };
            function C(e) {
              var t = !!e && 'length' in e && e.length,
                n = T(e);
              return (
                !g(e) &&
                !y(e) &&
                ('array' === n ||
                  0 === t ||
                  ('number' == typeof t && t > 0 && t - 1 in e))
              );
            }
            (w.fn = w.prototype =
              {
                jquery: _,
                constructor: w,
                length: 0,
                toArray: function () {
                  return a.call(this);
                },
                get: function (e) {
                  return null == e
                    ? a.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
                },
                pushStack: function (e) {
                  var t = w.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
                },
                each: function (e) {
                  return w.each(this, e);
                },
                map: function (e) {
                  return this.pushStack(
                    w.map(this, function (t, n) {
                      return e.call(t, n, t);
                    }),
                  );
                },
                slice: function () {
                  return this.pushStack(a.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                even: function () {
                  return this.pushStack(
                    w.grep(this, function (e, t) {
                      return (t + 1) % 2;
                    }),
                  );
                },
                odd: function () {
                  return this.pushStack(
                    w.grep(this, function (e, t) {
                      return t % 2;
                    }),
                  );
                },
                eq: function (e) {
                  var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                  return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor();
                },
                push: u,
                sort: s.sort,
                splice: s.splice,
              }),
              (w.extend = w.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    i,
                    r,
                    s,
                    o = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                  for (
                    'boolean' == typeof o &&
                      ((u = o), (o = arguments[a] || {}), a++),
                      'object' == typeof o || g(o) || (o = {}),
                      a === l && ((o = this), a--);
                    a < l;
                    a++
                  )
                    if (null != (e = arguments[a]))
                      for (t in e)
                        (i = e[t]),
                          '__proto__' !== t &&
                            o !== i &&
                            (u &&
                            i &&
                            (w.isPlainObject(i) || (r = Array.isArray(i)))
                              ? ((n = o[t]),
                                (s =
                                  r && !Array.isArray(n)
                                    ? []
                                    : r || w.isPlainObject(n)
                                    ? n
                                    : {}),
                                (r = !1),
                                (o[t] = w.extend(u, s, i)))
                              : void 0 !== i && (o[t] = i));
                  return o;
                }),
              w.extend({
                expando: 'jQuery' + (_ + Math.random()).replace(/\D/g, ''),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                  var t, n;
                  return !(
                    !e ||
                    '[object Object]' !== f.call(e) ||
                    ((t = o(e)) &&
                      ('function' !=
                        typeof (n =
                          h.call(t, 'constructor') && t.constructor) ||
                        p.call(n) !== m))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                globalEval: function (e, t, n) {
                  x(e, { nonce: t && t.nonce }, n);
                },
                each: function (e, t) {
                  var n,
                    i = 0;
                  if (C(e))
                    for (
                      n = e.length;
                      i < n && !1 !== t.call(e[i], i, e[i]);
                      i++
                    );
                  else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                  return e;
                },
                makeArray: function (e, t) {
                  var n = t || [];
                  return (
                    null != e &&
                      (C(Object(e))
                        ? w.merge(n, 'string' == typeof e ? [e] : e)
                        : u.call(n, e)),
                    n
                  );
                },
                inArray: function (e, t, n) {
                  return null == t ? -1 : c.call(t, e, n);
                },
                merge: function (e, t) {
                  for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                  return (e.length = r), e;
                },
                grep: function (e, t, n) {
                  for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                    !t(e[r], r) !== o && i.push(e[r]);
                  return i;
                },
                map: function (e, t, n) {
                  var i,
                    r,
                    s = 0,
                    o = [];
                  if (C(e))
                    for (i = e.length; s < i; s++)
                      null != (r = t(e[s], s, n)) && o.push(r);
                  else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
                  return l(o);
                },
                guid: 1,
                support: v,
              }),
              'function' == typeof Symbol &&
                (w.fn[Symbol.iterator] = s[Symbol.iterator]),
              w.each(
                'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                  ' ',
                ),
                function (e, t) {
                  d['[object ' + t + ']'] = t.toLowerCase();
                },
              );
            var A = (function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a,
                l,
                u,
                c,
                d,
                f,
                h,
                p,
                m,
                v,
                g,
                y,
                b,
                S = 'sizzle' + 1 * new Date(),
                x = e.document,
                T = 0,
                _ = 0,
                w = le(),
                C = le(),
                A = le(),
                E = le(),
                L = function (e, t) {
                  return e === t && (d = !0), 0;
                },
                M = {}.hasOwnProperty,
                D = [],
                O = D.pop,
                k = D.push,
                F = D.push,
                P = D.slice,
                N = function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                j =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                I = '[\\x20\\t\\r\\n\\f]',
                R =
                  '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                V =
                  '\\[[\\x20\\t\\r\\n\\f]*(' +
                  R +
                  ')(?:' +
                  I +
                  '*([*^$|!~]?=)' +
                  I +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  R +
                  '))|)' +
                  I +
                  '*\\]',
                H =
                  ':(' +
                  R +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  V +
                  ')*)|.*)\\)|)',
                q = new RegExp(I + '+', 'g'),
                $ = new RegExp(
                  '^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$',
                  'g',
                ),
                z = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
                U = new RegExp(
                  '^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*',
                ),
                B = new RegExp(I + '|>'),
                W = new RegExp(H),
                X = new RegExp('^' + R + '$'),
                G = {
                  ID: new RegExp('^#(' + R + ')'),
                  CLASS: new RegExp('^\\.(' + R + ')'),
                  TAG: new RegExp('^(' + R + '|[*])'),
                  ATTR: new RegExp('^' + V),
                  PSEUDO: new RegExp('^' + H),
                  CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
                    'i',
                  ),
                  bool: new RegExp('^(?:' + j + ')$', 'i'),
                  needsContext: new RegExp(
                    '^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
                    'i',
                  ),
                },
                Y = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp(
                  '\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])',
                  'g',
                ),
                ne = function (e, t) {
                  var n = '0x' + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode(
                          (n >> 10) | 55296,
                          (1023 & n) | 56320,
                        ))
                  );
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function (e, t) {
                  return t
                    ? '\0' === e
                      ? '�'
                      : e.slice(0, -1) +
                        '\\' +
                        e.charCodeAt(e.length - 1).toString(16) +
                        ' '
                    : '\\' + e;
                },
                se = function () {
                  f();
                },
                oe = Se(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      'fieldset' === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: 'parentNode', next: 'legend' },
                );
              try {
                F.apply((D = P.call(x.childNodes)), x.childNodes),
                  D[x.childNodes.length].nodeType;
              } catch (e) {
                F = {
                  apply: D.length
                    ? function (e, t) {
                        k.apply(e, P.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ae(e, t, i, r) {
                var s,
                  a,
                  u,
                  c,
                  d,
                  p,
                  g,
                  y = t && t.ownerDocument,
                  x = t ? t.nodeType : 9;
                if (
                  ((i = i || []),
                  'string' != typeof e ||
                    !e ||
                    (1 !== x && 9 !== x && 11 !== x))
                )
                  return i;
                if (!r && (f(t), (t = t || h), m)) {
                  if (11 !== x && (d = Z.exec(e)))
                    if ((s = d[1])) {
                      if (9 === x) {
                        if (!(u = t.getElementById(s))) return i;
                        if (u.id === s) return i.push(u), i;
                      } else if (
                        y &&
                        (u = y.getElementById(s)) &&
                        b(t, u) &&
                        u.id === s
                      )
                        return i.push(u), i;
                    } else {
                      if (d[2]) return F.apply(i, t.getElementsByTagName(e)), i;
                      if (
                        (s = d[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return F.apply(i, t.getElementsByClassName(s)), i;
                    }
                  if (
                    n.qsa &&
                    !E[e + ' '] &&
                    (!v || !v.test(e)) &&
                    (1 !== x || 'object' !== t.nodeName.toLowerCase())
                  ) {
                    if (
                      ((g = e), (y = t), 1 === x && (B.test(e) || U.test(e)))
                    ) {
                      for (
                        ((y = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                          n.scope) ||
                          ((c = t.getAttribute('id'))
                            ? (c = c.replace(ie, re))
                            : t.setAttribute('id', (c = S))),
                          a = (p = o(e)).length;
                        a--;

                      )
                        p[a] = (c ? '#' + c : ':scope') + ' ' + be(p[a]);
                      g = p.join(',');
                    }
                    try {
                      return F.apply(i, y.querySelectorAll(g)), i;
                    } catch (t) {
                      E(e, !0);
                    } finally {
                      c === S && t.removeAttribute('id');
                    }
                  }
                }
                return l(e.replace($, '$1'), t, i, r);
              }
              function le() {
                var e = [];
                return function t(n, r) {
                  return (
                    e.push(n + ' ') > i.cacheLength && delete t[e.shift()],
                    (t[n + ' '] = r)
                  );
                };
              }
              function ue(e) {
                return (e[S] = !0), e;
              }
              function ce(e) {
                var t = h.createElement('fieldset');
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function de(e, t) {
                for (var n = e.split('|'), r = n.length; r--; )
                  i.attrHandle[n[r]] = t;
              }
              function fe(e, t) {
                var n = t && e,
                  i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function he(e) {
                return function (t) {
                  return 'input' === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function pe(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ('input' === n || 'button' === n) && t.type === e;
                };
              }
              function me(e) {
                return function (t) {
                  return 'form' in t
                    ? t.parentNode && !1 === t.disabled
                      ? 'label' in t
                        ? 'label' in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && oe(t) === e)
                      : t.disabled === e
                    : 'label' in t && t.disabled === e;
                };
              }
              function ve(e) {
                return ue(function (t) {
                  return (
                    (t = +t),
                    ue(function (n, i) {
                      for (var r, s = e([], n.length, t), o = s.length; o--; )
                        n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                    })
                  );
                });
              }
              function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (s = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !Y.test(t || (n && n.nodeName) || 'HTML');
                }),
              (f = ae.setDocument =
                function (e) {
                  var t,
                    r,
                    o = e ? e.ownerDocument || e : x;
                  return o != h && 9 === o.nodeType && o.documentElement
                    ? ((p = (h = o).documentElement),
                      (m = !s(h)),
                      x != h &&
                        (r = h.defaultView) &&
                        r.top !== r &&
                        (r.addEventListener
                          ? r.addEventListener('unload', se, !1)
                          : r.attachEvent && r.attachEvent('onunload', se)),
                      (n.scope = ce(function (e) {
                        return (
                          p.appendChild(e).appendChild(h.createElement('div')),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(':scope fieldset div').length
                        );
                      })),
                      (n.attributes = ce(function (e) {
                        return (
                          (e.className = 'i'), !e.getAttribute('className')
                        );
                      })),
                      (n.getElementsByTagName = ce(function (e) {
                        return (
                          e.appendChild(h.createComment('')),
                          !e.getElementsByTagName('*').length
                        );
                      })),
                      (n.getElementsByClassName = J.test(
                        h.getElementsByClassName,
                      )),
                      (n.getById = ce(function (e) {
                        return (
                          (p.appendChild(e).id = S),
                          !h.getElementsByName || !h.getElementsByName(S).length
                        );
                      })),
                      n.getById
                        ? ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute('id') === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode('id');
                              return n && n.value === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && m) {
                              var n,
                                i,
                                r,
                                s = t.getElementById(e);
                              if (s) {
                                if (
                                  (n = s.getAttributeNode('id')) &&
                                  n.value === e
                                )
                                  return [s];
                                for (
                                  r = t.getElementsByName(e), i = 0;
                                  (s = r[i++]);

                                )
                                  if (
                                    (n = s.getAttributeNode('id')) &&
                                    n.value === e
                                  )
                                    return [s];
                              }
                              return [];
                            }
                          })),
                      (i.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              i = [],
                              r = 0,
                              s = t.getElementsByTagName(e);
                            if ('*' === e) {
                              for (; (n = s[r++]); )
                                1 === n.nodeType && i.push(n);
                              return i;
                            }
                            return s;
                          }),
                      (i.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && m)
                            return t.getElementsByClassName(e);
                        }),
                      (g = []),
                      (v = []),
                      (n.qsa = J.test(h.querySelectorAll)) &&
                        (ce(function (e) {
                          var t;
                          (p.appendChild(e).innerHTML =
                            "<a id='" +
                            S +
                            "'></a><select id='" +
                            S +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              v.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                            e.querySelectorAll('[selected]').length ||
                              v.push(
                                '\\[[\\x20\\t\\r\\n\\f]*(?:value|' + j + ')',
                              ),
                            e.querySelectorAll('[id~=' + S + '-]').length ||
                              v.push('~='),
                            (t = h.createElement('input')).setAttribute(
                              'name',
                              '',
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              v.push(
                                '\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")',
                              ),
                            e.querySelectorAll(':checked').length ||
                              v.push(':checked'),
                            e.querySelectorAll('a#' + S + '+*').length ||
                              v.push('.#.+[+~]'),
                            e.querySelectorAll('\\\f'),
                            v.push('[\\r\\n\\f]');
                        }),
                        ce(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = h.createElement('input');
                          t.setAttribute('type', 'hidden'),
                            e.appendChild(t).setAttribute('name', 'D'),
                            e.querySelectorAll('[name=d]').length &&
                              v.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                            2 !== e.querySelectorAll(':enabled').length &&
                              v.push(':enabled', ':disabled'),
                            (p.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(':disabled').length &&
                              v.push(':enabled', ':disabled'),
                            e.querySelectorAll('*,:x'),
                            v.push(',.*:');
                        })),
                      (n.matchesSelector = J.test(
                        (y =
                          p.matches ||
                          p.webkitMatchesSelector ||
                          p.mozMatchesSelector ||
                          p.oMatchesSelector ||
                          p.msMatchesSelector),
                      )) &&
                        ce(function (e) {
                          (n.disconnectedMatch = y.call(e, '*')),
                            y.call(e, "[s!='']:x"),
                            g.push('!=', H);
                        }),
                      (v = v.length && new RegExp(v.join('|'))),
                      (g = g.length && new RegExp(g.join('|'))),
                      (t = J.test(p.compareDocumentPosition)),
                      (b =
                        t || J.test(p.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                              return (
                                e === i ||
                                !(
                                  !i ||
                                  1 !== i.nodeType ||
                                  !(n.contains
                                    ? n.contains(i)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(i))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (L = t
                        ? function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var i =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              i ||
                              (1 &
                                (i =
                                  (e.ownerDocument || e) ==
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === i)
                                ? e == h || (e.ownerDocument == x && b(x, e))
                                  ? -1
                                  : t == h || (t.ownerDocument == x && b(x, t))
                                  ? 1
                                  : c
                                  ? N(c, e) - N(c, t)
                                  : 0
                                : 4 & i
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var n,
                              i = 0,
                              r = e.parentNode,
                              s = t.parentNode,
                              o = [e],
                              a = [t];
                            if (!r || !s)
                              return e == h
                                ? -1
                                : t == h
                                ? 1
                                : r
                                ? -1
                                : s
                                ? 1
                                : c
                                ? N(c, e) - N(c, t)
                                : 0;
                            if (r === s) return fe(e, t);
                            for (n = e; (n = n.parentNode); ) o.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; o[i] === a[i]; ) i++;
                            return i
                              ? fe(o[i], a[i])
                              : o[i] == x
                              ? -1
                              : a[i] == x
                              ? 1
                              : 0;
                          }),
                      h)
                    : h;
                }),
              (ae.matches = function (e, t) {
                return ae(e, null, null, t);
              }),
              (ae.matchesSelector = function (e, t) {
                if (
                  (f(e),
                  n.matchesSelector &&
                    m &&
                    !E[t + ' '] &&
                    (!g || !g.test(t)) &&
                    (!v || !v.test(t)))
                )
                  try {
                    var i = y.call(e, t);
                    if (
                      i ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return i;
                  } catch (e) {
                    E(t, !0);
                  }
                return ae(t, h, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != h && f(e), b(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != h && f(e);
                var r = i.attrHandle[t.toLowerCase()],
                  s =
                    r && M.call(i.attrHandle, t.toLowerCase())
                      ? r(e, t, !m)
                      : void 0;
                return void 0 !== s
                  ? s
                  : n.attributes || !m
                  ? e.getAttribute(t)
                  : (s = e.getAttributeNode(t)) && s.specified
                  ? s.value
                  : null;
              }),
              (ae.escape = function (e) {
                return (e + '').replace(ie, re);
              }),
              (ae.error = function (e) {
                throw new Error('Syntax error, unrecognized expression: ' + e);
              }),
              (ae.uniqueSort = function (e) {
                var t,
                  i = [],
                  r = 0,
                  s = 0;
                if (
                  ((d = !n.detectDuplicates),
                  (c = !n.sortStable && e.slice(0)),
                  e.sort(L),
                  d)
                ) {
                  for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                  for (; r--; ) e.splice(i[r], 1);
                }
                return (c = null), e;
              }),
              (r = ae.getText =
                function (e) {
                  var t,
                    n = '',
                    i = 0,
                    s = e.nodeType;
                  if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                      if ('string' == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                    } else if (3 === s || 4 === s) return e.nodeValue;
                  } else for (; (t = e[i++]); ) n += r(t);
                  return n;
                }),
              (i = ae.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ue,
                  match: G,
                  attrHandle: {},
                  find: {},
                  relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                          ? (e[3] || ae.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ('even' === e[3] || 'odd' === e[3]))),
                            (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                          : e[3] && ae.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || '')
                            : n &&
                              W.test(n) &&
                              (t = o(n, !0)) &&
                              (t = n.indexOf(')', n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return '*' === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = w[e + ' '];
                      return (
                        t ||
                        ((t = new RegExp(
                          '(^|[\\x20\\t\\r\\n\\f])' + e + '(' + I + '|$)',
                        )) &&
                          w(e, function (e) {
                            return t.test(
                              ('string' == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute('class')) ||
                                '',
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (i) {
                        var r = ae.attr(i, e);
                        return null == r
                          ? '!=' === t
                          : !t ||
                              ((r += ''),
                              '=' === t
                                ? r === n
                                : '!=' === t
                                ? r !== n
                                : '^=' === t
                                ? n && 0 === r.indexOf(n)
                                : '*=' === t
                                ? n && r.indexOf(n) > -1
                                : '$=' === t
                                ? n && r.slice(-n.length) === n
                                : '~=' === t
                                ? (' ' + r.replace(q, ' ') + ' ').indexOf(n) >
                                  -1
                                : '|=' === t &&
                                  (r === n ||
                                    r.slice(0, n.length + 1) === n + '-'));
                      };
                    },
                    CHILD: function (e, t, n, i, r) {
                      var s = 'nth' !== e.slice(0, 3),
                        o = 'last' !== e.slice(-4),
                        a = 'of-type' === t;
                      return 1 === i && 0 === r
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, l) {
                            var u,
                              c,
                              d,
                              f,
                              h,
                              p,
                              m = s !== o ? 'nextSibling' : 'previousSibling',
                              v = t.parentNode,
                              g = a && t.nodeName.toLowerCase(),
                              y = !l && !a,
                              b = !1;
                            if (v) {
                              if (s) {
                                for (; m; ) {
                                  for (f = t; (f = f[m]); )
                                    if (
                                      a
                                        ? f.nodeName.toLowerCase() === g
                                        : 1 === f.nodeType
                                    )
                                      return !1;
                                  p = m = 'only' === e && !p && 'nextSibling';
                                }
                                return !0;
                              }
                              if (
                                ((p = [o ? v.firstChild : v.lastChild]), o && y)
                              ) {
                                for (
                                  b =
                                    (h =
                                      (u =
                                        (c =
                                          (d = (f = v)[S] || (f[S] = {}))[
                                            f.uniqueID
                                          ] || (d[f.uniqueID] = {}))[e] ||
                                        [])[0] === T && u[1]) && u[2],
                                    f = h && v.childNodes[h];
                                  (f =
                                    (++h && f && f[m]) ||
                                    (b = h = 0) ||
                                    p.pop());

                                )
                                  if (1 === f.nodeType && ++b && f === t) {
                                    c[e] = [T, h, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = h =
                                    (u =
                                      (c =
                                        (d = (f = t)[S] || (f[S] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] ||
                                      [])[0] === T && u[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (f =
                                    (++h && f && f[m]) ||
                                    (b = h = 0) ||
                                    p.pop()) &&
                                  ((a
                                    ? f.nodeName.toLowerCase() !== g
                                    : 1 !== f.nodeType) ||
                                    !++b ||
                                    (y &&
                                      ((c =
                                        (d = f[S] || (f[S] = {}))[f.uniqueID] ||
                                        (d[f.uniqueID] = {}))[e] = [T, b]),
                                    f !== t));

                                );
                              return (
                                (b -= r) === i || (b % i == 0 && b / i >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        r =
                          i.pseudos[e] ||
                          i.setFilters[e.toLowerCase()] ||
                          ae.error('unsupported pseudo: ' + e);
                      return r[S]
                        ? r(t)
                        : r.length > 1
                        ? ((n = [e, e, '', t]),
                          i.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ue(function (e, n) {
                                for (var i, s = r(e, t), o = s.length; o--; )
                                  e[(i = N(e, s[o]))] = !(n[i] = s[o]);
                              })
                            : function (e) {
                                return r(e, 0, n);
                              })
                        : r;
                    },
                  },
                  pseudos: {
                    not: ue(function (e) {
                      var t = [],
                        n = [],
                        i = a(e.replace($, '$1'));
                      return i[S]
                        ? ue(function (e, t, n, r) {
                            for (
                              var s, o = i(e, null, r, []), a = e.length;
                              a--;

                            )
                              (s = o[a]) && (e[a] = !(t[a] = s));
                          })
                        : function (e, r, s) {
                            return (
                              (t[0] = e),
                              i(t, null, s, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: ue(function (e) {
                      return function (t) {
                        return ae(e, t).length > 0;
                      };
                    }),
                    contains: ue(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return (t.textContent || r(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: ue(function (e) {
                      return (
                        X.test(e || '') || ae.error('unsupported lang: ' + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = m
                                ? t.lang
                                : t.getAttribute('xml:lang') ||
                                  t.getAttribute('lang'))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + '-')
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === p;
                    },
                    focus: function (e) {
                      return (
                        e === h.activeElement &&
                        (!h.hasFocus || h.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: me(!1),
                    disabled: me(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ('input' === t && !!e.checked) ||
                        ('option' === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !i.pseudos.empty(e);
                    },
                    header: function (e) {
                      return Q.test(e.nodeName);
                    },
                    input: function (e) {
                      return K.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ('input' === t && 'button' === e.type) || 'button' === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        'input' === e.nodeName.toLowerCase() &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) ||
                          'text' === t.toLowerCase())
                      );
                    },
                    first: ve(function () {
                      return [0];
                    }),
                    last: ve(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ve(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ve(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                        e.push(i);
                      return e;
                    }),
                    gt: ve(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                      return e;
                    }),
                  },
                }),
              (i.pseudos.nth = i.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                i.pseudos[t] = he(t);
              for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
              function ye() {}
              function be(e) {
                for (var t = 0, n = e.length, i = ''; t < n; t++)
                  i += e[t].value;
                return i;
              }
              function Se(e, t, n) {
                var i = t.dir,
                  r = t.next,
                  s = r || i,
                  o = n && 'parentNode' === s,
                  a = _++;
                return t.first
                  ? function (t, n, r) {
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o) return e(t, n, r);
                      return !1;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        d,
                        f = [T, a];
                      if (l) {
                        for (; (t = t[i]); )
                          if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || o)
                            if (
                              ((c =
                                (d = t[S] || (t[S] = {}))[t.uniqueID] ||
                                (d[t.uniqueID] = {})),
                              r && r === t.nodeName.toLowerCase())
                            )
                              t = t[i] || t;
                            else {
                              if ((u = c[s]) && u[0] === T && u[1] === a)
                                return (f[2] = u[2]);
                              if (((c[s] = f), (f[2] = e(t, n, l)))) return !0;
                            }
                      return !1;
                    };
              }
              function xe(e) {
                return e.length > 1
                  ? function (t, n, i) {
                      for (var r = e.length; r--; )
                        if (!e[r](t, n, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function Te(e, t, n, i, r) {
                for (
                  var s, o = [], a = 0, l = e.length, u = null != t;
                  a < l;
                  a++
                )
                  (s = e[a]) &&
                    ((n && !n(s, i, r)) || (o.push(s), u && t.push(a)));
                return o;
              }
              function _e(e, t, n, i, r, s) {
                return (
                  i && !i[S] && (i = _e(i)),
                  r && !r[S] && (r = _e(r, s)),
                  ue(function (s, o, a, l) {
                    var u,
                      c,
                      d,
                      f = [],
                      h = [],
                      p = o.length,
                      m =
                        s ||
                        (function (e, t, n) {
                          for (var i = 0, r = t.length; i < r; i++)
                            ae(e, t[i], n);
                          return n;
                        })(t || '*', a.nodeType ? [a] : a, []),
                      v = !e || (!s && t) ? m : Te(m, f, e, a, l),
                      g = n ? (r || (s ? e : p || i) ? [] : o) : v;
                    if ((n && n(v, g, a, l), i))
                      for (u = Te(g, h), i(u, [], a, l), c = u.length; c--; )
                        (d = u[c]) && (g[h[c]] = !(v[h[c]] = d));
                    if (s) {
                      if (r || e) {
                        if (r) {
                          for (u = [], c = g.length; c--; )
                            (d = g[c]) && u.push((v[c] = d));
                          r(null, (g = []), u, l);
                        }
                        for (c = g.length; c--; )
                          (d = g[c]) &&
                            (u = r ? N(s, d) : f[c]) > -1 &&
                            (s[u] = !(o[u] = d));
                      }
                    } else (g = Te(g === o ? g.splice(p, g.length) : g)), r ? r(null, o, g, l) : F.apply(o, g);
                  })
                );
              }
              function we(e) {
                for (
                  var t,
                    n,
                    r,
                    s = e.length,
                    o = i.relative[e[0].type],
                    a = o || i.relative[' '],
                    l = o ? 1 : 0,
                    c = Se(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0,
                    ),
                    d = Se(
                      function (e) {
                        return N(t, e) > -1;
                      },
                      a,
                      !0,
                    ),
                    f = [
                      function (e, n, i) {
                        var r =
                          (!o && (i || n !== u)) ||
                          ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                        return (t = null), r;
                      },
                    ];
                  l < s;
                  l++
                )
                  if ((n = i.relative[e[l].type])) f = [Se(xe(f), n)];
                  else {
                    if (
                      (n = i.filter[e[l].type].apply(null, e[l].matches))[S]
                    ) {
                      for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                      return _e(
                        l > 1 && xe(f),
                        l > 1 &&
                          be(
                            e
                              .slice(0, l - 1)
                              .concat({
                                value: ' ' === e[l - 2].type ? '*' : '',
                              }),
                          ).replace($, '$1'),
                        n,
                        l < r && we(e.slice(l, r)),
                        r < s && we((e = e.slice(r))),
                        r < s && be(e),
                      );
                    }
                    f.push(n);
                  }
                return xe(f);
              }
              return (
                (ye.prototype = i.filters = i.pseudos),
                (i.setFilters = new ye()),
                (o = ae.tokenize =
                  function (e, t) {
                    var n,
                      r,
                      s,
                      o,
                      a,
                      l,
                      u,
                      c = C[e + ' '];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, l = [], u = i.preFilter; a; ) {
                      for (o in ((n && !(r = z.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a),
                        l.push((s = []))),
                      (n = !1),
                      (r = U.exec(a)) &&
                        ((n = r.shift()),
                        s.push({ value: n, type: r[0].replace($, ' ') }),
                        (a = a.slice(n.length))),
                      i.filter))
                        !(r = G[o].exec(a)) ||
                          (u[o] && !(r = u[o](r))) ||
                          ((n = r.shift()),
                          s.push({ value: n, type: o, matches: r }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      s = [],
                      a = A[e + ' '];
                    if (!a) {
                      for (t || (t = o(e)), n = t.length; n--; )
                        (a = we(t[n]))[S] ? r.push(a) : s.push(a);
                      (a = A(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            r = e.length > 0,
                            s = function (s, o, a, l, c) {
                              var d,
                                p,
                                v,
                                g = 0,
                                y = '0',
                                b = s && [],
                                S = [],
                                x = u,
                                _ = s || (r && i.find.TAG('*', c)),
                                w = (T += null == x ? 1 : Math.random() || 0.1),
                                C = _.length;
                              for (
                                c && (u = o == h || o || c);
                                y !== C && null != (d = _[y]);
                                y++
                              ) {
                                if (r && d) {
                                  for (
                                    p = 0,
                                      o ||
                                        d.ownerDocument == h ||
                                        (f(d), (a = !m));
                                    (v = e[p++]);

                                  )
                                    if (v(d, o || h, a)) {
                                      l.push(d);
                                      break;
                                    }
                                  c && (T = w);
                                }
                                n && ((d = !v && d) && g--, s && b.push(d));
                              }
                              if (((g += y), n && y !== g)) {
                                for (p = 0; (v = t[p++]); ) v(b, S, o, a);
                                if (s) {
                                  if (g > 0)
                                    for (; y--; )
                                      b[y] || S[y] || (S[y] = O.call(l));
                                  S = Te(S);
                                }
                                F.apply(l, S),
                                  c &&
                                    !s &&
                                    S.length > 0 &&
                                    g + t.length > 1 &&
                                    ae.uniqueSort(l);
                              }
                              return c && ((T = w), (u = x)), b;
                            };
                          return n ? ue(s) : s;
                        })(s, r),
                      )),
                        (a.selector = e);
                    }
                    return a;
                  }),
                (l = ae.select =
                  function (e, t, n, r) {
                    var s,
                      l,
                      u,
                      c,
                      d,
                      f = 'function' == typeof e && e,
                      h = !r && o((e = f.selector || e));
                    if (((n = n || []), 1 === h.length)) {
                      if (
                        (l = h[0] = h[0].slice(0)).length > 2 &&
                        'ID' === (u = l[0]).type &&
                        9 === t.nodeType &&
                        m &&
                        i.relative[l[1].type]
                      ) {
                        if (
                          !(t = (i.find.ID(u.matches[0].replace(te, ne), t) ||
                            [])[0])
                        )
                          return n;
                        f && (t = t.parentNode),
                          (e = e.slice(l.shift().value.length));
                      }
                      for (
                        s = G.needsContext.test(e) ? 0 : l.length;
                        s-- && ((u = l[s]), !i.relative[(c = u.type)]);

                      )
                        if (
                          (d = i.find[c]) &&
                          (r = d(
                            u.matches[0].replace(te, ne),
                            (ee.test(l[0].type) && ge(t.parentNode)) || t,
                          ))
                        ) {
                          if ((l.splice(s, 1), !(e = r.length && be(l))))
                            return F.apply(n, r), n;
                          break;
                        }
                    }
                    return (
                      (f || a(e, h))(
                        r,
                        t,
                        !m,
                        n,
                        !t || (ee.test(e) && ge(t.parentNode)) || t,
                      ),
                      n
                    );
                  }),
                (n.sortStable = S.split('').sort(L).join('') === S),
                (n.detectDuplicates = !!d),
                f(),
                (n.sortDetached = ce(function (e) {
                  return (
                    1 & e.compareDocumentPosition(h.createElement('fieldset'))
                  );
                })),
                ce(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    '#' === e.firstChild.getAttribute('href')
                  );
                }) ||
                  de('type|href|height|width', function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        'type' === t.toLowerCase() ? 1 : 2,
                      );
                  }),
                (n.attributes &&
                  ce(function (e) {
                    return (
                      (e.innerHTML = '<input/>'),
                      e.firstChild.setAttribute('value', ''),
                      '' === e.firstChild.getAttribute('value')
                    );
                  })) ||
                  de('value', function (e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                ce(function (e) {
                  return null == e.getAttribute('disabled');
                }) ||
                  de(j, function (e, t, n) {
                    var i;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (i = e.getAttributeNode(t)) && i.specified
                        ? i.value
                        : null;
                  }),
                ae
              );
            })(i);
            (w.find = A),
              (w.expr = A.selectors),
              (w.expr[':'] = w.expr.pseudos),
              (w.uniqueSort = w.unique = A.uniqueSort),
              (w.text = A.getText),
              (w.isXMLDoc = A.isXML),
              (w.contains = A.contains),
              (w.escapeSelector = A.escape);
            var E = function (e, t, n) {
                for (
                  var i = [], r = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (r && w(e).is(n)) break;
                    i.push(e);
                  }
                return i;
              },
              L = function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
              M = w.expr.match.needsContext;
            function D(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var O =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function k(e, t, n) {
              return g(t)
                ? w.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n;
                  })
                : t.nodeType
                ? w.grep(e, function (e) {
                    return (e === t) !== n;
                  })
                : 'string' != typeof t
                ? w.grep(e, function (e) {
                    return c.call(t, e) > -1 !== n;
                  })
                : w.filter(t, e, n);
            }
            (w.filter = function (e, t, n) {
              var i = t[0];
              return (
                n && (e = ':not(' + e + ')'),
                1 === t.length && 1 === i.nodeType
                  ? w.find.matchesSelector(i, e)
                    ? [i]
                    : []
                  : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                        return 1 === e.nodeType;
                      }),
                    )
              );
            }),
              w.fn.extend({
                find: function (e) {
                  var t,
                    n,
                    i = this.length,
                    r = this;
                  if ('string' != typeof e)
                    return this.pushStack(
                      w(e).filter(function () {
                        for (t = 0; t < i; t++)
                          if (w.contains(r[t], this)) return !0;
                      }),
                    );
                  for (n = this.pushStack([]), t = 0; t < i; t++)
                    w.find(e, r[t], n);
                  return i > 1 ? w.uniqueSort(n) : n;
                },
                filter: function (e) {
                  return this.pushStack(k(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(k(this, e || [], !0));
                },
                is: function (e) {
                  return !!k(
                    this,
                    'string' == typeof e && M.test(e) ? w(e) : e || [],
                    !1,
                  ).length;
                },
              });
            var F,
              P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((w.fn.init = function (e, t, n) {
              var i, r;
              if (!e) return this;
              if (((n = n || F), 'string' == typeof e)) {
                if (
                  !(i =
                    '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                      ? [null, e, null]
                      : P.exec(e)) ||
                  (!i[1] && t)
                )
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
                if (i[1]) {
                  if (
                    ((t = t instanceof w ? t[0] : t),
                    w.merge(
                      this,
                      w.parseHTML(
                        i[1],
                        t && t.nodeType ? t.ownerDocument || t : b,
                        !0,
                      ),
                    ),
                    O.test(i[1]) && w.isPlainObject(t))
                  )
                    for (i in t)
                      g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                  return this;
                }
                return (
                  (r = b.getElementById(i[2])) &&
                    ((this[0] = r), (this.length = 1)),
                  this
                );
              }
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : g(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(w)
                : w.makeArray(e, this);
            }).prototype = w.fn),
              (F = w(b));
            var N = /^(?:parents|prev(?:Until|All))/,
              j = { children: !0, contents: !0, next: !0, prev: !0 };
            function I(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            w.fn.extend({
              has: function (e) {
                var t = w(e, this),
                  n = t.length;
                return this.filter(function () {
                  for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0;
                });
              },
              closest: function (e, t) {
                var n,
                  i = 0,
                  r = this.length,
                  s = [],
                  o = 'string' != typeof e && w(e);
                if (!M.test(e))
                  for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (o
                          ? o.index(n) > -1
                          : 1 === n.nodeType && w.find.matchesSelector(n, e))
                      ) {
                        s.push(n);
                        break;
                      }
                return this.pushStack(s.length > 1 ? w.uniqueSort(s) : s);
              },
              index: function (e) {
                return e
                  ? 'string' == typeof e
                    ? c.call(w(e), this[0])
                    : c.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (e, t) {
                return this.pushStack(
                  w.uniqueSort(w.merge(this.get(), w(e, t))),
                );
              },
              addBack: function (e) {
                return this.add(
                  null == e ? this.prevObject : this.prevObject.filter(e),
                );
              },
            }),
              w.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return E(e, 'parentNode');
                  },
                  parentsUntil: function (e, t, n) {
                    return E(e, 'parentNode', n);
                  },
                  next: function (e) {
                    return I(e, 'nextSibling');
                  },
                  prev: function (e) {
                    return I(e, 'previousSibling');
                  },
                  nextAll: function (e) {
                    return E(e, 'nextSibling');
                  },
                  prevAll: function (e) {
                    return E(e, 'previousSibling');
                  },
                  nextUntil: function (e, t, n) {
                    return E(e, 'nextSibling', n);
                  },
                  prevUntil: function (e, t, n) {
                    return E(e, 'previousSibling', n);
                  },
                  siblings: function (e) {
                    return L((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return L(e.firstChild);
                  },
                  contents: function (e) {
                    return null != e.contentDocument && o(e.contentDocument)
                      ? e.contentDocument
                      : (D(e, 'template') && (e = e.content || e),
                        w.merge([], e.childNodes));
                  },
                },
                function (e, t) {
                  w.fn[e] = function (n, i) {
                    var r = w.map(this, t, n);
                    return (
                      'Until' !== e.slice(-5) && (i = n),
                      i && 'string' == typeof i && (r = w.filter(i, r)),
                      this.length > 1 &&
                        (j[e] || w.uniqueSort(r), N.test(e) && r.reverse()),
                      this.pushStack(r)
                    );
                  };
                },
              );
            var R = /[^\x20\t\r\n\f]+/g;
            function V(e) {
              return e;
            }
            function H(e) {
              throw e;
            }
            function q(e, t, n, i) {
              var r;
              try {
                e && g((r = e.promise))
                  ? r.call(e).done(t).fail(n)
                  : e && g((r = e.then))
                  ? r.call(e, t, n)
                  : t.apply(void 0, [e].slice(i));
              } catch (e) {
                n.apply(void 0, [e]);
              }
            }
            (w.Callbacks = function (e) {
              e =
                'string' == typeof e
                  ? (function (e) {
                      var t = {};
                      return (
                        w.each(e.match(R) || [], function (e, n) {
                          t[n] = !0;
                        }),
                        t
                      );
                    })(e)
                  : w.extend({}, e);
              var t,
                n,
                i,
                r,
                s = [],
                o = [],
                a = -1,
                l = function () {
                  for (r = r || e.once, i = t = !0; o.length; a = -1)
                    for (n = o.shift(); ++a < s.length; )
                      !1 === s[a].apply(n[0], n[1]) &&
                        e.stopOnFalse &&
                        ((a = s.length), (n = !1));
                  e.memory || (n = !1), (t = !1), r && (s = n ? [] : '');
                },
                u = {
                  add: function () {
                    return (
                      s &&
                        (n && !t && ((a = s.length - 1), o.push(n)),
                        (function t(n) {
                          w.each(n, function (n, i) {
                            g(i)
                              ? (e.unique && u.has(i)) || s.push(i)
                              : i && i.length && 'string' !== T(i) && t(i);
                          });
                        })(arguments),
                        n && !t && l()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      w.each(arguments, function (e, t) {
                        for (var n; (n = w.inArray(t, s, n)) > -1; )
                          s.splice(n, 1), n <= a && a--;
                      }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? w.inArray(e, s) > -1 : s.length > 0;
                  },
                  empty: function () {
                    return s && (s = []), this;
                  },
                  disable: function () {
                    return (r = o = []), (s = n = ''), this;
                  },
                  disabled: function () {
                    return !s;
                  },
                  lock: function () {
                    return (r = o = []), n || t || (s = n = ''), this;
                  },
                  locked: function () {
                    return !!r;
                  },
                  fireWith: function (e, n) {
                    return (
                      r ||
                        ((n = [e, (n = n || []).slice ? n.slice() : n]),
                        o.push(n),
                        t || l()),
                      this
                    );
                  },
                  fire: function () {
                    return u.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!i;
                  },
                };
              return u;
            }),
              w.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        'notify',
                        'progress',
                        w.Callbacks('memory'),
                        w.Callbacks('memory'),
                        2,
                      ],
                      [
                        'resolve',
                        'done',
                        w.Callbacks('once memory'),
                        w.Callbacks('once memory'),
                        0,
                        'resolved',
                      ],
                      [
                        'reject',
                        'fail',
                        w.Callbacks('once memory'),
                        w.Callbacks('once memory'),
                        1,
                        'rejected',
                      ],
                    ],
                    n = 'pending',
                    r = {
                      state: function () {
                        return n;
                      },
                      always: function () {
                        return s.done(arguments).fail(arguments), this;
                      },
                      catch: function (e) {
                        return r.then(null, e);
                      },
                      pipe: function () {
                        var e = arguments;
                        return w
                          .Deferred(function (n) {
                            w.each(t, function (t, i) {
                              var r = g(e[i[4]]) && e[i[4]];
                              s[i[1]](function () {
                                var e = r && r.apply(this, arguments);
                                e && g(e.promise)
                                  ? e
                                      .promise()
                                      .progress(n.notify)
                                      .done(n.resolve)
                                      .fail(n.reject)
                                  : n[i[0] + 'With'](this, r ? [e] : arguments);
                              });
                            }),
                              (e = null);
                          })
                          .promise();
                      },
                      then: function (e, n, r) {
                        var s = 0;
                        function o(e, t, n, r) {
                          return function () {
                            var a = this,
                              l = arguments,
                              u = function () {
                                var i, u;
                                if (!(e < s)) {
                                  if ((i = n.apply(a, l)) === t.promise())
                                    throw new TypeError(
                                      'Thenable self-resolution',
                                    );
                                  (u =
                                    i &&
                                    ('object' == typeof i ||
                                      'function' == typeof i) &&
                                    i.then),
                                    g(u)
                                      ? r
                                        ? u.call(
                                            i,
                                            o(s, t, V, r),
                                            o(s, t, H, r),
                                          )
                                        : (s++,
                                          u.call(
                                            i,
                                            o(s, t, V, r),
                                            o(s, t, H, r),
                                            o(s, t, V, t.notifyWith),
                                          ))
                                      : (n !== V && ((a = void 0), (l = [i])),
                                        (r || t.resolveWith)(a, l));
                                }
                              },
                              c = r
                                ? u
                                : function () {
                                    try {
                                      u();
                                    } catch (i) {
                                      w.Deferred.exceptionHook &&
                                        w.Deferred.exceptionHook(
                                          i,
                                          c.stackTrace,
                                        ),
                                        e + 1 >= s &&
                                          (n !== H && ((a = void 0), (l = [i])),
                                          t.rejectWith(a, l));
                                    }
                                  };
                            e
                              ? c()
                              : (w.Deferred.getStackHook &&
                                  (c.stackTrace = w.Deferred.getStackHook()),
                                i.setTimeout(c));
                          };
                        }
                        return w
                          .Deferred(function (i) {
                            t[0][3].add(o(0, i, g(r) ? r : V, i.notifyWith)),
                              t[1][3].add(o(0, i, g(e) ? e : V)),
                              t[2][3].add(o(0, i, g(n) ? n : H));
                          })
                          .promise();
                      },
                      promise: function (e) {
                        return null != e ? w.extend(e, r) : r;
                      },
                    },
                    s = {};
                  return (
                    w.each(t, function (e, i) {
                      var o = i[2],
                        a = i[5];
                      (r[i[1]] = o.add),
                        a &&
                          o.add(
                            function () {
                              n = a;
                            },
                            t[3 - e][2].disable,
                            t[3 - e][3].disable,
                            t[0][2].lock,
                            t[0][3].lock,
                          ),
                        o.add(i[3].fire),
                        (s[i[0]] = function () {
                          return (
                            s[i[0] + 'With'](
                              this === s ? void 0 : this,
                              arguments,
                            ),
                            this
                          );
                        }),
                        (s[i[0] + 'With'] = o.fireWith);
                    }),
                    r.promise(s),
                    e && e.call(s, s),
                    s
                  );
                },
                when: function (e) {
                  var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = a.call(arguments),
                    s = w.Deferred(),
                    o = function (e) {
                      return function (n) {
                        (i[e] = this),
                          (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                          --t || s.resolveWith(i, r);
                      };
                    };
                  if (
                    t <= 1 &&
                    (q(e, s.done(o(n)).resolve, s.reject, !t),
                    'pending' === s.state() || g(r[n] && r[n].then))
                  )
                    return s.then();
                  for (; n--; ) q(r[n], o(n), s.reject);
                  return s.promise();
                },
              });
            var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (w.Deferred.exceptionHook = function (e, t) {
              i.console &&
                i.console.warn &&
                e &&
                $.test(e.name) &&
                i.console.warn(
                  'jQuery.Deferred exception: ' + e.message,
                  e.stack,
                  t,
                );
            }),
              (w.readyException = function (e) {
                i.setTimeout(function () {
                  throw e;
                });
              });
            var z = w.Deferred();
            function U() {
              b.removeEventListener('DOMContentLoaded', U),
                i.removeEventListener('load', U),
                w.ready();
            }
            (w.fn.ready = function (e) {
              return (
                z.then(e).catch(function (e) {
                  w.readyException(e);
                }),
                this
              );
            }),
              w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                  (!0 === e ? --w.readyWait : w.isReady) ||
                    ((w.isReady = !0),
                    (!0 !== e && --w.readyWait > 0) || z.resolveWith(b, [w]));
                },
              }),
              (w.ready.then = z.then),
              'complete' === b.readyState ||
              ('loading' !== b.readyState && !b.documentElement.doScroll)
                ? i.setTimeout(w.ready)
                : (b.addEventListener('DOMContentLoaded', U),
                  i.addEventListener('load', U));
            var B = function (e, t, n, i, r, s, o) {
                var a = 0,
                  l = e.length,
                  u = null == n;
                if ('object' === T(n))
                  for (a in ((r = !0), n)) B(e, t, a, n[a], !0, s, o);
                else if (
                  void 0 !== i &&
                  ((r = !0),
                  g(i) || (o = !0),
                  u &&
                    (o
                      ? (t.call(e, i), (t = null))
                      : ((u = t),
                        (t = function (e, t, n) {
                          return u.call(w(e), n);
                        }))),
                  t)
                )
                  for (; a < l; a++)
                    t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : s;
              },
              W = /^-ms-/,
              X = /-([a-z])/g;
            function G(e, t) {
              return t.toUpperCase();
            }
            function Y(e) {
              return e.replace(W, 'ms-').replace(X, G);
            }
            var K = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Q() {
              this.expando = w.expando + Q.uid++;
            }
            (Q.uid = 1),
              (Q.prototype = {
                cache: function (e) {
                  var t = e[this.expando];
                  return (
                    t ||
                      ((t = {}),
                      K(e) &&
                        (e.nodeType
                          ? (e[this.expando] = t)
                          : Object.defineProperty(e, this.expando, {
                              value: t,
                              configurable: !0,
                            }))),
                    t
                  );
                },
                set: function (e, t, n) {
                  var i,
                    r = this.cache(e);
                  if ('string' == typeof t) r[Y(t)] = n;
                  else for (i in t) r[Y(i)] = t[i];
                  return r;
                },
                get: function (e, t) {
                  return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][Y(t)];
                },
                access: function (e, t, n) {
                  return void 0 === t ||
                    (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                  var n,
                    i = e[this.expando];
                  if (void 0 !== i) {
                    if (void 0 !== t) {
                      n = (t = Array.isArray(t)
                        ? t.map(Y)
                        : (t = Y(t)) in i
                        ? [t]
                        : t.match(R) || []).length;
                      for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(i)) &&
                      (e.nodeType
                        ? (e[this.expando] = void 0)
                        : delete e[this.expando]);
                  }
                },
                hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !w.isEmptyObject(t);
                },
              });
            var J = new Q(),
              Z = new Q(),
              ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              te = /[A-Z]/g;
            function ne(e, t, n) {
              var i;
              if (void 0 === n && 1 === e.nodeType)
                if (
                  ((i = 'data-' + t.replace(te, '-$&').toLowerCase()),
                  'string' == typeof (n = e.getAttribute(i)))
                ) {
                  try {
                    n = (function (e) {
                      return (
                        'true' === e ||
                        ('false' !== e &&
                          ('null' === e
                            ? null
                            : e === +e + ''
                            ? +e
                            : ee.test(e)
                            ? JSON.parse(e)
                            : e))
                      );
                    })(n);
                  } catch (e) {}
                  Z.set(e, t, n);
                } else n = void 0;
              return n;
            }
            w.extend({
              hasData: function (e) {
                return Z.hasData(e) || J.hasData(e);
              },
              data: function (e, t, n) {
                return Z.access(e, t, n);
              },
              removeData: function (e, t) {
                Z.remove(e, t);
              },
              _data: function (e, t, n) {
                return J.access(e, t, n);
              },
              _removeData: function (e, t) {
                J.remove(e, t);
              },
            }),
              w.fn.extend({
                data: function (e, t) {
                  var n,
                    i,
                    r,
                    s = this[0],
                    o = s && s.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((r = Z.get(s)),
                      1 === s.nodeType && !J.get(s, 'hasDataAttrs'))
                    ) {
                      for (n = o.length; n--; )
                        o[n] &&
                          0 === (i = o[n].name).indexOf('data-') &&
                          ((i = Y(i.slice(5))), ne(s, i, r[i]));
                      J.set(s, 'hasDataAttrs', !0);
                    }
                    return r;
                  }
                  return 'object' == typeof e
                    ? this.each(function () {
                        Z.set(this, e);
                      })
                    : B(
                        this,
                        function (t) {
                          var n;
                          if (s && void 0 === t)
                            return void 0 !== (n = Z.get(s, e)) ||
                              void 0 !== (n = ne(s, e))
                              ? n
                              : void 0;
                          this.each(function () {
                            Z.set(this, e, t);
                          });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0,
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    Z.remove(this, e);
                  });
                },
              }),
              w.extend({
                queue: function (e, t, n) {
                  var i;
                  if (e)
                    return (
                      (t = (t || 'fx') + 'queue'),
                      (i = J.get(e, t)),
                      n &&
                        (!i || Array.isArray(n)
                          ? (i = J.access(e, t, w.makeArray(n)))
                          : i.push(n)),
                      i || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || 'fx';
                  var n = w.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    s = w._queueHooks(e, t);
                  'inprogress' === r && ((r = n.shift()), i--),
                    r &&
                      ('fx' === t && n.unshift('inprogress'),
                      delete s.stop,
                      r.call(
                        e,
                        function () {
                          w.dequeue(e, t);
                        },
                        s,
                      )),
                    !i && s && s.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + 'queueHooks';
                  return (
                    J.get(e, n) ||
                    J.access(e, n, {
                      empty: w.Callbacks('once memory').add(function () {
                        J.remove(e, [t + 'queue', n]);
                      }),
                    })
                  );
                },
              }),
              w.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    'string' != typeof e && ((t = e), (e = 'fx'), n--),
                    arguments.length < n
                      ? w.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = w.queue(this, e, t);
                          w._queueHooks(this, e),
                            'fx' === e &&
                              'inprogress' !== n[0] &&
                              w.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    w.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || 'fx', []);
                },
                promise: function (e, t) {
                  var n,
                    i = 1,
                    r = w.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                      --i || r.resolveWith(s, [s]);
                    };
                  for (
                    'string' != typeof e && ((t = e), (e = void 0)),
                      e = e || 'fx';
                    o--;

                  )
                    (n = J.get(s[o], e + 'queueHooks')) &&
                      n.empty &&
                      (i++, n.empty.add(a));
                  return a(), r.promise(t);
                },
              });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              re = new RegExp('^(?:([+-])=|)(' + ie + ')([a-z%]*)$', 'i'),
              se = ['Top', 'Right', 'Bottom', 'Left'],
              oe = b.documentElement,
              ae = function (e) {
                return w.contains(e.ownerDocument, e);
              },
              le = { composed: !0 };
            oe.getRootNode &&
              (ae = function (e) {
                return (
                  w.contains(e.ownerDocument, e) ||
                  e.getRootNode(le) === e.ownerDocument
                );
              });
            var ue = function (e, t) {
              return (
                'none' === (e = t || e).style.display ||
                ('' === e.style.display &&
                  ae(e) &&
                  'none' === w.css(e, 'display'))
              );
            };
            function ce(e, t, n, i) {
              var r,
                s,
                o = 20,
                a = i
                  ? function () {
                      return i.cur();
                    }
                  : function () {
                      return w.css(e, t, '');
                    },
                l = a(),
                u = (n && n[3]) || (w.cssNumber[t] ? '' : 'px'),
                c =
                  e.nodeType &&
                  (w.cssNumber[t] || ('px' !== u && +l)) &&
                  re.exec(w.css(e, t));
              if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; o--; )
                  w.style(e, t, c + u),
                    (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
                    (c /= s);
                (c *= 2), w.style(e, t, c + u), (n = n || []);
              }
              return (
                n &&
                  ((c = +c || +l || 0),
                  (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                  i && ((i.unit = u), (i.start = c), (i.end = r))),
                r
              );
            }
            var de = {};
            function fe(e) {
              var t,
                n = e.ownerDocument,
                i = e.nodeName,
                r = de[i];
              return (
                r ||
                ((t = n.body.appendChild(n.createElement(i))),
                (r = w.css(t, 'display')),
                t.parentNode.removeChild(t),
                'none' === r && (r = 'block'),
                (de[i] = r),
                r)
              );
            }
            function he(e, t) {
              for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
                (i = e[s]).style &&
                  ((n = i.style.display),
                  t
                    ? ('none' === n &&
                        ((r[s] = J.get(i, 'display') || null),
                        r[s] || (i.style.display = '')),
                      '' === i.style.display && ue(i) && (r[s] = fe(i)))
                    : 'none' !== n &&
                      ((r[s] = 'none'), J.set(i, 'display', n)));
              for (s = 0; s < o; s++)
                null != r[s] && (e[s].style.display = r[s]);
              return e;
            }
            w.fn.extend({
              show: function () {
                return he(this, !0);
              },
              hide: function () {
                return he(this);
              },
              toggle: function (e) {
                return 'boolean' == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      ue(this) ? w(this).show() : w(this).hide();
                    });
              },
            });
            var pe,
              me,
              ve = /^(?:checkbox|radio)$/i,
              ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              ye = /^$|^module$|\/(?:java|ecma)script/i;
            (pe = b
              .createDocumentFragment()
              .appendChild(b.createElement('div'))),
              (me = b.createElement('input')).setAttribute('type', 'radio'),
              me.setAttribute('checked', 'checked'),
              me.setAttribute('name', 't'),
              pe.appendChild(me),
              (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (pe.innerHTML = '<textarea>x</textarea>'),
              (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
              (pe.innerHTML = '<option></option>'),
              (v.option = !!pe.lastChild);
            var be = {
              thead: [1, '<table>', '</table>'],
              col: [2, '<table><colgroup>', '</colgroup></table>'],
              tr: [2, '<table><tbody>', '</tbody></table>'],
              td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
              _default: [0, '', ''],
            };
            function Se(e, t) {
              var n;
              return (
                (n =
                  void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || '*')
                    : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || '*')
                    : []),
                void 0 === t || (t && D(e, t)) ? w.merge([e], n) : n
              );
            }
            function xe(e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
            }
            (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
              (be.th = be.td),
              v.option ||
                (be.optgroup = be.option =
                  [1, "<select multiple='multiple'>", '</select>']);
            var Te = /<|&#?\w+;/;
            function _e(e, t, n, i, r) {
              for (
                var s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  d = t.createDocumentFragment(),
                  f = [],
                  h = 0,
                  p = e.length;
                h < p;
                h++
              )
                if ((s = e[h]) || 0 === s)
                  if ('object' === T(s)) w.merge(f, s.nodeType ? [s] : s);
                  else if (Te.test(s)) {
                    for (
                      o = o || d.appendChild(t.createElement('div')),
                        a = (ge.exec(s) || ['', ''])[1].toLowerCase(),
                        l = be[a] || be._default,
                        o.innerHTML = l[1] + w.htmlPrefilter(s) + l[2],
                        c = l[0];
                      c--;

                    )
                      o = o.lastChild;
                    w.merge(f, o.childNodes),
                      ((o = d.firstChild).textContent = '');
                  } else f.push(t.createTextNode(s));
              for (d.textContent = '', h = 0; (s = f[h++]); )
                if (i && w.inArray(s, i) > -1) r && r.push(s);
                else if (
                  ((u = ae(s)),
                  (o = Se(d.appendChild(s), 'script')),
                  u && xe(o),
                  n)
                )
                  for (c = 0; (s = o[c++]); )
                    ye.test(s.type || '') && n.push(s);
              return d;
            }
            var we = /^([^.]*)(?:\.(.+)|)/;
            function Ce() {
              return !0;
            }
            function Ae() {
              return !1;
            }
            function Ee(e, t) {
              return (
                (e ===
                  (function () {
                    try {
                      return b.activeElement;
                    } catch (e) {}
                  })()) ==
                ('focus' === t)
              );
            }
            function Le(e, t, n, i, r, s) {
              var o, a;
              if ('object' == typeof t) {
                for (a in ('string' != typeof n && ((i = i || n), (n = void 0)),
                t))
                  Le(e, a, n, i, t[a], s);
                return e;
              }
              if (
                (null == i && null == r
                  ? ((r = n), (i = n = void 0))
                  : null == r &&
                    ('string' == typeof n
                      ? ((r = i), (i = void 0))
                      : ((r = i), (i = n), (n = void 0))),
                !1 === r)
              )
                r = Ae;
              else if (!r) return e;
              return (
                1 === s &&
                  ((o = r),
                  (r = function (e) {
                    return w().off(e), o.apply(this, arguments);
                  }),
                  (r.guid = o.guid || (o.guid = w.guid++))),
                e.each(function () {
                  w.event.add(this, t, r, i, n);
                })
              );
            }
            function Me(e, t, n) {
              n
                ? (J.set(e, t, !1),
                  w.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                      var i,
                        r,
                        s = J.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                        if (s.length)
                          (w.event.special[t] || {}).delegateType &&
                            e.stopPropagation();
                        else if (
                          ((s = a.call(arguments)),
                          J.set(this, t, s),
                          (i = n(this, t)),
                          this[t](),
                          s !== (r = J.get(this, t)) || i
                            ? J.set(this, t, !1)
                            : (r = {}),
                          s !== r)
                        )
                          return (
                            e.stopImmediatePropagation(),
                            e.preventDefault(),
                            r && r.value
                          );
                      } else
                        s.length &&
                          (J.set(this, t, {
                            value: w.event.trigger(
                              w.extend(s[0], w.Event.prototype),
                              s.slice(1),
                              this,
                            ),
                          }),
                          e.stopImmediatePropagation());
                    },
                  }))
                : void 0 === J.get(e, t) && w.event.add(e, t, Ce);
            }
            (w.event = {
              global: {},
              add: function (e, t, n, i, r) {
                var s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  d,
                  f,
                  h,
                  p,
                  m,
                  v = J.get(e);
                if (K(e))
                  for (
                    n.handler && ((n = (s = n).handler), (r = s.selector)),
                      r && w.find.matchesSelector(oe, r),
                      n.guid || (n.guid = w.guid++),
                      (l = v.events) || (l = v.events = Object.create(null)),
                      (o = v.handle) ||
                        (o = v.handle =
                          function (t) {
                            return void 0 !== w && w.event.triggered !== t.type
                              ? w.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      u = (t = (t || '').match(R) || ['']).length;
                    u--;

                  )
                    (h = m = (a = we.exec(t[u]) || [])[1]),
                      (p = (a[2] || '').split('.').sort()),
                      h &&
                        ((d = w.event.special[h] || {}),
                        (h = (r ? d.delegateType : d.bindType) || h),
                        (d = w.event.special[h] || {}),
                        (c = w.extend(
                          {
                            type: h,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext:
                              r && w.expr.match.needsContext.test(r),
                            namespace: p.join('.'),
                          },
                          s,
                        )),
                        (f = l[h]) ||
                          (((f = l[h] = []).delegateCount = 0),
                          (d.setup && !1 !== d.setup.call(e, i, p, o)) ||
                            (e.addEventListener && e.addEventListener(h, o))),
                        d.add &&
                          (d.add.call(e, c),
                          c.handler.guid || (c.handler.guid = n.guid)),
                        r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                        (w.event.global[h] = !0));
              },
              remove: function (e, t, n, i, r) {
                var s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  d,
                  f,
                  h,
                  p,
                  m,
                  v = J.hasData(e) && J.get(e);
                if (v && (l = v.events)) {
                  for (u = (t = (t || '').match(R) || ['']).length; u--; )
                    if (
                      ((h = m = (a = we.exec(t[u]) || [])[1]),
                      (p = (a[2] || '').split('.').sort()),
                      h)
                    ) {
                      for (
                        d = w.event.special[h] || {},
                          f =
                            l[(h = (i ? d.delegateType : d.bindType) || h)] ||
                            [],
                          a =
                            a[2] &&
                            new RegExp(
                              '(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)',
                            ),
                          o = s = f.length;
                        s--;

                      )
                        (c = f[s]),
                          (!r && m !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (a && !a.test(c.namespace)) ||
                            (i &&
                              i !== c.selector &&
                              ('**' !== i || !c.selector)) ||
                            (f.splice(s, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                      o &&
                        !f.length &&
                        ((d.teardown &&
                          !1 !== d.teardown.call(e, p, v.handle)) ||
                          w.removeEvent(e, h, v.handle),
                        delete l[h]);
                    } else for (h in l) w.event.remove(e, h + t[u], n, i, !0);
                  w.isEmptyObject(l) && J.remove(e, 'handle events');
                }
              },
              dispatch: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a = new Array(arguments.length),
                  l = w.event.fix(e),
                  u =
                    (J.get(this, 'events') || Object.create(null))[l.type] ||
                    [],
                  c = w.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++)
                  a[t] = arguments[t];
                if (
                  ((l.delegateTarget = this),
                  !c.preDispatch || !1 !== c.preDispatch.call(this, l))
                ) {
                  for (
                    o = w.event.handlers.call(this, l, u), t = 0;
                    (r = o[t++]) && !l.isPropagationStopped();

                  )
                    for (
                      l.currentTarget = r.elem, n = 0;
                      (s = r.handlers[n++]) &&
                      !l.isImmediatePropagationStopped();

                    )
                      (l.rnamespace &&
                        !1 !== s.namespace &&
                        !l.rnamespace.test(s.namespace)) ||
                        ((l.handleObj = s),
                        (l.data = s.data),
                        void 0 !==
                          (i = (
                            (w.event.special[s.origType] || {}).handle ||
                            s.handler
                          ).apply(r.elem, a)) &&
                          !1 === (l.result = i) &&
                          (l.preventDefault(), l.stopPropagation()));
                  return (
                    c.postDispatch && c.postDispatch.call(this, l), l.result
                  );
                }
              },
              handlers: function (e, t) {
                var n,
                  i,
                  r,
                  s,
                  o,
                  a = [],
                  l = t.delegateCount,
                  u = e.target;
                if (l && u.nodeType && !('click' === e.type && e.button >= 1))
                  for (; u !== this; u = u.parentNode || this)
                    if (
                      1 === u.nodeType &&
                      ('click' !== e.type || !0 !== u.disabled)
                    ) {
                      for (s = [], o = {}, n = 0; n < l; n++)
                        void 0 === o[(r = (i = t[n]).selector + ' ')] &&
                          (o[r] = i.needsContext
                            ? w(r, this).index(u) > -1
                            : w.find(r, this, null, [u]).length),
                          o[r] && s.push(i);
                      s.length && a.push({ elem: u, handlers: s });
                    }
                return (
                  (u = this),
                  l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                  a
                );
              },
              addProp: function (e, t) {
                Object.defineProperty(w.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: g(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                      },
                  set: function (t) {
                    Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t,
                    });
                  },
                });
              },
              fix: function (e) {
                return e[w.expando] ? e : new w.Event(e);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (e) {
                    var t = this || e;
                    return (
                      ve.test(t.type) &&
                        t.click &&
                        D(t, 'input') &&
                        Me(t, 'click', Ce),
                      !1
                    );
                  },
                  trigger: function (e) {
                    var t = this || e;
                    return (
                      ve.test(t.type) &&
                        t.click &&
                        D(t, 'input') &&
                        Me(t, 'click'),
                      !0
                    );
                  },
                  _default: function (e) {
                    var t = e.target;
                    return (
                      (ve.test(t.type) &&
                        t.click &&
                        D(t, 'input') &&
                        J.get(t, 'click')) ||
                      D(t, 'a')
                    );
                  },
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result &&
                      e.originalEvent &&
                      (e.originalEvent.returnValue = e.result);
                  },
                },
              },
            }),
              (w.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
              }),
              (w.Event = function (e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? Ce
                        : Ae),
                    (this.target =
                      e.target && 3 === e.target.nodeType
                        ? e.target.parentNode
                        : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && w.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[w.expando] = !0);
              }),
              (w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = Ce),
                    e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = Ce),
                    e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = Ce),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
                },
              }),
              w.each(
                {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: !0,
                },
                w.event.addProp,
              ),
              w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                w.event.special[e] = {
                  setup: function () {
                    return Me(this, e, Ee), !1;
                  },
                  trigger: function () {
                    return Me(this, e), !0;
                  },
                  _default: function () {
                    return !0;
                  },
                  delegateType: t,
                };
              }),
              w.each(
                {
                  mouseenter: 'mouseover',
                  mouseleave: 'mouseout',
                  pointerenter: 'pointerover',
                  pointerleave: 'pointerout',
                },
                function (e, t) {
                  w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        i = this,
                        r = e.relatedTarget,
                        s = e.handleObj;
                      return (
                        (r && (r === i || w.contains(i, r))) ||
                          ((e.type = s.origType),
                          (n = s.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                },
              ),
              w.fn.extend({
                on: function (e, t, n, i) {
                  return Le(this, e, t, n, i);
                },
                one: function (e, t, n, i) {
                  return Le(this, e, t, n, i, 1);
                },
                off: function (e, t, n) {
                  var i, r;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (i = e.handleObj),
                      w(e.delegateTarget).off(
                        i.namespace
                          ? i.origType + '.' + i.namespace
                          : i.origType,
                        i.selector,
                        i.handler,
                      ),
                      this
                    );
                  if ('object' == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                  }
                  return (
                    (!1 !== t && 'function' != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = Ae),
                    this.each(function () {
                      w.event.remove(this, e, n, t);
                    })
                  );
                },
              });
            var De = /<script|<style|<link/i,
              Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
              ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Fe(e, t) {
              return (
                (D(e, 'table') &&
                  D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                  w(e).children('tbody')[0]) ||
                e
              );
            }
            function Pe(e) {
              return (
                (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
              );
            }
            function Ne(e) {
              return (
                'true/' === (e.type || '').slice(0, 5)
                  ? (e.type = e.type.slice(5))
                  : e.removeAttribute('type'),
                e
              );
            }
            function je(e, t) {
              var n, i, r, s, o, a;
              if (1 === t.nodeType) {
                if (J.hasData(e) && (a = J.get(e).events))
                  for (r in (J.remove(t, 'handle events'), a))
                    for (n = 0, i = a[r].length; n < i; n++)
                      w.event.add(t, r, a[r][n]);
                Z.hasData(e) &&
                  ((s = Z.access(e)), (o = w.extend({}, s)), Z.set(t, o));
              }
            }
            function Ie(e, t) {
              var n = t.nodeName.toLowerCase();
              'input' === n && ve.test(e.type)
                ? (t.checked = e.checked)
                : ('input' !== n && 'textarea' !== n) ||
                  (t.defaultValue = e.defaultValue);
            }
            function Re(e, t, n, i) {
              t = l(t);
              var r,
                s,
                o,
                a,
                u,
                c,
                d = 0,
                f = e.length,
                h = f - 1,
                p = t[0],
                m = g(p);
              if (
                m ||
                (f > 1 && 'string' == typeof p && !v.checkClone && Oe.test(p))
              )
                return e.each(function (r) {
                  var s = e.eq(r);
                  m && (t[0] = p.call(this, r, s.html())), Re(s, t, n, i);
                });
              if (
                f &&
                ((s = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild),
                1 === r.childNodes.length && (r = s),
                s || i)
              ) {
                for (a = (o = w.map(Se(r, 'script'), Pe)).length; d < f; d++)
                  (u = r),
                    d !== h &&
                      ((u = w.clone(u, !0, !0)),
                      a && w.merge(o, Se(u, 'script'))),
                    n.call(e[d], u, d);
                if (a)
                  for (
                    c = o[o.length - 1].ownerDocument, w.map(o, Ne), d = 0;
                    d < a;
                    d++
                  )
                    (u = o[d]),
                      ye.test(u.type || '') &&
                        !J.access(u, 'globalEval') &&
                        w.contains(c, u) &&
                        (u.src && 'module' !== (u.type || '').toLowerCase()
                          ? w._evalUrl &&
                            !u.noModule &&
                            w._evalUrl(
                              u.src,
                              { nonce: u.nonce || u.getAttribute('nonce') },
                              c,
                            )
                          : x(u.textContent.replace(ke, ''), u, c));
              }
              return e;
            }
            function Ve(e, t, n) {
              for (
                var i, r = t ? w.filter(t, e) : e, s = 0;
                null != (i = r[s]);
                s++
              )
                n || 1 !== i.nodeType || w.cleanData(Se(i)),
                  i.parentNode &&
                    (n && ae(i) && xe(Se(i, 'script')),
                    i.parentNode.removeChild(i));
              return e;
            }
            w.extend({
              htmlPrefilter: function (e) {
                return e;
              },
              clone: function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a = e.cloneNode(!0),
                  l = ae(e);
                if (
                  !(
                    v.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    w.isXMLDoc(e)
                  )
                )
                  for (o = Se(a), i = 0, r = (s = Se(e)).length; i < r; i++)
                    Ie(s[i], o[i]);
                if (t)
                  if (n)
                    for (
                      s = s || Se(e), o = o || Se(a), i = 0, r = s.length;
                      i < r;
                      i++
                    )
                      je(s[i], o[i]);
                  else je(e, a);
                return (
                  (o = Se(a, 'script')).length > 0 &&
                    xe(o, !l && Se(e, 'script')),
                  a
                );
              },
              cleanData: function (e) {
                for (
                  var t, n, i, r = w.event.special, s = 0;
                  void 0 !== (n = e[s]);
                  s++
                )
                  if (K(n)) {
                    if ((t = n[J.expando])) {
                      if (t.events)
                        for (i in t.events)
                          r[i]
                            ? w.event.remove(n, i)
                            : w.removeEvent(n, i, t.handle);
                      n[J.expando] = void 0;
                    }
                    n[Z.expando] && (n[Z.expando] = void 0);
                  }
              },
            }),
              w.fn.extend({
                detach: function (e) {
                  return Ve(this, e, !0);
                },
                remove: function (e) {
                  return Ve(this, e);
                },
                text: function (e) {
                  return B(
                    this,
                    function (e) {
                      return void 0 === e
                        ? w.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType &&
                              11 !== this.nodeType &&
                              9 !== this.nodeType) ||
                              (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length,
                  );
                },
                append: function () {
                  return Re(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      Fe(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return Re(this, arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = Fe(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return Re(this, arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (w.cleanData(Se(e, !1)), (e.textContent = ''));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return w.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return B(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        n = 0,
                        i = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if (
                        'string' == typeof e &&
                        !De.test(e) &&
                        !be[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                      ) {
                        e = w.htmlPrefilter(e);
                        try {
                          for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (w.cleanData(Se(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length,
                  );
                },
                replaceWith: function () {
                  var e = [];
                  return Re(
                    this,
                    arguments,
                    function (t) {
                      var n = this.parentNode;
                      w.inArray(this, e) < 0 &&
                        (w.cleanData(Se(this)), n && n.replaceChild(t, this));
                    },
                    e,
                  );
                },
              }),
              w.each(
                {
                  appendTo: 'append',
                  prependTo: 'prepend',
                  insertBefore: 'before',
                  insertAfter: 'after',
                  replaceAll: 'replaceWith',
                },
                function (e, t) {
                  w.fn[e] = function (e) {
                    for (
                      var n, i = [], r = w(e), s = r.length - 1, o = 0;
                      o <= s;
                      o++
                    )
                      (n = o === s ? this : this.clone(!0)),
                        w(r[o])[t](n),
                        u.apply(i, n.get());
                    return this.pushStack(i);
                  };
                },
              );
            var He = new RegExp('^(' + ie + ')(?!px)[a-z%]+$', 'i'),
              qe = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = i), t.getComputedStyle(e);
              },
              $e = function (e, t, n) {
                var i,
                  r,
                  s = {};
                for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
                for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
                return i;
              },
              ze = new RegExp(se.join('|'), 'i');
            function Ue(e, t, n) {
              var i,
                r,
                s,
                o,
                a = e.style;
              return (
                (n = n || qe(e)) &&
                  ('' !== (o = n.getPropertyValue(t) || n[t]) ||
                    ae(e) ||
                    (o = w.style(e, t)),
                  !v.pixelBoxStyles() &&
                    He.test(o) &&
                    ze.test(t) &&
                    ((i = a.width),
                    (r = a.minWidth),
                    (s = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = o),
                    (o = n.width),
                    (a.width = i),
                    (a.minWidth = r),
                    (a.maxWidth = s))),
                void 0 !== o ? o + '' : o
              );
            }
            function Be(e, t) {
              return {
                get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
                },
              };
            }
            !(function () {
              function e() {
                if (c) {
                  (u.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (c.style.cssText =
                      'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    oe.appendChild(u).appendChild(c);
                  var e = i.getComputedStyle(c);
                  (n = '1%' !== e.top),
                    (l = 12 === t(e.marginLeft)),
                    (c.style.right = '60%'),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (c.style.position = 'absolute'),
                    (s = 12 === t(c.offsetWidth / 3)),
                    oe.removeChild(u),
                    (c = null);
                }
              }
              function t(e) {
                return Math.round(parseFloat(e));
              }
              var n,
                r,
                s,
                o,
                a,
                l,
                u = b.createElement('div'),
                c = b.createElement('div');
              c.style &&
                ((c.style.backgroundClip = 'content-box'),
                (c.cloneNode(!0).style.backgroundClip = ''),
                (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
                w.extend(v, {
                  boxSizingReliable: function () {
                    return e(), r;
                  },
                  pixelBoxStyles: function () {
                    return e(), o;
                  },
                  pixelPosition: function () {
                    return e(), n;
                  },
                  reliableMarginLeft: function () {
                    return e(), l;
                  },
                  scrollboxSize: function () {
                    return e(), s;
                  },
                  reliableTrDimensions: function () {
                    var e, t, n, r;
                    return (
                      null == a &&
                        ((e = b.createElement('table')),
                        (t = b.createElement('tr')),
                        (n = b.createElement('div')),
                        (e.style.cssText =
                          'position:absolute;left:-11111px;border-collapse:separate'),
                        (t.style.cssText = 'border:1px solid'),
                        (t.style.height = '1px'),
                        (n.style.height = '9px'),
                        (n.style.display = 'block'),
                        oe.appendChild(e).appendChild(t).appendChild(n),
                        (r = i.getComputedStyle(t)),
                        (a =
                          parseInt(r.height, 10) +
                            parseInt(r.borderTopWidth, 10) +
                            parseInt(r.borderBottomWidth, 10) ===
                          t.offsetHeight),
                        oe.removeChild(e)),
                      a
                    );
                  },
                }));
            })();
            var We = ['Webkit', 'Moz', 'ms'],
              Xe = b.createElement('div').style,
              Ge = {};
            function Ye(e) {
              return (
                w.cssProps[e] ||
                Ge[e] ||
                (e in Xe
                  ? e
                  : (Ge[e] =
                      (function (e) {
                        for (
                          var t = e[0].toUpperCase() + e.slice(1),
                            n = We.length;
                          n--;

                        )
                          if ((e = We[n] + t) in Xe) return e;
                      })(e) || e))
              );
            }
            var Ke = /^(none|table(?!-c[ea]).+)/,
              Qe = /^--/,
              Je = {
                position: 'absolute',
                visibility: 'hidden',
                display: 'block',
              },
              Ze = { letterSpacing: '0', fontWeight: '400' };
            function et(e, t, n) {
              var i = re.exec(t);
              return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
            }
            function tt(e, t, n, i, r, s) {
              var o = 'width' === t ? 1 : 0,
                a = 0,
                l = 0;
              if (n === (i ? 'border' : 'content')) return 0;
              for (; o < 4; o += 2)
                'margin' === n && (l += w.css(e, n + se[o], !0, r)),
                  i
                    ? ('content' === n &&
                        (l -= w.css(e, 'padding' + se[o], !0, r)),
                      'margin' !== n &&
                        (l -= w.css(e, 'border' + se[o] + 'Width', !0, r)))
                    : ((l += w.css(e, 'padding' + se[o], !0, r)),
                      'padding' !== n
                        ? (l += w.css(e, 'border' + se[o] + 'Width', !0, r))
                        : (a += w.css(e, 'border' + se[o] + 'Width', !0, r)));
              return (
                !i &&
                  s >= 0 &&
                  (l +=
                    Math.max(
                      0,
                      Math.ceil(
                        e['offset' + t[0].toUpperCase() + t.slice(1)] -
                          s -
                          l -
                          a -
                          0.5,
                      ),
                    ) || 0),
                l
              );
            }
            function nt(e, t, n) {
              var i = qe(e),
                r =
                  (!v.boxSizingReliable() || n) &&
                  'border-box' === w.css(e, 'boxSizing', !1, i),
                s = r,
                o = Ue(e, t, i),
                a = 'offset' + t[0].toUpperCase() + t.slice(1);
              if (He.test(o)) {
                if (!n) return o;
                o = 'auto';
              }
              return (
                ((!v.boxSizingReliable() && r) ||
                  (!v.reliableTrDimensions() && D(e, 'tr')) ||
                  'auto' === o ||
                  (!parseFloat(o) &&
                    'inline' === w.css(e, 'display', !1, i))) &&
                  e.getClientRects().length &&
                  ((r = 'border-box' === w.css(e, 'boxSizing', !1, i)),
                  (s = a in e) && (o = e[a])),
                (o = parseFloat(o) || 0) +
                  tt(e, t, n || (r ? 'border' : 'content'), s, i, o) +
                  'px'
              );
            }
            function it(e, t, n, i, r) {
              return new it.prototype.init(e, t, n, i, r);
            }
            w.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = Ue(e, 'opacity');
                      return '' === n ? '1' : n;
                    }
                  },
                },
              },
              cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
              },
              cssProps: {},
              style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var r,
                    s,
                    o,
                    a = Y(t),
                    l = Qe.test(t),
                    u = e.style;
                  if (
                    (l || (t = Ye(a)),
                    (o = w.cssHooks[t] || w.cssHooks[a]),
                    void 0 === n)
                  )
                    return o && 'get' in o && void 0 !== (r = o.get(e, !1, i))
                      ? r
                      : u[t];
                  'string' == (s = typeof n) &&
                    (r = re.exec(n)) &&
                    r[1] &&
                    ((n = ce(e, t, r)), (s = 'number')),
                    null != n &&
                      n == n &&
                      ('number' !== s ||
                        l ||
                        (n += (r && r[3]) || (w.cssNumber[a] ? '' : 'px')),
                      v.clearCloneStyle ||
                        '' !== n ||
                        0 !== t.indexOf('background') ||
                        (u[t] = 'inherit'),
                      (o && 'set' in o && void 0 === (n = o.set(e, n, i))) ||
                        (l ? u.setProperty(t, n) : (u[t] = n)));
                }
              },
              css: function (e, t, n, i) {
                var r,
                  s,
                  o,
                  a = Y(t);
                return (
                  Qe.test(t) || (t = Ye(a)),
                  (o = w.cssHooks[t] || w.cssHooks[a]) &&
                    'get' in o &&
                    (r = o.get(e, !0, n)),
                  void 0 === r && (r = Ue(e, t, i)),
                  'normal' === r && t in Ze && (r = Ze[t]),
                  '' === n || n
                    ? ((s = parseFloat(r)),
                      !0 === n || isFinite(s) ? s || 0 : r)
                    : r
                );
              },
            }),
              w.each(['height', 'width'], function (e, t) {
                w.cssHooks[t] = {
                  get: function (e, n, i) {
                    if (n)
                      return !Ke.test(w.css(e, 'display')) ||
                        (e.getClientRects().length &&
                          e.getBoundingClientRect().width)
                        ? nt(e, t, i)
                        : $e(e, Je, function () {
                            return nt(e, t, i);
                          });
                  },
                  set: function (e, n, i) {
                    var r,
                      s = qe(e),
                      o = !v.scrollboxSize() && 'absolute' === s.position,
                      a =
                        (o || i) &&
                        'border-box' === w.css(e, 'boxSizing', !1, s),
                      l = i ? tt(e, t, i, a, s) : 0;
                    return (
                      a &&
                        o &&
                        (l -= Math.ceil(
                          e['offset' + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(s[t]) -
                            tt(e, t, 'border', !1, s) -
                            0.5,
                        )),
                      l &&
                        (r = re.exec(n)) &&
                        'px' !== (r[3] || 'px') &&
                        ((e.style[t] = n), (n = w.css(e, t))),
                      et(0, n, l)
                    );
                  },
                };
              }),
              (w.cssHooks.marginLeft = Be(
                v.reliableMarginLeft,
                function (e, t) {
                  if (t)
                    return (
                      (parseFloat(Ue(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                          $e(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                          })) + 'px'
                    );
                },
              )),
              w.each(
                { margin: '', padding: '', border: 'Width' },
                function (e, t) {
                  (w.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var i = 0,
                          r = {},
                          s = 'string' == typeof n ? n.split(' ') : [n];
                        i < 4;
                        i++
                      )
                        r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                      return r;
                    },
                  }),
                    'margin' !== e && (w.cssHooks[e + t].set = et);
                },
              ),
              w.fn.extend({
                css: function (e, t) {
                  return B(
                    this,
                    function (e, t, n) {
                      var i,
                        r,
                        s = {},
                        o = 0;
                      if (Array.isArray(t)) {
                        for (i = qe(e), r = t.length; o < r; o++)
                          s[t[o]] = w.css(e, t[o], !1, i);
                        return s;
                      }
                      return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1,
                  );
                },
              }),
              (w.Tween = it),
              (it.prototype = {
                constructor: it,
                init: function (e, t, n, i, r, s) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = r || w.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = s || (w.cssNumber[n] ? '' : 'px'));
                },
                cur: function () {
                  var e = it.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : it.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = it.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t =
                          w.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration,
                          ))
                      : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : it.propHooks._default.set(this),
                    this
                  );
                },
              }),
              (it.prototype.init.prototype = it.prototype),
              (it.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                      (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                      ? e.elem[e.prop]
                      : (t = w.css(e.elem, e.prop, '')) && 'auto' !== t
                      ? t
                      : 0;
                  },
                  set: function (e) {
                    w.fx.step[e.prop]
                      ? w.fx.step[e.prop](e)
                      : 1 !== e.elem.nodeType ||
                        (!w.cssHooks[e.prop] &&
                          null == e.elem.style[Ye(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : w.style(e.elem, e.prop, e.now + e.unit);
                  },
                },
              }),
              (it.propHooks.scrollTop = it.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (w.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: 'swing',
              }),
              (w.fx = it.prototype.init),
              (w.fx.step = {});
            var rt,
              st,
              ot = /^(?:toggle|show|hide)$/,
              at = /queueHooks$/;
            function lt() {
              st &&
                (!1 === b.hidden && i.requestAnimationFrame
                  ? i.requestAnimationFrame(lt)
                  : i.setTimeout(lt, w.fx.interval),
                w.fx.tick());
            }
            function ut() {
              return (
                i.setTimeout(function () {
                  rt = void 0;
                }),
                (rt = Date.now())
              );
            }
            function ct(e, t) {
              var n,
                i = 0,
                r = { height: e };
              for (t = t ? 1 : 0; i < 4; i += 2 - t)
                r['margin' + (n = se[i])] = r['padding' + n] = e;
              return t && (r.opacity = r.width = e), r;
            }
            function dt(e, t, n) {
              for (
                var i,
                  r = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
                  s = 0,
                  o = r.length;
                s < o;
                s++
              )
                if ((i = r[s].call(n, t, e))) return i;
            }
            function ft(e, t, n) {
              var i,
                r,
                s = 0,
                o = ft.prefilters.length,
                a = w.Deferred().always(function () {
                  delete l.elem;
                }),
                l = function () {
                  if (r) return !1;
                  for (
                    var t = rt || ut(),
                      n = Math.max(0, u.startTime + u.duration - t),
                      i = 1 - (n / u.duration || 0),
                      s = 0,
                      o = u.tweens.length;
                    s < o;
                    s++
                  )
                    u.tweens[s].run(i);
                  return (
                    a.notifyWith(e, [u, i, n]),
                    i < 1 && o
                      ? n
                      : (o || a.notifyWith(e, [u, 1, 0]),
                        a.resolveWith(e, [u]),
                        !1)
                  );
                },
                u = a.promise({
                  elem: e,
                  props: w.extend({}, t),
                  opts: w.extend(
                    !0,
                    { specialEasing: {}, easing: w.easing._default },
                    n,
                  ),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: rt || ut(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var i = w.Tween(
                      e,
                      u.opts,
                      t,
                      n,
                      u.opts.specialEasing[t] || u.opts.easing,
                    );
                    return u.tweens.push(i), i;
                  },
                  stop: function (t) {
                    var n = 0,
                      i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return (
                      t
                        ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                        : a.rejectWith(e, [u, t]),
                      this
                    );
                  },
                }),
                c = u.props;
              for (
                (function (e, t) {
                  var n, i, r, s, o;
                  for (n in e)
                    if (
                      ((r = t[(i = Y(n))]),
                      (s = e[n]),
                      Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                      n !== i && ((e[i] = s), delete e[n]),
                      (o = w.cssHooks[i]) && ('expand' in o))
                    )
                      for (n in ((s = o.expand(s)), delete e[i], s))
                        (n in e) || ((e[n] = s[n]), (t[n] = r));
                    else t[i] = r;
                })(c, u.opts.specialEasing);
                s < o;
                s++
              )
                if ((i = ft.prefilters[s].call(u, e, c, u.opts)))
                  return (
                    g(i.stop) &&
                      (w._queueHooks(u.elem, u.opts.queue).stop =
                        i.stop.bind(i)),
                    i
                  );
              return (
                w.map(c, dt, u),
                g(u.opts.start) && u.opts.start.call(e, u),
                u
                  .progress(u.opts.progress)
                  .done(u.opts.done, u.opts.complete)
                  .fail(u.opts.fail)
                  .always(u.opts.always),
                w.fx.timer(
                  w.extend(l, { elem: e, anim: u, queue: u.opts.queue }),
                ),
                u
              );
            }
            (w.Animation = w.extend(ft, {
              tweeners: {
                '*': [
                  function (e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, re.exec(t), n), n;
                  },
                ],
              },
              tweener: function (e, t) {
                g(e) ? ((t = e), (e = ['*'])) : (e = e.match(R));
                for (var n, i = 0, r = e.length; i < r; i++)
                  (n = e[i]),
                    (ft.tweeners[n] = ft.tweeners[n] || []),
                    ft.tweeners[n].unshift(t);
              },
              prefilters: [
                function (e, t, n) {
                  var i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    d = 'width' in t || 'height' in t,
                    f = this,
                    h = {},
                    p = e.style,
                    m = e.nodeType && ue(e),
                    v = J.get(e, 'fxshow');
                  for (i in (n.queue ||
                    (null == (o = w._queueHooks(e, 'fx')).unqueued &&
                      ((o.unqueued = 0),
                      (a = o.empty.fire),
                      (o.empty.fire = function () {
                        o.unqueued || a();
                      })),
                    o.unqueued++,
                    f.always(function () {
                      f.always(function () {
                        o.unqueued--, w.queue(e, 'fx').length || o.empty.fire();
                      });
                    })),
                  t))
                    if (((r = t[i]), ot.test(r))) {
                      if (
                        (delete t[i],
                        (s = s || 'toggle' === r),
                        r === (m ? 'hide' : 'show'))
                      ) {
                        if ('show' !== r || !v || void 0 === v[i]) continue;
                        m = !0;
                      }
                      h[i] = (v && v[i]) || w.style(e, i);
                    }
                  if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                    for (i in (d &&
                      1 === e.nodeType &&
                      ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                      null == (u = v && v.display) && (u = J.get(e, 'display')),
                      'none' === (c = w.css(e, 'display')) &&
                        (u
                          ? (c = u)
                          : (he([e], !0),
                            (u = e.style.display || u),
                            (c = w.css(e, 'display')),
                            he([e]))),
                      ('inline' === c || ('inline-block' === c && null != u)) &&
                        'none' === w.css(e, 'float') &&
                        (l ||
                          (f.done(function () {
                            p.display = u;
                          }),
                          null == u &&
                            ((c = p.display), (u = 'none' === c ? '' : c))),
                        (p.display = 'inline-block'))),
                    n.overflow &&
                      ((p.overflow = 'hidden'),
                      f.always(function () {
                        (p.overflow = n.overflow[0]),
                          (p.overflowX = n.overflow[1]),
                          (p.overflowY = n.overflow[2]);
                      })),
                    (l = !1),
                    h))
                      l ||
                        (v
                          ? 'hidden' in v && (m = v.hidden)
                          : (v = J.access(e, 'fxshow', { display: u })),
                        s && (v.hidden = !m),
                        m && he([e], !0),
                        f.done(function () {
                          for (i in (m || he([e]), J.remove(e, 'fxshow'), h))
                            w.style(e, i, h[i]);
                        })),
                        (l = dt(m ? v[i] : 0, i, f)),
                        i in v ||
                          ((v[i] = l.start),
                          m && ((l.end = l.start), (l.start = 0)));
                },
              ],
              prefilter: function (e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
              },
            })),
              (w.speed = function (e, t, n) {
                var i =
                  e && 'object' == typeof e
                    ? w.extend({}, e)
                    : {
                        complete: n || (!n && t) || (g(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !g(t) && t),
                      };
                return (
                  w.fx.off
                    ? (i.duration = 0)
                    : 'number' != typeof i.duration &&
                      (i.duration in w.fx.speeds
                        ? (i.duration = w.fx.speeds[i.duration])
                        : (i.duration = w.fx.speeds._default)),
                  (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
                  (i.old = i.complete),
                  (i.complete = function () {
                    g(i.old) && i.old.call(this),
                      i.queue && w.dequeue(this, i.queue);
                  }),
                  i
                );
              }),
              w.fn.extend({
                fadeTo: function (e, t, n, i) {
                  return this.filter(ue)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
                },
                animate: function (e, t, n, i) {
                  var r = w.isEmptyObject(e),
                    s = w.speed(t, n, i),
                    o = function () {
                      var t = ft(this, w.extend({}, e), s);
                      (r || J.get(this, 'finish')) && t.stop(!0);
                    };
                  return (
                    (o.finish = o),
                    r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                  );
                },
                stop: function (e, t, n) {
                  var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                  };
                  return (
                    'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || 'fx', []),
                    this.each(function () {
                      var t = !0,
                        r = null != e && e + 'queueHooks',
                        s = w.timers,
                        o = J.get(this);
                      if (r) o[r] && o[r].stop && i(o[r]);
                      else
                        for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                      for (r = s.length; r--; )
                        s[r].elem !== this ||
                          (null != e && s[r].queue !== e) ||
                          (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                      (!t && n) || w.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || 'fx'),
                    this.each(function () {
                      var t,
                        n = J.get(this),
                        i = n[e + 'queue'],
                        r = n[e + 'queueHooks'],
                        s = w.timers,
                        o = i ? i.length : 0;
                      for (
                        n.finish = !0,
                          w.queue(this, e, []),
                          r && r.stop && r.stop.call(this, !0),
                          t = s.length;
                        t--;

                      )
                        s[t].elem === this &&
                          s[t].queue === e &&
                          (s[t].anim.stop(!0), s.splice(t, 1));
                      for (t = 0; t < o; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                      delete n.finish;
                    })
                  );
                },
              }),
              w.each(['toggle', 'show', 'hide'], function (e, t) {
                var n = w.fn[t];
                w.fn[t] = function (e, i, r) {
                  return null == e || 'boolean' == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ct(t, !0), e, i, r);
                };
              }),
              w.each(
                {
                  slideDown: ct('show'),
                  slideUp: ct('hide'),
                  slideToggle: ct('toggle'),
                  fadeIn: { opacity: 'show' },
                  fadeOut: { opacity: 'hide' },
                  fadeToggle: { opacity: 'toggle' },
                },
                function (e, t) {
                  w.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i);
                  };
                },
              ),
              (w.timers = []),
              (w.fx.tick = function () {
                var e,
                  t = 0,
                  n = w.timers;
                for (rt = Date.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || w.fx.stop(), (rt = void 0);
              }),
              (w.fx.timer = function (e) {
                w.timers.push(e), w.fx.start();
              }),
              (w.fx.interval = 13),
              (w.fx.start = function () {
                st || ((st = !0), lt());
              }),
              (w.fx.stop = function () {
                st = null;
              }),
              (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (w.fn.delay = function (e, t) {
                return (
                  (e = (w.fx && w.fx.speeds[e]) || e),
                  (t = t || 'fx'),
                  this.queue(t, function (t, n) {
                    var r = i.setTimeout(t, e);
                    n.stop = function () {
                      i.clearTimeout(r);
                    };
                  })
                );
              }),
              (function () {
                var e = b.createElement('input'),
                  t = b
                    .createElement('select')
                    .appendChild(b.createElement('option'));
                (e.type = 'checkbox'),
                  (v.checkOn = '' !== e.value),
                  (v.optSelected = t.selected),
                  ((e = b.createElement('input')).value = 't'),
                  (e.type = 'radio'),
                  (v.radioValue = 't' === e.value);
              })();
            var ht,
              pt = w.expr.attrHandle;
            w.fn.extend({
              attr: function (e, t) {
                return B(this, w.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  w.removeAttr(this, e);
                });
              },
            }),
              w.extend({
                attr: function (e, t, n) {
                  var i,
                    r,
                    s = e.nodeType;
                  if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === e.getAttribute
                      ? w.prop(e, t, n)
                      : ((1 === s && w.isXMLDoc(e)) ||
                          (r =
                            w.attrHooks[t.toLowerCase()] ||
                            (w.expr.match.bool.test(t) ? ht : void 0)),
                        void 0 !== n
                          ? null === n
                            ? void w.removeAttr(e, t)
                            : r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                            ? i
                            : (e.setAttribute(t, n + ''), n)
                          : r && 'get' in r && null !== (i = r.get(e, t))
                          ? i
                          : null == (i = w.find.attr(e, t))
                          ? void 0
                          : i);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (!v.radioValue && 'radio' === t && D(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                      }
                    },
                  },
                },
                removeAttr: function (e, t) {
                  var n,
                    i = 0,
                    r = t && t.match(R);
                  if (r && 1 === e.nodeType)
                    for (; (n = r[i++]); ) e.removeAttribute(n);
                },
              }),
              (ht = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = pt[t] || w.find.attr;
                pt[t] = function (e, t, i) {
                  var r,
                    s,
                    o = t.toLowerCase();
                  return (
                    i ||
                      ((s = pt[o]),
                      (pt[o] = r),
                      (r = null != n(e, t, i) ? o : null),
                      (pt[o] = s)),
                    r
                  );
                };
              });
            var mt = /^(?:input|select|textarea|button)$/i,
              vt = /^(?:a|area)$/i;
            function gt(e) {
              return (e.match(R) || []).join(' ');
            }
            function yt(e) {
              return (e.getAttribute && e.getAttribute('class')) || '';
            }
            function bt(e) {
              return Array.isArray(e)
                ? e
                : ('string' == typeof e && e.match(R)) || [];
            }
            w.fn.extend({
              prop: function (e, t) {
                return B(this, w.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[w.propFix[e] || e];
                });
              },
            }),
              w.extend({
                prop: function (e, t, n) {
                  var i,
                    r,
                    s = e.nodeType;
                  if (3 !== s && 8 !== s && 2 !== s)
                    return (
                      (1 === s && w.isXMLDoc(e)) ||
                        ((t = w.propFix[t] || t), (r = w.propHooks[t])),
                      void 0 !== n
                        ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e[t] = n)
                        : r && 'get' in r && null !== (i = r.get(e, t))
                        ? i
                        : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      var t = w.find.attr(e, 'tabindex');
                      return t
                        ? parseInt(t, 10)
                        : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                    },
                  },
                },
                propFix: { for: 'htmlFor', class: 'className' },
              }),
              v.optSelected ||
                (w.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                  set: function (e) {
                    var t = e.parentNode;
                    t &&
                      (t.selectedIndex,
                      t.parentNode && t.parentNode.selectedIndex);
                  },
                }),
              w.each(
                [
                  'tabIndex',
                  'readOnly',
                  'maxLength',
                  'cellSpacing',
                  'cellPadding',
                  'rowSpan',
                  'colSpan',
                  'useMap',
                  'frameBorder',
                  'contentEditable',
                ],
                function () {
                  w.propFix[this.toLowerCase()] = this;
                },
              ),
              w.fn.extend({
                addClass: function (e) {
                  var t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l = 0;
                  if (g(e))
                    return this.each(function (t) {
                      w(this).addClass(e.call(this, t, yt(this)));
                    });
                  if ((t = bt(e)).length)
                    for (; (n = this[l++]); )
                      if (
                        ((r = yt(n)),
                        (i = 1 === n.nodeType && ' ' + gt(r) + ' '))
                      ) {
                        for (o = 0; (s = t[o++]); )
                          i.indexOf(' ' + s + ' ') < 0 && (i += s + ' ');
                        r !== (a = gt(i)) && n.setAttribute('class', a);
                      }
                  return this;
                },
                removeClass: function (e) {
                  var t,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l = 0;
                  if (g(e))
                    return this.each(function (t) {
                      w(this).removeClass(e.call(this, t, yt(this)));
                    });
                  if (!arguments.length) return this.attr('class', '');
                  if ((t = bt(e)).length)
                    for (; (n = this[l++]); )
                      if (
                        ((r = yt(n)),
                        (i = 1 === n.nodeType && ' ' + gt(r) + ' '))
                      ) {
                        for (o = 0; (s = t[o++]); )
                          for (; i.indexOf(' ' + s + ' ') > -1; )
                            i = i.replace(' ' + s + ' ', ' ');
                        r !== (a = gt(i)) && n.setAttribute('class', a);
                      }
                  return this;
                },
                toggleClass: function (e, t) {
                  var n = typeof e,
                    i = 'string' === n || Array.isArray(e);
                  return 'boolean' == typeof t && i
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : g(e)
                    ? this.each(function (n) {
                        w(this).toggleClass(e.call(this, n, yt(this), t), t);
                      })
                    : this.each(function () {
                        var t, r, s, o;
                        if (i)
                          for (r = 0, s = w(this), o = bt(e); (t = o[r++]); )
                            s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                        else
                          (void 0 !== e && 'boolean' !== n) ||
                            ((t = yt(this)) && J.set(this, '__className__', t),
                            this.setAttribute &&
                              this.setAttribute(
                                'class',
                                t || !1 === e
                                  ? ''
                                  : J.get(this, '__className__') || '',
                              ));
                      });
                },
                hasClass: function (e) {
                  var t,
                    n,
                    i = 0;
                  for (t = ' ' + e + ' '; (n = this[i++]); )
                    if (
                      1 === n.nodeType &&
                      (' ' + gt(yt(n)) + ' ').indexOf(t) > -1
                    )
                      return !0;
                  return !1;
                },
              });
            var St = /\r/g;
            w.fn.extend({
              val: function (e) {
                var t,
                  n,
                  i,
                  r = this[0];
                return arguments.length
                  ? ((i = g(e)),
                    this.each(function (n) {
                      var r;
                      1 === this.nodeType &&
                        (null == (r = i ? e.call(this, n, w(this).val()) : e)
                          ? (r = '')
                          : 'number' == typeof r
                          ? (r += '')
                          : Array.isArray(r) &&
                            (r = w.map(r, function (e) {
                              return null == e ? '' : e + '';
                            })),
                        ((t =
                          w.valHooks[this.type] ||
                          w.valHooks[this.nodeName.toLowerCase()]) &&
                          'set' in t &&
                          void 0 !== t.set(this, r, 'value')) ||
                          (this.value = r));
                    }))
                  : r
                  ? (t =
                      w.valHooks[r.type] ||
                      w.valHooks[r.nodeName.toLowerCase()]) &&
                    'get' in t &&
                    void 0 !== (n = t.get(r, 'value'))
                    ? n
                    : 'string' == typeof (n = r.value)
                    ? n.replace(St, '')
                    : null == n
                    ? ''
                    : n
                  : void 0;
              },
            }),
              w.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = w.find.attr(e, 'value');
                      return null != t ? t : gt(w.text(e));
                    },
                  },
                  select: {
                    get: function (e) {
                      var t,
                        n,
                        i,
                        r = e.options,
                        s = e.selectedIndex,
                        o = 'select-one' === e.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                      for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (
                          ((n = r[i]).selected || i === s) &&
                          !n.disabled &&
                          (!n.parentNode.disabled ||
                            !D(n.parentNode, 'optgroup'))
                        ) {
                          if (((t = w(n).val()), o)) return t;
                          a.push(t);
                        }
                      return a;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          i,
                          r = e.options,
                          s = w.makeArray(t),
                          o = r.length;
                        o--;

                      )
                        ((i = r[o]).selected =
                          w.inArray(w.valHooks.option.get(i), s) > -1) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), s;
                    },
                  },
                },
              }),
              w.each(['radio', 'checkbox'], function () {
                (w.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t))
                      return (e.checked = w.inArray(w(e).val(), t) > -1);
                  },
                }),
                  v.checkOn ||
                    (w.valHooks[this].get = function (e) {
                      return null === e.getAttribute('value') ? 'on' : e.value;
                    });
              }),
              (v.focusin = 'onfocusin' in i);
            var xt = /^(?:focusinfocus|focusoutblur)$/,
              Tt = function (e) {
                e.stopPropagation();
              };
            w.extend(w.event, {
              trigger: function (e, t, n, r) {
                var s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  d,
                  f,
                  p = [n || b],
                  m = h.call(e, 'type') ? e.type : e,
                  v = h.call(e, 'namespace') ? e.namespace.split('.') : [];
                if (
                  ((o = f = a = n = n || b),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !xt.test(m + w.event.triggered) &&
                    (m.indexOf('.') > -1 &&
                      ((v = m.split('.')), (m = v.shift()), v.sort()),
                    (u = m.indexOf(':') < 0 && 'on' + m),
                    ((e = e[w.expando]
                      ? e
                      : new w.Event(m, 'object' == typeof e && e)).isTrigger = r
                      ? 2
                      : 3),
                    (e.namespace = v.join('.')),
                    (e.rnamespace = e.namespace
                      ? new RegExp(
                          '(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)',
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : w.makeArray(t, [e])),
                    (d = w.event.special[m] || {}),
                    r || !d.trigger || !1 !== d.trigger.apply(n, t)))
                ) {
                  if (!r && !d.noBubble && !y(n)) {
                    for (
                      l = d.delegateType || m,
                        xt.test(l + m) || (o = o.parentNode);
                      o;
                      o = o.parentNode
                    )
                      p.push(o), (a = o);
                    a === (n.ownerDocument || b) &&
                      p.push(a.defaultView || a.parentWindow || i);
                  }
                  for (s = 0; (o = p[s++]) && !e.isPropagationStopped(); )
                    (f = o),
                      (e.type = s > 1 ? l : d.bindType || m),
                      (c =
                        (J.get(o, 'events') || Object.create(null))[e.type] &&
                        J.get(o, 'handle')) && c.apply(o, t),
                      (c = u && o[u]) &&
                        c.apply &&
                        K(o) &&
                        ((e.result = c.apply(o, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = m),
                    r ||
                      e.isDefaultPrevented() ||
                      (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                      !K(n) ||
                      (u &&
                        g(n[m]) &&
                        !y(n) &&
                        ((a = n[u]) && (n[u] = null),
                        (w.event.triggered = m),
                        e.isPropagationStopped() && f.addEventListener(m, Tt),
                        n[m](),
                        e.isPropagationStopped() &&
                          f.removeEventListener(m, Tt),
                        (w.event.triggered = void 0),
                        a && (n[u] = a))),
                    e.result
                  );
                }
              },
              simulate: function (e, t, n) {
                var i = w.extend(new w.Event(), n, {
                  type: e,
                  isSimulated: !0,
                });
                w.event.trigger(i, null, t);
              },
            }),
              w.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    w.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return w.event.trigger(e, t, n, !0);
                },
              }),
              v.focusin ||
                w.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
                  var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                  };
                  w.event.special[t] = {
                    setup: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = J.access(i, t);
                      r || i.addEventListener(e, n, !0),
                        J.access(i, t, (r || 0) + 1);
                    },
                    teardown: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = J.access(i, t) - 1;
                      r
                        ? J.access(i, t, r)
                        : (i.removeEventListener(e, n, !0), J.remove(i, t));
                    },
                  };
                });
            var _t = i.location,
              wt = { guid: Date.now() },
              Ct = /\?/;
            w.parseXML = function (e) {
              var t, n;
              if (!e || 'string' != typeof e) return null;
              try {
                t = new i.DOMParser().parseFromString(e, 'text/xml');
              } catch (e) {}
              return (
                (n = t && t.getElementsByTagName('parsererror')[0]),
                (t && !n) ||
                  w.error(
                    'Invalid XML: ' +
                      (n
                        ? w
                            .map(n.childNodes, function (e) {
                              return e.textContent;
                            })
                            .join('\n')
                        : e),
                  ),
                t
              );
            };
            var At = /\[\]$/,
              Et = /\r?\n/g,
              Lt = /^(?:submit|button|image|reset|file)$/i,
              Mt = /^(?:input|select|textarea|keygen)/i;
            function Dt(e, t, n, i) {
              var r;
              if (Array.isArray(t))
                w.each(t, function (t, r) {
                  n || At.test(e)
                    ? i(e, r)
                    : Dt(
                        e +
                          '[' +
                          ('object' == typeof r && null != r ? t : '') +
                          ']',
                        r,
                        n,
                        i,
                      );
                });
              else if (n || 'object' !== T(t)) i(e, t);
              else for (r in t) Dt(e + '[' + r + ']', t[r], n, i);
            }
            (w.param = function (e, t) {
              var n,
                i = [],
                r = function (e, t) {
                  var n = g(t) ? t() : t;
                  i[i.length] =
                    encodeURIComponent(e) +
                    '=' +
                    encodeURIComponent(null == n ? '' : n);
                };
              if (null == e) return '';
              if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
                w.each(e, function () {
                  r(this.name, this.value);
                });
              else for (n in e) Dt(n, e[n], t, r);
              return i.join('&');
            }),
              w.fn.extend({
                serialize: function () {
                  return w.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = w.prop(this, 'elements');
                    return e ? w.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !w(this).is(':disabled') &&
                        Mt.test(this.nodeName) &&
                        !Lt.test(e) &&
                        (this.checked || !ve.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = w(this).val();
                      return null == n
                        ? null
                        : Array.isArray(n)
                        ? w.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace(Et, '\r\n'),
                            };
                          })
                        : { name: t.name, value: n.replace(Et, '\r\n') };
                    })
                    .get();
                },
              });
            var Ot = /%20/g,
              kt = /#.*$/,
              Ft = /([?&])_=[^&]*/,
              Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Nt = /^(?:GET|HEAD)$/,
              jt = /^\/\//,
              It = {},
              Rt = {},
              Vt = '*/'.concat('*'),
              Ht = b.createElement('a');
            function qt(e) {
              return function (t, n) {
                'string' != typeof t && ((n = t), (t = '*'));
                var i,
                  r = 0,
                  s = t.toLowerCase().match(R) || [];
                if (g(n))
                  for (; (i = s[r++]); )
                    '+' === i[0]
                      ? ((i = i.slice(1) || '*'),
                        (e[i] = e[i] || []).unshift(n))
                      : (e[i] = e[i] || []).push(n);
              };
            }
            function $t(e, t, n, i) {
              var r = {},
                s = e === Rt;
              function o(a) {
                var l;
                return (
                  (r[a] = !0),
                  w.each(e[a] || [], function (e, a) {
                    var u = a(t, n, i);
                    return 'string' != typeof u || s || r[u]
                      ? s
                        ? !(l = u)
                        : void 0
                      : (t.dataTypes.unshift(u), o(u), !1);
                  }),
                  l
                );
              }
              return o(t.dataTypes[0]) || (!r['*'] && o('*'));
            }
            function zt(e, t) {
              var n,
                i,
                r = w.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
              return i && w.extend(!0, e, i), e;
            }
            (Ht.href = _t.href),
              w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: _t.href,
                  type: 'GET',
                  isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                      _t.protocol,
                    ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType:
                    'application/x-www-form-urlencoded; charset=UTF-8',
                  accepts: {
                    '*': Vt,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                  },
                  contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/,
                  },
                  responseFields: {
                    xml: 'responseXML',
                    text: 'responseText',
                    json: 'responseJSON',
                  },
                  converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': w.parseXML,
                  },
                  flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                  return t
                    ? zt(zt(e, w.ajaxSettings), t)
                    : zt(w.ajaxSettings, e);
                },
                ajaxPrefilter: qt(It),
                ajaxTransport: qt(Rt),
                ajax: function (e, t) {
                  'object' == typeof e && ((t = e), (e = void 0)),
                    (t = t || {});
                  var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    d,
                    f,
                    h = w.ajaxSetup({}, t),
                    p = h.context || h,
                    m = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                    v = w.Deferred(),
                    g = w.Callbacks('once memory'),
                    y = h.statusCode || {},
                    S = {},
                    x = {},
                    T = 'canceled',
                    _ = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (u) {
                          if (!o)
                            for (o = {}; (t = Pt.exec(s)); )
                              o[t[1].toLowerCase() + ' '] = (
                                o[t[1].toLowerCase() + ' '] || []
                              ).concat(t[2]);
                          t = o[e.toLowerCase() + ' '];
                        }
                        return null == t ? null : t.join(', ');
                      },
                      getAllResponseHeaders: function () {
                        return u ? s : null;
                      },
                      setRequestHeader: function (e, t) {
                        return (
                          null == u &&
                            ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                            (S[e] = t)),
                          this
                        );
                      },
                      overrideMimeType: function (e) {
                        return null == u && (h.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (u) _.always(e[_.status]);
                          else for (t in e) y[t] = [y[t], e[t]];
                        return this;
                      },
                      abort: function (e) {
                        var t = e || T;
                        return n && n.abort(t), C(0, t), this;
                      },
                    };
                  if (
                    (v.promise(_),
                    (h.url = ((e || h.url || _t.href) + '').replace(
                      jt,
                      _t.protocol + '//',
                    )),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || '*')
                      .toLowerCase()
                      .match(R) || ['']),
                    null == h.crossDomain)
                  ) {
                    l = b.createElement('a');
                    try {
                      (l.href = h.url),
                        (l.href = l.href),
                        (h.crossDomain =
                          Ht.protocol + '//' + Ht.host !=
                          l.protocol + '//' + l.host);
                    } catch (e) {
                      h.crossDomain = !0;
                    }
                  }
                  if (
                    (h.data &&
                      h.processData &&
                      'string' != typeof h.data &&
                      (h.data = w.param(h.data, h.traditional)),
                    $t(It, h, t, _),
                    u)
                  )
                    return _;
                  for (d in ((c = w.event && h.global) &&
                    0 == w.active++ &&
                    w.event.trigger('ajaxStart'),
                  (h.type = h.type.toUpperCase()),
                  (h.hasContent = !Nt.test(h.type)),
                  (r = h.url.replace(kt, '')),
                  h.hasContent
                    ? h.data &&
                      h.processData &&
                      0 ===
                        (h.contentType || '').indexOf(
                          'application/x-www-form-urlencoded',
                        ) &&
                      (h.data = h.data.replace(Ot, '+'))
                    : ((f = h.url.slice(r.length)),
                      h.data &&
                        (h.processData || 'string' == typeof h.data) &&
                        ((r += (Ct.test(r) ? '&' : '?') + h.data),
                        delete h.data),
                      !1 === h.cache &&
                        ((r = r.replace(Ft, '$1')),
                        (f = (Ct.test(r) ? '&' : '?') + '_=' + wt.guid++ + f)),
                      (h.url = r + f)),
                  h.ifModified &&
                    (w.lastModified[r] &&
                      _.setRequestHeader(
                        'If-Modified-Since',
                        w.lastModified[r],
                      ),
                    w.etag[r] &&
                      _.setRequestHeader('If-None-Match', w.etag[r])),
                  ((h.data && h.hasContent && !1 !== h.contentType) ||
                    t.contentType) &&
                    _.setRequestHeader('Content-Type', h.contentType),
                  _.setRequestHeader(
                    'Accept',
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                      ? h.accepts[h.dataTypes[0]] +
                          ('*' !== h.dataTypes[0] ? ', ' + Vt + '; q=0.01' : '')
                      : h.accepts['*'],
                  ),
                  h.headers))
                    _.setRequestHeader(d, h.headers[d]);
                  if (h.beforeSend && (!1 === h.beforeSend.call(p, _, h) || u))
                    return _.abort();
                  if (
                    ((T = 'abort'),
                    g.add(h.complete),
                    _.done(h.success),
                    _.fail(h.error),
                    (n = $t(Rt, h, t, _)))
                  ) {
                    if (
                      ((_.readyState = 1),
                      c && m.trigger('ajaxSend', [_, h]),
                      u)
                    )
                      return _;
                    h.async &&
                      h.timeout > 0 &&
                      (a = i.setTimeout(function () {
                        _.abort('timeout');
                      }, h.timeout));
                    try {
                      (u = !1), n.send(S, C);
                    } catch (e) {
                      if (u) throw e;
                      C(-1, e);
                    }
                  } else C(-1, 'No Transport');
                  function C(e, t, o, l) {
                    var d,
                      f,
                      b,
                      S,
                      x,
                      T = t;
                    u ||
                      ((u = !0),
                      a && i.clearTimeout(a),
                      (n = void 0),
                      (s = l || ''),
                      (_.readyState = e > 0 ? 4 : 0),
                      (d = (e >= 200 && e < 300) || 304 === e),
                      o &&
                        (S = (function (e, t, n) {
                          for (
                            var i, r, s, o, a = e.contents, l = e.dataTypes;
                            '*' === l[0];

                          )
                            l.shift(),
                              void 0 === i &&
                                (i =
                                  e.mimeType ||
                                  t.getResponseHeader('Content-Type'));
                          if (i)
                            for (r in a)
                              if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break;
                              }
                          if (l[0] in n) s = l[0];
                          else {
                            for (r in n) {
                              if (!l[0] || e.converters[r + ' ' + l[0]]) {
                                s = r;
                                break;
                              }
                              o || (o = r);
                            }
                            s = s || o;
                          }
                          if (s) return s !== l[0] && l.unshift(s), n[s];
                        })(h, _, o)),
                      !d &&
                        w.inArray('script', h.dataTypes) > -1 &&
                        w.inArray('json', h.dataTypes) < 0 &&
                        (h.converters['text script'] = function () {}),
                      (S = (function (e, t, n, i) {
                        var r,
                          s,
                          o,
                          a,
                          l,
                          u = {},
                          c = e.dataTypes.slice();
                        if (c[1])
                          for (o in e.converters)
                            u[o.toLowerCase()] = e.converters[o];
                        for (s = c.shift(); s; )
                          if (
                            (e.responseFields[s] &&
                              (n[e.responseFields[s]] = t),
                            !l &&
                              i &&
                              e.dataFilter &&
                              (t = e.dataFilter(t, e.dataType)),
                            (l = s),
                            (s = c.shift()))
                          )
                            if ('*' === s) s = l;
                            else if ('*' !== l && l !== s) {
                              if (!(o = u[l + ' ' + s] || u['* ' + s]))
                                for (r in u)
                                  if (
                                    (a = r.split(' '))[1] === s &&
                                    (o = u[l + ' ' + a[0]] || u['* ' + a[0]])
                                  ) {
                                    !0 === o
                                      ? (o = u[r])
                                      : !0 !== u[r] &&
                                        ((s = a[0]), c.unshift(a[1]));
                                    break;
                                  }
                              if (!0 !== o)
                                if (o && e.throws) t = o(t);
                                else
                                  try {
                                    t = o(t);
                                  } catch (e) {
                                    return {
                                      state: 'parsererror',
                                      error: o
                                        ? e
                                        : 'No conversion from ' +
                                          l +
                                          ' to ' +
                                          s,
                                    };
                                  }
                            }
                        return { state: 'success', data: t };
                      })(h, S, _, d)),
                      d
                        ? (h.ifModified &&
                            ((x = _.getResponseHeader('Last-Modified')) &&
                              (w.lastModified[r] = x),
                            (x = _.getResponseHeader('etag')) &&
                              (w.etag[r] = x)),
                          204 === e || 'HEAD' === h.type
                            ? (T = 'nocontent')
                            : 304 === e
                            ? (T = 'notmodified')
                            : ((T = S.state),
                              (f = S.data),
                              (d = !(b = S.error))))
                        : ((b = T),
                          (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                      (_.status = e),
                      (_.statusText = (t || T) + ''),
                      d
                        ? v.resolveWith(p, [f, T, _])
                        : v.rejectWith(p, [_, T, b]),
                      _.statusCode(y),
                      (y = void 0),
                      c &&
                        m.trigger(d ? 'ajaxSuccess' : 'ajaxError', [
                          _,
                          h,
                          d ? f : b,
                        ]),
                      g.fireWith(p, [_, T]),
                      c &&
                        (m.trigger('ajaxComplete', [_, h]),
                        --w.active || w.event.trigger('ajaxStop')));
                  }
                  return _;
                },
                getJSON: function (e, t, n) {
                  return w.get(e, t, n, 'json');
                },
                getScript: function (e, t) {
                  return w.get(e, void 0, t, 'script');
                },
              }),
              w.each(['get', 'post'], function (e, t) {
                w[t] = function (e, n, i, r) {
                  return (
                    g(n) && ((r = r || i), (i = n), (n = void 0)),
                    w.ajax(
                      w.extend(
                        { url: e, type: t, dataType: r, data: n, success: i },
                        w.isPlainObject(e) && e,
                      ),
                    )
                  );
                };
              }),
              w.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers)
                  'content-type' === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || '');
              }),
              (w._evalUrl = function (e, t, n) {
                return w.ajax({
                  url: e,
                  type: 'GET',
                  dataType: 'script',
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { 'text script': function () {} },
                  dataFilter: function (e) {
                    w.globalEval(e, t, n);
                  },
                });
              }),
              w.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return (
                    this[0] &&
                      (g(e) && (e = e.call(this[0])),
                      (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function () {
                          for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                          return e;
                        })
                        .append(this)),
                    this
                  );
                },
                wrapInner: function (e) {
                  return g(e)
                    ? this.each(function (t) {
                        w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = w(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = g(e);
                  return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function (e) {
                  return (
                    this.parent(e)
                      .not('body')
                      .each(function () {
                        w(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                },
              }),
              (w.expr.pseudos.hidden = function (e) {
                return !w.expr.pseudos.visible(e);
              }),
              (w.expr.pseudos.visible = function (e) {
                return !!(
                  e.offsetWidth ||
                  e.offsetHeight ||
                  e.getClientRects().length
                );
              }),
              (w.ajaxSettings.xhr = function () {
                try {
                  return new i.XMLHttpRequest();
                } catch (e) {}
              });
            var Ut = { 0: 200, 1223: 204 },
              Bt = w.ajaxSettings.xhr();
            (v.cors = !!Bt && 'withCredentials' in Bt),
              (v.ajax = Bt = !!Bt),
              w.ajaxTransport(function (e) {
                var t, n;
                if (v.cors || (Bt && !e.crossDomain))
                  return {
                    send: function (r, s) {
                      var o,
                        a = e.xhr();
                      if (
                        (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                      for (o in (e.mimeType &&
                        a.overrideMimeType &&
                        a.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        r['X-Requested-With'] ||
                        (r['X-Requested-With'] = 'XMLHttpRequest'),
                      r))
                        a.setRequestHeader(o, r[o]);
                      (t = function (e) {
                        return function () {
                          t &&
                            ((t =
                              n =
                              a.onload =
                              a.onerror =
                              a.onabort =
                              a.ontimeout =
                              a.onreadystatechange =
                                null),
                            'abort' === e
                              ? a.abort()
                              : 'error' === e
                              ? 'number' != typeof a.status
                                ? s(0, 'error')
                                : s(a.status, a.statusText)
                              : s(
                                  Ut[a.status] || a.status,
                                  a.statusText,
                                  'text' !== (a.responseType || 'text') ||
                                    'string' != typeof a.responseText
                                    ? { binary: a.response }
                                    : { text: a.responseText },
                                  a.getAllResponseHeaders(),
                                ));
                        };
                      }),
                        (a.onload = t()),
                        (n = a.onerror = a.ontimeout = t('error')),
                        void 0 !== a.onabort
                          ? (a.onabort = n)
                          : (a.onreadystatechange = function () {
                              4 === a.readyState &&
                                i.setTimeout(function () {
                                  t && n();
                                });
                            }),
                        (t = t('abort'));
                      try {
                        a.send((e.hasContent && e.data) || null);
                      } catch (e) {
                        if (t) throw e;
                      }
                    },
                    abort: function () {
                      t && t();
                    },
                  };
              }),
              w.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              w.ajaxSetup({
                accepts: {
                  script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  'text script': function (e) {
                    return w.globalEval(e), e;
                  },
                },
              }),
              w.ajaxPrefilter('script', function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = 'GET');
              }),
              w.ajaxTransport('script', function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs)
                  return {
                    send: function (i, r) {
                      (t = w('<script>')
                        .attr(e.scriptAttrs || {})
                        .prop({ charset: e.scriptCharset, src: e.url })
                        .on(
                          'load error',
                          (n = function (e) {
                            t.remove(),
                              (n = null),
                              e && r('error' === e.type ? 404 : 200, e.type);
                          }),
                        )),
                        b.head.appendChild(t[0]);
                    },
                    abort: function () {
                      n && n();
                    },
                  };
              });
            var Wt,
              Xt = [],
              Gt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
              jsonp: 'callback',
              jsonpCallback: function () {
                var e = Xt.pop() || w.expando + '_' + wt.guid++;
                return (this[e] = !0), e;
              },
            }),
              w.ajaxPrefilter('json jsonp', function (e, t, n) {
                var r,
                  s,
                  o,
                  a =
                    !1 !== e.jsonp &&
                    (Gt.test(e.url)
                      ? 'url'
                      : 'string' == typeof e.data &&
                        0 ===
                          (e.contentType || '').indexOf(
                            'application/x-www-form-urlencoded',
                          ) &&
                        Gt.test(e.data) &&
                        'data');
                if (a || 'jsonp' === e.dataTypes[0])
                  return (
                    (r = e.jsonpCallback =
                      g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a
                      ? (e[a] = e[a].replace(Gt, '$1' + r))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (Ct.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                    (e.converters['script json'] = function () {
                      return o || w.error(r + ' was not called'), o[0];
                    }),
                    (e.dataTypes[0] = 'json'),
                    (s = i[r]),
                    (i[r] = function () {
                      o = arguments;
                    }),
                    n.always(function () {
                      void 0 === s ? w(i).removeProp(r) : (i[r] = s),
                        e[r] &&
                          ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                        o && g(s) && s(o[0]),
                        (o = s = void 0);
                    }),
                    'script'
                  );
              }),
              (v.createHTMLDocument =
                (((Wt =
                  b.implementation.createHTMLDocument('').body).innerHTML =
                  '<form></form><form></form>'),
                2 === Wt.childNodes.length)),
              (w.parseHTML = function (e, t, n) {
                return 'string' != typeof e
                  ? []
                  : ('boolean' == typeof t && ((n = t), (t = !1)),
                    t ||
                      (v.createHTMLDocument
                        ? (((i = (t =
                            b.implementation.createHTMLDocument(
                              '',
                            )).createElement('base')).href = b.location.href),
                          t.head.appendChild(i))
                        : (t = b)),
                    (s = !n && []),
                    (r = O.exec(e))
                      ? [t.createElement(r[1])]
                      : ((r = _e([e], t, s)),
                        s && s.length && w(s).remove(),
                        w.merge([], r.childNodes)));
                var i, r, s;
              }),
              (w.fn.load = function (e, t, n) {
                var i,
                  r,
                  s,
                  o = this,
                  a = e.indexOf(' ');
                return (
                  a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
                  g(t)
                    ? ((n = t), (t = void 0))
                    : t && 'object' == typeof t && (r = 'POST'),
                  o.length > 0 &&
                    w
                      .ajax({
                        url: e,
                        type: r || 'GET',
                        dataType: 'html',
                        data: t,
                      })
                      .done(function (e) {
                        (s = arguments),
                          o.html(
                            i ? w('<div>').append(w.parseHTML(e)).find(i) : e,
                          );
                      })
                      .always(
                        n &&
                          function (e, t) {
                            o.each(function () {
                              n.apply(this, s || [e.responseText, t, e]);
                            });
                          },
                      ),
                  this
                );
              }),
              (w.expr.pseudos.animated = function (e) {
                return w.grep(w.timers, function (t) {
                  return e === t.elem;
                }).length;
              }),
              (w.offset = {
                setOffset: function (e, t, n) {
                  var i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u = w.css(e, 'position'),
                    c = w(e),
                    d = {};
                  'static' === u && (e.style.position = 'relative'),
                    (a = c.offset()),
                    (s = w.css(e, 'top')),
                    (l = w.css(e, 'left')),
                    ('absolute' === u || 'fixed' === u) &&
                    (s + l).indexOf('auto') > -1
                      ? ((o = (i = c.position()).top), (r = i.left))
                      : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, a))),
                    null != t.top && (d.top = t.top - a.top + o),
                    null != t.left && (d.left = t.left - a.left + r),
                    'using' in t ? t.using.call(e, d) : c.css(d);
                },
              }),
              w.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          w.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    i = this[0];
                  return i
                    ? i.getClientRects().length
                      ? ((t = i.getBoundingClientRect()),
                        (n = i.ownerDocument.defaultView),
                        {
                          top: t.top + n.pageYOffset,
                          left: t.left + n.pageXOffset,
                        })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n,
                      i = this[0],
                      r = { top: 0, left: 0 };
                    if ('fixed' === w.css(i, 'position'))
                      t = i.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(),
                          n = i.ownerDocument,
                          e = i.offsetParent || n.documentElement;
                        e &&
                        (e === n.body || e === n.documentElement) &&
                        'static' === w.css(e, 'position');

                      )
                        e = e.parentNode;
                      e &&
                        e !== i &&
                        1 === e.nodeType &&
                        (((r = w(e).offset()).top += w.css(
                          e,
                          'borderTopWidth',
                          !0,
                        )),
                        (r.left += w.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                      top: t.top - r.top - w.css(i, 'marginTop', !0),
                      left: t.left - r.left - w.css(i, 'marginLeft', !0),
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent;
                      e && 'static' === w.css(e, 'position');

                    )
                      e = e.offsetParent;
                    return e || oe;
                  });
                },
              }),
              w.each(
                { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                function (e, t) {
                  var n = 'pageYOffset' === t;
                  w.fn[e] = function (i) {
                    return B(
                      this,
                      function (e, i, r) {
                        var s;
                        if (
                          (y(e)
                            ? (s = e)
                            : 9 === e.nodeType && (s = e.defaultView),
                          void 0 === r)
                        )
                          return s ? s[t] : e[i];
                        s
                          ? s.scrollTo(
                              n ? s.pageXOffset : r,
                              n ? r : s.pageYOffset,
                            )
                          : (e[i] = r);
                      },
                      e,
                      i,
                      arguments.length,
                    );
                  };
                },
              ),
              w.each(['top', 'left'], function (e, t) {
                w.cssHooks[t] = Be(v.pixelPosition, function (e, n) {
                  if (n)
                    return (
                      (n = Ue(e, t)), He.test(n) ? w(e).position()[t] + 'px' : n
                    );
                });
              }),
              w.each({ Height: 'height', Width: 'width' }, function (e, t) {
                w.each(
                  { padding: 'inner' + e, content: t, '': 'outer' + e },
                  function (n, i) {
                    w.fn[i] = function (r, s) {
                      var o = arguments.length && (n || 'boolean' != typeof r),
                        a = n || (!0 === r || !0 === s ? 'margin' : 'border');
                      return B(
                        this,
                        function (t, n, r) {
                          var s;
                          return y(t)
                            ? 0 === i.indexOf('outer')
                              ? t['inner' + e]
                              : t.document.documentElement['client' + e]
                            : 9 === t.nodeType
                            ? ((s = t.documentElement),
                              Math.max(
                                t.body['scroll' + e],
                                s['scroll' + e],
                                t.body['offset' + e],
                                s['offset' + e],
                                s['client' + e],
                              ))
                            : void 0 === r
                            ? w.css(t, n, a)
                            : w.style(t, n, r, a);
                        },
                        t,
                        o ? r : void 0,
                        o,
                      );
                    };
                  },
                );
              }),
              w.each(
                [
                  'ajaxStart',
                  'ajaxStop',
                  'ajaxComplete',
                  'ajaxError',
                  'ajaxSuccess',
                  'ajaxSend',
                ],
                function (e, t) {
                  w.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                },
              ),
              w.fn.extend({
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, i) {
                  return this.on(t, e, n, i);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, '**')
                    : this.off(t, e || '**', n);
                },
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                },
              }),
              w.each(
                'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                  ' ',
                ),
                function (e, t) {
                  w.fn[t] = function (e, n) {
                    return arguments.length > 0
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                },
              );
            var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (w.proxy = function (e, t) {
              var n, i, r;
              if (
                ('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e))
              )
                return (
                  (i = a.call(arguments, 2)),
                  (r = function () {
                    return e.apply(t || this, i.concat(a.call(arguments)));
                  }),
                  (r.guid = e.guid = e.guid || w.guid++),
                  r
                );
            }),
              (w.holdReady = function (e) {
                e ? w.readyWait++ : w.ready(!0);
              }),
              (w.isArray = Array.isArray),
              (w.parseJSON = JSON.parse),
              (w.nodeName = D),
              (w.isFunction = g),
              (w.isWindow = y),
              (w.camelCase = Y),
              (w.type = T),
              (w.now = Date.now),
              (w.isNumeric = function (e) {
                var t = w.type(e);
                return (
                  ('number' === t || 'string' === t) &&
                  !isNaN(e - parseFloat(e))
                );
              }),
              (w.trim = function (e) {
                return null == e ? '' : (e + '').replace(Yt, '');
              }),
              void 0 ===
                (n = function () {
                  return w;
                }.apply(t, [])) || (e.exports = n);
            var Kt = i.jQuery,
              Qt = i.$;
            return (
              (w.noConflict = function (e) {
                return (
                  i.$ === w && (i.$ = Qt),
                  e && i.jQuery === w && (i.jQuery = Kt),
                  w
                );
              }),
              void 0 === r && (i.jQuery = i.$ = w),
              w
            );
          });
        },
        559: (e, t, n) => {
          'use strict';
          n.d(t, { Z: () => a });
          var i = n(6738),
            r = n.n(i),
            s = n(7705),
            o = n.n(s)()(r());
          o.push([
            e.id,
            '@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap);',
          ]),
            o.push([
              e.id,
              '.slider{position:relative;width:100%}.slider__fill,.slider__scale-mark,.slider__thumb{background-color:#2bb1a6}.slider-parent{align-items:center;display:flex;height:350px;justify-content:center;margin:0 auto 20px;width:60%}.slider-parent_vertical{width:auto}.slider_vertical{height:100%}.slider__track{border:1px solid #f2f2f2;border-radius:50px;border-radius:20px;cursor:pointer;height:4px;width:100%}.slider__track_vertical{height:100%;width:4px}.slider__thumb{-webkit-user-drag:none;-webkit-app-region:no-drag;border:2px solid #fff;border-radius:50%;cursor:pointer;display:inline-block;height:15px;left:0;position:absolute;top:0;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:15px;z-index:20}.slider__tip{align-items:center;border-radius:5px;bottom:20px;display:flex;font-size:16px;height:25px;justify-content:center;left:0;position:absolute;transform:translate(-50%);width:auto}.slider__tip_horizontal{top:-40px}.slider__tip_vertical{left:-30px}.slider__scale{cursor:pointer;display:flex;top:5px}.slider__scale-mark{align-items:center;display:flex;height:10px;justify-content:center;position:absolute;top:7px;width:1px}.slider__scale-mark_vertical{height:1px;left:7px;width:10px}.slider__scale-number{font-size:12px;position:relative;top:15px}.slider__scale-number_vertical{left:15px;margin-left:5px;top:0}.slider__scale_vertical{flex-direction:column;height:100%;left:5px;top:0;width:2px}.slider__fill{border-radius:50px;cursor:pointer;height:4px;position:absolute;top:0;transition:all .2s ease;z-index:10}.slider__fill_vertical{bottom:0;height:100%;top:auto;width:4px}*{box-sizing:border-box}body{background-color:#0a0a0a;color:#fff;font-family:Montserrat;height:1000px;margin:0;padding-top:30px}.title{margin-bottom:30px}.slider{margin-bottom:50px}.panel{align-content:center;background-color:hsla(0,0%,9%,.667);border-radius:5px;box-shadow:0 5px 10px #132325;display:flex;flex-direction:column;justify-content:center;padding-bottom:20px;padding-top:40px;width:100%}.slider-panel{grid-row-gap:20px;-moz-column-gap:20px;column-gap:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));grid-template-rows:repeat(auto-fill,minmax(50px,1fr));width:100%}.custom{display:flex;min-height:35px}.custom [type=number]{background-color:#242424;border:none;border-radius:4px;color:#fff;height:100%;outline:none;padding:0 10px;width:100%}.custom input{background-color:transparent}.text-label{display:flex;flex-direction:column}.checkbox-label{align-items:center;-moz-column-gap:10px;column-gap:10px;display:flex;flex-direction:row}.checkbox-label [type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-label .custom{background-color:#242424;border-radius:20px;cursor:pointer;min-height:20px;padding:0 2px;position:relative;transition:all .2s ease-in-out;width:50px}.checkbox-label .custom:after{background-color:#5e5e5e;border-radius:50%;content:"";height:15px;position:absolute;top:2.5px;transition:all .2s ease-in-out;width:15px;z-index:100}.checkbox-label input:checked+.custom{background-color:#2bb1a6}.checkbox-label input:checked+.custom:after{background-color:#fff;transform:translateX(30px)}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}.checkbox-panel{-moz-column-gap:20px;column-gap:20px;display:flex;flex-wrap:wrap;grid-column:1/-1;justify-self:center;row-gap:10px}',
              '',
            ]);
          const a = o;
        },
        9653: (e, t, n) => {
          'use strict';
          n.r(t), n.d(t, { default: () => g });
          var i = n(3379),
            r = n.n(i),
            s = n(7795),
            o = n.n(s),
            a = n(569),
            l = n.n(a),
            u = n(3565),
            c = n.n(u),
            d = n(9216),
            f = n.n(d),
            h = n(4589),
            p = n.n(h),
            m = n(559),
            v = {};
          (v.styleTagTransform = p()),
            (v.setAttributes = c()),
            (v.insert = l().bind(null, 'head')),
            (v.domAPI = o()),
            (v.insertStyleElement = f()),
            r()(m.Z, v);
          const g = m.Z && m.Z.locals ? m.Z.locals : void 0;
        },
        3379: e => {
          'use strict';
          var t = [];
          function n(e) {
            for (var n = -1, i = 0; i < t.length; i++)
              if (t[i].identifier === e) {
                n = i;
                break;
              }
            return n;
          }
          function i(e, i) {
            for (var s = {}, o = [], a = 0; a < e.length; a++) {
              var l = e[a],
                u = i.base ? l[0] + i.base : l[0],
                c = s[u] || 0,
                d = ''.concat(u, ' ').concat(c);
              s[u] = c + 1;
              var f = n(d),
                h = {
                  css: l[1],
                  media: l[2],
                  sourceMap: l[3],
                  supports: l[4],
                  layer: l[5],
                };
              if (-1 !== f) t[f].references++, t[f].updater(h);
              else {
                var p = r(h, i);
                (i.byIndex = a),
                  t.splice(a, 0, { identifier: d, updater: p, references: 1 });
              }
              o.push(d);
            }
            return o;
          }
          function r(e, t) {
            var n = t.domAPI(t);
            return (
              n.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap &&
                    t.supports === e.supports &&
                    t.layer === e.layer
                  )
                    return;
                  n.update((e = t));
                } else n.remove();
              }
            );
          }
          e.exports = function (e, r) {
            var s = i((e = e || []), (r = r || {}));
            return function (e) {
              e = e || [];
              for (var o = 0; o < s.length; o++) {
                var a = n(s[o]);
                t[a].references--;
              }
              for (var l = i(e, r), u = 0; u < s.length; u++) {
                var c = n(s[u]);
                0 === t[c].references && (t[c].updater(), t.splice(c, 1));
              }
              s = l;
            };
          };
        },
        569: e => {
          'use strict';
          var t = {};
          e.exports = function (e, n) {
            var i = (function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            })(e);
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            i.appendChild(n);
          };
        },
        9216: e => {
          'use strict';
          e.exports = function (e) {
            var t = document.createElement('style');
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        3565: (e, t, n) => {
          'use strict';
          e.exports = function (e) {
            var t = n.nc;
            t && e.setAttribute('nonce', t);
          };
        },
        7795: e => {
          'use strict';
          e.exports = function (e) {
            var t = e.insertStyleElement(e);
            return {
              update: function (n) {
                !(function (e, t, n) {
                  var i = '';
                  n.supports && (i += '@supports ('.concat(n.supports, ') {')),
                    n.media && (i += '@media '.concat(n.media, ' {'));
                  var r = void 0 !== n.layer;
                  r &&
                    (i += '@layer'.concat(
                      n.layer.length > 0 ? ' '.concat(n.layer) : '',
                      ' {',
                    )),
                    (i += n.css),
                    r && (i += '}'),
                    n.media && (i += '}'),
                    n.supports && (i += '}');
                  var s = n.sourceMap;
                  s &&
                    'undefined' != typeof btoa &&
                    (i +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        ' */',
                      )),
                    t.styleTagTransform(i, e, t.options);
                })(t, e, n);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        4589: e => {
          'use strict';
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        7231: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(3665)),
            s = i(n(2550)),
            o = i(n(675)),
            a = i(n(1643)),
            l = n(3553);
          t.default = class {
            constructor(e, t, n) {
              (this.parent = n),
                (this.params = e),
                (this.root = t),
                (this.DOMroot = document.querySelector(t)),
                (this.minValueInput = document.querySelector(
                  `.js-${l.MIN_CLASS}`,
                )),
                (this.maxValueInput = document.querySelector(
                  `.js-${l.MAX_CLASS}`,
                )),
                (this.firstValueInput = document.querySelector(
                  `.js-${l.FIRST_VALUE_CLASS}`,
                )),
                (this.secondValueInput = document.querySelector(
                  `.js-${l.SECOND_VALUE_CLASS}`,
                )),
                (this.decimalPlacesInput = document.querySelector(
                  `.js-${l.DECIMAL_PLACES_CLASS}`,
                )),
                (this.stepInput = document.querySelector(
                  `.js-${l.STEP_CLASS}`,
                )),
                (this.isRange = document.querySelector(
                  `.js-${l.IS_RANGE_CLASS}`,
                )),
                (this.isVertical = document.querySelector(
                  `.js-${l.IS_VERTICAL_CLASS}`,
                )),
                (this.hasFill = document.querySelector(
                  `.js-${l.HAS_FILL_CLASS}`,
                )),
                (this.hasTips = document.querySelector(
                  `.js-${l.HAS_TIPS_CLASS}`,
                )),
                (this.hasScale = document.querySelector(
                  `.js-${l.HAS_SCALE_CLASS}`,
                )),
                (this.isDecimal = document.querySelector(
                  `.js-${l.IS_DECIMAL_CLASS}`,
                )),
                (this.initializeFormValues = r.default.bind(this)),
                (this.initializeInputs = s.default.bind(this)),
                (this.addInputListeners = o.default.bind(this)),
                (this.renderPanel = a.default.bind(this)),
                this.renderPanel();
            }
          };
        },
        675: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3553),
            s = n(3502),
            o = i(n(2407));
          t.default = function () {
            this.minValueInput.addEventListener('change', e =>
              o.default.call(this, e, s.Params.min),
            ),
              this.maxValueInput.addEventListener('change', e =>
                o.default.call(this, e, s.Params.max),
              ),
              this.firstValueInput.addEventListener('change', e =>
                o.default.call(this, e, s.Params.value, r.FIRST_VALUE),
              ),
              this.secondValueInput.addEventListener('change', e =>
                o.default.call(this, e, s.Params.value, r.SECOND_VALUE),
              ),
              this.decimalPlacesInput.addEventListener('change', e =>
                o.default.call(this, e, s.Params.decimalPlaces),
              ),
              this.stepInput.addEventListener('change', e =>
                o.default.call(this, e, s.Params.step),
              ),
              this.isRange.addEventListener('change', e =>
                o.default.call(this, e, s.Params.isRange),
              ),
              this.isVertical.addEventListener('change', e =>
                o.default.call(this, e, s.Params.direction),
              ),
              this.hasFill.addEventListener('change', e =>
                o.default.call(this, e, s.Params.hasFill),
              ),
              this.hasTips.addEventListener('change', e =>
                o.default.call(this, e, s.Params.hasTips),
              ),
              this.hasScale.addEventListener('change', e =>
                o.default.call(this, e, s.Params.hasScale),
              ),
              this.isDecimal.addEventListener('change', e =>
                o.default.call(this, e, s.Params.isDecimal),
              );
          };
        },
        2407: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(879)),
            s = n(3502);
          t.default = function (e, t, n) {
            const i = e.target,
              { value: o } = i,
              a = t === s.Params.value,
              l = 'number' === i.type,
              u = t === s.Params.direction;
            l
              ? a
                ? (this.params[t][n] = +o)
                : (this.params[t] = +o)
              : (this.params[t] = u
                  ? i.checked
                    ? s.Directions.vertical
                    : s.Directions.horizontal
                  : i.checked),
              this.parent.init(
                (0, r.default)(this.params, this.DOMroot),
                s.InitMods.rebuild,
              ),
              this.parent.panel.initializeFormValues(
                (0, r.default)(this.params, this.DOMroot),
              );
          };
        },
        3665: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553),
            r = n(3502);
          t.default = function ({
            min: e,
            max: t,
            value: n,
            isRange: s,
            step: o,
            direction: a,
            hasFill: l,
            hasTips: u,
            hasScale: c,
            decimalPlaces: d,
            isDecimal: f,
          }) {
            (this.minValueInput.value = e.toString()),
              (this.maxValueInput.value = t.toString()),
              (this.decimalPlacesInput.value = d.toString()),
              s
                ? ((this.firstValueInput.value = n[i.FIRST_VALUE].toString()),
                  (this.secondValueInput.value = n[i.SECOND_VALUE].toString()),
                  (this.secondValueInput.disabled = !1))
                : ((this.firstValueInput.value = n[i.FIRST_VALUE].toString()),
                  (this.secondValueInput.disabled = !0)),
              (this.stepInput.value = o.toString()),
              (this.isRange.checked = s),
              (this.isVertical.checked = a === r.Directions.vertical),
              (this.hasFill.checked = l),
              (this.hasTips.checked = u),
              (this.hasScale.checked = c),
              (this.isDecimal.checked = f);
          };
        },
        2550: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e) {
            const t = document.querySelector(`.js-${e.slice(1)}-panel`);
            (this.minValueInput = t.querySelector(`.js-${i.MIN_CLASS}`)),
              (this.maxValueInput = t.querySelector(`.js-${i.MAX_CLASS}`)),
              (this.firstValueInput = t.querySelector(
                `.js-${i.FIRST_VALUE_CLASS}`,
              )),
              (this.secondValueInput = t.querySelector(
                `.js-${i.SECOND_VALUE_CLASS}`,
              )),
              (this.decimalPlacesInput = t.querySelector(
                `.js-${i.DECIMAL_PLACES_CLASS}`,
              )),
              (this.stepInput = t.querySelector(`.js-${i.STEP_CLASS}`)),
              (this.isRange = t.querySelector(`.js-${i.IS_RANGE_CLASS}`)),
              (this.isVertical = t.querySelector(`.js-${i.IS_VERTICAL_CLASS}`)),
              (this.hasFill = t.querySelector(`.js-${i.HAS_FILL_CLASS}`)),
              (this.hasTips = t.querySelector(`.js-${i.HAS_TIPS_CLASS}`)),
              (this.hasScale = t.querySelector(`.js-${i.HAS_SCALE_CLASS}`)),
              (this.isDecimal = t.querySelector(`.js-${i.IS_DECIMAL_CLASS}`));
          };
        },
        8194: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n, i, r) {
              const s = document.createElement('div');
              s.classList.add('custom');
              const o = document.createElement('label');
              o.classList.add(i);
              const a = document.createElement('input');
              (a.type = t),
                a.classList.add(n),
                a.classList.add(`js-${n}`),
                (o.innerHTML = e),
                r.appendChild(o),
                'checkbox' === t
                  ? (o.appendChild(a), o.appendChild(s))
                  : (o.appendChild(s), s.appendChild(a));
            });
        },
        1643: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3553),
            s = i(n(8194));
          t.default = function () {
            const e = this.DOMroot.parentElement.parentElement,
              t = document.createElement('div');
            t.classList.add('slider-panel'),
              t.classList.add(`${this.root.slice(1)}-panel`),
              t.classList.add(`js-${this.root.slice(1)}-panel`),
              (0, s.default)(
                'Min Value',
                'number',
                r.MIN_CLASS,
                'text-label',
                t,
              ),
              (0, s.default)(
                'Max Value',
                'number',
                r.MAX_CLASS,
                'text-label',
                t,
              ),
              (0, s.default)(
                'First Value',
                'number',
                r.FIRST_VALUE_CLASS,
                'text-label',
                t,
              ),
              (0, s.default)(
                'Second Value',
                'number',
                r.SECOND_VALUE_CLASS,
                'text-label',
                t,
              ),
              (0, s.default)('Step', 'number', r.STEP_CLASS, 'text-label', t),
              (0, s.default)(
                'Decimal Places',
                'number',
                r.DECIMAL_PLACES_CLASS,
                'text-label',
                t,
              );
            const n = document.createElement('div');
            n.classList.add('checkbox-panel'),
              (0, s.default)(
                'Range',
                'checkbox',
                r.IS_RANGE_CLASS,
                'checkbox-label',
                n,
              ),
              (0, s.default)(
                'Vertical',
                'checkbox',
                r.IS_VERTICAL_CLASS,
                'checkbox-label',
                n,
              ),
              (0, s.default)(
                'Fill',
                'checkbox',
                r.HAS_FILL_CLASS,
                'checkbox-label',
                n,
              ),
              (0, s.default)(
                'Tips',
                'checkbox',
                r.HAS_TIPS_CLASS,
                'checkbox-label',
                n,
              ),
              (0, s.default)(
                'Scale',
                'checkbox',
                r.HAS_SCALE_CLASS,
                'checkbox-label',
                n,
              ),
              (0, s.default)(
                'Decimal',
                'checkbox',
                r.IS_DECIMAL_CLASS,
                'checkbox-label',
                n,
              ),
              e.appendChild(t),
              t.appendChild(n);
          };
        },
        4109: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3502),
            s = i(n(1932)),
            o = i(n(7231)),
            a = i(n(879));
          t.default = class {
            constructor(e, t) {
              (this.root = e),
                (this.DOMroot = document.querySelector(e)),
                (this.params = (0, a.default)(t, this.DOMroot)),
                (this.slider = new s.default(e, this.params)),
                (this.panel = new o.default(this.params, e, this)),
                this.init(this.params, r.InitMods.init),
                this.panel.addInputListeners();
            }
            init(e, t) {
              t === r.InitMods.rebuild &&
                ((this.params = e), this.slider.init(e, t)),
                this.panel.initializeInputs(this.root),
                this.panel.initializeFormValues(e);
            }
          };
        },
        1787: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 }), n(9653);
          const r = i(n(4109));
          new r.default('.slider-1', { onChange: e => console.log(e.value) }),
            new r.default('.slider-2', {
              min: -6,
              max: 6,
              step: 3,
              value: [-3, 3],
              isRange: !0,
              direction: 'horizontal',
              hasFill: !0,
              hasTips: !0,
              hasScale: !0,
              isDecimal: !0,
              decimalPlaces: 1,
            }),
            new r.default('.slider-3', {
              min: -15e3,
              max: 15e3,
              step: 500,
              value: [-3e3, 3e3],
              isRange: !0,
              direction: 'horizontal',
              hasFill: !0,
              hasTips: !0,
              hasScale: !0,
              isDecimal: !1,
              decimalPlaces: 1,
            }),
            new r.default('.slider-4', {
              min: -100,
              max: 100,
              step: 10,
              value: -50,
              isRange: !1,
              direction: 'vertical',
              hasFill: !0,
              hasTips: !0,
              hasScale: !0,
              isDecimal: !1,
              decimalPlaces: 1,
            });
        },
        4829: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(4524)),
            s = n(3502),
            o = i(n(225)),
            a = i(n(3541)),
            l = n(3553);
          class u extends r.default {
            constructor(e, t) {
              super(),
                (this.DOMroot = e),
                (this.stance = t),
                (this.step = 1),
                (this.value = 0),
                (this.stepCount = 0),
                (this.stepPercent = 0),
                (this.offset = 0),
                (this.stepOffset = 0),
                (this.cursorOffset = 0),
                (this.isDecimal = !1),
                (this.decimalPlaces = 0),
                (this.endsValidation = a.default.bind(this)),
                (this.prepareOffset = o.default.bind(this));
            }
            setStep(e, t) {
              (this.step = e),
                (this.stepCount = (t.max - t.min) / e),
                (this.stepPercent = 100 / this.stepCount);
            }
            setValue(e) {
              this.value = +e.toFixed(this.decimalPlaces);
            }
            setStance(e) {
              this.stance = e;
            }
            setIsDecimal(e) {
              this.isDecimal = e;
            }
            setDecimalPlaces(e) {
              this.decimalPlaces = e;
            }
            calculateOffset(e, t) {
              return this.prepareOffset(
                (this.value - e.min) / ((e.max - e.min) / 100),
                t,
              );
            }
            setOffset(e) {
              this.offset = e;
            }
            setStepOffset(e) {
              this.stepOffset = e;
            }
            calculateStepOffset() {
              return (
                Math.round(this.cursorOffset / this.stepPercent) *
                this.stepPercent
              );
            }
            setCursorOffset(e) {
              this.cursorOffset = e;
            }
            updateThumbValue(e, t, n, i) {
              i === s.Directions.horizontal
                ? this.setCursorOffset(n)
                : this.setCursorOffset(l.MAX_OFFSET - n),
                this.setStepOffset(this.calculateStepOffset()),
                this.setValue(this.calculateValue(t)),
                this.setOffset(this.calculateOffset(t, i)),
                this.endsValidation(t, i),
                this.notify(
                  s.SubscribersNames.updateThumbView,
                  this.value,
                  this.offset,
                  e,
                  this.cursorOffset,
                ),
                this.notify(
                  s.SubscribersNames.updateTipView,
                  e,
                  this.offset,
                  this.value,
                ),
                this.notify(s.SubscribersNames.updateValues, this.value, e);
            }
            getValue() {
              return this.value;
            }
            getOffset() {
              return this.offset;
            }
            getState() {
              return {
                step: this.step,
                stepCount: this.stepCount,
                stepPercent: this.stepPercent,
                value: this.value,
                offset: this.offset,
                stepOffset: this.stepOffset,
                isDecimal: this.isDecimal,
                decimalPlaces: this.decimalPlaces,
              };
            }
            calculateValue(e) {
              return (this.stepOffset / this.stepPercent) * this.step + e.min;
            }
          }
          t.default = u;
        },
        3541: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553),
            r = n(3502);
          t.default = function (e, t) {
            this.getOffset() > i.MAX_OFFSET &&
              (this.setOffset(i.MAX_OFFSET),
              this.setValue(t === r.Directions.horizontal ? e.max : e.min)),
              this.getOffset() < i.MIN_OFFSET &&
                (this.setOffset(i.MIN_OFFSET),
                this.setValue(t === r.Directions.horizontal ? e.min : e.max));
          };
        },
        225: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553),
            r = n(3502);
          t.default = function (e, t) {
            return t === r.Directions.horizontal ? e : i.MAX_OFFSET - e;
          };
        },
        610: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(4524)),
            s = n(3553),
            o = n(3502);
          class a extends r.default {
            constructor(e) {
              super(),
                (this.DOMroot = e),
                (this.ends = { min: 1, max: 100 }),
                (this.size = 200),
                (this.isRange = !1),
                (this.direction = o.Directions.horizontal),
                (this.fillSize = 0),
                (this.fillOffset = 0),
                (this.hasFill = !0),
                (this.hasTips = !0),
                (this.hasScale = !0);
            }
            setEnds({ min: e, max: t }) {
              this.ends = { min: e, max: t };
            }
            setSize(e) {
              this.size = e;
            }
            setIsRange(e) {
              this.isRange = e;
            }
            setDirection(e) {
              this.direction = e;
            }
            setSubViews(e, t, n) {
              (this.hasScale = n), (this.hasTips = t), (this.hasFill = e);
            }
            calculateFillSize(e) {
              return this.isRange
                ? this.direction === o.Directions.horizontal
                  ? e[s.SECOND_OFFSET] - e[s.FIRST_OFFSET]
                  : e[s.FIRST_OFFSET] - e[s.SECOND_OFFSET]
                : this.direction === o.Directions.horizontal
                ? e[s.FIRST_OFFSET]
                : s.MAX_OFFSET - e[s.FIRST_OFFSET];
            }
            setFillSize(e) {
              this.fillSize = e;
            }
            calculateFillOffset(e) {
              return this.isRange
                ? this.direction === o.Directions.horizontal
                  ? e[s.FIRST_OFFSET]
                  : e[s.SECOND_OFFSET]
                : s.MIN_OFFSET;
            }
            setFillOffset(e) {
              this.fillOffset = e;
            }
            updateTrackFill(e) {
              this.setFillSize(this.calculateFillSize(e)),
                this.setFillOffset(this.calculateFillOffset(e)),
                this.notify(
                  o.SubscribersNames.updateTrackFillView,
                  this.fillSize,
                  this.fillOffset,
                );
            }
            prepareChooseStance(e) {
              let t = s.FIRST_THUMB_STANCE;
              e > this.fillSize / 2 + this.fillOffset &&
                (t = s.SECOND_THUMB_STANCE),
                this.direction === o.Directions.vertical && (t = +!t),
                this.isRange || (t = s.FIRST_THUMB_STANCE),
                this.notify(
                  o.SubscribersNames.updateThumbModel,
                  t,
                  e,
                  this.direction,
                  this.size,
                );
            }
            getState() {
              return {
                ends: this.ends,
                size: this.size,
                isRange: this.isRange,
                direction: this.direction,
                hasFill: this.hasFill,
                hasTips: this.hasTips,
                hasScale: this.hasScale,
              };
            }
            getFillSize() {
              return this.fillSize;
            }
            getFillOffset() {
              return this.fillOffset;
            }
            getFillState() {
              return {
                fillSize: this.getFillSize(),
                fillOffset: this.getFillOffset(),
              };
            }
          }
          t.default = a;
        },
        4524: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = class {
              constructor(e = {}) {
                this.subscribers = e;
              }
              subscribe(e, t) {
                const n = this.subscribers[e];
                n ? n.push(t) : (this.subscribers[e] = [t]);
              }
              unsubscribe(e, t) {
                this.subscribers[e].filter(e => t !== e);
              }
              notify(e, ...t) {
                this.subscribers[e].forEach(e => {
                  e(...t);
                });
              }
            });
        },
        5015: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(8892)),
            s = i(n(610)),
            o = n(3502),
            a = i(n(4829)),
            l = i(n(5617)),
            u = i(n(7868)),
            c = i(n(349)),
            d = i(n(2691)),
            f = i(n(9102)),
            h = i(n(9148)),
            p = i(n(5664)),
            m = i(n(1819)),
            v = i(n(4185)),
            g = i(n(8707)),
            y = n(3553);
          t.default = class {
            constructor(e, t) {
              (this.root = e),
                (this.DOMroot = document.querySelector(e)),
                (this.DOMparent = this.DOMroot.parentElement),
                (this.trackModel = new s.default(this.DOMroot)),
                (this.view = new r.default(this.DOMroot)),
                (this.thumbs = []),
                (this.params = t),
                (this.thumbStance = 0),
                (this.clearHTML = l.default.bind(this)),
                (this.removeListeners = u.default.bind(this)),
                (this.subscribe = c.default.bind(this)),
                (this.updateThumbModelBeforeTrackClick = d.default.bind(this)),
                (this.updateThumbModel = v.default.bind(this)),
                (this.updateTrackFillModel = f.default.bind(this)),
                (this.updateThumbView = h.default.bind(this)),
                (this.updateTipView = p.default.bind(this)),
                (this.addListeners = g.default.bind(this)),
                (this.updateTrackFillView = m.default.bind(this));
            }
            init(e, t) {
              t === o.InitMods.rebuild &&
                ((this.params = e),
                (this.view.isRange = !1),
                this.removeListeners(),
                this.clearHTML(e.direction),
                (this.thumbStance = 0),
                (this.thumbs = []),
                (this.view.thumbView.thumbs = []),
                (this.view.tipView.tips = [])),
                this.addSliderClasses(e.direction),
                this.setTrackModelState(e),
                this.setViewState(),
                this.createSlider(e),
                this.subscribe(),
                this.addListeners(e.isRange);
            }
            setTrackModelState({
              min: e,
              max: t,
              isRange: n,
              direction: i,
              hasFill: r,
              hasTips: s,
              hasScale: a,
            }) {
              const l =
                i === o.Directions.horizontal
                  ? this.DOMroot.getBoundingClientRect().width
                  : this.DOMroot.getBoundingClientRect().height;
              return (
                this.trackModel.setSize(l),
                this.trackModel.setEnds({ min: e, max: t }),
                this.trackModel.setIsRange(n),
                this.trackModel.setDirection(i),
                this.trackModel.setSubViews(r, s, a),
                this
              );
            }
            setViewState() {
              return this.view.setState(this.trackModel.getState()), this;
            }
            updateValues(e, t) {
              var n;
              this.params.value[t] = e;
              const i =
                null === (n = this.DOMparent.parentElement) || void 0 === n
                  ? void 0
                  : n.querySelector('.slider-panel');
              i && this.updatePanelValues(t, i);
            }
            updatePanelValues(e, t) {
              e === y.FIRST_THUMB_STANCE
                ? (t.querySelector('.first-value').value = String(
                    this.params.value[e],
                  ))
                : (t.querySelector('.second-value').value = String(
                    this.params.value[e],
                  ));
            }
            addSliderClasses(e) {
              this.DOMroot.classList.add(`${y.MAIN_CLASS}_${e}`),
                this.DOMparent.classList.add(`${y.PARENT_CLASS}_${e}`);
            }
            createThumb(
              {
                step: e,
                value: t,
                min: n,
                max: i,
                direction: r,
                hasTips: s,
                isDecimal: o,
                decimalPlaces: a,
              },
              l,
            ) {
              this.createThumbModel(l),
                this.setThumbModelState(
                  l,
                  e,
                  Array.isArray(t) ? t[l] : t,
                  n,
                  i,
                  o,
                  a,
                  r,
                ),
                this.renderThumb(l),
                this.setThumbView(l, r),
                this.setThumbPlacement(l),
                s && this.createTip(l, r);
            }
            createTip(e, t) {
              this.setTipView(e), this.renderTip(t, e), this.setTipPlacement(e);
            }
            createSlider(e) {
              this.createThumb(e, this.thumbStance),
                this.createSubViewsView(e),
                e.isRange &&
                  ((this.thumbStance += 1),
                  this.createThumb(e, this.thumbStance)),
                this.createTrackFill();
            }
            createTrackFill() {
              this.setTrackFillModel(),
                this.setTrackFillView(),
                this.setTrackFillPlacement();
            }
            setThumbModelState(e, t, n, i, r, s, o, a) {
              this.thumbs.forEach(e => {
                e.setStep(t, { min: i, max: r });
              }),
                this.thumbs[e].setStance(e),
                this.thumbs[e].setValue(n),
                this.thumbs[e].setOffset(
                  this.thumbs[e].calculateOffset({ min: i, max: r }, a),
                ),
                this.thumbs[e].setIsDecimal(s),
                this.thumbs[e].setDecimalPlaces(o);
            }
            setThumbView(e, t) {
              const {
                step: n,
                stepCount: i,
                stepPercent: r,
                value: s,
                offset: o,
                isDecimal: a,
                decimalPlaces: l,
              } = this.thumbs[e].getState();
              this.view.thumbView.setStep(n, r, i),
                this.view.thumbView.setValue(s, e),
                this.view.thumbView.setOffset(o, e),
                this.view.thumbView.setIsDecimal(a),
                this.view.thumbView.setDecimalPlaces(l),
                this.view.prepareDirectionForInteraction(t);
            }
            setThumbPlacement(e) {
              const { offset: t } = this.thumbs[e].getState();
              this.view.initialThumbPlacement(t, e);
            }
            setTrackFillModel() {
              const e = [];
              this.thumbs.forEach(t => e.push(t.getState().offset)),
                this.trackModel.setFillSize(
                  this.trackModel.calculateFillSize(e),
                ),
                this.trackModel.setFillOffset(
                  this.trackModel.calculateFillOffset(e),
                );
            }
            setTrackFillView() {
              this.view.setFillState(this.trackModel.getFillState());
            }
            setTrackFillPlacement() {
              this.view.initialFillPlacement();
            }
            setTipPlacement(e) {
              this.view.initialTipPlacement(e);
            }
            createThumbModel(e) {
              this.thumbs.push(new a.default(this.DOMroot, e));
            }
            renderThumb(e) {
              this.view.thumbView.createThumb(e);
            }
            renderTrack(e) {
              this.view.trackView.createTrack(e);
            }
            renderScale(e, t, n, i) {
              this.view.scaleView.createScale(e),
                this.view.scaleView.createScaleMarks(t, n, i, e);
            }
            renderFill(e) {
              this.view.fillView.createFill(e);
            }
            renderTip(e, t) {
              this.view.tipView.createTip(e, t);
            }
            setTipView(e) {
              const t = this.thumbs[e].getOffset(),
                n = this.thumbs[e].getValue();
              this.view.tipView.setOffset(t, e),
                this.view.tipView.setValue(n, e);
            }
            createSubViewsView({
              direction: e,
              step: t,
              max: n,
              min: i,
              hasFill: r,
              hasScale: s,
            }) {
              this.renderTrack(e),
                s && this.renderScale(e, t, n, i),
                r && this.renderFill(e);
            }
          };
        },
        8707: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e) {
            this.view.thumbView.dragAndDropThumb(i.FIRST_THUMB_STANCE),
              this.view.trackView.clickTrack(),
              e && this.view.thumbView.dragAndDropThumb(i.SECOND_THUMB_STANCE);
          };
        },
        5617: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function (e) {
            const t =
                e === i.Directions.horizontal
                  ? i.Directions.vertical
                  : i.Directions.horizontal,
              n = this.DOMroot.parentElement;
            this.DOMroot.classList.remove(`slider_${t}`),
              n.classList.remove(`slider-parent_${t}`),
              (this.DOMroot.innerHTML = '');
          };
        },
        4185: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              this.thumbs[e].updateThumbValue(e, this.view.ends, t, n);
            });
        },
        2691: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e) {
              this.trackModel.prepareChooseStance(e);
            });
        },
        9102: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e) {
              this.trackModel.updateTrackFill(e);
            });
        },
        9148: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              this.view.thumbView.setOffset(t, n),
                this.view.thumbView.setValue(e, n),
                this.view.thumbView.updateThumbPosition(t, n),
                (this.view.thumbView.activeStance = n),
                this.params.onChange && this.params.onChange(this.params);
            });
        },
        5664: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              this.view.tipView.setOffset(t, e),
                this.view.tipView.setValue(n, e),
                this.view.tipView.updateTipsPosition(e);
            });
        },
        1819: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t) {
              this.view.fillView.setSize(e),
                this.view.fillView.setOffset(t),
                this.view.fillView.updateFill();
            });
        },
        7868: (e, t, n) => {
          'use strict';
          var i = n(8563);
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function () {
              i(this.root).off();
            });
        },
        349: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function () {
            this.view.thumbView.subscribe(
              i.SubscribersNames.updateThumbModel,
              this.updateThumbModel,
            ),
              this.view.thumbView.subscribe(
                i.SubscribersNames.updateTrackFillModel,
                this.updateTrackFillModel,
              ),
              this.view.trackView.subscribe(
                i.SubscribersNames.updateThumbModelBeforeTrackClick,
                this.updateThumbModelBeforeTrackClick,
              ),
              this.view.trackView.subscribe(
                i.SubscribersNames.updateTrackFillModel,
                this.updateTrackFillModel,
              ),
              this.thumbs.forEach(e =>
                e.subscribe(
                  i.SubscribersNames.updateTipView,
                  this.updateTipView,
                ),
              ),
              this.thumbs.forEach(e =>
                e.subscribe(
                  i.SubscribersNames.updateThumbView,
                  this.updateThumbView,
                ),
              ),
              this.thumbs.forEach(e => {
                e.subscribe(
                  i.SubscribersNames.updateValues,
                  this.updateValues.bind(this),
                );
              }),
              this.trackModel.subscribe(
                i.SubscribersNames.updateThumbModel,
                this.updateThumbModel,
              ),
              this.trackModel.subscribe(
                i.SubscribersNames.updateTrackFillView,
                this.updateTrackFillView,
              );
          };
        },
        444: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t) {
              return Math.min(e, t);
            });
        },
        8367: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e, t) {
            const n = t.dataset,
              r =
                n.firstValue && n.secondValue
                  ? [+n.firstValue, +n.secondValue]
                  : i.DEFAULT_SLIDER_PARAMS.value,
              {
                min: s = Number(n.min) || i.DEFAULT_SLIDER_PARAMS.min,
                max: o = Number(n.max) || i.DEFAULT_SLIDER_PARAMS.max,
                value: a = r,
                decimalPlaces: l = Number(n.decimalPlaces) ||
                  i.DEFAULT_SLIDER_PARAMS.decimalPlaces,
                step: u = Number(n.step) || i.DEFAULT_SLIDER_PARAMS.step,
                isRange: c = Boolean(n.isRange) ||
                  i.DEFAULT_SLIDER_PARAMS.isRange,
                direction: d = n.direction || i.DEFAULT_SLIDER_PARAMS.direction,
                hasFill: f = Boolean(n.hasFill) ||
                  i.DEFAULT_SLIDER_PARAMS.hasFill,
                hasTips: h = Boolean(n.hasTips) ||
                  i.DEFAULT_SLIDER_PARAMS.hasTips,
                hasScale: p = Boolean(n.hasScale) ||
                  i.DEFAULT_SLIDER_PARAMS.hasScale,
                isDecimal: m = Boolean(n.isDecimal) ||
                  i.DEFAULT_SLIDER_PARAMS.isDecimal,
              } = e;
            return {
              min: s,
              max: o,
              value: a,
              decimalPlaces: l,
              isRange: c,
              direction: d,
              hasFill: f,
              hasTips: h,
              hasScale: p,
              isDecimal: m,
              step: u,
            };
          };
        },
        1584: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e, t, n) {
            const r = e;
            return (
              (r[i.FIRST_THUMB_STANCE] = Math.max(t, r[i.FIRST_THUMB_STANCE])),
              (r[i.FIRST_THUMB_STANCE] = Math.min(n, r[i.FIRST_THUMB_STANCE])),
              r[i.FIRST_THUMB_STANCE]
            );
          };
        },
        7272: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              return Math.max(e - n, t);
            });
        },
        1925: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              return Math.min(t - n, e);
            });
        },
        879: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3553),
            s = i(n(8367)),
            o = i(n(444)),
            a = i(n(1584)),
            l = i(n(7272)),
            u = i(n(1925)),
            c = i(n(6004)),
            d = i(n(9194)),
            f = i(n(6198));
          t.default = function (e, t) {
            let {
              min: n,
              max: i,
              value: h,
              decimalPlaces: p,
              step: m,
            } = (0, s.default)(e, t);
            const {
              isRange: v,
              direction: g,
              hasFill: y,
              hasTips: b,
              hasScale: S,
              isDecimal: x,
            } = (0, s.default)(e, t);
            (h = (0, f.default)(h)),
              (m = (0, d.default)(m, n, i)),
              (n = (0, u.default)(n, i, m)),
              (i = (0, l.default)(n, i, m)),
              (p = (0, o.default)(p, 3)),
              (h[r.FIRST_THUMB_STANCE] = (0, a.default)(h, n, i));
            const T = 1 === h.length;
            v &&
              (T && h.push(h[r.FIRST_THUMB_STANCE] + m),
              (h[r.SECOND_THUMB_STANCE] = (0, c.default)(h, n, i)));
            const _ = {
              min: n,
              max: i,
              step: m,
              value: h,
              isRange: v,
              direction: g,
              hasFill: y,
              hasTips: b,
              hasScale: S,
              isDecimal: x,
              decimalPlaces: p,
            };
            return e.onChange && (_.onChange = e.onChange), _;
          };
        },
        6004: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e, t, n) {
            const r = e;
            return (
              (r[i.SECOND_THUMB_STANCE] = Math.max(
                t,
                e[i.SECOND_THUMB_STANCE],
              )),
              (r[i.SECOND_THUMB_STANCE] = Math.min(
                n,
                e[i.SECOND_THUMB_STANCE],
              )),
              (r[i.SECOND_THUMB_STANCE] = Math.max(
                r[i.FIRST_THUMB_STANCE],
                r[i.SECOND_THUMB_STANCE],
              )),
              r[i.SECOND_THUMB_STANCE]
            );
          };
        },
        9194: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, n) {
              let i = Math.min(Math.abs(t - n), e);
              return i <= 0 && (i = e), i;
            });
        },
        6198: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e) {
              return Array.isArray(e) ? e : [e];
            });
        },
        1932: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3502),
            s = i(n(5015)),
            o = i(n(879));
          t.default = class {
            constructor(e, t) {
              (this.root = e),
                (this.DOMroot = document.querySelector(e)),
                (this.params = (0, o.default)(t, this.DOMroot)),
                (this.presenter = new s.default(
                  e,
                  (0, o.default)(t, this.DOMroot),
                )),
                this.init(this.params, r.InitMods.init);
            }
            init(e, t) {
              this.presenter.init(e, t);
            }
          };
        },
        8892: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(6746)),
            s = i(n(4617)),
            o = i(n(4524)),
            a = i(n(4002)),
            l = i(n(9336)),
            u = n(3502),
            c = i(n(7348)),
            d = i(n(2755)),
            f = i(n(3543)),
            h = i(n(9347)),
            p = i(n(1181)),
            m = i(n(2578));
          class v extends o.default {
            constructor(e) {
              super(),
                (this.DOMroot = e),
                (this.thumbView = new r.default(this)),
                (this.trackView = new s.default(this)),
                (this.scaleView = new a.default(this)),
                (this.fillView = new l.default(this)),
                (this.tipView = new f.default(this)),
                (this.ends = { min: 0, max: 0 }),
                (this.size = 200),
                (this.isRange = !1),
                (this.direction = u.Directions.horizontal),
                (this.hasFill = !0),
                (this.hasTips = !0),
                (this.hasScale = !0),
                (this.offsetDirection = u.OffsetDirections.left),
                (this.fillDirection = u.FillDirections.width),
                (this.initialThumbPlacement = c.default.bind(this)),
                (this.initialFillPlacement = d.default.bind(this)),
                (this.initialTipPlacement = h.default.bind(this)),
                (this.prepareDirectionForInteraction = p.default.bind(this)),
                (this.calculateCursorCoordinate = m.default.bind(this));
            }
            setState({
              isRange: e,
              direction: t,
              ends: n,
              size: i,
              hasTips: r,
              hasScale: s,
              hasFill: o,
            }) {
              (this.ends = n),
                (this.size = i),
                (this.isRange = e),
                (this.direction = t),
                (this.hasTips = r),
                (this.hasFill = o),
                (this.hasScale = s);
            }
            setFillState({ fillSize: e, fillOffset: t }) {
              this.fillView.setSize(e), this.fillView.setOffset(t);
            }
          }
          t.default = v;
        },
        9336: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(4524)),
            s = i(n(9110)),
            o = n(3553);
          class a extends r.default {
            constructor(e) {
              super(),
                (this.fill = document.querySelector(`.${o.FILL_CLASS}`)),
                (this.view = e),
                (this.size = 0),
                (this.offset = 0),
                (this.updateFill = s.default.bind(this));
            }
            setSize(e) {
              this.size = e;
            }
            setOffset(e) {
              this.offset = e;
            }
            getSize() {
              return this.size;
            }
            getOffset() {
              return this.offset;
            }
            createFill(e) {
              const t = document.createElement('div');
              t.classList.add(o.FILL_CLASS),
                t.classList.add(`js-${o.FILL_CLASS}`),
                t.classList.add(`${o.FILL_CLASS}_${e}`),
                (t.dataset.testid = 'test-fill'),
                (this.fill = t),
                this.view.DOMroot.appendChild(t);
            }
          }
          t.default = a;
        },
        9110: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function () {
              this.view.isRange
                ? ((this.fill.style[
                    this.view.offsetDirection
                  ] = `${this.getOffset()}%`),
                  (this.fill.style[
                    this.view.fillDirection
                  ] = `${this.getSize()}%`))
                : (this.fill.style[
                    this.view.fillDirection
                  ] = `${this.getSize()}%`);
            });
        },
        4002: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3553),
            s = i(n(3025));
          t.default = class {
            constructor(e) {
              (this.view = e),
                (this.scale = document.querySelector(`.${r.SCALE_CLASS}`)),
                (this.createScaleMarks = s.default.bind(this));
            }
            createScale(e) {
              const t = document.createElement('div');
              t.classList.add(r.SCALE_CLASS),
                t.classList.add(`js-${r.SCALE_CLASS}`),
                t.classList.add(`${r.SCALE_CLASS}_${e}`),
                (t.dataset.testid = 'test-scale'),
                (this.scale = t),
                this.view.DOMroot.appendChild(t);
            }
          };
        },
        3025: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = n(3553),
            s = n(3502),
            o = i(n(4396));
          t.default = function (e, t, n, i) {
            const a = (0, o.default)(n, t, e);
            i === s.Directions.vertical &&
              (a.values.reverse(), a.offsets.reverse());
            for (let e = 0; e < a.values.length; e += 1) {
              const t = document.createElement('div');
              t.classList.add(`${r.SCALE_CLASS}-mark`),
                t.classList.add(`${r.SCALE_CLASS}-mark_${i}`),
                (t.dataset.testid = 'test-scale-mark');
              const n =
                this.view.direction === s.Directions.horizontal
                  ? a.offsets[e]
                  : Math.abs(100 - a.offsets[e]);
              t.style[this.view.offsetDirection] = `${n}%`;
              const o = document.createElement('div');
              o.classList.add(`${r.SCALE_CLASS}-number`),
                o.classList.add(`${r.SCALE_CLASS}-number_${i}`),
                (o.innerHTML = a.values[e].toString()),
                t.appendChild(o),
                this.scale.appendChild(t);
            }
          };
        },
        4396: (e, t) => {
          'use strict';
          function n(e, t) {
            for (let n = 0; n < t.length; n += 1)
              if (e % t[n] == 0) return t[n];
            return n(e - 1, t);
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t, i) {
              const r = Math.round((t - e) / i + 1),
                s = r - 1,
                o = n(s, [3, 5, 7, 11]);
              let a = Math.max(Math.floor(s / o), 1);
              a = a < 15 ? Math.min(a, o) : a;
              const l = Math.ceil(r / a),
                u = Math.abs(t - e),
                c =
                  Math.floor(u / i) > l
                    ? Math.round(Math.round(u / i) / (l - 1)) * i
                    : i;
              return {
                values: new Array(l).fill(null).map((n, i) => {
                  let r = e + c * i;
                  return (
                    (r = Math.min(r, t)), i === l - 1 && (r = t), +r.toFixed()
                  );
                }),
                offsets: new Array(l).fill('').map((e, t) => {
                  let n = Math.abs(c / u) * t * 100;
                  return (
                    (n = Math.min(100, n)),
                    t === l - 1 && (n = 100),
                    +n.toFixed()
                  );
                }),
              };
            });
        },
        6746: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(4524)),
            s = i(n(9085)),
            o = i(n(7989)),
            a = i(n(247)),
            l = n(3553);
          class u extends r.default {
            constructor(e) {
              super(),
                (this.view = e),
                (this.step = 0),
                (this.stepPercent = 0),
                (this.stepCount = 0),
                (this.value = []),
                (this.offset = []),
                (this.isDecimal = !1),
                (this.decimalPlaces = 0),
                (this.activeStance = 0),
                (this.thumbs = []),
                (this.updateThumbPosition = s.default.bind(this)),
                (this.validateCollision = o.default.bind(this)),
                (this.dragAndDropThumb = a.default.bind(this));
            }
            createThumb(e) {
              const t = document.createElement('div');
              t.classList.add(l.THUMB_CLASS),
                t.classList.add(`js-${l.THUMB_CLASS}-${e}`),
                t.classList.add(`${l.THUMB_CLASS}-${e}`),
                (t.dataset.testid = `test-thumb-${e}`),
                this.thumbs.push(t),
                this.view.DOMroot.appendChild(t);
            }
            setStep(e, t, n) {
              (this.step = e), (this.stepPercent = t), (this.stepCount = n);
            }
            getStep() {
              return {
                step: this.step,
                stepPercent: this.stepPercent,
                stepCount: this.stepCount,
              };
            }
            setValue(e, t) {
              this.value[t] = e;
            }
            getValue() {
              return this.value;
            }
            setOffset(e, t) {
              this.offset[t] = e;
            }
            getOffset() {
              return this.offset;
            }
            setIsDecimal(e) {
              this.isDecimal = e;
            }
            setDecimalPlaces(e) {
              this.isDecimal
                ? (this.decimalPlaces = e)
                : (this.decimalPlaces = 0);
            }
          }
          t.default = u;
        },
        247: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(5422));
          t.default = function (e) {
            const t = this.thumbs[e],
              n = t => {
                (0, r.default)(t, this, e);
              },
              i = e => {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.addEventListener('pointermove', n);
              };
            t.addEventListener('pointerdown', i),
              t.addEventListener('touchstart', i),
              document.addEventListener('pointerup', () => {
                document.removeEventListener('pointermove', n);
              });
          };
        },
        5422: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function (e, t, n) {
            const { direction: r } = t.view,
              s = r === i.Directions.horizontal ? e.pageX : e.pageY,
              o = t.view.calculateCursorCoordinate(
                s,
                r,
                t.view.DOMroot,
                t.view.size,
              ),
              a = t.view.isRange ? t.validateCollision(n) : n;
            t.notify(i.SubscribersNames.updateThumbModel, a, o, r, t.view.size),
              t.notify(i.SubscribersNames.updateTrackFillModel, t.getOffset());
          };
        },
        9085: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t) {
              this.thumbs[t].style[this.view.offsetDirection] = `${e}%`;
            });
        },
        7989: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3553);
          t.default = function (e) {
            const t = +!e;
            if (e === i.FIRST_THUMB_STANCE) {
              if (
                this.getValue()[i.FIRST_VALUE] > this.getValue()[i.SECOND_VALUE]
              )
                return (
                  this.setOffset(
                    i.SECOND_THUMB_STANCE,
                    this.getOffset()[i.FIRST_OFFSET],
                  ),
                  t
                );
            } else if (
              this.getValue()[i.SECOND_VALUE] < this.getValue()[i.FIRST_VALUE]
            )
              return (
                this.setOffset(
                  i.FIRST_THUMB_STANCE,
                  this.getOffset()[i.SECOND_OFFSET],
                ),
                t
              );
            return e;
          };
        },
        3543: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(4524)),
            s = i(n(8106)),
            o = n(3553);
          class a extends r.default {
            constructor(e) {
              super(),
                (this.view = e),
                (this.offset = []),
                (this.tips = []),
                (this.value = []),
                (this.updateTipsPosition = s.default.bind(this));
            }
            setOffset(e, t) {
              this.offset[t] = e;
            }
            getOffset() {
              return this.offset;
            }
            setValue(e, t) {
              this.value[t] = e;
            }
            getValue() {
              return this.value;
            }
            createTip(e, t) {
              const n = document.createElement('div');
              n.classList.add(o.TIP_CLASS),
                n.classList.add(`js-${o.TIP_CLASS}-${t}`),
                n.classList.add(`${o.TIP_CLASS}-${t}`),
                n.classList.add(`${o.TIP_CLASS}_${e}`),
                (n.dataset.testid = 'test-tip'),
                this.tips.push(n),
                this.view.DOMroot.appendChild(n);
            }
          }
          t.default = a;
        },
        8106: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e) {
              0 !== this.tips.length &&
                ((this.tips[e].style[this.view.offsetDirection] = `${
                  this.getOffset()[e]
                }%`),
                (this.tips[e].innerHTML = this.getValue()[e].toFixed(
                  this.view.thumbView.decimalPlaces,
                )));
            });
        },
        4617: function (e, t, n) {
          'use strict';
          var i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, '__esModule', { value: !0 });
          const r = i(n(8050)),
            s = i(n(4524)),
            o = n(3553);
          class a extends s.default {
            constructor(e) {
              super(),
                (this.view = e),
                (this.track = document.querySelector(`.${o.TRACK_CLASS}`));
            }
            createTrack(e) {
              const t = document.createElement('div');
              t.classList.add(o.TRACK_CLASS),
                t.classList.add(`js-${o.TRACK_CLASS}`),
                t.classList.add(`${o.TRACK_CLASS}_${e}`),
                (t.dataset.testid = 'test-track'),
                (this.track = t),
                this.view.DOMroot.appendChild(t);
            }
            clickTrack() {
              this.view.DOMroot.addEventListener('mousedown', e =>
                (0, r.default)(e, this),
              );
            }
          }
          t.default = a;
        },
        8050: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function (e, t) {
            const { direction: n } = t.view,
              r = n === i.Directions.horizontal ? e.pageX : e.pageY,
              s = t.view.calculateCursorCoordinate(
                r,
                n,
                t.view.DOMroot,
                t.view.size,
              );
            t.notify(i.SubscribersNames.updateThumbModelBeforeTrackClick, s),
              t.notify(
                i.SubscribersNames.updateTrackFillModel,
                t.view.thumbView.getOffset(),
              );
          };
        },
        2578: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function (e, t, n, r) {
            return t === i.Directions.horizontal
              ? ((e - n.offsetLeft) / r) * 100
              : ((e - n.offsetTop) / r) * 100;
          };
        },
        2755: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function () {
              this.fillView.updateFill();
            });
        },
        7348: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e, t) {
              this.thumbView.updateThumbPosition(e, t);
            });
        },
        9347: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function (e) {
              this.tipView.updateTipsPosition(e);
            });
        },
        1181: (e, t, n) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 });
          const i = n(3502);
          t.default = function (e) {
            (this.offsetDirection =
              e === i.Directions.horizontal
                ? i.OffsetDirections.left
                : i.OffsetDirections.top),
              (this.fillDirection =
                e === i.Directions.horizontal
                  ? i.FillDirections.width
                  : i.FillDirections.height);
          };
        },
        3553: (e, t) => {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.HAS_TIPS_CLASS =
              t.IS_DECIMAL_CLASS =
              t.DECIMAL_PLACES_CLASS =
              t.HAS_FILL_CLASS =
              t.IS_RANGE_CLASS =
              t.IS_VERTICAL_CLASS =
              t.HAS_SCALE_CLASS =
              t.FIRST_VALUE_CLASS =
              t.SECOND_VALUE_CLASS =
              t.STEP_CLASS =
              t.MAX_CLASS =
              t.MIN_CLASS =
              t.TIP_CLASS =
              t.SCALE_CLASS =
              t.FILL_CLASS =
              t.THUMB_CLASS =
              t.TRACK_CLASS =
              t.MAIN_CLASS =
              t.PARENT_CLASS =
              t.SECOND_OFFSET =
              t.FIRST_OFFSET =
              t.MIN_OFFSET =
              t.MAX_OFFSET =
              t.SECOND_VALUE =
              t.FIRST_VALUE =
              t.SECOND_THUMB_STANCE =
              t.FIRST_THUMB_STANCE =
              t.DEFAULT_SLIDER_PARAMS =
                void 0),
            (t.DEFAULT_SLIDER_PARAMS = {
              min: 0,
              max: 100,
              step: 10,
              value: [0],
              isRange: !1,
              direction: 'horizontal',
              hasFill: !0,
              hasTips: !0,
              hasScale: !0,
              isDecimal: !1,
              decimalPlaces: 0,
            }),
            (t.FIRST_THUMB_STANCE = 0),
            (t.SECOND_THUMB_STANCE = 1),
            (t.FIRST_VALUE = 0),
            (t.SECOND_VALUE = 1),
            (t.FIRST_OFFSET = 0),
            (t.SECOND_OFFSET = 1),
            (t.MAX_OFFSET = 100),
            (t.MIN_OFFSET = 0),
            (t.PARENT_CLASS = 'slider-parent'),
            (t.MAIN_CLASS = 'slider'),
            (t.TRACK_CLASS = 'slider__track'),
            (t.THUMB_CLASS = 'slider__thumb'),
            (t.FILL_CLASS = 'slider__fill'),
            (t.SCALE_CLASS = 'slider__scale'),
            (t.TIP_CLASS = 'slider__tip'),
            (t.MIN_CLASS = 'min-value'),
            (t.MAX_CLASS = 'max-value'),
            (t.FIRST_VALUE_CLASS = 'first-value'),
            (t.SECOND_VALUE_CLASS = 'second-value'),
            (t.STEP_CLASS = 'step'),
            (t.DECIMAL_PLACES_CLASS = 'decimal-places'),
            (t.IS_RANGE_CLASS = 'is-range'),
            (t.IS_VERTICAL_CLASS = 'is-vertical'),
            (t.HAS_SCALE_CLASS = 'has-scale'),
            (t.HAS_FILL_CLASS = 'has-fill'),
            (t.HAS_TIPS_CLASS = 'has-tips'),
            (t.IS_DECIMAL_CLASS = 'is-decimal');
        },
        3502: (e, t) => {
          'use strict';
          var n, i, r, s, o, a;
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.FillDirections =
              t.OffsetDirections =
              t.InitMods =
              t.Params =
              t.Directions =
              t.SubscribersNames =
                void 0),
            (function (e) {
              (e.updateThumbModel = 'UpdateThumbModel'),
                (e.updateTrackFillModel = 'UpdateTrackFillModel'),
                (e.updateThumbModelBeforeTrackClick =
                  'UpdateThumbModelBeforeTrackClick'),
                (e.updateTipView = 'UpdateTipView'),
                (e.updateThumbView = 'UpdateThumbView'),
                (e.updateTrackFillView = 'UpdateTrackFillView'),
                (e.updateValues = 'UpdateValues');
            })(n || (n = {})),
            (t.SubscribersNames = n),
            (function (e) {
              (e.horizontal = 'horizontal'), (e.vertical = 'vertical');
            })(i || (i = {})),
            (t.Directions = i),
            (function (e) {
              (e.min = 'min'),
                (e.max = 'max'),
                (e.step = 'step'),
                (e.value = 'value'),
                (e.isRange = 'isRange'),
                (e.direction = 'direction'),
                (e.hasFill = 'hasFill'),
                (e.hasTips = 'hasTips'),
                (e.hasScale = 'hasScale'),
                (e.isDecimal = 'isDecimal'),
                (e.decimalPlaces = 'decimalPlaces');
            })(r || (r = {})),
            (t.Params = r),
            (function (e) {
              (e.init = 'init'), (e.rebuild = 'rebuild');
            })(s || (s = {})),
            (t.InitMods = s),
            (function (e) {
              (e.left = 'left'), (e.top = 'top');
            })(o || (o = {})),
            (t.OffsetDirections = o),
            (function (e) {
              (e.width = 'width'), (e.height = 'height');
            })(a || (a = {})),
            (t.FillDirections = a);
        },
      },
      t = {};
    function n(i) {
      var r = t[i];
      if (void 0 !== r) return r.exports;
      var s = (t[i] = { id: i, exports: {} });
      return e[i].call(s.exports, s, s.exports, n), s.exports;
    }
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var i = n(1787);
    return i.default;
  })();
});
