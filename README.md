# IT HelpDesk — CompTIA A+ Quiz Trainer

Ứng dụng quiz CompTIA A+ chạy trực tiếp trên trình duyệt, chia câu hỏi theo từng video học.

## Nội dung hiện có

- Video 1 — Laptop Hardware: 20 câu
- Video 2 — Motherboards/Mainboard: 20 câu
- Video 3 — Motherboard Connections: 10 câu
- Video 4 — CPU Features: 10 câu
- Video 5 — Cooling: 10 câu
- Tổng cộng: 70 câu

## Tính năng

- Chế độ học và chế độ thi
- Câu hỏi tiếng Anh kèm bản dịch tiếng Việt
- Dịch đáp án, từ vựng và keyword
- Giải thích đáp án đúng và sai
- Luyện lại riêng các câu làm sai
- Chọn từng video hoặc ôn tổng hợp
- Giao diện sáng/tối
- Chạy hoàn toàn ở phía trình duyệt, không cần cài đặt

## Chạy trên máy

Dùng Live Server hoặc một web server tĩnh để mở dự án. Dữ liệu câu hỏi được tải bằng `fetch`, nên không nên mở trực tiếp bằng giao thức `file://`.

## GitHub Pages

Repository có workflow `.github/workflows/deploy-pages.yml` để triển khai tự động từ nhánh `main` khi GitHub Pages được đặt nguồn là **GitHub Actions**.