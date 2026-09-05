
  const display = document.getElementById('display'); // trả về phần tử display
  const allButtons = document.querySelectorAll('.btn'); // trả về một danh sách class btn //
  let shouldReset = false; //sau khi bấm =  nếu bấm số tiếp theo thì xóa để nhập phép tính mới//
  allButtons.forEach(function (button) { // lặp qua từng phần tử trong danh sách //
    button.addEventListener('click', function () {
 
      const action = button.dataset.action; //đọc thuộc tính  data-action ở html //
      const value = button.dataset.value;   
 
      if (action === 'clear') { // kiểm tra điều kiện để thực thi //
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
    if ((display.innerText === '0' || shouldReset) && !isOperator) { // nếu màn hình đâng là số 0 hoặc vừa bấm = thì xóa đi hết  và hiện số vừa ấn //
      display.innerText = '';
    }
    shouldReset = false; 
    display.innerText += value; // nối số vào màn hình //
  }
  function xoa() {
    display.innerText = '0'; // gán lại số 0 và reset //
    shouldReset = false;
  }
  function xoa1kitu() {
    if (shouldReset) { // nếu vừa bấm = thì sẽ xóa tất cả đặt lại về 0//
      xoa();
      return;
    }
 
    let noiDung = display.innerText;
    noiDung = noiDung.slice(0, -1); // xóa 1 kí tự ở cuối dãy số //
    display.innerText = noiDung === '' ? '0' : noiDung;
  }
  function tinhKQ() {
    const bieuThuc = display.innerText;
    const ketThucBangToanTu = /[+\-*/.]$/.test(bieuThuc); //biểu thức có đang kết thúc bằng một toán tử không//
    if (bieuThuc === '' || ketThucBangToanTu) {
      display.innerText = 'Lỗi';
      shouldReset = true;
      return;
    }
    try { // chạy thử để tránh lỗi web
      const ketQua = eval(bieuThuc);
      display.innerText = ketQua;
    } catch (error) { // bị lỗi sẽ nhảy sang catch và báo chữ lỗi //
  
      display.innerText = 'Lỗi';
    }
 
    shouldReset = true;
  }
