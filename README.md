
# 项目设置和启动指南

本指南旨在帮助开发者在本地环境中设置和运行Electron应用。以下步骤包括克隆GitHub项目、安装依赖及运行项目。

## 前置条件

确保你的本地环境已安装以下软件：

- **Git**: 用于克隆远程仓库。
- **Node.js**: 运行JavaScript代码，npm用于管理Node包。

### 安装 Git 和 Node.js

确保 Git 和 Node.js 已安装。你可以在终端运行以下命令来验证是否安装成功：

```bash
git --version
node --version
npm --version
```

### 如果这些工具尚未安装，你可以访问 [Git官网](https://git-scm.com/) 和 [Node.js官网](https://nodejs.org/) 来下载并安装。

## 克隆项目

克隆仓库到你的本地机器：

```bash
git clone https://github.com/yourusername/ESG.git
cd ESG
```

请将 `yourusername` 替换为你的GitHub用户名。

## 安装依赖

在项目目录中，安装所有必需的依赖：

```bash
npm install
```

### 全局安装 electronmon

`electronmon` 用于监视Electron应用的更改并自动重启应用，可以通过以下命令全局安装：

```bash
npm install -g electronmon
```

## 运行项目

启动项目，使用以下命令：

```bash
npm start
```

该命令将使用 `electronmon` 来运行 Electron 应用，允许你在开发过程中实时看到更改效果。

## 常见问题解决

如果在启动项目时遇到任何问题，如依赖缺失或配置错误，确保所有步骤均已正确完成。你也可以通过运行 `npm install` 来重新安装依赖，确保所有必需的包都已正确安装。

## 安全和维护

- 不推荐以root用户运行Electron。
- 定期更新你的依赖和工具，以确保安全性和最新的功能支持。

遵循本指南，你可以在本地环境中成功设置和运行你的Electron应用。对于任何进一步的问题或帮助，可以查阅相关的开发文档或社区资源。
```

