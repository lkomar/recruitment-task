import { NextRequest, NextResponse } from 'next/server'

import blog from '@/public/blog.json'
import { DynamicPage } from '../../../types'

export const GET = async (
  request: NextRequest,
  { params }: DynamicPage<{ categoryId: string }>
) => {
  const posts = blog.posts.filter((post) =>
    post.categories.some((category) => category === parseInt(params.categoryId))
  )

  return NextResponse.json(posts)
}
