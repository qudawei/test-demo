interface PersonInterface {
    name: String;
    age: number;
    eat(foodObj: Object);
}

class Man implements PersonInterface {
    name: String;
    age: number;
    eat(foodObj: Object){
        console.log('i eat these food:', foodObj);
    }
    constructor(name: String, age: number) { 
        this.name = name;
        this.age = age;
    }
}


let man = new Man('tom', 18);
console.log('man', man);