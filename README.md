# 项目部署和运行指南

本指南旨在帮助开发者和系统管理员在服务器上部署和运行 Electron 应用，包括从克隆项目、安装依赖到配置运行环境的全过程。

## 环境准备

确保你的服务器安装了以下必要软件：

- **Git**: 用于克隆远程仓库。
- **Node.js**: 运行 JavaScript 代码，npm 用于管理包。
- **Xvfb**（可选）: 在无图形界面的服务器上提供虚拟显示。

### 安装 Git 和 Node.js

在 Debian 或 Ubuntu 系统上，使用以下命令安装 Git 和 Node.js：

```bash
sudo apt update
sudo apt install git
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
