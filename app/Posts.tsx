'use client'

import { use } from 'react'
import { PaginatedPosts } from './api/posts/route'
import Card from './Card'
import { Category } from './types'
import { apiUrl, getPostCategoryNames } from './utils'

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
  const { posts } = use(getPosts())

  const categoryNames = (categoryIds: number[]) =>
    getPostCategoryNames(categoryIds, categories)

  return (
    <div className="posts">
      <div className="grid grid-cols-fit justify-center gap-8 p-12">
        {posts.map((post) => (
          <Card
            {...post}
            key={post.id}
            categoryNames={categoryNames(post.categories)}
          />
        ))}
      </div>
    </div>
  )
}

export default Posts
