"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[616], {
    6224: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(2898);
        let o = (0,
        n.Z)("Copy", [["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }], ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]])
    },
    3022: function(e, t, r) {
        r.d(t, {
            aU: function() {
                return G
            },
            x8: function() {
                return J
            },
            dk: function() {
                return B
            },
            zt: function() {
                return H
            },
            fC: function() {
                return q
            },
            Dx: function() {
                return Y
            },
            l_: function() {
                return X
            }
        });
        var n = r(3428)
          , o = r(2265)
          , a = r(4887)
          , i = r(5744)
          , s = r(2210)
          , l = r(7733)
          , u = r(6989)
          , c = r(9249)
          , d = r(2730)
          , p = r(5606)
          , f = r(9381)
          , w = r(6459)
          , v = r(3763)
          , m = r(1030);
        let E = (0,
        o.forwardRef)((e,t)=>(0,
        o.createElement)(f.WV.span, (0,
        n.Z)({}, e, {
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        })))
          , y = "ToastProvider"
          , [T,h,g] = (0,
        l.B)("Toast")
          , [x,b] = (0,
        u.b)("Toast", [g])
          , [C,R] = x(y)
          , P = e=>{
            let {__scopeToast: t, label: r="Notification", duration: n=5e3, swipeDirection: a="right", swipeThreshold: i=50, children: s} = e
              , [l,u] = (0,
            o.useState)(null)
              , [c,d] = (0,
            o.useState)(0)
              , p = (0,
            o.useRef)(!1)
              , f = (0,
            o.useRef)(!1);
            return (0,
            o.createElement)(T.Provider, {
                scope: t
            }, (0,
            o.createElement)(C, {
                scope: t,
                label: r,
                duration: n,
                swipeDirection: a,
                swipeThreshold: i,
                toastCount: c,
                viewport: l,
                onViewportChange: u,
                onToastAdd: (0,
                o.useCallback)(()=>d(e=>e + 1), []),
                onToastRemove: (0,
                o.useCallback)(()=>d(e=>e - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: f
            }, s))
        }
        ;
        P.propTypes = {
            label(e) {
                if (e.label && "string" == typeof e.label && !e.label.trim()) {
                    let e = `Invalid prop \`label\` supplied to \`${y}\`. Expected non-empty \`string\`.`;
                    return Error(e)
                }
                return null
            }
        };
        let _ = ["F8"]
          , D = "toast.viewportPause"
          , k = "toast.viewportResume"
          , M = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, hotkey: a=_, label: i="Notifications ({hotkey})", ...l} = e
              , u = R("ToastViewport", r)
              , d = h(r)
              , p = (0,
            o.useRef)(null)
              , w = (0,
            o.useRef)(null)
              , v = (0,
            o.useRef)(null)
              , m = (0,
            o.useRef)(null)
              , E = (0,
            s.e)(t, m, u.onViewportChange)
              , y = a.join("+").replace(/Key/g, "").replace(/Digit/g, "")
              , g = u.toastCount > 0;
            (0,
            o.useEffect)(()=>{
                let e = e=>{
                    var t;
                    let r = a.every(t=>e[t] || e.code === t);
                    r && (null === (t = m.current) || void 0 === t || t.focus())
                }
                ;
                return document.addEventListener("keydown", e),
                ()=>document.removeEventListener("keydown", e)
            }
            , [a]),
            (0,
            o.useEffect)(()=>{
                let e = p.current
                  , t = m.current;
                if (g && e && t) {
                    let r = ()=>{
                        if (!u.isClosePausedRef.current) {
                            let e = new CustomEvent(D);
                            t.dispatchEvent(e),
                            u.isClosePausedRef.current = !0
                        }
                    }
                      , n = ()=>{
                        if (u.isClosePausedRef.current) {
                            let e = new CustomEvent(k);
                            t.dispatchEvent(e),
                            u.isClosePausedRef.current = !1
                        }
                    }
                      , o = t=>{
                        let r = !e.contains(t.relatedTarget);
                        r && n()
                    }
                      , a = ()=>{
                        let t = e.contains(document.activeElement);
                        t || n()
                    }
                    ;
                    return e.addEventListener("focusin", r),
                    e.addEventListener("focusout", o),
                    e.addEventListener("pointermove", r),
                    e.addEventListener("pointerleave", a),
                    window.addEventListener("blur", r),
                    window.addEventListener("focus", n),
                    ()=>{
                        e.removeEventListener("focusin", r),
                        e.removeEventListener("focusout", o),
                        e.removeEventListener("pointermove", r),
                        e.removeEventListener("pointerleave", a),
                        window.removeEventListener("blur", r),
                        window.removeEventListener("focus", n)
                    }
                }
            }
            , [g, u.isClosePausedRef]);
            let x = (0,
            o.useCallback)(({tabbingDirection: e})=>{
                let t = d()
                  , r = t.map(t=>{
                    let r = t.ref.current
                      , n = [r, ...function(e) {
                        let t = []
                          , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: e=>{
                                let t = "INPUT" === e.tagName && "hidden" === e.type;
                                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        });
                        for (; r.nextNode(); )
                            t.push(r.currentNode);
                        return t
                    }(r)];
                    return "forwards" === e ? n : n.reverse()
                }
                );
                return ("forwards" === e ? r.reverse() : r).flat()
            }
            , [d]);
            return (0,
            o.useEffect)(()=>{
                let e = m.current;
                if (e) {
                    let t = t=>{
                        let r = t.altKey || t.ctrlKey || t.metaKey
                          , n = "Tab" === t.key && !r;
                        if (n) {
                            var o, a, i;
                            let r = document.activeElement
                              , n = t.shiftKey
                              , s = t.target === e;
                            if (s && n) {
                                null === (o = w.current) || void 0 === o || o.focus();
                                return
                            }
                            let l = x({
                                tabbingDirection: n ? "backwards" : "forwards"
                            })
                              , u = l.findIndex(e=>e === r);
                            z(l.slice(u + 1)) ? t.preventDefault() : n ? null === (a = w.current) || void 0 === a || a.focus() : null === (i = v.current) || void 0 === i || i.focus()
                        }
                    }
                    ;
                    return e.addEventListener("keydown", t),
                    ()=>e.removeEventListener("keydown", t)
                }
            }
            , [d, x]),
            (0,
            o.createElement)(c.I0, {
                ref: p,
                role: "region",
                "aria-label": i.replace("{hotkey}", y),
                tabIndex: -1,
                style: {
                    pointerEvents: g ? void 0 : "none"
                }
            }, g && (0,
            o.createElement)(S, {
                ref: w,
                onFocusFromOutsideViewport: ()=>{
                    let e = x({
                        tabbingDirection: "forwards"
                    });
                    z(e)
                }
            }), (0,
            o.createElement)(T.Slot, {
                scope: r
            }, (0,
            o.createElement)(f.WV.ol, (0,
            n.Z)({
                tabIndex: -1
            }, l, {
                ref: E
            }))), g && (0,
            o.createElement)(S, {
                ref: v,
                onFocusFromOutsideViewport: ()=>{
                    let e = x({
                        tabbingDirection: "backwards"
                    });
                    z(e)
                }
            }))
        }
        )
          , S = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, onFocusFromOutsideViewport: a, ...i} = e
              , s = R("ToastFocusProxy", r);
            return (0,
            o.createElement)(E, (0,
            n.Z)({
                "aria-hidden": !0,
                tabIndex: 0
            }, i, {
                ref: t,
                style: {
                    position: "fixed"
                },
                onFocus: e=>{
                    var t;
                    let r = e.relatedTarget
                      , n = !(null !== (t = s.viewport) && void 0 !== t && t.contains(r));
                    n && a()
                }
            }))
        }
        )
          , L = "Toast"
          , F = (0,
        o.forwardRef)((e,t)=>{
            let {forceMount: r, open: a, defaultOpen: s, onOpenChange: l, ...u} = e
              , [c=!0,d] = (0,
            v.T)({
                prop: a,
                defaultProp: s,
                onChange: l
            });
            return (0,
            o.createElement)(p.z, {
                present: r || c
            }, (0,
            o.createElement)(A, (0,
            n.Z)({
                open: c
            }, u, {
                ref: t,
                onClose: ()=>d(!1),
                onPause: (0,
                w.W)(e.onPause),
                onResume: (0,
                w.W)(e.onResume),
                onSwipeStart: (0,
                i.M)(e.onSwipeStart, e=>{
                    e.currentTarget.setAttribute("data-swipe", "start")
                }
                ),
                onSwipeMove: (0,
                i.M)(e.onSwipeMove, e=>{
                    let {x: t, y: r} = e.detail.delta;
                    e.currentTarget.setAttribute("data-swipe", "move"),
                    e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`),
                    e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
                }
                ),
                onSwipeCancel: (0,
                i.M)(e.onSwipeCancel, e=>{
                    e.currentTarget.setAttribute("data-swipe", "cancel"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }
                ),
                onSwipeEnd: (0,
                i.M)(e.onSwipeEnd, e=>{
                    let {x: t, y: r} = e.detail.delta;
                    e.currentTarget.setAttribute("data-swipe", "end"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                    e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                    e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`),
                    e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`),
                    d(!1)
                }
                )
            })))
        }
        )
          , [I,N] = x(L, {
            onClose() {}
        })
          , A = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, type: l="foreground", duration: u, open: d, onClose: p, onEscapeKeyDown: v, onPause: m, onResume: E, onSwipeStart: y, onSwipeMove: h, onSwipeCancel: g, onSwipeEnd: x, ...b} = e
              , C = R(L, r)
              , [P,_] = (0,
            o.useState)(null)
              , M = (0,
            s.e)(t, e=>_(e))
              , S = (0,
            o.useRef)(null)
              , F = (0,
            o.useRef)(null)
              , N = u || C.duration
              , A = (0,
            o.useRef)(0)
              , V = (0,
            o.useRef)(N)
              , W = (0,
            o.useRef)(0)
              , {onToastAdd: Z, onToastRemove: O} = C
              , $ = (0,
            w.W)(()=>{
                var e;
                let t = null == P ? void 0 : P.contains(document.activeElement);
                t && (null === (e = C.viewport) || void 0 === e || e.focus()),
                p()
            }
            )
              , z = (0,
            o.useCallback)(e=>{
                e && e !== 1 / 0 && (window.clearTimeout(W.current),
                A.current = new Date().getTime(),
                W.current = window.setTimeout($, e))
            }
            , [$]);
            (0,
            o.useEffect)(()=>{
                let e = C.viewport;
                if (e) {
                    let t = ()=>{
                        z(V.current),
                        null == E || E()
                    }
                      , r = ()=>{
                        let e = new Date().getTime() - A.current;
                        V.current = V.current - e,
                        window.clearTimeout(W.current),
                        null == m || m()
                    }
                    ;
                    return e.addEventListener(D, r),
                    e.addEventListener(k, t),
                    ()=>{
                        e.removeEventListener(D, r),
                        e.removeEventListener(k, t)
                    }
                }
            }
            , [C.viewport, N, m, E, z]),
            (0,
            o.useEffect)(()=>{
                d && !C.isClosePausedRef.current && z(N)
            }
            , [d, N, C.isClosePausedRef, z]),
            (0,
            o.useEffect)(()=>(Z(),
            ()=>O()), [Z, O]);
            let H = (0,
            o.useMemo)(()=>P ? function e(t) {
                let r = []
                  , n = Array.from(t.childNodes);
                return n.forEach(t=>{
                    if (t.nodeType === t.TEXT_NODE && t.textContent && r.push(t.textContent),
                    t.nodeType === t.ELEMENT_NODE) {
                        let n = t.ariaHidden || t.hidden || "none" === t.style.display
                          , o = "" === t.dataset.radixToastAnnounceExclude;
                        if (!n) {
                            if (o) {
                                let e = t.dataset.radixToastAnnounceAlt;
                                e && r.push(e)
                            } else
                                r.push(...e(t))
                        }
                    }
                }
                ),
                r
            }(P) : null, [P]);
            return C.viewport ? (0,
            o.createElement)(o.Fragment, null, H && (0,
            o.createElement)(K, {
                __scopeToast: r,
                role: "status",
                "aria-live": "foreground" === l ? "assertive" : "polite",
                "aria-atomic": !0
            }, H), (0,
            o.createElement)(I, {
                scope: r,
                onClose: $
            }, (0,
            a.createPortal)((0,
            o.createElement)(T.ItemSlot, {
                scope: r
            }, (0,
            o.createElement)(c.fC, {
                asChild: !0,
                onEscapeKeyDown: (0,
                i.M)(v, ()=>{
                    C.isFocusedToastEscapeKeyDownRef.current || $(),
                    C.isFocusedToastEscapeKeyDownRef.current = !1
                }
                )
            }, (0,
            o.createElement)(f.WV.li, (0,
            n.Z)({
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": d ? "open" : "closed",
                "data-swipe-direction": C.swipeDirection
            }, b, {
                ref: M,
                style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                },
                onKeyDown: (0,
                i.M)(e.onKeyDown, e=>{
                    "Escape" !== e.key || (null == v || v(e.nativeEvent),
                    e.nativeEvent.defaultPrevented || (C.isFocusedToastEscapeKeyDownRef.current = !0,
                    $()))
                }
                ),
                onPointerDown: (0,
                i.M)(e.onPointerDown, e=>{
                    0 === e.button && (S.current = {
                        x: e.clientX,
                        y: e.clientY
                    })
                }
                ),
                onPointerMove: (0,
                i.M)(e.onPointerMove, e=>{
                    if (!S.current)
                        return;
                    let t = e.clientX - S.current.x
                      , r = e.clientY - S.current.y
                      , n = !!F.current
                      , o = ["left", "right"].includes(C.swipeDirection)
                      , a = ["left", "up"].includes(C.swipeDirection) ? Math.min : Math.max
                      , i = o ? a(0, t) : 0
                      , s = o ? 0 : a(0, r)
                      , l = "touch" === e.pointerType ? 10 : 2
                      , u = {
                        x: i,
                        y: s
                    }
                      , c = {
                        originalEvent: e,
                        delta: u
                    };
                    n ? (F.current = u,
                    U("toast.swipeMove", h, c, {
                        discrete: !1
                    })) : j(u, C.swipeDirection, l) ? (F.current = u,
                    U("toast.swipeStart", y, c, {
                        discrete: !1
                    }),
                    e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (S.current = null)
                }
                ),
                onPointerUp: (0,
                i.M)(e.onPointerUp, e=>{
                    let t = F.current
                      , r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId),
                    F.current = null,
                    S.current = null,
                    t) {
                        let r = e.currentTarget
                          , n = {
                            originalEvent: e,
                            delta: t
                        };
                        j(t, C.swipeDirection, C.swipeThreshold) ? U("toast.swipeEnd", x, n, {
                            discrete: !0
                        }) : U("toast.swipeCancel", g, n, {
                            discrete: !0
                        }),
                        r.addEventListener("click", e=>e.preventDefault(), {
                            once: !0
                        })
                    }
                }
                )
            })))), C.viewport))) : null
        }
        );
        A.propTypes = {
            type(e) {
                if (e.type && !["foreground", "background"].includes(e.type)) {
                    let e = `Invalid prop \`type\` supplied to \`${L}\`. Expected \`foreground | background\`.`;
                    return Error(e)
                }
                return null
            }
        };
        let K = e=>{
            let {__scopeToast: t, children: r, ...n} = e
              , a = R(L, t)
              , [i,s] = (0,
            o.useState)(!1)
              , [l,u] = (0,
            o.useState)(!1);
            return function(e=()=>{}
            ) {
                let t = (0,
                w.W)(e);
                (0,
                m.b)(()=>{
                    let e = 0
                      , r = 0;
                    return e = window.requestAnimationFrame(()=>r = window.requestAnimationFrame(t)),
                    ()=>{
                        window.cancelAnimationFrame(e),
                        window.cancelAnimationFrame(r)
                    }
                }
                , [t])
            }(()=>s(!0)),
            (0,
            o.useEffect)(()=>{
                let e = window.setTimeout(()=>u(!0), 1e3);
                return ()=>window.clearTimeout(e)
            }
            , []),
            l ? null : (0,
            o.createElement)(d.h, {
                asChild: !0
            }, (0,
            o.createElement)(E, n, i && (0,
            o.createElement)(o.Fragment, null, a.label, " ", r)))
        }
          , V = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, ...a} = e;
            return (0,
            o.createElement)(f.WV.div, (0,
            n.Z)({}, a, {
                ref: t
            }))
        }
        )
          , W = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, ...a} = e;
            return (0,
            o.createElement)(f.WV.div, (0,
            n.Z)({}, a, {
                ref: t
            }))
        }
        )
          , Z = (0,
        o.forwardRef)((e,t)=>{
            let {altText: r, ...a} = e;
            return r ? (0,
            o.createElement)($, {
                altText: r,
                asChild: !0
            }, (0,
            o.createElement)(O, (0,
            n.Z)({}, a, {
                ref: t
            }))) : null
        }
        );
        Z.propTypes = {
            altText: e=>e.altText ? null : Error("Missing prop `altText` expected on `ToastAction`")
        };
        let O = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, ...a} = e
              , s = N("ToastClose", r);
            return (0,
            o.createElement)($, {
                asChild: !0
            }, (0,
            o.createElement)(f.WV.button, (0,
            n.Z)({
                type: "button"
            }, a, {
                ref: t,
                onClick: (0,
                i.M)(e.onClick, s.onClose)
            })))
        }
        )
          , $ = (0,
        o.forwardRef)((e,t)=>{
            let {__scopeToast: r, altText: a, ...i} = e;
            return (0,
            o.createElement)(f.WV.div, (0,
            n.Z)({
                "data-radix-toast-announce-exclude": "",
                "data-radix-toast-announce-alt": a || void 0
            }, i, {
                ref: t
            }))
        }
        );
        function U(e, t, r, {discrete: n}) {
            let o = r.originalEvent.currentTarget
              , a = new CustomEvent(e,{
                bubbles: !0,
                cancelable: !0,
                detail: r
            });
            t && o.addEventListener(e, t, {
                once: !0
            }),
            n ? (0,
            f.jH)(o, a) : o.dispatchEvent(a)
        }
        let j = (e,t,r=0)=>{
            let n = Math.abs(e.x)
              , o = Math.abs(e.y)
              , a = n > o;
            return "left" === t || "right" === t ? a && n > r : !a && o > r
        }
        ;
        function z(e) {
            let t = document.activeElement;
            return e.some(e=>e === t || (e.focus(),
            document.activeElement !== t))
        }
        let H = P
          , X = M
          , q = F
          , Y = V
          , B = W
          , G = Z
          , J = O
    }
}]);
