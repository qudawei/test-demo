"use strict";
(function (h) {
    var i = document.querySelector("canvas"),
        j = i.getContext("2d"),
        c = window.innerWidth,
        l = window.innerHeight,
        m = 0.1,
        b = 3,
        d = [],
        k = document.createElement("canvas"),
        o = k.getContext("2d"),
        f = new Image();
    k.width = c;
    k.height = l;
    o.globalAlpha = 0.2;
    f.onload = function () {
        o.drawImage(f, 0, 0, f.width, f.height, 0, 0, c, l);
        n()
    };
    f.src = h;
    window.run = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (g) {
        return setTimeout(g, 16.6666)
    };

    function a(p, r, g, q) {
        this.x0 = p;
        this.y0 = r;
        this.x1 = g;
        this.y1 = q;
        this.angle = Math.atan2(q - r, g - p), this.cos = Math.cos(this.angle);
        this.sin = Math.sin(this.angle);
        this.color = this.getColor()
    }
    a.prototype.speed = 10;
    a.prototype.render = function (p) {
        p.beginPath();
        p.moveTo(this.x0, this.y0);
        this.speed += 0.3;
        this.x0 += this.cos * this.speed;
        this.y0 += this.sin * this.speed;
        p.lineTo(this.x0, this.y0);
        p.strokeStyle = this.color;
        p.stroke();
        p.closePath();
        return Math.abs(this.x0 - this.x1) > 1 && this.y0 > this.y1
    };
    a.prototype.getColor = function () {
        var g = ["hsl("];
        g[1] = Math.random() * 360 | 0;
        g[2] = ",";
        g[3] = "80%,50%)";
        return g.join("")
    };

    function e(q, r, g, s) {
        this.particles = [];
        this.isEmit = true;
        this.laster = new a(q, r, g, s);
        var p = (Math.random() * 30 + 20) | 0;
        while (p--) {
            this.particles.push({
                x: g,
                y: s,
                vx: Math.random() * 12 - 6,
                vy: Math.random() * 12 - 9,
                opacity: 1,
                vo: Math.random() * 0.01 + 0.01
            })
        }
    }
    e.prototype.render = function (q) {
        if (this.isEmit) {
            this.isEmit = this.laster.render(q);
            return true
        } else {
            var p = this.getColor(),
                r = false;
            this.particles.forEach(function (g) {
                g.opacity -= g.vo;
                if (g.opacity < 0) {
                    arguments[2].splice(arguments[1], 1);
                    r = true
                } else {
                    q.beginPath();
                    q.moveTo(g.x, g.y);
                    g.x += g.vx;
                    g.vy += m;
                    g.y += g.vy;
                    p[4] = g.opacity;
                    q.strokeStyle = p.join("");
                    q.lineTo(g.x, g.y);
                    q.stroke();
                    q.closePath()
                }
            });
            p = null
        }
        return r ? this.particles.length > 0 : true
    };
    e.prototype.getColor = function () {
        var g = ["hsla("];
        g[1] = Math.random() * 360 | 0;
        g[2] = ",";
        g[3] = "100%,50%,";
        g[4] = 1;
        g[5] = ")";
        return g
    };
    i.width = c;
    i.height = l;
    j.lineWidth = 2;

    function n() {
        j.beginPath();
        j.drawImage(k, 0, 0);
        d.forEach(function (g) {
            if (!g.render(j)) {
                arguments[2].splice(arguments[1], 1)
            }
        });
        if (d.length < b) {
            d.push(new e(c * 0.3 + Math.random() * c * 0.4, l, Math.random() * c, Math.random() * l * 0.6))
        }
        run(n)
    }
    document.addEventListener("click", function (g) {
        d.push(new e(c * 0.3 + Math.random() * c * 0.4, l, g.clientX, g.clientY))
    }, false);
    window.addEventListener("resize", function () {
        i.width = k.width = c = this.innerWidth;
        i.height = k.height = l = this.innerHeight;
        o.drawImage(f, 0, 0, f.width, f.height, 0, 0, c, l)
    }, false)
})(bgimg);