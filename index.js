const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
];

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
];

// --- ROLES CRUD ---

// Get all roles
app.get('/roles', (req, res) => {
  res.json(dataRole);
});

// Get role by ID
app.get('/roles/:id', (req, res) => {
  const role = dataRole.find(r => r.id === req.params.id);
  if (role) {
    res.json(role);
  } else {
    res.status(404).json({ message: 'Role not found' });
  }
});

// Create role
app.post('/roles', (req, res) => {
  const newRole = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    creationAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  dataRole.push(newRole);
  res.status(201).json(newRole);
});

// Update role
app.put('/roles/:id', (req, res) => {
  const index = dataRole.findIndex(r => r.id === req.params.id);
  if (index !== -1) {
    dataRole[index] = {
      ...dataRole[index],
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    res.json(dataRole[index]);
  } else {
    res.status(404).json({ message: 'Role not found' });
  }
});

// Delete role
app.delete('/roles/:id', (req, res) => {
  const index = dataRole.findIndex(r => r.id === req.params.id);
  if (index !== -1) {
    const deletedRole = dataRole.splice(index, 1);
    res.json(deletedRole[0]);
  } else {
    res.status(404).json({ message: 'Role not found' });
  }
});

// --- USERS CRUD ---

// Get all users
app.get('/users', (req, res) => {
  res.json(dataUser);
});

// Get user by username
app.get('/users/:username', (req, res) => {
  const user = dataUser.find(u => u.username === req.params.username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create user
app.post('/users', (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    fullName: req.body.fullName,
    avatarUrl: req.body.avatarUrl || "https://i.sstatic.net/l60Hf.png",
    status: req.body.status !== undefined ? req.body.status : true,
    loginCount: req.body.loginCount || 0,
    role: req.body.role || {
      id: "r3",
      name: "Người dùng",
      description: "Tài khoản người dùng thông thường"
    },
    creationAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  dataUser.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put('/users/:username', (req, res) => {
  const index = dataUser.findIndex(u => u.username === req.params.username);
  if (index !== -1) {
    dataUser[index] = {
      ...dataUser[index],
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    res.json(dataUser[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete user
app.delete('/users/:username', (req, res) => {
  const index = dataUser.findIndex(u => u.username === req.params.username);
  if (index !== -1) {
    const deletedUser = dataUser.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// --- RELATIONSHIP: /roles/:id/users ---
app.get('/roles/:id/users', (req, res) => {
  const roleId = req.params.id;
  const usersInRole = dataUser.filter(u => u.role && u.role.id === roleId);
  res.json(usersInRole);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
