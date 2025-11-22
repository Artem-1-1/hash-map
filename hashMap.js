class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    hashCode = 0;

    const primeNumber = 31;
    for (let i = 0;i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  set(key, value) {
    let hashCode = this.hash(key);

    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = [];
    }

    for (let element of this.buckets[hashCode]) {
      if (element.key === key) {
        element.value = value;
        return;
      }
    }
    this.buckets[hashCode].push({key, value});
    this.size++;
    if(this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    if (!this.buckets[hashCode]) return null;
    for (let element of this.buckets[hashCode]) {
      if (element.key === key) {
        return element.value;
      }
    }
    return null;
  }

  has(key) {
    let hashCode = this.hash(key);
    if (!this.buckets[hashCode]) return false;
    for (let element of this.buckets[hashCode]) {
      if (element.key === key) return true;
    }
    return false;
  }
  
}