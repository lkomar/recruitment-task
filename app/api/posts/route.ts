import { NextRequest, NextResponse } from 'next/server'

import blog from '@/public/blog.json'

const ITEMS_PER_PAGE = 15

export type Post = (typeof blog.posts)[number]

export interface PaginatedPosts {
  posts: Post[]
  pages: number
}

export const GET = (request: NextRequest) => {
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')
  const offset = page * ITEMS_PER_PAGE

  // I decided to assign posts to new object to avoid mutating
  const posts: Post[] = [...blog.posts].slice(offset - ITEMS_PER_PAGE, offset)

  return NextResponse.json({
    posts,
    pages: Math.ceil(blog.posts.length / ITEMS_PER_PAGE),
  })
}
