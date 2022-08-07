// 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。
/**  队列的两种主要操作是：向队列中插入新元素和删除队列中的元素。插入操作也叫做入
队，删除操作也叫做出队。入队操作在队尾插入新元素，出队操作删除队头的元素。*/

// 实际应用 男女跳舞进行排队
class Queue {
    constructor(){
        this.dataStore = [];
        // this.enqueue = enqueue;
        // this.dequeue = dequeue;
        // this.front = front;
        // this.back = back;
        // this.toString = toString;
        // this.empty = empty;
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    // 优先队列 入队对象：{name: 'zhangsan', code: 1}
    // dequeue() {
    //     var priority = this.dataStore[0].code;
    //     for (var i = 1; i < this.dataStore.length; ++i) {
    //     if (this.dataStore[i].code < priority) {
    //     priority = i;
    //     }
    //     }
    //     return this.dataStore.splice(priority,1);
    // }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length-1];
    }

    frontdequeue(){
        return this.datastore.shift()
    }
      
    afterenqueue(element){
        this.datastore.push(element)
    }

    toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}