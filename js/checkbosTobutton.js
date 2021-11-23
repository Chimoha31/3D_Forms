'use strict';

const agree = document.getElementById('agree');

// checkboxの場合、clickではなく、changeを使うのが適切。
agree.addEventListener('change', () => {
  if(agree.checked) {
    document.getElementById('submit').disabled = false;
  }else if(!agree.checked) {
    document.getElementById('submit').disabled = true;   
  }
});

/*上記は以下で省略できる
document.getElementById('submit').disabled = !agree.checked;
*/