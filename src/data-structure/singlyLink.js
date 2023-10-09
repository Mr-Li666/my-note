/**
 * 链表： 插入、删除数据效率高 O(1)复杂度（只需要更改指针即可）； 随机访问效率低，需要从链头至链尾遍历
 * 和数组相比，内存消耗空间大，因为每个存储数据的节点都需要额外的空间存储后继指针
 */

//Node节点
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // append(data) 向列表的尾部添加一个新的项
  append(data) {
    let node = new Node(data); //先构造一个节点
    if (this.length) {
      //如果链表中有元素，则要循环遍历至最后一个元素
      let currentNode = this.head; //从head节点开始遍历
      while (currentNode.next) {
        //如果当前节点指向null， 则当前节点是最后一个节点
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      //如果链表中没有元素， 则把插入的节点指向头节点
      this.head = node;
    }

    this.length++; //保持长度增加
  }

  // insert(position,element) 向链表的特定位置添加一个新的元素
  insert(position, element) {
    let node = new Node(element);
    let currentNode = this.head;
    let index = 0; //保存指针移动位置，需要和position对比
    let preNode = null; // 上一个节点的信息，需要将上一个节点的指针指向当前节点
    if (position === 0) {
      //如果插入位置是0， 则在头上插入，更改head节点的指向
      this.head = node;
      node.next = currentNode;
    } else {
      if (position > this.length) {
        //如果插入的位置大于链表的长度，则在最后插入
        this.append(node);
      } else {
        //插入的位置在链表之间，则要遍历找到对应的位置
        while (currentNode && index < position) {
          preNode = currentNode;
          currentNode = currentNode.next;
          index++;
        }
        //循环结束后，则找到了当前插入的位置, 在preNode和currentNode之间
        preNode.next = node;
        node.next = currentNode;
      }
    }

    this.length++; //保持长度增加
  }

  // get(position) 获取对应位置的元素
  get(position) {
    let currentNode = this.head;
    let index = 0;
    if (position < 0 || position > this.length - 1) return null;
    //开始遍历寻找
    while (index < position) {
      //如果position是0， 不进入当前循环，直接返回head节点
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }

  // indexOf(element) 返回元素在列表中的索引，若无 则返回-1
  indexOf(element) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode && currentNode.data !== element) {
      currentNode = currentNode.next;
      index++;
    }
    if (currentNode === null) {
      //如果当前节点已经到了最后的null节点，则没找到这个element
      return -1;
    }

    return index;
  }
  // update(position,newData) 修改某个位置的元素
  update(position, newData) {
    let node = this.get(position);
    if (node) {
      node.data = newData;
    }
  }
  // removeAt(position) 移除特定位置的元素, position 指下标 0 1 2 3
  removeAt(position) {
    let currentNode = this.head;
    let preNode = null;
    let index = 0;
    if (position < 0 || position > this.length - 1) return false;
    while (index < position && currentNode) {
      preNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }
    if (index === position) {
      preNode.next = currentNode.next;
      currentNode.next = null; //断开当前节点的指向
    }
    this.length--;
  }
  // isEmpty() 如果链表中不包含任何元素 则返回true
  isEmpty() {
    return this.length == 0;
  }
  // size() 返回列表中包含的元素个数 与数组的length属性类似
  size() {
    return this.length;
  }
  // toString()
  toString() {
    let str = '';
    let currentNode = this.head;
    while (currentNode) {
      str += currentNode.data + '-';
      currentNode = currentNode.next;
    }
    return str;
  }
}
