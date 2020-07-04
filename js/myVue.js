class Vue{
    constructor(option){
        this.option = option;
        this._data = option.data;
        this.el = document.querySelector(option.el);
        this.compileNode(this.el)
    }
    compileNode(el){
        let nodes = el.childNodes;
        nodes.forEach(elem => {
            if(elem.nodeType == 3){
                console.log("这个是一个文本");
                let text = elem.textContent;
                let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
                if(reg.test(text)){
                    let $1 = RegExp.$1;
                    this._data[$1] && (elem.textContent = text.replace(reg,this._data[$1]))
                }
            }else if(elem.nodeType == 1){
                this.compileNode(elem)
            }
        });
        console.log('11',nodes)
    }
}