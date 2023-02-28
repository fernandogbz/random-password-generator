// ABCDEFGHIJKLMNOPQRSTUVWXWZ
// abcdefghijklmnopqrstuvwxwz
// !\"$%&/()=?@~'\\.\';:+=^*_-"
// 0123456789

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxwz!\"$%&/()=?@~`\\.\;:+=^*_-"0123456789';

let output = document.getElementById("output");

const randomValue = (value) => {
  return Math.floor(Math.random()*value);
}

const genPassword = () => {
  //Updating numbers in the right h3 by moving the input range
  let length = document.getElementById('length').value;
  document.getElementById("length-val").textContent = length;

  let str = '';

  for(let i=0; i<length; i++){
    let random = randomValue(characters.length);
    str += characters.charAt(random);
  }
  output.value = str;
}

genPassword();