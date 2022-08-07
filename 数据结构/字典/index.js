// js字典是以键-值来定义的数据结构  如object

class Dictionary {
  constructor() {
    this.datastore = new Array();
  }

  add(key, value) {
    this.datastore[key] = value;
  }

  find(key) {
    return this.datastore[key];
  }

  remove(key) {
    delete this.datastore[key];
  }

  showAll() {
    //   .sort() 排序
    for (var key in Object.keys(this.datastore)) {
      print(key + " -> " + this.datastore[key]);
    }
  }
  count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
      ++n;
    }
    return n;
  }
}
