Chuyển đến nội dung chính
Google Lớp học
Lớp học
2025-2026-2A-NNPTUD-C5
Màn hình chính
Lịch
Đã đăng ký
Việc cần làm
2
2025-2026-2A-NNPTUD-C5
C
CC&MTPTPM Nhóm A08
K
K22-KIỂM THỬ & ĐBCLPM
ST5
Q
Quản_Lý_DA_D4D5
2
2024-2025-2B-CNPM-S3
C
C2 PTTKHT 22DTHD4-D5 (HK2B 24-25)
S
S4-TH-LT-Windows-22DTHD4
Q
QTCSDL-22DTHD4-SÁNG T2
2
2425 1B LT windows 22DTHD4 S6
LT Windows
D
DTHD4-k22
P
PHÂN TÍCH VÀ QUẢN TRỊ CSDL_SÁNG 4
S4
2
22DTHD4 ( ST3 HK1A 24-25)
BẢO MẬT THÔNG TIN
2
22DTHD4_TH AN TOAN MAY CHU WINDOWS
C
C4-MMT-22DTHD4-2B/23-24
2
2B-C2-OOP-22DTHD4
N
Nhập môn cơ sở dữ liệu - 22DTHD4, 22DTHD5
T
TH_CSDL_C6
C
CTDL & GT 22DTHD4
lý thuyết
T
Thực hành ngôn ngữ lập trình sáng 24 Dec 22
22DTH4
T
Thực hành ngôn ngữ lập trình sáng 17 Dec 22
22DTH4
2
22DTH4 Thực hành ngôn ngữ lập trình sáng 10 Dec 22
Thực hành
C
CTKS_Hutech
Monday - Tuesday
2
22DTHD4 Cơ sở lập trình
CMP1074
1
12a10 (năm học 2021-2022)
1
1
HK1
Lớp học đã lưu trữ
Cài đặt
Ngày 5/3
Nguyễn Thanh Tùng
•
14:01
100 điểm
Đến hạn 14:45
Sử dụng data và mã nguồn đã có 
- tạo các request CRUD cho  2 object đã cho 
- Thêm request /roles/:id/users để lấy ra tất cả user trong role
- Chụp ảnh post thành công 1 user và 1 role ( gửi trực tiếp ảnh không upload lên git)+ nộp link git
data2.js
JavaScript

Nhận xét của lớp học
Bài tập của bạn
Đã nộp
Page not found · GitHub · GitHub
https://github.com/hoanggiang20041/NNPTUD_0503

Nhận xét riêng tư

Explain
let dataRole = [
  {
    "id": "r1",
    "name": "Quản trị viên",
    "description": "Toàn quyền quản lý hệ thống",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r2",
    "name": "Biên tập viên",
    "description": "Quản lý nội dung và dữ liệu",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  },
  {
    "id": "r3",
    "name": "Người dùng",
    "description": "Tài khoản người dùng thông thường",
    "creationAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-04T08:00:00.000Z"
  }
]
let dataUser = [
  {
    "username": "nguyenvana",
    "password": "123456",
    "email": "vana@gmail.com",
    "fullName": "Nguyễn Văn A",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 15,
    "role": {
      "id": "r1",
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:10:00.000Z",
    "updatedAt": "2026-03-04T08:10:00.000Z"
  },
  {
    "username": "tranthib",
    "password": "123456",
    "email": "thib@gmail.com",
    "fullName": "Trần Thị B",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 7,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:11:00.000Z",
    "updatedAt": "2026-03-04T08:11:00.000Z"
  },
  {
    "username": "levanc",
    "password": "123456",
    "email": "vanc@gmail.com",
    "fullName": "Lê Văn C",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 3,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:12:00.000Z",
    "updatedAt": "2026-03-04T08:12:00.000Z"
  },
  {
    "username": "phamthid",
    "password": "123456",
    "email": "thid@gmail.com",
    "fullName": "Phạm Thị D",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:13:00.000Z",
    "updatedAt": "2026-03-04T08:13:00.000Z"
  },
  {
    "username": "hoanganh",
    "password": "123456",
    "email": "anh@gmail.com",
    "fullName": "Hoàng Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 2,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:14:00.000Z",
    "updatedAt": "2026-03-04T08:14:00.000Z"
  },
  {
    "username": "dangminh",
    "password": "123456",
    "email": "minh@gmail.com",
    "fullName": "Đặng Minh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 9,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:15:00.000Z",
    "updatedAt": "2026-03-04T08:15:00.000Z"
  },
  {
    "username": "phamkhoa",
    "password": "123456",
    "email": "khoa@gmail.com",
    "fullName": "Phạm Quốc Khoa",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 1,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:16:00.000Z",
    "updatedAt": "2026-03-04T08:16:00.000Z"
  },
  {
    "username": "truonglinh",
    "password": "123456",
    "email": "linh@gmail.com",
    "fullName": "Trương Linh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false,
    "loginCount": 0,
    "role": {
      "id": "r3",
      "name": "Người dùng",
      "description": "Tài khoản người dùng thông thường"
    },
    "creationAt": "2026-03-04T08:17:00.000Z",
    "updatedAt": "2026-03-04T08:17:00.000Z"
  },
  {
    "username": "doquang",
    "password": "123456",
    "email": "quang@gmail.com",
    "fullName": "Đỗ Quang",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 4,
    "role": {
      "id": "r2",
      "name": "Biên tập viên",
      "description": "Quản lý nội dung và dữ liệu"
    },
    "creationAt": "2026-03-04T08:18:00.000Z",
    "updatedAt": "2026-03-04T08:18:00.000Z"
  },
  {
    "username": "ngocanh",
    "password": "123456",
    "email": "ngocanh@gmail.com",
    "fullName": "Ngọc Anh",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": true,
    "loginCount": 6,
    "role": {
      "id": "r1",
      "name": "Quản trị viên",
      "description": "Toàn quyền quản lý hệ thống"
    },
    "creationAt": "2026-03-04T08:19:00.000Z",
    "updatedAt": "2026-03-04T08:19:00.000Z"
  }
]
data2.js
Đang hiển thị data2.js.