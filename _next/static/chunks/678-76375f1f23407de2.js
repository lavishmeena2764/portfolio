"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[678], {
    2549: function(e, r, t) {
        t.d(r, {
            Z: function() {
                return o
            }
        });
        var n = t(2898);
        let o = (0,
        n.Z)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    },
    3428: function(e, r, t) {
        t.d(r, {
            Z: function() {
                return n
            }
        });
        function n() {
            return (n = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
    },
    5744: function(e, r, t) {
        t.d(r, {
            M: function() {
                return n
            }
        });
        function n(e, r, {checkForDefaultPrevented: t=!0}={}) {
            return function(n) {
                if (null == e || e(n),
                !1 === t || !n.defaultPrevented)
                    return null == r ? void 0 : r(n)
            }
        }
    },
    7733: function(e, r, t) {
        t.d(r, {
            B: function() {
                return a
            }
        });
        var n = t(2265)
          , o = t(6989)
          , l = t(2210)
          , i = t(7256);
        function a(e) {
            let r = e + "CollectionProvider"
              , [t,a] = (0,
            o.b)(r)
              , [s,c] = t(r, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , u = e + "CollectionSlot"
              , d = n.forwardRef((e,r)=>{
                let {scope: t, children: o} = e
                  , a = c(u, t)
                  , s = (0,
                l.e)(r, a.collectionRef);
                return n.createElement(i.g7, {
                    ref: s
                }, o)
            }
            )
              , f = e + "CollectionItemSlot"
              , p = "data-radix-collection-item"
              , b = n.forwardRef((e,r)=>{
                let {scope: t, children: o, ...a} = e
                  , s = n.useRef(null)
                  , u = (0,
                l.e)(r, s)
                  , d = c(f, t);
                return n.useEffect(()=>(d.itemMap.set(s, {
                    ref: s,
                    ...a
                }),
                ()=>void d.itemMap.delete(s))),
                n.createElement(i.g7, {
                    [p]: "",
                    ref: u
                }, o)
            }
            );
            return [{
                Provider: e=>{
                    let {scope: r, children: t} = e
                      , o = n.useRef(null)
                      , l = n.useRef(new Map).current;
                    return n.createElement(s, {
                        scope: r,
                        itemMap: l,
                        collectionRef: o
                    }, t)
                }
                ,
                Slot: d,
                ItemSlot: b
            }, function(r) {
                let t = c(e + "CollectionConsumer", r)
                  , o = n.useCallback(()=>{
                    let e = t.collectionRef.current;
                    if (!e)
                        return [];
                    let r = Array.from(e.querySelectorAll(`[${p}]`))
                      , n = Array.from(t.itemMap.values())
                      , o = n.sort((e,t)=>r.indexOf(e.ref.current) - r.indexOf(t.ref.current));
                    return o
                }
                , [t.collectionRef, t.itemMap]);
                return o
            }
            , a]
        }
    },
    2210: function(e, r, t) {
        t.d(r, {
            F: function() {
                return o
            },
            e: function() {
                return l
            }
        });
        var n = t(2265);
        function o(...e) {
            return r=>e.forEach(e=>{
                "function" == typeof e ? e(r) : null != e && (e.current = r)
            }
            )
        }
        function l(...e) {
            return (0,
            n.useCallback)(o(...e), e)
        }
    },
    6989: function(e, r, t) {
        t.d(r, {
            b: function() {
                return l
            },
            k: function() {
                return o
            }
        });
        var n = t(2265);
        function o(e, r) {
            let t = (0,
            n.createContext)(r);
            function o(e) {
                let {children: r, ...o} = e
                  , l = (0,
                n.useMemo)(()=>o, Object.values(o));
                return (0,
                n.createElement)(t.Provider, {
                    value: l
                }, r)
            }
            return o.displayName = e + "Provider",
            [o, function(o) {
                let l = (0,
                n.useContext)(t);
                if (l)
                    return l;
                if (void 0 !== r)
                    return r;
                throw Error(`\`${o}\` must be used within \`${e}\``)
            }
            ]
        }
        function l(e, r=[]) {
            let t = []
              , o = ()=>{
                let r = t.map(e=>(0,
                n.createContext)(e));
                return function(t) {
                    let o = (null == t ? void 0 : t[e]) || r;
                    return (0,
                    n.useMemo)(()=>({
                        [`__scope${e}`]: {
                            ...t,
                            [e]: o
                        }
                    }), [t, o])
                }
            }
            ;
            return o.scopeName = e,
            [function(r, o) {
                let l = (0,
                n.createContext)(o)
                  , i = t.length;
                function a(r) {
                    let {scope: t, children: o, ...a} = r
                      , s = (null == t ? void 0 : t[e][i]) || l
                      , c = (0,
                    n.useMemo)(()=>a, Object.values(a));
                    return (0,
                    n.createElement)(s.Provider, {
                        value: c
                    }, o)
                }
                return t = [...t, o],
                a.displayName = r + "Provider",
                [a, function(t, a) {
                    let s = (null == a ? void 0 : a[e][i]) || l
                      , c = (0,
                    n.useContext)(s);
                    if (c)
                        return c;
                    if (void 0 !== o)
                        return o;
                    throw Error(`\`${t}\` must be used within \`${r}\``)
                }
                ]
            }
            , function(...e) {
                let r = e[0];
                if (1 === e.length)
                    return r;
                let t = ()=>{
                    let t = e.map(e=>({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = t.reduce((r,{useScope: t, scopeName: n})=>{
                            let o = t(e)
                              , l = o[`__scope${n}`];
                            return {
                                ...r,
                                ...l
                            }
                        }
                        , {});
                        return (0,
                        n.useMemo)(()=>({
                            [`__scope${r.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return t.scopeName = r.scopeName,
                t
            }(o, ...r)]
        }
    },
    9249: function(e, r, t) {
        let n;
        t.d(r, {
            I0: function() {
                return g
            },
            XB: function() {
                return f
            },
            fC: function() {
                return v
            }
        });
        var o = t(3428)
          , l = t(2265)
          , i = t(5744)
          , a = t(9381)
          , s = t(2210)
          , c = t(6459);
        let u = "dismissableLayer.update"
          , d = (0,
        l.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , f = (0,
        l.forwardRef)((e,r)=>{
            var t;
            let {disableOutsidePointerEvents: f=!1, onEscapeKeyDown: p, onPointerDownOutside: v, onFocusOutside: g, onInteractOutside: h, onDismiss: y, ...w} = e
              , x = (0,
            l.useContext)(d)
              , [E,k] = (0,
            l.useState)(null)
              , C = null !== (t = null == E ? void 0 : E.ownerDocument) && void 0 !== t ? t : null == globalThis ? void 0 : globalThis.document
              , [,N] = (0,
            l.useState)({})
              , P = (0,
            s.e)(r, e=>k(e))
              , M = Array.from(x.layers)
              , [O] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1)
              , z = M.indexOf(O)
              , T = E ? M.indexOf(E) : -1
              , S = x.layersWithOutsidePointerEventsDisabled.size > 0
              , j = T >= z
              , R = function(e, r=null == globalThis ? void 0 : globalThis.document) {
                let t = (0,
                c.W)(e)
                  , n = (0,
                l.useRef)(!1)
                  , o = (0,
                l.useRef)(()=>{}
                );
                return (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        if (e.target && !n.current) {
                            let n = {
                                originalEvent: e
                            };
                            function l() {
                                m("dismissableLayer.pointerDownOutside", t, n, {
                                    discrete: !0
                                })
                            }
                            "touch" === e.pointerType ? (r.removeEventListener("click", o.current),
                            o.current = l,
                            r.addEventListener("click", o.current, {
                                once: !0
                            })) : l()
                        }
                        n.current = !1
                    }
                      , l = window.setTimeout(()=>{
                        r.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return ()=>{
                        window.clearTimeout(l),
                        r.removeEventListener("pointerdown", e),
                        r.removeEventListener("click", o.current)
                    }
                }
                , [r, t]),
                {
                    onPointerDownCapture: ()=>n.current = !0
                }
            }(e=>{
                let r = e.target
                  , t = [...x.branches].some(e=>e.contains(r));
                !j || t || (null == v || v(e),
                null == h || h(e),
                e.defaultPrevented || null == y || y())
            }
            , C)
              , I = function(e, r=null == globalThis ? void 0 : globalThis.document) {
                let t = (0,
                c.W)(e)
                  , n = (0,
                l.useRef)(!1);
                return (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        e.target && !n.current && m("dismissableLayer.focusOutside", t, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return r.addEventListener("focusin", e),
                    ()=>r.removeEventListener("focusin", e)
                }
                , [r, t]),
                {
                    onFocusCapture: ()=>n.current = !0,
                    onBlurCapture: ()=>n.current = !1
                }
            }(e=>{
                let r = e.target
                  , t = [...x.branches].some(e=>e.contains(r));
                t || (null == g || g(e),
                null == h || h(e),
                e.defaultPrevented || null == y || y())
            }
            , C);
            return !function(e, r=null == globalThis ? void 0 : globalThis.document) {
                let t = (0,
                c.W)(e);
                (0,
                l.useEffect)(()=>{
                    let e = e=>{
                        "Escape" === e.key && t(e)
                    }
                    ;
                    return r.addEventListener("keydown", e),
                    ()=>r.removeEventListener("keydown", e)
                }
                , [t, r])
            }(e=>{
                let r = T === x.layers.size - 1;
                r && (null == p || p(e),
                !e.defaultPrevented && y && (e.preventDefault(),
                y()))
            }
            , C),
            (0,
            l.useEffect)(()=>{
                if (E)
                    return f && (0 === x.layersWithOutsidePointerEventsDisabled.size && (n = C.body.style.pointerEvents,
                    C.body.style.pointerEvents = "none"),
                    x.layersWithOutsidePointerEventsDisabled.add(E)),
                    x.layers.add(E),
                    b(),
                    ()=>{
                        f && 1 === x.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = n)
                    }
            }
            , [E, C, f, x]),
            (0,
            l.useEffect)(()=>()=>{
                E && (x.layers.delete(E),
                x.layersWithOutsidePointerEventsDisabled.delete(E),
                b())
            }
            , [E, x]),
            (0,
            l.useEffect)(()=>{
                let e = ()=>N({});
                return document.addEventListener(u, e),
                ()=>document.removeEventListener(u, e)
            }
            , []),
            (0,
            l.createElement)(a.WV.div, (0,
            o.Z)({}, w, {
                ref: P,
                style: {
                    pointerEvents: S ? j ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                i.M)(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: (0,
                i.M)(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: (0,
                i.M)(e.onPointerDownCapture, R.onPointerDownCapture)
            }))
        }
        )
          , p = (0,
        l.forwardRef)((e,r)=>{
            let t = (0,
            l.useContext)(d)
              , n = (0,
            l.useRef)(null)
              , i = (0,
            s.e)(r, n);
            return (0,
            l.useEffect)(()=>{
                let e = n.current;
                if (e)
                    return t.branches.add(e),
                    ()=>{
                        t.branches.delete(e)
                    }
            }
            , [t.branches]),
            (0,
            l.createElement)(a.WV.div, (0,
            o.Z)({}, e, {
                ref: i
            }))
        }
        );
        function b() {
            let e = new CustomEvent(u);
            document.dispatchEvent(e)
        }
        function m(e, r, t, {discrete: n}) {
            let o = t.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: t
            });
            r && o.addEventListener(e, r, {
                once: !0
            }),
            n ? (0,
            a.jH)(o, l) : o.dispatchEvent(l)
        }
        let v = f
          , g = p
    },
    2730: function(e, r, t) {
        t.d(r, {
            h: function() {
                return a
            }
        });
        var n = t(3428)
          , o = t(2265)
          , l = t(4887)
          , i = t(9381);
        let a = (0,
        o.forwardRef)((e,r)=>{
            var t;
            let {container: a=null == globalThis ? void 0 : null === (t = globalThis.document) || void 0 === t ? void 0 : t.body, ...s} = e;
            return a ? l.createPortal((0,
            o.createElement)(i.WV.div, (0,
            n.Z)({}, s, {
                ref: r
            })), a) : null
        }
        )
    },
    5606: function(e, r, t) {
        t.d(r, {
            z: function() {
                return a
            }
        });
        var n = t(2265)
          , o = t(4887)
          , l = t(2210)
          , i = t(1030);
        let a = e=>{
            let {present: r, children: t} = e
              , a = function(e) {
                var r;
                let[t,l] = (0,
                n.useState)()
                  , a = (0,
                n.useRef)({})
                  , c = (0,
                n.useRef)(e)
                  , u = (0,
                n.useRef)("none")
                  , d = e ? "mounted" : "unmounted"
                  , [f,p] = (r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                (0,
                n.useReducer)((e,t)=>{
                    let n = r[e][t];
                    return null != n ? n : e
                }
                , d));
                return (0,
                n.useEffect)(()=>{
                    let e = s(a.current);
                    u.current = "mounted" === f ? e : "none"
                }
                , [f]),
                (0,
                i.b)(()=>{
                    let r = a.current
                      , t = c.current
                      , n = t !== e;
                    if (n) {
                        let n = u.current
                          , o = s(r);
                        e ? p("MOUNT") : "none" === o || (null == r ? void 0 : r.display) === "none" ? p("UNMOUNT") : t && n !== o ? p("ANIMATION_OUT") : p("UNMOUNT"),
                        c.current = e
                    }
                }
                , [e, p]),
                (0,
                i.b)(()=>{
                    if (t) {
                        let e = e=>{
                            let r = s(a.current)
                              , n = r.includes(e.animationName);
                            e.target === t && n && (0,
                            o.flushSync)(()=>p("ANIMATION_END"))
                        }
                          , r = e=>{
                            e.target === t && (u.current = s(a.current))
                        }
                        ;
                        return t.addEventListener("animationstart", r),
                        t.addEventListener("animationcancel", e),
                        t.addEventListener("animationend", e),
                        ()=>{
                            t.removeEventListener("animationstart", r),
                            t.removeEventListener("animationcancel", e),
                            t.removeEventListener("animationend", e)
                        }
                    }
                    p("ANIMATION_END")
                }
                , [t, p]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(f),
                    ref: (0,
                    n.useCallback)(e=>{
                        e && (a.current = getComputedStyle(e)),
                        l(e)
                    }
                    , [])
                }
            }(r)
              , c = "function" == typeof t ? t({
                present: a.isPresent
            }) : n.Children.only(t)
              , u = (0,
            l.e)(a.ref, c.ref)
              , d = "function" == typeof t;
            return d || a.isPresent ? (0,
            n.cloneElement)(c, {
                ref: u
            }) : null
        }
        ;
        function s(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        a.displayName = "Presence"
    },
    9381: function(e, r, t) {
        t.d(r, {
            WV: function() {
                return a
            },
            jH: function() {
                return s
            }
        });
        var n = t(3428)
          , o = t(2265)
          , l = t(4887)
          , i = t(7256);
        let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e,r)=>{
            let t = (0,
            o.forwardRef)((e,t)=>{
                let {asChild: l, ...a} = e
                  , s = l ? i.g7 : r;
                return (0,
                o.useEffect)(()=>{
                    window[Symbol.for("radix-ui")] = !0
                }
                , []),
                (0,
                o.createElement)(s, (0,
                n.Z)({}, a, {
                    ref: t
                }))
            }
            );
            return t.displayName = `Primitive.${r}`,
            {
                ...e,
                [r]: t
            }
        }
        , {});
        function s(e, r) {
            e && (0,
            l.flushSync)(()=>e.dispatchEvent(r))
        }
    },
    7256: function(e, r, t) {
        t.d(r, {
            g7: function() {
                return i
            }
        });
        var n = t(3428)
          , o = t(2265)
          , l = t(2210);
        let i = (0,
        o.forwardRef)((e,r)=>{
            let {children: t, ...l} = e
              , i = o.Children.toArray(t)
              , s = i.find(c);
            if (s) {
                let e = s.props.children
                  , t = i.map(r=>r !== s ? r : o.Children.count(e) > 1 ? o.Children.only(null) : (0,
                o.isValidElement)(e) ? e.props.children : null);
                return (0,
                o.createElement)(a, (0,
                n.Z)({}, l, {
                    ref: r
                }), (0,
                o.isValidElement)(e) ? (0,
                o.cloneElement)(e, void 0, t) : null)
            }
            return (0,
            o.createElement)(a, (0,
            n.Z)({}, l, {
                ref: r
            }), t)
        }
        );
        i.displayName = "Slot";
        let a = (0,
        o.forwardRef)((e,r)=>{
            let {children: t, ...n} = e;
            return (0,
            o.isValidElement)(t) ? (0,
            o.cloneElement)(t, {
                ...function(e, r) {
                    let t = {
                        ...r
                    };
                    for (let n in r) {
                        let o = e[n]
                          , l = r[n]
                          , i = /^on[A-Z]/.test(n);
                        i ? o && l ? t[n] = (...e)=>{
                            l(...e),
                            o(...e)
                        }
                        : o && (t[n] = o) : "style" === n ? t[n] = {
                            ...o,
                            ...l
                        } : "className" === n && (t[n] = [o, l].filter(Boolean).join(" "))
                    }
                    return {
                        ...e,
                        ...t
                    }
                }(n, t.props),
                ref: r ? (0,
                l.F)(r, t.ref) : t.ref
            }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
        }
        );
        a.displayName = "SlotClone";
        let s = ({children: e})=>(0,
        o.createElement)(o.Fragment, null, e);
        function c(e) {
            return (0,
            o.isValidElement)(e) && e.type === s
        }
    },
    6459: function(e, r, t) {
        t.d(r, {
            W: function() {
                return o
            }
        });
        var n = t(2265);
        function o(e) {
            let r = (0,
            n.useRef)(e);
            return (0,
            n.useEffect)(()=>{
                r.current = e
            }
            ),
            (0,
            n.useMemo)(()=>(...e)=>{
                var t;
                return null === (t = r.current) || void 0 === t ? void 0 : t.call(r, ...e)
            }
            , [])
        }
    },
    3763: function(e, r, t) {
        t.d(r, {
            T: function() {
                return l
            }
        });
        var n = t(2265)
          , o = t(6459);
        function l({prop: e, defaultProp: r, onChange: t=()=>{}
        }) {
            let[l,i] = function({defaultProp: e, onChange: r}) {
                let t = (0,
                n.useState)(e)
                  , [l] = t
                  , i = (0,
                n.useRef)(l)
                  , a = (0,
                o.W)(r);
                return (0,
                n.useEffect)(()=>{
                    i.current !== l && (a(l),
                    i.current = l)
                }
                , [l, i, a]),
                t
            }({
                defaultProp: r,
                onChange: t
            })
              , a = void 0 !== e
              , s = a ? e : l
              , c = (0,
            o.W)(t)
              , u = (0,
            n.useCallback)(r=>{
                if (a) {
                    let t = "function" == typeof r ? r(e) : r;
                    t !== e && c(t)
                } else
                    i(r)
            }
            , [a, e, i, c]);
            return [s, u]
        }
    },
    1030: function(e, r, t) {
        t.d(r, {
            b: function() {
                return o
            }
        });
        var n = t(2265);
        let o = (null == globalThis ? void 0 : globalThis.document) ? n.useLayoutEffect : ()=>{}
    },
    6061: function(e, r, t) {
        t.d(r, {
            j: function() {
                return i
            }
        });
        var n = t(7042);
        let o = e=>"boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
          , l = n.W
          , i = (e,r)=>t=>{
            var n;
            if ((null == r ? void 0 : r.variants) == null)
                return l(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
            let {variants: i, defaultVariants: a} = r
              , s = Object.keys(i).map(e=>{
                let r = null == t ? void 0 : t[e]
                  , n = null == a ? void 0 : a[e];
                if (null === r)
                    return null;
                let l = o(r) || o(n);
                return i[e][l]
            }
            )
              , c = t && Object.entries(t).reduce((e,r)=>{
                let[t,n] = r;
                return void 0 === n || (e[t] = n),
                e
            }
            , {})
              , u = null == r ? void 0 : null === (n = r.compoundVariants) || void 0 === n ? void 0 : n.reduce((e,r)=>{
                let {class: t, className: n, ...o} = r;
                return Object.entries(o).every(e=>{
                    let[r,t] = e;
                    return Array.isArray(t) ? t.includes({
                        ...a,
                        ...c
                    }[r]) : ({
                        ...a,
                        ...c
                    })[r] === t
                }
                ) ? [...e, t, n] : e
            }
            , []);
            return l(e, s, u, null == t ? void 0 : t.class, null == t ? void 0 : t.className)
        }
    },
    7042: function(e, r, t) {
        t.d(r, {
            W: function() {
                return n
            }
        });
        function n() {
            for (var e, r, t = 0, n = ""; t < arguments.length; )
                (e = arguments[t++]) && (r = function e(r) {
                    var t, n, o = "";
                    if ("string" == typeof r || "number" == typeof r)
                        o += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r))
                            for (t = 0; t < r.length; t++)
                                r[t] && (n = e(r[t])) && (o && (o += " "),
                                o += n);
                        else
                            for (t in r)
                                r[t] && (o && (o += " "),
                                o += t)
                    }
                    return o
                }(e)) && (n && (n += " "),
                n += r);
            return n
        }
    },
    3986: function(e, r, t) {
        t.d(r, {
            m: function() {
                return R
            }
        });
        var n = /^\[(.+)\]$/;
        function o(e, r) {
            var t = e;
            return r.split("-").forEach(function(e) {
                t.nextPart.has(e) || t.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                t = t.nextPart.get(e)
            }),
            t
        }
        var l = /\s+/;
        function i() {
            for (var e, r, t = 0, n = ""; t < arguments.length; )
                (e = arguments[t++]) && (r = function e(r) {
                    if ("string" == typeof r)
                        return r;
                    for (var t, n = "", o = 0; o < r.length; o++)
                        r[o] && (t = e(r[o])) && (n && (n += " "),
                        n += t);
                    return n
                }(e)) && (n && (n += " "),
                n += r);
            return n
        }
        function a(e) {
            var r = function(r) {
                return r[e] || []
            };
            return r.isThemeGetter = !0,
            r
        }
        var s = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , c = /^\d+\/\d+$/
          , u = new Set(["px", "full", "screen"])
          , d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        function b(e) {
            return w(e) || u.has(e) || c.test(e) || m(e)
        }
        function m(e) {
            return M(e, "length", O)
        }
        function v(e) {
            return M(e, "size", z)
        }
        function g(e) {
            return M(e, "position", z)
        }
        function h(e) {
            return M(e, "url", T)
        }
        function y(e) {
            return M(e, "number", w)
        }
        function w(e) {
            return !Number.isNaN(Number(e))
        }
        function x(e) {
            return e.endsWith("%") && w(e.slice(0, -1))
        }
        function E(e) {
            return S(e) || M(e, "number", S)
        }
        function k(e) {
            return s.test(e)
        }
        function C() {
            return !0
        }
        function N(e) {
            return d.test(e)
        }
        function P(e) {
            return M(e, "", j)
        }
        function M(e, r, t) {
            var n = s.exec(e);
            return !!n && (n[1] ? n[1] === r : t(n[2]))
        }
        function O(e) {
            return f.test(e)
        }
        function z() {
            return !1
        }
        function T(e) {
            return e.startsWith("url(")
        }
        function S(e) {
            return Number.isInteger(Number(e))
        }
        function j(e) {
            return p.test(e)
        }
        var R = function() {
            for (var e, r, t, a = arguments.length, s = Array(a), c = 0; c < a; c++)
                s[c] = arguments[c];
            var u = function(l) {
                var i = s[0];
                return r = (e = function(e) {
                    var r, t, l, i, a, s, c, u, d, f, p;
                    return {
                        cache: function(e) {
                            if (e < 1)
                                return {
                                    get: function() {},
                                    set: function() {}
                                };
                            var r = 0
                              , t = new Map
                              , n = new Map;
                            function o(o, l) {
                                t.set(o, l),
                                ++r > e && (r = 0,
                                n = t,
                                t = new Map)
                            }
                            return {
                                get: function(e) {
                                    var r = t.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = n.get(e)) ? (o(e, r),
                                    r) : void 0
                                },
                                set: function(e, r) {
                                    t.has(e) ? t.set(e, r) : o(e, r)
                                }
                            }
                        }(e.cacheSize),
                        splitModifiers: (t = 1 === (r = e.separator || ":").length,
                        l = r[0],
                        i = r.length,
                        function(e) {
                            for (var n, o = [], a = 0, s = 0, c = 0; c < e.length; c++) {
                                var u = e[c];
                                if (0 === a) {
                                    if (u === l && (t || e.slice(c, c + i) === r)) {
                                        o.push(e.slice(s, c)),
                                        s = c + i;
                                        continue
                                    }
                                    if ("/" === u) {
                                        n = c;
                                        continue
                                    }
                                }
                                "[" === u ? a++ : "]" === u && a--
                            }
                            var d = 0 === o.length ? e : e.substring(s)
                              , f = d.startsWith("!")
                              , p = f ? d.substring(1) : d;
                            return {
                                modifiers: o,
                                hasImportantModifier: f,
                                baseClassName: p,
                                maybePostfixModifierPosition: n && n > s ? n - s : void 0
                            }
                        }
                        ),
                        ...(u = e.theme,
                        d = e.prefix,
                        f = {
                            nextPart: new Map,
                            validators: []
                        },
                        (p = Object.entries(e.classGroups),
                        d ? p.map(function(e) {
                            return [e[0], e[1].map(function(e) {
                                return "string" == typeof e ? d + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                    return [d + e[0], e[1]]
                                })) : e
                            })]
                        }) : p).forEach(function(e) {
                            var r = e[0];
                            (function e(r, t, n, l) {
                                r.forEach(function(r) {
                                    if ("string" == typeof r) {
                                        ("" === r ? t : o(t, r)).classGroupId = n;
                                        return
                                    }
                                    if ("function" == typeof r) {
                                        if (r.isThemeGetter) {
                                            e(r(l), t, n, l);
                                            return
                                        }
                                        t.validators.push({
                                            validator: r,
                                            classGroupId: n
                                        });
                                        return
                                    }
                                    Object.entries(r).forEach(function(r) {
                                        var i = r[0];
                                        e(r[1], o(t, i), n, l)
                                    })
                                })
                            }
                            )(e[1], f, r, u)
                        }),
                        a = e.conflictingClassGroups,
                        c = void 0 === (s = e.conflictingClassGroupModifiers) ? {} : s,
                        {
                            getClassGroupId: function(e) {
                                var r = e.split("-");
                                return "" === r[0] && 1 !== r.length && r.shift(),
                                function e(r, t) {
                                    if (0 === r.length)
                                        return t.classGroupId;
                                    var n = r[0]
                                      , o = t.nextPart.get(n)
                                      , l = o ? e(r.slice(1), o) : void 0;
                                    if (l)
                                        return l;
                                    if (0 !== t.validators.length) {
                                        var i = r.join("-");
                                        return t.validators.find(function(e) {
                                            return (0,
                                            e.validator)(i)
                                        })?.classGroupId
                                    }
                                }(r, f) || function(e) {
                                    if (n.test(e)) {
                                        var r = n.exec(e)[1]
                                          , t = r?.substring(0, r.indexOf(":"));
                                        if (t)
                                            return "arbitrary.." + t
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, r) {
                                var t = a[e] || [];
                                return r && c[e] ? [].concat(t, c[e]) : t
                            }
                        })
                    }
                }(s.slice(1).reduce(function(e, r) {
                    return r(e)
                }, i()))).cache.get,
                t = e.cache.set,
                u = d,
                d(l)
            };
            function d(n) {
                var o, i, a, s, c, u = r(n);
                if (u)
                    return u;
                var d = (i = (o = e).splitModifiers,
                a = o.getClassGroupId,
                s = o.getConflictingClassGroupIds,
                c = new Set,
                n.trim().split(l).map(function(e) {
                    var r = i(e)
                      , t = r.modifiers
                      , n = r.hasImportantModifier
                      , o = r.baseClassName
                      , l = r.maybePostfixModifierPosition
                      , s = a(l ? o.substring(0, l) : o)
                      , c = !!l;
                    if (!s) {
                        if (!l || !(s = a(o)))
                            return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                        c = !1
                    }
                    var u = (function(e) {
                        if (e.length <= 1)
                            return e;
                        var r = []
                          , t = [];
                        return e.forEach(function(e) {
                            "[" === e[0] ? (r.push.apply(r, t.sort().concat([e])),
                            t = []) : t.push(e)
                        }),
                        r.push.apply(r, t.sort()),
                        r
                    }
                    )(t).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: n ? u + "!" : u,
                        classGroupId: s,
                        originalClassName: e,
                        hasPostfixModifier: c
                    }
                }).reverse().filter(function(e) {
                    if (!e.isTailwindClass)
                        return !0;
                    var r = e.modifierId
                      , t = e.classGroupId
                      , n = e.hasPostfixModifier
                      , o = r + t;
                    return !c.has(o) && (c.add(o),
                    s(t, n).forEach(function(e) {
                        return c.add(r + e)
                    }),
                    !0)
                }).reverse().map(function(e) {
                    return e.originalClassName
                }).join(" "));
                return t(n, d),
                d
            }
            return function() {
                return u(i.apply(null, arguments))
            }
        }(function() {
            var e = a("colors")
              , r = a("spacing")
              , t = a("blur")
              , n = a("brightness")
              , o = a("borderColor")
              , l = a("borderRadius")
              , i = a("borderSpacing")
              , s = a("borderWidth")
              , c = a("contrast")
              , u = a("grayscale")
              , d = a("hueRotate")
              , f = a("invert")
              , p = a("gap")
              , M = a("gradientColorStops")
              , O = a("gradientColorStopPositions")
              , z = a("inset")
              , T = a("margin")
              , S = a("opacity")
              , j = a("padding")
              , R = a("saturate")
              , I = a("scale")
              , W = a("sepia")
              , L = a("skew")
              , A = a("space")
              , D = a("translate")
              , G = function() {
                return ["auto", "contain", "none"]
            }
              , _ = function() {
                return ["auto", "hidden", "clip", "visible", "scroll"]
            }
              , $ = function() {
                return ["auto", k, r]
            }
              , U = function() {
                return [k, r]
            }
              , Z = function() {
                return ["", b]
            }
              , F = function() {
                return ["auto", w, k]
            }
              , V = function() {
                return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            }
              , B = function() {
                return ["solid", "dashed", "dotted", "double", "none"]
            }
              , q = function() {
                return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
            }
              , H = function() {
                return ["start", "end", "center", "between", "around", "evenly", "stretch"]
            }
              , X = function() {
                return ["", "0", k]
            }
              , K = function() {
                return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }
              , J = function() {
                return [w, y]
            }
              , Q = function() {
                return [w, k]
            };
            return {
                cacheSize: 500,
                theme: {
                    colors: [C],
                    spacing: [b],
                    blur: ["none", "", N, k],
                    brightness: J(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", N, k],
                    borderSpacing: U(),
                    borderWidth: Z(),
                    contrast: J(),
                    grayscale: X(),
                    hueRotate: Q(),
                    invert: X(),
                    gap: U(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [x, m],
                    inset: $(),
                    margin: $(),
                    opacity: J(),
                    padding: U(),
                    saturate: J(),
                    scale: J(),
                    sepia: X(),
                    skew: Q(),
                    space: U(),
                    translate: U()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", k]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [N]
                    }],
                    "break-after": [{
                        "break-after": K()
                    }],
                    "break-before": [{
                        "break-before": K()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [].concat(V(), [k])
                    }],
                    overflow: [{
                        overflow: _()
                    }],
                    "overflow-x": [{
                        "overflow-x": _()
                    }],
                    "overflow-y": [{
                        "overflow-y": _()
                    }],
                    overscroll: [{
                        overscroll: G()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": G()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": G()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [z]
                    }],
                    "inset-x": [{
                        "inset-x": [z]
                    }],
                    "inset-y": [{
                        "inset-y": [z]
                    }],
                    start: [{
                        start: [z]
                    }],
                    end: [{
                        end: [z]
                    }],
                    top: [{
                        top: [z]
                    }],
                    right: [{
                        right: [z]
                    }],
                    bottom: [{
                        bottom: [z]
                    }],
                    left: [{
                        left: [z]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", E]
                    }],
                    basis: [{
                        basis: $()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", k]
                    }],
                    grow: [{
                        grow: X()
                    }],
                    shrink: [{
                        shrink: X()
                    }],
                    order: [{
                        order: ["first", "last", "none", E]
                    }],
                    "grid-cols": [{
                        "grid-cols": [C]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", E]
                        }, k]
                    }],
                    "col-start": [{
                        "col-start": F()
                    }],
                    "col-end": [{
                        "col-end": F()
                    }],
                    "grid-rows": [{
                        "grid-rows": [C]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [E]
                        }, k]
                    }],
                    "row-start": [{
                        "row-start": F()
                    }],
                    "row-end": [{
                        "row-end": F()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", k]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", k]
                    }],
                    gap: [{
                        gap: [p]
                    }],
                    "gap-x": [{
                        "gap-x": [p]
                    }],
                    "gap-y": [{
                        "gap-y": [p]
                    }],
                    "justify-content": [{
                        justify: ["normal"].concat(H())
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal"].concat(H(), ["baseline"])
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [].concat(H(), ["baseline"])
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [j]
                    }],
                    px: [{
                        px: [j]
                    }],
                    py: [{
                        py: [j]
                    }],
                    ps: [{
                        ps: [j]
                    }],
                    pe: [{
                        pe: [j]
                    }],
                    pt: [{
                        pt: [j]
                    }],
                    pr: [{
                        pr: [j]
                    }],
                    pb: [{
                        pb: [j]
                    }],
                    pl: [{
                        pl: [j]
                    }],
                    m: [{
                        m: [T]
                    }],
                    mx: [{
                        mx: [T]
                    }],
                    my: [{
                        my: [T]
                    }],
                    ms: [{
                        ms: [T]
                    }],
                    me: [{
                        me: [T]
                    }],
                    mt: [{
                        mt: [T]
                    }],
                    mr: [{
                        mr: [T]
                    }],
                    mb: [{
                        mb: [T]
                    }],
                    ml: [{
                        ml: [T]
                    }],
                    "space-x": [{
                        "space-x": [A]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [A]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", k, r]
                    }],
                    "min-w": [{
                        "min-w": ["min", "max", "fit", k, b]
                    }],
                    "max-w": [{
                        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                            screen: [N]
                        }, N, k]
                    }],
                    h: [{
                        h: [k, r, "auto", "min", "max", "fit"]
                    }],
                    "min-h": [{
                        "min-h": ["min", "max", "fit", k, b]
                    }],
                    "max-h": [{
                        "max-h": [k, r, "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", N, m]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                    }],
                    "font-family": [{
                        font: [C]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", w, y]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, b]
                    }],
                    "list-image": [{
                        "list-image": ["none", k]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", k]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [S]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [S]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [].concat(B(), ["wavy"])
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", b]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", k, b]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    indent: [{
                        indent: U()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", k]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [S]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [].concat(V(), [g])
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", v]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, h]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [O]
                    }],
                    "gradient-via-pos": [{
                        via: [O]
                    }],
                    "gradient-to-pos": [{
                        to: [O]
                    }],
                    "gradient-from": [{
                        from: [M]
                    }],
                    "gradient-via": [{
                        via: [M]
                    }],
                    "gradient-to": [{
                        to: [M]
                    }],
                    rounded: [{
                        rounded: [l]
                    }],
                    "rounded-s": [{
                        "rounded-s": [l]
                    }],
                    "rounded-e": [{
                        "rounded-e": [l]
                    }],
                    "rounded-t": [{
                        "rounded-t": [l]
                    }],
                    "rounded-r": [{
                        "rounded-r": [l]
                    }],
                    "rounded-b": [{
                        "rounded-b": [l]
                    }],
                    "rounded-l": [{
                        "rounded-l": [l]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [l]
                    }],
                    "rounded-se": [{
                        "rounded-se": [l]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [l]
                    }],
                    "rounded-es": [{
                        "rounded-es": [l]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [l]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [l]
                    }],
                    "rounded-br": [{
                        "rounded-br": [l]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [l]
                    }],
                    "border-w": [{
                        border: [s]
                    }],
                    "border-w-x": [{
                        "border-x": [s]
                    }],
                    "border-w-y": [{
                        "border-y": [s]
                    }],
                    "border-w-s": [{
                        "border-s": [s]
                    }],
                    "border-w-e": [{
                        "border-e": [s]
                    }],
                    "border-w-t": [{
                        "border-t": [s]
                    }],
                    "border-w-r": [{
                        "border-r": [s]
                    }],
                    "border-w-b": [{
                        "border-b": [s]
                    }],
                    "border-w-l": [{
                        "border-l": [s]
                    }],
                    "border-opacity": [{
                        "border-opacity": [S]
                    }],
                    "border-style": [{
                        border: [].concat(B(), ["hidden"])
                    }],
                    "divide-x": [{
                        "divide-x": [s]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [s]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [S]
                    }],
                    "divide-style": [{
                        divide: B()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: [""].concat(B())
                    }],
                    "outline-offset": [{
                        "outline-offset": [k, b]
                    }],
                    "outline-w": [{
                        outline: [b]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: Z()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [S]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [b]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", N, P]
                    }],
                    "shadow-color": [{
                        shadow: [C]
                    }],
                    opacity: [{
                        opacity: [S]
                    }],
                    "mix-blend": [{
                        "mix-blend": q()
                    }],
                    "bg-blend": [{
                        "bg-blend": q()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [t]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [c]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", N, k]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [f]
                    }],
                    saturate: [{
                        saturate: [R]
                    }],
                    sepia: [{
                        sepia: [W]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [t]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [c]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [f]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [S]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [R]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [W]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [i]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [i]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [i]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
                    }],
                    duration: [{
                        duration: Q()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", k]
                    }],
                    delay: [{
                        delay: Q()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", k]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [I]
                    }],
                    "scale-x": [{
                        "scale-x": [I]
                    }],
                    "scale-y": [{
                        "scale-y": [I]
                    }],
                    rotate: [{
                        rotate: [E, k]
                    }],
                    "translate-x": [{
                        "translate-x": [D]
                    }],
                    "translate-y": [{
                        "translate-y": [D]
                    }],
                    "skew-x": [{
                        "skew-x": [L]
                    }],
                    "skew-y": [{
                        "skew-y": [L]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: ["appearance-none"],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": U()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": U()
                    }],
                    "scroll-my": [{
                        "scroll-my": U()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": U()
                    }],
                    "scroll-me": [{
                        "scroll-me": U()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": U()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": U()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": U()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": U()
                    }],
                    "scroll-p": [{
                        "scroll-p": U()
                    }],
                    "scroll-px": [{
                        "scroll-px": U()
                    }],
                    "scroll-py": [{
                        "scroll-py": U()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": U()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": U()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": U()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": U()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": U()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": U()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "pinch-zoom", "manipulation", {
                            pan: ["x", "left", "right", "y", "up", "down"]
                        }]
                    }],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", k]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [b, y]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
