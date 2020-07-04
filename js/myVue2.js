class Vue extends EventTarget{
    constructor(option){
        super();
        this.option = option;
        this._data = option.data;
        this.el = document.querySelector(option.el);
        this.observe(this._data)
        this.compileNode(this.el)
    }
    observe(data){
        let this_ = this;
        this._data = new Proxy(data,{
            set(target,prop,newVal){
                let event = new CustomEvent(prop,{
                    detail:newVal
                });
                this_.dispatchEvent(event);
                return Reflect.set(...arguments)
            }
        });

    }
    compileNode(el){
        let nodes = el.childNodes;
        nodes.forEach(elem => {
            if(elem.nodeType == 3){
                let text = elem.textContent;
                let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
                if(reg.test(text)){
                    let $1 = RegExp.$1;
                    this._data[$1] && (elem.textContent = text.replace(reg,this._data[$1]))
                    this.addEventListener($1,e => {
                        elem.textContent = text.replace(reg,e.detail)
                    })
                }
            }else if(elem.nodeType == 1){  //nodetype：3文本 1html 元素
                // 此处针对input
                let attr = elem.attributes;
                if(attr.hasOwnProperty('v-model')){
                    let keyNm = attr['v-model'].nodeValue;
                    elem.value = this._data[keyNm]
                    // 监听input变化
                    elem.addEventListener('input',() => {
                        this._data[keyNm] = elem.value;
                    })
                }
                console.log('elem', elem);
                this.compileNode(elem)
            }
        });
    }
}