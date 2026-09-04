// Lấy ra phần tử body của trang web
const body = document.body;

// Lấy ra nút bấm thông qua ID
const btn = document.getElementById("button");

// Thêm sự kiện click cho nút bấm
btn.addEventListener("click", function () {
  // Hàm toggle: Nếu body chưa có class 'dark-mode' thì thêm vào, nếu có rồi thì xóa đi
  body.classList.toggle("dark-mode");
});
