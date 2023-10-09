/**
 * 链表： 插入、删除数据效率高 O(1)复杂度（只需要更改指针即可）； 随机访问效率低，需要从链头至链尾遍历
 * 和数组相比，内存消耗空间大，因为每个存储数据的节点都需要额外的空间存储后继指针
 */

//Node节点
class Node {
  constructor(data) {
    this.pre = null;
    this.data = data;
    this.next = null;
  }
}

export class BidirectionLinkList {
  constructor() {
    this.head = null; //头节点
    this.tail = null; //尾节点
    this.length = 0;
  }
  // append(data) 向列表的尾部添加一个新的项
  append(data) {
    let node = new Node(data); //先构造一个节点
    if (this.length === 0) {
      //空链表的情况
      this.head = node;
      this.tail = node;
    } else {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node; // 新插入的节点作为尾节点
    }

    this.length++; //保持长度增加
  }

  // insert(position,element) 向链表的特定位置添加一个新的元素

  insert(position, element) {
    let node = new Node(element);

    if (position === 0) {
      //在头部插入
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.pre = node;
        node.next = this.head;
        this.head = node;
      }
    } else if (position > this.length - 1) {
      //在尾部插入
      this.append(node);
    } else {
      if (position < 0) {
        //转化为正向遍历的下标
        position = this.length + position;
      }
      //在 头部 和 尾部 之间的位置插入
      let index = 0;
      let currentNode = this.head;
      let preNode = null;
      while (index < position) {
        preNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }
      //插入位置在preNode 和 currentNode之间
      node.pre = preNode;
      preNode.next = node;
      node.next = currentNode;
      currentNode.pre = node;
    }
    this.length++; //保持长度增加
  }

  // get(position) 获取对应位置的元素
  get(position) {
    let currentNode = this.head;
    let index = 0;
    if (position > this.length - 1) return null;
    if (position < 0) {
      //转化为正向遍历的下标
      position = this.length + position;
    }
    while (index < position) {
      currentNode = currentNode.next;
      index++;
    }
    return currentNode;
  }

  // indexOf(element) 返回元素在列表中的索引，若无 则返回-1
  indexOf(element) {
    let index = 0;
    let currentNode = this.head;
    if (this.length === 0) return -1;
    while (currentNode && currentNode.data !== element) {
      currentNode = currentNode.next;
      index++;
    }
    if (currentNode.data === element) {
      return index;
    } else {
      return -1;
    }
  }
  // update(position,newData) 修改某个位置的元素
  update(position, newData) {
    if (position > this.length - 1) return;
    if (position < 0) position = this.length + position;

    let node = this.get(position);
    node.data = newData;
  }
  // removeAt(position) 移除特定位置的元素, position 指下标 0 1 2 3
  removeAt(position) {
    let headNode = this.head;
    let tailNode = this.tail;
    let index = 0;
    if (position > this.length - 1) return;
    if (position < 0) position = this.length + position;

    if (position === 0) {
      //移除头部节点
      if (this.length === 1) {
        this.head = null;
        this.pre = null;
      } else {
        this.head = headNode.next;
        headNode.next.pre = null;
        headNode.next = null; //断开删除节点的next指向
      }
    } else if (position === this.length - 1) {
      //移除尾部节点
      this.tail = this.tail.pre;
      this.tail.next = null;
    } else {
      //移除中间节点
      let currentNode = this.head;
      let preNode = null;
      while (index < position && currentNode) {
        preNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }
      preNode.next = currentNode.next; //preNode的next指向下一个节点
      currentNode.next.pre = preNode; // 下一个节点的pre指向 preNode
      currentNode.pre = null; //删除节点，移除pre和 next指向
      currentNode.next = null;
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

  // forwardString() 返回正向遍历的节点字符串形式
  forwardString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += current.data + '->';
      current = current.next;
    }

    return str;
  }
  // backWordString() 返回反向遍历的节点字符串形式
  backWordString() {
    let current = this.tail;
    let str = '';
    while (current) {
      str += current.data + '->';
      current = current.pre;
    }

    return str;
  }
}
