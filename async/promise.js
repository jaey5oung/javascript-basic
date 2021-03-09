// Promise is a JavaScript object for asynchronous operation
// state: peding -> fulfilled or rejected
// Producer vs Consumer

//1. Producer
// 새로운 프로미스가 만들어질땐 엑스큐터라는 인자가 바로실행이된다
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('성공한재영이');
    reject(new Error('실패한재영이'));
  }, 2000);
});

//2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('끝나는재영이');
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resoleve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4.Error Hangdling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}=>'달걀'`), 1000);
  });
const cook = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>'후라이'`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return '빵';
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
