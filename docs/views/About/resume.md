---
title: "简历"
date: 2022-1-11 13:56:00
sidebar: "auto"
keys:
  - "e10adc3949ba59abbe56e057f20f883e"
publish: false
---
:::tip 基本信息
姓名：fmz
邮箱：1585209053@qq.com
手机：13633205983
:::


# 求职简历 - AI 全栈开发工程师（偏前端）

::: left

icon:info 冯明哲 / 男 / 2000.2.21 icon:blog 现居河北邯郸，可快速到岗

icon:phone 13633205983 icon:email [a13633205983@163.com](mailto:a13633205983@163.com) icon:fa-building 个人网站：[aixshi.top](http://aixshi.top)

icon:fa-calendar-alt 4 年前端经验 & 1年独立开发经验

:::

::: right

:::

## 专业技能

- **前端与类型系统**：熟练使用 **React、TypeScript**，掌握 Hooks、状态管理 MobX；熟悉 **Vue 2 / Vue 3**。熟悉 React 渲染机制与 Diff 算法，了解 React 19 新特性。使用 **Zod** 实现运行时数据校验、表单验证及工具参数 Schema 定义。
- **工程化与架构**：熟练使用 **Vite、Webpack、pnpm Monorepo**，掌握构建优化、代码分割、依赖管理及多包发布；熟悉 **Node.js** 全栈开发。了解微前端架构及代码执行沙箱，具备复杂前端项目的工程化与架构设计能力。
- **Java 后端开发**：熟悉 **Spring Boot** 后端开发模式，了解依赖注入、自动配置、Spring MVC 请求处理流程；了解 **MyBatis / MyBatis-Plus** 数据访问、实体映射及 CRUD 开发。能够基于 RESTful API 设计接口，完成参数校验、统一异常处理及前后端联调。
- **数据库与服务部署**：熟悉 **MySQL**，掌握 SQL 查询、表结构设计、索引及事务基础；了解 **Redis** 缓存与常见数据结构。熟悉 **JWT** 身份认证及 RBAC 权限模型，了解 OAuth 2.0、SSO。掌握 **Docker、Docker Compose、Nginx、Linux** 基础运维及 CI/CD 部署流程。
- **AI Agent 与 RAG**：熟悉 **Spring AI、LangChain4j** Java AI 应用开发框架，理解 Agent 核心运行机制，掌握 ReAct、Tool Calling、Memory、任务规划及工具执行循环等核心概念；具备 RAG 系统设计思路，理解文档解析与切分、Embedding 向量化、向量检索、混合检索、Rerank 重排序及引用溯源等关键流程。熟悉 Prompt Engineering、Context Engineering 与 Harness Engineering，能够结合 **Spring Boot、Java 后端及前端技术**构建 AI 应用。

## 工作经历

### 独立开发者 | AI智能体运营平台 + Steam独立游戏开发（2026.03 - 至今）

### 多智能体协作与知识检索平台｜ ToB ｜AI 全栈项目｜ 项目地址: [aixshi.top/ai](http://aixshi.top/ai)

**技术栈：** Vue 2、Element UI、Java 17、Spring Boot、Spring Security、LangChain4j、MySQL、PostgreSQL、pgvector、Redis、JWT

- **Agent 流程管理：** 基于 LangChain4j 构建 AI Agent 执行流程，利用 Tool Calling 实现模型与外部工具的交互，结合业务状态管理实现多步骤任务编排、条件路由与执行控制；通过工具参数 Schema 定义及服务端校验，约束模型生成的工具参数，降低无效工具调用风险。
- **RAG 知识检索：** 基于 LangChain4j + PostgreSQL + pgvector 构建知识检索，支持文档解析与切分、Embedding 向量化、向量存储及相似度检索；将检索结果注入模型上下文，结合元数据过滤与引用溯源，实现基于知识库的检索增强问答。
- **后端服务设计：** 基于 Spring Boot 构建后端服务，采用分层架构实现用户认证、会话管理、知识库管理及 AI 工具调用 API；使用 Spring Security + JWT 实现身份认证与接口权限控制，模型 API Key 等敏感信息通过模型配置管理，不写入前端。
- **前端性能优化：** 基于 Vue 2 实现管理端与对话页，对话接口使用流式响应，前端通过 ReadableStream 逐段读取并实时展示模型回答。

### 独立游戏制作｜ ToC 全栈项目｜项目地址：[WannaRich](https://store.steampowered.com/app/5379100)

**技术栈：AI Coding（Cursor、Codex）/ Spec-Driven Development / Godot / ENet / Linux / 阿里云 ECS / Steamworks**

- **AI 驱动的研发流程**：独立完成 WannaRich 的核心开发与 Steam 平台发布。采用 Spec-Driven Development（规范驱动开发），将需求拆解为架构设计、数据流分析、文件级改动计划、约束条件和验收标准，再通过 Cursor、Codex 辅助实现。使用 `AGENTS.md` 固化项目约定、Git 操作规范、国际化术语和测试要求，结合人工审查与自动化验证，降低 AI 修改复杂业务逻辑时引入回归问题的风险。
- **AI Coding 工程化与质量控制**：针对存档、多人联机等高风险模块，建立先分析、后实施、再验证的开发闭环。将服务器权威边界、联机协议、场景切换和存档兼容性等约束纳入开发规范，通过可执行测试验证 AI 生成代码的行为，累计编写 **900+ 项无头回归测试**，覆盖联机、作物交互、商店、教程、战斗及时间推进等核心流程。

### **美团 | 餐饮 SaaS 事业部 | 前端开发**（2023.09 - 2026.03）项目详情：[pos.meituan.com](https://pos.meituan.com), APP: [美团管家](https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%A2%E7%AE%A1%E5%AE%B6/id1474035355)

**技术栈：React + TypeScript + React Native + 低代码（JSON Schema / 物料）+ 权限与实时消息**

- **核心业务**：负责<mark>百万级</mark>用户的美团管家中，门店档案、员工账号、消息中心等模块。通过异常监控和用户行为埋点，及时定位问题并修复问题。
- **低代码物料**：注入高性能物料，页面结构用 JSON 描述，UI 配置和逻辑动态注入分开。搭建美团管家海外版订单中心、收钱箱、退菜。自研 i18n 提取与翻译插件，把文案从业务代码里抽离，国际化适配成本降低 **40%**。
- **账号与安全**：独立负责员工账号、风控接入和 **SSO**。接入美团风控后拦截约<mark> **99.9%**</mark> 非法请求。打通飞书 OAuth，PC 端账号与飞书同步。
- **消息中心**：主导 PC 消息升级，接入基于 WebSocket 的 Pike2，服务端秒级推送。高频弹窗按优先级调度，避免并发通知把主线程打满。方案沉淀为管家 PC 的统一消息通道。

### **上海微创软件（北京）| 前端开发**（2022.07 - 2023.08）| 多媒体评测平台

**技术栈：React + TypeScript + Node.js + 微前端 + Three.js + D3.js**

- **微前端升级**：主导多媒体评测平台从 Eden0 迁到 Eden2，补齐样式隔离、JS 沙箱和子应用通信，页面加载速度提升 **35%**。
- **三维与可视化**：用 **Three.js + GSAP** 做全景 VR 实验室；用 **D3.js** 自绘时序图和流程图，解决海量节点卡顿。
- **自动化**：编写采集脚本，双月入库 **3 万+** 视频数据，把重复搬运从人工里拿掉。

### **北京新浪 | 弹性云 | 前端实习**（2021.09 - 2022.06）

**技术栈：Vue 2/3 + Vuex + WebView**

- 封装 NTable 并发布到公司私有 npm，作为运维后台的列表标准件。
- 懒加载加虚拟渲染，千级 Label 页响应从 **4s 降到 1s**。用 Vue 3 + Vant 做运维告警 WebView。

## 教育背景

- 2020.09 - 2021.09 北京交通大学 计算机科学与技术 交流生
- 2018.09 - 2022.06 北京交通大学海滨学院 计算机科学与技术 统招本科

