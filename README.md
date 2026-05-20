# 🚀 AI Content Creation Ecosystem

Trang landing page chuyên nghiệp cho dịch vụ **AI Creative Tools & Digital Content** – phong cách cinematic futuristic, dark mode premium với hiệu ứng glassmorphism và neon glow.

---

## ✨ Tính Năng

- 🎬 **Hero Section** – Toàn màn hình, tiêu đề lớn, CTA nổi bật
- 🃏 **App Card Grid** – 6 ứng dụng AI với badge HOT/NEW, giá và nút mua
- ⚡ **Why Choose Us** – 4 tính năng nổi bật, layout 4 cột
- 🖼️ **Gallery / Showcase** – Demo video và hình ảnh AI
- 📋 **Booking Form** – Form đặt hàng glassmorphism với validation
- 🦶 **Footer** – Địa chỉ, liên hệ, giờ làm việc, quick links

---

## 🛠️ Công Nghệ Sử Dụng

| Công nghệ | Mục đích |
|-----------|----------|
| **React 19 + Vite** | Framework & build tool |
| **Tailwind CSS v4** | Styling utility-first |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |

---

## 📦 Cài Đặt

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Các bước

```bash
# 1. Clone hoặc tải project về
git clone <repo-url>
cd ai-landing

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt tại: **http://localhost:5173**

---

## 🚀 Chạy Dự Án

```bash
# Development mode (hot reload)
npm run dev

# Build production
npm run build

# Preview bản build
npm run preview
```

---

## 📁 Cấu Trúc Thư Mục

```
ai-landing/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Thanh điều hướng cố định
│   │   ├── Hero.jsx         # Section hero toàn màn hình
│   │   ├── AppCard.jsx      # Card ứng dụng AI đơn lẻ
│   │   ├── AppsSection.jsx  # Grid tất cả ứng dụng
│   │   ├── Features.jsx     # Section "Tại sao chọn chúng tôi"
│   │   ├── Gallery.jsx      # Showcase gallery
│   │   ├── BookingForm.jsx  # Form đặt hàng
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── apps.json        # Dữ liệu ứng dụng AI (dễ chỉnh sửa)
│   ├── App.jsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles + Tailwind
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # Tài liệu này
```

---

## 📝 Chỉnh Sửa Dữ Liệu Ứng Dụng

Tất cả dữ liệu ứng dụng AI được lưu trong `src/data/apps.json`. Để thêm hoặc sửa ứng dụng:

```json
{
  "id": 7,
  "name": "Tên ứng dụng mới",
  "description": "Mô tả ngắn về ứng dụng",
  "badge": "HOT",
  "price": "70k",
  "priceNumber": 70000,
  "thumbnail": "URL ảnh thumbnail (tỉ lệ 16:9)",
  "category": "Danh mục"
}
```

---

## 📱 Responsive Design

| Thiết bị | Layout |
|----------|--------|
| Mobile (< 640px) | 1 cột, nút lớn, khoảng cách rộng |
| Tablet (640–1024px) | 2 cột linh hoạt |
| Desktop (> 1024px) | 3 cột đầy đủ, hiệu ứng tối đa |

---

## 🎨 Design System

- **Màu chính:** `#00d4ff` (Cyan), `#a855f7` (Purple), `#ec4899` (Pink)
- **Nền:** `#020408` (Deep dark)
- **Font tiêu đề:** Orbitron (futuristic)
- **Font nội dung:** Inter
- **Hiệu ứng:** Glassmorphism, Neon glow, Framer Motion animations

---

## 👨‍💻 Tác Giả

**Designed by Hai Cong**

---

*© 2026 AI Creative Tools. Tất cả quyền được bảo lưu.*
