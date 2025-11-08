const express = require('express');
const path = require('path');
const app = express();

// 设置静态文件目录为当前目录
app.use(express.static(__dirname));

// 处理所有路由请求，发送当前目录下的index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`前端服务运行在 http://localhost:${PORT}`);
});