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

  remove(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];
    if (!bucket) return false;
    for (let i = 0;i < this.buckets.length;i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = Array.from({length: this.capacity}, () => []);
    this.size = 0;
    return true;
  }

  keys() {
    let keys = [];
    if (this.size <= 0) return keys;
    for (bucket of this.buckets) {
      if (!bucket) continue;
      for (let element of bucket) {
        keys.push(element.key);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    if (this.size <= 0) return values;
    for (bucket of this.buckets) {
      if (!bucket) continue;
      for (let element of this.buckets) {
        values.push(element.value);
      }
    }
    return values;
  }
  
  entries() {
    let entries = [];
    if (this.size <= 0) return entries;
    for (bucket of this.buckets) {
      if (!bucket) continue;
      for (let element of this.buckets) {
        let key = element.value;
        let value = element.value;
        entries.push({key,value});
      }
    }
    return entries;
  }

  resize() {
    this.capacity *= 2;
    const oldBuckets = this.buckets;
    this.buckets = Array.from({length: this.capacity}, () => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let {key, value} of bucket) {
        this.set(key, value);
      }
    }

  }
}