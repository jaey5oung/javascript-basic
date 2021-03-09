// async & await
// clear style of useing promise

//1. async
//원래는 프로미스로 리젝트가 실행되 성공하면 값을 호출하는 원리인데 function을 async로 감싸면 그 기능을 수행할수있게 해준다
async function fetchUser() {
  return '재영';
}
const user = fetchUser();
user.then(console.log());
console.log(user);

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  throw 'error';
  return '사과';
}

async function getBanana() {
  await delay(3000);
  return '바나나';
}
// 어싱크방법
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple}+${banana}`;
}
pickFruits().then(console.log);

// promise방법
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}` + `${banana}`);
  });
}
pickFruits().then(console.log);

//어싱크 프로미스올로 개선방법
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
