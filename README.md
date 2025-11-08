# 通讯录应用前端项目

这是一个基于React的通讯录应用前端项目，支持联系人的添加、编辑和删除功能。

## 技术栈

- React 18
- Axios
- CSS

## 项目结构

```
20240001_concacts_frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── codestyle.md
```

## 功能特性

- 添加新联系人（姓名、电话）
- 查看联系人列表
- 编辑现有联系人
- 删除联系人

## 安装和运行

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm start
```

3. 构建生产版本
```bash
npm run build
```

## 注意事项

- 前端默认连接到 `http://localhost:5000` 的后端API
- 确保后端服务已经启动才能正常使用所有功能