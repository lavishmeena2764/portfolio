(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[51], {
    5859: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ry: function() {
                return c
            }
        });
        var r = new WeakMap
          , o = new WeakMap
          , i = {}
          , a = 0
          , l = function(e) {
            return e && (e.host || l(e.parentNode))
        }
          , u = function(e, t, n, u) {
            var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var n = l(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            i[n] || (i[n] = new WeakMap);
            var s = i[n]
              , d = []
              , f = new Set
              , p = new Set(c)
              , m = function(e) {
                !e || f.has(e) || (f.add(e),
                m(e.parentNode))
            };
            c.forEach(m);
            var h = function(e) {
                !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (f.has(e))
                        h(e);
                    else {
                        var t = e.getAttribute(u)
                          , i = null !== t && "false" !== t
                          , a = (r.get(e) || 0) + 1
                          , l = (s.get(e) || 0) + 1;
                        r.set(e, a),
                        s.set(e, l),
                        d.push(e),
                        1 === a && i && o.set(e, !0),
                        1 === l && e.setAttribute(n, "true"),
                        i || e.setAttribute(u, "true")
                    }
                })
            };
            return h(t),
            f.clear(),
            a++,
            function() {
                d.forEach(function(e) {
                    var t = r.get(e) - 1
                      , i = s.get(e) - 1;
                    r.set(e, t),
                    s.set(e, i),
                    t || (o.has(e) || e.removeAttribute(u),
                    o.delete(e)),
                    i || e.removeAttribute(n)
                }),
                --a || (r = new WeakMap,
                r = new WeakMap,
                o = new WeakMap,
                i = {})
            }
        }
          , c = function(e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            u(r, o, n, "aria-hidden")) : function() {
                return null
            }
        }
    },
    2442: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Check", [["polyline", {
            points: "20 6 9 17 4 12",
            key: "10jjfj"
        }]])
    },
    7158: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    },
    6369: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Circle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]])
    },
    3133: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Compass", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["polygon", {
            points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
            key: "m9r19z"
        }]])
    },
    4964: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("FolderKanban", [["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
            key: "1fr9dc"
        }], ["path", {
            d: "M8 10v4",
            key: "tgpxqk"
        }], ["path", {
            d: "M12 10v2",
            key: "hh53o1"
        }], ["path", {
            d: "M16 10v6",
            key: "1d6xys"
        }]])
    },
    3298: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Github", [["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }], ["path", {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }]])
    },
    6539: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Instagram", [["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }], ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }], ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }]])
    },
    7461: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Linkedin", [["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }], ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }], ["circle", {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }]])
    },
    1295: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Mail", [["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }], ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]])
    },
    8004: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Menu", [["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]])
    },
    3088: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Moon", [["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }]])
    },
    5166: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("ScrollText", [["path", {
            d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",
            key: "13a6an"
        }], ["path", {
            d: "M19 17V5a2 2 0 0 0-2-2H4",
            key: "zz82l3"
        }], ["path", {
            d: "M15 8h-5",
            key: "1khuty"
        }], ["path", {
            d: "M15 12h-5",
            key: "r7krc0"
        }]])
    },
    4135: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Sun", [["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }], ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }], ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }], ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }], ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }], ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }], ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }], ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }], ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]])
    },
    2528: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("UserCircle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }], ["path", {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
            key: "154egf"
        }]])
    },
    9031: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(2898);
        let o = (0,
        r.Z)("Wrench", [["path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }]])
    },
    6435: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return c
            },
            f: function() {
                return s
            }
        });
        var r = n(2265);
        let o = ["light", "dark"]
          , i = "(prefers-color-scheme: dark)"
          , a = "undefined" == typeof window
          , l = (0,
        r.createContext)(void 0)
          , u = {
            setTheme: e=>{}
            ,
            themes: []
        }
          , c = ()=>{
            var e;
            return null !== (e = (0,
            r.useContext)(l)) && void 0 !== e ? e : u
        }
          , s = e=>(0,
        r.useContext)(l) ? r.createElement(r.Fragment, null, e.children) : r.createElement(f, e)
          , d = ["light", "dark"]
          , f = ({forcedTheme: e, disableTransitionOnChange: t=!1, enableSystem: n=!0, enableColorScheme: a=!0, storageKey: u="theme", themes: c=d, defaultTheme: s=n ? "system" : "light", attribute: f="data-theme", value: g, children: y, nonce: w})=>{
            let[b,E] = (0,
            r.useState)(()=>m(u, s))
              , [x,M] = (0,
            r.useState)(()=>m(u))
              , C = g ? Object.values(g) : c
              , R = (0,
            r.useCallback)(e=>{
                let r = e;
                if (!r)
                    return;
                "system" === e && n && (r = v());
                let i = g ? g[r] : r
                  , l = t ? h() : null
                  , u = document.documentElement;
                if ("class" === f ? (u.classList.remove(...C),
                i && u.classList.add(i)) : i ? u.setAttribute(f, i) : u.removeAttribute(f),
                a) {
                    let e = o.includes(s) ? s : null
                      , t = o.includes(r) ? r : e;
                    u.style.colorScheme = t
                }
                null == l || l()
            }
            , [])
              , _ = (0,
            r.useCallback)(e=>{
                E(e);
                try {
                    localStorage.setItem(u, e)
                } catch (e) {}
            }
            , [e])
              , k = (0,
            r.useCallback)(t=>{
                let r = v(t);
                M(r),
                "system" === b && n && !e && R("system")
            }
            , [b, e]);
            (0,
            r.useEffect)(()=>{
                let e = window.matchMedia(i);
                return e.addListener(k),
                k(e),
                ()=>e.removeListener(k)
            }
            , [k]),
            (0,
            r.useEffect)(()=>{
                let e = e=>{
                    e.key === u && _(e.newValue || s)
                }
                ;
                return window.addEventListener("storage", e),
                ()=>window.removeEventListener("storage", e)
            }
            , [_]),
            (0,
            r.useEffect)(()=>{
                R(null != e ? e : b)
            }
            , [e, b]);
            let S = (0,
            r.useMemo)(()=>({
                theme: b,
                setTheme: _,
                forcedTheme: e,
                resolvedTheme: "system" === b ? x : b,
                themes: n ? [...c, "system"] : c,
                systemTheme: n ? x : void 0
            }), [b, _, e, x, n, c]);
            return r.createElement(l.Provider, {
                value: S
            }, r.createElement(p, {
                forcedTheme: e,
                disableTransitionOnChange: t,
                enableSystem: n,
                enableColorScheme: a,
                storageKey: u,
                themes: c,
                defaultTheme: s,
                attribute: f,
                value: g,
                children: y,
                attrs: C,
                nonce: w
            }), y)
        }
          , p = (0,
        r.memo)(({forcedTheme: e, storageKey: t, attribute: n, enableSystem: a, enableColorScheme: l, defaultTheme: u, value: c, attrs: s, nonce: d})=>{
            let f = "system" === u
              , p = "class" === n ? `var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`
              , m = l ? o.includes(u) && u ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
              , h = (e,t=!1,r=!0)=>{
                let i = c ? c[e] : e
                  , a = t ? e + "|| ''" : `'${i}'`
                  , u = "";
                return l && r && !t && o.includes(e) && (u += `d.style.colorScheme = '${e}';`),
                "class" === n ? u += t || i ? `c.add(${a})` : "null" : i && (u += `d[s](n,${a})`),
                u
            }
              , v = e ? `!function(){${p}${h(e)}}()` : a ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${h(c ? "x[e]" : "e", !0)}}${f ? "" : "else{" + h(u, !1, !1) + "}"}${m}}catch(e){}}()` : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${c ? `var x=${JSON.stringify(c)};` : ""}${h(c ? "x[e]" : "e", !0)}}else{${h(u, !1, !1)};}${m}}catch(t){}}();`;
            return r.createElement("script", {
                nonce: d,
                dangerouslySetInnerHTML: {
                    __html: v
                }
            })
        }
        , ()=>!0)
          , m = (e,t)=>{
            let n;
            if (!a) {
                try {
                    n = localStorage.getItem(e) || void 0
                } catch (e) {}
                return n || t
            }
        }
          , h = ()=>{
            let e = document.createElement("style");
            return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(e),
            ()=>{
                window.getComputedStyle(document.body),
                setTimeout(()=>{
                    document.head.removeChild(e)
                }
                , 1)
            }
        }
          , v = e=>(e || (e = window.matchMedia(i)),
        e.matches ? "dark" : "light")
    },
    6192: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
                fontStyle: "normal"
            },
            className: "__className_e66fe9"
        }
    },
    4033: function(e, t, n) {
        e.exports = n(290)
    },
    3386: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return z
            }
        });
        var r, o, i, a, l, u, c = function() {
            return (c = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function s(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        "function" == typeof SuppressedError && SuppressedError;
        var d = n(2265)
          , f = "right-scroll-bar-position"
          , p = "width-before-scroll-bar"
          , m = (void 0 === r && (r = {}),
        (void 0 === o && (o = function(e) {
            return e
        }
        ),
        i = [],
        a = !1,
        l = {
            read: function() {
                if (a)
                    throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return i.length ? i[i.length - 1] : null
            },
            useMedium: function(e) {
                var t = o(e, a);
                return i.push(t),
                function() {
                    i = i.filter(function(e) {
                        return e !== t
                    })
                }
            },
            assignSyncMedium: function(e) {
                for (a = !0; i.length; ) {
                    var t = i;
                    i = [],
                    t.forEach(e)
                }
                i = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return i
                    }
                }
            },
            assignMedium: function(e) {
                a = !0;
                var t = [];
                if (i.length) {
                    var n = i;
                    i = [],
                    n.forEach(e),
                    t = i
                }
                var r = function() {
                    var n = t;
                    t = [],
                    n.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(r)
                };
                o(),
                i = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        i
                    }
                }
            }
        }).options = c({
            async: !0,
            ssr: !1
        }, r),
        l)
          , h = function() {}
          , v = d.forwardRef(function(e, t) {
            var n, r, o, i = d.useRef(null), a = d.useState({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: h
            }), l = a[0], u = a[1], f = e.forwardProps, p = e.children, v = e.className, g = e.removeScrollBar, y = e.enabled, w = e.shards, b = e.sideCar, E = e.noIsolation, x = e.inert, M = e.allowPinchZoom, C = e.as, R = void 0 === C ? "div" : C, _ = s(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), k = (n = [i, t],
            r = function(e) {
                return n.forEach(function(t) {
                    return "function" == typeof t ? t(e) : t && (t.current = e),
                    t
                })
            }
            ,
            (o = (0,
            d.useState)(function() {
                return {
                    value: null,
                    callback: r,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(value) {
                            var e = o.value;
                            e !== value && (o.value = value,
                            o.callback(value, e))
                        }
                    }
                }
            })[0]).callback = r,
            o.facade), S = c(c({}, _), l);
            return d.createElement(d.Fragment, null, y && d.createElement(b, {
                sideCar: m,
                removeScrollBar: g,
                shards: w,
                noIsolation: E,
                inert: x,
                setCallbacks: u,
                allowPinchZoom: !!M,
                lockRef: i
            }), f ? d.cloneElement(d.Children.only(p), c(c({}, S), {
                ref: k
            })) : d.createElement(R, c({}, S, {
                className: v,
                ref: k
            }), p))
        });
        v.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        v.classNames = {
            fullWidth: p,
            zeroRight: f
        };
        var g = function(e) {
            var t = e.sideCar
              , n = s(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r)
                throw Error("Sidecar medium not found");
            return d.createElement(r, c({}, n))
        };
        g.isSideCarExport = !0;
        var y = function() {
            var e = 0
              , t = null;
            return {
                add: function(r) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = u || n.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)),
                        i = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , w = function() {
            var e = y();
            return function(t, n) {
                d.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && n])
            }
        }
          , b = function() {
            var e = w();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , E = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , x = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , M = function(e) {
            var t = window.getComputedStyle(document.body)
              , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , r = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [x(n), x(r), x(o)]
        }
          , C = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return E;
            var t = M(e)
              , n = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        }
          , R = b()
          , _ = function(e, t, n, r) {
            var o = e.left
              , i = e.top
              , a = e.right
              , l = e.gap;
            return void 0 === n && (n = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(f, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(p, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(p, " .").concat(p, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        }
          , k = function(e) {
            var t = e.noRelative
              , n = e.noImportant
              , r = e.gapMode
              , o = void 0 === r ? "margin" : r
              , i = d.useMemo(function() {
                return C(o)
            }, [o]);
            return d.createElement(R, {
                styles: _(i, !t, o, n ? "" : "!important")
            })
        }
          , S = !1;
        if ("undefined" != typeof window)
            try {
                var D = Object.defineProperty({}, "passive", {
                    get: function() {
                        return S = !0,
                        !0
                    }
                });
                window.addEventListener("test", D, D),
                window.removeEventListener("test", D, D)
            } catch (e) {
                S = !1
            }
        var T = !!S && {
            passive: !1
        }
          , A = function(e, t) {
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }
          , O = function(e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                P(e, n)) {
                    var r = L(e, n);
                    if (r[1] > r[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }
          , P = function(e, t) {
            return "v" === e ? A(t, "overflowY") : A(t, "overflowX")
        }
          , L = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , Z = function(e, t, n, r, o) {
            var i, a = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), l = a * r, u = n.target, c = t.contains(u), s = !1, d = l > 0, f = 0, p = 0;
            do {
                var m = L(e, u)
                  , h = m[0]
                  , v = m[1] - m[2] - a * h;
                (h || v) && P(e, u) && (f += v,
                p += h),
                u = u.parentNode
            } while (!c && u !== document.body || c && (t.contains(u) || t === u));
            return d && (o && 0 === f || !o && l > f) ? s = !0 : !d && (o && 0 === p || !o && -l > p) && (s = !0),
            s
        }
          , I = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , F = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , W = function(e) {
            return e && "current"in e ? e.current : e
        }
          , V = 0
          , $ = []
          , N = (m.useMedium(function(e) {
            var t = d.useRef([])
              , n = d.useRef([0, 0])
              , r = d.useRef()
              , o = d.useState(V++)[0]
              , i = d.useState(function() {
                return b()
            })[0]
              , a = d.useRef(e);
            d.useEffect(function() {
                a.current = e
            }, [e]),
            d.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++)
                                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                                r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var l = d.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length)
                    return !a.current.allowPinchZoom;
                var o, i = I(e), l = n.current, u = "deltaX"in e ? e.deltaX : l[0] - i[0], c = "deltaY"in e ? e.deltaY : l[1] - i[1], s = e.target, d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === s.type)
                    return !1;
                var f = O(d, s);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = O(d, s)),
                !f)
                    return !1;
                if (!r.current && "changedTouches"in e && (u || c) && (r.current = o),
                !o)
                    return !0;
                var p = r.current || o;
                return Z(p, t, e, "h" === p ? u : c, !0)
            }, [])
              , u = d.useCallback(function(e) {
                if ($.length && $[$.length - 1] === i) {
                    var n = "deltaY"in e ? F(e) : I(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (a.current.shards || []).map(W).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , c = d.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , s = d.useCallback(function(e) {
                n.current = I(e),
                r.current = void 0
            }, [])
              , f = d.useCallback(function(t) {
                c(t.type, F(t), t.target, l(t, e.lockRef.current))
            }, [])
              , p = d.useCallback(function(t) {
                c(t.type, I(t), t.target, l(t, e.lockRef.current))
            }, []);
            d.useEffect(function() {
                return $.push(i),
                e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", u, T),
                document.addEventListener("touchmove", u, T),
                document.addEventListener("touchstart", s, T),
                function() {
                    $ = $.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", u, T),
                    document.removeEventListener("touchmove", u, T),
                    document.removeEventListener("touchstart", s, T)
                }
            }, []);
            var m = e.removeScrollBar
              , h = e.inert;
            return d.createElement(d.Fragment, null, h ? d.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, m ? d.createElement(k, {
                gapMode: "margin"
            }) : null)
        }),
        g)
          , K = d.forwardRef(function(e, t) {
            return d.createElement(v, c({}, e, {
                ref: t,
                sideCar: N
            }))
        });
        K.classNames = v.classNames;
        var z = K
    },
    6694: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ee: function() {
                return y
            },
            NY: function() {
                return w
            },
            fC: function() {
                return g
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(6989)
          , a = n(6459)
          , l = n(1030)
          , u = n(9381);
        let c = "Avatar"
          , [s,d] = (0,
        i.b)(c)
          , [f,p] = s(c)
          , m = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeAvatar: n, ...i} = e
              , [a,l] = (0,
            o.useState)("idle");
            return (0,
            o.createElement)(f, {
                scope: n,
                imageLoadingStatus: a,
                onImageLoadingStatusChange: l
            }, (0,
            o.createElement)(u.WV.span, (0,
            r.Z)({}, i, {
                ref: t
            })))
        }
        )
          , h = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeAvatar: n, src: i, onLoadingStatusChange: c=()=>{}
            , ...s} = e
              , d = p("AvatarImage", n)
              , f = function(e) {
                let[t,n] = (0,
                o.useState)("idle");
                return (0,
                o.useEffect)(()=>{
                    if (!e) {
                        n("error");
                        return
                    }
                    let t = !0
                      , r = new window.Image
                      , o = e=>()=>{
                        t && n(e)
                    }
                    ;
                    return n("loading"),
                    r.onload = o("loaded"),
                    r.onerror = o("error"),
                    r.src = e,
                    ()=>{
                        t = !1
                    }
                }
                , [e]),
                t
            }(i)
              , m = (0,
            a.W)(e=>{
                c(e),
                d.onImageLoadingStatusChange(e)
            }
            );
            return (0,
            l.b)(()=>{
                "idle" !== f && m(f)
            }
            , [f, m]),
            "loaded" === f ? (0,
            o.createElement)(u.WV.img, (0,
            r.Z)({}, s, {
                ref: t,
                src: i
            })) : null
        }
        )
          , v = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeAvatar: n, delayMs: i, ...a} = e
              , l = p("AvatarFallback", n)
              , [c,s] = (0,
            o.useState)(void 0 === i);
            return (0,
            o.useEffect)(()=>{
                if (void 0 !== i) {
                    let e = window.setTimeout(()=>s(!0), i);
                    return ()=>window.clearTimeout(e)
                }
            }
            , [i]),
            c && "loaded" !== l.imageLoadingStatus ? (0,
            o.createElement)(u.WV.span, (0,
            r.Z)({}, a, {
                ref: t
            })) : null
        }
        )
          , g = m
          , y = h
          , w = v
    },
    8712: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dx: function() {
                return U
            },
            VY: function() {
                return X
            },
            aV: function() {
                return j
            },
            dk: function() {
                return Y
            },
            fC: function() {
                return z
            },
            h_: function() {
                return B
            },
            x8: function() {
                return G
            },
            xz: function() {
                return H
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(5744)
          , a = n(2210)
          , l = n(6989)
          , u = n(966)
          , c = n(3763)
          , s = n(9249)
          , d = n(2759)
          , f = n(2730)
          , p = n(5606)
          , m = n(9381)
          , h = n(1244)
          , v = n(3386)
          , g = n(5859)
          , y = n(7256);
        let w = "Dialog"
          , [b,E] = (0,
        l.b)(w)
          , [x,M] = b(w)
          , C = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...l} = e
              , u = M("DialogTrigger", n)
              , c = (0,
            a.e)(t, u.triggerRef);
            return (0,
            o.createElement)(m.WV.button, (0,
            r.Z)({
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": u.open,
                "aria-controls": u.contentId,
                "data-state": $(u.open)
            }, l, {
                ref: c,
                onClick: (0,
                i.M)(e.onClick, u.onOpenToggle)
            }))
        }
        )
          , R = "DialogPortal"
          , [_,k] = b(R, {
            forceMount: void 0
        })
          , S = "DialogOverlay"
          , D = (0,
        o.forwardRef)((e,t)=>{
            let n = k(S, e.__scopeDialog)
              , {forceMount: i=n.forceMount, ...a} = e
              , l = M(S, e.__scopeDialog);
            return l.modal ? (0,
            o.createElement)(p.z, {
                present: i || l.open
            }, (0,
            o.createElement)(T, (0,
            r.Z)({}, a, {
                ref: t
            }))) : null
        }
        )
          , T = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...i} = e
              , a = M(S, n);
            return (0,
            o.createElement)(v.Z, {
                as: y.g7,
                allowPinchZoom: !0,
                shards: [a.contentRef]
            }, (0,
            o.createElement)(m.WV.div, (0,
            r.Z)({
                "data-state": $(a.open)
            }, i, {
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...i.style
                }
            })))
        }
        )
          , A = "DialogContent"
          , O = (0,
        o.forwardRef)((e,t)=>{
            let n = k(A, e.__scopeDialog)
              , {forceMount: i=n.forceMount, ...a} = e
              , l = M(A, e.__scopeDialog);
            return (0,
            o.createElement)(p.z, {
                present: i || l.open
            }, l.modal ? (0,
            o.createElement)(P, (0,
            r.Z)({}, a, {
                ref: t
            })) : (0,
            o.createElement)(L, (0,
            r.Z)({}, a, {
                ref: t
            })))
        }
        )
          , P = (0,
        o.forwardRef)((e,t)=>{
            let n = M(A, e.__scopeDialog)
              , l = (0,
            o.useRef)(null)
              , u = (0,
            a.e)(t, n.contentRef, l);
            return (0,
            o.useEffect)(()=>{
                let e = l.current;
                if (e)
                    return (0,
                    g.Ry)(e)
            }
            , []),
            (0,
            o.createElement)(Z, (0,
            r.Z)({}, e, {
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0,
                i.M)(e.onCloseAutoFocus, e=>{
                    var t;
                    e.preventDefault(),
                    null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                }
                ),
                onPointerDownOutside: (0,
                i.M)(e.onPointerDownOutside, e=>{
                    let t = e.detail.originalEvent
                      , n = 0 === t.button && !0 === t.ctrlKey
                      , r = 2 === t.button || n;
                    r && e.preventDefault()
                }
                ),
                onFocusOutside: (0,
                i.M)(e.onFocusOutside, e=>e.preventDefault())
            }))
        }
        )
          , L = (0,
        o.forwardRef)((e,t)=>{
            let n = M(A, e.__scopeDialog)
              , i = (0,
            o.useRef)(!1)
              , a = (0,
            o.useRef)(!1);
            return (0,
            o.createElement)(Z, (0,
            r.Z)({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t=>{
                    var r, o;
                    null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                    t.defaultPrevented || (i.current || null === (o = n.triggerRef.current) || void 0 === o || o.focus(),
                    t.preventDefault()),
                    i.current = !1,
                    a.current = !1
                }
                ,
                onInteractOutside: t=>{
                    var r, o;
                    null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t),
                    t.defaultPrevented || (i.current = !0,
                    "pointerdown" !== t.detail.originalEvent.type || (a.current = !0));
                    let l = t.target
                      , u = null === (o = n.triggerRef.current) || void 0 === o ? void 0 : o.contains(l);
                    u && t.preventDefault(),
                    "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
                }
            }))
        }
        )
          , Z = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, trapFocus: i, onOpenAutoFocus: l, onCloseAutoFocus: u, ...c} = e
              , f = M(A, n)
              , p = (0,
            o.useRef)(null)
              , m = (0,
            a.e)(t, p);
            return (0,
            h.EW)(),
            (0,
            o.createElement)(o.Fragment, null, (0,
            o.createElement)(d.M, {
                asChild: !0,
                loop: !0,
                trapped: i,
                onMountAutoFocus: l,
                onUnmountAutoFocus: u
            }, (0,
            o.createElement)(s.XB, (0,
            r.Z)({
                role: "dialog",
                id: f.contentId,
                "aria-describedby": f.descriptionId,
                "aria-labelledby": f.titleId,
                "data-state": $(f.open)
            }, c, {
                ref: m,
                onDismiss: ()=>f.onOpenChange(!1)
            }))), !1)
        }
        )
          , I = "DialogTitle"
          , F = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...i} = e
              , a = M(I, n);
            return (0,
            o.createElement)(m.WV.h2, (0,
            r.Z)({
                id: a.titleId
            }, i, {
                ref: t
            }))
        }
        )
          , W = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...i} = e
              , a = M("DialogDescription", n);
            return (0,
            o.createElement)(m.WV.p, (0,
            r.Z)({
                id: a.descriptionId
            }, i, {
                ref: t
            }))
        }
        )
          , V = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDialog: n, ...a} = e
              , l = M("DialogClose", n);
            return (0,
            o.createElement)(m.WV.button, (0,
            r.Z)({
                type: "button"
            }, a, {
                ref: t,
                onClick: (0,
                i.M)(e.onClick, ()=>l.onOpenChange(!1))
            }))
        }
        );
        function $(e) {
            return e ? "open" : "closed"
        }
        let[N,K] = (0,
        l.k)("DialogTitleWarning", {
            contentName: A,
            titleName: I,
            docsSlug: "dialog"
        })
          , z = e=>{
            let {__scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: l=!0} = e
              , s = (0,
            o.useRef)(null)
              , d = (0,
            o.useRef)(null)
              , [f=!1,p] = (0,
            c.T)({
                prop: r,
                defaultProp: i,
                onChange: a
            });
            return (0,
            o.createElement)(x, {
                scope: t,
                triggerRef: s,
                contentRef: d,
                contentId: (0,
                u.M)(),
                titleId: (0,
                u.M)(),
                descriptionId: (0,
                u.M)(),
                open: f,
                onOpenChange: p,
                onOpenToggle: (0,
                o.useCallback)(()=>p(e=>!e), [p]),
                modal: l
            }, n)
        }
          , H = C
          , B = e=>{
            let {__scopeDialog: t, forceMount: n, children: r, container: i} = e
              , a = M(R, t);
            return (0,
            o.createElement)(_, {
                scope: t,
                forceMount: n
            }, o.Children.map(r, e=>(0,
            o.createElement)(p.z, {
                present: n || a.open
            }, (0,
            o.createElement)(f.h, {
                asChild: !0,
                container: i
            }, e))))
        }
          , j = D
          , X = O
          , U = F
          , Y = W
          , G = V
    },
    4780: function(e, t, n) {
        "use strict";
        n.d(t, {
            oC: function() {
                return ng
            },
            VY: function() {
                return np
            },
            ZA: function() {
                return nm
            },
            ck: function() {
                return nv
            },
            wU: function() {
                return nb
            },
            __: function() {
                return nh
            },
            Uv: function() {
                return nf
            },
            Ee: function() {
                return ny
            },
            Rk: function() {
                return nw
            },
            fC: function() {
                return ns
            },
            Z0: function() {
                return nE
            },
            Tr: function() {
                return nx
            },
            tu: function() {
                return nC
            },
            fF: function() {
                return nM
            },
            xz: function() {
                return nd
            }
        });
        var r = n(3428)
          , o = n(2265)
          , i = n(5744)
          , a = n(2210)
          , l = n(6989)
          , u = n(3763)
          , c = n(9381)
          , s = n(7733);
        let d = (0,
        o.createContext)(void 0);
        function f(e) {
            let t = (0,
            o.useContext)(d);
            return e || t || "ltr"
        }
        var p = n(9249)
          , m = n(1244)
          , h = n(2759)
          , v = n(966);
        let g = ["top", "right", "bottom", "left"]
          , y = Math.min
          , w = Math.max
          , b = Math.round
          , E = Math.floor
          , x = e=>({
            x: e,
            y: e
        })
          , M = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , C = {
            start: "end",
            end: "start"
        };
        function R(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function _(e) {
            return e.split("-")[0]
        }
        function k(e) {
            return e.split("-")[1]
        }
        function S(e) {
            return "x" === e ? "y" : "x"
        }
        function D(e) {
            return "y" === e ? "height" : "width"
        }
        function T(e) {
            return ["top", "bottom"].includes(_(e)) ? "y" : "x"
        }
        function A(e) {
            return e.replace(/start|end/g, e=>C[e])
        }
        function O(e) {
            return e.replace(/left|right|bottom|top/g, e=>M[e])
        }
        function P(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function L(e) {
            return {
                ...e,
                top: e.y,
                left: e.x,
                right: e.x + e.width,
                bottom: e.y + e.height
            }
        }
        function Z(e, t, n) {
            let r, {reference: o, floating: i} = e, a = T(t), l = S(T(t)), u = D(l), c = _(t), s = "y" === a, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[u] / 2 - i[u] / 2;
            switch (c) {
            case "top":
                r = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (k(t)) {
            case "start":
                r[l] -= p * (n && s ? -1 : 1);
                break;
            case "end":
                r[l] += p * (n && s ? -1 : 1)
            }
            return r
        }
        let I = async(e,t,n)=>{
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: a} = n
              , l = i.filter(Boolean)
              , u = await (null == a.isRTL ? void 0 : a.isRTL(t))
              , c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: s, y: d} = Z(c, r, u)
              , f = r
              , p = {}
              , m = 0;
            for (let n = 0; n < l.length; n++) {
                let {name: i, fn: h} = l[n]
                  , {x: v, y: g, data: y, reset: w} = await h({
                    x: s,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: c,
                    platform: a,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                if (s = null != v ? v : s,
                d = null != g ? g : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...y
                    }
                },
                w && m <= 50) {
                    m++,
                    "object" == typeof w && (w.placement && (f = w.placement),
                    w.rects && (c = !0 === w.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects),
                    {x: s, y: d} = Z(c, f, u)),
                    n = -1;
                    continue
                }
            }
            return {
                x: s,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function F(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: a, elements: l, strategy: u} = e
              , {boundary: c="clippingAncestors", rootBoundary: s="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = R(t, e)
              , m = P(p)
              , h = l[f ? "floating" === d ? "reference" : "floating" : d]
              , v = L(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                boundary: c,
                rootBoundary: s,
                strategy: u
            }))
              , g = "floating" === d ? {
                ...a.floating,
                x: r,
                y: o
            } : a.reference
              , y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating))
              , w = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                x: 1,
                y: 1
            }
              , b = L(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: g,
                offsetParent: y,
                strategy: u
            }) : g);
            return {
                top: (v.top - b.top + m.top) / w.y,
                bottom: (b.bottom - v.bottom + m.bottom) / w.y,
                left: (v.left - b.left + m.left) / w.x,
                right: (b.right - v.right + m.right) / w.x
            }
        }
        let W = e=>({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: a, elements: l, middlewareData: u} = t
                  , {element: c, padding: s=0} = R(e, t) || {};
                if (null == c)
                    return {};
                let d = P(s)
                  , f = {
                    x: n,
                    y: r
                }
                  , p = S(T(o))
                  , m = D(p)
                  , h = await a.getDimensions(c)
                  , v = "y" === p
                  , g = v ? "clientHeight" : "clientWidth"
                  , b = i.reference[m] + i.reference[p] - f[p] - i.floating[m]
                  , E = f[p] - i.reference[p]
                  , x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c))
                  , M = x ? x[g] : 0;
                M && await (null == a.isElement ? void 0 : a.isElement(x)) || (M = l.floating[g] || i.floating[m]);
                let C = M / 2 - h[m] / 2 - 1
                  , _ = y(d[v ? "top" : "left"], C)
                  , A = y(d[v ? "bottom" : "right"], C)
                  , O = M - h[m] - A
                  , L = M / 2 - h[m] / 2 + (b / 2 - E / 2)
                  , Z = w(_, y(L, O))
                  , I = !u.arrow && null != k(o) && L != Z && i.reference[m] / 2 - (L < _ ? _ : A) - h[m] / 2 < 0
                  , F = I ? L < _ ? L - _ : L - O : 0;
                return {
                    [p]: f[p] + F,
                    data: {
                        [p]: Z,
                        centerOffset: L - Z - F,
                        ...I && {
                            alignmentOffset: F
                        }
                    },
                    reset: I
                }
            }
        });
        function V(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function $(e) {
            return g.some(t=>e[t] >= 0)
        }
        async function N(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , a = _(n)
              , l = k(n)
              , u = "y" === T(n)
              , c = ["left", "top"].includes(a) ? -1 : 1
              , s = i && u ? -1 : 1
              , d = R(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: m} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: 0,
                crossAxis: 0,
                alignmentAxis: null,
                ...d
            };
            return l && "number" == typeof m && (p = "end" === l ? -1 * m : m),
            u ? {
                x: p * s,
                y: f * c
            } : {
                x: f * c,
                y: p * s
            }
        }
        function K(e) {
            return B(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function z(e) {
            var t;
            return (null == e ? void 0 : null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function H(e) {
            var t;
            return null == (t = (B(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function B(e) {
            return e instanceof Node || e instanceof z(e).Node
        }
        function j(e) {
            return e instanceof Element || e instanceof z(e).Element
        }
        function X(e) {
            return e instanceof HTMLElement || e instanceof z(e).HTMLElement
        }
        function U(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof z(e).ShadowRoot)
        }
        function Y(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = Q(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function G(e) {
            let t = q()
              , n = Q(e);
            return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e=>(n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e=>(n.contain || "").includes(e))
        }
        function q() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function J(e) {
            return ["html", "body", "#document"].includes(K(e))
        }
        function Q(e) {
            return z(e).getComputedStyle(e)
        }
        function ee(e) {
            return j(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.pageXOffset,
                scrollTop: e.pageYOffset
            }
        }
        function et(e) {
            if ("html" === K(e))
                return e;
            let t = e.assignedSlot || e.parentNode || U(e) && e.host || H(e);
            return U(t) ? t.host : t
        }
        function en(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = et(t);
                return J(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : X(n) && Y(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , a = z(o);
            return i ? t.concat(a, a.visualViewport || [], Y(o) ? o : [], a.frameElement && n ? en(a.frameElement) : []) : t.concat(o, en(o, [], n))
        }
        function er(e) {
            let t = Q(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = X(e)
              , i = o ? e.offsetWidth : n
              , a = o ? e.offsetHeight : r
              , l = b(n) !== i || b(r) !== a;
            return l && (n = i,
            r = a),
            {
                width: n,
                height: r,
                $: l
            }
        }
        function eo(e) {
            return j(e) ? e : e.contextElement
        }
        function ei(e) {
            let t = eo(e);
            if (!X(t))
                return x(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = er(t)
              , a = (i ? b(n.width) : n.width) / r
              , l = (i ? b(n.height) : n.height) / o;
            return a && Number.isFinite(a) || (a = 1),
            l && Number.isFinite(l) || (l = 1),
            {
                x: a,
                y: l
            }
        }
        let ea = x(0);
        function el(e) {
            let t = z(e);
            return q() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : ea
        }
        function eu(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , a = eo(e)
              , l = x(1);
            t && (r ? j(r) && (l = ei(r)) : l = ei(e));
            let u = (void 0 === (o = n) && (o = !1),
            r && (!o || r === z(a)) && o) ? el(a) : x(0)
              , c = (i.left + u.x) / l.x
              , s = (i.top + u.y) / l.y
              , d = i.width / l.x
              , f = i.height / l.y;
            if (a) {
                let e = z(a)
                  , t = r && j(r) ? z(r) : r
                  , n = e.frameElement;
                for (; n && r && t !== e; ) {
                    let e = ei(n)
                      , t = n.getBoundingClientRect()
                      , r = Q(n)
                      , o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                    c *= e.x,
                    s *= e.y,
                    d *= e.x,
                    f *= e.y,
                    c += o,
                    s += i,
                    n = z(n).frameElement
                }
            }
            return L({
                width: d,
                height: f,
                x: c,
                y: s
            })
        }
        function ec(e) {
            return eu(H(e)).left + ee(e).scrollLeft
        }
        function es(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = z(e)
                      , r = H(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , a = r.clientHeight
                      , l = 0
                      , u = 0;
                    if (o) {
                        i = o.width,
                        a = o.height;
                        let e = q();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft,
                        u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = H(e)
                      , n = ee(e)
                      , r = e.ownerDocument.body
                      , o = w(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = w(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , a = -n.scrollLeft + ec(e)
                      , l = -n.scrollTop;
                    return "rtl" === Q(r).direction && (a += w(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: a,
                        y: l
                    }
                }(H(e));
            else if (j(t))
                r = function(e, t) {
                    let n = eu(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = X(e) ? ei(e) : x(1)
                      , a = e.clientWidth * i.x
                      , l = e.clientHeight * i.y
                      , u = o * i.x
                      , c = r * i.y;
                    return {
                        width: a,
                        height: l,
                        x: u,
                        y: c
                    }
                }(t, n);
            else {
                let n = el(e);
                r = {
                    ...t,
                    x: t.x - n.x,
                    y: t.y - n.y
                }
            }
            return L(r)
        }
        function ed(e, t) {
            return X(e) && "fixed" !== Q(e).position ? t ? t(e) : e.offsetParent : null
        }
        function ef(e, t) {
            let n = z(e);
            if (!X(e))
                return n;
            let r = ed(e, t);
            for (; r && ["table", "td", "th"].includes(K(r)) && "static" === Q(r).position; )
                r = ed(r, t);
            return r && ("html" === K(r) || "body" === K(r) && "static" === Q(r).position && !G(r)) ? n : r || function(e) {
                let t = et(e);
                for (; X(t) && !J(t); ) {
                    if (G(t))
                        return t;
                    t = et(t)
                }
                return null
            }(e) || n
        }
        let ep = async function(e) {
            let {reference: t, floating: n, strategy: r} = e
              , o = this.getOffsetParent || ef
              , i = this.getDimensions;
            return {
                reference: function(e, t, n) {
                    let r = X(t)
                      , o = H(t)
                      , i = "fixed" === n
                      , a = eu(e, !0, i, t)
                      , l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , u = x(0);
                    if (r || !r && !i) {
                        if (("body" !== K(t) || Y(o)) && (l = ee(t)),
                        r) {
                            let e = eu(t, !0, i, t);
                            u.x = e.x + t.clientLeft,
                            u.y = e.y + t.clientTop
                        } else
                            o && (u.x = ec(o))
                    }
                    return {
                        x: a.left + l.scrollLeft - u.x,
                        y: a.top + l.scrollTop - u.y,
                        width: a.width,
                        height: a.height
                    }
                }(t, await o(n), r),
                floating: {
                    x: 0,
                    y: 0,
                    ...await i(n)
                }
            }
        }
          , em = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {rect: t, offsetParent: n, strategy: r} = e
                  , o = X(n)
                  , i = H(n);
                if (n === i)
                    return t;
                let a = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , l = x(1)
                  , u = x(0);
                if ((o || !o && "fixed" !== r) && (("body" !== K(n) || Y(i)) && (a = ee(n)),
                X(n))) {
                    let e = eu(n);
                    l = ei(n),
                    u.x = e.x + n.clientLeft,
                    u.y = e.y + n.clientTop
                }
                return {
                    width: t.width * l.x,
                    height: t.height * l.y,
                    x: t.x * l.x - a.scrollLeft * l.x + u.x,
                    y: t.y * l.y - a.scrollTop * l.y + u.y
                }
            },
            getDocumentElement: H,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = "clippingAncestors" === n ? function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = en(e, [], !1).filter(e=>j(e) && "body" !== K(e))
                      , o = null
                      , i = "fixed" === Q(e).position
                      , a = i ? et(e) : e;
                    for (; j(a) && !J(a); ) {
                        let t = Q(a)
                          , n = G(a);
                        n || "fixed" !== t.position || (o = null);
                        let l = i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || Y(a) && !n && function e(t, n) {
                            let r = et(t);
                            return !(r === n || !j(r) || J(r)) && ("fixed" === Q(r).position || e(r, n))
                        }(e, a);
                        l ? r = r.filter(e=>e !== a) : o = t,
                        a = et(a)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n)
                  , a = [...i, r]
                  , l = a[0]
                  , u = a.reduce((e,n)=>{
                    let r = es(t, n, o);
                    return e.top = w(r.top, e.top),
                    e.right = y(r.right, e.right),
                    e.bottom = y(r.bottom, e.bottom),
                    e.left = w(r.left, e.left),
                    e
                }
                , es(t, l, o));
                return {
                    width: u.right - u.left,
                    height: u.bottom - u.top,
                    x: u.left,
                    y: u.top
                }
            },
            getOffsetParent: ef,
            getElementRects: ep,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                return er(e)
            },
            getScale: ei,
            isElement: j,
            isRTL: function(e) {
                return "rtl" === Q(e).direction
            }
        };
        function eh(e, t, n, r) {
            let o;
            void 0 === r && (r = {});
            let {ancestorScroll: i=!0, ancestorResize: a=!0, elementResize: l="function" == typeof ResizeObserver, layoutShift: u="function" == typeof IntersectionObserver, animationFrame: c=!1} = r
              , s = eo(e)
              , d = i || a ? [...s ? en(s) : [], ...en(t)] : [];
            d.forEach(e=>{
                i && e.addEventListener("scroll", n, {
                    passive: !0
                }),
                a && e.addEventListener("resize", n)
            }
            );
            let f = s && u ? function(e, t) {
                let n, r = null, o = H(e);
                function i() {
                    clearTimeout(n),
                    r && r.disconnect(),
                    r = null
                }
                return !function a(l, u) {
                    void 0 === l && (l = !1),
                    void 0 === u && (u = 1),
                    i();
                    let {left: c, top: s, width: d, height: f} = e.getBoundingClientRect();
                    if (l || t(),
                    !d || !f)
                        return;
                    let p = E(s)
                      , m = E(o.clientWidth - (c + d))
                      , h = E(o.clientHeight - (s + f))
                      , v = E(c)
                      , g = {
                        rootMargin: -p + "px " + -m + "px " + -h + "px " + -v + "px",
                        threshold: w(0, y(1, u)) || 1
                    }
                      , b = !0;
                    function x(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== u) {
                            if (!b)
                                return a();
                            t ? a(!1, t) : n = setTimeout(()=>{
                                a(!1, 1e-7)
                            }
                            , 100)
                        }
                        b = !1
                    }
                    try {
                        r = new IntersectionObserver(x,{
                            ...g,
                            root: o.ownerDocument
                        })
                    } catch (e) {
                        r = new IntersectionObserver(x,g)
                    }
                    r.observe(e)
                }(!0),
                i
            }(s, n) : null
              , p = -1
              , m = null;
            l && (m = new ResizeObserver(e=>{
                let[r] = e;
                r && r.target === s && m && (m.unobserve(t),
                cancelAnimationFrame(p),
                p = requestAnimationFrame(()=>{
                    m && m.observe(t)
                }
                )),
                n()
            }
            ),
            s && !c && m.observe(s),
            m.observe(t));
            let h = c ? eu(e) : null;
            return c && function t() {
                let r = eu(e);
                h && (r.x !== h.x || r.y !== h.y || r.width !== h.width || r.height !== h.height) && n(),
                h = r,
                o = requestAnimationFrame(t)
            }(),
            n(),
            ()=>{
                d.forEach(e=>{
                    i && e.removeEventListener("scroll", n),
                    a && e.removeEventListener("resize", n)
                }
                ),
                f && f(),
                m && m.disconnect(),
                m = null,
                c && cancelAnimationFrame(o)
            }
        }
        let ev = (e,t,n)=>{
            let r = new Map
              , o = {
                platform: em,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return I(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var eg = n(4887);
        let ey = e=>({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                if (n && ({}).hasOwnProperty.call(n, "current")) {
                    if (null != n.current)
                        return W({
                            element: n.current,
                            padding: r
                        }).fn(t)
                } else if (n)
                    return W({
                        element: n,
                        padding: r
                    }).fn(t);
                return {}
            }
        });
        var ew = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
        function eb(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) != t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eb(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eb(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eE(e) {
            if ("undefined" == typeof window)
                return 1;
            let t = e.ownerDocument.defaultView || window;
            return t.devicePixelRatio || 1
        }
        function ex(e, t) {
            let n = eE(e);
            return Math.round(t * n) / n
        }
        function eM(e) {
            let t = o.useRef(e);
            return ew(()=>{
                t.current = e
            }
            ),
            t
        }
        let eC = (0,
        o.forwardRef)((e,t)=>{
            let {children: n, width: i=10, height: a=5, ...l} = e;
            return (0,
            o.createElement)(c.WV.svg, (0,
            r.Z)({}, l, {
                ref: t,
                width: i,
                height: a,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none"
            }), e.asChild ? n : (0,
            o.createElement)("polygon", {
                points: "0,0 30,0 15,10"
            }))
        }
        );
        var eR = n(6459)
          , e_ = n(1030);
        let ek = "Popper"
          , [eS,eD] = (0,
        l.b)(ek)
          , [eT,eA] = eS(ek)
          , eO = (0,
        o.forwardRef)((e,t)=>{
            let {__scopePopper: n, virtualRef: i, ...l} = e
              , u = eA("PopperAnchor", n)
              , s = (0,
            o.useRef)(null)
              , d = (0,
            a.e)(t, s);
            return (0,
            o.useEffect)(()=>{
                u.onAnchorChange((null == i ? void 0 : i.current) || s.current)
            }
            ),
            i ? null : (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({}, l, {
                ref: d
            }))
        }
        )
          , eP = "PopperContent"
          , [eL,eZ] = eS(eP)
          , eI = (0,
        o.forwardRef)((e,t)=>{
            var n, i, l, u, s, d, f, p, m, h, v, g, b, E;
            let {__scopePopper: x, side: M="bottom", sideOffset: C=0, align: P="center", alignOffset: L=0, arrowPadding: Z=0, collisionBoundary: I=[], collisionPadding: W=0, sticky: K="partial", hideWhenDetached: z=!1, avoidCollisions: H=!0, onPlaced: B, ...j} = e
              , X = eA(eP, x)
              , [U,Y] = (0,
            o.useState)(null)
              , G = (0,
            a.e)(t, e=>Y(e))
              , [q,J] = (0,
            o.useState)(null)
              , Q = function(e) {
                let[t,n] = (0,
                o.useState)(void 0);
                return (0,
                e_.b)(()=>{
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t=>{
                            let r, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize,
                                o = t.blockSize
                            } else
                                r = e.offsetWidth,
                                o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        ()=>t.unobserve(e)
                    }
                    n(void 0)
                }
                , [e]),
                t
            }(q)
              , ee = null !== (n = null == Q ? void 0 : Q.width) && void 0 !== n ? n : 0
              , et = null !== (i = null == Q ? void 0 : Q.height) && void 0 !== i ? i : 0
              , en = "number" == typeof W ? W : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...W
            }
              , er = Array.isArray(I) ? I : [I]
              , eo = er.length > 0
              , ei = {
                padding: en,
                boundary: er.filter(eV),
                altBoundary: eo
            }
              , {refs: ea, floatingStyles: el, placement: eu, isPositioned: ec, middlewareData: es} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: a, floating: l}={}, transform: u=!0, whileElementsMounted: c, open: s} = e
                  , [d,f] = o.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = o.useState(r);
                eb(p, r) || m(r);
                let[h,v] = o.useState(null)
                  , [g,y] = o.useState(null)
                  , w = o.useCallback(e=>{
                    e != M.current && (M.current = e,
                    v(e))
                }
                , [v])
                  , b = o.useCallback(e=>{
                    e !== C.current && (C.current = e,
                    y(e))
                }
                , [y])
                  , E = a || h
                  , x = l || g
                  , M = o.useRef(null)
                  , C = o.useRef(null)
                  , R = o.useRef(d)
                  , _ = eM(c)
                  , k = eM(i)
                  , S = o.useCallback(()=>{
                    if (!M.current || !C.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    k.current && (e.platform = k.current),
                    ev(M.current, C.current, e).then(e=>{
                        let t = {
                            ...e,
                            isPositioned: !0
                        };
                        D.current && !eb(R.current, t) && (R.current = t,
                        eg.flushSync(()=>{
                            f(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, k]);
                ew(()=>{
                    !1 === s && R.current.isPositioned && (R.current.isPositioned = !1,
                    f(e=>({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [s]);
                let D = o.useRef(!1);
                ew(()=>(D.current = !0,
                ()=>{
                    D.current = !1
                }
                ), []),
                ew(()=>{
                    if (E && (M.current = E),
                    x && (C.current = x),
                    E && x) {
                        if (_.current)
                            return _.current(E, x, S);
                        S()
                    }
                }
                , [E, x, S, _]);
                let T = o.useMemo(()=>({
                    reference: M,
                    floating: C,
                    setReference: w,
                    setFloating: b
                }), [w, b])
                  , A = o.useMemo(()=>({
                    reference: E,
                    floating: x
                }), [E, x])
                  , O = o.useMemo(()=>{
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!A.floating)
                        return e;
                    let t = ex(A.floating, d.x)
                      , r = ex(A.floating, d.y);
                    return u ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...eE(A.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, u, A.floating, d.x, d.y]);
                return o.useMemo(()=>({
                    ...d,
                    update: S,
                    refs: T,
                    elements: A,
                    floatingStyles: O
                }), [d, S, T, A, O])
            }({
                strategy: "fixed",
                placement: M + ("center" !== P ? "-" + P : ""),
                whileElementsMounted: eh,
                elements: {
                    reference: X.anchor
                },
                middleware: [{
                    name: "offset",
                    options: m = {
                        mainAxis: C + et,
                        alignmentAxis: L
                    },
                    async fn(e) {
                        let {x: t, y: n} = e
                          , r = await N(e, m);
                        return {
                            x: t + r.x,
                            y: n + r.y,
                            data: r
                        }
                    }
                }, H && {
                    name: "shift",
                    options: v = {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: "partial" === K ? (void 0 === h && (h = {}),
                        {
                            options: h,
                            fn(e) {
                                let {x: t, y: n, placement: r, rects: o, middlewareData: i} = e
                                  , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = R(h, e)
                                  , c = {
                                    x: t,
                                    y: n
                                }
                                  , s = T(r)
                                  , d = S(s)
                                  , f = c[d]
                                  , p = c[s]
                                  , m = R(a, e)
                                  , v = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (l) {
                                    let e = "y" === d ? "height" : "width"
                                      , t = o.reference[d] - o.floating[e] + v.mainAxis
                                      , n = o.reference[d] + o.reference[e] - v.mainAxis;
                                    f < t ? f = t : f > n && (f = n)
                                }
                                if (u) {
                                    var g, y;
                                    let e = "y" === d ? "width" : "height"
                                      , t = ["top", "left"].includes(_(r))
                                      , n = o.reference[s] - o.floating[e] + (t && (null == (g = i.offset) ? void 0 : g[s]) || 0) + (t ? 0 : v.crossAxis)
                                      , a = o.reference[s] + o.reference[e] + (t ? 0 : (null == (y = i.offset) ? void 0 : y[s]) || 0) - (t ? v.crossAxis : 0);
                                    p < n ? p = n : p > a && (p = a)
                                }
                                return {
                                    [d]: f,
                                    [s]: p
                                }
                            }
                        }) : void 0,
                        ...ei
                    },
                    async fn(e) {
                        let {x: t, y: n, placement: r} = e
                          , {mainAxis: o=!0, crossAxis: i=!1, limiter: a={
                            fn: e=>{
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...l} = R(v, e)
                          , u = {
                            x: t,
                            y: n
                        }
                          , c = await F(e, l)
                          , s = T(_(r))
                          , d = S(s)
                          , f = u[d]
                          , p = u[s];
                        if (o) {
                            let e = f + c["y" === d ? "top" : "left"]
                              , t = f - c["y" === d ? "bottom" : "right"];
                            f = w(e, y(f, t))
                        }
                        if (i) {
                            let e = "y" === s ? "top" : "left"
                              , t = "y" === s ? "bottom" : "right"
                              , n = p + c[e]
                              , r = p - c[t];
                            p = w(n, y(p, r))
                        }
                        let m = a.fn({
                            ...e,
                            [d]: f,
                            [s]: p
                        });
                        return {
                            ...m,
                            data: {
                                x: m.x - t,
                                y: m.y - n
                            }
                        }
                    }
                }, H && {
                    name: "flip",
                    options: g = {
                        ...ei
                    },
                    async fn(e) {
                        var t, n, r, o, i;
                        let {placement: a, middlewareData: l, rects: u, initialPlacement: c, platform: s, elements: d} = e
                          , {mainAxis: f=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: y=!0, ...w} = R(g, e);
                        if (null != (t = l.arrow) && t.alignmentOffset)
                            return {};
                        let b = _(a)
                          , E = _(c) === c
                          , x = await (null == s.isRTL ? void 0 : s.isRTL(d.floating))
                          , M = m || (E || !y ? [O(c)] : function(e) {
                            let t = O(e);
                            return [A(e), t, A(t)]
                        }(c));
                        m || "none" === v || M.push(...function(e, t, n, r) {
                            let o = k(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(_(e), "start" === n, r);
                            return o && (i = i.map(e=>e + "-" + o),
                            t && (i = i.concat(i.map(A)))),
                            i
                        }(c, y, v, x));
                        let C = [c, ...M]
                          , P = await F(e, w)
                          , L = []
                          , Z = (null == (n = l.flip) ? void 0 : n.overflows) || [];
                        if (f && L.push(P[b]),
                        p) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = k(e)
                                  , o = S(T(e))
                                  , i = D(o)
                                  , a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (a = O(a)),
                                [a, O(a)]
                            }(a, u, x);
                            L.push(P[e[0]], P[e[1]])
                        }
                        if (Z = [...Z, {
                            placement: a,
                            overflows: L
                        }],
                        !L.every(e=>e <= 0)) {
                            let e = ((null == (r = l.flip) ? void 0 : r.index) || 0) + 1
                              , t = C[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: Z
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (o = Z.filter(e=>e.overflows[0] <= 0).sort((e,t)=>e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                            if (!n)
                                switch (h) {
                                case "bestFit":
                                    {
                                        let e = null == (i = Z.map(e=>[e.placement, e.overflows.filter(e=>e > 0).reduce((e,t)=>e + t, 0)]).sort((e,t)=>e[1] - t[1])[0]) ? void 0 : i[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = c
                                }
                            if (a !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }, {
                    name: "size",
                    options: b = {
                        ...ei,
                        apply: ({elements: e, rects: t, availableWidth: n, availableHeight: r})=>{
                            let {width: o, height: i} = t.reference
                              , a = e.floating.style;
                            a.setProperty("--radix-popper-available-width", `${n}px`),
                            a.setProperty("--radix-popper-available-height", `${r}px`),
                            a.setProperty("--radix-popper-anchor-width", `${o}px`),
                            a.setProperty("--radix-popper-anchor-height", `${i}px`)
                        }
                    },
                    async fn(e) {
                        let t, n;
                        let {placement: r, rects: o, platform: i, elements: a} = e
                          , {apply: l=()=>{}
                        , ...u} = R(b, e)
                          , c = await F(e, u)
                          , s = _(r)
                          , d = k(r)
                          , f = "y" === T(r)
                          , {width: p, height: m} = o.floating;
                        "top" === s || "bottom" === s ? (t = s,
                        n = d === (await (null == i.isRTL ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (n = s,
                        t = "end" === d ? "top" : "bottom");
                        let h = m - c[t]
                          , v = p - c[n]
                          , g = !e.middlewareData.shift
                          , E = h
                          , x = v;
                        if (f) {
                            let e = p - c.left - c.right;
                            x = d || g ? y(v, e) : e
                        } else {
                            let e = m - c.top - c.bottom;
                            E = d || g ? y(h, e) : e
                        }
                        if (g && !d) {
                            let e = w(c.left, 0)
                              , t = w(c.right, 0)
                              , n = w(c.top, 0)
                              , r = w(c.bottom, 0);
                            f ? x = p - 2 * (0 !== e || 0 !== t ? e + t : w(c.left, c.right)) : E = m - 2 * (0 !== n || 0 !== r ? n + r : w(c.top, c.bottom))
                        }
                        await l({
                            ...e,
                            availableWidth: x,
                            availableHeight: E
                        });
                        let M = await i.getDimensions(a.floating);
                        return p !== M.width || m !== M.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }, q && ey({
                    element: q,
                    padding: Z
                }), e$({
                    arrowWidth: ee,
                    arrowHeight: et
                }), z && {
                    name: "hide",
                    options: E = {
                        strategy: "referenceHidden"
                    },
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: n="referenceHidden", ...r} = R(E, e);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let n = await F(e, {
                                    ...r,
                                    elementContext: "reference"
                                })
                                  , o = V(n, t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: o,
                                        referenceHidden: $(o)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = await F(e, {
                                    ...r,
                                    altBoundary: !0
                                })
                                  , o = V(n, t.floating);
                                return {
                                    data: {
                                        escapedOffsets: o,
                                        escaped: $(o)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }]
            })
              , [ed,ef] = eN(eu)
              , ep = (0,
            eR.W)(B);
            (0,
            e_.b)(()=>{
                ec && (null == ep || ep())
            }
            , [ec, ep]);
            let em = null === (l = es.arrow) || void 0 === l ? void 0 : l.x
              , eC = null === (u = es.arrow) || void 0 === u ? void 0 : u.y
              , ek = (null === (s = es.arrow) || void 0 === s ? void 0 : s.centerOffset) !== 0
              , [eS,eD] = (0,
            o.useState)();
            return (0,
            e_.b)(()=>{
                U && eD(window.getComputedStyle(U).zIndex)
            }
            , [U]),
            (0,
            o.createElement)("div", {
                ref: ea.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...el,
                    transform: ec ? el.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: eS,
                    "--radix-popper-transform-origin": [null === (d = es.transformOrigin) || void 0 === d ? void 0 : d.x, null === (f = es.transformOrigin) || void 0 === f ? void 0 : f.y].join(" ")
                },
                dir: e.dir
            }, (0,
            o.createElement)(eL, {
                scope: x,
                placedSide: ed,
                onArrowChange: J,
                arrowX: em,
                arrowY: eC,
                shouldHideArrow: ek
            }, (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({
                "data-side": ed,
                "data-align": ef
            }, j, {
                ref: G,
                style: {
                    ...j.style,
                    animation: ec ? void 0 : "none",
                    opacity: null !== (p = es.hide) && void 0 !== p && p.referenceHidden ? 0 : void 0
                }
            }))))
        }
        )
          , eF = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , eW = (0,
        o.forwardRef)(function(e, t) {
            let {__scopePopper: n, ...i} = e
              , a = eZ("PopperArrow", n)
              , l = eF[a.placedSide];
            return (0,
            o.createElement)("span", {
                ref: a.onArrowChange,
                style: {
                    position: "absolute",
                    left: a.arrowX,
                    top: a.arrowY,
                    [l]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[a.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[a.placedSide],
                    visibility: a.shouldHideArrow ? "hidden" : void 0
                }
            }, (0,
            o.createElement)(eC, (0,
            r.Z)({}, i, {
                ref: t,
                style: {
                    ...i.style,
                    display: "block"
                }
            })))
        });
        function eV(e) {
            return null !== e
        }
        let e$ = e=>({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, a;
                let {placement: l, rects: u, middlewareData: c} = t
                  , s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , d = s ? 0 : e.arrowWidth
                  , f = s ? 0 : e.arrowHeight
                  , [p,m] = eN(l)
                  , h = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , v = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2
                  , g = (null !== (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + f / 2
                  , y = ""
                  , w = "";
                return "bottom" === p ? (y = s ? h : `${v}px`,
                w = `${-f}px`) : "top" === p ? (y = s ? h : `${v}px`,
                w = `${u.floating.height + f}px`) : "right" === p ? (y = `${-f}px`,
                w = s ? h : `${g}px`) : "left" === p && (y = `${u.floating.width + f}px`,
                w = s ? h : `${g}px`),
                {
                    data: {
                        x: y,
                        y: w
                    }
                }
            }
        });
        function eN(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        let eK = e=>{
            let {__scopePopper: t, children: n} = e
              , [r,i] = (0,
            o.useState)(null);
            return (0,
            o.createElement)(eT, {
                scope: t,
                anchor: r,
                onAnchorChange: i
            }, n)
        }
        ;
        var ez = n(2730)
          , eH = n(5606);
        let eB = "rovingFocusGroup.onEntryFocus"
          , ej = {
            bubbles: !1,
            cancelable: !0
        }
          , eX = "RovingFocusGroup"
          , [eU,eY,eG] = (0,
        s.B)(eX)
          , [eq,eJ] = (0,
        l.b)(eX, [eG])
          , [eQ,e0] = eq(eX)
          , e1 = (0,
        o.forwardRef)((e,t)=>(0,
        o.createElement)(eU.Provider, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        o.createElement)(eU.Slot, {
            scope: e.__scopeRovingFocusGroup
        }, (0,
        o.createElement)(e2, (0,
        r.Z)({}, e, {
            ref: t
        })))))
          , e2 = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeRovingFocusGroup: n, orientation: l, loop: s=!1, dir: d, currentTabStopId: p, defaultCurrentTabStopId: m, onCurrentTabStopIdChange: h, onEntryFocus: v, ...g} = e
              , y = (0,
            o.useRef)(null)
              , w = (0,
            a.e)(t, y)
              , b = f(d)
              , [E=null,x] = (0,
            u.T)({
                prop: p,
                defaultProp: m,
                onChange: h
            })
              , [M,C] = (0,
            o.useState)(!1)
              , R = (0,
            eR.W)(v)
              , _ = eY(n)
              , k = (0,
            o.useRef)(!1)
              , [S,D] = (0,
            o.useState)(0);
            return (0,
            o.useEffect)(()=>{
                let e = y.current;
                if (e)
                    return e.addEventListener(eB, R),
                    ()=>e.removeEventListener(eB, R)
            }
            , [R]),
            (0,
            o.createElement)(eQ, {
                scope: n,
                orientation: l,
                dir: b,
                loop: s,
                currentTabStopId: E,
                onItemFocus: (0,
                o.useCallback)(e=>x(e), [x]),
                onItemShiftTab: (0,
                o.useCallback)(()=>C(!0), []),
                onFocusableItemAdd: (0,
                o.useCallback)(()=>D(e=>e + 1), []),
                onFocusableItemRemove: (0,
                o.useCallback)(()=>D(e=>e - 1), [])
            }, (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({
                tabIndex: M || 0 === S ? -1 : 0,
                "data-orientation": l
            }, g, {
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: (0,
                i.M)(e.onMouseDown, ()=>{
                    k.current = !0
                }
                ),
                onFocus: (0,
                i.M)(e.onFocus, e=>{
                    let t = !k.current;
                    if (e.target === e.currentTarget && t && !M) {
                        let t = new CustomEvent(eB,ej);
                        if (e.currentTarget.dispatchEvent(t),
                        !t.defaultPrevented) {
                            let e = _().filter(e=>e.focusable)
                              , t = e.find(e=>e.active)
                              , n = e.find(e=>e.id === E)
                              , r = [t, n, ...e].filter(Boolean)
                              , o = r.map(e=>e.ref.current);
                            e5(o)
                        }
                    }
                    k.current = !1
                }
                ),
                onBlur: (0,
                i.M)(e.onBlur, ()=>C(!1))
            })))
        }
        )
          , e6 = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeRovingFocusGroup: n, focusable: a=!0, active: l=!1, tabStopId: u, ...s} = e
              , d = (0,
            v.M)()
              , f = u || d
              , p = e0("RovingFocusGroupItem", n)
              , m = p.currentTabStopId === f
              , h = eY(n)
              , {onFocusableItemAdd: g, onFocusableItemRemove: y} = p;
            return (0,
            o.useEffect)(()=>{
                if (a)
                    return g(),
                    ()=>y()
            }
            , [a, g, y]),
            (0,
            o.createElement)(eU.ItemSlot, {
                scope: n,
                id: f,
                focusable: a,
                active: l
            }, (0,
            o.createElement)(c.WV.span, (0,
            r.Z)({
                tabIndex: m ? 0 : -1,
                "data-orientation": p.orientation
            }, s, {
                ref: t,
                onMouseDown: (0,
                i.M)(e.onMouseDown, e=>{
                    a ? p.onItemFocus(f) : e.preventDefault()
                }
                ),
                onFocus: (0,
                i.M)(e.onFocus, ()=>p.onItemFocus(f)),
                onKeyDown: (0,
                i.M)(e.onKeyDown, e=>{
                    if ("Tab" === e.key && e.shiftKey) {
                        p.onItemShiftTab();
                        return
                    }
                    if (e.target !== e.currentTarget)
                        return;
                    let t = function(e, t, n) {
                        var r;
                        let o = (r = e.key,
                        "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o)))
                            return e9[o]
                    }(e, p.orientation, p.dir);
                    if (void 0 !== t) {
                        e.preventDefault();
                        let o = h().filter(e=>e.focusable)
                          , i = o.map(e=>e.ref.current);
                        if ("last" === t)
                            i.reverse();
                        else if ("prev" === t || "next" === t) {
                            var n, r;
                            "prev" === t && i.reverse();
                            let o = i.indexOf(e.currentTarget);
                            i = p.loop ? (n = i,
                            r = o + 1,
                            n.map((e,t)=>n[(r + t) % n.length])) : i.slice(o + 1)
                        }
                        setTimeout(()=>e5(i))
                    }
                }
                )
            })))
        }
        )
          , e9 = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function e5(e) {
            let t = document.activeElement;
            for (let n of e)
                if (n === t || (n.focus(),
                document.activeElement !== t))
                    return
        }
        var e4 = n(7256)
          , e8 = n(5859)
          , e3 = n(3386);
        let e7 = ["Enter", " "]
          , te = ["ArrowUp", "PageDown", "End"]
          , tt = ["ArrowDown", "PageUp", "Home", ...te]
          , tn = {
            ltr: [...e7, "ArrowRight"],
            rtl: [...e7, "ArrowLeft"]
        }
          , tr = {
            ltr: ["ArrowLeft"],
            rtl: ["ArrowRight"]
        }
          , to = "Menu"
          , [ti,ta,tl] = (0,
        s.B)(to)
          , [tu,tc] = (0,
        l.b)(to, [tl, eD, eJ])
          , ts = eD()
          , td = eJ()
          , [tf,tp] = tu(to)
          , [tm,th] = tu(to)
          , tv = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...i} = e
              , a = ts(n);
            return (0,
            o.createElement)(eO, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , tg = "MenuPortal"
          , [ty,tw] = tu(tg, {
            forceMount: void 0
        })
          , tb = "MenuContent"
          , [tE,tx] = tu(tb)
          , tM = (0,
        o.forwardRef)((e,t)=>{
            let n = tw(tb, e.__scopeMenu)
              , {forceMount: i=n.forceMount, ...a} = e
              , l = tp(tb, e.__scopeMenu)
              , u = th(tb, e.__scopeMenu);
            return (0,
            o.createElement)(ti.Provider, {
                scope: e.__scopeMenu
            }, (0,
            o.createElement)(eH.z, {
                present: i || l.open
            }, (0,
            o.createElement)(ti.Slot, {
                scope: e.__scopeMenu
            }, u.modal ? (0,
            o.createElement)(tC, (0,
            r.Z)({}, a, {
                ref: t
            })) : (0,
            o.createElement)(tR, (0,
            r.Z)({}, a, {
                ref: t
            })))))
        }
        )
          , tC = (0,
        o.forwardRef)((e,t)=>{
            let n = tp(tb, e.__scopeMenu)
              , l = (0,
            o.useRef)(null)
              , u = (0,
            a.e)(t, l);
            return (0,
            o.useEffect)(()=>{
                let e = l.current;
                if (e)
                    return (0,
                    e8.Ry)(e)
            }
            , []),
            (0,
            o.createElement)(t_, (0,
            r.Z)({}, e, {
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0,
                i.M)(e.onFocusOutside, e=>e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: ()=>n.onOpenChange(!1)
            }))
        }
        )
          , tR = (0,
        o.forwardRef)((e,t)=>{
            let n = tp(tb, e.__scopeMenu);
            return (0,
            o.createElement)(t_, (0,
            r.Z)({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: ()=>n.onOpenChange(!1)
            }))
        }
        )
          , t_ = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, loop: l=!1, trapFocus: u, onOpenAutoFocus: c, onCloseAutoFocus: s, disableOutsidePointerEvents: d, onEntryFocus: f, onEscapeKeyDown: v, onPointerDownOutside: g, onFocusOutside: y, onInteractOutside: w, onDismiss: b, disableOutsideScroll: E, ...x} = e
              , M = tp(tb, n)
              , C = th(tb, n)
              , R = ts(n)
              , _ = td(n)
              , k = ta(n)
              , [S,D] = (0,
            o.useState)(null)
              , T = (0,
            o.useRef)(null)
              , A = (0,
            a.e)(t, T, M.onContentChange)
              , O = (0,
            o.useRef)(0)
              , P = (0,
            o.useRef)("")
              , L = (0,
            o.useRef)(0)
              , Z = (0,
            o.useRef)(null)
              , I = (0,
            o.useRef)("right")
              , F = (0,
            o.useRef)(0)
              , W = E ? e3.Z : o.Fragment
              , V = E ? {
                as: e4.g7,
                allowPinchZoom: !0
            } : void 0
              , $ = e=>{
                var t, n;
                let r = P.current + e
                  , o = k().filter(e=>!e.disabled)
                  , i = document.activeElement
                  , a = null === (t = o.find(e=>e.ref.current === i)) || void 0 === t ? void 0 : t.textValue
                  , l = o.map(e=>e.textValue)
                  , u = function(e, t, n) {
                    var r;
                    let o = t.length > 1 && Array.from(t).every(e=>e === t[0])
                      , i = o ? t[0] : t
                      , a = n ? e.indexOf(n) : -1
                      , l = (r = Math.max(a, 0),
                    e.map((t,n)=>e[(r + n) % e.length]))
                      , u = 1 === i.length;
                    u && (l = l.filter(e=>e !== n));
                    let c = l.find(e=>e.toLowerCase().startsWith(i.toLowerCase()));
                    return c !== n ? c : void 0
                }(l, r, a)
                  , c = null === (n = o.find(e=>e.textValue === u)) || void 0 === n ? void 0 : n.ref.current;
                !function e(t) {
                    P.current = t,
                    window.clearTimeout(O.current),
                    "" !== t && (O.current = window.setTimeout(()=>e(""), 1e3))
                }(r),
                c && setTimeout(()=>c.focus())
            }
            ;
            (0,
            o.useEffect)(()=>()=>window.clearTimeout(O.current), []),
            (0,
            m.EW)();
            let N = (0,
            o.useCallback)(e=>{
                var t, n;
                let r = I.current === (null === (t = Z.current) || void 0 === t ? void 0 : t.side);
                return r && function(e, t) {
                    if (!t)
                        return !1;
                    let n = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    return function(e, t) {
                        let {x: n, y: r} = e
                          , o = !1;
                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                            let a = t[e].x
                              , l = t[e].y
                              , u = t[i].x
                              , c = t[i].y
                              , s = l > r != c > r && n < (u - a) * (r - l) / (c - l) + a;
                            s && (o = !o)
                        }
                        return o
                    }(n, t)
                }(e, null === (n = Z.current) || void 0 === n ? void 0 : n.area)
            }
            , []);
            return (0,
            o.createElement)(tE, {
                scope: n,
                searchRef: P,
                onItemEnter: (0,
                o.useCallback)(e=>{
                    N(e) && e.preventDefault()
                }
                , [N]),
                onItemLeave: (0,
                o.useCallback)(e=>{
                    var t;
                    N(e) || (null === (t = T.current) || void 0 === t || t.focus(),
                    D(null))
                }
                , [N]),
                onTriggerLeave: (0,
                o.useCallback)(e=>{
                    N(e) && e.preventDefault()
                }
                , [N]),
                pointerGraceTimerRef: L,
                onPointerGraceIntentChange: (0,
                o.useCallback)(e=>{
                    Z.current = e
                }
                , [])
            }, (0,
            o.createElement)(W, V, (0,
            o.createElement)(h.M, {
                asChild: !0,
                trapped: u,
                onMountAutoFocus: (0,
                i.M)(c, e=>{
                    var t;
                    e.preventDefault(),
                    null === (t = T.current) || void 0 === t || t.focus()
                }
                ),
                onUnmountAutoFocus: s
            }, (0,
            o.createElement)(p.XB, {
                asChild: !0,
                disableOutsidePointerEvents: d,
                onEscapeKeyDown: v,
                onPointerDownOutside: g,
                onFocusOutside: y,
                onInteractOutside: w,
                onDismiss: b
            }, (0,
            o.createElement)(e1, (0,
            r.Z)({
                asChild: !0
            }, _, {
                dir: C.dir,
                orientation: "vertical",
                loop: l,
                currentTabStopId: S,
                onCurrentTabStopIdChange: D,
                onEntryFocus: (0,
                i.M)(f, e=>{
                    C.isUsingKeyboardRef.current || e.preventDefault()
                }
                )
            }), (0,
            o.createElement)(eI, (0,
            r.Z)({
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": tY(M.open),
                "data-radix-menu-content": "",
                dir: C.dir
            }, R, x, {
                ref: A,
                style: {
                    outline: "none",
                    ...x.style
                },
                onKeyDown: (0,
                i.M)(x.onKeyDown, e=>{
                    let t = e.target
                      , n = t.closest("[data-radix-menu-content]") === e.currentTarget
                      , r = e.ctrlKey || e.altKey || e.metaKey
                      , o = 1 === e.key.length;
                    n && ("Tab" === e.key && e.preventDefault(),
                    !r && o && $(e.key));
                    let i = T.current;
                    if (e.target !== i || !tt.includes(e.key))
                        return;
                    e.preventDefault();
                    let a = k().filter(e=>!e.disabled)
                      , l = a.map(e=>e.ref.current);
                    te.includes(e.key) && l.reverse(),
                    function(e) {
                        let t = document.activeElement;
                        for (let n of e)
                            if (n === t || (n.focus(),
                            document.activeElement !== t))
                                return
                    }(l)
                }
                ),
                onBlur: (0,
                i.M)(e.onBlur, e=>{
                    e.currentTarget.contains(e.target) || (window.clearTimeout(O.current),
                    P.current = "")
                }
                ),
                onPointerMove: (0,
                i.M)(e.onPointerMove, tJ(e=>{
                    let t = e.target
                      , n = F.current !== e.clientX;
                    if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > F.current ? "right" : "left";
                        I.current = t,
                        F.current = e.clientX
                    }
                }
                ))
            })))))))
        }
        )
          , tk = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...i} = e;
            return (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({
                role: "group"
            }, i, {
                ref: t
            }))
        }
        )
          , tS = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...i} = e;
            return (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({}, i, {
                ref: t
            }))
        }
        )
          , tD = "MenuItem"
          , tT = "menu.itemSelect"
          , tA = (0,
        o.forwardRef)((e,t)=>{
            let {disabled: n=!1, onSelect: l, ...u} = e
              , s = (0,
            o.useRef)(null)
              , d = th(tD, e.__scopeMenu)
              , f = tx(tD, e.__scopeMenu)
              , p = (0,
            a.e)(t, s)
              , m = (0,
            o.useRef)(!1);
            return (0,
            o.createElement)(tO, (0,
            r.Z)({}, u, {
                ref: p,
                disabled: n,
                onClick: (0,
                i.M)(e.onClick, ()=>{
                    let e = s.current;
                    if (!n && e) {
                        let t = new CustomEvent(tT,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.addEventListener(tT, e=>null == l ? void 0 : l(e), {
                            once: !0
                        }),
                        (0,
                        c.jH)(e, t),
                        t.defaultPrevented ? m.current = !1 : d.onClose()
                    }
                }
                ),
                onPointerDown: t=>{
                    var n;
                    null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                    m.current = !0
                }
                ,
                onPointerUp: (0,
                i.M)(e.onPointerUp, e=>{
                    var t;
                    m.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                }
                ),
                onKeyDown: (0,
                i.M)(e.onKeyDown, e=>{
                    let t = "" !== f.searchRef.current;
                    !n && (!t || " " !== e.key) && e7.includes(e.key) && (e.currentTarget.click(),
                    e.preventDefault())
                }
                )
            }))
        }
        )
          , tO = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, disabled: l=!1, textValue: u, ...s} = e
              , d = tx(tD, n)
              , f = td(n)
              , p = (0,
            o.useRef)(null)
              , m = (0,
            a.e)(t, p)
              , [h,v] = (0,
            o.useState)(!1)
              , [g,y] = (0,
            o.useState)("");
            return (0,
            o.useEffect)(()=>{
                let e = p.current;
                if (e) {
                    var t;
                    y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                }
            }
            , [s.children]),
            (0,
            o.createElement)(ti.ItemSlot, {
                scope: n,
                disabled: l,
                textValue: null != u ? u : g
            }, (0,
            o.createElement)(e6, (0,
            r.Z)({
                asChild: !0
            }, f, {
                focusable: !l
            }), (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({
                role: "menuitem",
                "data-highlighted": h ? "" : void 0,
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0
            }, s, {
                ref: m,
                onPointerMove: (0,
                i.M)(e.onPointerMove, tJ(e=>{
                    if (l)
                        d.onItemLeave(e);
                    else if (d.onItemEnter(e),
                    !e.defaultPrevented) {
                        let t = e.currentTarget;
                        t.focus()
                    }
                }
                )),
                onPointerLeave: (0,
                i.M)(e.onPointerLeave, tJ(e=>d.onItemLeave(e))),
                onFocus: (0,
                i.M)(e.onFocus, ()=>v(!0)),
                onBlur: (0,
                i.M)(e.onBlur, ()=>v(!1))
            }))))
        }
        )
          , tP = (0,
        o.forwardRef)((e,t)=>{
            let {checked: n=!1, onCheckedChange: a, ...l} = e;
            return (0,
            o.createElement)(tV, {
                scope: e.__scopeMenu,
                checked: n
            }, (0,
            o.createElement)(tA, (0,
            r.Z)({
                role: "menuitemcheckbox",
                "aria-checked": tG(n) ? "mixed" : n
            }, l, {
                ref: t,
                "data-state": tq(n),
                onSelect: (0,
                i.M)(l.onSelect, ()=>null == a ? void 0 : a(!!tG(n) || !n), {
                    checkForDefaultPrevented: !1
                })
            })))
        }
        )
          , [tL,tZ] = tu("MenuRadioGroup", {
            value: void 0,
            onValueChange: ()=>{}
        })
          , tI = (0,
        o.forwardRef)((e,t)=>{
            let {value: n, onValueChange: i, ...a} = e
              , l = (0,
            eR.W)(i);
            return (0,
            o.createElement)(tL, {
                scope: e.__scopeMenu,
                value: n,
                onValueChange: l
            }, (0,
            o.createElement)(tk, (0,
            r.Z)({}, a, {
                ref: t
            })))
        }
        )
          , tF = (0,
        o.forwardRef)((e,t)=>{
            let {value: n, ...a} = e
              , l = tZ("MenuRadioItem", e.__scopeMenu)
              , u = n === l.value;
            return (0,
            o.createElement)(tV, {
                scope: e.__scopeMenu,
                checked: u
            }, (0,
            o.createElement)(tA, (0,
            r.Z)({
                role: "menuitemradio",
                "aria-checked": u
            }, a, {
                ref: t,
                "data-state": tq(u),
                onSelect: (0,
                i.M)(a.onSelect, ()=>{
                    var e;
                    return null === (e = l.onValueChange) || void 0 === e ? void 0 : e.call(l, n)
                }
                , {
                    checkForDefaultPrevented: !1
                })
            })))
        }
        )
          , tW = "MenuItemIndicator"
          , [tV,t$] = tu(tW, {
            checked: !1
        })
          , tN = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, forceMount: i, ...a} = e
              , l = t$(tW, n);
            return (0,
            o.createElement)(eH.z, {
                present: i || tG(l.checked) || !0 === l.checked
            }, (0,
            o.createElement)(c.WV.span, (0,
            r.Z)({}, a, {
                ref: t,
                "data-state": tq(l.checked)
            })))
        }
        )
          , tK = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeMenu: n, ...i} = e;
            return (0,
            o.createElement)(c.WV.div, (0,
            r.Z)({
                role: "separator",
                "aria-orientation": "horizontal"
            }, i, {
                ref: t
            }))
        }
        )
          , tz = ((e,t)=>{
            let {__scopeMenu: n, ...i} = e
              , a = ts(n);
            return (0,
            o.createElement)(eW, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        ,
        "MenuSub")
          , [tH,tB] = tu(tz)
          , tj = "MenuSubTrigger"
          , tX = (0,
        o.forwardRef)((e,t)=>{
            let n = tp(tj, e.__scopeMenu)
              , l = th(tj, e.__scopeMenu)
              , u = tB(tj, e.__scopeMenu)
              , c = tx(tj, e.__scopeMenu)
              , s = (0,
            o.useRef)(null)
              , {pointerGraceTimerRef: d, onPointerGraceIntentChange: f} = c
              , p = {
                __scopeMenu: e.__scopeMenu
            }
              , m = (0,
            o.useCallback)(()=>{
                s.current && window.clearTimeout(s.current),
                s.current = null
            }
            , []);
            return (0,
            o.useEffect)(()=>m, [m]),
            (0,
            o.useEffect)(()=>{
                let e = d.current;
                return ()=>{
                    window.clearTimeout(e),
                    f(null)
                }
            }
            , [d, f]),
            (0,
            o.createElement)(tv, (0,
            r.Z)({
                asChild: !0
            }, p), (0,
            o.createElement)(tO, (0,
            r.Z)({
                id: u.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": u.contentId,
                "data-state": tY(n.open)
            }, e, {
                ref: (0,
                a.F)(t, u.onTriggerChange),
                onClick: t=>{
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                    n.open || n.onOpenChange(!0))
                }
                ,
                onPointerMove: (0,
                i.M)(e.onPointerMove, tJ(t=>{
                    c.onItemEnter(t),
                    t.defaultPrevented || e.disabled || n.open || s.current || (c.onPointerGraceIntentChange(null),
                    s.current = window.setTimeout(()=>{
                        n.onOpenChange(!0),
                        m()
                    }
                    , 100))
                }
                )),
                onPointerLeave: (0,
                i.M)(e.onPointerLeave, tJ(e=>{
                    var t, r;
                    m();
                    let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                    if (o) {
                        let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side
                          , i = "right" === t
                          , a = o[i ? "left" : "right"]
                          , l = o[i ? "right" : "left"];
                        c.onPointerGraceIntentChange({
                            area: [{
                                x: e.clientX + (i ? -5 : 5),
                                y: e.clientY
                            }, {
                                x: a,
                                y: o.top
                            }, {
                                x: l,
                                y: o.top
                            }, {
                                x: l,
                                y: o.bottom
                            }, {
                                x: a,
                                y: o.bottom
                            }],
                            side: t
                        }),
                        window.clearTimeout(d.current),
                        d.current = window.setTimeout(()=>c.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (c.onTriggerLeave(e),
                        e.defaultPrevented)
                            return;
                        c.onPointerGraceIntentChange(null)
                    }
                }
                )),
                onKeyDown: (0,
                i.M)(e.onKeyDown, t=>{
                    let r = "" !== c.searchRef.current;
                    if (!e.disabled && (!r || " " !== t.key) && tn[l.dir].includes(t.key)) {
                        var o;
                        n.onOpenChange(!0),
                        null === (o = n.content) || void 0 === o || o.focus(),
                        t.preventDefault()
                    }
                }
                )
            })))
        }
        )
          , tU = (0,
        o.forwardRef)((e,t)=>{
            let n = tw(tb, e.__scopeMenu)
              , {forceMount: l=n.forceMount, ...u} = e
              , c = tp(tb, e.__scopeMenu)
              , s = th(tb, e.__scopeMenu)
              , d = tB("MenuSubContent", e.__scopeMenu)
              , f = (0,
            o.useRef)(null)
              , p = (0,
            a.e)(t, f);
            return (0,
            o.createElement)(ti.Provider, {
                scope: e.__scopeMenu
            }, (0,
            o.createElement)(eH.z, {
                present: l || c.open
            }, (0,
            o.createElement)(ti.Slot, {
                scope: e.__scopeMenu
            }, (0,
            o.createElement)(t_, (0,
            r.Z)({
                id: d.contentId,
                "aria-labelledby": d.triggerId
            }, u, {
                ref: p,
                align: "start",
                side: "rtl" === s.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: e=>{
                    var t;
                    s.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()),
                    e.preventDefault()
                }
                ,
                onCloseAutoFocus: e=>e.preventDefault(),
                onFocusOutside: (0,
                i.M)(e.onFocusOutside, e=>{
                    e.target !== d.trigger && c.onOpenChange(!1)
                }
                ),
                onEscapeKeyDown: (0,
                i.M)(e.onEscapeKeyDown, e=>{
                    s.onClose(),
                    e.preventDefault()
                }
                ),
                onKeyDown: (0,
                i.M)(e.onKeyDown, e=>{
                    let t = e.currentTarget.contains(e.target)
                      , n = tr[s.dir].includes(e.key);
                    if (t && n) {
                        var r;
                        c.onOpenChange(!1),
                        null === (r = d.trigger) || void 0 === r || r.focus(),
                        e.preventDefault()
                    }
                }
                )
            })))))
        }
        );
        function tY(e) {
            return e ? "open" : "closed"
        }
        function tG(e) {
            return "indeterminate" === e
        }
        function tq(e) {
            return tG(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        function tJ(e) {
            return t=>"mouse" === t.pointerType ? e(t) : void 0
        }
        let tQ = e=>{
            let {__scopeMenu: t, open: n=!1, children: r, dir: i, onOpenChange: a, modal: l=!0} = e
              , u = ts(t)
              , [c,s] = (0,
            o.useState)(null)
              , d = (0,
            o.useRef)(!1)
              , p = (0,
            eR.W)(a)
              , m = f(i);
            return (0,
            o.useEffect)(()=>{
                let e = ()=>{
                    d.current = !0,
                    document.addEventListener("pointerdown", t, {
                        capture: !0,
                        once: !0
                    }),
                    document.addEventListener("pointermove", t, {
                        capture: !0,
                        once: !0
                    })
                }
                  , t = ()=>d.current = !1;
                return document.addEventListener("keydown", e, {
                    capture: !0
                }),
                ()=>{
                    document.removeEventListener("keydown", e, {
                        capture: !0
                    }),
                    document.removeEventListener("pointerdown", t, {
                        capture: !0
                    }),
                    document.removeEventListener("pointermove", t, {
                        capture: !0
                    })
                }
            }
            , []),
            (0,
            o.createElement)(eK, u, (0,
            o.createElement)(tf, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: c,
                onContentChange: s
            }, (0,
            o.createElement)(tm, {
                scope: t,
                onClose: (0,
                o.useCallback)(()=>p(!1), [p]),
                isUsingKeyboardRef: d,
                dir: m,
                modal: l
            }, r)))
        }
          , t0 = e=>{
            let {__scopeMenu: t, forceMount: n, children: r, container: i} = e
              , a = tp(tg, t);
            return (0,
            o.createElement)(ty, {
                scope: t,
                forceMount: n
            }, (0,
            o.createElement)(eH.z, {
                present: n || a.open
            }, (0,
            o.createElement)(ez.h, {
                asChild: !0,
                container: i
            }, r)))
        }
          , t1 = e=>{
            let {__scopeMenu: t, children: n, open: r=!1, onOpenChange: i} = e
              , a = tp(tz, t)
              , l = ts(t)
              , [u,c] = (0,
            o.useState)(null)
              , [s,d] = (0,
            o.useState)(null)
              , f = (0,
            eR.W)(i);
            return (0,
            o.useEffect)(()=>(!1 === a.open && f(!1),
            ()=>f(!1)), [a.open, f]),
            (0,
            o.createElement)(eK, l, (0,
            o.createElement)(tf, {
                scope: t,
                open: r,
                onOpenChange: f,
                content: s,
                onContentChange: d
            }, (0,
            o.createElement)(tH, {
                scope: t,
                contentId: (0,
                v.M)(),
                triggerId: (0,
                v.M)(),
                trigger: u,
                onTriggerChange: c
            }, n)))
        }
          , t2 = "DropdownMenu"
          , [t6,t9] = (0,
        l.b)(t2, [tc])
          , t5 = tc()
          , [t4,t8] = t6(t2)
          , t3 = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, disabled: l=!1, ...u} = e
              , s = t8("DropdownMenuTrigger", n)
              , d = t5(n);
            return (0,
            o.createElement)(tv, (0,
            r.Z)({
                asChild: !0
            }, d), (0,
            o.createElement)(c.WV.button, (0,
            r.Z)({
                type: "button",
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": s.open,
                "aria-controls": s.open ? s.contentId : void 0,
                "data-state": s.open ? "open" : "closed",
                "data-disabled": l ? "" : void 0,
                disabled: l
            }, u, {
                ref: (0,
                a.F)(t, s.triggerRef),
                onPointerDown: (0,
                i.M)(e.onPointerDown, e=>{
                    l || 0 !== e.button || !1 !== e.ctrlKey || (s.onOpenToggle(),
                    s.open || e.preventDefault())
                }
                ),
                onKeyDown: (0,
                i.M)(e.onKeyDown, e=>{
                    !l && (["Enter", " "].includes(e.key) && s.onOpenToggle(),
                    "ArrowDown" === e.key && s.onOpenChange(!0),
                    ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                }
                )
            })))
        }
        )
          , t7 = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...a} = e
              , l = t8("DropdownMenuContent", n)
              , u = t5(n)
              , c = (0,
            o.useRef)(!1);
            return (0,
            o.createElement)(tM, (0,
            r.Z)({
                id: l.contentId,
                "aria-labelledby": l.triggerId
            }, u, a, {
                ref: t,
                onCloseAutoFocus: (0,
                i.M)(e.onCloseAutoFocus, e=>{
                    var t;
                    c.current || null === (t = l.triggerRef.current) || void 0 === t || t.focus(),
                    c.current = !1,
                    e.preventDefault()
                }
                ),
                onInteractOutside: (0,
                i.M)(e.onInteractOutside, e=>{
                    let t = e.detail.originalEvent
                      , n = 0 === t.button && !0 === t.ctrlKey
                      , r = 2 === t.button || n;
                    (!l.modal || r) && (c.current = !0)
                }
                ),
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }))
        }
        )
          , ne = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tk, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nt = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tS, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nn = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tA, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nr = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tP, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , no = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tI, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , ni = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tF, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , na = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tN, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nl = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tK, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nu = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tX, (0,
            r.Z)({}, a, i, {
                ref: t
            }))
        }
        )
          , nc = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeDropdownMenu: n, ...i} = e
              , a = t5(n);
            return (0,
            o.createElement)(tU, (0,
            r.Z)({}, a, i, {
                ref: t,
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }))
        }
        )
          , ns = e=>{
            let {__scopeDropdownMenu: t, children: n, dir: i, open: a, defaultOpen: l, onOpenChange: c, modal: s=!0} = e
              , d = t5(t)
              , f = (0,
            o.useRef)(null)
              , [p=!1,m] = (0,
            u.T)({
                prop: a,
                defaultProp: l,
                onChange: c
            });
            return (0,
            o.createElement)(t4, {
                scope: t,
                triggerId: (0,
                v.M)(),
                triggerRef: f,
                contentId: (0,
                v.M)(),
                open: p,
                onOpenChange: m,
                onOpenToggle: (0,
                o.useCallback)(()=>m(e=>!e), [m]),
                modal: s
            }, (0,
            o.createElement)(tQ, (0,
            r.Z)({}, d, {
                open: p,
                onOpenChange: m,
                dir: i,
                modal: s
            }), n))
        }
          , nd = t3
          , nf = e=>{
            let {__scopeDropdownMenu: t, ...n} = e
              , i = t5(t);
            return (0,
            o.createElement)(t0, (0,
            r.Z)({}, i, n))
        }
          , np = t7
          , nm = ne
          , nh = nt
          , nv = nn
          , ng = nr
          , ny = no
          , nw = ni
          , nb = na
          , nE = nl
          , nx = e=>{
            let {__scopeDropdownMenu: t, children: n, open: i, onOpenChange: a, defaultOpen: l} = e
              , c = t5(t)
              , [s=!1,d] = (0,
            u.T)({
                prop: i,
                defaultProp: l,
                onChange: a
            });
            return (0,
            o.createElement)(t1, (0,
            r.Z)({}, c, {
                open: s,
                onOpenChange: d
            }), n)
        }
          , nM = nu
          , nC = nc
    },
    1244: function(e, t, n) {
        "use strict";
        n.d(t, {
            EW: function() {
                return i
            }
        });
        var r = n(2265);
        let o = 0;
        function i() {
            (0,
            r.useEffect)(()=>{
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : a()),
                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : a()),
                o++,
                ()=>{
                    1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),
                    o--
                }
            }
            , [])
        }
        function a() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
            e
        }
    },
    2759: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            M: function() {
                return f
            }
        });
        var o = n(3428)
          , i = n(2265)
          , a = n(2210)
          , l = n(9381)
          , u = n(6459);
        let c = "focusScope.autoFocusOnMount"
          , s = "focusScope.autoFocusOnUnmount"
          , d = {
            bubbles: !1,
            cancelable: !0
        }
          , f = (0,
        i.forwardRef)((e,t)=>{
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: f, onUnmountAutoFocus: g, ...y} = e
              , [w,b] = (0,
            i.useState)(null)
              , E = (0,
            u.W)(f)
              , x = (0,
            u.W)(g)
              , M = (0,
            i.useRef)(null)
              , C = (0,
            a.e)(t, e=>b(e))
              , R = (0,
            i.useRef)({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            (0,
            i.useEffect)(()=>{
                if (r) {
                    function e(e) {
                        if (R.paused || !w)
                            return;
                        let t = e.target;
                        w.contains(t) ? M.current = t : h(M.current, {
                            select: !0
                        })
                    }
                    function t(e) {
                        if (R.paused || !w)
                            return;
                        let t = e.relatedTarget;
                        null === t || w.contains(t) || h(M.current, {
                            select: !0
                        })
                    }
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let n = new MutationObserver(function(e) {
                        let t = document.activeElement;
                        for (let n of e)
                            n.removedNodes.length > 0 && !(null != w && w.contains(t)) && h(w)
                    }
                    );
                    return w && n.observe(w, {
                        childList: !0,
                        subtree: !0
                    }),
                    ()=>{
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        n.disconnect()
                    }
                }
            }
            , [r, w, R.paused]),
            (0,
            i.useEffect)(()=>{
                if (w) {
                    v.add(R);
                    let e = document.activeElement
                      , t = w.contains(e);
                    if (!t) {
                        let t = new CustomEvent(c,d);
                        w.addEventListener(c, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented || (function(e, {select: t=!1}={}) {
                            let n = document.activeElement;
                            for (let r of e)
                                if (h(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(p(w).filter(e=>"A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && h(w))
                    }
                    return ()=>{
                        w.removeEventListener(c, E),
                        setTimeout(()=>{
                            let t = new CustomEvent(s,d);
                            w.addEventListener(s, x),
                            w.dispatchEvent(t),
                            t.defaultPrevented || h(null != e ? e : document.body, {
                                select: !0
                            }),
                            w.removeEventListener(s, x),
                            v.remove(R)
                        }
                        , 0)
                    }
                }
            }
            , [w, E, x, R]);
            let _ = (0,
            i.useCallback)(e=>{
                if (!n && !r || R.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,i] = function(e) {
                        let t = p(e)
                          , n = m(t, e)
                          , r = m(t.reverse(), e);
                        return [n, r]
                    }(t)
                      , a = r && i;
                    a ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(),
                    n && h(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && h(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, R.paused]);
            return (0,
            i.createElement)(l.WV.div, (0,
            o.Z)({
                tabIndex: -1
            }, y, {
                ref: C,
                onKeyDown: _
            }))
        }
        );
        function p(e) {
            let t = []
              , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e=>{
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode(); )
                t.push(n.currentNode);
            return t
        }
        function m(e, t) {
            for (let n of e)
                if (!function(e, {upTo: t}) {
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === t || e !== t); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function h(e, {select: t=!1}={}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        let v = (r = [],
        {
            add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()),
                (r = g(r, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume()
            }
        });
        function g(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
    },
    966: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return u
            }
        });
        var r, o = n(2265), i = n(1030);
        let a = (r || (r = n.t(o, 2)))["useId".toString()] || (()=>void 0)
          , l = 0;
        function u(e) {
            let[t,n] = o.useState(a());
            return (0,
            i.b)(()=>{
                e || n(e=>null != e ? e : String(l++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
    }
}]);
