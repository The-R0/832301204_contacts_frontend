# 前端代码规范

本代码规范基于 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 和 [React 官方推荐的代码风格](https://react.dev/learn/writing-markup-with-jsx)。

## JavaScript 规范

### 命名规范
- 变量和函数使用小驼峰命名法（camelCase）
- 类使用大驼峰命名法（PascalCase）
- 常量使用全大写加下划线（UPPER_SNAKE_CASE）

### 缩进和格式
- 使用2个空格进行缩进
- 每行最大长度为100个字符
- 使用单引号
- 语句末尾必须添加分号

### 代码示例
```javascript
// 好的示例
const userName = '张三';
function getUserInfo() {
  return { name: userName };
}

// 避免的示例
var username = "张三"; // 使用var而不是const/let，使用了双引号
function get_user_info() { // 使用了下划线命名
  return {name:username} // 缺少空格，缺少分号
}
```

## React 规范

### 组件命名
- 组件名称使用大驼峰命名法
- 文件名与组件名保持一致

### Hooks 使用
- 只在函数组件的顶层调用 Hooks
- 不在循环、条件或嵌套函数中调用 Hooks

### JSX 规范
- 组件属性过多时，每行写一个属性
- 自闭合标签必须使用 `/>
- 事件处理器使用 handle 开头

### 代码示例
```jsx
// 好的示例
function ContactItem({ name, phone, onEdit, onDelete }) {
  return (
    <li>
      <div className="contact-info">
        <span className="contact-name">{name}</span>
        <span className="contact-phone">{phone}</span>
      </div>
      <div className="contact-actions">
        <button onClick={onEdit}>编辑</button>
        <button onClick={onDelete}>删除</button>
      </div>
    </li>
  );
}

// 避免的示例
function contact_item({name,phone,onEdit,onDelete}){ // 组件名使用小驼峰，参数缺少空格
  return <li><div>{name}{phone}</div><button onClick={onEdit}>编辑</button></div></li> // 嵌套过深，缺少换行
}
```

## CSS 规范

### 命名规范
- 使用 BEM (Block Element Modifier) 命名约定
- 避免使用ID选择器
- 类名使用小写字母和连字符

### 格式
- 每条规则后添加分号
- 大括号内的内容缩进2个空格
- 选择器和大括号之间添加空格

### 代码示例
```css
/* 好的示例 */
.contact-form {
  background-color: #f9f9f9;
  padding: 20px;
}

.contact-form__input {
  width: 100%;
  padding: 10px;
}

/* 避免的示例 */
.contactForm{ /* 缺少空格，使用驼峰命名 */
  background-color:#f9f9f9; padding:20px /* 缺少分号，一行写多条规则 */
}

#contactInput{ /* 使用了ID选择器 */
  width:100%;
}