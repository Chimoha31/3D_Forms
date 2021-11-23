'use strict';

const email = document.querySelector(`input[name="email"]`);
email.addEventListener('blur', () => {
  if(email.value === ''){
    email.style.backgroundColor = 'pink';
    email.nextElementSibling.innerHTML = "＊emailを入力してください"
  }else if(email.value){
    email.style.backgroundColor = '#fff';
    email.nextElementSibling.innerHTML = '';
  }
});