# Bốn lá thư gửi bé — React + Node backend + Render

## Chạy local
1. Cài Node.js 20 trở lên.
2. `npm install`
3. `npm run dev` — giao diện React tại localhost:5173, dùng khi chỉnh sửa.
4. `npm run build` rồi `npm start` — chạy **cả website và backend** trên localhost:3000.
5. Test backend: `http://localhost:3000/api/health`.

## Deploy lên Render
1. Tạo repository GitHub mới, upload **toàn bộ nội dung thư mục dự án** (không upload thư mục node_modules).
2. Truy cập dashboard.render.com → New → Web Service → chọn repo GitHub.
3. Runtime: Node, Build command: `npm install && npm run build`, Start command: `npm start`.
4. Có thể dùng file `render.yaml` để triển khai Blueprint.
5. Sau khi triển khai thành công, Render cung cấp URL HTTPS dạng `https://ten-web.onrender.com` để chia sẻ.
6. Mở URL `/api/health` để kiểm tra backend.

**Lưu ý:** Với kế hoạch miễn phí, web có thể ngủ khi không dùng và lần mở đầu sẽ chậm. Không có database (chưa cần cho website này). Những lá thư và ảnh nằm trong frontend, người có kỹ năng vẫn có thể xem chúng trong mã nguồn tải về; “bí mật” chỉ là phần hiển thị trước khi mở thư, **không phải bảo vệ bằng mật khẩu**.

## Video nhạc TikTok
Đặt 4 video tải từ TikTok vào `public/music/` theo tên:
- `01-xin-loi.mp4`
- `02-hieu-nhau.mp4`
- `03-ky-niem.mp4`
- `04-loi-hen.mp4`

Nhạc sẽ được lấy từ âm thanh trong video MP4. Cần có quyền sử dụng nhạc nếu chia sẻ website công khai. Một số trình duyệt chặn tự phát âm thanh; người xem cần chạm vào nút phát. **Chưa có 4 video của bạn trong ZIP**.

## Nội dung & ảnh
13 tấm ảnh riêng trong `public/images/anh-01.jpg` đến `anh-13.jpg`, phân chia 3-3-3-4. Nội dung 4 thư nằm trong `src/components/LetterGarden.jsx`. Trang ngoài chỉ nói bí mật, nội dung thực tế hiện khi mở thư.
