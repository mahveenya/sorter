class Sorter {
  constructor(name) {
    this.arr = [];
    this.compareFunction = this.numericCompareFunction;
  }
  numericCompareFunction(a, b) {
    return a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
   return this.arr;
  }

  sort(indices) {
    indices.sort(this.numericCompareFunction);
    
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;