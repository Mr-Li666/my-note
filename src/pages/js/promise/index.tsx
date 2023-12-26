/**
 * 手写promise： pending fulfilled rejected
 */
const p = new Promise((resolve, reject) => {
  const num = Math.random();
  console.log('promise', num);

  if (num > 0.5) {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  } else {
    reject(num);
  }
})
  .then(
    (val) => {
      console.log('1111', val);
    },
    (err) => {
      console.log('2222', err);
    },
  )
  .catch((err) => {
    console.log(err);
  });

export class MyPromise {
  constructor(func) {
    //初始化状态
    this.status = 'pending';
    this.value = undefined;
    this.error = undefined;

    //需要保存成功的回调list和失败的回调list， 否则在遇到异步任务时， 无法输出
    //成功的回调
    this.resolveCallbacks = [];
    //失败的回调
    this.rejectCallbacks = [];

    const resolve = (value) => {
      this.status = 'fulfilled';
      this.value = value;
      this.resolveCallbacks.map((fn) => fn());
    };

    const reject = (error) => {
      this.status = 'rejected';
      this.error = error;
      this.rejectCallbacks.map((fn) => fn());
    };
    //new实例之后，立即执行
    func(resolve, reject);
  }

  then(resolve, reject) {
    if (this.status === 'fulfilled') {
      resolve(this.value);
    } else if (this.status === 'rejected') {
      //throw error
      reject(this.error);
    } else {
      //pending的时候， 把回调函数保存起来， 否则在settimeout时， 无法输出
      console.log(this.status);
      this.resolveCallbacks.push(() => {
        resolve(this.value);
      });
      this.rejectCallbacks.push(() => {
        reject(this.value);
      });
    }
  }
}

const p1 = new MyPromise((resolve, reject) => {
  const num = Math.random();
  console.log(num);

  if (num > 0.5) {
    setTimeout(() => {
      resolve(num);
    }, 1000);
    setTimeout(() => {
      console.log('3000');
    }, 3000);
  } else {
    reject(num);
  }
}).then(
  (success) => {
    console.log('success', success);
  },
  (err) => {
    console.log('err', err);
  },
);

export const PromiseComponent = () => {
  return (
    <div className="promise-component">
      <span>手写promise</span>
    </div>
  );
};
