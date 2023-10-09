/**
 * 栈结构：后进 先出， 对应数组的 push 和 pop
 * 应用场景： 浏览器history、 函数调用栈
 *
 */

export class Stack {
  #item;
  constructor(array) {
    //私有属性
    this.#item = array ? array : [];
  }
  push() {
    // console.log(arguments)
    this.#item.push(...arguments);
    return this.item;
  }
  pop() {
    return this.#item.pop();
  }
  //获取栈顶的元素
  peek() {
    // return this.item[this.item.length - 1];
    return this.#item.at(-1);
  }
  //判断是否是空栈
  isEmpty() {
    return !this.#item.length;
  }

  //获取栈的长度
  size() {
    return this.#item.length;
  }
  //栈转化为字符串
  toString() {
    return this.#item.join(',');
  }

  //清空栈
  clear() {
    this.#item = [];
  }
}
