
  const display = document.getElementById('display');
  const allButtons = document.querySelectorAll('.btn');
  let shouldReset = false;
  allButtons.forEach(function (button) {
    button.addEventListener('click', function () {
 
      const action = button.dataset.action; 
      const value = button.dataset.value;   
 
      if (action === 'clear') {
        xoa();
      } else if (action === 'backspace') {
        xoa1kitu();
      } else if (action === 'equals') {
        tinhKQ();
      } else {
        themso(value, button.classList.contains('operator'));
      }
    });
  });
  function themso(value, isOperator) {
    if ((display.innerText === '0' || shouldReset) && !isOperator) {
      display.innerText = '';
    }
    shouldReset = false;
    display.innerText += value;
  }
  function xoa() {
    display.innerText = '0';
    shouldReset = false;
  }
  function xoa1kitu() {
    if (shouldReset) {
      xoa();
      return;
    }
 
    let noiDung = display.innerText;
    noiDung = noiDung.slice(0, -1);
    display.innerText = noiDung === '' ? '0' : noiDung;
  }
  function tinhKQ() {
    const bieuThuc = display.innerText;
    const ketThucBangToanTu = /[+\-*/.]$/.test(bieuThuc);
    if (bieuThuc === '' || ketThucBangToanTu) {
      display.innerText = 'Lỗi';
      shouldReset = true;
      return;
    }
    try {
      const ketQua = eval(bieuThuc);
      display.innerText = ketQua;
    } catch (error) {
  
      display.innerText = 'Lỗi';
    }
 
    shouldReset = true;
  }