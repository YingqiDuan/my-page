// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
// 如果你要集成 SendGrid 或其他邮件服务，请在这里导入并配置

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // 示例：简单地在服务器端打印表单数据
  console.log('接收到的表单数据:', { name, email, message })

  // TODO: 在这里集成邮件服务或将数据存储到数据库

  // 返回成功响应
  return NextResponse.json({ success: true, message: '表单已成功提交！' })
}
