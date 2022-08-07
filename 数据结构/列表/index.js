// 列表是一组有序的数据。每个列表中的数据项称为元素。在 JavaScript 中，列表中的元素
// 可以是任意数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量
// 受到程序内存的限制
class List {
    constructor(props){
        super(props)
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // 初始化一个空数组来保存列表元素
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
    }
    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }

    length() {
        return this.listSize;
    }

    toString() {
        return this.dataStore;
    }

    contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
                if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
}