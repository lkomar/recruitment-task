import { NextRequest, NextResponse } from 'next/server'

import blog from '@/public/blog.json'
import { DynamicPage } from '../../../types'

export const GET = async (
  request: NextRequest,
  { params }: DynamicPage<{ slug: string }>
) => {
  const post = blog.posts.find((post) => post.slug === params.slug)

  return NextResponse.json(post || {})
}
