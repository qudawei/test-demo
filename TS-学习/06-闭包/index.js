function outerFun(){
    let a = 1;
    function innerFun(){
        console.log('a', a);
    }
    return innerFun;
}

let tesFun = new outerFun();
console.log('test', tesFun());