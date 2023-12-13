## 多功能工具

这是一个 [Next.js](https://nextjs.org/) 项目 bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

UI 基于 Antd 与 TailwindCSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 📁 app/tools

- `uuid` 获取 uuid
- `base-conversion` 进制转换
- `date-format` 时间格式化
- `id-cards` 身份证校验
- `base64-image` 图片 与 base64 转换
- `hearing-test` 听力范围测试
- `qr-code` 二维码生成

### api

- `/api/uuid`
  获取 uuid
  params：time(search) 生成 uuid 的个数
- `/api/meta/[toolName]`
  获取工具的 meta 信息
