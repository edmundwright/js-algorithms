function HashItem (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

function HashTable () {
  this._buckets = new Array(8);
  this.size = 0;
}

HashTable.prototype.get = function (key) {
  var item = this._buckets[this._indexForKey(key)];

  while (item) {
    if (item.key === key) {
      return item.value;
    } else {
      item = item.next;
    }
  }

  throw "Key not present in table";
};

HashTable.prototype.delete = function (key) {
  var bucketIndex = this._indexForKey(key);
  var item = this._buckets[bucketIndex];

  if (item) {
    if (item.key === key) {
      this._buckets[bucketIndex] = item.next;
      this.size--;
      return;
    } else {
      while (item.next) {
        if (item.next.key === key) {
          item.next = item.next.next;
          this.size--;
          return;
        } else {
          item = item.next;
        }
      }
    }
  }

  throw "Key not present in table";
};

HashTable.prototype.set = function (key, value) {
  var bucketIndex = this._indexForKey(key);
  var item = this._buckets[bucketIndex];

  if (item) {
    while (true) {
      if (item.key === key) {
        item.value = value;
        return;
      } else if (item.next) {
        item = item.next;
      } else {
        item.next = new HashItem(key, value);
        this._registerAddition();
        return;
      }
    }
  } else {
    this._buckets[bucketIndex] = new HashItem(key, value);
    this._registerAddition();
  }
};

HashTable.prototype._registerAddition = function () {
  this.size++;
  if (this.size === this._buckets.length) {
    this._resize();
  }
};

HashTable.prototype._resize = function () {
  var oldBuckets = this._buckets;
  this._buckets = new Array(this._buckets.length * 2);

  var item;
  for (var i = 0; i < oldBuckets.length; i++) {
    item = oldBuckets[i];
    while (item) {
      this.set(item.key, item.value);
      item = item.next;
    }
  }
};

HashTable.prototype._indexForKey = function (key) {
  return this._hash(key) % this._buckets.length;
};

HashTable.prototype._hash = function (key) {
  if (typeof key === "number") {
    return key;
  } else if (typeof key === "string") {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = hash ^ key.charCodeAt(i); // bitwise XOR
    }
    return hash;
  } else {
    throw "Hashing of this key type not implemented";
  }
};
