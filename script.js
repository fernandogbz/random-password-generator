// ABCDEFGHIJKLMNOPQRSTUVWXWZ
// abcdefghijklmnopqrstuvwxwz
// !\"$%&/()=?@~'\\.\';:+=^*_-"
// 0123456789

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxwz!\"$%&/()=?@~`\\.\;:+=^*_-"0123456789';

let output = document.getElementById("output");

const genPassword = () => {
  let length = document.getElementById('length').value;
  document.getElementById("length-val").textContent = length;
}