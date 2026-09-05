// lấy 2 phần tử html có id greeting và togggle-btn  ra để JS đọc và lưu chúng vào biến const//
const greetingEl = document.getElementById("greeting");
const toggleBtn = document.getElementById("toggle-btn");

const currentHour = new Date().getHours(); // tạo đối tượng chứ tgian và lấy gia thời gian hiện tại //
let greetingMessage = "";
if (currentHour >= 0 && currentHour < 12) { // kiểm tra xem tgian hiện tại là mấy giờ để gán tin nhắn chào //
  greetingMessage = "Chào buổi sáng! Chúc bạn ngày mới tốt lành."; 
} else if (currentHour >= 12 && currentHour < 18) {
  greetingMessage = "Chào buổi chiều! Chúc bạn làm việc hiệu quả."; 
} else {
  greetingMessage = "Chào buổi tối! Chúc bạn nghỉ ngơi thư giãn.";
}
greetingEl.innerText = greetingMessage; // ghi nội dung chào vào thẻ <p id="greeting"> đang để trống ở HTML //
greetingEl.style.fontWeight = "bold"; // chirnh sửa style trực tiếp trên JS //
greetingEl.style.color = "#007BFF";
greetingEl.style.fontSize = "18px";
toggleBtn.addEventListener("click", function () { // báo thông tin đổi màu nền khi người dùng ấn nào nút đổi màu để function đổi màu hoạt động //
  document.body.classList.toggle("dark-mode"); 
});
