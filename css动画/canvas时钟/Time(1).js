
/**
 * 画布
 */
class Canvas {
    /**
     * 构造函数
     * @param {CanvasRenderingContext2D} target 
     */
    constructor(target) {
        this.target = target;
    }
}

/**
 * 时钟圆盘
 */
class Panel extends Canvas {

    /**
     * 构造函数
     * @param {HTMLElement} element 
     */
    constructor(element) {
        super(element.getContext("2d"));
        this.element = element;
        this.width = this.element.clientWidth;      // 画布宽
        this.height = this.element.clientHeight;    // 画布高
        this.center = { x: this.width / 2, y: this.height / 2 };  // 圆心坐标
        this.angle = -90;   // 初始角度
        this.scale = 6;     // 每隔刻度
    }

    time() {
        setInterval(() => {
            this.target.clearRect(0, 0, this.width, this.height);
            this.drawRound();
            this.drawScale();
            this.drawPointer();
            this.drawDot();
        }, 1000)
    }

    /**
     * 绘制圆盘
     */
    drawRound() {
        this.target.beginPath();
        this.target.strokeStyle = this.round.color;
        this.target.lineWidth = this.round.bold;
        this.target.arc(this.center.x, this.center.y, this.round.length, 0, 2 * Math.PI);
        this.target.stroke();
    }

    /**
     * 绘制圆点
     */
    drawDot() {
        this.target.beginPath();
        this.target.fillStyle = this.dot.color;
        this.target.lineWidth = this.dot.bold;
        this.target.arc(this.center.x, this.center.y, this.dot.length, 0, 2 * Math.PI);
        this.target.fill();
        this.target.restore();
    }

    /**
     * 绘制刻度
     */
    drawScale() {
        let length, bold, color;
        for (let i = 0, currentAngle = this.angle; i < 60; i++) {
            if (currentAngle % 30) {
                length = this.mScale.length;
                bold = this.mScale.bold;
                color = this.mScale.color;
            } else {
                length = this.hScale.length;
                bold = this.hScale.bold;
                color = this.hScale.color;
            }
            let s = this._getRoundXY(currentAngle, this.round.length - this.round.bold);
            let e = this._getRoundXY(currentAngle, this.round.length - this.round.bold - length);
            this.target.beginPath();
            this.target.lineWidth = bold;
            this.target.strokeStyle = color;
            this.target.moveTo(s.x, s.y);
            this.target.lineTo(e.x, e.y);
            this.target.stroke();
            currentAngle += this.scale;
        }
    }

    /**
     * 绘制指针
     */
    drawPointer() {
        let date = new Date(), angle = 0;

        // 中心点
        this.target.translate(this.center.x, this.center.y);

        // 时针
        this.target.save(); //必须保存否则当前旋转影响后续判断
        this.target.beginPath();
        this.target.moveTo(0, 0);
        this.target.lineWidth = this.hPointer.bold;
        this.target.strokeStyle = this.hPointer.color;
        angle = (30 * date.getHours() + date.getMinutes() / 2) * Math.PI / 180; // 30 为小时刻度
        this.target.rotate(angle);
        this.target.lineTo(0, - this.hPointer.length);
        this.target.stroke();
        this.target.restore(); //必须设置否则当前旋转影响后续判断


        // 分针       
        this.target.save();
        this.target.beginPath();
        this.target.moveTo(0, 0);
        this.target.lineWidth = this.mPointer.bold;
        this.target.strokeStyle = this.mPointer.color;
        angle = this.scale * date.getMinutes() * Math.PI / 180;
        this.target.rotate(angle);
        this.target.lineTo(0, -this.mPointer.length);
        this.target.stroke();
        this.target.restore();

        // 秒针
        this.target.save();
        this.target.beginPath();
        this.target.moveTo(0, 0);
        this.target.lineWidth = this.sPointer.bold;
        this.target.strokeStyle = this.sPointer.color;
        angle = this.scale * date.getSeconds() * Math.PI / 180;
        this.target.rotate(angle);
        this.target.lineTo(0, -this.sPointer.length);
        this.target.stroke();
        this.target.restore();

        // 把中心点映射回来
        this.target.translate(-this.center.x, -this.center.y);
    }

    /**
      * 假设圆心:o (x0,y0)
      * 半径:r
      * 角度:angle (角度是相对于图中红点位置而言，逆时针为负数，顺时针为正)
      * 计算公式：
      * p2 (x1,y1), 其中angle = 30
      * x1 = x0 + r * cos(angle * PI / 180)
      * y1 = y0 + r * sin(angle * PI /180)
      * @param {number} angle 夹角
      * @param {number} radius 半径
      * @returns {object}
      */
    _getRoundXY(angle, radius) {
        return {
            x: this.center.x + radius * Math.cos(angle * Math.PI / 180),
            y: this.center.y + radius * Math.sin(angle * Math.PI / 180),
        };
    }

    /**
     * 获取圆点配置
     */
    get dot() {
        if (!(this._dot instanceof Config)) {
            this._dot = new Config(this.element.clientWidth / 100, 2, "#000");
        }
        return this._dot;
    }

    /**
     * @param {Config} value
     */
    set dot(value) {
        if (value instanceof Config) {
            this._dot = value;
        }
    }

    /**
     * 获取圆盘配置
     */
    get round() {
        if (!(this._round instanceof Config)) {
            this._round = new Config(this.element.clientWidth / 3, 8, "#000");
        }
        return this._round;
    }

    /**
     * @param {Config} config
     */
    set round(value) {
        if (value instanceof Config) {
            this._round = value;
        }
    }

    /**
     * 获取小时刻度
     */
    get hScale() {
        if (!(this._hScale instanceof Config)) {
            this._hScale = new Config(16, 4, "#000");
        }
        return this._hScale;
    }

    /**
     * 设置小时刻度
     * @param {Config} config
     */
    set hScale(value) {
        if (value instanceof Config) {
            this._hScale = value;
        }
    }

    /**
     * 获取分钟刻度
     */
    get mScale() {
        if (!(this._mScale instanceof Config)) {
            this._mScale = new Config(8, 1, "#000");
        }
        return this._mScale;
    }

    /**
     * 设置分钟刻度
     * @param {Config} config
     */
    set mScale(value) {
        if (value instanceof Config) {
            this._mScale = value;
        }
    }

    /**
     * 获取时针配置
     */
    get hPointer() {
        if (!(this._hPointer instanceof Config)) {
            this._hPointer = new Config(this.round.length / 2.5, 4, "#000");
        }
        return this._hPointer;
    }

    /**
     * @param {Config} value
     */
    set hPointer(value) {
        if (value instanceof Config) {
            this._hPointer = value;
        }
    }

    /**
     * 获取分针配置
     */
    get mPointer() {
        if (!(this._mPointer instanceof Config)) {
            this._mPointer = new Config(this.round.length / 1.4, 2, "#000");
        }
        return this._mPointer;
    }

    /**
     * @param {Config} value
     */
    set mPointer(value) {
        if (value instanceof Config) {
            this._mPointer = value;
        }
    }

    /**
     * 获取秒针配置
     */
    get sPointer() {
        if (!(this._sPointer instanceof Config)) {
            this._sPointer = new Config(this.round.length - this.round.bold, 1, "#000");
        }
        return this._sPointer;
    }

    /**
     * @param {Config} value
     */
    set sPointer(value) {
        if (value instanceof Config) {
            this._sPointer = value;
        }
    }
}

/**
 * 配置
 */
class Config {
    /**
     * 构造函数
     * @param {number} length 长度
     * @param {string} bold 粗细
     * @param {string} color 颜色
     */
    constructor(length, bold, color) {
        this.length = length;
        this.bold = bold;
        this.color = color;
    }
}
