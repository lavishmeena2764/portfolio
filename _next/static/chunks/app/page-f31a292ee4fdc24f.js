(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    2898: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return s
            }
        });
        var n = r(2265)
          , o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let i = e=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , s = (e,t)=>{
            let r = (0,
            n.forwardRef)(({color: r="currentColor", size: s=24, strokeWidth: a=2, absoluteStrokeWidth: d, children: c, ...l},u)=>(0,
            n.createElement)("svg", {
                ref: u,
                ...o,
                width: s,
                height: s,
                stroke: r,
                strokeWidth: d ? 24 * Number(a) / Number(s) : a,
                className: `lucide lucide-${i(e)}`,
                ...l
            }, [...t.map(([e,t])=>(0,
            n.createElement)(e, t)), ...(Array.isArray(c) ? c : [c]) || []]));
            return r.displayName = `${e}`,
            r
        }
    },
    8257: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 4626)),
        Promise.resolve().then(r.bind(r, 6353))
    },
    4626: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return d
            }
        });
        var n = r(7437)
          , o = r(6224)
          , i = r(5420)
          , s = r(4612)
          , a = r(9337);
        function d() {
            let {toast: e} = (0,
            s.pm)();
            return (0,
            n.jsxs)("div", {
                className: "flex flex-row justify-start items-center gap-3 mt-4 lg:w-2/4",
                children: [(0,
                n.jsx)(i.z, {
                    asChild: !0,
                    variant: "secondary",
                    children: (0,
                    n.jsx)("a", {
                        href: "/Shivansh_Resume.pdf",
                        download: !0,
                        children: "Resume"
                    })
                }), (0,
                n.jsxs)(i.z, {
                    variant: "outline",
                    onClick: ()=>void (navigator.clipboard.writeText("shivanshsri.04@gmail.com"),
                    e({
                        title: "Copied To Clipboard !"
                    })),
                    children: [(0,
                    n.jsx)(o.Z, {
                        size: 16,
                        className: "mr-2"
                    }), " E-mail"]
                }), (0,
                n.jsx)(a.x, {})]
            })
        }
    },
    6353: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return i
            }
        });
        var n = r(7437)
          , o = r(8164);
        function i() {
            return (0,
            n.jsxs)("div", {
                className: "lg:w-2/4",
                children: [(0,
                n.jsx)("h1", {
                    className: "scroll-m-20 text-4xl  tracking-tight lg:text-5xl",
                    children: "नमस्कार ! \uD83D\uDE4F"
                }), (0,
                n.jsx)("h1", {
                    className: "scroll-m-20 font-bold text-4xl  tracking-tight lg:text-5xl",
                    children: "I'm Shivansh. "
                }), (0,
                n.jsxs)("h1", {
                    className: "scroll-m-20  text-4xl  tracking-tight lg:text-5xl",
                    children: ["I Build ", (0,
                    n.jsx)("span", {
                        className: "text-zinc-500 font-bold",
                        children: (0,
                        n.jsx)(o.rf, {
                            words: ["Websites.", "Apps.", "Softwares."],
                            loop: 0,
                            cursor: !0,
                            cursorStyle: "_",
                            cursorColor: "gray"
                        })
                    }), " "]
                }), (0,
                n.jsx)("p", {
                    className: "leading-7 [&:not(:first-child)]:mt-6 text-zinc-500 md:w-2/4 lg:w-full",
                    children: "Passionate about tech, coding, and continuous growth in software development. Thrive on diverse projects, tech exploration, and innovative collaboration. \uD83D\uDE80\uD83D\uDC68‍\uD83D\uDCBB"
                })]
            })
        }
    },
    5420: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return c
            }
        });
        var n = r(7437)
          , o = r(2265)
          , i = r(7256)
          , s = r(6061)
          , a = r(6512);
        let d = (0,
        s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", {
            variants: {
                variant: {
                    default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                    destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
                    outline: "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                    ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                    link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , c = o.forwardRef((e,t)=>{
            let {className: r, variant: o, size: s, asChild: c=!1, ...l} = e
              , u = c ? i.g7 : "button";
            return (0,
            n.jsx)(u, {
                className: (0,
                a.cn)(d({
                    variant: o,
                    size: s,
                    className: r
                })),
                ref: t,
                ...l
            })
        }
        );
        c.displayName = "Button"
    },
    9337: function(e, t, r) {
        "use strict";
        r.d(t, {
            x: function() {
                return g
            }
        });
        var n = r(7437)
          , o = r(2265)
          , i = r(3022)
          , s = r(6061)
          , a = r(2549)
          , d = r(6512);
        let c = i.zt
          , l = o.forwardRef((e,t)=>{
            let {className: r, ...o} = e;
            return (0,
            n.jsx)(i.l_, {
                ref: t,
                className: (0,
                d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", r),
                ...o
            })
        }
        );
        l.displayName = i.l_.displayName;
        let u = (0,
        s.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-zinc-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-zinc-800", {
            variants: {
                variant: {
                    default: "border bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
                    destructive: "destructive group border-red-500 bg-red-500 text-zinc-50 dark:border-red-900 dark:bg-red-900 dark:text-zinc-50"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        })
          , f = o.forwardRef((e,t)=>{
            let {className: r, variant: o, ...s} = e;
            return (0,
            n.jsx)(i.fC, {
                ref: t,
                className: (0,
                d.cn)(u({
                    variant: o
                }), r),
                ...s
            })
        }
        );
        f.displayName = i.fC.displayName;
        let p = o.forwardRef((e,t)=>{
            let {className: r, ...o} = e;
            return (0,
            n.jsx)(i.aU, {
                ref: t,
                className: (0,
                d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-zinc-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-zinc-50 group-[.destructive]:focus:ring-red-500 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:focus:ring-zinc-300 dark:group-[.destructive]:border-zinc-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-zinc-50 dark:group-[.destructive]:focus:ring-red-900", r),
                ...o
            })
        }
        );
        p.displayName = i.aU.displayName;
        let v = o.forwardRef((e,t)=>{
            let {className: r, ...o} = e;
            return (0,
            n.jsx)(i.x8, {
                ref: t,
                className: (0,
                d.cn)("absolute right-2 top-2 rounded-md p-1 text-zinc-950/50 opacity-0 transition-opacity hover:text-zinc-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-zinc-50/50 dark:hover:text-zinc-50", r),
                "toast-close": "",
                ...o,
                children: (0,
                n.jsx)(a.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        v.displayName = i.x8.displayName;
        let m = o.forwardRef((e,t)=>{
            let {className: r, ...o} = e;
            return (0,
            n.jsx)(i.Dx, {
                ref: t,
                className: (0,
                d.cn)("text-sm font-semibold", r),
                ...o
            })
        }
        );
        m.displayName = i.Dx.displayName;
        let h = o.forwardRef((e,t)=>{
            let {className: r, ...o} = e;
            return (0,
            n.jsx)(i.dk, {
                ref: t,
                className: (0,
                d.cn)("text-sm opacity-90", r),
                ...o
            })
        }
        );
        h.displayName = i.dk.displayName;
        var x = r(4612);
        function g() {
            let {toasts: e} = (0,
            x.pm)();
            return (0,
            n.jsxs)(c, {
                children: [e.map(function(e) {
                    let {id: t, title: r, description: o, action: i, ...s} = e;
                    return (0,
                    n.jsxs)(f, {
                        ...s,
                        children: [(0,
                        n.jsxs)("div", {
                            className: "grid gap-1",
                            children: [r && (0,
                            n.jsx)(m, {
                                children: r
                            }), o && (0,
                            n.jsx)(h, {
                                children: o
                            })]
                        }), i, (0,
                        n.jsx)(v, {})]
                    }, t)
                }), (0,
                n.jsx)(l, {})]
            })
        }
    },
    4612: function(e, t, r) {
        "use strict";
        r.d(t, {
            pm: function() {
                return f
            }
        });
        var n = r(2265);
        let o = 0
          , i = new Map
          , s = e=>{
            if (i.has(e))
                return;
            let t = setTimeout(()=>{
                i.delete(e),
                l({
                    type: "REMOVE_TOAST",
                    toastId: e
                })
            }
            , 1e6);
            i.set(e, t)
        }
          , a = (e,t)=>{
            switch (t.type) {
            case "ADD_TOAST":
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, 1)
                };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map(e=>e.id === t.toast.id ? {
                        ...e,
                        ...t.toast
                    } : e)
                };
            case "DISMISS_TOAST":
                {
                    let {toastId: r} = t;
                    return r ? s(r) : e.toasts.forEach(e=>{
                        s(e.id)
                    }
                    ),
                    {
                        ...e,
                        toasts: e.toasts.map(e=>e.id === r || void 0 === r ? {
                            ...e,
                            open: !1
                        } : e)
                    }
                }
            case "REMOVE_TOAST":
                if (void 0 === t.toastId)
                    return {
                        ...e,
                        toasts: []
                    };
                return {
                    ...e,
                    toasts: e.toasts.filter(e=>e.id !== t.toastId)
                }
            }
        }
          , d = []
          , c = {
            toasts: []
        };
        function l(e) {
            c = a(c, e),
            d.forEach(e=>{
                e(c)
            }
            )
        }
        function u(e) {
            let {...t} = e
              , r = (o = (o + 1) % Number.MAX_VALUE).toString()
              , n = ()=>l({
                type: "DISMISS_TOAST",
                toastId: r
            });
            return l({
                type: "ADD_TOAST",
                toast: {
                    ...t,
                    id: r,
                    open: !0,
                    onOpenChange: e=>{
                        e || n()
                    }
                }
            }),
            {
                id: r,
                dismiss: n,
                update: e=>l({
                    type: "UPDATE_TOAST",
                    toast: {
                        ...e,
                        id: r
                    }
                })
            }
        }
        function f() {
            let[e,t] = n.useState(c);
            return n.useEffect(()=>(d.push(t),
            ()=>{
                let e = d.indexOf(t);
                e > -1 && d.splice(e, 1)
            }
            ), [e]),
            {
                ...e,
                toast: u,
                dismiss: e=>l({
                    type: "DISMISS_TOAST",
                    toastId: e
                })
            }
        }
    },
    6512: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return i
            }
        });
        var n = r(7042)
          , o = r(3986);
        function i() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            o.m)((0,
            n.W)(t))
        }
    },
    622: function(e, t, r) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(2265)
          , o = Symbol.for("react.element")
          , i = Symbol.for("react.fragment")
          , s = Object.prototype.hasOwnProperty
          , a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , d = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function c(e, t, r) {
            var n, i = {}, c = null, l = null;
            for (n in void 0 !== r && (c = "" + r),
            void 0 !== t.key && (c = "" + t.key),
            void 0 !== t.ref && (l = t.ref),
            t)
                s.call(t, n) && !d.hasOwnProperty(n) && (i[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps)
                    void 0 === i[n] && (i[n] = t[n]);
            return {
                $$typeof: o,
                type: e,
                key: c,
                ref: l,
                props: i,
                _owner: a.current
            }
        }
        t.Fragment = i,
        t.jsx = c,
        t.jsxs = c
    },
    7437: function(e, t, r) {
        "use strict";
        e.exports = r(622)
    },
    8164: function(e, t, r) {
        "use strict";
        var n = r(7437)
          , o = r(2265)
          , i = function() {
            return (i = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function s(e, t) {
            var r, n;
            switch (t.type) {
            case "TYPE":
                return i(i({}, e), {
                    speed: t.speed,
                    text: null === (r = t.payload) || void 0 === r ? void 0 : r.substring(0, e.text.length + 1)
                });
            case "DELAY":
                return i(i({}, e), {
                    speed: t.payload
                });
            case "DELETE":
                return i(i({}, e), {
                    speed: t.speed,
                    text: null === (n = t.payload) || void 0 === n ? void 0 : n.substring(0, e.text.length - 1)
                });
            case "COUNT":
                return i(i({}, e), {
                    count: e.count + 1
                });
            default:
                return e
            }
        }
        var a = function(e) {
            var t = e.words
              , r = void 0 === t ? ["Hello World!", "This is", "a simple Typewriter"] : t
              , n = e.loop
              , i = void 0 === n ? 1 : n
              , a = e.typeSpeed
              , d = void 0 === a ? 80 : a
              , c = e.deleteSpeed
              , l = void 0 === c ? 50 : c
              , u = e.delaySpeed
              , f = void 0 === u ? 1500 : u
              , p = e.onLoopDone
              , v = e.onType
              , m = e.onDelete
              , h = e.onDelay
              , x = o.useReducer(s, {
                speed: d,
                text: "",
                count: 0
            })
              , g = x[0]
              , y = g.speed
              , b = g.text
              , k = g.count
              , z = x[1]
              , w = o.useRef(0)
              , _ = o.useRef(!1)
              , T = o.useRef(!1)
              , N = o.useRef(!1)
              , j = o.useRef(!1)
              , S = o.useCallback(function() {
                var e = k % r.length
                  , t = r[e];
                T.current ? (z({
                    type: "DELETE",
                    payload: t,
                    speed: l
                }),
                "" === b && (T.current = !1,
                z({
                    type: "COUNT"
                }))) : (z({
                    type: "TYPE",
                    payload: t,
                    speed: d
                }),
                N.current = !0,
                b === t && (z({
                    type: "DELAY",
                    payload: f
                }),
                N.current = !1,
                j.current = !0,
                setTimeout(function() {
                    j.current = !1,
                    T.current = !0
                }, f),
                i > 0 && (w.current += 1,
                w.current / r.length === i && (j.current = !1,
                _.current = !0)))),
                N.current && v && v(w.current),
                T.current && m && m(),
                j.current && h && h()
            }, [k, f, l, i, d, r, b, v, m, h]);
            return o.useEffect(function() {
                var e = setTimeout(S, y);
                return _.current && clearTimeout(e),
                function() {
                    return clearTimeout(e)
                }
            }, [S, y]),
            o.useEffect(function() {
                p && _.current && p()
            }, [p]),
            [b, {
                isType: N.current,
                isDelay: j.current,
                isDelete: T.current,
                isDone: _.current
            }]
        };
        !function(e, t) {
            void 0 === t && (t = {});
            var r = t.insertAt;
            if (e && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0]
                  , o = document.createElement("style");
                o.type = "text/css",
                "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
                o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
        var d = o.memo(function(e) {
            var t = e.cursorBlinking
              , r = void 0 === t || t
              , o = e.cursorStyle
              , s = e.cursorColor;
            return n.jsx("span", i({
                style: {
                    color: void 0 === s ? "inherit" : s
                },
                className: "".concat("styles-module_blinkingCursor__yugAC", " ").concat(r ? "styles-module_blinking__9VXRT" : "")
            }, {
                children: void 0 === o ? "|" : o
            }))
        });
        t.rf = function(e) {
            var t = e.words
              , r = e.loop
              , o = e.typeSpeed
              , i = e.deleteSpeed
              , s = e.delaySpeed
              , c = e.cursor
              , l = e.cursorStyle
              , u = e.cursorColor
              , f = e.cursorBlinking
              , p = a({
                words: void 0 === t ? ["Hello World!", "This is", "a simple Typewriter"] : t,
                loop: void 0 === r ? 1 : r,
                typeSpeed: void 0 === o ? 80 : o,
                deleteSpeed: void 0 === i ? 50 : i,
                delaySpeed: void 0 === s ? 1500 : s,
                onLoopDone: e.onLoopDone,
                onType: e.onType,
                onDelay: e.onDelay,
                onDelete: e.onDelete
            })[0];
            return n.jsxs(n.Fragment, {
                children: [n.jsx("span", {
                    children: p
                }), void 0 !== c && c && n.jsx(d, {
                    cursorStyle: void 0 === l ? "|" : l,
                    cursorColor: void 0 === u ? "inherit" : u,
                    cursorBlinking: void 0 === f || f
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [678, 616, 971, 864, 744], function() {
        return e(e.s = 8257)
    }),
    _N_E = e.O()
}
]);
