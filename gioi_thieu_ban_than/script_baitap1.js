// --- YÊU CẦU 4: Dùng document.getElementById() để lấy phần tử ---
const greetingEl = document.getElementById("greeting");
const toggleBtn = document.getElementById("toggle-btn");

// --- YÊU CẦU 3: Hiển thị lời chào theo thời gian bằng đối tượng Date ---
const currentHour = new Date().getHours(); // Lấy giờ hiện tại (0 - 23)
let greetingMessage = "";

// Cài đặt điều kiện kiểm tra buổi sáng, chiều, tối
if (currentHour >= 0 && currentHour < 12) {
  greetingMessage = "Chào buổi sáng! Chúc bạn ngày mới tốt lành.";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingMessage = "Chào buổi chiều! Chúc bạn làm việc hiệu quả.";
} else {
  greetingMessage = "Chào buổi tối! Chúc bạn nghỉ ngơi thư giãn.";
}

// Thao tác DOM: Dùng .innerText để gắn lời chào vào thẻ p
greetingEl.innerText = greetingMessage;

// Thao tác DOM: Dùng .style để làm nổi bật lời chào (đúng với yêu cầu dùng .style)
greetingEl.style.fontWeight = "bold";
greetingEl.style.color = "#007BFF";
greetingEl.style.fontSize = "18px";

// --- YÊU CẦU 2: Thêm sự kiện click đổi màu nền (Kết hợp Dark Mode) ---
toggleBtn.addEventListener("click", function () {
  // Tái sử dụng classList.toggle('dark-mode') giống bài trước
  document.body.classList.toggle("dark-mode");
});
