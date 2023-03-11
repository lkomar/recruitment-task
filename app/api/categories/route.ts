import { NextResponse } from 'next/server'

import blog from '@/public/blog.json'

export const GET = (request: Request) => {
  return NextResponse.json(blog.categories)
}
