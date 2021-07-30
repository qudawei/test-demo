/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-06-27 22:35:19
 * @LastEditors: David Qu
 * @LastEditTime: 2021-07-26 19:28:09
 */
(function (l) {
    var e = l, q = document, s = e.location; if (!e.TJ58) {
        e.TJ58 = !0; null == e.String.prototype.trim && (e.String.prototype.trim = function () { return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "") }); e.TJ58Obj = {}; var d = {
            curURL: s.href, referrer: q.referrer, protocol: s.protocol, window_size: q.documentElement.clientWidth + "x" + q.documentElement.clientHeight, screen_size: e.screen.width + "," + e.screen.height, domain: function () {
                var a = s.host.toLowerCase(), c = /.*?([^\.]+\.(com|org|net|biz|edu|cc)(\.[^\.]+)?)/; return c.test(a) ?
                    "." + a.replace(c, "$1") : ""
            }(), navigation_type: function () { var a = "-1"; try { a = e.performance.navigation.type } catch (c) { return "-1" } return a }(), setCookie: function () { if (!q.cookie) return !1; var a = new Date; 2 < arguments.length ? a.setTime(a.getTime() + 864E5 * arguments[2]) : a.setTime(a.getTime() + 18E5); 2 <= arguments.length && (q.cookie = arguments[0] + "=" + escape(arguments[1]) + "; expires=" + a.toGMTString() + "; domain=" + d.domain + "; path=/") }, getCookie: function (a) {
                if (!q.cookie) return ""; var c; return (c = q.cookie.match(RegExp("(^| )" +
                    a + "=([^;]*)(;|$)"))) ? unescape(c[2]) : ""
            }, ajaxsend: function (a) { (new Image).src = a }, getGTID: function (a, c, b) {
                function e(a, c, b) { a = ("" + a).length < c ? (Array(c + 1).join("0") + a).slice(-c) : "" + a; return -1 == b ? a : a.substring(0, b) + "-" + a.substring(b) } var f = { home: "1", index: "2", list: "3", detail: "4", post: "5", special: "6" }; a = f[a] ? parseInt(f[a]).toString(16) : 0; c = c.split(","); c = c[c.length - 1]; c = parseInt(c) ? parseInt(c).toString(16) : 0; b = b.split(","); b = b[b.length - 1]; b = parseInt(b) ? parseInt(b).toString(16) : 0; f = (13).toString(16); return "llpccccc-tttt-txxx-xxxx-xxxxxxxxxxxx".replace(/x/g,
                    function (a) { return (16 * Math.random() | 0).toString(16) }).replace(/ccccc/, e(c, 5, -1)).replace(/tttt-t/, e(b, 5, 4)).replace(/p/, e(a, 1, -1)).replace(/ll/, e(f, 2, -1))
            }, setLocalStorage: function (a, c) { try { e.localStorage && e.localStorage.setItem(a, c) } catch (b) { } }, getLocalStorage: function (a) { try { return e.localStorage ? e.localStorage.getItem(a) : "" } catch (c) { return "" } }, getUUID: function (a) {
                var c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) { var c = 16 * e.Math.random() | 0; return ("x" == a ? c : c & 3 | 8).toString(16) }),
                c = this.getCookie(a) || this.getLocalStorage(a) || c; this.setCookie(a, c, 365); this.setLocalStorage(a, c); return c
            }, getRandom: function () { return e.Math.random() }, bindElem: function (a, c, b) { if (e.$ && "string" == typeof a && "string" == typeof c && "function" == typeof b) if ("function" === typeof $(q).on) $(q).on(c, a, b); else "function" === typeof $(q).delegate ? $(q).delegate(a, c, b) : "function" === typeof $(a).bind && $(a).bind(c, b) }, loadScript: function (a, c) {
                try {
                    var b = q.createElement("script"); b.type = "text/javascript"; b.readyState ? b.onreadystatechange =
                        function () { if ("loaded" == b.readyState || "complete" == b.readyState) b.onreadystatechange = null, c && c() } : b.onload = function () { c && c() }; b.src = a; q.body.appendChild(b)
                } catch (e) { }
            }, xxzlLoadJs: function (a) { function c() { var c = q.createElement("script"); c.src = a; q.body.appendChild(c) } e.addEventListener ? e.addEventListener("load", c, !1) : e.attachEvent ? e.attachEvent("onload", c) : e.onload = c }
        }, g = {
            config: {
                trackLog: {
                    server: "tracklog.58.com/m/empty.js.gif", allParams: "site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "),
                    uniqParams: ["tag", "rand_id"]
                }, loadMorePageLog: { server: "tracklog.58.com/m/empty.js.gif", allParams: "site_name tag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL EventTag rand_id".split(" "), uniqParams: ["tag", "EventTag", "rand_id"] }, listShowLog: { server: "tracklog.58.com/Mv1/listshow/empty.js.gif", allParams: "tag bangbangid referrer site_name info_data trackURL rand_id".split(" "), uniqParams: ["tag", "info_data", "rand_id"] }, listClickLog: {
                    server: "tracklog.58.com/Mv1/listclick/empty.js.gif",
                    allParams: "tag bangbangid referrer site_name info_data trackURL ClickID rand_id".split(" "), uniqParams: ["tag", "info_data", "rand_id"]
                }, clickLog: { server: "tracklog.58.com/m/click/empty.js.gif", allParams: "site_name tag from trackURL ClickID bangbangid referrer rand".split(" "), uniqParams: ["tag", "from", "rand"] }, diaTrackLog: { server: "dialog.58.com/transfer", allParams: "DIATag referrer post_count _trackParams userid smsc window_size _ga_utma trackURL rand_id".split(" "), uniqParams: ["DIATag", "rand_id"] }, diaClickLog: {
                    server: "dialog.58.com/transfer",
                    allParams: "DIATag from trackURL ClickID bangbangid referrer rand".split(" "), uniqParams: ["DIATag", "from", "rand"]
                }, diaShowLog: { server: "dialog.58.com/transfer", allParams: "DIATag trackURL ClickID bangbangid referrer rand".split(" "), uniqParams: ["DIATag", "rand"] }, gdtTrackLog: { server: "gdt.cm.58.com/gdtcm", allParams: ["city", "cate", "plat"], uniqParams: ["city", "plat"] }, gdtTrackLog2: { server: "gdtcm.58.com/gdtcm", allParams: ["city", "cate", "plat"], uniqParams: ["city", "plat"] }
            }, filterList: function (a) {
                var c = ".58.com.cn portal.58.com faw-vw-dasweltauto.58.com 5858.com lieche.58.com dict.58.com/xiaoqu about.58.com m.58.com/city.html lieche.m.58.com".split(" "),
                b; for (b in c) if (-1 !== a.indexOf(c[b])) return "YES"; return "NO"
            }, isRealIndexPage: function (a) {
                var c = [/^http:\/\/m.58.com\/[^\/]*\/job.shtml/, /^http:\/\/m.58.com\/[^\/]*\/house.shtml/, /^http:\/\/m.58.com\/[^\/]*\/car.shtml/, /^http:\/\/m.58.com\/[^\/]*\/sale.shtml/, /^http:\/\/m.58.com\/[^\/]*\/jianzhi.shtml/, /^http:\/\/m.58.com\/[^\/]*\/pets.shtml/, /^http:\/\/m.58.com\/[^\/]*\/shenghuo.shtml/, /^http:\/\/m.58.com\/[^\/]*\/bendishenghuo.shtml/, /^http:\/\/m.58.com\/[^\/]*\/bendishangwu.shtml/, /^http:\/\/m.58.com\/[^\/]*\/huangye.shtml/],
                b; for (b in c) if (a.match(c[b])) return "YES"; return "NO"
            }, getBaseInfo: function () {
                var a = l.site_name || "M58", c = l.encodeURIComponent(d.referrer), b = d.curURL, k = d.getUUID("58tj_uuid"), f = d.getCookie("bangbangid"), F = d.window_size, w = d.navigation_type, g = d.screen_size, m = l.____json4fe ? l.____json4fe : {}, p = m._trackPagetype || "", n = m._trackURL || "", h = m._trackParams || [], q = m.GA_pageview || "", s = m.infoid || "", R = m.userid || "", S = m.smsc || "", m = m.sid || "", x = l._trackURL || n || "NA", u = {}; try {
                    "NA" !== x && (u = "string" == typeof x ? JSON.parse(x.replace(/'/g,
                        '"')) : x)
                } catch (Z) { u = {} } var p = u.pagetype || p || l.page_type || "NA", n = u.post_count || l.post_count || -1, q = u.Ga_pageview || q || "", B = u.cate || "", T = "" === B ? "" : B.split(",")[0], U = "" === B && -1 === B.indexOf(",") ? "" : B.split(",")[1], H = u.area || "", P = "" === H ? "" : H.split(",")[0], V = u.actiontype || "", Q = d.getGTID(p, B, H), W = u.ROI || "", u = u.teemo || "", X = d.getCookie("br58") || "", M = d.getCookie("myLat") || "", r = d.getCookie("myLon") || "", M = M + "_" + r, r = e._trackParams || h || [], C = [], h = ""; if (r instanceof Array) {
                    for (var h = 0, N = r.length; h < N; h++)r[h] && r[h].I &&
                        r[h].V && "string" === typeof r[h].V && C.push(r[h].I + ":" + r[h].V.replace(/\|/g, "*")); h = encodeURIComponent(C.join("@@"))
                } var C = (r = d.curURL.match(/[\?&]iuType=[a-z]*_[0-9]*/)) ? r[0].split("=")[1].split("_") : ["", ""], r = C[0], C = C[1], N = d.getCookie("als"), O = d.getCookie("utm_source"), Y = d.getCookie("utm_campaign"), I = d.getCookie("spm"), y, G, J; "" != d.getCookie("new_session") ? (y = d.getCookie("init_refer"), G = "0") : (y = l.encodeURIComponent(d.referrer), G = "1"); J = "" != d.getCookie("new_uv") ? parseInt(d.getCookie("new_uv")) + ("0" ==
                    G ? 0 : 1) : 1; d.setCookie("new_session", G); d.setCookie("new_uv", J, 365); var t = !1, v = d.referrer.split("/")[2] || "", D = d.curURL.split("/")[2] || "", z = this.getValByUrl(d.curURL, "utm_source"), A = this.getValByUrl(d.curURL, "spm"), K = d.getCookie("qz_gdt"), E = this.getValByUrl(d.curURL, "qz_gdt"); "NA" == E || "" == E ? (E = !1, "NA" == A || "" == A ? v && -1 === v.indexOf(".58.com") && -1 === v.indexOf(".5858.com") && -1 === v.indexOf(".58cdn.com.cn") && (E = !0) : ("NA" == A ? "" : A) != I && (E = !0), E && (K = "")) : K = E; d.setCookie("qz_gdt", K); if ("NA" != this.getValByUrl(d.curURL,
                        "-15") || D && -1 != D.indexOf("luna.58.com")) t = "NA"; d.referrer || "NA" == z && "NA" == A ? d.referrer || "NA" != z || "NA" != A || "1" !== G ? v && -1 === v.indexOf(".58.com") && -1 === v.indexOf(".5858.com") && -1 === v.indexOf(".58cdn.com.cn") && (y = l.encodeURIComponent(d.referrer), t = "NA" == t ? !1 : !0) : (y = "", t = "NA" == t ? !1 : !0) : (y = "", t = "NA" == t ? !1 : !0); t && "NA" != t && (O = "NA" === z ? "" : z, I = "NA" === A ? "" : A); t = navigator.userAgent; v = y.split("?"); -1 != t.indexOf("baiduboxapp") && (y = v.map(function (a, c, b) {
                            return a.split("&").filter(function (a) {
                                a = a.split("="); return 2 ==
                                    a.length && "target" == a[0] ? !1 : !0
                            }).join("&")
                        }).join("?")); d.setCookie("utm_source", O); d.setCookie("spm", I); d.setCookie("init_refer", y); var t = "1.1.1.1.1." + J, v = d.getCookie("bbsession_uid"), D = [], z = x.indexOf("{"), w = { GTID: Q, infoid: s, infotype: r, usertype: C, als: N, utm_source: O, utm_campaign: Y, spm: I, qz_gdt: K, br58: X, coords: M, new_session: G, init_refer: y, new_uv: J, UUID: k, bangbangid: v, navtype: w, sc: g, sid: m }, L; for (L in w) w.hasOwnProperty(L) && D.push("'" + L + "':'" + w[L] + "'"); D.join(","); x = "NA" !== x && -1 !== z ? x.substring(0, z +
                            1) + D + "," + x.substring(z + 1) : "{" + D + "}"; return { site_name: a, referrer: c, UUID: k, bangbangid: f, pagetype: p, post_count: n, cate: B, cate1: T, cate2: U, area: H, area1: P, city: P, actiontype: V, GTID: Q, ClickID: 1, ROI: W, curURL: b, _trackParams: h, userid: R, smsc: S, window_size: F, trackURL: x, Ga_pageview: q, _ga_utma: t, ClickIDPlus: function () { this.ClickID += 1 }, curIndex: 0, curPageNum: 1, teemo: u }
            }, getValByUrl: function (a, c) { var b; b = a.match(RegExp("[&?]" + c + "=([^&|^#]*)")); return b instanceof Array ? b[1] : "NA" }, sendLog: function (a, c) {
                var b = this.baseInfo,
                k = this.config[a]; if (a && k && c && "object" === typeof c) { for (var f = [], F = k.allParams, w = 0, g = F.length; w < g; w++)f.push(F[w] + "=" + (c[F[w]] || b[F[w]] || "")); b = l.location.href; 600 < b.length && (b = b.substr(0, 600)); b = e.encodeURIComponent(b); f.push("pageurl=" + b); d.ajaxsend(d.protocol + "//" + k.server + "?" + f.join("&")) }
            }, trackLog: function () {
                try { if ("string" == typeof d.curURL && (-1 != l.decodeURI(d.curURL).replace(/\s+/g, "").indexOf("</a>src") || -1 != l.decodeURIComponent(d.curURL).replace(/\s+/g, "").indexOf("</a>src"))) return } catch (a) { } this.sendLog("trackLog",
                    { tag: "pvstatall", rand_id: d.getRandom() })
            }, clickLog: function (a) { var c = "", c = null != a && "from=" === a.substring(0, 5) ? a.replace("from=", "") : "default&" + a; this.sendLog("clickLog", { tag: "pvsiters", from: c, rand: d.getRandom() }); setTimeout("GCIDPlus()", 300) }, listClickLog: function () {
                var a = this, c = this.baseInfo; if (e.$ && "list" === c.pagetype && "NA" != c.trackURL) {
                    var b = function (b) {
                        if (b) {
                            var e = $(b).parents("[logr]"); b = e.attr("logr"); var k = "", k = ""; if (b) {
                                var g = []; b = b.split("_"); g.push(b[0], b[1], b[2], b[3]); if (4 < b.length) var m =
                                    b[b.length - 1], m = m.replace("ses^", "ses:"), k = k + m; m = e.attr("pos"); k += m ? "@pos:" + m : ""; if ("9224" == c.cate1 || "13941" == c.cate1) m = e.attr("_pos"), e = e.attr("sortid"), k = k + (m ? "@npos:" + m : "") + (e ? "@sortid:" + e : ""); "" != k && (0 === k.indexOf("@") && (k = k.substring(1)), g.push(k)); k = g.join("_"); "NO" == a.filterList(c.curURL) && -1 != c.curURL.indexOf(".58.com") && (e = $(this).attr("href") || "#", -1 != e.indexOf("javascript:") || "#" == e.substring(0, 1) || "NO" != a.filterList(e) || "/" != e.substring(0, 1) && -1 == e.indexOf(".58.com") || e.match(/[\?&]iuType=/) ||
                                        $(this).attr("href", e.trim() + (-1 == e.indexOf("?") ? "?" : "&") + "iuType=" + b[0] + "_" + b[1])); a.sendLog("listClickLog", { tag: "mlistclick", info_data: k, rand_id: d.getRandom() }); setTimeout("GCIDPlus()", 300)
                            }
                        }
                    }, k = $("[tongji_label=listclick]"); k && 0 < k.length ? d.bindElem("[logr] [tongji_label=listclick]", "click", function () { b($(this)) }) : d.bindElem("li[logr] a", "click", function () { var a = $(this).attr("class"); "function" == typeof $(this).parents && "diyu_sale" != a && "company_job" != a && b($(this)) })
                }
            }, oldListClickLog: function (a) {
                this.sendLog("oldListClickLog",
                    { tag: "mlistclick", bi_val_pos: a.replace("&bi_val_pos=", ""), rand: d.getRandom() }); setTimeout("GCIDPlus()", 300)
            }, listShowLog: function () {
                var a = this.baseInfo, c = a.cate1, b = a.trackURL.length + a.referrer.length, k = []; if (e.$ && "list" === a.pagetype && "function" == typeof $("li[logr]").attr) {
                    for (var f = $("li[logr]"), g = f.length, q = a.curPageNum, l = 0, m = a.curIndex; m < g; m++) {
                        var p = $(f[m]), l = p.attr("logr"), n = p.attr("pagenum"); if (1 === q || q === n) {
                            if (l) {
                                var l = [], h = p.attr("logr").split("_"), n = ""; l.push(h[0], h[1], h[2], h[3]); 4 < h.length &&
                                    (h = h[h.length - 1], h = h.replace("ses^", "ses:"), n += h); h = p.attr("pos"); n += h ? "@pos:" + h : ""; if ("9224" === c || "13941" === c) h = p.attr("_pos"), p = p.attr("sortid"), n += h ? "@npos:" + h : "", n += p ? "@sortid:" + p : ""; "" != n && (0 === n.indexOf("@") && (n = n.substring(1)), l.push(n)); p = l.join("_")
                            } else { var l = p.attr("post_type"), n = p.attr("enum_user"), h = p.attr("uid"), s = p.attr("infoid"), p = l + "_" + n + "_" + h + "_" + s; s && "function" === typeof $("[infoid]").index && (h = $("[infoid]").index($(this)) + 1, p += "_@pos:" + h) } l = p.length; n = k.join(","); 4096 < b + l + n.length &&
                                (this.sendLog("listShowLog", { tag: "mlistshow", info_data: n, rand_id: d.getRandom() }), k = []); k.push(p)
                        } else if (!(q > n)) break
                    } a.curIndex = m; 0 != k.length && this.sendLog("listShowLog", { tag: "mlistshow", info_data: k.join(","), rand_id: d.getRandom() })
                }
            }, bindTongji_tag: function () { if (e.$) { var a = this; d.bindElem("[tongji_tag]", "click", function () { var c = $(this).attr("tongji_tag"), b = $(this).text().trim(); a.clickLog("from=" + c + "&text=" + encodeURIComponent(b) + "&tongji_type=tongji_tag") }) } }, bindTongji_id: function () {
                if (e.$) {
                    var a =
                        this; d.bindElem("[tongji_id]", "click", function (c) { var b = c.srcElement ? c.srcElement : c.target; "A" == b.tagName.toUpperCase() && (c = $(b).attr("href") || "#", b = $(b).text(), -1 == c.indexOf("javascript:") && "#" != c.substring(0, 1) && a.clickLog("from=" + $(this).attr("tongji_id") + "&text=" + encodeURIComponent(b) + "&to=" + encodeURIComponent(c) + "&tongji_type=tongji_id")) })
                }
            }, diaShowLog: function (a) { }, loadMorePageLog: function (a) {
                var c = this.baseInfo; if (a && -1 != a.indexOf("pagenum=")) {
                    var b = a.split("=", -1)[1]; c.trackURL = c.trackURL.replace(/'pagenum':[^,}&]*/,
                        "'pagenum':'" + b + "'"); c.curPageNum = b
                } this.sendLog("loadMorePageLog", { tag: "pvstatall", EventTag: "loadMorePage&" + a, rand_id: d.getRandom() }); this.listShowLog()
            }, bindAlsTag: function () { if (!d.getCookie("als") && e.$ && "function" === typeof $("body").one) $("body").one("mouseover", function () { d.setCookie("als", "0", 365) }); d.getCookie("isSpider") && d.setCookie("isSpider", "", 0) }, bindHomeHeatMap: function () {
                var a = this.baseInfo; if (e.$ && "home" === a.pagetype && "m_zhuzhan" === a.actiontype) for (var c = $("[tongji_tag]"), b = 0; b < c.length; b++) {
                    var d =
                        c[b], f = $(d).attr("href") || "#", g = $(d).attr("tongji_tag") || "NA"; -1 == f.indexOf("javascript:") && "#" != f.substring(0, 1) && (f = f.match(/[\?&]58hm=[^&]*/) ? f.replace(/58hm=[^&]*/, "58hm=" + g) : f.trim() + (-1 == f.indexOf("?") ? "?" : "&") + "58hm=" + g, f = f.match(/[\?&]58cid=[^&]*/) ? f.replace(/58cid=[^&]*/, "58cid=" + a.area1) : f.trim() + (-1 == f.indexOf("?") ? "?" : "&") + "58cid=" + a.area1, $(d).attr("href", f))
                }
            }, bindIndexHeatMap: function () {
                var a = this.baseInfo; if (e.$ && "index" === a.pagetype && "m_zhuzhan" === a.actiontype && "YES" == this.isRealIndexPage(a.curURL)) for (var c =
                    $("[tongji_tag]"), b = 0; b < c.length; b++) { var d = c[b], f = $(d).attr("href") || "#", g = $(d).attr("tongji_tag") || "NA"; -1 == f.indexOf("javascript:") && "#" != f.substring(0, 1) && (f = f.match(/[\?&]58ihm=[^&]*/) ? f.replace(/58ihm=[^&]*/, "58ihm=" + g) : f.trim() + (-1 == f.indexOf("?") ? "?" : "&") + "58ihm=" + g, f = f.match(/[\?&]58cid=[^&]*/) ? f.replace(/58cid=[^&]*/, "58cid=" + a.area1) : f.trim() + (-1 == f.indexOf("?") ? "?" : "&") + "58cid=" + a.area1, $(d).attr("href", f)) }
            }, bindAddGTIDtoURL: function () {
                var a = this, c = this.baseInfo; e.$ && d.bindElem("a", "click",
                    function () {
                        if ("NO" == a.filterList(c.curURL) && -1 != c.curURL.indexOf(".58.com")) {
                            var b = $(this).attr("href") || "#"; if (-1 == b.indexOf("javascript:") && "#" != b.substring(0, 1) && "NO" == a.filterList(b) && ("/" == b.substring(0, 1) || -1 != b.indexOf(".58.com"))) if (b.match(/[\?&]ClickID=\d*/)) $(this).attr("href", b.replace(/ClickID=\d*/, "ClickID=" + c.ClickID)); else {
                                var e = b.indexOf("?"); -1 != e && -1 != b.substring(e).indexOf("statmark=t") && -1 != b.substring(e).indexOf("#") ? (e = b.indexOf("statmark=t"), $(this).attr("href", b.substring(0,
                                    e + 10) + "&PGTID=" + c.GTID + "&ClickID=" + c.ClickID + b.substring(e + 10))) : $(this).attr("href", b.trim() + (-1 == e ? "?" : "&") + "PGTID=" + c.GTID + "&ClickID=" + c.ClickID)
                            }
                        }
                    })
            }, insertMiGuan: function () {
                try {
                    var a = "default"; switch (this.baseInfo.cate1) { case "9224": case "9225": case "13941": case "13952": a = "yewu"; break; case "1": a = "ershoufang"; break; case "5": a = "shouji"; break; case "832": a = "dog"; break; case "4": a = "ershouche"; break; default: a = "shenghuo" }var c = Math.ceil(1E14 * Math.random()), b = document.getElementsByTagName("body")[0],
                        e = document.createElement("div"); e.id = "addInfo"; e.style.display = "none"; var f = document.createElement("a"); f.href = d.protocol + "//tracklog.58.com/detail/m/" + a + "/" + c + "x.shtml"; f.text = "\u63a8\u8350\u4fe1\u606f"; e.appendChild(f); b.appendChild(e)
                } catch (g) { }
            }, bindUndefinedClickLog: function () {
                if (e.limited_show) { var a = limited_show.replace(/\[/g, "").replace(/\]/g, "").trim().split(","), c; for (c in a) a[c].trim() && this.clickLog(a[c].trim()) } if (e._statisArr) for (a = e._statisArr; a instanceof Array && 0 < a.length;)c = a.shift(),
                    c instanceof Array ? this.clickLog("from=" + c[0] + "&sumval=" + c[1]) : this.clickLog(c)
            }, performanceLog: function () {
                var a = this.baseInfo, c = !1, b = "home index list special post detail tongzhen".split(" "), d; for (d in b) if (a.pagetype == b[d]) { c = !0; break } if (c && e.performance && e.performance.timing) {
                    var f = e.onload; l.onload = function () {
                        function a(c, b, e) { return "number" === typeof c && "number" === typeof b ? (c -= b, c = Math.floor(0 > c ? -1 : c), -1 == c && e ? e : c) : -1 } function c(b) {
                            var d = e.performance.timing, d = {
                                loadPage: 0 == d.navigationStart ? a(d.loadEventEnd,
                                    d.fetchStart, b) : a(d.loadEventEnd, d.navigationStart, b), domReady: a(d.domComplete, d.responseEnd, b), redirect: a(d.redirectEnd, d.redirectStart, b), lookupDomain: a(d.domainLookupEnd, d.domainLookupStart, b), ttfb: 0 == d.navigationStart ? a(d.responseStart, d.fetchStart, b) : a(d.responseStart, d.navigationStart, b), request: a(d.responseEnd, d.requestStart, b), loadEvent: a(d.loadEventEnd, d.loadEventStart, b), appcache: a(d.domainLookupStart, d.fetchStart, b), unloadEvent: a(d.unloadEventEnd, d.unloadEventStart, b), connect: a(d.connectEnd,
                                        d.connectStart, b), DOMContentLoaded: a(d.domContentLoadedEventEnd, d.fetchStart, b)
                            }; b = []; for (var f in d) d.hasOwnProperty(f) && b.push("'" + f + "':'" + d[f] + "'"); b.join(","); f = getTrackURL(); d = f.indexOf("{"); f = "NA" !== f && -1 !== d ? f.substring(0, d + 1) + b + "," + f.substring(d + 1) : "{" + b + "}"; b = []; b.push("site_name=58"); b.push("tag=performance"); b.push("referrer=" + l.encodeURIComponent(document.referrer)); b.push("trackURL=" + f); b.push("rand_id=" + e.Math.random()); b = s.protocol + "//tracklog.58.com/Mv1/performance/empty.js.gif?" +
                                b.join("&"); (new Image).src = b; e.TJ58Obj.send = !0; clearInterval(e.TJ58Obj.PFORMINTERVAL)
                        } f && "function" == typeof e.onload && f(); if ("undefined" == typeof e.TJ58Obj.send) {
                            e.TJ58Obj.PFORMCOUNT = -1; e.TJ58Obj.send = !1; var b = e.unload; e.unload = function () { b && "function" == typeof e.unload && b(); e.TJ58Obj.send || c("close_" + Math.floor(e.performance.now())) }; e.TJ58Obj.PFORMINTERVAL = setInterval(function () {
                                e.TJ58Obj.PFORMCOUNT++; 6 < e.TJ58Obj.PFORMCOUNT && clearInterval(e.TJ58Obj.PFORMINTERVAL); try {
                                    0 < e.performance.timing.loadEventEnd ?
                                    c() : 6 <= e.TJ58Obj.PFORMCOUNT && c("TIMEOUT_" + Math.floor(e.performance.now()))
                                } catch (a) { clearInterval(e.TJ58Obj.PFORMINTERVAL) }
                            }, 500)
                        }
                    }
                }
            }, DMloadByTag: function () { try { var a = this.getValByUrl(d.curURL, "dm-statistic-detect"), c = d.getCookie("dm-statistic-detect"); if (a = ("NA" == a ? "" : a) || c || "") if (e.TJ58ecdata = {}, e.TJ58ecdata.platform = "58M", "https:" != s.protocol) switch (a) { case "2": d.loadScript(s.protocol + "//stat.58corp.com/static/js/referrer_alert.js"); break; case "3": d.loadScript(s.protocol + "//stat.58corp.com/static/js/referrer_visual.js") } } catch (b) { } },
            xxzlLoadFn: function () { try { if ("t" == this.baseInfo.teemo) { var a = (new Date).getTime(); d.xxzlLoadJs(s.protocol + "//j1.58cdn.com.cn/git/xxzl/teemo/teemo_init.js?dt=" + a + "&appkey=49f15a01b252219bfmm") } } catch (c) { } }
        }; g.baseInfo = g.getBaseInfo(); g.trackLog(); g.listShowLog(); g.listClickLog(); g.bindAlsTag(); g.bindTongji_tag(); g.bindTongji_id(); g.bindHomeHeatMap(); g.bindIndexHeatMap(); g.bindAddGTIDtoURL(); g.bindUndefinedClickLog(); g.insertMiGuan(); e.clickLog = function (a) { g.clickLog(a) }; e.showLog = function (a) { }; e.loadMorePage =
            function (a) { g.loadMorePageLog(a) }; e.ajaxlog_mlistshow = function () { g.listShowLog() }; e.GCIDPlus = function () { g.baseInfo.ClickIDPlus() }; e.listClickLog = function (a) { }; e.reTrackLog = function () { g.baseInfo = g.getBaseInfo(); g.trackLog(); g.listShowLog() }; e.getGTID = function () { return g.baseInfo.GTID }; e.getTrackURL = function () { return g.baseInfo.trackURL }; g.performanceLog(); g.xxzlLoadFn(); e._gaq = e._gaq || []; g.DMloadByTag()
    }
})(window);