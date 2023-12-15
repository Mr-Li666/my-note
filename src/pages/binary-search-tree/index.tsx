import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';

import { BinarySearchTree } from '@/data-structure';

import bidirection2 from '../../assets/bidirection2.png';
import bidirection3 from '../../assets/bidirection3.png';
import bidirection4 from '../../assets/bidirection4.png';
import binarytree1 from '../../assets/binarytree1.png';

const binarySearchTree = new BinarySearchTree();
export function BinarySearchTreeComponent() {
  const [value, setValue] = useState('');

  return (
    <div className="binarySearchTree-component">
      <Image.PreviewGroup items={[binarytree1]}>
        <Image width={400} src={binarytree1} />
      </Image.PreviewGroup>

      <div className="singlyLink-btn-group my-[20px]">
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            // binarySearchTree.insert((Math.random() * 100).toFixed());

            binarySearchTree.insert(25);
            binarySearchTree.insert(18);
            binarySearchTree.insert(69);
            binarySearchTree.insert(5);

            binarySearchTree.insert(99);

            binarySearchTree.insert(20);
            // binarySearchTree.insert(19);
            // binarySearchTree.insert(21);
            binarySearchTree.insert(32);
            binarySearchTree.insert(45);

            console.log(binarySearchTree);
          }}
        >
          insert
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            const node = binarySearchTree.search(5);
            console.log(binarySearchTree, node);
          }}
        >
          search
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            const node = binarySearchTree.remove(18);
            console.log(binarySearchTree);
          }}
        >
          remove
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const min = binarySearchTree.min();
            setValue(min);
            console.log(min, binarySearchTree);
          }}
        >
          min
        </Button>
        <Button
          type="primary"
          className="mr-[8px]"
          onClick={() => {
            const max = binarySearchTree.max();
            setValue(max);
            console.log(max, binarySearchTree);
          }}
        >
          max
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const preOrderTraverse = binarySearchTree.preOrderTraverse();
            console.log(preOrderTraverse);
            setValue(preOrderTraverse);
          }}
        >
          先序遍历
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const preOrderTraverse = binarySearchTree.preOrderTraverseByCircle();
            console.log(preOrderTraverse);
            setValue(preOrderTraverse);
          }}
        >
          先序遍历(循环)
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const inOrderTraverse = binarySearchTree.inOrderTraverse();
            console.log(inOrderTraverse);
            setValue(inOrderTraverse);
          }}
        >
          中序遍历
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const inOrderTraverse = binarySearchTree.inOrderTraverseByCircle();
            console.log(inOrderTraverse);
            setValue(inOrderTraverse);
          }}
        >
          中序遍历(循环)
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const postOrderTraverse = binarySearchTree.postOrderTraverse();
            console.log(postOrderTraverse);
            setValue(postOrderTraverse);
          }}
        >
          后序遍历
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const postOrderTraverse = binarySearchTree.postOrderTraverseByCircle();
            console.log(postOrderTraverse);
            setValue(postOrderTraverse);
          }}
        >
          后序遍历(循环)
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const dfs = binarySearchTree.dfs();
            console.log(dfs);
            setValue(dfs);
          }}
        >
          深度优先搜索
        </Button>
        <Button
          className="mr-[8px]"
          type="primary"
          onClick={() => {
            const bfs = binarySearchTree.bfs();
            console.log(bfs);
            setValue(bfs);
          }}
        >
          广度优先搜索
        </Button>
      </div>
      <div>{value}</div>

      <div className="singlyLink-reference">
        <div>
          <a href="https://juejin.cn/post/7146128357506154527?searchId=20231006170449265164C1AAADA79F585F#heading-7">
            二叉搜索树
          </a>
        </div>
        <div>
          <a href="https://blog.csdn.net/qq_61959780/article/details/127690872">
            二叉搜索树
          </a>
        </div>
      </div>
    </div>
  );
}
