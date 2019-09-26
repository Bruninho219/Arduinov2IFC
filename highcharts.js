/*
 Highcharts JS v2.1.1 (2010-12-03)

 (c) 2009-2010 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function()
{
    function oa(a, c)
  	{
        a || (a = {});
        for(var b in c) a[b] = c[b];
        return a
    }

    function pa(a, c)
	{
        return parseInt(a, c || 10)
    }

    function Ib(a)
	{
        return typeof a == "string"
    }

    function Jb(a)
	{
        return typeof a == "object"
    }

    function bc(a)
	{
        return typeof a == "number"
    }

    function yc(a, c)
	{
        for(var b = a.length; b--;)
            if(a[b] == c)
			{
                a.splice(b, 1);
                break
            }
    }

    function M(a)
	{
        return a !== Oa && a !== null
    }

    function ya(a, c, b) {
        var d, e;
        if(Ib(c))
            if(M(b)) a.setAttribute(c, b);
            else
			{
                if(a && a.getAttribute) e = a.getAttribute(c)
            }
        else if(M(c) && Jb(c))
            for(d in c) a.setAttribute(d,
                c[d]);
        return e
    }

    function mc(a)
	{
        if(!a || a.constructor != Array) a = [a];
        return a
    }

    function y()
	{
        var a = arguments,
            c, b;
        for(c = 0; c < a.length; c++)
		{
            b = a[c];
            if(M(b)) return b
        }
    }

    function Vd(a)
	{
        var c = "",
            b;
        for(b in a) c += Ad(b) + ":" + a[b] + ";";
        return c
    }

    function Ua(a, c)
	{
        if(Zc)
            if(c && c.opacity !== Oa) c.filter = "alpha(opacity=" + c.opacity * 100 + ")";
        oa(a.style, c)
    }

    function fb(a, c, b, d, e)
	{
        a = Da.createElement(a);
        c && oa(a, c);
        e && Ua(a,
		{
            padding: 0,
            border: mb,
            margin: 0
        });
        b && Ua(a, b);
        d && d.appendChild(a);
        return a
    }

    function Kb(a, c)
	{
        zc = y(a, c.animation)
    }

    function Bd()
	{
        var a =
            Pa.global.useUTC;
        Ac = a ? Date.UTC : function(c, b, d, e, f, g)
		{
            return (new Date(c, b, y(d, 1), y(e, 0), y(f, 0), y(g, 0))).getTime()
        };
        $c = a ? "getUTCMinutes" : "getMinutes";
        ad = a ? "getUTCHours" : "getHours";
        bd = a ? "getUTCDay" : "getDay";
        nc = a ? "getUTCDate" : "getDate";
        Bc = a ? "getUTCMonth" : "getMonth";
        Cc = a ? "getUTCFullYear" : "getFullYear";
        Cd = a ? "setUTCMinutes" : "setMinutes";
        Dd = a ? "setUTCHours" : "setHours";
        cd = a ? "setUTCDate" : "setDate";
        Ed = a ? "setUTCMonth" : "setMonth";
        Fd = a ? "setUTCFullYear" : "setFullYear"
    }

    function Dc(a)
	{
        Ec || (Ec = fb(Lb));
        a && Ec.appendChild(a);
        Ec.innerHTML = ""
    }

    function wb(a, c)
	{
        var b = function()
		{};
        b.prototype = new a;
        oa(b.prototype, c);
        return b
    }

    function Gd(a, c, b, d)
	{
        var e = Pa.lang;
        a = a;
        var f = isNaN(c = $a(c)) ? 2 : c;
        c = b === undefined ? e.decimalPoint : b;
        d = d === undefined ? e.thousandsSep : d;
        e = a < 0 ? "-" : "";
        b = pa(a = $a(+a || 0).toFixed(f)) + "";
        var g = (g = b.length) > 3 ? g % 3 : 0;
        return e + (g ? b.substr(0, g) + d : "") + b.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? c + $a(a - b).toFixed(f).slice(2) : "")
    }

    function Fc()
	{}

    function Hd(a, c)
	{
        function b(m, h)
		{
            function x(l, p)
			{
                this.pos = l;
                this.minor = p;
                this.isNew = true;
                p || this.addLabel()
            }

            function w(l) {
                if(l) {
                    this.options = l;
                    this.id = l.id
                }
                return this
            }

            function O() {
                var l = [],
                    p = [],
                    r;
                Qa = v = null;
                S = [];
                t(za, function(o) {
                    r = false;
                    t(["xAxis", "yAxis"], function(da) {
                        if(o.isCartesian && (da == "xAxis" && ha || da == "yAxis" && !ha) && (o.options[da] == h.index || o.options[da] === Oa && h.index === 0)) {
                            o[da] = s;
                            S.push(o);
                            r = true
                        }
                    });
                    if(!o.visible && u.ignoreHiddenSeries) r = false;
                    if(r) {
                        var V, W, F, A, ea;
                        if(!ha) {
                            V = o.options.stacking;
                            Gc = V == "percent";
                            if(V) {
                                A = o.type + y(o.options.stack, "");
                                ea = "-" + A;
                                o.stackKey =
                                    A;
                                W = l[A] || [];
                                l[A] = W;
                                F = p[ea] || [];
                                p[ea] = F
                            }
                            if(Gc) {
                                Qa = 0;
                                v = 99
                            }
                        }
                        if(o.isCartesian) {
                            t(o.data, function(da) {
                                var B = da.x,
                                    sa = da.y,
                                    R = sa < 0,
                                    X = R ? F : W;
                                R = R ? ea : A;
                                if(Qa === null) Qa = v = da[G];
                                if(ha)
                                    if(B > v) v = B;
                                    else {
                                        if(B < Qa) Qa = B
                                    }
                                else if(M(sa)) {
                                    if(V) X[B] = M(X[B]) ? X[B] + sa : sa;
                                    da = X ? X[B] : sa;
                                    if(!Gc)
                                        if(da > v) v = da;
                                        else if(da < Qa) Qa = da;
                                    if(V) {
                                        aa[R] || (aa[R] = {});
                                        aa[R][B] = {
                                            total: da,
                                            cum: da
                                        }
                                    }
                                }
                            });
                            if(/(area|column|bar)/.test(o.type) && !ha)
                                if(Qa >= 0) {
                                    Qa = 0;
                                    Id = true
                                } else if(v < 0) {
                                v = 0;
                                Jd = true
                            }
                        }
                    }
                })
            }

            function fa(l, p) {
                var r;
                Eb = p ? 1 : Ra.pow(10, Mb(Ra.log(l) / Ra.LN10));
                r = l / Eb;
                if(!p) {
                    p = [1, 2, 2.5, 5, 10];
                    if(h.allowDecimals === false)
                        if(Eb == 1) p = [1, 2, 5, 10];
                        else if(Eb <= 0.1) p = [1 / Eb]
                }
                for(var o = 0; o < p.length; o++) {
                    l = p[o];
                    if(r <= (p[o] + (p[o + 1] || p[o])) / 2) break
                }
                l *= Eb;
                return l
            }

            function I(l) {
                var p;
                p = l;
                if(M(Eb)) {
                    p = (Eb < 1 ? T(1 / Eb) : 1) * 10;
                    p = T(l * p) / p
                }
                return p
            }

            function ia() {
                var l, p, r, o, V = h.tickInterval,
                    W = h.tickPixelInterval;
                l = h.maxZoom || (ha ? ab(m.smallestInterval * 5, v - Qa) : null);
                C = L ? Ba : qa;
                if(Nb) {
                    r = m[ha ? "xAxis" : "yAxis"][h.linkedTo];
                    o = r.getExtremes();
                    H = y(o.min, o.dataMin);
                    P = y(o.max, o.dataMax)
                } else {
                    H =
                        y(wa, h.min, Qa);
                    P = y(Sa, h.max, v)
                }
                if(P - H < l) {
                    o = (l - P + H) / 2;
                    H = Ca(H - o, y(h.min, H - o), Qa);
                    P = ab(H + l, y(h.max, H + l), v)
                }
                if(!gb && !Gc && !Nb && M(H) && M(P)) {
                    l = P - H || 1;
                    if(!M(h.min) && !M(wa) && Vb && (Qa < 0 || !Id)) H -= l * Vb;
                    if(!M(h.max) && !M(Sa) && Kd && (v > 0 || !Jd)) P += l * Kd
                }
                Va = H == P ? 1 : Nb && !V && W == r.options.tickPixelInterval ? r.tickInterval : y(V, gb ? 1 : (P - H) * W / C);
                if(!J && !M(h.tickInterval)) s.tickInterval = Va = fa(Va);
                Hc = h.minorTickInterval === "auto" && Va ? Va / 5 : h.minorTickInterval;
                if(J) {
                    la = [];
                    V = Pa.global.useUTC;
                    var F = 1E3 / nb,
                        A = 6E4 / nb,
                        ea = 36E5 / nb;
                    W = 864E5 /
                        nb;
                    l = 6048E5 / nb;
                    o = 2592E6 / nb;
                    var da = 31556952E3 / nb,
                        B = [
                            ["second", F, [1, 2, 5, 10, 15, 30]],
                            ["minute", A, [1, 2, 5, 10, 15, 30]],
                            ["hour", ea, [1, 2, 3, 4, 6, 8, 12]],
                            ["day", W, [1, 2]],
                            ["week", l, [1, 2]],
                            ["month", o, [1, 2, 3, 4, 6]],
                            ["year", da, null]
                        ],
                        sa = B[6],
                        R = sa[1],
                        X = sa[2];
                    for(r = 0; r < B.length; r++) {
                        sa = B[r];
                        R = sa[1];
                        X = sa[2];
                        if(B[r + 1])
                            if(Va <= (R * X[X.length - 1] + B[r + 1][1]) / 2) break
                    }
                    if(R == da && Va < 5 * R) X = [1, 2, 5];
                    B = fa(Va / R, X);
                    X = new Date(H * nb);
                    X.setMilliseconds(0);
                    if(R >= F) X.setSeconds(R >= A ? 0 : B * Mb(X.getSeconds() / B));
                    if(R >= A) X[Cd](R >= ea ? 0 : B * Mb(X[$c]() /
                        B));
                    if(R >= ea) X[Dd](R >= W ? 0 : B * Mb(X[ad]() / B));
                    if(R >= W) X[cd](R >= o ? 1 : B * Mb(X[nc]() / B));
                    if(R >= o) {
                        X[Ed](R >= da ? 0 : B * Mb(X[Bc]() / B));
                        p = X[Cc]()
                    }
                    if(R >= da) {
                        p -= p % B;
                        X[Fd](p)
                    }
                    R == l && X[cd](X[nc]() - X[bd]() + h.startOfWeek);
                    r = 1;
                    p = X[Cc]();
                    F = X.getTime() / nb;
                    A = X[Bc]();
                    for(ea = X[nc](); F < P && r < Ba;) {
                        la.push(F);
                        if(R == da) F = Ac(p + r * B, 0) / nb;
                        else if(R == o) F = Ac(p, A + r * B) / nb;
                        else if(!V && (R == W || R == l)) F = Ac(p, A, ea + r * B * (R == W ? 1 : 7));
                        else F += R * B;
                        r++
                    }
                    la.push(F);
                    Ic = h.dateTimeLabelFormats[sa[0]]
                } else {
                    r = Mb(H / Va) * Va;
                    p = dd(P / Va) * Va;
                    la = [];
                    for(r = I(r); r <=
                        p;) {
                        la.push(r);
                        r = I(r + Va)
                    }
                }
                if(!Nb) {
                    if(gb || ha && m.hasColumn) {
                        p = (gb ? 1 : Va) * 0.5;
                        H -= p;
                        P += p
                    }
                    p = la[0];
                    r = la[la.length - 1];
                    if(h.startOnTick) H = p;
                    else H > p && la.shift();
                    if(h.endOnTick) P = r;
                    else P < r && la.pop();
                    Fb || (Fb = {
                        x: 0,
                        y: 0
                    });
                    if(!J && la.length > Fb[G]) Fb[G] = la.length
                }
            }

            function Ea() {
                var l, p;
                hb = H;
                cc = P;
                O();
                ia();
                ba = D;
                D = C / (P - H || 1);
                if(!ha)
                    for(l in aa)
                        for(p in aa[l]) aa[l][p].cum = aa[l][p].total;
                if(!s.isDirty) s.isDirty = H != hb || P != cc
            }

            function ta(l) {
                l = (new w(l)).render();
                Ob.push(l);
                return l
            }

            function Ya() {
                var l = h.title,
                    p = h.alternateGridColor,
                    r = h.lineWidth,
                    o, V, W = m.hasRendered,
                    F = W && M(hb) && !isNaN(hb);
                o = S.length && M(H) && M(P);
                C = L ? Ba : qa;
                D = C / (P - H || 1);
                ua = L ? U : ob;
                if(o || Nb) {
                    if(Hc && !gb)
                        for(o = H + (la[0] - H) % Hc; o <= P; o += Hc) {
                            Wb[o] || (Wb[o] = new x(o, true));
                            F && Wb[o].isNew && Wb[o].render(null, true);
                            Wb[o].isActive = true;
                            Wb[o].render()
                        }
                    t(la, function(A, ea) {
                        if(!Nb || A >= H && A <= P) {
                            F && pb[A].isNew && pb[A].render(ea, true);
                            pb[A].isActive = true;
                            pb[A].render(ea)
                        }
                    });
                    p && t(la, function(A, ea) {
                        if(ea % 2 === 0 && A < P) {
                            dc[A] || (dc[A] = new w);
                            dc[A].options = {
                                from: A,
                                to: la[ea + 1] !== Oa ? la[ea + 1] : P,
                                color: p
                            };
                            dc[A].render();
                            dc[A].isActive = true
                        }
                    });
                    W || t((h.plotLines || []).concat(h.plotBands || []), function(A) {
                        Ob.push((new w(A)).render())
                    })
                }
                t([pb, Wb, dc], function(A) {
                    for(var ea in A)
                        if(A[ea].isActive) A[ea].isActive = false;
                        else {
                            A[ea].destroy();
                            delete A[ea]
                        }
                });
                if(r) {
                    o = U + (Ka ? Ba : 0) + Q;
                    V = La - ob - (Ka ? qa : 0) + Q;
                    o = Y.crispLine([Wa, L ? U : o, L ? V : Z, Aa, L ? Ta - zb : o, L ? V : La - ob], r);
                    if(Fa) Fa.animate({
                        d: o
                    });
                    else Fa = Y.path(o).attr({
                        stroke: h.lineColor,
                        "stroke-width": r,
                        zIndex: 7
                    }).add()
                }
                if(s.axisTitle) {
                    o = L ? U : Z;
                    r = pa(l.style.fontSize ||
                        12);
                    o = {
                        low: o + (L ? 0 : C),
                        middle: o + C / 2,
                        high: o + (L ? C : 0)
                    } [l.align];
                    r = (L ? Z + qa : U) + (L ? 1 : -1) * (Ka ? -1 : 1) * ed + (E == 2 ? r : 0);
                    s.axisTitle[W ? "animate" : "attr"]({
                        x: L ? o : r + (Ka ? Ba : 0) + Q + (l.x || 0),
                        y: L ? r - (Ka ? qa : 0) + Q : o + (l.y || 0)
                    })
                }
                s.isDirty = false
            }

            function Ha(l) {
                for(var p = 0; p < Ob.length; p++) Ob[p].id == l && Ob[p].destroy()
            }
            var ha = h.isX,
                Ka = h.opposite,
                L = Ga ? !ha : ha,
                E = L ? Ka ? 0 : 2 : Ka ? 1 : 3,
                aa = {};
            h = va(ha ? Jc : fd, [Wd, Xd, Ld, Yd][E], h);
            var s = this,
                J = h.type == "datetime",
                Q = h.offset || 0,
                G = ha ? "x" : "y",
                C, D, ba, ua = L ? U : ob,
                ma, ra, cb, Ab, Fa, Qa, v, S, wa, Sa, P = null,
                H = null,
                hb, cc, Vb = h.minPadding,
                Kd = h.maxPadding,
                Nb = M(h.linkedTo),
                Id, Jd, Gc, Md = h.events,
                gd, Ob = [],
                Va, Hc, Eb, la, pb = {},
                Wb = {},
                dc = {},
                ec, fc, ed, Ic, gb = h.categories,
                Zd = h.labels.formatter || function() {
                    var l = this.value;
                    return Ic ? Kc(Ic, l) : Va % 1E6 === 0 ? l / 1E6 + "M" : Va % 1E3 === 0 ? l / 1E3 + "k" : !gb && l >= 1E3 ? Gd(l, 0) : l
                },
                Lc = L && h.labels.staggerLines,
                Xb = h.reversed,
                Yb = gb && h.tickmarkPlacement == "between" ? 0.5 : 0;
            x.prototype = {
                addLabel: function() {
                    var l = this.pos,
                        p = h.labels,
                        r = !(l == H && !y(h.showFirstLabel, 1) || l == P && !y(h.showLastLabel, 0)),
                        o = this.label;
                    l =
                        Zd.call({
                            isFirst: l == la[0],
                            isLast: l == la[la.length - 1],
                            dateTimeLabelFormat: Ic,
                            value: gb && gb[l] ? gb[l] : l
                        });
                    if(o === Oa) this.label = M(l) && r && p.enabled ? Y.text(l, 0, 0).attr({
                        align: p.align,
                        rotation: p.rotation
                    }).css(p.style).add(cb) : null;
                    else o && o.attr({
                        text: l
                    })
                },
                getLabelSize: function() {
                    var l = this.label;
                    return l ? (this.labelBBox = l.getBBox())[L ? "height" : "width"] : 0
                },
                render: function(l, p) {
                    var r = !this.minor,
                        o = this.label,
                        V = this.pos,
                        W = h.labels,
                        F = this.gridLine,
                        A = r ? h.gridLineWidth : h.minorGridLineWidth,
                        ea = r ? h.gridLineColor :
                        h.minorGridLineColor,
                        da = r ? h.gridLineDashStyle : h.minorGridLineDashStyle,
                        B = this.mark,
                        sa = r ? h.tickLength : h.minorTickLength,
                        R = r ? h.tickWidth : h.minorTickWidth || 0,
                        X = r ? h.tickColor : h.minorTickColor,
                        oc = r ? h.tickPosition : h.minorTickPosition;
                    r = W.step;
                    var qb = p && Mc || La,
                        Pb;
                    Pb = L ? ma(V + Yb, null, null, p) + ua : U + Q + (Ka ? (p && hd || Ta) - zb - U : 0);
                    qb = L ? qb - ob + Q - (Ka ? qa : 0) : qb - ma(V + Yb, null, null, p) - ua;
                    if(A) {
                        V = ra(V + Yb, A, p);
                        if(F === Oa) {
                            F = {
                                stroke: ea,
                                "stroke-width": A
                            };
                            if(da) F.dashstyle = da;
                            this.gridLine = F = A ? Y.path(V).attr(F).add(Ab) : null
                        }
                        F && V &&
                            F.animate({
                                d: V
                            })
                    }
                    if(R) {
                        if(oc == "inside") sa = -sa;
                        if(Ka) sa = -sa;
                        A = Y.crispLine([Wa, Pb, qb, Aa, Pb + (L ? 0 : -sa), qb + (L ? sa : 0)], R);
                        if(B) B.animate({
                            d: A
                        });
                        else this.mark = Y.path(A).attr({
                            stroke: X,
                            "stroke-width": R
                        }).add(cb)
                    }
                    if(o) {
                        Pb = Pb + W.x - (Yb && L ? Yb * D * (Xb ? -1 : 1) : 0);
                        qb = qb + W.y - (Yb && !L ? Yb * D * (Xb ? 1 : -1) : 0);
                        if(Lc) qb += l % Lc * 16;
                        if(r) o[l % r ? "hide" : "show"]();
                        o[this.isNew ? "attr" : "animate"]({
                            x: Pb,
                            y: qb
                        })
                    }
                    this.isNew = false
                },
                destroy: function() {
                    for(var l in this) this[l] && this[l].destroy && this[l].destroy()
                }
            };
            w.prototype = {
                render: function() {
                    var l =
                        this,
                        p = l.options,
                        r = p.label,
                        o = l.label,
                        V = p.width,
                        W = p.to,
                        F, A = p.from,
                        ea = p.dashStyle,
                        da = l.svgElem,
                        B = [],
                        sa, R, X = p.color;
                    R = p.zIndex;
                    var oc = p.events;
                    if(V) {
                        B = ra(p.value, V);
                        p = {
                            stroke: X,
                            "stroke-width": V
                        };
                        if(ea) p.dashstyle = ea
                    } else if(M(A) && M(W)) {
                        A = Ca(A, H);
                        W = ab(W, P);
                        F = ra(W);
                        if((B = ra(A)) && F) B.push(F[4], F[5], F[1], F[2]);
                        else B = null;
                        p = {
                            fill: X
                        }
                    } else return;
                    if(M(R)) p.zIndex = R;
                    if(da)
                        if(B) da.animate({
                            d: B
                        }, null, da.onGetPath);
                        else {
                            da.hide();
                            da.onGetPath = function() {
                                da.show()
                            }
                        }
                    else if(B && B.length) {
                        l.svgElem = da = Y.path(B).attr(p).add();
                        if(oc) {
                            ea = function(qb) {
                                da.on(qb, function(Pb) {
                                    oc[qb].apply(l, [Pb])
                                })
                            };
                            for(sa in oc) ea(sa)
                        }
                    }
                    if(r && M(r.text) && B && B.length && Ba > 0 && qa > 0) {
                        r = va({
                            align: L && F && "center",
                            x: L ? !F && 4 : 10,
                            verticalAlign: !L && F && "middle",
                            y: L ? F ? 16 : 10 : F ? 6 : -4,
                            rotation: L && !F && 90
                        }, r);
                        if(!o) l.label = o = Y.text(r.text, 0, 0).attr({
                            align: r.textAlign || r.align,
                            rotation: r.rotation,
                            zIndex: R
                        }).css(r.style).add();
                        F = [B[1], B[4], B[6] || B[1]];
                        B = [B[2], B[5], B[7] || B[2]];
                        sa = ab.apply(Ra, F);
                        R = ab.apply(Ra, B);
                        o.align(r, false, {
                            x: sa,
                            y: R,
                            width: Ca.apply(Ra, F) - sa,
                            height: Ca.apply(Ra,
                                B) - R
                        });
                        o.show()
                    } else o && o.hide();
                    return l
                },
                destroy: function() {
                    for(var l in this) {
                        this[l] && this[l].destroy && this[l].destroy();
                        delete this[l]
                    }
                    yc(Ob, this)
                }
            };
            ma = function(l, p, r, o) {
                var V = 1,
                    W = 0,
                    F = o ? ba : D;
                o = o ? hb : H;
                F || (F = D);
                if(r) {
                    V *= -1;
                    W = C
                }
                if(Xb) {
                    V *= -1;
                    W -= V * C
                }
                if(p) {
                    if(Xb) l = C - l;
                    l = l / F + o
                } else l = V * (l - o) * F + W;
                return l
            };
            ra = function(l, p, r) {
                var o, V, W;
                l = ma(l, null, null, r);
                var F = r && Mc || La,
                    A = r && hd || Ta,
                    ea;
                r = V = T(l + ua);
                o = W = T(F - l - ua);
                if(isNaN(l)) ea = true;
                else if(L) {
                    o = Z;
                    W = F - ob;
                    if(r < U || r > U + Ba) ea = true
                } else {
                    r = U;
                    V = A - zb;
                    if(o < Z || o >
                        Z + qa) ea = true
                }
                return ea ? null : Y.crispLine([Wa, r, o, Aa, V, W], p || 0)
            };
            if(Ga && ha && Xb === Oa) Xb = true;
            oa(s, {
                addPlotBand: ta,
                addPlotLine: ta,
                adjustTickAmount: function() {
                    if(Fb && !J && !gb && !Nb) {
                        var l = ec,
                            p = la.length;
                        ec = Fb[G];
                        if(p < ec) {
                            for(; la.length < ec;) la.push(I(la[la.length - 1] + Va));
                            D *= (p - 1) / (ec - 1);
                            P = la[la.length - 1]
                        }
                        if(M(l) && ec != l) s.isDirty = true
                    }
                },
                categories: gb,
                getExtremes: function() {
                    return {
                        min: H,
                        max: P,
                        dataMin: Qa,
                        dataMax: v
                    }
                },
                getPlotLinePath: ra,
                getThreshold: function(l) {
                    if(H > l) l = H;
                    else if(P < l) l = P;
                    return ma(l, 0, 1)
                },
                isXAxis: ha,
                options: h,
                plotLinesAndBands: Ob,
                getOffset: function() {
                    var l = S.length && M(H) && M(P),
                        p = 0,
                        r = 0,
                        o = h.title,
                        V = h.labels,
                        W = [-1, 1, 1, -1][E];
                    if(!cb) {
                        cb = Y.g("axis").attr({
                            zIndex: 7
                        }).add();
                        Ab = Y.g("grid").attr({
                            zIndex: 1
                        }).add()
                    }
                    fc = 0;
                    if(l || Nb) {
                        t(la, function(A) {
                            if(pb[A]) pb[A].addLabel();
                            else pb[A] = new x(A);
                            if(E === 0 || E == 2 || {
                                    1: "left",
                                    3: "right"
                                } [E] == V.align) fc = Ca(pb[A].getLabelSize(), fc)
                        });
                        if(Lc) fc += (Lc - 1) * 16
                    } else
                        for(var F in pb) {
                            pb[F].destroy();
                            delete pb[F]
                        }
                    if(o && o.text) {
                        if(!s.axisTitle) s.axisTitle = Y.text(o.text, 0, 0).attr({
                            zIndex: 7,
                            rotation: o.rotation || 0,
                            align: o.textAlign || {
                                low: "left",
                                middle: "center",
                                high: "right"
                            } [o.align]
                        }).css(o.style).add();
                        p = s.axisTitle.getBBox()[L ? "height" : "width"];
                        r = y(o.margin, L ? 5 : 10)
                    }
                    Q = W * (h.offset || Qb[E]);
                    ed = fc + (E != 2 && fc && W * h.labels[L ? "y" : "x"]) + r;
                    Qb[E] = Ca(Qb[E], ed + p + W * Q)
                },
                render: Ya,
                setCategories: function(l, p) {
                    s.categories = gb = l;
                    t(S, function(r) {
                        r.translate();
                        r.setTooltipPoints(true)
                    });
                    s.isDirty = true;
                    y(p, true) && m.redraw()
                },
                setExtremes: function(l, p, r, o) {
                    Kb(o, m);
                    r = y(r, true);
                    Ia(s, "setExtremes", {
                            min: l,
                            max: p
                        },
                        function() {
                            wa = l;
                            Sa = p;
                            r && m.redraw()
                        })
                },
                setScale: Ea,
                setTickPositions: ia,
                translate: ma,
                redraw: function() {
                    gc.resetTracker && gc.resetTracker();
                    Ya();
                    t(Ob, function(l) {
                        l.render()
                    });
                    t(S, function(l) {
                        l.isDirty = true
                    })
                },
                removePlotBand: Ha,
                removePlotLine: Ha,
                reversed: Xb,
                stacks: aa
            });
            for(gd in Md) Ma(s, gd, Md[gd]);
            Ea()
        }

        function d() {
            var m = {};
            return {
                add: function(h, x, w, O) {
                    if(!m[h]) {
                        x = Y.text(x, 0, 0).css(a.toolbar.itemStyle).align({
                            align: "right",
                            x: -zb - 20,
                            y: Z + 30
                        }).on("click", O).attr({
                            align: "right",
                            zIndex: 20
                        }).add();
                        m[h] = x
                    }
                },
                remove: function(h) {
                    Dc(m[h].element);
                    m[h] = null
                }
            }
        }

        function e(m) {
            function h() {
                var G = this.points || mc(this.point),
                    C = G[0].series.xAxis,
                    D = this.x;
                C = C && C.options.type == "datetime";
                var ba = Ib(D) || C,
                    ua, ma;
                ma = ba ? ['<span style="font-size: 10px">', C ? Kc("%A, %b %e, %Y", D) : D, "</span><br/>"] : [];
                t(G, function(ra) {
                    ua = ra.series;
                    ma.push('<span style="color:' + ua.color + '">', ra.name || ua.name, "</span>: ", !ba ? "<b>x = " + (ra.name || ra.x) + ",</b> " : "", "<b>", !ba ? "y = " : "", ra.y, "</b><br/>")
                });
                return ma.join("")
            }

            function x(G, C) {
                E = ha ?
                    G : (2 * E + G) / 3;
                aa = ha ? C : (aa + C) / 2;
                s.translate(E, aa);
                id = $a(G - E) > 1 || $a(C - aa) > 1 ? function() {
                    x(G, C)
                } : null
            }

            function w() {
                if(!ha) {
                    var G = q.hoverPoints;
                    s.hide();
                    t(ia, function(C) {
                        C.hide()
                    });
                    G && t(G, function(C) {
                        C.setState()
                    });
                    q.hoverPoints = null;
                    ha = true
                }
            }
            var O, fa = m.borderWidth,
                I = m.crosshairs,
                ia = [],
                Ea = m.style,
                ta = m.shared,
                Ya = pa(Ea.padding),
                Ha = fa + Ya,
                ha = true,
                Ka, L, E = 0,
                aa = 0;
            Ea.padding = 0;
            var s = Y.g("tooltip").attr({
                    zIndex: 8
                }).add(),
                J = Y.rect(Ha, Ha, 0, 0, m.borderRadius, fa).attr({
                    fill: m.backgroundColor,
                    "stroke-width": fa
                }).add(s).shadow(m.shadow),
                Q = Y.text("", Ya + Ha, pa(Ea.fontSize) + Ya + Ha).attr({
                    zIndex: 1
                }).css(Ea).add(s);
            s.hide();
            return {
                shared: ta,
                refresh: function(G) {
                    var C, D, ba, ua = 0,
                        ma = {},
                        ra = [];
                    ba = G.tooltipPos;
                    C = m.formatter || h;
                    ma = q.hoverPoints;
                    var cb = function(Fa) {
                        return {
                            series: Fa.series,
                            point: Fa,
                            x: Fa.category,
                            y: Fa.y,
                            percentage: Fa.percentage,
                            total: Fa.total || Fa.stackTotal
                        }
                    };
                    if(ta) {
                        ma && t(ma, function(Fa) {
                            Fa.setState()
                        });
                        q.hoverPoints = G;
                        t(G, function(Fa) {
                            Fa.setState(xb);
                            ua += Fa.plotY;
                            ra.push(cb(Fa))
                        });
                        D = G[0].plotX;
                        ua = T(ua) / G.length;
                        ma = {
                            x: G[0].category
                        };
                        ma.points = ra;
                        G = G[0]
                    } else ma = cb(G);
                    ma = C.call(ma);
                    O = G.series;
                    D = ta ? D : G.plotX;
                    ua = ta ? ua : G.plotY;
                    C = T(ba ? ba[0] : Ga ? Ba - ua : D);
                    D = T(ba ? ba[1] : Ga ? qa - D : ua);
                    ba = !G.series.isCartesian || hc(C, D);
                    if(ma === false || !ba) w();
                    else {
                        if(ha) {
                            s.show();
                            ha = false
                        }
                        Q.attr({
                            text: ma
                        });
                        ba = Q.getBBox();
                        Ka = ba.width;
                        L = ba.height;
                        J.attr({
                            width: Ka + 2 * Ya,
                            height: L + 2 * Ya,
                            stroke: m.borderColor || G.color || O.color || "#606060"
                        });
                        C = C - Ka + U - 25;
                        D = D - L + Z + 10;
                        if(C < 7) {
                            C = 7;
                            D -= 30
                        }
                        if(D < 5) D = 5;
                        else if(D + L > La) D = La - L - 5;
                        x(T(C - Ha), T(D - Ha))
                    }
                    if(I) {
                        I = mc(I);
                        D = I.length;
                        for(var Ab; D--;)
                            if(I[D] &&
                                (Ab = G.series[D ? "yAxis" : "xAxis"])) {
                                C = Ab.getPlotLinePath(G[D ? "y" : "x"], 1);
                                if(ia[D]) ia[D].attr({
                                    d: C,
                                    visibility: Bb
                                });
                                else {
                                    ba = {
                                        "stroke-width": I[D].width || 1,
                                        stroke: I[D].color || "#C0C0C0",
                                        zIndex: 2
                                    };
                                    if(I[D].dashStyle) ba.dashstyle = I[D].dashStyle;
                                    ia[D] = Y.path(C).attr(ba).add()
                                }
                            }
                    }
                },
                hide: w
            }
        }

        function f(m, h) {
            function x(E) {
                var aa;
                E = E || rb.event;
                if(!E.target) E.target = E.srcElement;
                aa = E.touches ? E.touches.item(0) : E;
                if(E.type != "mousemove" || rb.opera) {
                    for(var s = xa, J = {
                            left: s.offsetLeft,
                            top: s.offsetTop
                        }; s = s.offsetParent;) {
                        J.left +=
                            s.offsetLeft;
                        J.top += s.offsetTop;
                        if(s != Da.body && s != Da.documentElement) {
                            J.left -= s.scrollLeft;
                            J.top -= s.scrollTop
                        }
                    }
                    pc = J
                }
                if(Zc) {
                    E.chartX = E.x;
                    E.chartY = E.y
                } else if(aa.layerX === Oa) {
                    E.chartX = aa.pageX - pc.left;
                    E.chartY = aa.pageY - pc.top
                } else {
                    E.chartX = E.layerX;
                    E.chartY = E.layerY
                }
                return E
            }

            function w(E) {
                var aa = {
                    xAxis: [],
                    yAxis: []
                };
                t(Xa, function(s) {
                    var J = s.translate,
                        Q = s.isXAxis;
                    aa[Q ? "xAxis" : "yAxis"].push({
                        axis: s,
                        value: J((Ga ? !Q : Q) ? E.chartX - U : qa - E.chartY + Z, true)
                    })
                });
                return aa
            }

            function O() {
                var E = m.hoverSeries,
                    aa = m.hoverPoint;
                aa && aa.onMouseOut();
                E && E.onMouseOut();
                qc && qc.hide();
                jd = null
            }

            function fa() {
                if(ta) {
                    var E = {
                            xAxis: [],
                            yAxis: []
                        },
                        aa = ta.getBBox(),
                        s = aa.x - U,
                        J = aa.y - Z;
                    if(Ea) {
                        t(Xa, function(Q) {
                            var G = Q.translate,
                                C = Q.isXAxis,
                                D = Ga ? !C : C,
                                ba = G(D ? s : qa - J - aa.height, true);
                            G = G(D ? s + aa.width : qa - J, true);
                            E[C ? "xAxis" : "yAxis"].push({
                                axis: Q,
                                min: ab(ba, G),
                                max: Ca(ba, G)
                            })
                        });
                        Ia(m, "selection", E, kd)
                    }
                    ta = ta.destroy()
                }
                m.mouseIsDown = ld = Ea = false;
                Cb(Da, Gb ? "touchend" : "mouseup", fa)
            }
            var I, ia, Ea, ta, Ya = u.zoomType,
                Ha = /x/.test(Ya),
                ha = /y/.test(Ya),
                Ka = Ha && !Ga || ha &&
                Ga,
                L = ha && !Ga || Ha && Ga;
            Nc = function() {
                if(Oc) {
                    Oc.translate(U, Z);
                    Ga && Oc.attr({
                        width: m.plotWidth,
                        height: m.plotHeight
                    }).invert()
                } else m.trackerGroup = Oc = Y.g("tracker").attr({
                    zIndex: 9
                }).add()
            };
            Nc();
            if(h.enabled) m.tooltip = qc = e(h);
            (function() {
                var E = true;
                xa.onmousedown = function(s) {
                    s = x(s);
                    m.mouseIsDown = ld = true;
                    I = s.chartX;
                    ia = s.chartY;
                    Ma(Da, Gb ? "touchend" : "mouseup", fa)
                };
                var aa = function(s) {
                    if(!(s && s.touches && s.touches.length > 1)) {
                        s = x(s);
                        if(!Gb) s.returnValue = false;
                        var J = s.chartX,
                            Q = s.chartY,
                            G = !hc(J - U, Q - Z);
                        if(Gb && s.type ==
                            "touchstart")
                            if(ya(s.target, "isTracker")) m.runTrackerClick || s.preventDefault();
                            else !$d && !G && s.preventDefault();
                        if(G) {
                            E || O();
                            if(J < U) J = U;
                            else if(J > U + Ba) J = U + Ba;
                            if(Q < Z) Q = Z;
                            else if(Q > Z + qa) Q = Z + qa
                        }
                        if(ld && s.type != "touchstart") {
                            if(Ea = Math.sqrt(Math.pow(I - J, 2) + Math.pow(ia - Q, 2)) > 10) {
                                if(ic && (Ha || ha) && hc(I - U, ia - Z)) ta || (ta = Y.rect(U, Z, Ka ? 1 : Ba, L ? 1 : qa, 0).attr({
                                    fill: "rgba(69,114,167,0.25)",
                                    zIndex: 7
                                }).add());
                                if(ta && Ka) {
                                    J = J - I;
                                    ta.attr({
                                        width: $a(J),
                                        x: (J > 0 ? 0 : J) + I
                                    })
                                }
                                if(ta && L) {
                                    Q = Q - ia;
                                    ta.attr({
                                        height: $a(Q),
                                        y: (Q > 0 ? 0 : Q) + ia
                                    })
                                }
                            }
                        } else if(!G) {
                            var C;
                            Q = m.hoverPoint;
                            J = m.hoverSeries;
                            var D, ba, ua = Ta,
                                ma = Ga ? s.chartY : s.chartX - U;
                            if(qc && h.shared) {
                                C = [];
                                D = za.length;
                                for(ba = 0; ba < D; ba++)
                                    if(za[ba].visible && za[ba].tooltipPoints.length) {
                                        s = za[ba].tooltipPoints[ma];
                                        s._dist = $a(ma - s.plotX);
                                        ua = ab(ua, s._dist);
                                        C.push(s)
                                    } for(D = C.length; D--;) C[D]._dist > ua && C.splice(D, 1);
                                if(C.length && C[0].plotX != jd) {
                                    qc.refresh(C);
                                    jd = C[0].plotX
                                }
                            }
                            if(J && J.tracker)(s = J.tooltipPoints[ma]) && s != Q && s.onMouseOver()
                        }
                        return (E = G) || !ic
                    }
                };
                xa.onmousemove = aa;
                Ma(xa, "mouseleave", O);
                xa.ontouchstart = function(s) {
                    if(Ha ||
                        ha) xa.onmousedown(s);
                    aa(s)
                };
                xa.ontouchmove = aa;
                xa.ontouchend = function() {
                    Ea && O()
                };
                xa.onclick = function(s) {
                    var J = m.hoverPoint;
                    s = x(s);
                    s.cancelBubble = true;
                    if(!Ea)
                        if(J && ya(s.target, "isTracker")) {
                            var Q = J.plotX,
                                G = J.plotY;
                            oa(J, {
                                pageX: pc.left + U + (Ga ? Ba - G : Q),
                                pageY: pc.top + Z + (Ga ? qa - Q : G)
                            });
                            Ia(J.series, "click", oa(s, {
                                point: J
                            }));
                            J.firePointEvent("click", s)
                        } else {
                            oa(s, w(s));
                            hc(s.chartX - U, s.chartY - Z) && Ia(m, "click", s)
                        } Ea = false
                }
            })();
            Nd = setInterval(function() {
                id && id()
            }, 32);
            oa(this, {
                zoomX: Ha,
                zoomY: ha,
                resetTracker: O
            })
        }

        function g(m) {
            var h =
                m.type || u.type || u.defaultSeriesType,
                x = sb[h],
                w = q.hasRendered;
            if(w)
                if(Ga && h == "column") x = sb.bar;
                else if(!Ga && h == "bar") x = sb.column;
            h = new x;
            h.init(q, m);
            if(!w && h.inverted) Ga = true;
            if(h.isCartesian) ic = h.isCartesian;
            za.push(h);
            return h
        }

        function i() {
            u.alignTicks !== false && t(Xa, function(m) {
                m.adjustTickAmount()
            });
            Fb = null
        }

        function j(m) {
            var h = q.isDirtyLegend,
                x, w = q.isDirtyBox,
                O = za.length,
                fa = O,
                I = q.clipRect;
            for(Kb(m, q); fa--;) {
                m = za[fa];
                if(m.isDirty && m.options.stacking) {
                    x = true;
                    break
                }
            }
            if(x)
                for(fa = O; fa--;) {
                    m = za[fa];
                    if(m.options.stacking) m.isDirty =
                        true
                }
            t(za, function(ia) {
                if(ia.isDirty) {
                    ia.cleanData();
                    ia.getSegments();
                    if(ia.options.legendType == "point") h = true
                }
            });
            if(h && md.renderLegend) {
                md.renderLegend();
                q.isDirtyLegend = false
            }
            if(ic) {
                if(!Pc) {
                    Fb = null;
                    t(Xa, function(ia) {
                        ia.setScale()
                    })
                }
                i();
                rc();
                t(Xa, function(ia) {
                    if(ia.isDirty || w) {
                        ia.redraw();
                        w = true
                    }
                })
            }
            if(w) {
                nd();
                Nc();
                if(I) {
                    Qc(I);
                    I.animate({
                        width: q.plotSizeX,
                        height: q.plotSizeY
                    })
                }
            }
            t(za, function(ia) {
                ia.isDirty && ia.visible && ia.redraw()
            });
            gc && gc.resetTracker && gc.resetTracker();
            Ia(q, "redraw")
        }

        function k() {
            var m =
                a.xAxis || {},
                h = a.yAxis || {},
                x;
            m = mc(m);
            t(m, function(w, O) {
                w.index = O;
                w.isX = true
            });
            h = mc(h);
            t(h, function(w, O) {
                w.index = O
            });
            Xa = m.concat(h);
            q.xAxis = [];
            q.yAxis = [];
            Xa = jc(Xa, function(w) {
                x = new b(q, w);
                q[x.isXAxis ? "xAxis" : "yAxis"].push(x);
                return x
            });
            i()
        }

        function n(m, h) {
            kc = va(a.title, m);
            sc = va(a.subtitle, h);
            t([
                ["title", m, kc],
                ["subtitle", h, sc]
            ], function(x) {
                var w = x[0],
                    O = q[w],
                    fa = x[1];
                x = x[2];
                if(O && fa) {
                    O.destroy();
                    O = null
                }
                if(x && x.text && !O) q[w] = Y.text(x.text, 0, 0).attr({
                    align: x.align,
                    "class": "highcharts-" + w,
                    zIndex: 1
                }).css(x.style).add().align(x,
                    false, tc)
            })
        }

        function z() {
            ib = u.renderTo;
            Od = Zb + od++;
            if(Ib(ib)) ib = Da.getElementById(ib);
            ib.innerHTML = "";
            if(!ib.offsetWidth) {
                Rb = ib.cloneNode(0);
                Ua(Rb, {
                    position: lc,
                    top: "-9999px",
                    display: ""
                });
                Da.body.appendChild(Rb)
            }
            Rc = (Rb || ib).offsetWidth;
            uc = (Rb || ib).offsetHeight;
            q.chartWidth = Ta = u.width || Rc || 600;
            q.chartHeight = La = u.height || (uc > 19 ? uc : 400);
            q.container = xa = fb(Lb, {
                    className: "highcharts-container" + (u.className ? " " + u.className : ""),
                    id: Od
                }, oa({
                    position: Pd,
                    overflow: tb,
                    width: Ta + bb,
                    height: La + bb,
                    textAlign: "left"
                }, u.style),
                Rb || ib);
            q.renderer = Y = u.renderer == "SVG" ? new Sc(xa, Ta, La) : new Qd(xa, Ta, La);
            var m;
            if(/Gecko/.test(vc)) {
                m = function() {
                    Ua(xa, {
                        left: 0,
                        top: 0
                    });
                    var h = xa.getBoundingClientRect();
                    Ua(xa, {
                        left: -h.left % 1 + bb,
                        top: -h.top % 1 + bb
                    })
                };
                m();
                Ma(rb, "resize", m);
                Ma(q, "destroy", function() {
                    Cb(rb, "resize", m)
                })
            }
        }

        function K() {
            function m() {
                var x = u.width || ib.offsetWidth,
                    w = u.height || ib.offsetHeight;
                if(x && w) {
                    if(x != Rc || w != uc) {
                        clearTimeout(h);
                        h = setTimeout(function() {
                            pd(x, w, false)
                        }, 100)
                    }
                    Rc = x;
                    uc = w
                }
            }
            var h;
            Ma(window, "resize", m);
            Ma(q, "destroy",
                function() {
                    Cb(window, "resize", m)
                })
        }

        function ja() {
            var m = a.labels,
                h = a.credits,
                x;
            n();
            md = q.legend = new ae(q);
            rc();
            t(Xa, function(w) {
                w.setTickPositions(true)
            });
            i();
            rc();
            nd();
            ic && t(Xa, function(w) {
                w.render()
            });
            if(!q.seriesGroup) q.seriesGroup = Y.g("series-group").attr({
                zIndex: 3
            }).add();
            t(za, function(w) {
                w.translate();
                w.setTooltipPoints();
                w.render()
            });
            m.items && t(m.items, function() {
                var w = oa(m.style, this.style),
                    O = pa(w.left) + U,
                    fa = pa(w.top) + Z + 12;
                delete w.left;
                delete w.top;
                Y.text(this.html, O, fa).attr({
                    zIndex: 2
                }).css(w).add()
            });
            if(!q.toolbar) q.toolbar = d(q);
            if(h.enabled && !q.credits) {
                x = h.href;
                Y.text(h.text, 0, 0).on("click", function() {
                    if(x) location.href = x
                }).attr({
                    align: h.position.align,
                    zIndex: 8
                }).css(h.style).add().align(h.position)
            }
            Nc();
            q.hasRendered = true;
            if(Rb) {
                ib.appendChild(xa);
                Dc(Rb)
            }
        }

        function $() {
            var m = za.length,
                h = xa.parentNode;
            Ia(q, "destroy");
            Cb(rb, "unload", $);
            Cb(q);
            for(t(Xa, function(x) {
                    Cb(x)
                }); m--;) za[m].destroy();
            xa.innerHTML = "";
            Cb(xa);
            h && h.removeChild(xa);
            xa = null;
            Y.alignedObjects = null;
            clearInterval(Nd);
            for(m in q) delete q[m]
        }

        function ga() {
            if(!Tc && Da.readyState != "complete") Da.attachEvent("onreadystatechange", function() {
                Da.detachEvent("onreadystatechange", ga);
                ga()
            });
            else {
                z();
                qd();
                rd();
                t(a.series || [], function(m) {
                    g(m)
                });
                q.inverted = Ga = y(Ga, a.chart.inverted);
                k();
                q.render = ja;
                q.tracker = gc = new f(q, a.tooltip);
                ja();
                Ia(q, "load");
                c && c.apply(q, [q]);
                t(q.callbacks, function(m) {
                    m.apply(q, [q])
                })
            }
        }
        Jc = va(Jc, Pa.xAxis);
        fd = va(fd, Pa.yAxis);
        Pa.xAxis = Pa.yAxis = null;
        a = va(Pa, a);
        var u = a.chart,
            N = u.margin;
        N = Jb(N) ? N : [N, N, N, N];
        var ka = y(u.marginTop, N[0]),
            Na = y(u.marginRight, N[1]),
            ca = y(u.marginBottom, N[2]),
            na = y(u.marginLeft, N[3]),
            Za = u.spacingTop,
            jb = u.spacingRight,
            sd = u.spacingBottom,
            Uc = u.spacingLeft,
            tc, kc, sc, Z, zb, ob, U, Qb, ib, Rb, xa, Od, Rc, uc, Ta, La, hd, Mc, td, ud, vd, wd, q = this,
            $d = (N = u.events) && !!N.click,
            xd, hc, qc, ld, $b, Rd, yd, qa, Ba, gc, Oc, Nc, md, Sb, Tb, pc, ic = u.showAxes,
            Pc = 0,
            Xa = [],
            Fb, za = [],
            Ga, Y, id, Nd, jd, nd, rc, qd, rd, pd, kd, Sd, ae = function(m) {
                function h(v, S) {
                    var wa = v.legendItem,
                        Sa = v.legendLine,
                        P = v.legendSymbol,
                        H = L.color,
                        hb = S ? I.itemStyle.color : H;
                    H = S ? v.color : H;
                    wa && wa.css({
                        fill: hb
                    });
                    Sa && Sa.attr({
                        stroke: H
                    });
                    P && P.attr({
                        stroke: H,
                        fill: H
                    })
                }

                function x(v, S, wa) {
                    var Sa = v.legendItem,
                        P = v.legendLine,
                        H = v.legendSymbol;
                    v = v.checkbox;
                    Sa && Sa.attr({
                        x: S,
                        y: wa
                    });
                    P && P.translate(S, wa - 4);
                    H && H.attr({
                        x: S + H.xOff,
                        y: wa + H.yOff
                    });
                    if(v) {
                        v.x = S;
                        v.y = wa
                    }
                }

                function w() {
                    t(Ya, function(v) {
                        var S = v.checkbox;
                        S && Ua(S, {
                            left: ra.attr("translateX") + v.legendItemWidth + S.x - 40 + bb,
                            top: ra.attr("translateY") + S.y - 11 + bb
                        })
                    })
                }

                function O(v) {
                    var S, wa, Sa, P, H, hb = v.legendItem;
                    P = v.series || v;
                    if(!hb) {
                        H = /^(bar|pie|area|column)$/.test(P.type);
                        v.legendItem =
                            hb = Y.text(I.labelFormatter.call(v), 0, 0).css(v.visible ? ha : L).on("mouseover", function() {
                                v.setState(xb);
                                hb.css(Ka)
                            }).on("mouseout", function() {
                                hb.css(v.visible ? ha : L);
                                v.setState()
                            }).on("click", function() {
                                var Vb = function() {
                                    v.setVisible()
                                };
                                v.firePointEvent ? v.firePointEvent("legendItemClick", null, Vb) : Ia(v, "legendItemClick", null, Vb)
                            }).attr({
                                zIndex: 2
                            }).add(ra);
                        if(!H && v.options && v.options.lineWidth) {
                            var cc = v.options;
                            P = {
                                "stroke-width": cc.lineWidth,
                                zIndex: 2
                            };
                            if(cc.dashStyle) P.dashstyle = cc.dashStyle;
                            v.legendLine =
                                Y.path([Wa, -Ea - ta, 0, Aa, -ta, 0]).attr(P).add(ra)
                        }
                        if(H) S = Y.rect(wa = -Ea - ta, Sa = -11, Ea, 12, 2).attr({
                            "stroke-width": 0,
                            zIndex: 3
                        }).add(ra);
                        else if(v.options && v.options.marker && v.options.marker.enabled) S = Y.symbol(v.symbol, wa = -Ea / 2 - ta, Sa = -4, v.options.marker.radius).attr(v.pointAttr[db]).attr({
                            zIndex: 3
                        }).add(ra);
                        if(S) {
                            S.xOff = wa;
                            S.yOff = Sa
                        }
                        v.legendSymbol = S;
                        h(v, v.visible);
                        if(v.options && v.options.showCheckbox) {
                            v.checkbox = fb("input", {
                                    type: "checkbox",
                                    checked: v.selected,
                                    defaultChecked: v.selected
                                }, I.itemCheckboxStyle,
                                xa);
                            Ma(v.checkbox, "click", function(Vb) {
                                Ia(v, "checkboxClick", {
                                    checked: Vb.target.checked
                                }, function() {
                                    v.select()
                                })
                            })
                        }
                    }
                    x(v, Q, G);
                    S = hb.getBBox();
                    C = G;
                    D = S.height;
                    v.legendItemWidth = S = I.itemWidth || Ea + ta + S.width + aa;
                    if(ia) {
                        Q += S;
                        cb = Ab || Ca(Q - J, cb);
                        if(Q - J + S > (Ab || Ta - 2 * E - J)) {
                            Q = J;
                            G += D
                        }
                    } else {
                        G += D;
                        cb = Ab || Ca(S, cb)
                    }
                    Ya.push(v)
                }

                function fa() {
                    Q = J;
                    G = s;
                    C = cb = 0;
                    Ya = [];
                    ra || (ra = Y.g("legend").attr({
                        zIndex: 7
                    }).add());
                    Qa && Fa.reverse();
                    t(Fa, function(Sa) {
                        if(Sa.options.showInLegend) t(Sa.options.legendType == "point" ? Sa.data : [Sa], O)
                    });
                    Qa &&
                        Fa.reverse();
                    Sb = Ab || cb;
                    Tb = C - s + D;
                    if(ua || ma) {
                        Sb += 2 * E;
                        Tb += 2 * E;
                        if(ba) Sb > 0 && Tb > 0 && ba.animate({
                            width: Sb,
                            height: Tb
                        });
                        else ba = Y.rect(0, 0, Sb, Tb, I.borderRadius, ua || 0).attr({
                            stroke: I.borderColor,
                            "stroke-width": ua || 0,
                            fill: ma || mb
                        }).add(ra).shadow(I.shadow);
                        ba[Ya.length ? "show" : "hide"]()
                    }
                    for(var v = ["left", "right", "top", "bottom"], S, wa = 4; wa--;) {
                        S = v[wa];
                        if(Ha[S] && Ha[S] != "auto") {
                            I[wa < 2 ? "align" : "verticalAlign"] = S;
                            I[wa < 2 ? "x" : "y"] = pa(Ha[S]) * (wa % 2 ? -1 : 1)
                        }
                    }
                    ra.align(oa(I, {
                        width: Sb,
                        height: Tb
                    }), true, tc);
                    Pc || w()
                }
                var I = m.options.legend;
                if(I.enabled) {
                    var ia = I.layout == "horizontal",
                        Ea = I.symbolWidth,
                        ta = I.symbolPadding,
                        Ya, Ha = I.style,
                        ha = I.itemStyle,
                        Ka = I.itemHoverStyle,
                        L = I.itemHiddenStyle,
                        E = pa(Ha.padding),
                        aa = 20,
                        s = 18,
                        J = 4 + E + Ea + ta,
                        Q, G, C, D = 0,
                        ba, ua = I.borderWidth,
                        ma = I.backgroundColor,
                        ra, cb, Ab = I.width,
                        Fa = m.series,
                        Qa = I.reversed;
                    fa();
                    Ma(m, "endResize", w);
                    return {
                        colorizeItem: h,
                        destroyItem: function(v) {
                            var S = v.checkbox;
                            t(["legendItem", "legendLine", "legendSymbol"], function(wa) {
                                v[wa] && v[wa].destroy()
                            });
                            S && Dc(v.checkbox)
                        },
                        renderLegend: fa
                    }
                }
            };
        hc = function(m,
            h) {
            return m >= 0 && m <= Ba && h >= 0 && h <= qa
        };
        Sd = function() {
            Ia(q, "selection", {
                resetSelection: true
            }, kd);
            q.toolbar.remove("zoom")
        };
        kd = function(m) {
            var h = Pa.lang,
                x = q.pointCount < 100;
            q.toolbar.add("zoom", h.resetZoom, h.resetZoomTitle, Sd);
            !m || m.resetSelection ? t(Xa, function(w) {
                w.setExtremes(null, null, false, x)
            }) : t(m.xAxis.concat(m.yAxis), function(w) {
                var O = w.axis;
                if(q.tracker[O.isXAxis ? "zoomX" : "zoomY"]) O.setExtremes(w.min, w.max, false, x)
            });
            j()
        };
        rc = function() {
            var m = a.legend,
                h = y(m.margin, 10),
                x = m.x,
                w = m.y,
                O = m.align,
                fa = m.verticalAlign,
                I;
            qd();
            if((q.title || q.subtitle) && !M(ka))
                if(I = Ca(q.title && !kc.floating && !kc.verticalAlign && kc.y || 0, q.subtitle && !sc.floating && !sc.verticalAlign && sc.y || 0)) Z = Ca(Z, I + y(kc.margin, 15) + Za);
            if(m.enabled && !m.floating)
                if(O == "right") M(Na) || (zb = Ca(zb, Sb - x + h + jb));
                else if(O == "left") M(na) || (U = Ca(U, Sb + x + h + Uc));
            else if(fa == "top") M(ka) || (Z = Ca(Z, Tb + w + h + Za));
            else if(fa == "bottom") M(ca) || (ob = Ca(ob, Tb - w + h + sd));
            ic && t(Xa, function(ia) {
                ia.getOffset()
            });
            M(na) || (U += Qb[3]);
            M(ka) || (Z += Qb[0]);
            M(ca) || (ob += Qb[2]);
            M(Na) || (zb += Qb[1]);
            rd()
        };
        pd = function(m, h, x) {
            var w = q.title,
                O = q.subtitle;
            Pc += 1;
            Kb(x, q);
            Mc = La;
            hd = Ta;
            Ta = T(m);
            La = T(h);
            Ua(xa, {
                width: Ta + bb,
                height: La + bb
            });
            Y.setSize(Ta, La);
            Ba = Ta - U - zb;
            qa = La - Z - ob;
            Fb = null;
            t(Xa, function(fa) {
                fa.isDirty = true;
                fa.setScale()
            });
            t(za, function(fa) {
                fa.isDirty = true
            });
            q.isDirtyLegend = true;
            q.isDirtyBox = true;
            rc();
            w && w.align(null, null, tc);
            O && O.align(null, null, tc);
            j();
            Mc = null;
            Ia(q, "resize");
            setTimeout(function() {
                Ia(q, "endResize", null, function() {
                    Pc -= 1
                })
            }, zc && zc.duration || 500)
        };
        rd = function() {
            q.plotLeft = U = T(U);
            q.plotTop = Z = T(Z);
            q.plotWidth = Ba = T(Ta - U - zb);
            q.plotHeight = qa = T(La - Z - ob);
            q.plotSizeX = Ga ? qa : Ba;
            q.plotSizeY = Ga ? Ba : qa;
            tc = {
                x: Uc,
                y: Za,
                width: Ta - Uc - jb,
                height: La - Za - sd
            }
        };
        qd = function() {
            Z = y(ka, Za);
            zb = y(Na, jb);
            ob = y(ca, sd);
            U = y(na, Uc);
            Qb = [0, 0, 0, 0]
        };
        nd = function() {
            var m = u.borderWidth || 0,
                h = u.backgroundColor,
                x = u.plotBackgroundColor,
                w = u.plotBackgroundImage,
                O, fa = {
                    x: U,
                    y: Z,
                    width: Ba,
                    height: qa
                };
            O = 2 * m + (u.shadow ? 8 : 0);
            if(m || h)
                if(td) td.animate({
                    width: Ta - O,
                    height: La - O
                });
                else td = Y.rect(O / 2, O / 2, Ta - O, La - O, u.borderRadius, m).attr({
                    stroke: u.borderColor,
                    "stroke-width": m,
                    fill: h || mb
                }).add().shadow(u.shadow);
            if(x)
                if(ud) ud.animate(fa);
                else ud = Y.rect(U, Z, Ba, qa, 0).attr({
                    fill: x
                }).add().shadow(u.plotShadow);
            if(w)
                if(vd) vd.animate(fa);
                else vd = Y.image(w, U, Z, Ba, qa).add();
            if(u.plotBorderWidth)
                if(wd) wd.animate(fa);
                else wd = Y.rect(U, Z, Ba, qa, 0, u.plotBorderWidth).attr({
                    stroke: u.plotBorderColor,
                    "stroke-width": u.plotBorderWidth,
                    zIndex: 4
                }).add();
            q.isDirtyBox = false
        };
        Vc = Hb = 0;
        Ma(rb, "unload", $);
        u.reflow !== false && Ma(q, "load", K);
        if(N)
            for(xd in N) Ma(q, xd, N[xd]);
        q.options = a;
        q.series = za;
        q.addSeries = function(m, h, x) {
            var w;
            if(m) {
                Kb(x, q);
                h = y(h, true);
                Ia(q, "addSeries", {
                    options: m
                }, function() {
                    w = g(m);
                    w.isDirty = true;
                    q.isDirtyLegend = true;
                    h && q.redraw()
                })
            }
            return w
        };
        q.animation = y(u.animation, true);
        q.destroy = $;
        q.get = function(m) {
            var h, x, w;
            for(h = 0; h < Xa.length; h++)
                if(Xa[h].options.id == m) return Xa[h];
            for(h = 0; h < za.length; h++)
                if(za[h].options.id == m) return za[h];
            for(h = 0; h < za.length; h++) {
                w = za[h].data;
                for(x = 0; x < w.length; x++)
                    if(w[x].id == m) return w[x]
            }
            return null
        };
        q.getSelectedPoints = function() {
            var m = [];
            t(za, function(h) {
                m = m.concat(zd(h.data, function(x) {
                    return x.selected
                }))
            });
            return m
        };
        q.getSelectedSeries = function() {
            return zd(za, function(m) {
                return m.selected
            })
        };
        q.hideLoading = function() {
            Wc($b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration,
                complete: function() {
                    Ua($b, {
                        display: mb
                    })
                }
            });
            yd = false
        };
        q.isInsidePlot = hc;
        q.redraw = j;
        q.setSize = pd;
        q.setTitle = n;
        q.showLoading = function(m) {
            var h = a.loading;
            if(!$b) {
                $b = fb(Lb, {
                    className: "highcharts-loading"
                }, oa(h.style, {
                    left: U + bb,
                    top: Z + bb,
                    width: Ba + bb,
                    height: qa + bb,
                    zIndex: 10,
                    display: mb
                }), xa);
                Rd = fb("span", null, h.labelStyle, $b)
            }
            Rd.innerHTML = m || a.lang.loading;
            if(!yd) {
                Ua($b, {
                    opacity: 0,
                    display: ""
                });
                Wc($b, {
                    opacity: h.style.opacity
                }, {
                    duration: h.showDuration
                });
                yd = true
            }
        };
        q.pointCount = 0;
        ga()
    }
    var Da = document,
        rb = window,
        Ra = Math,
        T = Ra.round,
        Mb = Ra.floor,
        dd = Ra.ceil,
        Ca = Ra.max,
        ab = Ra.min,
        $a = Ra.abs,
        ub = Ra.cos,
        yb = Ra.sin,
        Ub = Ra.PI,
        Td = Ub * 2 / 360,
        vc = navigator.userAgent,
        Zc = /msie/i.test(vc) && !rb.opera,
        wc = Da.documentMode == 8,
        be = /AppleWebKit/.test(vc),
        Tc = rb.SVGAngle || Da.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
            "1.1"),
        Gb = "ontouchstart" in Da.documentElement,
        Hb, Vc, ce = {},
        od = 0,
        nb = 1,
        Ec, Pa, Kc, zc, Xc, Oa, Lb = "div",
        lc = "absolute",
        Pd = "relative",
        tb = "hidden",
        Zb = "highcharts-",
        Bb = "visible",
        bb = "px",
        mb = "none",
        Wa = "M",
        Aa = "L",
        Ud = "rgba(192,192,192," + (Tc ? 1.0E-6 : 0.0020) + ")",
        db = "",
        xb = "hover",
        Ac, $c, ad, bd, nc, Bc, Cc, Cd, Dd, cd, Ed, Fd, eb = rb.HighchartsAdapter,
        Db = eb || {},
        t = Db.each,
        zd = Db.grep,
        jc = Db.map,
        va = Db.merge,
        Ad = Db.hyphenate,
        Ma = Db.addEvent,
        Cb = Db.removeEvent,
        Ia = Db.fireEvent,
        Wc = Db.animate,
        Qc = Db.stop,
        sb = {};
    eb && eb.init && eb.init();
    if(!eb && rb.jQuery) {
        var kb =
            jQuery;
        t = function(a, c) {
            for(var b = 0, d = a.length; b < d; b++)
                if(c.call(a[b], a[b], b, a) === false) return b
        };
        zd = kb.grep;
        jc = function(a, c) {
            for(var b = [], d = 0, e = a.length; d < e; d++) b[d] = c.call(a[d], a[d], d, a);
            return b
        };
        va = function() {
            var a = arguments;
            return kb.extend(true, null, a[0], a[1], a[2], a[3])
        };
        Ad = function(a) {
            return a.replace(/([A-Z])/g, function(c, b) {
                return "-" + b.toLowerCase()
            })
        };
        Ma = function(a, c, b) {
            kb(a).bind(c, b)
        };
        Cb = function(a, c, b) {
            var d = Da.removeEventListener ? "removeEventListener" : "detachEvent";
            if(Da[d] && !a[d]) a[d] =
                function() {};
            kb(a).unbind(c, b)
        };
        Ia = function(a, c, b, d) {
            var e = kb.Event(c),
                f = "detached" + c;
            oa(e, b);
            if(a[c]) {
                a[f] = a[c];
                a[c] = null
            }
            kb(a).trigger(e);
            if(a[f]) {
                a[c] = a[f];
                a[f] = null
            }
            d && !e.isDefaultPrevented() && d(e)
        };
        Wc = function(a, c, b) {
            var d = kb(a);
            if(c.d) {
                a.toD = c.d;
                c.d = 1
            }
            d.stop();
            d.animate(c, b)
        };
        Qc = function(a) {
            kb(a).stop()
        };
        kb.extend(kb.easing, {
            easeOutQuad: function(a, c, b, d, e) {
                return -d * (c /= e) * (c - 2) + b
            }
        });
        var de = jQuery.fx.step._default,
            ee = jQuery.fx.prototype.cur;
        kb.fx.step._default = function(a) {
            var c = a.elem;
            c.attr ?
                c.attr(a.prop, a.now) : de.apply(this, arguments)
        };
        kb.fx.step.d = function(a) {
            var c = a.elem;
            if(!a.started) {
                var b = Xc.init(c, c.d, c.toD);
                a.start = b[0];
                a.end = b[1];
                a.started = true
            }
            c.attr("d", Xc.step(a.start, a.end, a.pos, c.toD))
        };
        kb.fx.prototype.cur = function() {
            var a = this.elem;
            return a.attr ? a.attr(this.prop) : ee.apply(this, arguments)
        }
    }
    Xc = {
        init: function(a, c, b) {
            c = c || "";
            var d = a.shift,
                e = c.indexOf("C") > -1,
                f = e ? 7 : 3,
                g;
            c = c.split(" ");
            b = [].concat(b);
            var i, j, k = function(n) {
                for(g = n.length; g--;) n[g] == Wa && n.splice(g + 1, 0, n[g + 1], n[g +
                    2], n[g + 1], n[g + 2])
            };
            if(e) {
                k(c);
                k(b)
            }
            if(a.isArea) {
                i = c.splice(c.length - 6, 6);
                j = b.splice(b.length - 6, 6)
            }
            if(d) {
                b = [].concat(b).splice(0, f).concat(b);
                a.shift = false
            }
            for(a = b.length; c.length < a;) {
                d = [].concat(c).splice(c.length - f, f);
                if(e) {
                    d[f - 6] = d[f - 2];
                    d[f - 5] = d[f - 1]
                }
                c = c.concat(d)
            }
            if(i) {
                c = c.concat(i);
                b = b.concat(j)
            }
            return [c, b]
        },
        step: function(a, c, b, d) {
            var e = [],
                f = a.length;
            if(b == 1) e = d;
            else if(f == c.length && b < 1)
                for(; f--;) {
                    d = parseFloat(a[f]);
                    e[f] = isNaN(d) ? a[f] : b * parseFloat(c[f] - d) + d
                } else e = c;
            return e
        }
    };
    eb = {
        enabled: true,
        align: "center",
        x: 0,
        y: 15,
        style: {
            color: "#666",
            fontSize: "11px"
        }
    };
    Pa = {
        colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: true
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: true,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0"
        },
        title: {
            text: "IFC-CAS",
            align: "center",
            y: 15,
            style: {
                color: "#3E576F",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            y: 30,
            style: {
                color: "#6D869F"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: false,
                showCheckbox: false,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                shadow: true,
                marker: {
                    enabled: true,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {},
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: va(eb, {
                    enabled: false,
                    y: -6,
                    formatter: function() {
                        return this.y
                    }
                }),
                showInLegend: true,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: true
            }
        },
        labels: {
            style: {
                position: lc,
                color: "#3E576F"
            }
        },
        legend: {
            enabled: true,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            shadow: false,
            style: {
                padding: "5px"
            },
            itemStyle: {
                cursor: "pointer",
                color: "#3E576F"
            },
            itemHoverStyle: {
                cursor: "pointer",
                color: "#000000"
            },
            itemHiddenStyle: {
                color: "#C0C0C0"
            },
            itemCheckboxStyle: {
                position: lc,
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        loading: {
            hideDuration: 100,
            labelStyle: {
                fontWeight: "bold",
                position: Pd,
                top: "1em"
            },
            showDuration: 100,
            style: {
                position: lc,
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: true,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 2,
            borderRadius: 5,
            shadow: true,
            snap: Gb ? 25 : 10,
            style: {
                color: "#333333",
                fontSize: "12px",
                padding: "5px",
                whiteSpace: "nowrap"
            }
        },
        toolbar: {
            itemStyle: {
                color: "#4572A7",
                cursor: "pointer"
            }
        },
        credits: {
            enabled: true,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "10px"
            }
        }
    };
    var Jc = {
            dateTimeLabelFormats: {
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: false,
            gridLineColor: "#C0C0C0",
            labels: eb,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            max: null,
            min: null,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: false,
            tickColor: "#C0D0E0",
            tickLength: 5,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#6D869F",
                    fontWeight: "bold"
                }
            },
            type: "linear"
        },
        fd = va(Jc, {
            endOnTick: true,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: true,
            labels:
			{
                align: "right",
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: true,
            tickWidth: 0,
            title:
			{
                rotation: 270,
                text: "Temperatura"
            }
        }),
        Yd = {
            labels: {
                align: "right",
                x: -8,
                y: 3
            },
            title: {
                rotation: 270
            }
        },
        Xd = {
            labels: {
                align: "left",
                x: 8,
                y: 3
            },
            title: {
                rotation: 90
            }
        },
        Ld = {
            labels: {
                align: "center",
                x: 0,
                y: 14
            },
            title: {
                rotation: 0
            }
        },
        Wd = va(Ld, {
            labels: {
                y: -5
            }
        }),
        vb = Pa.plotOptions;
    eb = vb.line;
    vb.spline = va(eb);
    vb.scatter = va(eb, {
        lineWidth: 0,
        states: {
            hover: {
                lineWidth: 0
            }
        }
    });
    vb.area = va(eb, {});
    vb.areaspline = va(vb.area);
    vb.column = va(eb, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        states: {
            hover: {
                brightness: 0.1,
                shadow: false
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: false
            }
        }
    });
    vb.bar = va(vb.column, {
        dataLabels: {
            align: "left",
            x: 5,
            y: 0
        }
    });
    vb.pie = va(eb, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: ["50%", "50%"],
        colorByPoint: true,
        dataLabels: {
            distance: 30,
            enabled: true,
            formatter: function() {
                return this.point.name
            },
            y: 5
        },
        legendType: "point",
        marker: null,
        size: "75%",
        showInLegend: false,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: false
            }
        }
    });
    Bd();
    var ac = function(a) {
        var c = [],
            b;
        (function(d) {
            if(b = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d)) c = [pa(b[1]), pa(b[2]), pa(b[3]), parseFloat(b[4], 10)];
            else if(b = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d)) c = [pa(b[1], 16), pa(b[2], 16), pa(b[3], 16), 1]
        })(a);
        return {
            get: function(d) {
                return c && !isNaN(c[0]) ? d == "rgb" ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : d == "a" ? c[3] : "rgba(" + c.join(",") + ")" : a
            },
            brighten: function(d) {
                if(bc(d) && d !== 0) {
                    var e;
                    for(e = 0; e < 3; e++) {
                        c[e] += pa(d * 255);
                        if(c[e] < 0) c[e] = 0;
                        if(c[e] > 255) c[e] = 255
                    }
                }
                return this
            },
            setOpacity: function(d) {
                c[3] = d;
                return this
            }
        }
    };
    Kc = function(a, c, b) {
        function d(K) {
            return K.toString().replace(/^([0-9])$/, "0$1")
        }
        if(!M(c) || isNaN(c)) return "Invalid date";
        a = y(a, "%Y-%m-%d %H:%M:%S");
        c = new Date(c *
            nb);
        var e = c[ad](),
            f = c[bd](),
            g = c[nc](),
            i = c[Bc](),
            j = c[Cc](),
            k = Pa.lang,
            n = k.weekdays;
        k = k.months;
        c = {
            a: n[f].substr(0, 3),
            A: n[f],
            d: d(g),
            e: g,
            b: k[i].substr(0, 3),
            B: k[i],
            m: d(i + 1),
            y: j.toString().substr(2, 2),
            Y: j,
            H: d(e),
            I: d(e % 12 || 12),
            l: e % 12 || 12,
            M: d(c[$c]()),
            p: e < 12 ? "AM" : "PM",
            P: e < 12 ? "am" : "pm",
            S: d(c.getSeconds())
        };
        for(var z in c) a = a.replace("%" + z, c[z]);
        return b ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Fc.prototype = {
        init: function(a, c) {
            this.element = Da.createElementNS("http://www.w3.org/2000/svg", c);
            this.renderer = a
        },
        animate: function(a, c, b) {
            if(c = y(c, zc, true)) {
                c = va(c);
                if(b) c.complete = b;
                Wc(this, a, c)
            } else {
                this.attr(a);
                b && b()
            }
        },
        attr: function(a, c) {
            var b, d, e, f, g = this.element,
                i = g.nodeName,
                j = this.renderer,
                k, n = this.shadows,
                z, K = this;
            if(Ib(a) && M(c)) {
                b = a;
                a = {};
                a[b] = c
            }
            if(Ib(a)) {
                b = a;
                if(i == "circle") b = {
                    x: "cx",
                    y: "cy"
                } [b] || b;
                else if(b == "strokeWidth") b = "stroke-width";
                K = ya(g, b) || this[b] || 0;
                if(b != "d" && b != "visibility") K = parseFloat(K)
            } else
                for(b in a) {
                    k = false;
                    d = a[b];
                    if(b == "d") {
                        if(d && d.join) d = d.join(" ");
                        if(/(NaN| {2}|^$)/.test(d)) d =
                            "M 0 0";
                        this.d = d
                    } else if(b == "x" && i == "text") {
                        for(e = 0; e < g.childNodes.length; e++) {
                            f = g.childNodes[e];
                            ya(f, "x") == ya(g, "x") && ya(f, "x", d)
                        }
                        if(this.rotation) ya(g, "transform", "rotate(" + this.rotation + " " + d + " " + pa(a.y || ya(g, "y")) + ")")
                    } else if(b == "fill") d = j.color(d, g, b);
                    else if(i == "circle" && (b == "x" || b == "y")) b = {
                        x: "cx",
                        y: "cy"
                    } [b] || b;
                    else if(b == "translateX" || b == "translateY" || b == "rotation") {
                        this[b] = d;
                        this.updateTransform();
                        k = true
                    } else if(b == "stroke") d = j.color(d, g, b);
                    else if(b == "dashstyle") {
                        b = "stroke-dasharray";
                        if(d) {
                            d =
                                d.toLowerCase().replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                            for(e = d.length; e--;) d[e] = pa(d[e]) * a["stroke-width"];
                            d = d.join(",")
                        }
                    } else if(b == "isTracker") this[b] = d;
                    else if(b == "width") d = pa(d);
                    else if(b == "align") {
                        b = "text-anchor";
                        d = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        } [d]
                    }
                    if(b == "strokeWidth") b = "stroke-width";
                    if(be &&
                        b == "stroke-width" && d === 0) d = 1.0E-6;
                    if(this.symbolName && /^(x|y|r|start|end|innerR)/.test(b)) {
                        if(!z) {
                            this.symbolAttr(a);
                            z = true
                        }
                        k = true
                    }
                    if(n && /^(width|height|visibility|x|y|d)$/.test(b))
                        for(e = n.length; e--;) ya(n[e], b, d);
                    if(b == "text") j.buildText(g, d);
                    else k || ya(g, b, d)
                }
            return K
        },
        symbolAttr: function(a) {
            this.x = y(a.x, this.x);
            this.y = parseFloat(y(a.y, this.y));
            this.r = y(a.r, this.r);
            this.start = y(a.start, this.start);
            this.end = y(a.end, this.end);
            this.width = y(a.width, this.width);
            this.height = parseFloat(y(a.height, this.height));
            this.innerR = y(a.innerR, this.innerR);
            this.attr({
                d: this.renderer.symbols[this.symbolName](this.x, this.y, this.r, {
                    start: this.start,
                    end: this.end,
                    width: this.width,
                    height: this.height,
                    innerR: this.innerR
                })
            })
        },
        clip: function(a) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
        },
        css: function(a) {
            if(a && a.color) a.fill = a.color;
            a = oa(this.styles, a);
            this.attr({
                style: Vd(a)
            });
            this.styles = a;
            return this
        },
        on: function(a, c) {
            var b = c;
            if(Gb && a == "click") {
                a = "touchstart";
                b = function(d) {
                    d.preventDefault();
                    c()
                }
            }
            this.element["on" +
                a] = b;
            return this
        },
        translate: function(a, c) {
            return this.attr({
                translateX: a,
                translateY: c
            })
        },
        invert: function() {
            this.inverted = true;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                c = this.translateY || 0,
                b = this.inverted,
                d = this.rotation,
                e = [];
            if(b) {
                a += this.attr("width");
                c += this.attr("height")
            }
            if(a || c) e.push("translate(" + a + "," + c + ")");
            if(b) e.push("rotate(90) scale(-1,1)");
            else d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
            e.length && ya(this.element, "transform", e.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, c, b) {
            if(a) {
                this.alignOptions = a;
                this.alignByTranslate = c;
                b || this.renderer.alignedObjects.push(this)
            } else {
                a = this.alignOptions;
                c = this.alignByTranslate
            }
            b = y(b, this.renderer);
            var d = a.align,
                e = a.verticalAlign,
                f = (b.x || 0) + (a.x || 0),
                g = (b.y || 0) + (a.y || 0),
                i = {};
            if(/^(right|center)$/.test(d)) f += (b.width - (a.width || 0)) / {
                right: 1,
                center: 2
            } [d];
            i[c ? "translateX" : "x"] = f;
            if(/^(bottom|middle)$/.test(e)) g += (b.height - (a.height || 0)) /
                ({
                    bottom: 1,
                    middle: 2
                } [e] || 1);
            i[c ? "translateY" : "y"] = g;
            this[this.placed ? "animate" : "attr"](i);
            this.placed = true;
            return this
        },
        getBBox: function() {
            var a, c, b, d = this.rotation,
                e = d * Td;
            try {
                a = oa({}, this.element.getBBox())
            } catch (f) {
                a = {
                    width: 0,
                    height: 0
                }
            }
            c = a.width;
            b = a.height;
            if(d) {
                a.width = $a(b * yb(e)) + $a(c * ub(e));
                a.height = $a(b * ub(e)) + $a(c * yb(e))
            }
            return a
        },
        show: function() {
            return this.attr({
                visibility: Bb
            })
        },
        hide: function() {
            return this.attr({
                visibility: tb
            })
        },
        add: function(a) {
            var c = this.renderer,
                b = a || c;
            c = b.element || c.box;
            var d = c.childNodes,
                e = this.element,
                f = ya(e, "zIndex"),
                g;
            this.parentInverted = a && a.inverted;
            if(f) {
                b.handleZ = true;
                f = pa(f)
            }
            if(b.handleZ)
                for(g = 0; g < d.length; g++) {
                    a = d[g];
                    b = ya(a, "zIndex");
                    if(a != e && (pa(b) > f || !M(f) && M(b))) {
                        c.insertBefore(e, a);
                        return this
                    }
                }
            c.appendChild(e);
            return this
        },
        destroy: function() {
            var a = this.element || {},
                c = this.shadows,
                b = a.parentNode,
                d;
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = null;
            Qc(this);
            b && b.removeChild(a);
            c && t(c, function(e) {
                (b = e.parentNode) && b.removeChild(e)
            });
            yc(this.renderer.alignedObjects,
                this);
            for(d in this) delete this[d];
            return null
        },
        empty: function() {
            for(var a = this.element, c = a.childNodes, b = c.length; b--;) a.removeChild(c[b])
        },
        shadow: function(a) {
            var c = [],
                b, d = this.element,
                e = this.parentInverted ? "(-1,-1)" : "(1,1)";
            if(a) {
                for(a = 1; a <= 3; a++) {
                    b = d.cloneNode(0);
                    ya(b, {
                        isShadow: "true",
                        stroke: "rgb(0, 0, 0)",
                        "stroke-opacity": 0.05 * a,
                        "stroke-width": 7 - 2 * a,
                        transform: "translate" + e,
                        fill: mb
                    });
                    d.parentNode.insertBefore(b, d);
                    c.push(b)
                }
                this.shadows = c
            }
            return this
        }
    };
    var Sc = function() {
        this.init.apply(this, arguments)
    };
    Sc.prototype = {
        init: function(a, c, b) {
            var d = location,
                e;
            this.Element = Fc;
            e = this.createElement("svg").attr({
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1"
            });
            a.appendChild(e.element);
            this.box = e.element;
            this.boxWrapper = e;
            this.alignedObjects = [];
            this.url = Zc ? "" : d.href.replace(/#.*?$/, "");
            this.defs = this.createElement("defs").add();
            this.setSize(c, b, false)
        },
        createElement: function(a) {
            var c = new this.Element;
            c.init(this, a);
            return c
        },
        buildText: function(a, c) {
            for(var b = c.toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
                    '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br[^>]?>/g), d = a.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = ya(a, "x"), i, j = d.length; j--;) a.removeChild(d[j]);
            t(b, function(k, n) {
                var z, K = 0,
                    ja;
                k = k.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                z = k.split("|||");
                t(z, function($) {
                    if($ !== "" || z.length == 1) {
                        var ga = {},
                            u = Da.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        e.test($) && ya(u, "style", $.match(e)[1].replace(/(;| |^)color([ :])/,
                            "$1fill$2"));
                        if(f.test($)) {
                            ya(u, "onclick", 'location.href="' + $.match(f)[1] + '"');
                            Ua(u, {
                                cursor: "pointer"
                            })
                        }
                        $ = $.replace(/<(.|\n)*?>/g, "");
                        u.appendChild(Da.createTextNode($ || " "));
                        if(K) ga.dx = 3;
                        else ga.x = g;
                        if(!K) {
                            if(n) {
                                ja = pa(window.getComputedStyle(i, null).getPropertyValue("line-height"));
                                if(isNaN(ja)) ja = i.offsetHeight || 18;
                                ya(u, "dy", ja)
                            }
                            i = u
                        }
                        ya(u, ga);
                        a.appendChild(u);
                        K++
                    }
                })
            })
        },
        crispLine: function(a, c) {
            if(a[1] == a[4]) a[1] = a[4] = T(a[1]) + c % 2 / 2;
            if(a[2] == a[5]) a[2] = a[5] = T(a[2]) + c % 2 / 2;
            return a
        },
        path: function(a) {
            return this.createElement("path").attr({
                d: a,
                fill: mb
            })
        },
        circle: function(a, c, b) {
            a = Jb(a) ? a : {
                x: a,
                y: c,
                r: b
            };
            return this.createElement("circle").attr(a)
        },
        arc: function(a, c, b, d, e, f) {
            if(Jb(a)) {
                c = a.y;
                b = a.r;
                d = a.innerR;
                e = a.start;
                f = a.end;
                a = a.x
            }
            return this.symbol("arc", a || 0, c || 0, b || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            })
        },
        rect: function(a, c, b, d, e, f) {
            if(arguments.length > 1) {
                var g = (f || 0) % 2 / 2;
                a = T(a || 0) + g;
                c = T(c || 0) + g;
                b = T((b || 0) - 2 * g);
                d = T((d || 0) - 2 * g)
            }
            g = Jb(a) ? a : {
                x: a,
                y: c,
                width: Ca(b, 0),
                height: Ca(d, 0)
            };
            return this.createElement("rect").attr(oa(g, {
                rx: e || g.r,
                ry: e || g.r,
                fill: mb
            }))
        },
        setSize: function(a, c, b) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = c;
            for(this.boxWrapper[y(b, true) ? "animate" : "attr"]({
                    width: a,
                    height: c
                }); e--;) d[e].align()
        },
        g: function(a) {
            return this.createElement("g").attr(M(a) && {
                "class": Zb + a
            })
        },
        image: function(a, c, b, d, e) {
            var f = {
                preserveAspectRatio: mb
            };
            arguments.length > 1 && oa(f, {
                x: c,
                y: b,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
            return f
        },
        symbol: function(a, c, b, d, e) {
            var f,
                g = this.symbols[a];
            g = g && g(c, b, d, e);
            var i = /^url\((.*?)\)$/;
            if(g) {
                f = this.path(g);
                oa(f, {
                    symbolName: a,
                    x: c,
                    y: b,
                    r: d
                });
                e && oa(f, e)
            } else if(i.test(a)) {
                a = a.match(i)[1];
                f = this.image(a).attr({
                    x: c,
                    y: b
                });
                fb("img", {
                    onload: function() {
                        var j = ce[this.src] || [this.width, this.height];
                        f.attr({
                            width: j[0],
                            height: j[1]
                        }).translate(-T(j[0] / 2), -T(j[1] / 2))
                    },
                    src: a
                })
            } else f = this.circle(c, b, d);
            return f
        },
        symbols: {
            square: function(a, c, b) {
                b = 0.707 * b;
                return [Wa, a - b, c - b, Aa, a + b, c - b, a + b, c + b, a - b, c + b, "Z"]
            },
            triangle: function(a, c, b) {
                return [Wa,
                    a, c - 1.33 * b, Aa, a + b, c + 0.67 * b, a - b, c + 0.67 * b, "Z"
                ]
            },
            "triangle-down": function(a, c, b) {
                return [Wa, a, c + 1.33 * b, Aa, a - b, c - 0.67 * b, a + b, c - 0.67 * b, "Z"]
            },
            diamond: function(a, c, b) {
                return [Wa, a, c - b, Aa, a + b, c, a, c + b, a - b, c, "Z"]
            },
            arc: function(a, c, b, d) {
                var e = d.start,
                    f = d.end - 1.0E-6,
                    g = d.innerR,
                    i = ub(e),
                    j = yb(e),
                    k = ub(f);
                f = yb(f);
                d = d.end - e < Ub ? 0 : 1;
                return [Wa, a + b * i, c + b * j, "A", b, b, 0, d, 1, a + b * k, c + b * f, Aa, a + g * k, c + g * f, "A", g, g, 0, d, 0, a + g * i, c + g * j, "Z"]
            }
        },
        clipRect: function(a, c, b, d) {
            var e = Zb + od++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, c, b, d, 0).add(f);
            a.id = e;
            return a
        },
        color: function(a, c, b) {
            var d, e = /^rgba/;
            if(a && a.linearGradient) {
                var f = this;
                c = a.linearGradient;
                b = Zb + od++;
                var g, i, j;
                g = f.createElement("linearGradient").attr({
                    id: b,
                    gradientUnits: "userSpaceOnUse",
                    x1: c[0],
                    y1: c[1],
                    x2: c[2],
                    y2: c[3]
                }).add(f.defs);
                t(a.stops, function(k) {
                    if(e.test(k[1])) {
                        d = ac(k[1]);
                        i = d.get("rgb");
                        j = d.get("a")
                    } else {
                        i = k[1];
                        j = 1
                    }
                    f.createElement("stop").attr({
                        offset: k[0],
                        "stop-color": i,
                        "stop-opacity": j
                    }).add(g)
                });
                return "url(" + this.url + "#" + b + ")"
            } else if(e.test(a)) {
                d =
                    ac(a);
                ya(c, b + "-opacity", d.get("a"));
                return d.get("rgb")
            } else return a
        },
        text: function(a, c, b) {
            var d = Pa.chart.style;
            c = T(y(c, 0));
            b = T(y(b, 0));
            a = this.createElement("text").attr({
                x: c,
                y: b,
                text: a
            }).css({
                "font-family": d.fontFamily,
                "font-size": d.fontSize
            });
            a.x = c;
            a.y = b;
            return a
        }
    };
    var Ja;
    if(!Tc) {
        var fe = wb(Fc, {
            init: function(a, c) {
                var b = ["<", c, ' filled="f" stroked="f"'],
                    d = ["position: ", lc, ";"];
                if(c == "shape" || c == Lb) d.push("left:0;top:0;width:10px;height:10px;");
                if(wc) d.push("visibility: ", c == Lb ? tb : Bb);
                b.push(' style="',
                    d.join(""), '"/>');
                if(c) {
                    b = c == Lb || c == "span" || c == "img" ? b.join("") : a.prepVML(b);
                    this.element = fb(b)
                }
                this.renderer = a
            },
            add: function(a) {
                var c = this.renderer,
                    b = this.element,
                    d = c.box;
                d = a ? a.element || a : d;
                a && a.inverted && c.invertChild(b, d);
                wc && d.gVis == tb && Ua(b, {
                    visibility: tb
                });
                d.appendChild(b);
                this.added = true;
                this.alignOnAdd && this.updateTransform();
                return this
            },
            attr: function(a, c) {
                var b, d, e, f = this.element || {},
                    g = f.style,
                    i = f.nodeName,
                    j = this.renderer,
                    k = this.symbolName,
                    n, z, K = this.shadows,
                    ja = this;
                if(Ib(a) && M(c)) {
                    b = a;
                    a = {};
                    a[b] = c
                }
                if(Ib(a)) {
                    b = a;
                    ja = b == "strokeWidth" || b == "stroke-width" ? this.strokeweight : this[b]
                } else
                    for(b in a) {
                        d = a[b];
                        n = false;
                        if(k && /^(x|y|r|start|end|width|height|innerR)/.test(b)) {
                            if(!z) {
                                this.symbolAttr(a);
                                z = true
                            }
                            n = true
                        } else if(b == "d") {
                            d = d || [];
                            this.d = d.join(" ");
                            e = d.length;
                            for(n = []; e--;) n[e] = bc(d[e]) ? T(d[e] * 10) - 5 : d[e] == "Z" ? "x" : d[e];
                            d = n.join(" ") || "x";
                            f.path = d;
                            if(K)
                                for(e = K.length; e--;) K[e].path = d;
                            n = true
                        } else if(b == "zIndex" || b == "visibility") {
                            if(wc && b == "visibility" && i == "DIV") {
                                f.gVis = d;
                                n = f.childNodes;
                                for(e = n.length; e--;) Ua(n[e], {
                                    visibility: d
                                });
                                if(d == Bb) d = null
                            }
                            if(d) g[b] = d;
                            n = true
                        } else if(/^(width|height)$/.test(b)) {
                            if(this.updateClipping) {
                                this[b] = d;
                                this.updateClipping()
                            } else g[b] = d;
                            n = true
                        } else if(/^(x|y)$/.test(b)) {
                            this[b] = d;
                            if(f.tagName == "SPAN") this.updateTransform();
                            else g[{
                                x: "left",
                                y: "top"
                            } [b]] = d
                        } else if(b == "class") f.className = d;
                        else if(b == "stroke") {
                            d = j.color(d, f, b);
                            b = "strokecolor"
                        } else if(b == "stroke-width" || b == "strokeWidth") {
                            f.stroked = d ? true : false;
                            b = "strokeweight";
                            this[b] = d;
                            if(bc(d)) d += bb
                        } else if(b ==
                            "dashstyle") {
                            (f.getElementsByTagName("stroke")[0] || fb(j.prepVML(["<stroke/>"]), null, null, f))[b] = d || "solid";
                            this.dashstyle = d;
                            n = true
                        } else if(b == "fill")
                            if(i == "SPAN") g.color = d;
                            else {
                                f.filled = d != mb ? true : false;
                                d = j.color(d, f, b);
                                b = "fillcolor"
                            }
                        else if(b == "translateX" || b == "translateY" || b == "rotation" || b == "align") {
                            if(b == "align") b = "textAlign";
                            this[b] = d;
                            this.updateTransform();
                            n = true
                        } else if(b == "text") {
                            f.innerHTML = d;
                            n = true
                        }
                        if(K && b == "visibility")
                            for(e = K.length; e--;) K[e].style[b] = d;
                        if(!n)
                            if(wc) f[b] = d;
                            else ya(f, b, d)
                    }
                return ja
            },
            clip: function(a) {
                var c = a.members,
                    b = c.length;
                c.push(this);
                this.destroyClip = function() {
                    c.splice(b, 1)
                };
                return this.css(a.getCSS(this.inverted))
            },
            css: function(a) {
                Ua(this.element, a);
                return this
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                Fc.prototype.destroy.apply(this)
            },
            empty: function() {
                for(var a = this.element.childNodes, c = a.length, b; c--;) {
                    b = a[c];
                    b.parentNode.removeChild(b)
                }
            },
            getBBox: function() {
                var a = this.element;
                if(a.nodeName == "text") a.style.position = lc;
                return {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            },
            on: function(a, c) {
                this.element["on" + a] = function() {
                    var b = rb.event;
                    b.target = b.srcElement;
                    c(b)
                };
                return this
            },
            updateTransform: function() {
                if(this.added) {
                    var a = this,
                        c = a.element,
                        b = a.translateX || 0,
                        d = a.translateY || 0,
                        e = a.x || 0,
                        f = a.y || 0,
                        g = a.rotation || 0,
                        i = g * Td,
                        j = ub(i);
                    i = yb(i);
                    var k = a.textAlign || "left",
                        n = {
                            right: 1,
                            center: 2
                        } [k],
                        z = k && k != "left";
                    if(b || d) a.css({
                        marginLeft: b,
                        marginTop: d
                    });
                    a.inverted && t(c.childNodes, function(K) {
                        a.renderer.invertChild(K, c)
                    });
                    if(c.tagName == "SPAN") {
                        Ua(c, {
                            filter: g ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", j, ", M12=", -i, ", M21=", i, ", M22=", j, ", sizingMethod='auto expand')"].join("") : mb
                        });
                        b = c.offsetWidth;
                        d = c.offsetHeight;
                        g = T(pa(c.style.fontSize || 12) * 1.2);
                        e += b * ab(j, 0) + ab(i, 0) * g;
                        f += d * ab(i, 0) - Ca(j, 0) * g;
                        if(z) {
                            e -= b / n * j;
                            f -= d / n * i
                        }
                        Ua(c, {
                            textAlign: k,
                            left: e,
                            top: f
                        })
                    }
                } else this.alignOnAdd = true
            },
            shadow: function(a) {
                var c = [],
                    b = this.element,
                    d = this.renderer,
                    e, f = b.style,
                    g, i = b.path;
                if("" + b.path === "") i = "x";
                if(a) {
                    for(a = 1; a <= 3; a++) {
                        g = ['<shape isShadow="true" strokeweight="',
                            7 - 2 * a, '" filled="false" path="', i, '" coordsize="100,100" style="', b.style.cssText, '" />'
                        ];
                        e = fb(d.prepVML(g), null, {
                            left: pa(f.left) + 1,
                            top: pa(f.top) + 1
                        });
                        g = ['<stroke color="black" opacity="', 0.05 * a, '"/>'];
                        fb(d.prepVML(g), null, null, e);
                        b.parentNode.insertBefore(e, b);
                        c.push(e)
                    }
                    this.shadows = c
                }
                return this
            }
        });
        Ja = function() {
            this.init.apply(this, arguments)
        };
        Ja.prototype = va(Sc.prototype, {
            isIE8: vc.indexOf("MSIE 8.0") > -1,
            init: function(a, c, b) {
                var d;
                this.Element = fe;
                this.alignedObjects = [];
                d = this.createElement(Lb);
                a.appendChild(d.element);
                this.box = d.element;
                this.boxWrapper = d;
                this.setSize(c, b, false);
                if(!Da.namespaces.hcv) {
                    Da.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    Da.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            },
            clipRect: function(a, c, b, d) {
                var e = this.createElement();
                return oa(e, {
                    members: [],
                    left: a,
                    top: c,
                    width: b,
                    height: d,
                    getCSS: function(f) {
                        var g = this.top,
                            i = this.left,
                            j = i + this.width,
                            k = g + this.height;
                        g = {
                            clip: "rect(" +
                                T(f ? i : g) + "px," + T(f ? k : j) + "px," + T(f ? j : k) + "px," + T(f ? g : i) + "px)"
                        };
                        !f && wc && oa(g, {
                            width: j + bb,
                            height: k + bb
                        });
                        return g
                    },
                    updateClipping: function() {
                        t(e.members, function(f) {
                            f.css(e.getCSS(f.inverted))
                        })
                    }
                })
            },
            color: function(a, c, b) {
                var d, e = /^rgba/;
                if(a && a.linearGradient) {
                    var f, g, i = a.linearGradient,
                        j, k, n, z;
                    t(a.stops, function(K, ja) {
                        if(e.test(K[1])) {
                            d = ac(K[1]);
                            f = d.get("rgb");
                            g = d.get("a")
                        } else {
                            f = K[1];
                            g = 1
                        }
                        if(ja) {
                            n = f;
                            z = g
                        } else {
                            j = f;
                            k = g
                        }
                    });
                    a = 90 - Ra.atan((i[3] - i[1]) / (i[2] - i[0])) * 180 / Ub;
                    b = ["<", b, ' colors="0% ', j, ",100% ", n,
                        '" angle="', a, '" opacity="', z, '" o:opacity2="', k, '" type="gradient" focus="100%" />'
                    ];
                    fb(this.prepVML(b), null, null, c)
                } else if(e.test(a) && c.tagName != "IMG") {
                    d = ac(a);
                    b = ["<", b, ' opacity="', d.get("a"), '"/>'];
                    fb(this.prepVML(b), null, null, c);
                    return d.get("rgb")
                } else return a
            },
            prepVML: function(a) {
                var c = this.isIE8;
                a = a.join("");
                if(c) {
                    a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
                    a = a.indexOf('style="') == -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="',
                        'style="display:inline-block;behavior:url(#default#VML);')
                } else a = a.replace("<", "<hcv:");
                return a
            },
            text: function(a, c, b) {
                var d = Pa.chart.style;
                return this.createElement("span").attr({
                    text: a,
                    x: T(c),
                    y: T(b)
                }).css({
                    whiteSpace: "nowrap",
                    fontFamily: d.fontFamily,
                    fontSize: d.fontSize
                })
            },
            path: function(a) {
                return this.createElement("shape").attr({
                    coordsize: "100 100",
                    d: a
                })
            },
            circle: function(a, c, b) {
                return this.path(this.symbols.circle(a, c, b))
            },
            g: function(a) {
                var c;
                if(a) c = {
                    className: Zb + a,
                    "class": Zb + a
                };
                return this.createElement(Lb).attr(c)
            },
            image: function(a, c, b, d, e) {
                var f = this.createElement("img").attr({
                    src: a
                });
                arguments.length > 1 && f.css({
                    left: c,
                    top: b,
                    width: d,
                    height: e
                });
                return f
            },
            rect: function(a, c, b, d, e, f) {
                if(arguments.length > 1) {
                    var g = (f || 0) % 2 / 2;
                    a = T(a || 0) + g;
                    c = T(c || 0) + g;
                    b = T((b || 0) - 2 * g);
                    d = T((d || 0) - 2 * g)
                }
                if(Jb(a)) {
                    c = a.y;
                    b = a.width;
                    d = a.height;
                    e = a.r;
                    a = a.x
                }
                return this.symbol("rect", a || 0, c || 0, e || 0, {
                    width: b || 0,
                    height: d || 0
                })
            },
            invertChild: function(a, c) {
                var b = c.style;
                Ua(a, {
                    flip: "x",
                    left: pa(b.width) - 10,
                    top: pa(b.height) - 10,
                    rotation: -90
                })
            },
            symbols: {
                arc: function(a,
                    c, b, d) {
                    var e = d.start,
                        f = d.end,
                        g = ub(e),
                        i = yb(e),
                        j = ub(f),
                        k = yb(f);
                    d = d.innerR;
                    if(f - e === 0) return ["x"];
                    else if(f - e == 2 * Ub) j = -0.07 / b;
                    return ["wa", a - b, c - b, a + b, c + b, a + b * g, c + b * i, a + b * j, c + b * k, "at", a - d, c - d, a + d, c + d, a + d * j, c + d * k, a + d * g, c + d * i, "x", "e"]
                },
                circle: function(a, c, b) {
                    return ["wa", a - b, c - b, a + b, c + b, a + b, c, a + b, c, "e"]
                },
                rect: function(a, c, b, d) {
                    var e = d.width;
                    d = d.height;
                    var f = a + e,
                        g = c + d;
                    b = ab(b, e, d);
                    return [Wa, a + b, c, Aa, f - b, c, "wa", f - 2 * b, c, f, c + 2 * b, f - b, c, f, c + b, Aa, f, g - b, "wa", f - 2 * b, g - 2 * b, f, g, f, g - b, f - b, g, Aa, a + b, g, "wa", a, g - 2 * b, a + 2 *
                        b, g, a + b, g, a, g - b, Aa, a, c + b, "wa", a, c, a + 2 * b, c + 2 * b, a, c + b, a + b, c, "x", "e"
                    ]
                }
            }
        })
    }
    var Qd = Tc ? Sc : Ja;
    Hd.prototype.callbacks = [];
    var xc = function() {};
    xc.prototype = {
        init: function(a, c) {
            var b;
            this.series = a;
            this.applyOptions(c);
            this.pointAttr = {};
            if(a.options.colorByPoint) {
                b = a.chart.options.colors;
                if(!this.options) this.options = {};
                this.color = this.options.color = this.color || b[Hb++];
                if(Hb >= b.length) Hb = 0
            }
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a) {
            var c = this.series;
            this.config = a;
            if(bc(a) || a === null) this.y = a;
            else if(Jb(a) &&
                !bc(a.length)) {
                oa(this, a);
                this.options = a
            } else if(Ib(a[0])) {
                this.name = a[0];
                this.y = a[1]
            } else if(bc(a[0])) {
                this.x = a[0];
                this.y = a[1]
            }
            if(this.x === Oa) this.x = c.autoIncrement()
        },
        destroy: function() {
            var a = this,
                c = a.series,
                b;
            c.chart.pointCount--;
            a == c.chart.hoverPoint && a.onMouseOut();
            c.chart.hoverPoints = null;
            Cb(a);
            t(["graphic", "tracker", "group", "dataLabel", "connector"], function(d) {
                a[d] && a[d].destroy()
            });
            a.legendItem && a.series.chart.legend.destroyItem(a);
            for(b in a) a[b] = null
        },
        select: function(a, c) {
            var b = this,
                d = b.series.chart;
            b.selected = a = y(a, !b.selected);
            b.firePointEvent(a ? "select" : "unselect");
            b.setState(a && "select");
            c || t(d.getSelectedPoints(), function(e) {
                if(e.selected && e != b) {
                    e.selected = false;
                    e.setState(db);
                    e.firePointEvent("unselect")
                }
            })
        },
        onMouseOver: function() {
            var a = this.series.chart,
                c = a.tooltip,
                b = a.hoverPoint;
            b && b != this && b.onMouseOut();
            this.firePointEvent("mouseOver");
            c && !c.shared && c.refresh(this);
            this.setState(xb);
            a.hoverPoint = this
        },
        onMouseOut: function() {
            this.firePointEvent("mouseOut");
            this.setState();
            this.series.chart.hoverPoint =
                null
        },
        update: function(a, c, b) {
            var d = this,
                e = d.series,
                f = e.chart;
            Kb(b, f);
            c = y(c, true);
            d.firePointEvent("update", {
                options: a
            }, function() {
                d.applyOptions(a);
                e.isDirty = true;
                c && f.redraw()
            })
        },
        remove: function(a, c) {
            var b = this,
                d = b.series,
                e = d.chart,
                f = d.data;
            Kb(c, e);
            a = y(a, true);
            b.firePointEvent("remove", null, function() {
                yc(f, b);
                b.destroy();
                d.isDirty = true;
                a && e.redraw()
            })
        },
        firePointEvent: function(a, c, b) {
            var d = this,
                e = this.series.options;
            if(e.point.events[a] || d.options && d.options.events && d.options.events[a]) this.importEvents();
            if(a == "click" && e.allowPointSelect) b = function(f) {
                d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
            };
            Ia(this, a, c, b)
        },
        importEvents: function() {
            if(!this.hasImportedEvents) {
                var a = va(this.series.options.point, this.options).events,
                    c;
                this.events = a;
                for(c in a) Ma(this, c, a[c]);
                this.hasImportedEvents = true
            }
        },
        setState: function(a) {
            var c = this.series,
                b = c.options.states,
                d = vb[c.type].marker && c.options.marker,
                e = d && !d.enabled,
                f = (d = d && d.states[a]) && d.enabled === false,
                g = c.stateMarkerGraphic,
                i = c.chart,
                j = this.pointAttr;
            a || (a =
                db);
            if(!(a == this.state || this.selected && a != "select" || b[a] && b[a].enabled === false || a && (f || e && !d.enabled))) {
                if(this.graphic) this.graphic.attr(j[a]);
                else {
                    if(a) {
                        if(!g) c.stateMarkerGraphic = g = i.renderer.circle(0, 0, j[a].r).attr(j[a]).add(c.group);
                        g.translate(this.plotX, this.plotY)
                    }
                    if(g) g[a ? "show" : "hide"]()
                }
                this.state = a
            }
        }
    };
    var lb = function() {};
    lb.prototype = {
        isCartesian: true,
        type: "line",
        pointClass: xc,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        init: function(a,
            c) {
            var b, d;
            d = a.series.length;
            this.chart = a;
            c = this.setOptions(c);
            oa(this, {
                index: d,
                options: c,
                name: c.name || "ºC ",
                state: db,
                pointAttr: {},
                visible: c.visible !== false,
                selected: c.selected === true
            });
            d = c.events;
            for(b in d) Ma(this, b, d[b]);
            if(d && d.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick = true;
            this.getColor();
            this.getSymbol();
            this.setData(c.data, false)
        },
        autoIncrement: function() {
            var a = this.options,
                c = this.xIncrement;
            c = y(c, a.pointStart, 0);
            this.pointInterval =
                y(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = c + this.pointInterval;
            return c
        },
        cleanData: function() {
            var a = this.chart,
                c = this.data,
                b, d, e = a.smallestInterval,
                f, g;
            c.sort(function(i, j) {
                return i.x - j.x
            });
            for(g = c.length - 1; g >= 0; g--) c[g - 1] && c[g - 1].x == c[g].x && c.splice(g - 1, 1);
            for(g = c.length - 1; g >= 0; g--)
                if(c[g - 1]) {
                    f = c[g].x - c[g - 1].x;
                    if(d === Oa || f < d) {
                        d = f;
                        b = g
                    }
                } if(e === Oa || d < e) a.smallestInterval = d;
            this.closestPoints = b
        },
        getSegments: function() {
            var a = -1,
                c = [],
                b = this.data;
            t(b, function(d, e) {
                if(d.y === null) {
                    e > a + 1 && c.push(b.slice(a +
                        1, e));
                    a = e
                } else e == b.length - 1 && c.push(b.slice(a + 1, e + 1))
            });
            this.segments = c
        },
        setOptions: function(a) {
            var c = this.chart.options.plotOptions;
            return va(c[this.type], c.series, a)
        },
        getColor: function() {
            var a = this.chart.options.colors;
            this.color = this.options.color || a[Hb++] || "#0000ff";
            if(Hb >= a.length) Hb = 0
        },
        getSymbol: function() {
            var a = this.chart.options.symbols;
            this.symbol = this.options.marker.symbol || a[Vc++];
            if(Vc >= a.length) Vc = 0
        },
        addPoint: function(a, c, b, d) {
            var e = this.data,
                f = this.graph,
                g = this.area,
                i = this.chart;
            a =
                (new this.pointClass).init(this, a);
            Kb(d, i);
            if(f && b) f.shift = b;
            if(g) {
                g.shift = b;
                g.isArea = true
            }
            c = y(c, true);
            e.push(a);
            b && e[0].remove(false);
            this.isDirty = true;
            c && i.redraw()
        },
        setData: function(a, c) {
            var b = this,
                d = b.data,
                e = b.initialColor,
                f = b.chart,
                g = d && d.length || 0;
            b.xIncrement = null;
            if(M(e)) Hb = e;
            for(a = jc(mc(a || []), function(i) {
                    return (new b.pointClass).init(b, i)
                }); g--;) d[g].destroy();
            b.data = a;
            b.cleanData();
            b.getSegments();
            b.isDirty = true;
            f.isDirtyBox = true;
            y(c, true) && f.redraw(false)
        },
        remove: function(a, c) {
            var b = this,
                d = b.chart;
            a = y(a, true);
            if(!b.isRemoving) {
                b.isRemoving = true;
                Ia(b, "remove", null, function() {
                    b.destroy();
                    d.isDirtyLegend = d.isDirtyBox = true;
                    a && d.redraw(c)
                })
            }
            b.isRemoving = false
        },
        translate: function() {
            for(var a = this.chart, c = this.options.stacking, b = this.xAxis.categories, d = this.yAxis, e = this.data, f = e.length; f--;) {
                var g = e[f],
                    i = g.x,
                    j = g.y,
                    k;
                k = d.stacks[(j < 0 ? "-" : "") + this.stackKey];
                g.plotX = this.xAxis.translate(i);
                if(c && this.visible && k[i]) {
                    k = k[i];
                    i = k.total;
                    k.cum = k = k.cum - j;
                    j = k + j;
                    if(c == "percent") {
                        k = i ? k * 100 / i : 0;
                        j = i ? j *
                            100 / i : 0
                    }
                    g.percentage = i ? g.y * 100 / i : 0;
                    g.stackTotal = i;
                    g.yBottom = d.translate(k, 0, 1)
                }
                if(j !== null) g.plotY = d.translate(j, 0, 1);
                g.clientX = a.inverted ? a.plotHeight - g.plotX : g.plotX;
                g.category = b && b[g.x] !== Oa ? b[g.x] : g.x
            }
        },
        setTooltipPoints: function(a) {
            var c = this.chart,
                b = c.inverted,
                d = [],
                e = T((b ? c.plotTop : c.plotLeft) + c.plotSizeX),
                f, g, i = [];
            if(a) this.tooltipPoints = null;
            t(this.segments, function(j) {
                d = d.concat(j)
            });
            if(this.xAxis && this.xAxis.reversed) d = d.reverse();
            t(d, function(j, k) {
                f = d[k - 1] ? d[k - 1].high + 1 : 0;
                for(g = j.high = d[k +
                        1] ? Mb((j.plotX + (d[k + 1] ? d[k + 1].plotX : e)) / 2) : e; f <= g;) i[b ? e - f++ : f++] = j
            });
            this.tooltipPoints = i
        },
        onMouseOver: function() {
            var a = this.chart,
                c = a.hoverSeries;
            if(!(!Gb && a.mouseIsDown)) {
                c && c != this && c.onMouseOut();
                this.options.events.mouseOver && Ia(this, "mouseOver");
                this.tracker && this.tracker.toFront();
                this.setState(xb);
                a.hoverSeries = this
            }
        },
        onMouseOut: function() {
            var a = this.options,
                c = this.chart,
                b = c.tooltip,
                d = c.hoverPoint;
            d && d.onMouseOut();
            this && a.events.mouseOut && Ia(this, "mouseOut");
            b && !a.stickyTracking && b.hide();
            this.setState();
            c.hoverSeries = null
        },
        animate: function(a) {
            var c = this,
                b = c.chart,
                d = c.clipRect,
                e = c.options.animation;
            if(e && !Jb(e)) e = {};
            if(a) {
                if(!d.isAnimating) {
                    d.attr("width", 0);
                    d.isAnimating = true
                }
            } else {
                d.animate({
                    width: b.plotSizeX
                }, e && oa(e, {
                    complete: function() {
                        d.isAnimating = false;
                        if(d != b.clipRect) {
                            c.group.clip(c.clipRect = b.clipRect);
                            d.destroy()
                        }
                    }
                }));
                this.animate = null
            }
        },
        drawPoints: function() {
            var a, c = this.data,
                b = this.chart,
                d, e, f, g, i, j;
            if(this.options.marker.enabled)
                for(f = c.length; f--;) {
                    g = c[f];
                    d = g.plotX;
                    e = g.plotY;
                    j = g.graphic;
                    if(e !== Oa && !isNaN(e)) {
                        a = g.pointAttr[g.selected ? "select" : db];
                        i = a.r;
                        if(j) j.animate({
                            x: d,
                            y: e,
                            r: i
                        });
                        else g.graphic = b.renderer.symbol(y(g.marker && g.marker.symbol, this.symbol), d, e, i).attr(a).add(this.group)
                    }
                }
        },
        convertAttribs: function(a, c, b, d) {
            var e = this.pointAttrToOptions,
                f, g, i = {};
            a = a || {};
            c = c || {};
            b = b || {};
            d = d || {};
            for(f in e) {
                g = e[f];
                i[f] = y(a[g], c[f], b[f], d[f])
            }
            return i
        },
        getAttribs: function() {
            var a = this,
                c = vb[a.type].marker ? a.options.marker : a.options,
                b = c.states,
                d = b[xb],
                e, f = {},
                g = a.color,
                i = a.data,
                j = [],
                k, n = a.pointAttrToOptions;
            if(a.options.marker) {
                f = {
                    stroke: g,
                    fill: g
                };
                d.radius = d.radius || c.radius + 2;
                d.lineWidth = d.lineWidth || c.lineWidth + 1
            } else {
                f = {
                    fill: g
                };
                d.color = d.color || ac(d.color || g).brighten(d.brightness).get()
            }
            j[db] = a.convertAttribs(c, f);
            t([xb, "select"], function(K) {
                j[K] = a.convertAttribs(b[K], j[db])
            });
            a.pointAttr = j;
            for(f = i.length; f--;) {
                g = i[f];
                if((c = g.options && g.options.marker || g.options) && c.enabled === false) c.radius = 0;
                e = false;
                if(g.options)
                    for(var z in n)
                        if(M(c[n[z]])) e = true;
                if(e) {
                    k = [];
                    b = c.states || {};
                    e = b[xb] = b[xb] || {};
                    if(!a.options.marker) e.color = ac(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
                    k[db] = a.convertAttribs(c, j[db]);
                    k[xb] = a.convertAttribs(b[xb], j[xb], k[db]);
                    k.select = a.convertAttribs(b.select, j.select, k[db])
                } else k = j;
                g.pointAttr = k
            }
        },
        destroy: function() {
            var a = this,
                c = a.chart,
                b = /\/5[0-9\.]+ Safari\//.test(vc),
                d, e;
            Cb(a);
            a.legendItem && a.chart.legend.destroyItem(a);
            t(a.data, function(f) {
                f.destroy()
            });
            t(["area", "graph", "dataLabelsGroup", "group", "tracker"],
                function(f) {
                    if(a[f]) {
                        d = b && f == "group" ? "hide" : "destroy";
                        a[f][d]()
                    }
                });
            if(c.hoverSeries == a) c.hoverSeries = null;
            yc(c.series, a);
            for(e in a) delete a[e]
        },
        drawDataLabels: function() {
            if(this.options.dataLabels.enabled) {
                var a = this,
                    c, b, d = a.data,
                    e = a.options.dataLabels,
                    f, g = a.dataLabelsGroup,
                    i = a.chart,
                    j = i.inverted,
                    k = a.type,
                    n;
                if(!g) g = a.dataLabelsGroup = i.renderer.g(Zb + "data-labels").attr({
                    visibility: a.visible ? Bb : tb,
                    zIndex: 5
                }).translate(i.plotLeft, i.plotTop).add();
                n = e.color;
                if(n == "auto") n = null;
                e.style.color = y(n, a.color);
                t(d, function(z) {
                    var K = y(z.barX, z.plotX, -999),
                        ja = y(z.plotY, -999),
                        $ = z.dataLabel,
                        ga = e.align;
                    f = e.formatter.call({
                        x: z.x,
                        y: z.y,
                        series: a,
                        point: z,
                        percentage: z.percentage,
                        total: z.total || z.stackTotal
                    });
                    c = (j ? i.plotWidth - ja : K) + e.x;
                    b = (j ? i.plotHeight - K : ja) + e.y;
                    if(k == "column") c += {
                        center: z.barW / 2,
                        right: z.barW
                    } [ga] || 0;
                    if($) $.animate({
                        x: c,
                        y: b
                    });
                    else if(f) z.dataLabel = i.renderer.text(f, c, b).attr({
                        align: ga,
                        rotation: e.rotation,
                        zIndex: 1
                    }).css(e.style).add(g)
                })
            }
        },
        drawGraph: function() {
            var a = this,
                c = a.options,
                b = a.graph,
                d = [],
                e, f = a.area,
                g = a.group,
                i = c.lineColor || a.color,
                j = c.lineWidth,
                k = c.dashStyle,
                n, z = a.chart.renderer,
                K = a.yAxis.getThreshold(c.threshold || 0),
                ja = /^area/.test(a.type),
                $ = [],
                ga = [];
            t(a.segments, function(u) {
                n = [];
                t(u, function(ca, na) {
                    if(a.getPointSpline) n.push.apply(n, a.getPointSpline(u, ca, na));
                    else {
                        n.push(na ? Aa : Wa);
                        na && c.step && n.push(ca.plotX, u[na - 1].plotY);
                        n.push(ca.plotX, ca.plotY)
                    }
                });
                if(u.length > 1) d = d.concat(n);
                else $.push(u[0]);
                if(ja) {
                    var N = [],
                        ka, Na = n.length;
                    for(ka = 0; ka < Na; ka++) N.push(n[ka]);
                    Na == 3 && N.push(Aa,
                        n[1], n[2]);
                    if(c.stacking && a.type != "areaspline")
                        for(ka = u.length - 1; ka >= 0; ka--) N.push(u[ka].plotX, u[ka].yBottom);
                    else N.push(Aa, u[u.length - 1].plotX, K, Aa, u[0].plotX, K);
                    ga = ga.concat(N)
                }
            });
            a.graphPath = d;
            a.singlePoints = $;
            if(ja) {
                e = y(c.fillColor, ac(a.color).setOpacity(c.fillOpacity || 0.75).get());
                if(f) f.animate({
                    d: ga
                });
                else a.area = a.chart.renderer.path(ga).attr({
                    fill: e
                }).add(g)
            }
            if(b) b.animate({
                d: d
            });
            else if(j) {
                b = {
                    stroke: i,
                    "stroke-width": j
                };
                if(k) b.dashstyle = k;
                a.graph = z.path(d).attr(b).add(g).shadow(c.shadow)
            }
        },
        render: function() {
            var a = this.chart,
                c, b, d = this.options,
                e = d.animation && this.animate;
            b = a.renderer;
            if(!this.clipRect) {
                this.clipRect = !a.hasRendered && a.clipRect ? a.clipRect : b.clipRect(0, 0, a.plotSizeX, a.plotSizeY);
                if(!a.clipRect) a.clipRect = this.clipRect
            }
            if(!this.group) {
                c = this.group = b.g("series");
                if(a.inverted) {
                    b = function() {
                        c.attr({
                            width: a.plotWidth,
                            height: a.plotHeight
                        }).invert()
                    };
                    b();
                    Ma(a, "resize", b)
                }
                c.clip(this.clipRect).attr({
                    visibility: this.visible ? Bb : tb,
                    zIndex: d.zIndex
                }).translate(a.plotLeft, a.plotTop).add(a.seriesGroup)
            }
            this.drawDataLabels();
            e && this.animate(true);
            this.getAttribs();
            this.drawGraph && this.drawGraph();
            this.drawPoints();
            this.options.enableMouseTracking !== false && this.drawTracker();
            e && this.animate();
            this.isDirty = false
        },
        redraw: function() {
            var a = this.chart,
                c = this.group;
            if(c) {
                a.inverted && c.attr({
                    width: a.plotWidth,
                    height: a.plotHeight
                });
                c.animate({
                    translateX: a.plotLeft,
                    translateY: a.plotTop
                })
            }
            this.translate();
            this.setTooltipPoints(true);
            this.render()
        },
        setState: function(a) {
            var c = this.options,
                b = this.graph,
                d = c.states;
            c = c.lineWidth;
            a = a ||
                db;
            if(this.state != a) {
                this.state = a;
                if(!(d[a] && d[a].enabled === false)) {
                    if(a) c = d[a].lineWidth || c + 1;
                    if(b && !b.dashstyle) b.attr({
                        "stroke-width": c
                    }, a ? 0 : 500)
                }
            }
        },
        setVisible: function(a, c) {
            var b = this.chart,
                d = this.legendItem,
                e = this.group,
                f = this.tracker,
                g = this.dataLabelsGroup,
                i, j = this.data,
                k = b.options.chart.ignoreHiddenSeries;
            i = this.visible;
            i = (this.visible = a = a === Oa ? !i : a) ? "show" : "hide";
            e && e[i]();
            if(f) f[i]();
            else
                for(e = j.length; e--;) {
                    f = j[e];
                    f.tracker && f.tracker[i]()
                }
            g && g[i]();
            d && b.legend.colorizeItem(this, a);
            this.isDirty =
                true;
            this.options.stacking && t(b.series, function(n) {
                if(n.options.stacking && n.visible) n.isDirty = true
            });
            if(k) b.isDirtyBox = true;
            c !== false && b.redraw();
            Ia(this, i)
        },
        show: function() {
            this.setVisible(true)
        },
        hide: function() {
            this.setVisible(false)
        },
        select: function(a) {
            this.selected = a = a === Oa ? !this.selected : a;
            if(this.checkbox) this.checkbox.checked = a;
            Ia(this, a ? "select" : "unselect")
        },
        drawTracker: function() {
            var a = this,
                c = a.options,
                b = [].concat(a.graphPath),
                d = b.length,
                e = a.chart,
                f = e.options.tooltip.snap,
                g = a.tracker,
                i = c.cursor;
            i = i && {
                cursor: i
            };
            var j = a.singlePoints,
                k;
            if(d)
                for(k = d + 1; k--;) {
                    b[k] == Wa && b.splice(k + 1, 0, b[k + 1] - f, b[k + 2], Aa);
                    if(k && b[k] == Wa || k == d) b.splice(k, 0, Aa, b[k - 2] + f, b[k - 1])
                }
            for(k = 0; k < j.length; k++) {
                d = j[k];
                b.push(Wa, d.plotX - f, d.plotY, Aa, d.plotX + f, d.plotY)
            }
            if(g) g.attr({
                d: b
            });
            else a.tracker = e.renderer.path(b).attr({
                isTracker: true,
                stroke: Ud,
                fill: mb,
                "stroke-width": c.lineWidth + 2 * f,
                visibility: a.visible ? Bb : tb,
                zIndex: 1
            }).on(Gb ? "touchstart" : "mouseover", function() {
                e.hoverSeries != a && a.onMouseOver()
            }).on("mouseout", function() {
                c.stickyTracking ||
                    a.onMouseOut()
            }).css(i).add(e.trackerGroup)
        }
    };
    Ja = wb(lb);
    sb.line = Ja;
    Ja = wb(lb, {
        type: "area"
    });
    sb.area = Ja;
    Ja = wb(lb, {
        type: "spline",
        getPointSpline: function(a, c, b) {
            var d = c.plotX,
                e = c.plotY,
                f = a[b - 1],
                g = a[b + 1],
                i, j, k, n;
            if(b && b < a.length - 1) {
                a = f.plotY;
                k = g.plotX;
                g = g.plotY;
                var z;
                i = (1.5 * d + f.plotX) / 2.5;
                j = (1.5 * e + a) / 2.5;
                k = (1.5 * d + k) / 2.5;
                n = (1.5 * e + g) / 2.5;
                z = (n - j) * (k - d) / (k - i) + e - n;
                j += z;
                n += z;
                if(j > a && j > e) {
                    j = Ca(a, e);
                    n = 2 * e - j
                } else if(j < a && j < e) {
                    j = ab(a, e);
                    n = 2 * e - j
                }
                if(n > g && n > e) {
                    n = Ca(g, e);
                    j = 2 * e - n
                } else if(n < g && n < e) {
                    n = ab(g, e);
                    j = 2 * e - n
                }
                c.rightContX =
                    k;
                c.rightContY = n
            }
            if(b) {
                c = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, i || d, j || e, d, e];
                f.rightContX = f.rightContY = null
            } else c = [Wa, d, e];
            return c
        }
    });
    sb.spline = Ja;
    Ja = wb(Ja, {
        type: "areaspline"
    });
    sb.areaspline = Ja;
    var Yc = wb(lb, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color",
            r: "borderRadius"
        },
        init: function() {
            lb.prototype.init.apply(this, arguments);
            var a = this,
                c = a.chart;
            c.hasColumn = true;
            c.hasRendered && t(c.series, function(b) {
                if(b.type == a.type) b.isDirty = true
            })
        },
        translate: function() {
            var a = this,
                c = a.chart,
                b = 0,
                d = a.xAxis.reversed,
                e = a.xAxis.categories,
                f = {},
                g, i;
            lb.prototype.translate.apply(a);
            t(c.series, function(N) {
                if(N.type == a.type) {
                    if(N.options.stacking) {
                        g = N.stackKey;
                        if(f[g] === Oa) f[g] = b++;
                        i = f[g]
                    } else i = b++;
                    N.columnIndex = i
                }
            });
            var j = a.options,
                k = a.data,
                n = a.closestPoints;
            c = $a(k[1] ? k[n].plotX - k[n - 1].plotX : c.plotSizeX / (e ? e.length : 1));
            e = c * j.groupPadding;
            n = (c - 2 * e) / b;
            var z = j.pointWidth,
                K = M(z) ? (n - z) / 2 : n * j.pointPadding,
                ja = y(z, n - 2 * K),
                $ = K + (e + ((d ? b - a.columnIndex : a.columnIndex) ||
                    0) * n - c / 2) * (d ? -1 : 1),
                ga = a.yAxis.getThreshold(j.threshold || 0),
                u = y(j.minPointLength, 5);
            t(k, function(N) {
                var ka = N.plotY,
                    Na = N.yBottom || ga,
                    ca = N.plotX + $,
                    na = dd(ab(ka, Na)),
                    Za = dd(Ca(ka, Na) - na),
                    jb;
                if($a(Za) < u) {
                    if(u) {
                        Za = u;
                        na = $a(na - ga) > u ? Na - u : ga - (ka <= ga ? u : 0)
                    }
                    jb = na - 3
                }
                oa(N, {
                    barX: ca,
                    barY: na,
                    barW: ja,
                    barH: Za
                });
                N.shapeType = "rect";
                N.shapeArgs = {
                    x: ca,
                    y: na,
                    width: ja,
                    height: Za,
                    r: j.borderRadius
                };
                N.trackerArgs = M(jb) && va(N.shapeArgs, {
                    height: Ca(6, Za + 3),
                    y: jb
                })
            })
        },
        getSymbol: function() {},
        drawGraph: function() {},
        drawPoints: function() {
            var a =
                this,
                c = a.options,
                b = a.chart.renderer,
                d, e;
            t(a.data, function(f) {
                var g = f.plotY;
                if(g !== Oa && !isNaN(g)) {
                    d = f.graphic;
                    e = f.shapeArgs;
                    if(d) {
                        Qc(d);
                        d.animate(e)
                    } else f.graphic = b[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : db]).add(a.group).shadow(c.shadow)
                }
            })
        },
        drawTracker: function() {
            var a = this,
                c = a.chart,
                b = c.renderer,
                d, e, f = +new Date,
                g = a.options.cursor,
                i = g && {
                    cursor: g
                },
                j;
            t(a.data, function(k) {
                e = k.tracker;
                d = k.trackerArgs || k.shapeArgs;
                if(k.y !== null)
                    if(e) e.attr(d);
                    else k.tracker = b[k.shapeType](d).attr({
                        isTracker: f,
                        fill: Ud,
                        visibility: a.visible ? Bb : tb,
                        zIndex: 1
                    }).on(Gb ? "touchstart" : "mouseover", function(n) {
                        j = n.relatedTarget || n.fromElement;
                        c.hoverSeries != a && ya(j, "isTracker") != f && a.onMouseOver();
                        k.onMouseOver()
                    }).on("mouseout", function(n) {
                        if(!a.options.stickyTracking) {
                            j = n.relatedTarget || n.toElement;
                            ya(j, "isTracker") != f && a.onMouseOut()
                        }
                    }).css(i).add(c.trackerGroup)
            })
        },
        animate: function(a) {
            var c = this,
                b = c.data;
            if(!a) {
                t(b, function(d) {
                    var e = d.graphic;
                    if(e) {
                        e.attr({
                            height: 0,
                            y: c.yAxis.translate(0, 0, 1)
                        });
                        e.animate({
                            height: d.barH,
                            y: d.barY
                        }, c.options.animation)
                    }
                });
                c.animate = null
            }
        },
        remove: function() {
            var a = this,
                c = a.chart;
            c.hasRendered && t(c.series, function(b) {
                if(b.type == a.type) b.isDirty = true
            });
            lb.prototype.remove.apply(a, arguments)
        }
    });
    sb.column = Yc;
    Ja = wb(Yc, {
        type: "bar",
        init: function(a) {
            a.inverted = this.inverted = true;
            Yc.prototype.init.apply(this, arguments)
        }
    });
    sb.bar = Ja;
    Ja = wb(lb, {
        type: "scatter",
        translate: function() {
            var a = this;
            lb.prototype.translate.apply(a);
            t(a.data, function(c) {
                c.shapeType = "circle";
                c.shapeArgs = {
                    x: c.plotX,
                    y: c.plotY,
                    r: a.chart.options.tooltip.snap
                }
            })
        },
        drawTracker: function() {
            var a = this,
                c = a.options.cursor,
                b = c && {
                    cursor: c
                },
                d;
            t(a.data, function(e) {
                (d = e.graphic) && d.attr({
                    isTracker: true
                }).on("mouseover", function() {
                    a.onMouseOver();
                    e.onMouseOver()
                }).on("mouseout", function() {
                    a.options.stickyTracking || a.onMouseOut()
                }).css(b)
            })
        },
        cleanData: function() {}
    });
    sb.scatter = Ja;
    Ja = wb(xc, {
        init: function() {
            xc.prototype.init.apply(this, arguments);
            var a = this,
                c;
            oa(a, {
                visible: a.visible !== false,
                name: y(a.name, "Slice")
            });
            c = function() {
                a.slice()
            };
            Ma(a, "select", c);
            Ma(a, "unselect", c);
            return a
        },
        setVisible: function(a) {
            var c = this.series.chart,
                b = this.tracker,
                d = this.dataLabel,
                e = this.connector,
                f;
            f = (this.visible = a = a === Oa ? !this.visible : a) ? "show" : "hide";
            this.group[f]();
            b && b[f]();
            d && d[f]();
            e && e[f]();
            this.legendItem && c.legend.colorizeItem(this, a)
        },
        slice: function(a, c, b) {
            var d = this.series.chart,
                e = this.slicedTranslation;
            Kb(b, d);
            y(c, true);
            a = this.sliced = M(a) ? a : !this.sliced;
            this.group.animate({
                translateX: a ? e[0] : d.plotLeft,
                translateY: a ? e[1] : d.plotTop
            })
        }
    });
    Ja =
        wb(lb, {
            type: "pie",
            isCartesian: false,
            pointClass: Ja,
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            getColor: function() {
                this.initialColor = Hb
            },
            animate: function() {
                var a = this;
                t(a.data, function(c) {
                    var b = c.graphic;
                    c = c.shapeArgs;
                    var d = -Ub / 2;
                    if(b) {
                        b.attr({
                            r: 0,
                            start: d,
                            end: d
                        });
                        b.animate({
                            r: c.r,
                            start: c.start,
                            end: c.end
                        }, a.options.animation)
                    }
                });
                a.animate = null
            },
            translate: function() {
                var a = 0,
                    c = -0.25,
                    b = this.options,
                    d = b.slicedOffset,
                    e = d + b.borderWidth,
                    f = b.center,
                    g = this.chart,
                    i = g.plotWidth,
                    j = g.plotHeight,
                    k, n, z, K = this.data,
                    ja = 2 * Ub,
                    $, ga = ab(i, j),
                    u, N, ka, Na = b.dataLabels.distance;
                f.push(b.size, b.innerSize || 0);
                f = jc(f, function(ca, na) {
                    return (u = /%$/.test(ca)) ? [i, j, ga, ga][na] * pa(ca) / 100 : ca
                });
                this.getX = function(ca, na) {
                    z = Ra.asin((ca - f[1]) / (f[2] / 2 + Na));
                    return f[0] + (na ? -1 : 1) * ub(z) * (f[2] / 2 + Na)
                };
                this.center = f;
                t(K, function(ca) {
                    a += ca.y
                });
                t(K, function(ca) {
                    $ = a ? ca.y / a : 0;
                    k = c * ja;
                    c += $;
                    n = c * ja;
                    ca.shapeType = "arc";
                    ca.shapeArgs = {
                        x: f[0],
                        y: f[1],
                        r: f[2] / 2,
                        innerR: f[3] / 2,
                        start: k,
                        end: n
                    };
                    z = (n + k) / 2;
                    ca.slicedTranslation =
                        jc([ub(z) * d + g.plotLeft, yb(z) * d + g.plotTop], T);
                    N = ub(z) * f[2] / 2;
                    ka = yb(z) * f[2] / 2;
                    ca.tooltipPos = [f[0] + N * 0.7, f[1] + ka * 0.7];
                    ca.labelPos = [f[0] + N + ub(z) * Na, f[1] + ka + yb(z) * Na, f[0] + N + ub(z) * e, f[1] + ka + yb(z) * e, f[0] + N, f[1] + ka, Na < 0 ? "center" : z < ja / 4 ? "left" : "right", z];
                    ca.percentage = $ * 100;
                    ca.total = a
                });
                this.setTooltipPoints()
            },
            render: function() {
                this.getAttribs();
                this.drawPoints();
                this.options.enableMouseTracking !== false && this.drawTracker();
                this.drawDataLabels();
                this.options.animation && this.animate && this.animate();
                this.isDirty =
                    false
            },
            drawPoints: function() {
                var a = this.chart,
                    c = a.renderer,
                    b, d, e;
                t(this.data, function(f) {
                    d = f.graphic;
                    e = f.shapeArgs;
                    if(!f.group) {
                        b = f.sliced ? f.slicedTranslation : [a.plotLeft, a.plotTop];
                        f.group = c.g("point").attr({
                            zIndex: 5
                        }).add().translate(b[0], b[1])
                    }
                    if(d) d.animate(e);
                    else f.graphic = c.arc(e).attr(f.pointAttr[db]).add(f.group);
                    f.visible === false && f.setVisible(false)
                })
            },
            drawDataLabels: function() {
                var a = this.data,
                    c, b = this.chart,
                    d = this.options.dataLabels,
                    e = y(d.connectorPadding, 10),
                    f = y(d.connectorWidth, 1),
                    g,
                    i, j = d.distance > 0,
                    k, n, z = this.center[1],
                    K = [
                        [],
                        [],
                        [],
                        []
                    ],
                    ja, $, ga, u, N, ka, Na, ca = 4,
                    na;
                lb.prototype.drawDataLabels.apply(this);
                t(a, function(Za) {
                    var jb = Za.labelPos[7];
                    K[jb < 0 ? 0 : jb < Ub / 2 ? 1 : jb < Ub ? 2 : 3].push(Za)
                });
                K[1].reverse();
                K[3].reverse();
                for(Na = function(Za, jb) {
                        return Za.y > jb.y
                    }; ca--;) {
                    a = 0;
                    c = [].concat(K[ca]);
                    c.sort(Na);
                    for(na = c.length; na--;) c[na].rank = na;
                    for(u = 0; u < 2; u++) {
                        n = (ka = ca % 3) ? 9999 : -9999;
                        N = ka ? -1 : 1;
                        for(na = 0; na < K[ca].length; na++) {
                            c = K[ca][na];
                            if(g = c.dataLabel) {
                                i = c.labelPos;
                                ga = Bb;
                                ja = i[0];
                                $ = i[1];
                                k || (k = g &&
                                    g.getBBox().height);
                                if(j)
                                    if(u && c.rank < a) ga = tb;
                                    else if(!ka && $ < n + k || ka && $ > n - k) {
                                    $ = n + N * k;
                                    ja = this.getX($, ca > 1);
                                    if(!ka && $ + k > z || ka && $ - k < z)
                                        if(u) ga = tb;
                                        else a++
                                }
                                if(c.visible === false) ga = tb;
                                if(ga == Bb) n = $;
                                if(u) {
                                    g.attr({
                                        visibility: ga,
                                        align: i[6]
                                    })[g.moved ? "animate" : "attr"]({
                                        x: ja + d.x + ({
                                            left: e,
                                            right: -e
                                        } [i[6]] || 0),
                                        y: $ + d.y
                                    });
                                    g.moved = true;
                                    if(j && f) {
                                        g = c.connector;
                                        i = [Wa, ja + (i[6] == "left" ? 5 : -5), $, Aa, ja, $, Aa, i[2], i[3], Aa, i[4], i[5]];
                                        if(g) {
                                            g.animate({
                                                d: i
                                            });
                                            g.attr("visibility", ga)
                                        } else c.connector = g = this.chart.renderer.path(i).attr({
                                            "stroke-width": f,
                                            stroke: d.connectorColor || "#606060",
                                            visibility: ga,
                                            zIndex: 3
                                        }).translate(b.plotLeft, b.plotTop).add()
                                    }
                                }
                            }
                        }
                    }
                }
            },
            drawTracker: Yc.prototype.drawTracker,
            getSymbol: function() {}
        });
    sb.pie = Ja;
    rb.Highcharts = {
        Chart: Hd,
        dateFormat: Kc,
        pathAnim: Xc,
        getOptions: function() {
            return Pa
        },
        numberFormat: Gd,
        Point: xc,
        Renderer: Qd,
        seriesTypes: sb,
        setOptions: function(a) {
            Pa = va(Pa, a);
            Bd();
            return Pa
        },
        Series: lb,
        addEvent: Ma,
        createElement: fb,
        discardElement: Dc,
        css: Ua,
        each: t,
        extend: oa,
        map: jc,
        merge: va,
        pick: y,
        extendClass: wb,
        version: "2.1.1"
    }
})();