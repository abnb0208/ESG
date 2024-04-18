# ESG评分计算软件设置和启动指南

## 简介
本项目是一个用于计算环境、社会和公司治理（ESG）评分的软件。它旨在提供一个交互式工具，帮助用户了解和计算ESG评分。本软件仅为教育和学习目的而开发，所有版权归原作者所有，严禁用于商业用途。

## 项目目的
该软件提供了一个实用的平台，通过具体的数据输入，用户可以计算和得到相关的ESG评分，以此深入理解各个公司或组织在环境、社会责任和治理方面的表现。该项目也旨在帮助开发者学习如何在本地环境中设置和运行一个基于Electron的应用。

## 前置条件
请确保你的本地环境已安装以下软件：
- **Git**: 用于克隆远程仓库。
- **Node.js**: 运行JavaScript代码，npm用于管理Node包。

### 安装 Git 和 Node.js
确认 Git 和 Node.js 已安装。在终端运行以下命令以验证安装：

```bash
git --version
node --version
npm --version


### 如果这些工具尚未安装，你可以访问 [Git官网](https://git-scm.com/) 和 [Node.js官网](https://nodejs.org/) 来下载并安装。

## 克隆项目

克隆仓库到你的本地机器：

```bash
git clone https://github.com/abnb0208/ESG.git
cd ESG
```



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

