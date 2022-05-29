/**
 * 栈是一种高效的数据结构，因为数据操作只能在栈点，这样操作很快，
 * 特点：
 * 1.一种特殊的列表，只能通过一端进行访问，这一端成为栈顶
 * 2.一种先入先出的数据结构
 * 3.栈的主要方法属性：
 * 入栈push、出栈pop、预览栈顶的元素peek、记录栈的索引top、清空元素clear
 *  */ 

class Stack{
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop(){
        return this.dataStore[--this.top];
    }

    peek(){
        return this.dataStore[this.top - 1];
    }

    clear(){
        this.top = 0;
        this.dataStore = [];
    }

    length() {
        return this.top;    
    }
}