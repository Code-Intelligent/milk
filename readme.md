# Milk - 购物车演示项目

一个使用原生 JavaScript 开发的简单购物车演示应用，展示了基本的电商购物功能实现。

## 项目简介

这是一个轻量级的购物车演示项目，使用纯 HTML、CSS 和 JavaScript 构建，无需任何框架依赖。项目展示了现代 Web 开发的基础技术栈，适合学习和理解前端开发的基本概念。

## 功能特性

- ✨ **商品展示** - 响应式商品网格布局，清晰展示商品信息
- 🛒 **购物车功能** - 支持添加商品到购物车，实时更新购物车数量
- 📱 **响应式设计** - 适配不同屏幕尺寸，提供良好的移动端体验
- 🔧 **代码规范** - 集成 ESLint 确保代码质量和一致性
- 🚀 **开发友好** - 内置开发服务器，支持热重载

## 技术栈

- **前端**: HTML5, CSS3, ES6+ JavaScript
- **开发工具**: ESLint, live-server
- **构建**: 无需构建步骤，直接运行

## 项目结构

```
milk/
├── src/
│   ├── index.html      # 主页面
│   ├── app.js          # 应用逻辑
│   └── styles.css      # 样式文件
├── package.json        # 项目配置
├── .eslintrc.json     # ESLint 配置
└── readme.md          # 项目文档
```

## 开始使用

### 环境要求

- Node.js (推荐 v14+)
- npm 或 yarn

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/Code-Intelligent/milk.git
cd milk

# 安装依赖
npm install
```

### 运行项目

```bash
# 启动开发服务器
npm start
```

启动后，在浏览器中访问 `http://127.0.0.1:8080` 即可查看应用。

### 代码检查

```bash
# 运行 ESLint 检查代码质量
npm run lint

# 自动修复可修复的问题
npm run lint -- --fix
```

## 使用说明

1. **浏览商品**: 打开应用后可以看到商品列表，每个商品显示名称和价格
2. **添加到购物车**: 点击商品下方的"加入购物车"按钮
3. **查看购物车**: 页面顶部显示当前购物车中的商品数量

## 开发指南

### 添加新商品

在 `src/app.js` 文件中的 `products` 数组添加新商品：

```javascript
const products = [
  { id: 1, name: '商品1', price: 99.99 },
  { id: 2, name: '商品2', price: 199.99 },
  // 添加新商品
  { id: 4, name: '新商品', price: 399.99 }
];
```

### 修改样式

编辑 `src/styles.css` 文件来自定义界面样式。项目使用 CSS Grid 和 Flexbox 进行布局。

### 扩展功能

项目结构简单清晰，可以轻松扩展以下功能：
- 商品详情页面
- 购物车商品数量修改
- 商品分类筛选
- 价格计算和结算
- 本地存储购物车数据

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目仅用于学习和演示目的。
