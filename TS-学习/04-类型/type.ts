let isDone: boolean = false;
isDone = true;



let name1: string = "bob";
name1 = "smith";

let list: number[] = [1, 2, 3];
let list2: Array<number> = [2, 3, 4]

let data = [];
for (let i = 0; i < 3; i++) { 
    data[i] = function () { 
        console.log(i); 
    }; 
} 
data[0](); // 3 
data[1](); // 3 
 
data[2](); // 3