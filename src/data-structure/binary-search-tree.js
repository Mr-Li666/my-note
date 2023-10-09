/**
 * 二叉树：最多只能有两个子节点，左侧子节点和右侧子节点
 * 二叉搜索树（BST）：是二叉树的一种，只允许在左侧节点存储比父节点小的值， 在右侧可点存储比父节点大的值
 * 遍历方式取决于遍历根节点的顺序，先序、中序、后序
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.preOrderStr = ''; // 先序遍历
    this.inOrderStr = ''; //中序遍历
    this.postOrderStr = ''; // 后序遍历
  }

  // insert 插入节点
  insert(key) {
    const node = new Node(key);
    if (this.root === null) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  _insert(root, node) {
    //递归遍历比较大小
    if (node.key > root.key) {
      //向右边插入
      if (root.right === null) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    } else {
      //向左插入
      if (root.left === null) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    }
  }

  /**移除节点
   * 分三种情况：
   * 1. 删除的节点为最后一个子节点，即没有左子树和右子树
   * 2. 删除的节点只有一个子树，有 左子树或右子树
   * 3. 删除的节点有两个子树，包括 左子树和右子树
   */
  remove(key) {
    if (!this.root) return;
    // this._remove(this.root, key);
    let rnode = this.search(key);
    console.log('111', rnode);
    if (rnode.left === null && rnode.right === null) {
      //没有左子树和右子树
      return this._removeNode()(this.root, key);
    } else if (rnode.left === null || rnode.right === null) {
      //只有左子树或右子树
      return this._removeNode1()(this.root, key);
    } else {
      //左子树和右子树都存在
      return this._removeNode2()(this.root, key);
    }
  }
  _removeNode() {
    let _parentNode = null;
    let goLeft = false;
    return function _remove(root, key) {
      if (key > root.key) {
        //向右查找
        goLeft = false;
        _parentNode = root; //保存父节点，用于移除子节点
        _remove(root.right, key);
      } else if (key < root.key) {
        goLeft = true;
        _parentNode = root; //保存父节点，用于移除子节点
        _remove(root.left, key);
      } else {
        //找到当前节点
        if (goLeft) {
          _parentNode.left = null;
        } else {
          _parentNode.right = null;
        }
      }
    };
  }
  _removeNode1() {
    let _parentNode = null;
    let goLeft = false;
    let currentNode = null;
    return function _remove(root, key) {
      if (key > root.key) {
        //向右查找
        goLeft = false;
        _parentNode = root; //保存父节点，用于移除子节点
        currentNode = root.right;
        _remove(currentNode, key);
      } else if (key < root.key) {
        goLeft = true;
        _parentNode = root; //保存父节点，用于移除子节点
        currentNode = root.left;
        _remove(currentNode, key);
      } else {
        //找到当前节点 currentNode
        if (goLeft) {
          _parentNode.left = currentNode.left || currentNode.right || null;
        } else {
          _parentNode.right = currentNode.left || currentNode.right || null;
        }
      }
    };
  }
  _removeNode2() {
    let _parentNode = null;
    let goLeft = false;
    let currentNode = null;
    let _this = this;
    console.log(this);
    return function _remove(root, key) {
      if (key > root.key) {
        //向右查找
        goLeft = false;
        _parentNode = root; //保存父节点，用于移除子节点
        currentNode = root.right;
        return _remove(currentNode, key);
      } else if (key < root.key) {
        goLeft = true;
        _parentNode = root; //保存父节点，用于移除子节点
        currentNode = root.left;
        return _remove(currentNode, key);
      } else {
        //找到当前节点 currentNode
        //currentNode 包括左子树和右子树， 把当前节点对应的 右子树最小值的节点作为根节点
        // let minNode = _this.minRoot(currentNode.right); //找到右子树最小值的节点
        let minNode = currentNode.right; //找到右子树最小值的节点
        let minNode_parent = currentNode;
        while (minNode.left) {
          minNode_parent = minNode;
          minNode = minNode.left;
        }
        //最小的节点 一定没有左子树
        //如果最小节点 没有 右子树
        if (minNode.left === null && minNode.right === null) {
          minNode.left = currentNode.left;

          if (minNode_parent.key !== currentNode.key) {
            //还要判断一次是否进入过刚刚那个循环
            minNode.right = minNode_parent;
            minNode_parent.left = null;
          }
        }
        // 如果最小节点有 右子树
        if (minNode.right !== null) {
          minNode.left = currentNode.left;
        }

        if (goLeft) {
          _parentNode.left = minNode;
        } else {
          _parentNode.right = minNode;
        }
      }
    };
  }

  // search(key) 查找该节点
  search(key) {
    if (this.root === null) {
      return null;
    }
    const res = this._search(this.root, key);
    return res;
  }

  _search(root, key) {
    if (key > root.key) {
      //向右查找
      root = root.right;
      return this._search(root, key);
    } else if (key < root.key) {
      //向左查找
      root = root.left;
      return this._search(root, key);
    } else {
      if (root.key === key) {
        //找到该节点
        return root;
      } else {
        return null;
      }
    }
  }

  // 最小值
  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.key;
  }
  //某个节点下的最小值节点
  minRoot(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  // 最大值
  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.key;
  }
  //某节点下面的最大值节点
  maxRoot(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  // 先序遍历 preOrderTraverse
  preOrderTraverse() {
    this.preOrderStr = '';
    this._preOrderTraverse(this.root);
    return this.preOrderStr;
  }
  _preOrderTraverse(node) {
    if (node) {
      this.preOrderStr += node.key + '->';
      this._preOrderTraverse(node.left);
      this._preOrderTraverse(node.right);
    }
  }

  //使用循环实现先序遍历: 本质上是把递归隐性入栈的过程写出来
  preOrderTraverseByCircle() {
    this.preOrderStr = ''; //初始化 this.preOrderStr
    let currentNode = this.root;
    let stack = []; //维护一个栈
    while (currentNode || stack.length > 0) {
      while (currentNode) {
        this.preOrderStr += currentNode.key + '->'; //先访问根节点
        stack.push(currentNode); // 当前节点压入栈
        currentNode = currentNode.left; //向左遍历
      }
      //如果左侧节点为null， 则出栈， 向右遍历
      currentNode = stack.pop();
      currentNode = currentNode.right;
    }

    return this.preOrderStr;
  }

  // 中序遍历 inOrderTraverse
  inOrderTraverse() {
    this.inOrderStr = '';
    this._inOrderTraverse(this.root);
    return this.inOrderStr;
  }
  _inOrderTraverse(node) {
    if (node) {
      this._inOrderTraverse(node.left);
      this.inOrderStr += node.key + '->';
      this._inOrderTraverse(node.right);
    }
  }

  //循环实现中序遍历
  inOrderTraverseByCircle() {
    this.inOrderStr = '';
    let currentNode = this.root;
    let stack = [];
    while (currentNode || stack.length > 0) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      let node = stack.pop();
      this.inOrderStr += node.key + '->';
      currentNode = node.right;
    }

    return this.inOrderStr;
  }

  // 后序遍历 postOrderTraverse
  postOrderTraverse() {
    this._postOrderTraverse(this.root);
    return this.postOrderStr;
  }
  _postOrderTraverse(node) {
    if (node) {
      this._postOrderTraverse(node.left);
      this._postOrderTraverse(node.right);
      this.postOrderStr += node.key + '->';
    }
  }

  //循环实现后序遍历
  postOrderTraverseByCircle() {
    this.postOrderStr = '';
    let currentNode = this.root;
    let stack = [];

    let preNode = null; //记录前一次被访问的节点信息
    while (currentNode || stack.length > 0) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      //获取栈顶的元素， 即最后一次推入的元素
      let node = stack.at(-1);
      if (node.right && preNode?.key !== node.right.key) {
        //节点存在右子树且未被遍历
        currentNode = node.right;
      } else {
        stack.pop();
        this.postOrderStr += node.key + '->';
        preNode = node; //遍历右树进行保存
      }
    }

    return this.postOrderStr;
  }

  // 深度优先搜索
  dfs() {
    return this.preOrderTraverse();
  }

  // 广度优先搜索：从上到下，从左到右访问节点
  // 实现：创建一个队列，从头节点开始，逐个放入队列中。如果队列不为空， 就取出队列中的节点，把节点对应的子节点再放入队列中
  bfs() {
    let quene = [this.root]; //创建队列
    let res = '';
    //循环从队列中取出元素
    while (quene.length > 0) {
      let node = quene.shift(); //取出队列顶部元素
      res += node.key + '->'; // 获取key
      if (node.left) {
        //如果有左树， 放入队列
        quene.push(node.left);
      }
      if (node.right) {
        //如果有右树，放入队列
        quene.push(node.right);
      }
    }
    return res;
  }
}
