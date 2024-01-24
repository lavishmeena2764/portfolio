(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    4925: function(e, t, a) {
        Promise.resolve().then(a.bind(a, 4099))
    },
    4099: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return ed
            }
        });
        var s = a(7437)
          , n = a(6192)
          , i = a.n(n)
          , r = a(2265)
          , d = a(6435);
        function l(e) {
            let {children: t, ...a} = e;
            return (0,
            s.jsx)(d.f, {
                ...a,
                children: t
            })
        }
        a(8877);
        var o = a(8712)
          , c = a(6061)
          , f = a(2549)
          , m = a(6512);
        let x = o.fC
          , u = o.xz;
        o.x8;
        let h = e=>{
            let {className: t, ...a} = e;
            return (0,
            s.jsx)(o.h_, {
                className: (0,
                m.cn)(t),
                ...a
            })
        }
        ;
        h.displayName = o.h_.displayName;
        let p = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(o.aV, {
                className: (0,
                m.cn)("fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-zinc-950/80", a),
                ...n,
                ref: t
            })
        }
        );
        p.displayName = o.aV.displayName;
        let b = (0,
        c.j)("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-zinc-950", {
            variants: {
                side: {
                    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                    bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                    right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                }
            },
            defaultVariants: {
                side: "right"
            }
        })
          , g = r.forwardRef((e,t)=>{
            let {side: a="right", className: n, children: i, ...r} = e;
            return (0,
            s.jsxs)(h, {
                children: [(0,
                s.jsx)(p, {}), (0,
                s.jsxs)(o.VY, {
                    ref: t,
                    className: (0,
                    m.cn)(b({
                        side: a
                    }), n),
                    ...r,
                    children: [i, (0,
                    s.jsxs)(o.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800",
                        children: [(0,
                        s.jsx)(f.Z, {
                            className: "h-4 w-4"
                        }), (0,
                        s.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })]
            })
        }
        );
        g.displayName = o.VY.displayName;
        let z = e=>{
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                className: (0,
                m.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                ...a
            })
        }
        ;
        z.displayName = "SheetHeader";
        let j = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(o.Dx, {
                ref: t,
                className: (0,
                m.cn)("text-lg font-semibold text-zinc-950 dark:text-zinc-50", a),
                ...n
            })
        }
        );
        j.displayName = o.Dx.displayName;
        let k = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(o.dk, {
                ref: t,
                className: (0,
                m.cn)("text-sm text-zinc-500 dark:text-zinc-400", a),
                ...n
            })
        }
        );
        k.displayName = o.dk.displayName;
        var N = a(6694);
        let v = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(N.fC, {
                ref: t,
                className: (0,
                m.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", a),
                ...n
            })
        }
        );
        v.displayName = N.fC.displayName;
        let w = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(N.Ee, {
                ref: t,
                className: (0,
                m.cn)("aspect-square h-full w-full", a),
                ...n
            })
        }
        );
        w.displayName = N.Ee.displayName;
        let y = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(N.NY, {
                ref: t,
                className: (0,
                m.cn)("flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800", a),
                ...n
            })
        }
        );
        function C() {
            return (0,
            s.jsxs)(v, {
                children: [(0,
                s.jsx)(w, {
                    src: ""
                }), (0,
                s.jsx)(y, {
                    children: "SS"
                })]
            })
        }
        y.displayName = N.NY.displayName;
        var R = a(4033);
        function Z(e) {
            let {setOpen: t} = e
              , a = (0,
            R.useRouter)();
            return (0,
            s.jsxs)("div", {
                className: "flex justify-start flex-row items-center gap-2 p-3 cursor-pointer",
                onClick: ()=>{
                    t && t(!1),
                    a.push("/")
                }
                ,
                children: [(0,
                s.jsx)(C, {}), (0,
                s.jsxs)("div", {
                    className: "flex flex-col items-start",
                    children: [(0,
                    s.jsx)("h3", {
                        className: "scroll-m-20 max-md:text-base lg:text-xl font-semibold tracking-tight max-sm:tracking-tighter ",
                        children: "Shivansh Srivastava"
                    }), (0,
                    s.jsx)("p", {
                        className: " text-zinc-500 max-md:text-base tracking-tighter",
                        children: "Frontend Developer"
                    })]
                })]
            })
        }
        var _ = a(9844)
          , S = a(3133)
          , E = a(4964)
          , V = a(5166)
          , O = a(9031)
          , Y = a(2528)
          , F = a(1295)
          , D = a(7461)
          , T = a(3298)
          , U = a(6539);
        function A(e) {
            let {setOpen: t} = e
              , a = (0,
            R.usePathname)()
              , n = [{
                name: "Home",
                route: "/",
                icon: (0,
                s.jsx)(S.Z, {})
            }, {
                name: "Projects",
                route: "/projects",
                icon: (0,
                s.jsx)(E.Z, {})
            }, {
                name: "Certifications",
                route: "/certificates",
                icon: (0,
                s.jsx)(V.Z, {})
            }, {
                name: "Stack",
                route: "/stack",
                icon: (0,
                s.jsx)(O.Z, {})
            }, {
                name: "About",
                route: "/about",
                icon: (0,
                s.jsx)(Y.Z, {})
            }, {
                name: "Contact",
                route: "/contact",
                icon: (0,
                s.jsx)(F.Z, {})
            }]
              , i = [{
                name: "LinkedIn",
                icon: (0,
                s.jsx)(D.Z, {}),
                href: "https://www.linkedin.com/in/shivanshs04/"
            }, {
                name: "Github",
                icon: (0,
                s.jsx)(T.Z, {}),
                href: "https://www.github.com/shivanshS04/"
            }, {
                name: "Instagram",
                icon: (0,
                s.jsx)(U.Z, {}),
                href: "https://www.instagram.com/shivanshS04"
            }]
              , r = {
                hidden: {
                    x: -50,
                    y: -20,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    y: 0,
                    opacity: 1
                }
            };
            return (0,
            s.jsxs)(_.E.ul, {
                variants: {
                    hidden: {
                        opacity: 1,
                        scale: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: .1,
                            staggerChildren: .1
                        }
                    }
                },
                initial: "hidden",
                animate: "visible",
                children: [n.map((e,n)=>(0,
                s.jsxs)(_.E.a, {
                    variants: r,
                    onClick: ()=>void (t && t(!1)),
                    href: e.route,
                    className: "flex flex-row justify-start items-center gap-2 p-3  ".concat(e.route == a ? "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white" : "bg-zinc-300 dark:bg-zinc-900 text-zinc-500", " hover:text-black hover:dark:text-white rounded-md first:mt-10 mt-2 cursor-pointer "),
                    children: [e.icon, " ", e.name]
                }, n)), (0,
                s.jsx)("hr", {
                    className: "m-4 opacity-20"
                }), (0,
                s.jsx)(_.E.span, {
                    variants: r,
                    className: "text-lg text-zinc-500",
                    children: "Follow"
                }), i.map((e,t)=>(0,
                s.jsxs)(_.E.a, {
                    variants: r,
                    href: e.href,
                    className: "flex flex-row justify-start items-center gap-2 p-3 text-zinc-500 hover:text-black hover:dark:text-white bg-zinc-300 dark:bg-zinc-950 rounded-md first:mt-10 mt-2 cursor-pointer ",
                    children: [e.icon, " ", e.name]
                }, t))]
            })
        }
        var H = a(8004);
        function P() {
            let[e,t] = (0,
            r.useState)(!1);
            return (0,
            s.jsxs)(x, {
                open: e,
                onOpenChange: t,
                children: [(0,
                s.jsx)(u, {
                    children: (0,
                    s.jsx)(H.Z, {
                        className: "text-zinc-500 bg-zinc-300 dark:bg-zinc-800 p-1 rounded-sm",
                        size: 24
                    })
                }), (0,
                s.jsxs)(g, {
                    side: "left",
                    className: "overflow-scroll h-full ",
                    children: [(0,
                    s.jsx)(z, {
                        children: (0,
                        s.jsx)(j, {
                            children: (0,
                            s.jsx)(Z, {
                                setOpen: t
                            })
                        })
                    }), (0,
                    s.jsx)(A, {
                        setOpen: t
                    })]
                })]
            })
        }
        var I = a(4135)
          , L = a(3088)
          , W = a(5420)
          , q = a(4780)
          , B = a(7158)
          , G = a(2442)
          , J = a(6369);
        let K = q.fC
          , M = q.xz;
        q.ZA,
        q.Uv,
        q.Tr,
        q.Ee;
        let Q = r.forwardRef((e,t)=>{
            let {className: a, inset: n, children: i, ...r} = e;
            return (0,
            s.jsxs)(q.fF, {
                ref: t,
                className: (0,
                m.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800", n && "pl-8", a),
                ...r,
                children: [i, (0,
                s.jsx)(B.Z, {
                    className: "ml-auto h-4 w-4"
                })]
            })
        }
        );
        Q.displayName = q.fF.displayName;
        let X = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(q.tu, {
                ref: t,
                className: (0,
                m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", a),
                ...n
            })
        }
        );
        X.displayName = q.tu.displayName;
        let $ = r.forwardRef((e,t)=>{
            let {className: a, sideOffset: n=4, ...i} = e;
            return (0,
            s.jsx)(q.Uv, {
                children: (0,
                s.jsx)(q.VY, {
                    ref: t,
                    sideOffset: n,
                    className: (0,
                    m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", a),
                    ...i
                })
            })
        }
        );
        $.displayName = q.VY.displayName;
        let ee = r.forwardRef((e,t)=>{
            let {className: a, inset: n, ...i} = e;
            return (0,
            s.jsx)(q.ck, {
                ref: t,
                className: (0,
                m.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", n && "pl-8", a),
                ...i
            })
        }
        );
        ee.displayName = q.ck.displayName;
        let et = r.forwardRef((e,t)=>{
            let {className: a, children: n, checked: i, ...r} = e;
            return (0,
            s.jsxs)(q.oC, {
                ref: t,
                className: (0,
                m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", a),
                checked: i,
                ...r,
                children: [(0,
                s.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    s.jsx)(q.wU, {
                        children: (0,
                        s.jsx)(G.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), n]
            })
        }
        );
        et.displayName = q.oC.displayName;
        let ea = r.forwardRef((e,t)=>{
            let {className: a, children: n, ...i} = e;
            return (0,
            s.jsxs)(q.Rk, {
                ref: t,
                className: (0,
                m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", a),
                ...i,
                children: [(0,
                s.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    s.jsx)(q.wU, {
                        children: (0,
                        s.jsx)(J.Z, {
                            className: "h-2 w-2 fill-current"
                        })
                    })
                }), n]
            })
        }
        );
        ea.displayName = q.Rk.displayName;
        let es = r.forwardRef((e,t)=>{
            let {className: a, inset: n, ...i} = e;
            return (0,
            s.jsx)(q.__, {
                ref: t,
                className: (0,
                m.cn)("px-2 py-1.5 text-sm font-semibold", n && "pl-8", a),
                ...i
            })
        }
        );
        es.displayName = q.__.displayName;
        let en = r.forwardRef((e,t)=>{
            let {className: a, ...n} = e;
            return (0,
            s.jsx)(q.Z0, {
                ref: t,
                className: (0,
                m.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800", a),
                ...n
            })
        }
        );
        function ei() {
            let {setTheme: e} = (0,
            d.F)();
            return (0,
            s.jsxs)(K, {
                children: [(0,
                s.jsx)(M, {
                    asChild: !0,
                    children: (0,
                    s.jsxs)(W.z, {
                        variant: "ghost",
                        size: 24,
                        children: [(0,
                        s.jsx)(I.Z, {
                            className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        }), (0,
                        s.jsx)(L.Z, {
                            className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        }), (0,
                        s.jsx)("span", {
                            className: "sr-only",
                            children: "Toggle theme"
                        })]
                    })
                }), (0,
                s.jsxs)($, {
                    align: "end",
                    children: [(0,
                    s.jsx)(ee, {
                        onClick: ()=>e("light"),
                        children: "Light"
                    }), (0,
                    s.jsx)(ee, {
                        onClick: ()=>e("dark"),
                        children: "Dark"
                    }), (0,
                    s.jsx)(ee, {
                        onClick: ()=>e("system"),
                        children: "System"
                    })]
                })]
            })
        }
        function er() {
            return (0,
            s.jsxs)("div", {
                className: "hidden lg:block h-fit w-1/5 bg-zinc-200 dark:bg-zinc-900 flex-col p-3  ",
                children: [(0,
                s.jsx)(Z, {}), (0,
                s.jsx)(A, {}), (0,
                s.jsxs)("div", {
                    className: "flex flex-row justify-between items-center text-zinc-500 p-3 bg-zinc-100 rounded-xl mt-5 dark:bg-zinc-800",
                    children: [(0,
                    s.jsx)("p", {
                        children: "Select Theme  "
                    }), (0,
                    s.jsx)(ei, {})]
                })]
            })
        }
        function ed(e) {
            let {children: t} = e;
            return (0,
            s.jsx)("html", {
                lang: "en",
                suppressHydrationWarning: !0,
                children: (0,
                s.jsx)("body", {
                    className: i().className,
                    children: (0,
                    s.jsxs)(l, {
                        attribute: "class",
                        defaultTheme: "system",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "lg:hidden flex flex-row justify-between items-center w-screen p-2 h-20 bg-zinc-200 dark:bg-zinc-900 fixed top-0 left-0 ",
                            children: [(0,
                            s.jsx)(Z, {}), (0,
                            s.jsxs)("div", {
                                className: "flex flex-row justify-center items-center gap-2",
                                children: [(0,
                                s.jsx)(ei, {}), (0,
                                s.jsx)(P, {})]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: " mt-20 lg:mt-0 a flex h-screen w-screen flex-row gap-2 ",
                            children: [(0,
                            s.jsx)(er, {}), (0,
                            s.jsx)("div", {
                                className: "max-md:w-full lg:w-4/5",
                                children: t
                            })]
                        })]
                    })
                })
            })
        }
        en.displayName = q.Z0.displayName
    },
    5420: function(e, t, a) {
        "use strict";
        a.d(t, {
            z: function() {
                return o
            }
        });
        var s = a(7437)
          , n = a(2265)
          , i = a(7256)
          , r = a(6061)
          , d = a(6512);
        let l = (0,
        r.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", {
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
          , o = n.forwardRef((e,t)=>{
            let {className: a, variant: n, size: r, asChild: o=!1, ...c} = e
              , f = o ? i.g7 : "button";
            return (0,
            s.jsx)(f, {
                className: (0,
                d.cn)(l({
                    variant: n,
                    size: r,
                    className: a
                })),
                ref: t,
                ...c
            })
        }
        );
        o.displayName = "Button"
    },
    6512: function(e, t, a) {
        "use strict";
        a.d(t, {
            cn: function() {
                return i
            }
        });
        var s = a(7042)
          , n = a(3986);
        function i() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return (0,
            n.m)((0,
            s.W)(t))
        }
    },
    8877: function() {}
}, function(e) {
    e.O(0, [398, 678, 51, 971, 864, 744], function() {
        return e(e.s = 4925)
    }),
    _N_E = e.O()
}
]);
