/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-07-26 19:30:01
 * @LastEditors: David Qu
 * @LastEditTime: 2021-07-27 10:44:35
 */
!function (e) { 
    var s = {}, t = "qym_trace"; 
    s.setToken = function (e) { 
        sessionStorage.setItem(t, e) 
    }, 
    s.getToken = function () { 
        return sessionStorage.getItem(t) 
    }, 
    s.sendData = function (e) { 
        (e = e || {})[t] = e[t] || s.getToken() || "", 
        e.userAgent = e.userAgent || navigator.userAgent || "", 
        function (t) { (t = t || {}).type = (t.type || "POST").toUpperCase(), t.dataType = t.dataType || "json"; var e = function (e) { var t = []; for (var n in e) t.push(n + "=" + encodeURIComponent(e[n])); return t.join("&") }(t.data), n = new XMLHttpRequest; "GET" == t.type ? (n.open("GET", t.url + "?" + e, !0), n.send(null)) : "POST" == t.type && (n.open("post", t.url, !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8"), n.send(e)); n.onreadystatechange = function () { var e; 4 == n.readyState && (200 <= (e = n.status) && e < 300 || 304 == e ? t.success && t.success(n.responseText, n.responseXML) : t.error && t.error(e)) } }({ url: "https://qym.zj.gov.cn/servicePath/accessLog/qymLog", type: "post", data: e, dataType: "json", timeout: 2e3, success: function () { }, error: function (e) { } }) }, s.init = function () { var e = "", t = window.location.href, n = t.lastIndexOf("qym_trace="); -1 != n && (e = 0 <= (e = t.substring(n + 10)).indexOf("--") ? e.substring(0, e.indexOf("--") + 2) : e.substring(0, e.indexOf("-") + 1), s.setToken(e)) }, s.init(), e.JSSDK_QYM = s }(window, document);