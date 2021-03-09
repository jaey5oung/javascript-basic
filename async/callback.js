console.log(1);
setTimeout(() => {
  console.log('2');
}, 1000);
console.log(3);

// Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {}
}
