import { NextResponse } from 'next/server'

import blog from '@/public/blog.json'

export type Category = (typeof blog.categories)[number]

export const GET = (request: Request) => {
  return NextResponse.json(blog.categories)
}
