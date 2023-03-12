'use client'

import { useSearchParams } from 'next/navigation'
import { use } from 'react'

import { PaginatedPosts } from './api/posts/route'
import Card from './Card'
import Pagination from './Pagination'
import { Category } from './types'
import { apiUrl, getPostCategoryNames, makeQueryClient } from './utils'

const getPosts = async (page?: number): Promise<PaginatedPosts> => {
  const response = await fetch(
    `${apiUrl}/api/posts${page ? `?page=${page}` : ''}`
  )

  return response.json()
}

interface Props {
  categories: Category[]
}

const Posts = ({ categories }: Props) => {
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')

  const queryClient = makeQueryClient<PaginatedPosts>()

  const { posts, pages } = use(queryClient('posts', getPosts(page)))

  const categoryNames = (categoryIds: number[]) =>
    getPostCategoryNames(categoryIds, categories)

  return (
    <>
      <Pagination page={page} maxPages={pages} />
      <div className="grid grid-cols-fit justify-center gap-8 p-12">
        {posts.map((post) => (
          <Card
            {...post}
            key={post.id}
            categoryNames={categoryNames(post.categories)}
          />
        ))}
      </div>
    </>
  )
}

export default Posts
