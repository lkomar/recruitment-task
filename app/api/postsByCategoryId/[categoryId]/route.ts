import { NextRequest, NextResponse } from 'next/server'

import blog from '@/public/blog.json'
import { DynamicPage } from '@/app/types'
import { paginationUtils } from '@/app/utils'
import { Post } from '@/app/api/posts/route'

/**
 * I'm using id in request params instead of name since normlly
 * I wouldn't be sure if names are unique even if they might be SEO
 * friendly
 */
export const GET = async (
  request: NextRequest,
  { params }: DynamicPage<{ categoryId: string }>
) => {
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1')
  const { limit, offset } = paginationUtils

  const categoryPosts = blog.posts.filter((post) =>
    post.categories.some((category) => category === parseInt(params.categoryId))
  )

  const posts: Post[] = [...categoryPosts].slice(
    offset(page) - limit,
    offset(page)
  )

  return NextResponse.json({
    posts,
    pages: Math.ceil(categoryPosts.length / limit),
  })
}
