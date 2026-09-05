
const greetingEl = document.getElementById("greeting");
const toggleBtn = document.getElementById("toggle-btn");

const currentHour = new Date().getHours(); 
let greetingMessage = "";
if (currentHour >= 0 && currentHour < 12) {
  greetingMessage = "Chào buổi sáng! Chúc bạn ngày mới tốt lành.";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingMessage = "Chào buổi chiều! Chúc bạn làm việc hiệu quả.";
} else {
  greetingMessage = "Chào buổi tối! Chúc bạn nghỉ ngơi thư giãn.";
}
greetingEl.innerText = greetingMessage;
greetingEl.style.fontWeight = "bold";
greetingEl.style.color = "#007BFF";
greetingEl.style.fontSize = "18px";
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
