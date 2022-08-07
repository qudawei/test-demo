var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.eat = function (foodObj) {
        console.log('i eat these food:', foodObj);
    };
    return Man;
}());
var man = new Man('tom', 18);
console.log('man', man);
