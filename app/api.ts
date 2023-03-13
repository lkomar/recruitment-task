import { Category } from './api/categories/route'
import { PaginatedPosts, Post } from './api/posts/route'
import { apiUrl } from './utils'

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${apiUrl}/api/categories`)

  return response.json()
}

export const getPosts = async (page?: number): Promise<PaginatedPosts> => {
  const response = await fetch(
    `${apiUrl}/api/posts${page ? `?page=${page}` : ''}`
  )

  return response.json()
}

export const getPost = async (slug: string): Promise<Post> => {
  const response = await fetch(`${apiUrl}/api/post/${slug}`)

  return response.json()
}
