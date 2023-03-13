import { NextRequest, NextResponse } from 'next/server'

import blog from '@/public/blog.json'
import { paginationUtils } from '@/app/utils'

export type Post = (typeof blog.posts)[number]

export interface PaginatedPosts {
  posts: Post[]
  pages: number
}

export const GET = (request: NextRequest) => {
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')

  const { limit, offset } = paginationUtils

  // I decided to assign posts to new object to avoid mutating
  const posts: Post[] = [...blog.posts].slice(
    offset(page) - limit,
    offset(page)
  )

  return NextResponse.json({
    posts,
    pages: Math.ceil(blog.posts.length / limit),
  })
}
