/**
 * 队列结构：先进先出， 只允许在表的前端进行删除，在表的后端进行插入
 *
 * 应用场景：js事件循环
 *
 */

// export class Quene {
//   #item;
//   constructor(array) {
//     //私有属性
//     this.#item = array ? array : [];
//   }
//   // enquene()  向队列尾部里添加一个或多个元素
//   enquene() {
//     this.#item.push(...arguments);
//   }
//   // dequene()  移出队列的第一项，并返回删除元素
//   dequene() {
//     //使用 shift 性能不好
//     return this.#item.shift();
//   }
//   // front()  返回队列中的第一个元素。不改变队列本身
//   front() {
//     return this.#item[0];
//   }
//   // isEmpty() 判断队列是否为空
//   isEmpty() {
//     return this.#item.length === 0;
//   }
//   // size() 返回队列包含的元素个数
//   size() {
//     return this.#item.length;
//   }
//   // toString() 将队列中的内容转成字符串形式
//   toString() {
//     return this.#item.join('');
//   }
// }

export class Quene {
  #item;
  #lowCount;
  #count;
  constructor() {
    this.#item = {};
    this.#lowCount = 0; //记录队头索引值
    this.#count = 0; //记录插入的数量, 相当于自增id
  }
  // enquene()  向队列尾部里添加一个或多个元素
  enquene(data) {
    this.#item[this.#count] = data;
    this.#count++;
  }
  // dequene()  移出队列的第一项，并返回删除元素
  dequene() {
    if (this.isEmpty()) {
      return;
    }
    //使用 shift 性能不好
    const res = this.#item[this.#lowCount]; //保存队列第一个元素， 用于后续返回
    delete this.#item[this.#lowCount];
    this.#lowCount++;

    return res;
  }

  // front()  返回队列中的第一个元素。不改变队列本身
  front() {
    return this.#item[this.#lowCount];
  }

  // isEmpty() 判断队列是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // size() 返回队列包含的元素个数
  size() {
    return this.#count - this.#lowCount;
  }

  //clear()
  clear() {
    this.#item = {};
    this.#lowCount = 0; //记录队头索引值
    this.#count = 0; //记录插入的数量
  }
  // toString() 将队列中的内容转成字符串形式
  toString() {
    let res = '';
    for (let i = this.#lowCount; i < this.#count; i++) {
      res += `${this.#item[i]}-`;
    }
    return res;
  }
}
